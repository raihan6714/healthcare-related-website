import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="mx-4">
            <footer className="container pt-5 bg-gray">
                <div className="row">
                    <div className="col-2">
                        <h5>About Us</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <Link to="/home" className="nav-link p-0 text-muted">Home</Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Link to="/features" className="nav-link p-0 text-muted">Features</Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Link to="/pricing" className="nav-link p-0 text-muted">Pricing</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-2">
                        <h5>Contacts Us</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><Link to="/pricing" className="nav-link p-0 text-muted">Pricing</Link></li>
                            <li className="nav-item mb-2"><Link to="/faq" className="nav-link p-0 text-muted">FAQs</Link></li>
                            <li className="nav-item mb-2"><Link to="/contacts" className="nav-link p-0 text-muted">Contacts</Link></li>
                        </ul>
                    </div>

                    <div className="col-2">
                        <h5>Service</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><Link to="/services" className="nav-link p-0 text-muted">Services</Link></li>
                            <li className="nav-item mb-2"><Link to="/books" className="nav-link p-0 text-muted">Books</Link></li>
                            <li className="nav-item mb-2"><Link to="/about" className="nav-link p-0 text-muted">About</Link></li>
                        </ul>
                    </div>

                    <div className="col-5">
                        <form>
                            <h5>Subscribe to our newsletter</h5>
                            <p>Monthly digest of whats new and exciting from us.</p>
                            <div className="d-flex w-90 gap-2">
                                <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                                <input id="newsletter1" type="text1" className="form-control" placeholder="Email address" />
                                <button className="btn btn-primary" type="button">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="d-flex justify-content-between pt-4 mt-4 border-top">
                    <p>&copy; 2021 Raihan All rights reserved.</p>
                    <ul className="list-unstyled d-flex fs-4">
                        <li className="ms-3">
                            <Link className="link-dark" to="/">
                                <i className="fab fa-twitter-square"></i>
                            </Link></li>
                        <li className="ms-3"><Link className="link-dark" to="/">
                            <i className="fab fa-facebook-square"></i></Link></li>
                        <li className="ms-3"><Link className="link-dark" to="/"><i className="fab fa-linkedin"></i></Link></li>
                        <li className="ms-3"><Link className="link-dark" to="/"><i className="fab fa-instagram-square"></i></Link></li>
                        <li className="ms-3"><Link className="link-dark" to="/"><i className="fab fa-google-plus-square"></i></Link></li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export default Footer;