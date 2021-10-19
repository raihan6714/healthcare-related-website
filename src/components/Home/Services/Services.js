import React, { useEffect, useState } from 'react';
import ServiceCart from '../ServiceCart/ServiceCart';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setServices(data);
            });
    }, []);
    const newServices = services.slice(0, 6);
    return (
        <>

            <div className="mx-4 my-4 bg-light">
                <div className="text-center mb-4 pt-4">
                    <h5>WHAT WE OFFER FOR YOU</h5>
                    <h2>Therapies <span className="">& Treatments</span></h2>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-4 mx-2">
                    {/* render service from server side */}
                    {
                        newServices.map(service => <ServiceCart
                            key={service.key}
                            service={service}
                        ></ServiceCart>)
                    }
                </div>
            </div>
        </>
    );
};

export default Services;