import React, { useState } from "react";
import toast from "react-hot-toast";
import api from "../config/Api";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import ForgetPasswordModal from "../components/publicModals/ForgetPasswordModal";
// Icons update kiye hain
import { FaEnvelope, FaLock, FaArrowRight, FaUser } from "react-icons/fa";

const Login = () => {
  const { setUser, setIsLogin, setRole } = useAuth();
  const navigate = useNavigate();

  const [isForgetPasswordModelOpen, setIsForgetPasswordModelOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClearForm = () => {
    setFormData({
      email: "",
      password: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await api.post("/auth/login", formData);
      toast.success(res.data.message);
      setUser(res.data.data);
      setIsLogin(true);
      sessionStorage.setItem("CravingUser", JSON.stringify(res.data.data));
      handleClearForm();
      
      switch (res.data.data.role) {
        case "manager": navigate("/resturant-dashboard"); break;
        case "partner": navigate("/rider-dashboard"); break;
        case "customer": navigate("/user-dashboard"); break;
        case "admin": navigate("/admin-dashboard"); break;
        default: break;
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Unknown Error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen flex bg-white">
        
        {/* Left Side - Image Section */}
        <div className="hidden lg:flex lg:w-1/2 relative bg-gray-900">
           <img 
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Delicious Food"
              className="absolute inset-0 w-full h-full object-cover opacity-60"
           />
           <div className="relative z-10 flex flex-col justify-center px-12 text-white">
              <h1 className="text-5xl font-bold mb-6 leading-tight">Welcome Back to <br/> <span className="text-orange-500">FoodApp</span></h1>
              <p className="text-xl text-gray-200">Order your favorite meals or manage your restaurant with ease.</p>
           </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
          <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100">
            
            {/* --- ANIMATED ICON SECTION START --- */}
            <div className="flex flex-col items-center justify-center mb-8">
              <div className="relative group cursor-pointer">
                {/* Glowing Background Ring */}
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-pink-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                
                {/* Main Icon Container */}
                <div className="relative w-24 h-24 bg-white rounded-full flex items-center justify-center border-4 border-orange-50 shadow-xl transform transition duration-500 hover:scale-105">
                   <FaUser className="text-5xl text-orange-500 drop-shadow-sm" />
                </div>

                {/* Floating Status Dot (Animated) */}
                <div className="absolute bottom-1 right-1 h-6 w-6 bg-green-500 rounded-full border-4 border-white animate-bounce shadow-sm"></div>
              </div>
              
              <h2 className="text-3xl font-bold text-gray-800 mt-4">Welcome Back</h2>
              <p className="text-gray-400 text-sm">Please login to your account</p>
            </div>
            {/* --- ANIMATED ICON SECTION END --- */}

            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-600 ml-1">Email Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <FaEnvelope />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1">
                 <div className="flex justify-between items-center ml-1">
                    <label className="text-sm font-semibold text-gray-600">Password</label>
                 </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <FaLock />
                  </div>
                  <input
                    type="password"
                    name="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all"
                  />
                </div>
                <div className="flex justify-end mt-1">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setIsForgetPasswordModelOpen(true);
                    }}
                    className="text-sm text-orange-600 font-semibold hover:text-orange-700 hover:underline"
                  >
                    Forgot Password?
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-3.5 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-orange-500/30 flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                     <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Signing In...
                  </>
                ) : (
                  <>Login <FaArrowRight /></>
                )}
              </button>

              <div className="text-center mt-6">
                <p className="text-gray-500">
                  Don't have an account?{" "}
                  <Link to="/register" className="text-orange-600 font-bold hover:underline">
                    Create Account
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      {isForgetPasswordModelOpen && (
        <ForgetPasswordModal
          onClose={() => setIsForgetPasswordModelOpen(false)}
        />
      )}
    </>
  );
};

export default Login;