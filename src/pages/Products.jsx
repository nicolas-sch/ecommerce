import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/action';
import Skeleton from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";
import Modal from '../components/Modal';

export default function Products() {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    let componentMounted = true;

    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addItem(product));
    }

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if(componentMounted){
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter);
            }

            return () => {
                componentMounted = false;
            }
        }

        getProducts();
    }, [])

    const Loading = () => {
        return(
            <>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
            </>
        )
    };

    const filterProduct = (cat) => {
        const updateList = data.filter((x) => x.category === cat);
        setFilter(updateList);
    }

    const ShowProducts = () => {
        return(
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>All</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>Men's Cloathing</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>Women's Cloathing</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}>Jewelery</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")}>Electronic</button>
                </div>
                {filter.slice(0, 15).map((product) => {
                    return(
                        <>
                            <div className="col-md-3 mb-4">
                                <div class="card h-100 text-center p-4" key={product.id}>
                                    <img src={product.image} class="card-img-top" alt={product.title} height="250px" />
                                    <div class="card-body">
                                        <h5 class="card-title">{product.title.substring(0, 12)}...</h5>
                                        <p class="card-text fw-bold">
                                            ${product.price}
                                        </p>
                                        <button 
                                            to="/cart" 
                                            className="btn btn-outline-dark px-4 py-2" 
                                            onClick={() => {
                                                addProduct(product); 
                                                setOpenModal(true)
                                            }}
                                        >
                                            Add to cart
                                        </button>
                                    </div>
                                </div>
                                <Modal 
                                    open={openModal} 
                                    onClose={() => setOpenModal(false)}
                                    width="100px"
                                />
                            </div>
                        </>
                    )
                })}
            </>
        )
        
    }

    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
                        <hr />
                    </div>
                    <div className="row justify-content-center">
                        {loading ? <Loading /> : <ShowProducts />}
                    </div>
                </div>
            </div>
            
        </div>
    )
}
