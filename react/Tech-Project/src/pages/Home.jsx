import React from "react";
import photo from "../assets/tisart.avif";
 
const Home = () => {
  return (
    <>
      <div className="grid grid-cols-2">
         
            
       <div className=" grid text-6xl m-35 ">
          <span className="text-black-200 font-bold  ">Start Shopping</span> 
          <span className="text-red-400 font-bold  ">And Enjaoy</span>
          <span className="text-yellow-400 font-bold  ">All Collections🛍️</span>
        </div>
       
        
        <div className="">
          <img
            src={photo}
            alt=""
            className="w-100 ms-50 m-10 rounded-2xl shadow-2xl"
          />
         
          
          <span className="text-xl">
            {" "}
            
          </span>
        </div>
      </div>
    </>
  );
};

export default Home;
