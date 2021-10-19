import React, { useEffect, useState } from 'react';
import SingleService from './SingleService/SingleService';

const AllServices = () => {
    const [allservices, setAllServices] = useState([]);
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setAllServices(data))
    }, []);
    return (
        <>
            <div className="mx-4 my-4 bg-light">
                <div className="text-center mb-4 pt-4">
                    <h5>WHAT WE OFFER FOR YOU</h5>
                    <h2>Our all Therapies <span className="">& Treatments</span></h2>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-4 mx-2">
                    {/* render service from server side */}
                    {
                        allservices.map(allsrvc => <SingleService
                            key={allsrvc.key}
                            allsrvc={allsrvc}
                        ></SingleService>)
                    }
                </div>
            </div>
        </>
    );
};

export default AllServices;