import React, { useState } from "react";
import toast from "react-hot-toast";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoding, setIsLoding] = useState(false);
  const [validarionError, setValidationError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleClearForm = () => {
    setFormData({
      fullName: "",
      email: "",
      mobileNumber: "",
      password: "",
      confirmPassword: "",
    });
  };

  const validate = () => {
    let Error = {};
    if (formData.fullName.length < 3) {
      Error.fullName = "Name should be More Than 3 Characters";
    } else {
      if (!/^[A-Za-z ]+$/.test(formData.fullName)) {
        Error.fullName = "Only Contain A-Z , a-z and space";
      }
    }
    if (
      !/^[\w\.]+@(gmail|outlook|ricr|yahoo)\.(com|in|co.in)$/.test(
        formData.email
      )
    ) {
      Error.email = "Use Proper Email Format";
    }

    if (!/^[6-9]\d{9}$/.test(formData.mobileNumber)) {
      Error.mobileNumber = "Only Indian Mobile Number allowed";
    }
    setValidationError(Error);
    return Object.keys(Error).length > 0 ? false : true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoding(true);

    if (!validate()) {
      setIsLoding(false);
      toast.error("Fill the From Correctly");
      return;
    }
    console.log(formData);

    try {
      const res = formData;
      toast.success("Register Seccussfully");
      handleClearForm();
    } catch (error) {
      console.log(error);
      toast.error(error.messsage);
    } finally {
      setIsLoding(false);
    }
  };

  return (
    <>
      <div className=" bg-linear-to-br min-h-screen bg-[var(--color-primary)]  ">
        <div className="max-w-96 max-auto">
          <div className="bg-white items-center  shadow-2xl w-full overflow-hidden rounded-2xl">
            <form
              onSubmit={handleSubmit}
              onReset={handleClearForm}
              disabled={isLoding}
              className="  py-4 px-4   "
            >
              <div className="">
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  disabled={isLoding}
                  required
                  placeholder="Full Name"
                  className=" border-3 border-gray-400 border:outline-none w-full   focus:outline-green-700 rounded-xl p-2 "
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isLoding}
                  placeholder="Email Address"
                  className=" border-3 border-gray-400 border:outline-none w-full   focus:outline-green-700 rounded-xl p-2 "
                />
                <input
                  type="tel"
                  name="mobileNumber"
                  id="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  disabled={isLoding}
                  placeholder="Mobile number"
                  className=" border-3 border-gray-400 border:outline-none w-full   focus:outline-green-700 rounded-xl p-2 "
                />
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  disabled={isLoding}
                  required
                  placeholder="Enter Password"
                  className=" border-3 border-gray-400 border:outline-none w-full   focus:outline-green-700 rounded-xl p-2 "
                />
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  disabled={isLoding}
                  required
                  placeholder="Confirm password"
                  className=" border-3 border-gray-400 border:outline-none w-full   focus:outline-green-700 rounded-xl p-2 "
                />
              </div>
              <div className="text-center mt-2 flex gap-2">
                <button
                  disabled={isLoding}
                  type="reset"
                  className="bg-gray-700 py-2 px-10 rounded-xl text-white hover:bg-gray-700 active:gray-300  "
                >
                  Clear
                </button>
                <button
                  disabled={isLoding}
                  type="submit"
                  className="bg-[var(--color-accent)]  py-2 p-10 rounded-xl text-white "
                >
                  {isLoding ? "Submitting" : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Register;
