import React, { useState } from "react";
import toast from "react-hot-toast";
const Ricr = () => {
  const [loginData, setloginData] = useState({
    fullName: "",
    email: "",
    dob: "",
    qualification: "",
    course: "",
    batch: "",
    address: "",
    phone: "",
    about: "",
    require: "",
  });
  const [validationError, setValidationError] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setloginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleClearForm = () => {
    setloginData({
      fullName: "",
      email: "",
      dob: "",
      qualification: "",
      course: "",
      batch: "",
      address: "",
      phone: "",
      about: "",
      require: "",
    });
  };
  const validate = () => {
    // let Error = {}
    //   if(loginData.fullName.length < 3) {
    //     Error.fullName = "Name shoud be more the 3 charcthers";
    //   }else{
    //            Error.fullName = "Name";
    //   }
    // }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      set;
    }

    try {
      console.log("Form Data", loginData);
      toast.success("Ragitation Seccsfull");
    } catch (error) {
      console.log(error.message);
    } finally {
      handleClearForm();
    }
  };
  return (
    <>
      <div className="text-3xl flex mt-2 text-white items-center justify-center font-bold ">
        <p className="text-3xl shadow  text-yellow-400  font-bold ">RICR LO</p>
        <p className="shadow text-3xl  text-red-400  font-bold ">GIN F</p>
        <p className="shadow text-3xl  text-green-400  font-bold ">ORM</p>
      </div>

      <form
        action=""
        className="max-w-4xl mx-auto mt-5 bg-sky-100 shadow-2xl rounded-xl p-8"
        onSubmit={handleSubmit}
        onReset={handleClearForm}
      >
        <h2 className="text-2xl font-semibold mb-8 text-center">
          Student Login Form
        </h2>
        <div className="grid  grid-cols-2  gap-6">
          <div className="">
            <label htmlFor="fullName">
              Full Name <sup className="text-red-500">*</sup>
            </label>
            <input
              type="fullName"
              name="fullName"
              id="fullName"
              placeholder="Enter your Name"
              value={loginData.fullName}
              onChange={handleChange}
              className="w-full p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500 transition"
            />
          </div>
          <div>
            <label htmlFor="email">
              Email Address <sup className="text-red-500">*</sup>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={loginData.email}
              onChange={handleChange}
              placeholder="Enter your Email"
              className="w-full p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500 transition"
            />
          </div>
          <div>
            <label htmlFor="dob">
              DOB <sup className="text-red-500">*</sup>
            </label>
            <input
              type="date"
              name="dob"
              id="dob"
              value={loginData.dob}
              onChange={handleChange}
              className="w-full p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500 transition"
            />
          </div>
          <div>
            <div>
              <label htmlFor="qualificatio">
                Qualification <sup className="text-red-500">*</sup>
              </label>
              <select
                name="qualification"
                id=""
                value={loginData.qualification}
                onChange={handleChange}
                className="w-full p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500 transition"
              >
                <option value="qualification">---Qualification---</option>
                <option value="12th">Intermediate</option>
                <option value="10th">Hight School</option>
                <option value="graduat">Graducation</option>
                <option value="post">Post Graduat</option>
              </select>
            </div>
          </div>
          <div>
            <div className="grid">
              <span>
                Course <sup className="text-red-500 ">*</sup>
              </span>  
              <select
                name="course"
                id=""
                value={loginData.course}
                onChange={handleChange}
                className="w-full p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500 transition"
              >
                <option value="course">---Course---</option>
                <option value="java">Java</option>
                <option value=" webdevlopment">Web devlopment</option>
                <option value="app devlopment">App Devlopment</option>
                <option value="dataanalyist">Data Analyist</option>
              </select>
            </div>
            <div className="mt-6">
              <label htmlFor="timing">
                Batch Timing <sup className="text-red-500">*</sup>
              </label> <br />
              <input
                type="radio"
                name="batch"
                id="batch"
                value="9am"
                checked={loginData.batch === "9am"}
                onChange={handleChange}
              />{" "}
              9AM
              <input
                type="radio"
                name="batch"
                value="2pm"
                id="batch"
                checked={loginData.batch === "2pm"}
                onChange={handleChange}
              />{" "}
              2PM
              <input
                type="radio"
                name="batch"
                id="batch"
                value="5pm"
                checked={loginData.batch === "5pm"}
                onChange={handleChange}
              />{" "}
              5PM
              <input
                type="radio"
                name="batch"
                id="batch"
                value="7pm"
                checked={loginData.batch === "7pm"}
                onChange={handleChange}
              />{" "}
              7PM
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="address">
                Residantiol Address <sup className="text-red-500">*</sup>
              </label>
              <textarea
                name="address"
                id="address"
                value={loginData.address}
                onChange={handleChange}
                className="w-full p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500 transition"
              ></textarea>
            </div>
            <div>
              <label htmlFor="guradian">
                Guardian’s Contact Number<sup className="text-red-500">*</sup>
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={loginData.phone}
                onChange={handleChange}
                className="w-full p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500 transition"
              />
            </div>
          </div>
          <div>
            <div className="">
              <label htmlFor="about">
                How did you hear about us <sup className="text-red-500">*</sup>
              </label> <br />
              <input
                type="radio"
                name="about"
                id="ad"
                value="online ad"
                checked={loginData.about === "online ad"}
                onChange={handleChange}
              />
              Online Ad
              <input
                type="radio"
                name="about"
                id="newspaper"
                value="newpaper"
                checked={loginData.about === "newspaper"}
                onChange={handleChange}
              />
              Newspaper
              <input
                type="radio"
                name="about"
                id="social"
                value="social media"
                checked={loginData.about === "socialmedia"}
                onChange={handleChange}
              />
              Social Media
              <input
                type="radio"
                name="about"
                id="other"
                value="other"
                checked={loginData.about === "other"}
                onChange={handleChange}
              />
              Other
            </div>
          </div>
          <div>
            <div className="">
              <label htmlFor="about">
                Special Requirements <sup className="text-red-500">*</sup>
              </label>
              <textarea
                type="text"
                name="require"
                id="require"
                value={loginData.require}
                onChange={handleChange}
                className="w-full p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500 transition"
              ></textarea>
            </div>
          </div>
          <div className="flex items-center justify-center   gap-5">
            <button
              type="submit"
              className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600  "
            >
              Submit
            </button>
            <button
              type="reset"
              className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600"
            >
              Clear
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Ricr;
