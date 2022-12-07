import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Share/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import About from './Components/Pages/About/About';
import Contacts from './Components/Pages/Contacts/Contacts';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import AddFarmer from './Components/Pages/Farmer/AddFarmer';
import AddConsumer from './Components/Pages/Consumer/AddConsumer';
import Consumer from './Components/Pages/Consumer/Consumer';
import Footer from './Components/Share/Footer';
import Login from './Components/Pages/Login/Login';
import SignUp from './Components/Pages/Login/SignUp';


function App() {
  return (
    <div className='md:px-20 mr-3 ml-3'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/consumer" element={<Consumer />} />

        <Route path="/dashboard" element={<Dashboard />} >
        <Route index element={<AddFarmer></AddFarmer>}></Route>
        <Route path='addconsumer' element={<AddConsumer></AddConsumer>}></Route>
        
          
          
        </Route>
        
        
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
         
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
