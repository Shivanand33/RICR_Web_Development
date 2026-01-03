import React from 'react'
import { Link } from 'react-router-dom';
 
const Header = () => {
  return (
   <>
     <div className='flex justify-between px-4 py-2 bg-green-500'>
         <h3 className='text-2xl font-bold'>Webpage</h3>
         <div className='flex gap-5'>
            <Link to={"/"} className='text-white text-decoration-none hover:text-blue-500 active:text-amber-300'>Home</Link>
              <Link to={"About"} className='text-white text-decoration-none hover:text-blue-500 active:text-amber-300'>About</Link>
                <Link to={"Product"} className='text-white text-decoration-none hover:text-blue-500 active:text-amber-300'>Product</Link>
                  <Link to={"Contact"} className='text-white text-decoration-none flex  hover:text-blue-500 active:text-amber-300'>Contact</Link>
                  <Link to={"SingUp"} className='text-white text-decoration-none hover:text-blue-500 active:text-amber-300'>SingUp</Link>
         </div>
     </div>
   </>
    
  );
};

export default Header;