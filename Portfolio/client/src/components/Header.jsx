import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-blue-400 w-full px-4 py-2 flex justify-center items-center gap-4">
      <h1>Welcome</h1>
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/contact"}>Contact</Link>
      <Link to={"/register"}>Register</Link>
    </div>
  );
};


export default Header;
