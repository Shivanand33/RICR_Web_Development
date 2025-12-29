import React, { useState } from "react";

const Contact = () => {
  const [Name, setName] = useState("");
  const [email, setemail] = useState("");
  const [Number, setNumber] = useState("");
  const [Message, setMessage] = useState("");
  const handleClearForm = () => {
    setName("");
    setemail("");
    setNumber("");
    setMessage("");
  };
  const formSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      const data = {
        Name,
        email,
        Number,
        Message,
      };
      console.log(data);
    }, 2000);
    handleClearForm();
  };
  return (
    <>
      <div className="container rounded-2xl shadow w-100 bg-blue-300 flex items-center justify-center m-5">
        <form onReset={handleClearForm} onSubmit={formSubmit}>
          <div className="grid gap-5">
            <h1>Login Form</h1>
            <div>
              <label htmlFor="Name">Name</label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="border-2 "
                value={Name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="border-2"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="Number">Number:</label>
              <input
                type="Number"
                name="Number"
                placeholder="0000000000"
                className="border-2"
                value={Number}
                onChange={(e) => setNumber(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="Message">Message:</label>
              <textarea
                name="Message"
                required
                className="border-2"
                value={Message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button type="Submit" className="bg-green-500 rounded-2xl">
              Submit
            </button>
            <button type="Reset" className="bg-red-600 rounded-2xl">
              Reset
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
