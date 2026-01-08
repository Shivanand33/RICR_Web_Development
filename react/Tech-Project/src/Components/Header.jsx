import React from 'react'
 import { Link } from 'react-router-dom';
const Header = () => {
  return (
     <>
     <nav className='bg-white-400 flex items-center p-2 justify-between w-full  py-2  bottom-1 border-1  border-gray-300'>
        <div className='text-3xl ms-10 font-bold'>  
        <span className=' text-yellow-500'>Mon</span>
        <span className=' text-red-500'>ke</span>
        <span className=' text-black-300'>y</span>
         
        </div>
        <div>
         <input type="text" name="search" id="search" placeholder='search product' className='border-1 p-1 rounded-3xl w-3xl' />
        </div>

        <div className='me-10 flex gap-2 items-center'>
            <Link to={"/"} className=" text-xl font-semibold">Home</Link>
            <Link to={"register"} className='text-xl  bg-white-300 w-30 p-2 text-center outline-2  shadow-2xl outline-blue-400 rounded-3xl border-cyan-100  focus:outline-cyan-100'>Register</Link>
             
        </div>
     </nav>
     </>
  );
};

export default Header;