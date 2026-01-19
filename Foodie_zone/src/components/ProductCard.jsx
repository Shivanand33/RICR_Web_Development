import React from "react";

const ProductCard = ({ allFood, loading }) => {
  if (loading) return <h1 className="text-center">Loading...</h1>;

  if (!allFood.length) {
    return <h1 className="text-center">No results found 😕</h1>;
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
