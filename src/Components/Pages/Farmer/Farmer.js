import React, { useEffect, useState } from 'react';
import Loading from '../../Share/Loading';
import FarmerCard from './FarmerCard';

const Farmer = () => {
    const [farmers, setFarmers] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('http://localhost:5000/farmers')
            .then(response => response.json())
            .then(data => {
                setFarmers(data)
                setLoading(false)
            })


    }, [])
    return (
        <div>
            <div className='mt-5'>
                <>

                    {
                        loading ? <Loading></Loading> : <div>
                            <div className='container ' >
                                <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4  '>
                                    {
                                        farmers.map(farmer => (<FarmerCard
                                            farmer={farmer}
                                            key={farmer._id}




                                        ></FarmerCard>))
                                    }
                                </div>
                            </div>
                        </div>
                    }

                </>
            </div>
        </div>
    );
};

export default Farmer;