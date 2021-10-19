import React, { useEffect, useState } from 'react';
import Products from './Products/Products';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('/shop.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return (
        <div>
            <div className="mx-4 my-4 bg-light">
                <div className="text-center mb-4 pt-4">
                    <h5>We Have Some Books</h5>
                    <h2>Our <span className=""> Popular Books</span></h2>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-4 mx-2">
                    {/* render service from server side */}
                    {
                        products.map(product => <Products
                            key={product.key}
                            product={product}
                        ></Products>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Shop;