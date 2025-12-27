import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="d-flex bg-danger align-content-center justify-content-between">
        <h1 className="text-light fs-4">My Website</h1>
        <div className="d-flex align-items-center gap-3">
          <Link to={"/"} className="text-decoration-none text-light btn btn-group-vertical">
            Home
          </Link>
          <Link to={"/producr"} className="text-decoration-none text-light">
            Product
          </Link>
          <Link to={"/about"} className="text-decoration-none text-light">
            About
          </Link>
          <Link to={"/contact"} className="text-decoration-none text-light">
            Contact 
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
