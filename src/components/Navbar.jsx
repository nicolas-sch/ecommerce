import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar () {
    const state = useSelector((state) => state.handleCart)
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold fs-4" to="/">
                        E-commerce
                    </NavLink>
                    <NavLink className="nav-link active" aria-current="page" to="/">
                        Home
                    </NavLink>
                    <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                        <i className="fa fa-shopping-cart me-1" />
                        Cart({state.length})
                    </NavLink>
                </div>
            </nav>
        </>
    )
}
