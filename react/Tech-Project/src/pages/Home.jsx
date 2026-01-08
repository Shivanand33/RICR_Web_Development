import React from "react";
import { Link } from "react-router-dom";
import photo from "../assets/tisart.avif.jpg";
import { GiCupidonArrow } from "react-icons/gi";
import pic from "../assets/back.jpg";

const Home = () => {
  return (
    <>
      <section className=" flex items-center border-1 border-amber-50 shadow  bg-white  p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full">
          {/* text */}
          <div className="space-y-4 ms-2 md:ms-8">
            <h1 className="hover:scale-105 transition duration-2000 text-5xl flex md:text-6xl font-extrabold text-gray-900">
              Start Shopping{" "}
              <p className="text-red-500 hover:scale-120 transition duration-500">
                <GiCupidonArrow />
              </p>
            </h1>

            <h2 className="hover:scale-105 transition duration-2000 text-4xl md:text-5xl font-bold text-red-500">
              And Enjoy
            </h2>

            <h3 className="hover:scale-105 transition duration-2000 text-3xl md:text-4xl font-semibold text-yellow-500">
              All Collections 🛍️
            </h3>

            <p className="hover:scale-105 transition duration-2000 text-gray-600 max-w-md mt-4">
              Discover the latest trends with premium quality and unbeatable
              prices.
            </p>

            <Link
              to={"Product"}
              className="hover:scale-105 mt-6 px-8 py-3 bg-black text-white rounded-xl shadow-lg hover:bg-gray-800 transition duration-300"
            >
              Shop Now
            </Link>
          </div>

          {/* image */}
          <div className="flex justify-center">
            <img
              src={photo}
              alt="Shopping Banner"
              className="w-[450px] ms-6 md:ms-24 rounded-2xl shadow-xl hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </section>

      <section className=" min-h-screen  bg-gray-100 py-10">
        <div className="p-5 ms-2 md:ms-8">
          <div className="text-3xl mb-4 font-bold">Shop ny Catogery</div>
          <div className="mb-4 flex gap-6">
            <button className="hover:scale-105 duration-1200 transition px-35  py-3 bg-white rounded-2xl shadow-2xl">
              Man
            </button>
            <button className="hover:scale-105 duration-1200 transition px-35  py-3 bg-white rounded-2xl shadow-2xl">
              Woman
            </button>
            <button className="hover:scale-105 duration-1200 transition px-35  py-3 bg-white rounded-2xl shadow-2xl">
              Kid
            </button>
            <button className="hover:scale-105 duration-1200 transition px-35  py-3 bg-white rounded-2xl shadow-2xl">
              Electronics
            </button>
          </div>
        </div>
        <div className="text-3xl mt-15 ms-3 md:ms-12 font-bold">
          Trending Product🔥
        </div>
        <div className="p-10 grid  grid-cols-1 md:grid-cols-4 gap-10 items-center justify-center">
          <div className="container hover:scale-110 duration-1200 transition py-2 mb-4 rounded-2xl grid items-center justify-center shadow-2xl w-85 ">
            <div className="shadow-xl rounded w-80  h-auto overflow-hidden">
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
          <div className="container py-2 hover:scale-110 duration-1200 transition mb-4 rounded-2xl grid items-center justify-center shadow-2xl w-85 ">
            <div className="shadow-xl rounded w-80  h-auto overflow-hidden">
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
          <div className="container py-2 hover:scale-110 duration-1200 transition mb-4 rounded-2xl grid items-center justify-center shadow-2xl w-85 ">
            <div className="shadow-xl rounded w-80  h-auto overflow-hidden">
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
          <div className="container py-2 hover:scale-110 duration-1200 transition mb-4 rounded-2xl grid items-center justify-center shadow-2xl w-85 ">
            <div className="shadow-xl rounded w-80  h-auto overflow-hidden">
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
        <div className=" bg-orange-400 rounded-2xl flex items-center justify-center ms-3 md:ms-12 w-360 h-60 ">
          <div className="text-4xl font-bold text-white  text-center hover:scale-110 duration-1200 transition">
            🔥 Big Sale - Up to 50% OFF
          </div>
        </div>

        <div className="p-15 ">
          <div className="text-3xl mb-4 font-bold">Why Choose Us</div>
          <div className="mb-4 flex font-semibold  gap-6">
            <button className="hover:scale-105 duration-1200 transition px-35  py-3 bg-white rounded-2xl shadow-2xl">
              FreeDilivery
            </button>
            <button className="hover:scale-105 duration-1200 transition px-35  py-3 bg-white rounded-2xl shadow-2xl">
              COD
            </button>
            <button className="hover:scale-105 duration-1200 transition px-35  py-3 bg-white rounded-2xl shadow-2xl">
              EasyReturn
            </button>
            <button className="hover:scale-105 duration-1200 transition px-35  py-3 bg-white rounded-2xl shadow-2xl">
              SecurePay
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
