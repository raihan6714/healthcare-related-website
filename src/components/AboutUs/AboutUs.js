import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <>
            <div className="container my-4">
                <h2 className="text-center subtitle-01">About Us</h2>
                <div className="row">
                    <div className="col-lg-6">
                        <img src="https://livewp.site/html/optima/img/about_me/about_me_img.png" alt="" className="img-fluid" />
                    </div>
                    <div className="col-lg-6">
                        <h2 className="subtitle-01">WE ARE PRIVATE PSYCHIATRY CLINIC</h2>
                        <h3 className="title-02">We Are The Best
                            <span> in Psychiatry</span>
                        </h3>
                        <p className="about-text">We are a group of professional and experienced psychologists and psychiatrists offering private psychological therapy and psychiatry.</p>
                        <div className="my-4">
                            <div className="d-flex justify-content-between">
                                <span>PSYCHOLOGY</span>
                                <span>80%</span>
                            </div>
                            <div className="progress">
                                <div className="progress-bar bg-info" role="progressbar" style={{ width: "80%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="my-4">
                            <div className="d-flex justify-content-between">
                                <span>NEUROLOGY</span>
                                <span>70%</span>
                            </div>
                            <div className="progress">
                                <div className="progress-bar bg-warning" role="progressbar" style={{ width: "70%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="my-4">
                            <div className="d-flex justify-content-between">
                                <span>PSYCHIATRY</span>
                                <span>92%</span>
                            </div>
                            <div className="progress">
                                <div className="progress-bar bg-success" role="progressbar" style={{ width: "92%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="text-center fs-4 mb-2 text-secondary">
                                <span>AVARAGE RATE</span>
                            </div>
                            <div className="progress">
                                <div className="progress-bar bg-info" role="progressbar" style={{ width: "35%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                <div className="progress-bar bg-warning" role="progressbar" style={{ width: "25%" }} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                                <div className="progress-bar bg-success" role="progressbar" style={{ width: "40%" }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default AboutUs;