import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../config/Api";
import Loading from "../components/Loading";

const OrderNow = () => {
  const navigate = useNavigate();
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [visible, setVisible] = useState(12);

  const fetchAllRestaurant = async () => {
    setLoading(true);
    try {
      const res = await api.get("/public/allRestaurants");
      setRestaurants(res.data.data);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Unknown Error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllRestaurant();
  }, []);

  const handleResturantClick = (restaurantID) => {
    console.log("restaurant Clicked");
    console.log("OrderNow Page", restaurantID);

    navigate(`/restaurant/${restaurantID}`);
  };
  console.log(restaurants);

  return (
    <>
      <div className="bg-gray-100 p-3 min-h-screen">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-gray-800">Order Now</h1>
          <p className="text-gray-600 mt-2">
            Browse our menu and place your order now!
          </p>
        </div>
        <div className="max-w-7xl mx-auto">
        <div className="mt-6 flex items-center justify-between gap-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search restaurants or cuisine..."
            className="w-full md:w-1/2 p-2 rounded border border-gray-300"
          />
        </div>

        {loading ? (
          <div className="flex items-center justify-center mt-8">
            <Loading />
          </div>
        ) : restaurants && restaurants.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
              {restaurants
                .filter((r) => {
                  if (!query) return true;
                  const q = query.toLowerCase();
                  return (
                    (r.restaurantName || "").toLowerCase().includes(q) ||
                    (r.cuisine || "").toLowerCase().includes(q) ||
                    (r.city || "").toLowerCase().includes(q)
                  );
                })
                .slice(0, visible)
                .map((restaurant) => (
                  <div
                    key={restaurant._id}
                    className="rounded overflow-hidden hover:shadow-lg p-3 bg-white cursor-pointer"
                  >
                    <div onClick={() => handleResturantClick(restaurant._id)}>
                      <div className="w-full h-44 bg-gray-100 rounded-md overflow-hidden flex items-center justify-center">
                        {restaurant.photo && restaurant.photo.url ? (
                          <img
                            src={restaurant.photo.url}
                            alt="restaurant image"
                            className="w-full h-full object-cover"
                            
                          />
                        ) : (
                             
                          <div className="text-gray-500">No image</div>
                        )}
                        
                        
                      </div>

                      <div className="mt-3">
                         <div className="text-lg text-black    shadow-black  font-semibold">
                          {restaurant.restaurantName || "Unnamed Restaurant"}
                        </div>
                        
                        <div className="text-sm text-gray-600 mt-1">
                          {restaurant.address && restaurant.address !== "N/A"
                            ? restaurant.address
                            : restaurant.city || "Location not provided"}
                        </div>
                        <div className="flex gap-2 mt-2 flex-wrap">
                          {(restaurant.cuisine || "")
                            .split(",")
                            .map((c) => c.trim())
                            .filter(Boolean)
                            .slice(0, 3)
                            .map((cusine, idx) => (
                              <span
                                key={idx}
                                className="py-1 px-2 bg-amber-200 rounded-2xl capitalize text-sm"
                              >
                                {cusine.toLowerCase()}
                              </span>
                            ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 flex items-center justify-between">
                      <button
                        onClick={() => handleResturantClick(restaurant._id)}
                        className="py-1 px-3 bg-emerald-500 text-white rounded"
                      >
                        View Menu
                      </button>
                      <div className="text-sm text-gray-500">
                        {new Date(restaurant.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {restaurants.filter((r) => {
              if (!query) return true;
              const q = query.toLowerCase();
              return (
                (r.restaurantName || "").toLowerCase().includes(q) ||
                (r.cuisine || "").toLowerCase().includes(q) ||
                (r.city || "").toLowerCase().includes(q)
              );
            }).length > visible && (
              <div className="flex justify-center mt-6">
                <button
                  onClick={() => setVisible((v) => v + 12)}
                  className="py-2 px-4 bg-blue-600 text-white rounded"
                >
                  Load more
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="mt-8 text-center text-gray-600">No restaurants found.</div>
        )}
        </div>
      </div>
    </>
  );
};

export default OrderNow;