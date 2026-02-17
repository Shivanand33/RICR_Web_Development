import React, { useState } from "react";
import toast from "react-hot-toast";
import api from "../config/Api";
import { FaUser, FaEnvelope, FaPhoneAlt, FaPaperPlane, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClearForm = () => {
    setFormData({
      fullName: "",
      email: "",
      mobileNumber: "",
      message: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await api.post("/public/new-contact", formData);
      toast.success(res.data.message);
      handleClearForm();
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Unknown Error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
             <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" className="w-full h-full object-cover" alt="bg"/>
        </div>
        <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">Have a question or feedback? We'd love to hear from you.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 -mt-20 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Contact Info Side (Left) */}
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-10 md:w-1/3 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-orange-100 mb-8">Fill up the form and our team will get back to you within 24 hours.</p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <FaPhoneAlt />
                  </div>
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <FaEnvelope />
                  </div>
                  <span>support@foodapp.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <FaMapMarkerAlt />
                  </div>
                  <span>123, Food Street, Flavor Town</span>
                </div>
              </div>
            </div>

            {/* Social Icons (Optional) */}
            <div className="mt-10 md:mt-0">
               <div className="flex gap-4">
                  {/* Add social icons here if needed */}
               </div>
            </div>
          </div>

          {/* Form Side (Right) */}
          <div className="p-8 md:p-12 md:w-2/3">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-gray-600 ml-1">Full Name</label>
                  <div className="relative">
                    <div className="absolute top-3.5 left-3 text-gray-400"><FaUser/></div>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Your Name"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-gray-600 ml-1">Email Address</label>
                  <div className="relative">
                    <div className="absolute top-3.5 left-3 text-gray-400"><FaEnvelope/></div>
                    <input
                      type="email"
                      name="email"
                      placeholder="tour@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Mobile */}
              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-600 ml-1">Mobile Number</label>
                <div className="relative">
                  <div className="absolute top-3.5 left-3 text-gray-400"><FaPhoneAlt/></div>
                  <input
                    type="tel"
                    name="mobileNumber"
                    placeholder="+91 0006543210"
                    maxLength="10"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-600 ml-1">Your Message</label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all resize-none"
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={handleClearForm}
                  disabled={isLoading}
                  className="px-6 py-3 rounded-xl border border-gray-300 text-gray-600 font-bold hover:bg-gray-50 transition-colors"
                >
                  Clear
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 bg-orange-600 text-white font-bold py-3 rounded-xl hover:bg-orange-700 transition-all shadow-lg shadow-orange-500/30 flex items-center justify-center gap-2"
                >
                  {isLoading ? "Sending..." : <>Send Message <FaPaperPlane className="text-sm" /></>}
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-96 bg-gray-200 grayscale hover:grayscale-0 transition-all duration-500">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.495574514589!2d77.06948577619284!3d28.494747975739892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19642e057861%3A0xc6f3f00902c3a595!2sCyber%20Hub!5e0!3m2!1sen!2sin!4v1709665487431!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;