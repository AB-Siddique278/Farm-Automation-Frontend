import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddFarmer = () => {

    const handleAddfarmer = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const number = event.target.number.value;
        const division = event.target.division.value;
        const distric = event.target.distric.value;
        const upazila = event.target.upazila.value;
        const village = event.target.village.value;
        const daily_production = event.target.daily_production.value;
        const daily_quantity = event.target.daily_quantity.value;
        const d_unit = event.target.d_unit.value;
        const present_Store = event.target.present_Store.value;
        const present_quantity = event.target.present_quantity.value;
        const p_unit = event.target.p_unit.value;

        const addItems ={name, number, division, distric, upazila, village, daily_production, daily_quantity, d_unit, present_Store, present_quantity,p_unit};
        fetch ('http://localhost:5000/farmers',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(addItems)
        })
        .then(res =>res.json())
        .then(data=>{
            console.log('success',data)
            //alert('New items add successfully')
            toast.success('Added product Successfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            event.target.reset()
        })
    }

    
// _id
// 638cabda174e8d90c528e23e
// name
// "Raju"
// number
// "01789848646"
// division
// "Dhaka"
// distric
// "Dhaka"
// upazila
// "Manik gong"
// village
// "Imama nogor"
// daily_production
// "Papa"
// daily_quantity
// "5"
// d_unit
// "Pice"
// present_Store
// "Kumra"
// present_quantity
// "30"
// p_unit
// "Pice"

















    return (
        <div>
            <p className='text-center text-primary text-2xl font-bold'>Add Farmer</p>
            <form onSubmit={handleAddfarmer} class="w-full max-w-lg mx-auto mt-6">
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Name
                        </label>
                        {/* <input
                            name='name'
                            required
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" /> */}
                       


                       <input
                        name='name'
                        required
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />








                    </div>
                    <div class="w-full md:w-1/2 px-3 ">
                        <label
                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                            Mobile Mobil
                        </label>
                        <input
                        name='number'
                        required
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                    </div>
                </div>

                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                            Division
                        </label>

                        {/* <input
                            name='division'
                            required
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque" /> */}
                    
                            

                   


                         <select 
                         name='division'
                         required
                         class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" id="grid-state">
                                <option>Dhaka</option>
                                <option>Barishal</option>
                                <option>Chattogram</option>
                                <option>Khulna</option>
                                <option>Rajshahi</option>
                                <option>Rangpur</option>
                                <option>Mymensingh</option>
                                <option>Sylhet</option>
                        </select>    
                    
                    
                    
                    
                    </div>
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                            District
                        </label>
                        <input
                            name='distric'
                            required
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque" />
                    </div>
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-6">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                            Upazila
                        </label>
                        <div class="relative">

                            <input
                                name='upazila'
                                required
                                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque" />

                           
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-1/2 px-2 mb-6 md:mb-0 mt-6">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                            Village
                        </label>
                        <input
                            name='village'
                            required
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210" />
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                            Daily production
                        </label>

                        <input
                            name='daily_production'
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque" />
                    </div>
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                         Quantity
                        </label>
                        <input
                            name='daily_quantity'
                            required
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque" />
                    </div>

                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                        Unit
                        </label>
                        
                              <select 
                              name='d_unit'
                              required
                              class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" id="grid-state">
                                <option>Kg</option>
                                <option>Litter</option>
                                <option>Pice</option>
                            </select>
                    
                    </div>
                    
                    
                </div>

                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                            Present Store
                        </label>

                        <input
                            name='present_Store'
                            required
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque" />
                    </div>
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                        Quantity
                        </label>
                        <input
                            name='present_quantity'
                            required
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque" />
                    </div>

                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                        Unit
                        </label>
                        
                              <select 
                              name='p_unit'
                              required
                              class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" id="grid-state">
                                <option>Kg</option>
                                <option>Litter</option>
                                <option>Pice</option>
                            </select>
                    
                    </div>
                    
                    
                </div>

                <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-lg text-neutral"> </span>

                            </label>
                            <input  type="submit" 
                            value="add Item"
                             placeholder="Type here" className="btn  w-full" />

                    </div>

               

            </form>
            <ToastContainer />
        </div>
    );
};

export default AddFarmer;


