import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
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

  const [isLoading, setIsLoading] = useState(false);
  const [validationError, setValidationError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setfromdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleResetFrom = () => {
    setfromdata({
      FullName: "",
      email: "",
      phone: "",
      password: "",
      gender: "",
      country: "",
    });
  };

  const validate = () => {
    let Erroe = {};
    if (!fromData.FullName) {
      Erroe.FullName = "FullName is requird";
    } else {
      if (!/^[a-zA-Z ]{2,30}$/.test(fromData.FullName)) {
        Erroe.FullName = "Only A-Z, a-z and space allowed";
      }
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fromData.email)) {
      Erroe.email = "Invalid email address";
    }
    if (!/^[6-9]\d{9}$/.test(fromData.phone)) {
      Erroe.phone = "Invalid phone number";
    }
    setValidationError(Erroe);

    return Object.keys(Erroe).length > 0 ? false : true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!validate()) {
      setIsLoading(false);
      toast.error("Please fill the correctly from");
      return;
    }

    try {
      console.log(fromData);
      toast.success("Registation Successful");
      handleResetFrom();
    } catch (error) {
      console.log(error);

      toast.error(error.message);
    } finally {
    }
    setIsLoading(false);
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
            className="p-8 rounded-xl ms-30 w-80"
          >
            <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

            <input
              type="text"
              name="FullName"
              value={fromData.FullName}
              onChange={handleChange}
              placeholder="Fullname"
              required
              className="w-full mb-4 p-2 rounded border-2 border-gray-400 focus:outline-none  focus:border-green-500 transition"
            />

            <input
              type="email"
              name="email"
              value={fromData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full mb-4 p-2 border-2 rounded border-gray-400 focus:outline-none focus:border-green-500 transition"
            />
            <input
              type="tel"
              name="phone"
              id="phone"
              value={fromData.phone}
              onChange={handleChange}
              placeholder="Mobile Number"
              required
              className="w-full mb-4 p-2 border-2 rounded border-gray-400 focus:outline-none focus:border-green-500 transition"
            />

            <input
              type="password"
              name="password"
              value={fromData.password}
              onChange={handleChange}
              placeholder="Create Password"
              required
              className="w-full mb-4 p-2 rounded border-2 border-gray-400 focus:outline-none  focus:border-green-500 transition"
            />
            <div className="flex gap-3 mb-4  ">
              <input
                type="radio"
                name="gender"
                value="male"
                id="male"
                checked={fromData.gender === "male"}
                onChange={handleChange}
              />
              <label htmlFor="male">Male</label>
              <input
                type="radio"
                name="gender"
                value="female"
                id="female"
                checked={fromData.gender === "female"}
                onChange={handleChange}
              />
              <label htmlFor="female">Female</label>
              <input
                type="radio"
                name="gender"
                value="other"
                id="other"
                checked={fromData.gender === "other"}
                onChange={handleChange}
              />
              <label htmlFor="other">Other</label>
            </div>
            <div>
              <select
                name="country"
                id="country"
                value={fromData.country}
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
              type="reset"
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
