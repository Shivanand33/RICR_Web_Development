import React, { useState, useEffect } from "react";
import transparant from "../assets/transparant.png"; // Ensure path is correct
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { 
  FaSearch, 
  FaShoppingCart, 
  FaUserCircle, 
  FaBars, 
  FaTimes, 
  FaSignOutAlt, 
  FaTachometerAlt 
} from "react-icons/fa";

const Header = () => {
  const { user, isLogin, role, logout } = useAuth(); // Assuming logout function exists in context
  const navigate = useNavigate();
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  // Scroll Effect Logic
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = () => {
    setShowProfileMenu(false);
    switch (role) {
      case "manager": navigate("/resturant-dashboard"); break;
      case "partner": navigate("/rider-dashboard"); break;
      case "customer": navigate("/user-dashboard"); break;
      case "admin": navigate("/admin-dashboard"); break;
      default: navigate("/"); break;
    }
  };

  const handleLogout = () => {
    // Add your logout logic here
    if(logout) logout();
    navigate("/login");
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-gradient-to-r from-orange-500 to-orange-600 py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        
        {/* 1. Logo Section */}
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src={transparant}
            alt="Logo"
            className={`h-10 w-auto object-contain transition-all duration-300 ${isScrolled ? "invert-0" : "brightness-0 invert"}`}
          />
          <span className={`text-2xl font-bold tracking-tighter ${isScrolled ? "text-orange-600" : "text-white"}`}>
            Food<span className={isScrolled ? "text-gray-800" : "text-orange-200"}>App</span>
          </span>
        </Link>

        {/* 2. Search Bar (Hidden on mobile) */}
        <div className="hidden md:flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 w-1/3 border border-transparent focus-within:border-white/50 focus-within:bg-white transition-all">
          <FaSearch className={`${isScrolled ? "text-gray-400" : "text-white/80"}`} />
          <input 
            type="text" 
            placeholder="Search for food..." 
            className={`bg-transparent border-none outline-none w-full ml-2 placeholder-gray-300 ${isScrolled ? "text-gray-700 placeholder-gray-400" : "text-white"}`}
          />
        </div>

        {/* 3. Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 font-medium">
          {["Home", "About", "Contact"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
              className={`transition-colors hover:underline underline-offset-4 ${
                isScrolled ? "text-gray-700 hover:text-orange-600" : "text-white hover:text-orange-100"
              }`}
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* 4. Right Side Actions */}
        <div className="flex items-center gap-4">
          
          {/* Cart Icon */}
          <Link to="/cart" className="relative group">
            <div className={`p-2 rounded-full transition ${isScrolled ? "hover:bg-orange-50 text-gray-700" : "hover:bg-white/20 text-white"}`}>
                <FaShoppingCart size={22} />
                {/* Badge */}
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full border-2 border-white">
                    3
                </span>
            </div>
          </Link>

          {/* Auth Section */}
          <div className="hidden md:block">
            {isLogin ? (
              <div className="relative">
                <button 
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className={`flex items-center gap-2 py-1 px-3 rounded-full border transition ${
                      isScrolled 
                        ? "border-gray-200 hover:bg-gray-50 text-gray-800" 
                        : "border-white/30 bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  <FaUserCircle size={20} />
                  <span className="font-semibold max-w-[100px] truncate">{user?.fullName || "User"}</span>
                </button>

                {/* Dropdown Menu */}
                {showProfileMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl py-2 border border-gray-100 animate-fade-in-up transform origin-top-right">
                    <div className="px-4 py-2 border-b border-gray-100 text-sm text-gray-500">
                        Signed in as <br/> <span className="font-bold text-gray-800">{role}</span>
                    </div>
                    <button onClick={handleNavigate} className="w-full text-left px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 flex items-center gap-2">
                        <FaTachometerAlt /> Dashboard
                    </button>
                    <button onClick={handleLogout} className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 flex items-center gap-2">
                        <FaSignOutAlt /> Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex gap-3">
                <button
                  onClick={() => navigate("/login")}
                  className={`px-5 py-2 rounded-full font-bold transition ${
                      isScrolled 
                        ? "text-orange-600 hover:bg-orange-50" 
                        : "text-white hover:bg-white/10"
                  }`}
                >
                  Login
                </button>
                <button
                  onClick={() => navigate("/register")}
                  className={`px-5 py-2 rounded-full font-bold shadow-lg transform hover:scale-105 transition ${
                    isScrolled
                        ? "bg-orange-600 text-white hover:bg-orange-700"
                        : "bg-white text-orange-600 hover:bg-gray-100"
                  }`}
                >
                  Sign Up
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`md:hidden p-2 ${isScrolled ? "text-gray-800" : "text-white"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* 5. Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 p-4 flex flex-col gap-4 animate-slide-down">
            {["Home", "About", "Contact"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
              className="text-gray-800 font-medium py-2 border-b border-gray-50 hover:text-orange-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          
          {isLogin ? (
              <>
                <button onClick={handleNavigate} className="flex items-center gap-2 text-gray-800 py-2 hover:text-orange-600">
                    <FaTachometerAlt /> Dashboard
                </button>
                <button onClick={handleLogout} className="flex items-center gap-2 text-red-600 py-2">
                    <FaSignOutAlt /> Logout
                </button>
              </>
          ) : (
              <div className="flex flex-col gap-3 mt-2">
                  <button onClick={() => navigate("/login")} className="w-full py-2 border border-orange-600 text-orange-600 rounded-lg font-bold">Login</button>
                  <button onClick={() => navigate("/register")} className="w-full py-2 bg-orange-600 text-white rounded-lg font-bold">Sign Up</button>
              </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;