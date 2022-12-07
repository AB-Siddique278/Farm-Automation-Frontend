import React, { useEffect, useState } from 'react';
import Loading from '../../Share/Loading';
import ConaumerCatrd from './ConaumerCatrd';

const Consumer = () => {

    const [consumers, setConsumers] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('http://localhost:5000/consumers')
            .then(response => response.json())
            .then(data => {
                setConsumers(data)
                setLoading(false)
            })


    }, [])
    return (
        
            <>
                

                {
                    loading ? <Loading></Loading> : <div>
                        <div className='container ' >
                            <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 '>
                                {
                                    consumers.map(consumer => (<ConaumerCatrd
                                        consumer={consumer}
                                        key={consumer._id}




                                    ></ConaumerCatrd>))
                                }
                            </div>
                        </div>
                    </div>
                }

            </>
        
    );
};

export default Consumer;