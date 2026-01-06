import React, { useState } from "react";

const SignUp = () => {
  const [contactData, setContactData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    subject: "",
    message: "",
    religion: "",
    gender: "",
    skill: [],
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setContactData((prev) => ({
        ...prev,
        skill: checked
          ? [...prev.skill, value]
          : prev.skill.filter((item) => item !== value),
      }));
    } else {
      setContactData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleClearForm = () => {
    setContactData({
      fullName: "",
      email: "",
      phone: "",
      city: "",
      subject: "",
      message: "",
      religion: "",
      gender: "",
      skill: [],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log("Form Data:", contactData);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
      handleClearForm();
    }
  };

  return (
    
      <form
        className="shadow-2xl grid m-2  gap-3 mx-auto bg-sky-200 rounded-xl w-125 h-auto  items-center justify-center"
        onSubmit={handleSubmit}
        onReset={handleClearForm}
      >
        <h1 className="text-3xl font-bold ">SingUp</h1>
        <div className="border-1 bottom-2.5"></div>
        <div className="grid">
          <label>FullName:</label>
          <input
            type="text"
            name="fullName"
            className="border-2  border-gray-500    p-2 rounded w-full"
            value={contactData.fullName}
            onChange={handleChange}
          />
        </div>

        <div className="grid">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            className="border-2  border-gray-500     p-2 rounded w-full"
            value={contactData.email}
            onChange={handleChange}
          />
        </div>

        <div className="grid">
          <label>Phone:</label>
          <input
            type="number"
            name="phone"
            className="border-2  border-gray-500   p-2 rounded w-full"
            value={contactData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="grid">
          <label>City:</label>
          <input
            type="text"
            name="city"
            className="border-2  border-gray-500     p-2 rounded w-full"
            value={contactData.city}
            onChange={handleChange}
          />
        </div>

        <div className="grid">
          <label>Subject:</label>
          <input
            type="text"
            name="subject"
            className="border-2  border-gray-500   p-2 rounded w-full"
            value={contactData.subject}
            onChange={handleChange}
          />
        </div>

        <div className="grid">
          <label>Religion:</label>
          <select
            name="religion"
            className="border-2  border-gray-500     p-2 rounded w-full"
            value={contactData.religion}
            onChange={handleChange}
          >
            <option value="">--Select--</option>
            <option value="islam">Islam</option>
            <option value="hinduism">Hinduism</option>
            <option value="christianity">Christianity</option>
            <option value="buddhism">Buddhism</option>
            <option value="sikhism">Sikhism</option>
          </select>
        </div>

        <div className=" gap-3 flex">
          <label>Gender:</label>
          <input
            type="radio"
            name="gender"
            value="male"
            className="border-2"
            checked={contactData.gender === "male"}
            onChange={handleChange}
          />
          Male
          <input
            type="radio"
            name="gender"
            value="female"
            className="border-2"
            checked={contactData.gender === "female"}
            onChange={handleChange}
          />
          Female
          <input
            type="radio"
            name="gender"
            value="other"
            checked={contactData.gender === "other"}
            onChange={handleChange}
          />
          Other
        </div>

        <div className=" gap-3 flex">
          <label>Skills:</label>
          <input
            type="checkbox"
            name="skill"
            value="html"
            className="border-2"
            checked={contactData.skill.includes("html")}
            onChange={handleChange}
          />
          HTML
          <input
            type="checkbox"
            name="skill"
            value="css"
            className="border-2"
            checked={contactData.skill.includes("css")}
            onChange={handleChange}
          />
          CSS
          <input
            type="checkbox"
            name="skill"
            value="js"
            className="border-2"
            checked={contactData.skill.includes("js")}
            onChange={handleChange}
          />
          JS
          <input
            type="checkbox"
            name="skill"
            value="react"
            className="border-2"
            checked={contactData.skill.includes("react")}
            onChange={handleChange}
          />
          React
        </div>

        <div className="grid">
          <label>Message: </label>
          <textarea
            name="message"
            value={contactData.message}
            onChange={handleChange}
            className=" border-2 border-gray-500  p-2   rounded w-100"
          />
        </div>

        <div className="flex gap-3 items-center justify-center">
          <button
            className="bg-red-700 w-30 hover:bg-red-600 active:bg-amber-600 p-2 rounded-xl text-white text-center"
            type="reset"
          >
            Clear
          </button>
          <button
            className="bg-green-700 hover:bg-green-600 active:bg-green-500 p-2  w-30 rounded-xl text-white text-center"
            type="submit"
          >
            {isLoading ? "Loading..." : "Submit"}
          </button>
        </div>
      </form>
   
  );
};

export default SignUp;
