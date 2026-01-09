import React from 'react'
 import { Link } from 'react-router-dom';
const Header = () => {
  return (
     <>
   <nav className="
  bg-white
  flex flex-col md:flex-row
  items-center
  justify-between
  px-4 md:px-10
  py-3
  w-full
  border-b border-gray-300
">
  {/* Logo */}
  <div className="text-2xl md:text-3xl font-bold mb-2 md:mb-0">
    <span className="text-yellow-500">Mon</span>
    <span className="text-red-500">ke</span>
    <span className="text-black">y</span>
  </div>

  {/* Search */}
  <div className="w-full md:w-auto mb-2 md:mb-0">
    <input
      type="text"
      placeholder="Search product"
      className="
        w-full md:w-80
        border
        p-2
        rounded-full
        focus:outline-none
        focus:ring-2 focus:ring-orange-400
      "
    />
  </div>

  {/* Links */}
  <div className="flex gap-3 items-center">
    <Link to="/" className="text-lg font-semibold">
      Home
    </Link>

    <Link
      to="/register"
      className="
        text-lg
        px-4 py-2
        rounded-full
        shadow-lg
        border
        hover:bg-orange-100
        transition
      "
    >
      Register
    </Link>
  </div>
</nav>

     </>
  );
};

export default Header;