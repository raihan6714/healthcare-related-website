import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../../hook/useFirebase';

const Navbar = () => {
    const { user, logOut } = useFirebase();
    return (
        <div className="mx-4">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src="https://livewp.site/html/optima/img/logo.png" alt="" width="200" height="50" className="d-inline-block align-text-top" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contacts">Contacts</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/shop">Shop</Link>
                            </li>
                        </ul>
                        {
                            user.email ? <h4 className="nav-link text-success mt-2"> <b className="text-primary">User Name:</b> {user.displayName}</h4> : <p></p>
                        }
                        <div className="navbar-text">
                            {
                                user.email ?
                                    <Link to="/login">
                                        <button type="button" className="btn btn-outline-primary" onClick={logOut}>Logout</button>
                                    </Link>
                                    :
                                    <Link to="/login">
                                        <button type="button" className="btn btn-outline-primary">Login</button>
                                    </Link>
                            }

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;