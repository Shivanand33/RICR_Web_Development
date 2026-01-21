import React from "react";
import image from "../assets/images.png";


const Navbar = () => {
  return (
    <>
    <div className="bg-amber-100 py-2 px-2 lg:flex md:flex flex-wrap items-center justify-between shadow-md">
  <div className= "left">
    <h1 className="text-2xl font-bold text-center">Food App</h1>
  </div>
  <div className="right flex justify-center">
   <img src={image} alt="" className="rounded-full w-15"/>
  </div>
    </div>
      
    </>
  );
};

export default Navbar;
