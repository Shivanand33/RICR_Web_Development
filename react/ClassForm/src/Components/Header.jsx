import React from "react";
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <>
      <div className="flex w-full bg-green-400 text-white p-3 justify-between items-center fixed top-0   ">
        <h3 className="text-3xl font-bold">My Website</h3>
        <div className="flex gap-3">
          <Link to={"/"} className="text-decoration-none font-bold hover text-2xl text-light hover:text-red-400 active:text-green-400">
            Home
          </Link>
          <Link to={"/ragister"} className="text-decoration-none font-bold text-2xl text-light hover:text-red-400  active:text-green-400">
            Ragister
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
