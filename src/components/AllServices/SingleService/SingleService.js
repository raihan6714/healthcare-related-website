import React from 'react';
import { Link } from 'react-router-dom';

const SingleService = (props) => {
    const { key, name, img, desc, price } = props.allsrvc;
    return (
        <>
            <div className="col">
                <div className="card">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title fs-2 hover">{name}</h5>
                        <p className="card-text">{desc.slice(0, 100)}</p>
                        <div className="d-flex justify-content-between">
                            <p className="card-text fs-4">Price:${price}</p>
                            <Link to={`/serviceDetails/${key}`}>
                                <button type="button" className="btn btn-primary">See Details</button>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleService;