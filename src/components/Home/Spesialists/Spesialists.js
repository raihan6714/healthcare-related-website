import React from 'react';
import { Link } from 'react-router-dom';

const Spesialists = () => {
    return (
        <>
            <div className="mx-4 my-4">
                <div className="row gt-4">
                    <div className="col-md-6 col-lg-6">
                        <h2 className="text-center subtitle-01">WE HAVE BEST TEAM</h2>
                        <h3 className="text-center title-02">Meet Our
                            <span> Spesialists</span>
                        </h3>
                    </div>
                    <div className="col-md-6 col-lg-6">
                        <div className="counselling-text-01">
                            <p>We think it’s really important that clinicians have a mixture of clinical skill and human qualities that mean you can place your trust in them. We interview every potential partner in person before we agree to work with them, as well as carrying out rigorous background checks.</p>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="card-group">
                                <div className="card">
                                    <img src="https://livewp.site/html/optima/img/shortcodes/team/team_01.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body text-center">
                                        <h5 className="card-title">Dr. Mikle Haris</h5>
                                        <p className="card-text">Clinical Psychiatrists</p>
                                        <div className="card-text d-flex justify-content-evenly fs-2">
                                            <Link to=""><i className="fab fa-facebook-square"></i></Link>
                                            <Link to=""><i className="fab fa-instagram-square"></i></Link>
                                            <Link to=""><i className="fab fa-twitter-square"></i></Link>
                                            <Link to=""><i className="fab fa-google-plus-square"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <img src="https://livewp.site/html/optima/img/shortcodes/team/team_02.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body text-center">
                                        <h5 className="card-title">Dr. Kate Moriss</h5>
                                        <p className="card-text">Clinical Neurology</p>
                                        <div className="card-text d-flex justify-content-evenly fs-2">
                                            <Link to=""><i className="fab fa-facebook-square"></i></Link>
                                            <Link to=""><i className="fab fa-instagram-square"></i></Link>
                                            <Link to=""><i className="fab fa-twitter-square"></i></Link>
                                            <Link to=""><i className="fab fa-google-plus-square"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <img src="https://livewp.site/html/optima/img/shortcodes/team/team_03.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body text-center">
                                        <h5 className="card-title">Dr. Emma Scott</h5>
                                        <p className="card-text">Clinical Psyhologist</p>
                                        <div className="card-text d-flex justify-content-evenly fs-2">
                                            <Link to=""><i className="fab fa-facebook-square"></i></Link>
                                            <Link to=""><i className="fab fa-instagram-square"></i></Link>
                                            <Link to=""><i className="fab fa-twitter-square"></i></Link>
                                            <Link to=""><i className="fab fa-google-plus-square"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Spesialists;