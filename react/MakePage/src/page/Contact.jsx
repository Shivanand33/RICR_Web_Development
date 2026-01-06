import React, { useState } from "react";

const Contact = () => {
  const [ContactData, setContactData] = useState({
    fullName: "",
    email: "",
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
        <h1 className="text-4xl mt-10 font-bold">Login Form</h1>
        <div className="container">
          <form
          
            className="shadow-2xl rounded-2xl bg-amber-50 m-10 w-100 h-auto ms-150 grid gap-3 items-center justify-baseline"
            onReset={handleClearForm}
            onSubmit={handleSubmit}
          >
            
            <div className=" flex  mt-2">
              <label htmlFor="fullName">Full Name:</label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                value={ContactData.fullName}
                onChange={handleChange}
                placeholder="Enter your Name"
                className="border-2 p-2 border-gray-300 rounded-xl w-70 ms-5"
              />
            </div>

            <div className="flex text-center">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                value={ContactData.email}
                onChange={handleChange}
                placeholder="Enter your Email"
                className="border-2 border-gray-300 p-2 rounded-xl ms-14 w-70"
              />
            </div>

            <div className="flex gap-3 items-center justify-center m-2">
              <button
                type="reset"
                className="bg-red-500  p-2 hover:bg-red-700 active:bg-red-800 text-white rounded-xl"
              >
                Clear Form
              </button>
              <button
                type="submit"
                className="bg-green-500 hover:green-700 active:bg-green-800 p-2  text-white rounded-xl"
              >
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
