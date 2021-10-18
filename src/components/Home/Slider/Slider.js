import React from 'react';
import './Slider.css';

const Banner = () => {
    return (
        <>
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src="https://livewp.site/html/optima/img/home_page/img_box_04.jpg" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h2 className="text-white">A Strong Image of
                                Yourself is Our Success</h2>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="https://www.carrgomm.org/handlers/getimage.ashx?idmf=de53a9c0-1f7f-4ad3-a945-30079e019d8f&w=1600&h=700&f=1" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h2 className="text-dark">A Strong Image of
                                Yourself is Our Success</h2>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.carrgomm.org/handlers/getimage.ashx?idmf=73271714-730e-40b0-a789-54e9de35326c&w=1600&h=700&f=1" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h2 className="text-white">WE ARE PRIVATE PSYCHIATRY & THERAPY CLINIC</h2>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
};

export default Banner;