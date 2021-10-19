import React, { useEffect, useState } from 'react';
import Services from '../Home/Services/Services';

const ServiceDetalis = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setData(data));
    }, []);
    return (

        <>
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="..." className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceDetalis;