import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
               <div className='mt-5 px-10'>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <h2>Dashboard </h2>
                    <Outlet></Outlet>
                   

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        
                        <li> <Link to="/dashboard"><span className=' text-xl'></span> <p className=' text-lg '>Add farmer</p></Link></li>
                        <li><Link to="/dashboard/addconsumer"> <span className=' text-xl'></span> <p className=' text-lg '>Add consumer</p></Link></li>

                       
                        
                    </ul>

                </div>
            </div>
        </div>
        </div>
    );
};

export default Dashboard;