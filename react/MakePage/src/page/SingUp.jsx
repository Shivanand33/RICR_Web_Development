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
    <div className="text-center">
      <h1 className="text-3xl font-bold ">SingUp</h1>
        <form
          className="shadow-2xl grid gap-3 mx-auto w-125 h-auto  items-center justify-start"
          onSubmit={handleSubmit}
          onReset={handleClearForm}
        >
           
          <div className="flex mt-2">
            <label>FullName:</label>
            <input
              type="text"
              name="fullName"
              className="border-2  border-gray-500 ms-1  p-2 rounded w-95"
              value={contactData.fullName}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              className="border-2  border-gray-500 ms-2   p-2 rounded w-98"
              value={contactData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Phone:</label>
            <input
              type="number"
              name="phone"
              className="border-2  border-gray-500 ms-2   p-2 rounded w-98"
              value={contactData.phone}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>City:</label>
            <input
              type="text"
              name="city"
              className="border-2  border-gray-500 ms-5   p-2 rounded w-98"
              value={contactData.city}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Subject:</label>
            <input
              type="text"
              name="subject"
              className="border-2  border-gray-500 ms-1  p-2 rounded w-98"
              value={contactData.subject}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Religion:</label>
            <select
              name="religion"
              className="border-2  border-gray-500 ms-2   p-2 rounded w-100"
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

          <div className=" flex text-center">
            <label>Message: </label>
            <textarea
              name="message"
              value={contactData.message}
              onChange={handleChange}
              className=" border-2 border-gray-500 ms-2 p-2   rounded w-100"
            />
          </div>

          <div className="flex gap-3 items-center justify-center">
            <button
              className="bg-red-700 w-30 rounded text-white text-center"
              type="reset"
            >
              Clear
            </button>
            <button
              className="bg-green-700 w-30 rounded text-white text-center"
              type="submit"
            >
              {isLoading ? "Loading..." : "Submit"}
            </button>
          </div>
        </form>
    
    </div>
  );
};

export default SignUp;
