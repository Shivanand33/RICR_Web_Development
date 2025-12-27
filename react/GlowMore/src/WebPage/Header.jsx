import React from "react";

function Header() {
  return (
    <>
      <div className="bg-amber-800">MyWebPage</div>

      <Link to={"/"} className="">
        Home
      </Link>
      <Link to={"/product"} className="">
        Product
      </Link>
      <Link to={"/about"} className="">
        About
      </Link>
    </>
  );
}

export default Header;
