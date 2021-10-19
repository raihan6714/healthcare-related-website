import React from 'react';

const Contacts = () => {
    return (
        <>
            <div className="container my-2">
                <h1 className="text-center text-gray">Contacts Us</h1>
                <div className="row my-2">
                    <div className="col-md-6">
                        <img src="https://image.freepik.com/free-vector/contact-us-concept-landing-page_52683-12860.jpg" alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-6 mt-4">
                        <div className="my-4">
                            <h2><span className="text-primary"><i className="fas fa-envelope-square"></i></span> optima@gmail.com</h2>
                        </div>
                        <div className="my-4">
                            <h2><span className="text-primary"><i className="fas fa-phone"></i> </span>800 326 9160</h2>
                        </div>
                        <div className="my-4">
                            <h2><span className="text-primary"><i className="fas fa-map-marker-alt"></i> </span>455 Wallstreet St., NY, USA</h2>
                        </div>
                        <div className="my-4">
                            <h2><span className="text-primary"><i className="fas fa-house-user"></i> </span>H-20,R-5,USA-1200</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contacts;