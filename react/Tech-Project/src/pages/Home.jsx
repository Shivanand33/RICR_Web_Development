import React from "react";
import photo from "../assets/tisart.avif";
import { GiCupidonArrow } from "react-icons/gi";

const Home = () => {
  return (
    <section className="min-h-screen flex items-center bg-gray-50 px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full">
        {/* text */}
        <div className="space-y-4">
          <h1 className="text-5xl flex md:text-6xl font-extrabold text-gray-900">
            Start Shopping{" "}
            <p className="text-red-500 hover:scale-120 transition duration-500">
              <GiCupidonArrow />
            </p>
          </h1>

          <h2 className="text-4xl md:text-5xl font-bold text-red-500">
            And Enjoy
          </h2>

          <h3 className="text-3xl md:text-4xl font-semibold text-yellow-500">
            All Collections 🛍️
          </h3>

          <p className="text-gray-600 max-w-md mt-4">
            Discover the latest trends with premium quality and unbeatable
            prices.
          </p>

          <button className="hover:scale-105 mt-6 px-8 py-3 bg-black text-white rounded-xl shadow-lg hover:bg-gray-800 transition duration-300">
            Shop Now
          </button>
        </div>

        {/* image */}
        <div className="flex justify-center">
          <img
            src={photo}
            alt="Shopping Banner"
            className="w-[450px] rounded-3xl shadow-2xl hover:scale-105 transition duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
