import React, { useState } from "react";

const Contact = () => {
  const [ContactData, setContactData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData((previousData) => ({ ...previousData, [name]: value }));
  };

  const handleClearForm = () => {
    setContactData({
      fullName: "",
      email: "",
      phone: "",
      city: "",
      subject: "",
      message: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      console.log(ContactData);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
    handleClearForm();
  };

  return (
    <>
      <div className="text-center">
        <h1 className="text-4xl font-bold">Login Form</h1>
        <div className="container">
          <form className="shadow-2xl m-10 w-100 ms-150 grid gap-3 items-center justify-between" onReset={handleClearForm} onSubmit={handleSubmit}>
            <div className="">
              <label htmlFor="fullName">Full Name:</label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                value={ContactData.fullName}
                onChange={handleChange}
                placeholder="Enter your Name"
                className="border-2 w-70 ms-5"
              />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={ContactData.email}
                onChange={handleChange}
                placeholder="Enter your Email"
                className="border-2 ms-5 w-75"
              />
            </div>

            <div>
              <label htmlFor="phone">Phone</label>
              <input
                type="number"
                name="phone"
                id="phone"
                value={ContactData.phone}
                onChange={handleChange}
                placeholder="Enter your phone"
                className="border-2 ms-5"
              />
            </div>

            <div>
              <label htmlFor="city">City</label>
              <input
                type="text"
                name="city"
                id="city"
                value={ContactData.city}
                onChange={handleChange}
                placeholder="Enter your city"
                className="border-2 ms-5"
              />
            </div>

            <div>
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                name="subject"
                id="subject"
                value={ContactData.subject}
                onChange={handleChange}
                placeholder="Enter your subject"
                className="border-2 ms-5"
              />
            </div>

            <div>
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                value={ContactData.message}
                onChange={handleChange}
                placeholder="Enter your Message"
                className="border-2 ms-5"
              ></textarea>
            </div>
            <div className="flex gap-3 items-center justify-center">
              <button type="reset" className="bg-red-700  text-2xl text-white rounded">
                Clear Form
              </button>
              <button type="submit" className="bg-green-700 text-2xl text-white rounded">
                {isLoading ? "Loading" : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
