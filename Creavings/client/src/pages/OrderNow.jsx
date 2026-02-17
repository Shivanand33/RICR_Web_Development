import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import api from "../config/Api";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";
// Icons import karein
import { FaArrowRight, FaMapMarkerAlt, FaUtensils, FaPhoneAlt } from "react-icons/fa";

const OrderNow = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [restaurant, setRestaurant] = useState();

  const fetctAllRestaurants = async () => {
    setLoading(true);
    try {
      const res = await api.get("/public/allRestaurants");
      setRestaurant(res.data.data);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Unknown Error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetctAllRestaurants();
  }, []);

  const handleRestaurantClick = (restaurantinfo) => {
    console.log("Restaurant Clicked");
    navigate("/restaurantMenu", { state: restaurantinfo });
  };

  if (loading) {
    return (
      <div className="h-[80vh] flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Restaurants Near You</h1>
        <p className="text-gray-500 mt-2">Discover the best food in your area</p>
      </div>

      {/* Grid Container - Fully Responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {restaurant &&
          restaurant.map((EachRestaurant, idx) => (
            <div
              key={idx}
              onClick={() => handleRestaurantClick(EachRestaurant)}
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col h-full"
            >
              {/* Image Section with Zoom Effect */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={EachRestaurant.photo.url}
                  alt={EachRestaurant.restaurantName}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                {/* Gradient Overlay for better contrast if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Content Section */}
              <div className="p-5 flex-1 flex flex-col">
                {/* Cuisine Tag */}
                <div className="flex items-center gap-2 text-xs font-semibold text-orange-600 bg-orange-50 w-fit px-2 py-1 rounded-md mb-2">
                  <FaUtensils className="text-xs" />
                  <span className="uppercase tracking-wide">{EachRestaurant.cuisine}</span>
                </div>

                {/* Restaurant Name */}
                <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-1 group-hover:text-orange-600 transition-colors">
                  {EachRestaurant.restaurantName}
                </h3>

                {/* Address & Details */}
                <div className="space-y-2 text-sm text-gray-500 mb-4 flex-1">
                  <div className="flex items-start gap-2">
                    <FaMapMarkerAlt className="mt-1 text-gray-400 shrink-0" />
                    <p className="line-clamp-2">
                      {EachRestaurant.address}, {EachRestaurant.city}
                    </p>
                  </div>
                  {/* Phone number optional - clean look ke liye hide bhi kar sakte hain */}
                  <div className="flex items-center gap-2">
                     <FaPhoneAlt className="text-gray-400 text-xs shrink-0" />
                     <p>{EachRestaurant.mobileNumber}</p>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-100 my-3"></div>

                {/* Footer Action */}
                <div className="flex justify-between items-center">
                   <span className="text-gray-400 text-xs">View Details</span>
                   <button className="flex items-center gap-2 text-sm font-bold text-orange-600 group-hover:translate-x-1 transition-transform duration-200">
                    Explore Menu <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default OrderNow;