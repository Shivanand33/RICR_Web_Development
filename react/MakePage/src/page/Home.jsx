import React from 'react'
import { Link } from 'react-router-dom';
const Home = () => {
  return (

    <>
    <div className='container border-2 border-black w-300 m-10 ms-40  justify-center'>
      <div className=''>
        <h1 className='font-bold text-3xl flex items-center justify-center p-3'>Welcome To Mekup Page</h1>
       
      </div>
      <div className='grid items-center justify-center font-bold text-gray-500'>
        <p>"Elevate your everyday with [Website Name]. We curate the latest trends and timeless essentials, delivered straight to your door.</p>
        <p className='ms-30'>From high-quality craftsmanship to must-have styles, we believe that luxury should be accessible</p>
        <p className='ms-50'>and shopping should be effortless. Discover your new favorites today."</p>
      </div>
         <div className='flex items-center justify-center m-20'>
        <Link to={"Product"} className="bg-purple-500 hover:bg-green-400 active:bg-purple-500 rounded-xl w-30  text-center text-2xl font-bold text-white">Start</Link>
      </div>
      
    </div>
    </>
     
  );
};

export default Home;