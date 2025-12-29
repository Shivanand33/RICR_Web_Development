import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
    <div className='flex   items-center justify-between bg-red-500 p-3'>
        <h1>Welcome</h1>
       <div className='flex gap-5'>
          <Link to={"/"}>Home</Link>
         <Link to={"About"}>About</Link>
          <Link to={"Product"}>Product</Link>
           <Link to={"Contact"}>Contact</Link>
           <Link to={"SingUp"}>SingUp</Link>
       </div>
    </div>
    </>
  );
};

export default Header;