import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
       
        <nav className="bg-green-500 w-full p-3 flex items-center justify-between">
          <div className="text-3xl flex  text-white items-center justify-center font-bold ">
            <p className="text-3xl shadow  text-yellow-400  font-bold ">
              RICR LO
            </p>
            <p className="shadow text-3xl  text-red-400  font-bold ">GIN F</p>
            <p className="shadow text-3xl  text-white  font-bold ">ORM</p>
          </div>
          <div className=" flex gap-3 text-center rounded-bl-lg">
              
        <Link
              to={"/"}
              className="bg-purple-600 text-white font-bold w-30 rounded-lg  p-2 text-center"
            >
              Home
            </Link>

            <Link
              to={"ricr"}
              className="bg-purple-600 text-white font-bold w-30 rounded-lg  p-2 text-center"
            >
              RICR LOGIN
            </Link>
             <Link
              to={"ragister"}
              className="bg-purple-600 text-white font-bold w-30 rounded-lg  p-2 text-center"
            >
              Ragister
            </Link>
          </div>
        </nav>
       
    </>
  );
};

export default Header;
