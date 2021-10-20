import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Books = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/shop.json')
            .then(res => res.json())
            .then(data => setData(data));
    }, []);

    const selectItem = data.filter(dt => dt.key === id);
    return (
        <>
            <div className="container py-4">
                <div className="row">
                    <div className="col-md-5 card">
                        <img src={selectItem[0]?.img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-7">
                        <div className="card-body">
                            <h2 className="">THERAPIES NAME : <span className="text-primary mb-4">{selectItem[0]?.name}</span></h2>
                            <h6 className="mb-4">{selectItem[0]?.desc}</h6>
                            <h3><b>PRICE :</b> <span className="text-primary">${selectItem[0]?.price}</span></h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Books;