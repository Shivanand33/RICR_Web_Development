import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-green-400 font-semibold text-white w-full px-4 py-4 flex  justify-between items-center gap-4">
      <h1 className="font-bold">Welcome</h1>

      <div className="flex gap-4">
        <Link to={"/"} className="  hover:text-orange-500 active:text-orange-400">Home</Link>
        <Link to={"/about"} className="  hover:text-orange-500 active:text-orange-400">About</Link>
        <Link to={"/contact"} className="  hover:text-orange-500 active:text-orange-400">Contact</Link>
        <Link to={"/register"} className="  hover:text-orange-500 active:text-orange-400">Register</Link>
      </div>
    </div>
  );
};

export default Header;
