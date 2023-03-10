import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addItem, delItem } from '../redux/action/index'


const Cart = () => {
    const state = useSelector((state)=> state.handleCart);
    const dispatch = useDispatch();

    const handleAdd = (item) => {
      dispatch(addItem(item));
    };
    
    const handleDel = (item) => {
      dispatch(delItem(item));
    };

    const cartItems = (product) => {

        return(
          <>
            <div className="px-4 my-5 bg-light rounded-3" key={product.id}>
                <div className="container py-4">
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={product.image} alt={product.title} height="200px" width="180px" />
                        </div>
                        <div className="col-md-4">
                            <h3>{product.title}</h3>
                            <p className="lead fw-bold">
                              {product.qty} X ${product.price} = $
                              {(product.qty * product.price).toFixed(2)}
                            </p>
                            <button
                              className="btn btn-outline-dark me-4"
                              onClick={() => handleDel(product)}
                            >
                              <i className="fa fa-minus"></i>
                            </button>
                            <button
                              className="btn btn-outline-dark"
                              onClick={() => handleAdd(product)}
                            >
                              <i className="fa fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            </>
        );
    }

    const emptyCart = () => {
        return (
            <div className="px-4 my-5 bg-light rounded-3 py-5">
                <div className="container py-4">
                    <div className="row">
                        <h3>Your Cart is Empty</h3>
                    </div>
                    </div>
                </div>
        );
    }

    const totalPrice = () => {
      var total = 0;
      
      const itemList = (item) => {
          total = total + item.price * item.qty;
      }
  
      return (
          <>
              <div className="container my-5">
                  <div className="row g-5">
                      <div className="col-md-5 col-lg-4 order-md-last">
                          <ul className="list-group mb-3">
                              {state.map(itemList)}
  
                              <li className="list-group-item d-flex justify-content-between">
                                  <span>Total (USD)</span>
                                  <strong>${(total).toFixed(2)}</strong>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </>
      )
  }

    return (
        <>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}
            {state.length !== 0 && totalPrice()}
        </>
    )
}

export default Cart