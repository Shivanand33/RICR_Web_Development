import React from "react";
import Lottie from "lottie-react";
import shiva from "../assets/animation/Confani.json";
import food from "../assets/animation/Food.json";

const ProductCard = ({ allFood, loading }) => {
  if (loading) return <h1 className="text-center"> <Lottie  animationData={shiva}  loop={false} speed={0.5}  className="absolute -top-50 left-50 " /> </h1>;

  if (!allFood.length) {
    return <h1 className="text-center"><Lottie animationData={food} className="w-full max-w-2xl -top-10 mx-auto sm:w-2xl sm:ms-20 md:ms-40 lg:ms-80 "/></h1>;
  }

  return (
    <div className="main px-4 flex flex-wrap p-4">
      {allFood.map((item) => (
        <div key={item.idMeal} className="md:w-1/4 p-3 w-full">
          <div className="contact bg-yellow-100 p-4 rounded-xl border border-gray-600">
            <img
              src={item.strMealThumb}
              alt={item.strMeal}
              className="rounded-xl w-full mb-2"
            />
            <h1 className="text-lg font-bold">{item.strMeal}</h1>
            <p className="text-sm mt-1">
              {item.strArea} – {item.strCategory}
            </p>

            <div className="flex justify-between mt-3">
              <button className="px-5 py-1.5 text-white bg-purple-600 rounded-lg">
                Add to cart
              </button>
              <button className="px-5 py-1.5 text-white bg-red-500 rounded-lg">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
