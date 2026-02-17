import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUtensils, FaShippingFast, FaUsers, FaHeart, FaAward, FaClock } from "react-icons/fa";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="font-sans text-gray-800 bg-white">
      
      {/* 1. Hero Section */}
      <div className="relative w-full h-[60vh] flex items-center justify-center text-center text-white bg-gray-900 overflow-hidden">
        <img 
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
            alt="Food Background" 
            className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10 px-4 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
                More Than Just <span className="text-orange-500">Food Delivery</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
                We are on a mission to bring the city's best flavors directly to your doorstep, warm and fresh.
            </p>
        </div>
      </div>

      {/* 2. Our Story Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
                <div className="relative">
                    <img 
                        src="https://images.unsplash.com/photo-1526367790999-0150786686a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                        alt="Delivery Guy" 
                        className="rounded-3xl shadow-2xl z-10 relative"
                    />
                    {/* Decorative Blob */}
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-100 rounded-full -z-0"></div>
                    <div className="absolute -top-6 -left-6 w-32 h-32 bg-orange-50 rounded-full -z-0"></div>
                </div>
            </div>
            <div className="md:w-1/2 space-y-6">
                <h3 className="text-orange-600 font-bold uppercase tracking-wider text-sm">Who We Are</h3>
                <h2 className="text-4xl font-bold text-gray-900 leading-tight">Delivering Happiness, <br/> One Meal at a Time.</h2>
                <p className="text-gray-500 leading-relaxed text-lg">
                    Founded in 2024, <strong>FoodApp</strong> started with a simple idea: why should you have to compromise on quality when ordering in? We partnered with the top chefs and local gems to ensure that every bite you take is memorable.
                </p>
                <p className="text-gray-500 leading-relaxed text-lg">
                    Whether it's a midnight craving or a family feast, we connect you with the food you love, delivered with care and speed.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="flex items-center gap-3">
                        <div className="bg-orange-100 p-2 rounded-full text-orange-600"><FaAward /></div>
                        <span className="font-semibold">Best Quality Food</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="bg-orange-100 p-2 rounded-full text-orange-600"><FaClock /></div>
                        <span className="font-semibold">30 Min Delivery</span>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* 3. Stats Section */}
      <div className="bg-orange-600 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
                <FaUsers className="text-4xl mx-auto opacity-80" />
                <h3 className="text-4xl font-bold">50k+</h3>
                <p className="text-orange-100">Happy Customers</p>
            </div>
            <div className="space-y-2">
                <FaUtensils className="text-4xl mx-auto opacity-80" />
                <h3 className="text-4xl font-bold">500+</h3>
                <p className="text-orange-100">Partner Restaurants</p>
            </div>
            <div className="space-y-2">
                <FaShippingFast className="text-4xl mx-auto opacity-80" />
                <h3 className="text-4xl font-bold">1M+</h3>
                <p className="text-orange-100">Successful Deliveries</p>
            </div>
            <div className="space-y-2">
                <FaHeart className="text-4xl mx-auto opacity-80" />
                <h3 className="text-4xl font-bold">4.8</h3>
                <p className="text-orange-100">App Rating</p>
            </div>
        </div>
      </div>

      {/* 4. Core Values */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Us?</h2>
            <p className="text-gray-500 mt-2">We don't just deliver food, we deliver an experience.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
                { title: "Super Fast Delivery", desc: "Our fleet of riders is always on the move to ensure your food reaches hot.", icon: "⚡" },
                { title: "Hygiene First", desc: "We follow strict hygiene protocols with contactless delivery options.", icon: "🛡️" },
                { title: "Live Tracking", desc: "Know exactly where your food is with our real-time GPS tracking.", icon: "📍" },
            ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300 text-center">
                    <div className="text-5xl mb-4">{item.icon}</div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-500">{item.desc}</p>
                </div>
            ))}
        </div>
      </div>

      {/* 5. CTA Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Hungry? Let's fix that.</h2>
            <p className="text-lg text-gray-500 mb-8">Download the app or order online to get 50% OFF on your first order.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button 
                    onClick={() => navigate('/')}
                    className="px-8 py-3 bg-orange-600 text-white font-bold rounded-full shadow-lg hover:bg-orange-700 transition transform hover:scale-105"
                >
                    Order Now
                </button>
                <button 
                    onClick={() => navigate('/contact')}
                    className="px-8 py-3 bg-white text-gray-800 font-bold rounded-full shadow-md border border-gray-200 hover:bg-gray-50 transition"
                >
                    Contact Us
                </button>
            </div>
        </div>
      </div>

    </div>
  );
};

export default About;