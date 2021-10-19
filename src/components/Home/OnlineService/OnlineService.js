import React from 'react';
import { Link } from 'react-router-dom';
import './OnlineService.css';
const OnlineService = () => {
    return (
        <>
            <div className="mx-4 my-4">
                <div className="row gy-4">
                    <div className="col-md-6 col-lg-6">
                        <h2 className="text-center subtitle-01">Online session</h2>
                        <h3 className="text-center title-02">Get a Counselling
                            <span>Right Now</span>
                        </h3>
                        <div className="counselling-text-01">
                            <p>Our clinic largest private mental health partnership, with a carefully selected nationwide team of Psychiatrists, Psychologists and Psychotherapists. We only work with highly experienced and capable partners who share our values.</p>
                        </div>
                        <Link className="counselling-btn" to="/">Get now</Link>
                    </div>
                    <div className="col-md-6 col-lg-6">
                        <div className="">
                            <img src="https://livewp.site/html/optima/img/counselling/counselling_01.png" alt="" width="100%" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OnlineService;