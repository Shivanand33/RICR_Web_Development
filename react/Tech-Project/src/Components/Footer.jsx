import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800">
        <div className="text-white  items-center justify-around p-10 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h1 className="text-xl font-semibold mb-4">Monkey</h1>
            <h2>Best shopping experriance</h2>
          </div>
          <div>
            <h1 className="text-xl font-semibold mb-4">Links</h1>
            <h2>About</h2>
            <h2>Contact</h2>
          </div>
          <div>
            <h1 className="text-xl font-semibold mb-4">Support</h1>
            <h2>FAQ</h2>
            <h2>Help</h2>
          </div>
          <div>
            <h1 className="text-xl font-semibold mb-4">Social</h1>
            <h2>Instagram</h2>
            <h2>facebook</h2>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
