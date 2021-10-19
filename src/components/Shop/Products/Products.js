import React from 'react';
import { Link } from 'react-router-dom';

const Products = (props) => {
    const { key, name, img, desc, price } = props.product;
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
                            <Link to={`/booksdetails/${key}`}>
                                <button type="button" className="btn btn-primary">Buy Now</button>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Products;