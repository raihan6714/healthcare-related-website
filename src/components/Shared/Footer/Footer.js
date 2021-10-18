import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="mx-4">
            <footer className="pt-5">
                <div className="row">
                    <div className="col-2">
                        <h5>Section</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <Link href="#" className="nav-link p-0 text-muted">Home</Link>
                            </li>
                            <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-muted">Features</Link></li>
                            <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-muted">Pricing</Link></li>
                            <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-muted">FAQs</Link></li>
                            <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-muted">About</Link></li>
                        </ul>
                    </div>

                    <div className="col-2">
                        <h5>Section</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-muted">Home</Link></li>
                            <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-muted">Features</Link></li>
                            <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-muted">Pricing</Link></li>
                            <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-muted">FAQs</Link></li>
                            <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-muted">About</Link></li>
                        </ul>
                    </div>

                    <div className="col-2">
                        <h5>Section</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-muted">Home</Link></li>
                            <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-muted">Features</Link></li>
                            <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-muted">Pricing</Link></li>
                            <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-muted">FAQs</Link></li>
                            <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-muted">About</Link></li>
                        </ul>
                    </div>

                    <div className="col-4 offset-1">
                        <form>
                            <h5>Subscribe to our newsletter</h5>
                            <p>Monthly digest of whats new and exciting from us.</p>
                            <div className="d-flex w-100 gap-2">
                                <label for="newsletter1" className="visually-hidden">Email address</label>
                                <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                                <button className="btn btn-primary" type="button">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="d-flex justify-content-between pt-4 mt-4 border-top">
                    <p>&copy; 2021 Raihan All rights reserved.</p>
                    <ul className="list-unstyled d-flex">
                        <li className="ms-3"><Link className="link-dark" href="#"></Link></li>
                        <li className="ms-3"><Link className="link-dark" href="#"></Link></li>
                        <li className="ms-3"><Link className="link-dark" href="#"></Link></li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export default Footer;