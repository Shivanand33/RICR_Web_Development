import React from "react";

const Navbar = () => {
  return (
    <>
    <div className="bg-amber-100 py-4 px-4 lg:flex md:flex flex-wrap items-center justify-between shadow-md">
  <div className= "left">
    <h1 className="text-2xl font-bold text-center">Food App</h1>
  </div>
  <div className="right">
    <ul className="flex space-x-3 justify-center font-semibold">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Services</li>
    </ul>
  </div>
    </div>
      
    </>
  );
};

export default Navbar;
