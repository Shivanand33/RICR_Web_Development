import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" bg-[var(--color-night)]  border-white   border-b-1  p-6 font-semibold text-white w-full px-4 py-6 flex  justify-between items-center gap-4">
      <h1  className="font-bold ms-20">Welcome</h1>

      <div className="me-20 flex gap-4">
        <Link to={"/"} className="  hover:text-orange-500 active:text-orange-400">Home</Link>
        <Link to={"/about"} className="  hover:text-orange-500 active:text-orange-400">About</Link>
        <Link to={"/contact"} className="  hover:text-orange-500 active:text-orange-400">Contact</Link>
        <Link to={"/register"} className="  hover:text-orange-500 active:text-orange-400">Register</Link>
      </div>
    </div>
  );
};

export default Header;
