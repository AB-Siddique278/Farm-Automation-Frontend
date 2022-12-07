import React from 'react';

const ConaumerCatrd = ({ consumer }) => {
    const { name, number, division, distric, upazila, village, consumer_demand, demand_quantity, demand_unit } = consumer;

    return (
        <div className='mt-5'>
            <div className="card  bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{name} </h2>
                    <p>Number: {number} </p>
                    <p>Address: {division}, {distric}, {upazila}, {village} </p>
                    <p>Consumer_demand: {consumer_demand}</p>

                    <p>Daily Quantity: {demand_quantity},{demand_unit}</p>


                  


                </div>
            </div>
        </div>
    );
};

export default ConaumerCatrd;