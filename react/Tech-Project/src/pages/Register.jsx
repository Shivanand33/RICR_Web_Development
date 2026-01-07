import React from "react";
import { useState } from "react";
import image from "../assets/main.jpg";

const Register = () => {
  const [fromData, setfromdata] = useState({
    FullName: "",
    email: "",
    phone: "",
    password: "",
    gender: "",
    country: "",
  });

  const [FormData, setFormData] = useState({ gender: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setfromdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fromData);
  };

  const handleResetFrom = () => {
   setFormData({
 FullName: "",
    email: "",
    phone: "",
    password: "",
    gender: "",
    country: "",
   });

  };
     
  

  return (
    <>
      <div className="relative  w-screen md:w-screen h-screen">
        {/* Background Image */}
        <img
          src={image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Login Form */}
        <div className="relative z-10 flex   h-full">
          <form
            onSubmit={handleSubmit}
            onReset={handleResetFrom}
            
            className="p-8 rounded-xl ms-30 w-80   "
          >
            <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

            <input
              type="FullName"
              name="FullName"
              value={FormData.FullName}
              onChange={handleChange}
              placeholder="Fullname"
              className="w-full mb-4 p-2 rounded border-2 border-gray-400 focus:outline-none  focus:border-green-500 transition"
            />

            <input
              type="email"
              name="email"
              value={FormData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full mb-4 p-2 border-2 rounded border-gray-400 focus:outline-none focus:border-green-500 transition"
            />
            <input
              type="phone"
              name="phone"
              id="phone"
              value={FormData.phone}
              onChange={handleChange}
              placeholder="Mobile Number"
              className="w-full mb-4 p-2 border-2 rounded border-gray-400 focus:outline-none focus:border-green-500 transition"
            />

            <input
              type="password"
              name="password"
              value={FormData.password}
              onChange={handleChange}
              placeholder="Create Password"
              className="w-full mb-4 p-2 rounded border-2 border-gray-400 focus:outline-none  focus:border-green-500 transition"
            />
            <div className="flex gap-3 mb-4  ">
              <input
                type="radio"
                name="gender"
                value="male"
                id="male"
                checked={FormData.gender === "male"}
                onChange={handleChange}
              />
              <label htmlFor="male">Male</label>
              <input
                type="radio"
                name="gender"
                value="female"
                id="female"
               
                checked={FormData.gender === "female"}
                 onChange={handleChange}
              />
              <label htmlFor="female">Female</label>
              <input
                type="radio"
                name="gender"
                value="other"
                id="other"
                
                checked={FormData.gender === "other"}
                onChange={handleChange}
              />
              <label htmlFor="other">Other</label>
            </div>
            <div>
              <select
                name="country"
                id="country"
                value={FormData.country}
                onChange={handleChange}
                className="w-full mb-4  border rounded p-2 border-gray-400 focus:outline-none focus:border-green-500 transition"
              >
                <option value="">Select Country</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="Canada">Canada</option>
              </select>
            </div>

            <button
              type="Reset"
              className="w-full bg-gray-900 text-white py-2 rounded hover:bg-gray-800 mb-4"
            >
              Reset
            </button>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
