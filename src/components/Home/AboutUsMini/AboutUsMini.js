import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="mx-4 bg-light mt-4">
            <div className="row py-4">
                <div className="col-md-6">
                    <div className="home-bg-wrapp">
                        <img src="https://livewp.site/html/optima/img/about_us/about_us_01.jpg" alt="" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="about-us-content-01">
                        <h4 className="subtitle-01">WHO WE ARE</h4>
                        <h3 className="title-02">We Are The Best <span>Support for You</span> </h3>

                    </div>
                    <div className="about-us-text-01 mar-bt-27">
                        <p>Our clinic largest private mental health partnership, with a carefully selected nationwide team of Psychiatrists, Psychologists and Psychotherapists. We only work with highly experienced and capable partners who share our values.</p>
                        <Link className="counselling-btn" to="/about">About Us</Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AboutUs;