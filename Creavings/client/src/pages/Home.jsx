import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  // Updated data with placeholder images for a realistic look
  const featuredRestaurants = [
    {
      id: 1,
      name: "Spice Kingdom",
      cuisine: "Indian • Curry",
      rating: 4.8,
      deliveryTime: "30-40 min",
      image:
        "https://images.unsplash.com/photo-1585937421612-70a008356f36?w=600&auto=format&fit=crop&q=60",
    },
    {
      id: 2,
      name: "Pizza Paradise",
      cuisine: "Italian • Woodfire",
      rating: 4.5,
      deliveryTime: "25-35 min",
      image:
        "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&auto=format&fit=crop&q=60",
    },
    {
      id: 3,
      name: "Dragon Wok",
      cuisine: "Chinese • Pan Asian",
      rating: 4.6,
      deliveryTime: "35-45 min",
      image:
        "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&auto=format&fit=crop&q=60",
    },
    {
      id: 4,
      name: "Burger Haven",
      cuisine: "American • Fast Food",
      rating: 4.4,
      deliveryTime: "20-30 min",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=60",
    },
  ];

  const popularDishes = [
    {
      id: 1,
      name: "Butter Chicken",
      restaurant: "Spice Kingdom",
      price: 299,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&auto=format&fit=crop&q=60",
    },
    {
      id: 2,
      name: "Margherita Pizza",
      restaurant: "Pizza Paradise",
      price: 349,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1595854341625-f33ee1043138?w=600&auto=format&fit=crop&q=60",
    },
    {
      id: 3,
      name: "Hakka Noodles",
      restaurant: "Dragon Wok",
      price: 249,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&auto=format&fit=crop&q=60",
    },
    {
      id: 4,
      name: "Cheesy Burger",
      restaurant: "Burger Haven",
      price: 199,
      rating: 4.4,
      image:
        "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&auto=format&fit=crop&q=60",
    },
    {
      id: 5,
      name: "Tandoori Platter",
      restaurant: "Spice Kingdom",
      price: 479,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=600&auto=format&fit=crop&q=60",
    },
    {
      id: 6,
      name: "Garlic Bread",
      restaurant: "Pizza Paradise",
      price: 129,
      rating: 4.3,
      image:
        "https://images.unsplash.com/photo-1619531040576-f3045b8274d5?w=600&auto=format&fit=crop&q=60",
    },
  ];

  return (
    <div className="font-sans text-gray-800 bg-gray-50 overflow-x-hidden">
      {/* Hero Section with Asymmetrical Layout & Blob */}
      <section className="relative w-full pt-20 min-h-[90vh] flex items-center bg-white overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-orange-100 to-yellow-50 rounded-bl-[10rem] -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-bold tracking-wide mb-2 shadow-sm">
                🚴 Faster than your hunger
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-gray-900">
                Taste the{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                  Magic
                </span>{" "}
                <br />
                in every Bite.
              </h1>
              <p className="text-xl text-gray-500 max-w-lg leading-relaxed">
                From local bistros to fine dining, get your favorite meals
                delivered fresh and hot in minutes.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => navigate("/order-now")}
                  className="px-8 py-4 bg-orange-600 text-white text-lg font-bold rounded-full shadow-lg hover:bg-orange-700 hover:shadow-orange-500/30 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Order Now 🍽️
                </button>
                <button
                  onClick={() => navigate("/menu")}
                  className="px-8 py-4 bg-white text-gray-700 text-lg font-bold rounded-full shadow-md border border-gray-100 hover:bg-gray-50 transition-all duration-300"
                >
                  View Menu
                </button>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center gap-6 pt-4 text-sm font-medium text-gray-500">
                <div className="flex -space-x-3">
                  <img
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                    src="https://i.pravatar.cc/100?img=1"
                    alt="user"
                  />
                  <img
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                    src="https://i.pravatar.cc/100?img=2"
                    alt="user"
                  />
                  <img
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                    src="https://i.pravatar.cc/100?img=3"
                    alt="user"
                  />
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs">
                    +2k
                  </div>
                </div>
                <p>Happy Eaters this week!</p>
              </div>
            </div>

            {/* Right Visual - Image with floating card */}
            <div className="relative hidden  md:block">
              <div className="relative  z-10">
                <img
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop&q=80"
                  alt="Delicious Food"
                  className="w-full h-[500px] object-cover rounded-3xl shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500"
                />
                {/* Floating Card */}
                <div className="absolute -bottom-10 -left-10 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 animate-bounce">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-2 rounded-full text-green-600">
                      ⏱️
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">30 Min</p>
                      <p className="text-xs text-gray-500">Fast Delivery</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Abstract decorative circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-2 border-orange-200 rounded-full -z-10 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories / Featured Restaurants */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h3 className="text-orange-500 font-bold uppercase tracking-wider mb-2">
              Top Picks
            </h3>
            <h2 className="text-4xl font-bold text-gray-900">
              Featured Restaurants
            </h2>
          </div>
          <button className="hidden md:block text-orange-600 font-semibold hover:text-orange-700">
            See all restaurants &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredRestaurants.map((restaurant) => (
            <div
              key={restaurant.id}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-sm font-bold shadow-sm flex items-center gap-1">
                  ⭐ {restaurant.rating}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-orange-600 transition-colors">
                  {restaurant.name}
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  {restaurant.cuisine}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-400 border-t pt-3 border-dashed">
                  <span className="flex items-center gap-1">
                    🕒 {restaurant.deliveryTime}
                  </span>
                  <span className="flex items-center gap-1">
                    🛵 Free Delivery
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Dishes - Dark Section for Contrast */}
      <section className="py-24 bg-gray-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Trending Dishes 🔥
            </h2>
            <p className="text-gray-400">
              Most ordered items by foodies around you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularDishes.map((dish) => (
              <div
                key={dish.id}
                className="bg-gray-800 rounded-3xl p-4 shadow-lg hover:shadow-orange-500/20 transition duration-300 border border-gray-700 flex flex-col"
              >
                <div className="h-56 w-full rounded-2xl overflow-hidden mb-4 relative">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {dish.restaurant}
                  </div>
                </div>

                <div className="px-2 pb-2 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{dish.name}</h3>
                    <span className="text-yellow-400 font-bold flex items-center gap-1">
                      ⭐ {dish.rating}
                    </span>
                  </div>

                  <div className="mt-auto flex items-center justify-between pt-4">
                    <span className="text-2xl font-bold text-orange-400">
                      ₹{dish.price}
                    </span>
                    <button className="px-4 py-2 bg-white text-gray-900 rounded-xl font-bold hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-md active:scale-95">
                      Add +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Background blobs for dark section */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-orange-600 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-600 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
      </section>

      {/* Why Choose Us - Bento Grid Style */}
      <section className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Why Foodies Love Us?
          </h2>
        </div>

        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-orange-100 flex flex-col items-center text-center hover:-translate-y-2 transition duration-300">
            <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center text-3xl mb-6">
              ⚡
            </div>
            <h3 className="text-xl font-bold mb-3">Super Fast Delivery</h3>
            <p className="text-gray-500">
              Hot food delivered to your doorstep before the cravings fade away.
            </p>
          </div>

          <div className="bg-orange-600 p-8 rounded-3xl shadow-xl shadow-orange-200 flex flex-col items-center text-center transform scale-105 z-10">
            <div className="w-16 h-16 bg-white/20 text-white rounded-2xl flex items-center justify-center text-3xl mb-6 backdrop-blur-sm">
              🛡️
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Safe & Hygienic
            </h3>
            <p className="text-orange-100">
              We ensure strict hygiene checks for all our restaurant partners.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-orange-100 flex flex-col items-center text-center hover:-translate-y-2 transition duration-300">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-3xl mb-6">
              💬
            </div>
            <h3 className="text-xl font-bold mb-3">24/7 Support</h3>
            <p className="text-gray-500">
              Got an issue? Our friendly support team is awake when you are.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section - Minimal & Punchy */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
            Stop looking. <br />{" "}
            <span className="text-orange-600">Start eating.</span>
          </h2>
          <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
            Join 50,000+ happy foodies in your city. Download the app or order
            online now.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => navigate("/order-now")}
              className="px-10 py-4 bg-gray-900 text-white rounded-full font-bold text-lg hover:bg-gray-800 transition shadow-xl"
            >
              Get Started
            </button>
          </div>
        </div>

        {/* Decorative Wave at bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-[100px]"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              fill="#FFF7ED"
            ></path>
          </svg>
        </div>
      </section>
    </div>
  );
};

export default Home;
