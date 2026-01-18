import React from "react";
import photo from "../assets/up.jpg";

const ProductCard = () => {
  return (
    <>
      <div className="main px-4 flex flex-wrap p-4">
        <div className="md:w-1/4 p-3  w-full">
          <div className="contact bg-yellow-100 p-4 rounded-xl border border-gray-600">
            <img src={photo} alt="" className="rounded-xl w-full mb-2 " />
            <h1 className="text-lg font-bold">This is title</h1>
            <h2 className="mb-3">desk</h2>
            <div className="flex justify-between">
              <button className="bg-gray-400 px-5 py-1.5 text-white bg-purple-600 rounded-lg">
                Add to cart
              </button>
              <button className="bg-gray-600 px-5 py-1.5 text-white bg-red-500 rounded-lg">
                Buy Now
              </button>
            </div>
          </div>
        </div>
<div className="md:w-1/4 p-3  w-full">
          <div className="contact bg-yellow-100 p-4 rounded-xl border border-gray-600">
            <img src={photo} alt="" className="rounded-xl w-full mb-2 " />
            <h1 className="text-lg font-bold">This is title</h1>
            <h2 className="mb-3">desk</h2>
            <div className="flex justify-between">
              <button className="bg-gray-400 px-5 py-1.5 text-white bg-purple-600 rounded-lg">
                Add to cart
              </button>
              <button className="bg-gray-600 px-5 py-1.5 text-white bg-red-500 rounded-lg">
                Buy Now
              </button>
            </div>
          </div>
        </div>
<div className="md:w-1/4 p-3  w-full">
          <div className="contact bg-yellow-100 p-4 rounded-xl border border-gray-600">
            <img src={photo} alt="" className="rounded-xl w-full mb-2 " />
            <h1 className="text-lg font-bold">This is title</h1>
            <h2 className="mb-3">desk</h2>
            <div className="flex justify-between">
              <button className="bg-gray-400 px-5 py-1.5 text-white bg-purple-600 rounded-lg">
                Add to cart
              </button>
              <button className="bg-gray-600 px-5 py-1.5 text-white bg-red-500 rounded-lg">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        <div className="md:w-1/4 p-3  w-full">
          <div className="contact bg-yellow-100 p-4 rounded-xl border border-gray-600">
            <img src={photo} alt="" className="rounded-xl w-full mb-2 " />
            <h1 className="text-lg font-bold">This is title</h1>
            <h2 className="mb-3">desk</h2>
            <div className="flex justify-between">
              <button className="bg-gray-400 px-5 py-1.5 text-white bg-purple-600 rounded-lg">
                Add to cart
              </button>
              <button className="bg-gray-600 px-5 py-1.5 text-white bg-red-500 rounded-lg">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
