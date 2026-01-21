import React from "react";
import { Link } from "react-router-dom";
import photo from "../assets/tisart.avif.jpg";
import { GiCupidonArrow } from "react-icons/gi";
import pic from "../assets/back.jpg";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


const Home = () => {
  return (
    
    <>
     
      <section className="min-h-screen bg-white flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* TEXT */}
            <div className="space-y-4 text-center md:text-left">
              <h1 className="text-4xl sm:text-5xl hover:scale-105 transition duration-2000 md:text-6xl font-extrabold flex justify-center md:justify-start items-center gap-2">
                Start Shopping
                <span className="text-red-500 animate-bounce">
                  <GiCupidonArrow />
                </span>
              </h1>

              <h2 className="text-3xl hover:scale-105 transition duration-2000 sm:text-4xl md:text-5xl font-bold text-red-500">
                And Enjoy
              </h2>

              <h3 className="text-2xl hover:scale-105 transition duration-2000 sm:text-3xl md:text-4xl font-semibold text-yellow-500">
                All Collections 🛍️
              </h3>


              <p className="text-gray-600 hover:scale-105 transition duration-2000 max-w-md mx-auto md:mx-0">
                Discover the latest trends with premium quality and unbeatable
                prices.
              </p>

              <Link
                to="Product"
                className="inline-block mt-6 hover:scale-105 transition duration-2000 px-8 py-3 bg-black text-white rounded-xl shadow hover:bg-gray-800 transition"
              >
                Shop Now
              </Link>
            </div>
          
            {/* IMAGE */}
            <div className="flex justify-center">
              <img
                src={photo}
                alt="Shopping Banner"
                className="w-full hover:scale-105 transition duration-500 max-w-sm sm:max-w-md md:max-w-lg rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-10">
          <h2 className="text-3xl font-bold mb-6">Shop by Category</h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            <Link className="bg-white py-4 rounded-2xl shadow text-center font-semibold hover:scale-105 transition">
              
              Man 
            </Link> 
            <Link className="bg-white py-4 rounded-2xl shadow text-center font-semibold hover:scale-105 transition">
               
              Woman 
            </Link> 
            <Link className="bg-white py-4 rounded-2xl shadow text-center font-semibold hover:scale-105 transition">
              
              Kid 
            </Link> 
            <Link className="bg-white py-4 rounded-2xl shadow text-center font-semibold hover:scale-105 transition">
              
              Electronics 
            </Link> 
          </div>

          <h2 className="text-3xl font-bold mb-6">Trending Products 🔥</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
            <div className="container hover:scale-98 duration-75  transition py-2 mb-4 rounded-2xl grid items-center justify-center shadow-2xl w-72 ">
              <div className="shadow-xl rounded w-64 h-auto overflow-hidden">
                <img src={pic} alt="" className=" object-cover rounded" />{" "}
              </div>
              <div className="grid items-center justify-center">
              
                <div className="font-bold"></div>
                <button
                  to={"Product"}
                  className="hover:scale-105 mt-6 px-8 py-2 bg-yellow-600 text-white rounded-xl shadow-lg hover:bg-gray-800 transition duration-300"
                >
                  Shop Now 
                </button> 
              </div>
            </div>
            <div className="container py-2  hover:scale-98 duration-75 transition mb-4 rounded-2xl grid items-center justify-center shadow-2xl w-72 ">
              <div className="shadow-xl rounded w-64 h-auto overflow-hidden">
                 
                <img src={pic} alt="" className=" object-cover rounded" /> 
              </div>
              <div className="grid items-center justify-center">
                 
                <div className="font-bold"></div>
                <button
                  to={"Product"}
                  className="hover:scale-105 mt-6 px-8 py-2 bg-yellow-600 text-white rounded-xl shadow-lg hover:bg-gray-800 transition duration-300"
                >
                  Shop Now 
                </button>
              </div> 
            </div> 
            <div className="container py-2  hover:scale-98 duration-75 transition mb-4 rounded-2xl grid items-center justify-center shadow-2xl w-72 ">
              <div className="shadow-xl rounded w-64 h-auto overflow-hidden">
               
                <img src={pic} alt="" className=" object-cover rounded" /> 
              </div>
              <div className="grid items-center justify-center">
               
                <div className="font-bold"></div>
                <button
                  to={"Product"}
                  className="hover:scale-105 mt-6 px-8 py-2 bg-yellow-600 text-white rounded-xl shadow-lg hover:bg-gray-800 transition duration-300"
                >
                  Shop Now 
                </button>
              </div> 
            </div> 
            <div className="container py-2  hover:scale-98 duration-75 transition mb-4 rounded-2xl grid items-center justify-center shadow-2xl w-72 ">
              <div className="shadow-xl rounded w-64 h-auto overflow-hidden">
               
                <img src={pic} alt="" className=" object-cover rounded" /> 
              </div>
              <div className="grid items-center justify-center">
                 
                <div className="font-bold"></div> 
                <button
                  to={"Product"}
                  className="hover:scale-105 mt-6 px-8 py-2 bg-yellow-600 text-white rounded-xl shadow-lg hover:bg-gray-800 transition duration-300"
                >
                  Shop Now 
                </button>
              </div> 
            </div> 
          </div>

          {/* SALE BANNER */}
          <div className="bg-orange-400 rounded-2xl flex items-center justify-center mt-16 h-40 md:h-60">
            <h2 className="text-2xl md:text-4xl font-bold hover:scale-110 duration-1200 transition text-white text-center">
              🔥 Big Sale - Up to 50% OFF
            </h2>
          </div>

          {/* WHY CHOOSE US */}
          <h2 className="text-3xl font-bold mt-16 mb-6">Why Choose Us</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Link className="bg-white py-4 rounded-2xl shadow text-center font-semibold hover:scale-105 transition">
              Cod
            </Link> 
            <Link className="bg-white py-4 rounded-2xl shadow text-center font-semibold hover:scale-105 transition">
              
              FreeDelivery
            </Link> 
            <Link className="bg-white py-4 rounded-2xl shadow text-center font-semibold hover:scale-105 transition">
              Kid
            </Link> 
            <Link className="bg-white py-4 rounded-2xl shadow text-center font-semibold hover:scale-105 transition">
              Electronic
            </Link> 
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
