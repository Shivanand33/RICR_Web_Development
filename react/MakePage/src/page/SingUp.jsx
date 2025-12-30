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

  // ✅ HANDLE CHANGE
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

  // ✅ CLEAR FORM
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

  // ✅ SUBMIT
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
      <h1>Contact Us</h1>

      <div className="container">
        <form className="border-2 grid gap-3 mx-auto w-125 h-100" onSubmit={handleSubmit} onReset={handleClearForm}>
          {/* Full Name */}
          <div>
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
               className="border-2"
              value={contactData.fullName}
              onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="border-2"
              value={contactData.email}
              onChange={handleChange}
            />
          </div>

          {/* Phone */}
          <div>
            <label>Phone</label>
            <input
              type="number"
              name="phone"
              className="border-2"
              value={contactData.phone}
              onChange={handleChange}
            />
          </div>

          {/* City */}
          <div>
            <label>City</label>
            <input
              type="text"
              name="city"
              className="border-2"
              value={contactData.city}
              onChange={handleChange}
            />
          </div>

          {/* Subject */}
          <div>
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              className="border-2"
              value={contactData.subject}
              onChange={handleChange}
            />
          </div>

          {/* Religion */}
          <div>
            <label>Religion</label>
            <select
              name="religion"
              className="border-2"
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

          {/* Gender */}
          <div>
            <label>Gender</label>
            <input
              type="radio"
              name="gender"
              value="male"
              className="border-2"
              checked={contactData.gender === "male"}
              onChange={handleChange}
            />{" "}
            Male
            <input
              type="radio"
              name="gender"
              value="female"
              className="border-2"
              checked={contactData.gender === "female"}
              onChange={handleChange}
            />{" "}
            Female
            <input
              type="radio"
              name="gender"
              value="other"
              checked={contactData.gender === "other"}
              onChange={handleChange}
            />{" "}
            Other
          </div>

          {/* Skills */}
          <div>
            <label>Skills</label>
            <input
              type="checkbox"
              name="skill"
              value="html"
              className="border-2"
              checked={contactData.skill.includes("html")}
              onChange={handleChange}
            />{" "}
            HTML
            <input
              type="checkbox"
              name="skill"
              value="css"
              className="border-2"
              checked={contactData.skill.includes("css")}
              onChange={handleChange}
            />{" "}
            CSS
            <input
              type="checkbox"
              name="skill"
              value="js"
              className="border-2"
              checked={contactData.skill.includes("js")}
              onChange={handleChange}
            />{" "}
            JS
            <input
              type="checkbox"
              name="skill"
              value="react"
              className="border-2"
              checked={contactData.skill.includes("react")}
              onChange={handleChange}
            />{" "}
            React
          </div>

          {/* Message */}
          <div>
            <label>Message</label>
            <textarea
              name="message"
              value={contactData.message}
              onChange={handleChange}
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3 items-center justify-center">
            <button className="bg-red-700 w-30 rounded text-white text-center" type="reset">Clear</button>
            <button className="bg-green-700 w-30 rounded text-white text-center"  type="submit">
              {isLoading ? "Loading..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;