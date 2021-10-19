import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <>
            <div className="mx-4">
                <div className="row">
                    <div className="col-sm-6 col-md-4 banners-promo-01">
                        <h3 className="banners-promo-01__title">For Adults</h3>
                        <div className="banners-promo-01__text">
                            <p>You can call our highly experienced clinical team if your child, teenager or family is going through difficulties.</p>
                        </div>
                        <ul className="banners-promo-01__list">
                            <li>Anxiety</li>
                            <li>Depression</li>
                            <li>Bipolar Disorder</li>
                            <li>ADHD</li>
                            <li>A – Z of Issues</li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-4 banners-promo-02">
                        <h3 className="banners-promo-02__title">For Children</h3>
                        <div className="banners-promo-02__text">
                            <p>You can call our highly experienced clinical team if your child, teenager or family is going through difficulties.</p>
                        </div>
                        <ul className="banners-promo-02__list">
                            <li>ADHD</li>
                            <li>Aspergers and Autism</li>
                            <li>Depression</li>
                            <li>Anxiety Disorders</li>
                            <li>A-Z of Issues</li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-4 banners-promo-01">
                        <h3 className="banners-promo-01__title">For Business</h3>
                        <div className="banners-promo-01__text">
                            <p>You can call our highly experienced clinical team if your child, teenager or family is going through difficulties.</p>
                        </div>
                        <ul className="banners-promo-01__list">
                            <li>Medico Legal Reports</li>
                            <li>Occupational Health</li>
                            <li>Locums and Staffing</li>
                            <li>Neuropsychological Assessments</li>
                            <li>Mental Capacity Assessments</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;