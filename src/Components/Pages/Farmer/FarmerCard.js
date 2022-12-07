import React from 'react';

const FarmerCard = ({ farmer }) => {
    const { name, number, division, distric, upazila, village, daily_production, daily_quantity, d_unit, present_Store, present_quantity, p_unit } = farmer;

    return (
        <div>
            
            <div className="card  bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{name} </h2>
                    <p>Number: {number} </p>
                    <p>Address: {division}, {distric}, {upazila}, {village} </p>
                    <p>Daily Production: {daily_production}</p>
                    
                    <p>Daily Quantity: {daily_quantity},{d_unit}</p>


                    <p>Present Store: {present_Store}</p>
                    <p>Present Quantity: {present_quantity}, {p_unit}</p>
                    
                    
                </div>
            </div>
        </div>
    );
};

export default FarmerCard;