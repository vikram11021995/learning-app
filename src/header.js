import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="container">
            <div className="row">
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <Link className="navbar-brand" to="/">navbar</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/book">Book</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/user">User</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/product">Product</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/customer">Customer</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/state1">State-1</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/state2">St-2</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/state3">St-3</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/state4">2d-State</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/state5">St-5</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/books">Books</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/apione">apiOne</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/apitwo">apiTwo</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/state11">St-11</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/state12">St-12</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/state13">St-13</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/myapi1">Api1</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/myapi2">Api2</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/myapi3">Api3</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Header;