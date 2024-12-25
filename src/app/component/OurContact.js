"use client";
import { useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { db } from "../config/config"; // Ensure the Firebase setup is correct
import { collection, addDoc, Timestamp } from "firebase/firestore";

import Image from "next/image";
import contactImage from "../assets/contactimg.svg";
import CustomButton from "./Buttons/CustomButton";
import CustomInput from "./CustomInput";
import TrustPilotWidget from "../trustpilat/page";

const OurContact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    number: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    number: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: "", // Clear error when user starts typing
    }));
  };

  const validate = () => {
    let valid = true;
    let newErrors = {};

    if (!formData.fullName) {
      newErrors.fullName = "Full name is required.";
      valid = false;
    }
    if (!formData.email) {
      newErrors.email = "Email address is required.";
      valid = false;
    }
    if (!formData.number) {
      newErrors.number = "Number is required.";
      valid = false;
    }
    if (!formData.message) {
      newErrors.message = "Message is required.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }
    try {
      const docRef = await addDoc(collection(db, "contactMessages"), {
        ...formData,
        timestamp: Timestamp.fromDate(new Date()), // Adding timestamp here
      });
      console.log("Document written with ID: ", docRef.id);
      alert("Message sent successfully!");
      setFormData({
        fullName: "",
        email: "",
        number: "",
        message: "",
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container px-4 py-12 mx-auto md:py-16">
        <div className="container flex flex-col gap-8 mx-auto lg:flex-row">
          {/* Left section with image */}

          <div 
          className="p-8 bg-white rounded-lg shadow-2xl lg:w-2/3"
          >
            <h2 className="mb-8 font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-500">
            Quick Contact
            </h2>
            <h2 className="mb-8 font-extrabold text-center bg-clip-text bg-gradient-to-r ">
            Feel free to contact with our team
            </h2>
            {/* Phone Number */}
            <div className="p-6 border-b border-gray-200">
              <span className="block mb-3 font-semibold text-gray-800">
                Phone Number
              </span>
              <a
                href="tel:+919455791624"
                className="block  text-blue-600 hover:text-[#EA130C] hover:underline"
              >
                +91 945-579-1624
              </a>
              <a
                href="tel:+918172848306"
                className="block  text-blue-600 hover:text-[#EA130C] hover:underline"
              >
                +91 817-284-8306
              </a>
            </div>

            {/* Email Address */}
            <div className="p-6 border-b border-gray-200">
              <span className="block mb-3 font-semibold text-gray-800">
                Email Address
              </span>
              <a
                href="mailto:info@difmo.com"
                className="block  text-blue-600 hover:text-[#EA130C] hover:underline"
              >
                info@difmo.com
              </a>
              <a
                href="mailto:difmotech@gmail.com"
                className="block  text-blue-600 hover:text-[#EA130C] hover:underline"
              >
                difmotech@gmail.com
              </a>
            </div>

            {/* Address */}
            <div className="p-6 border-b border-gray-200">
              <span className="block mb-3 font-semibold text-gray-800">
                Address
              </span>
              <span className="text-gray-700 ">
                4/37 Vibhav Khand, Gomtinagar, Lucknow, Uttar Pradesh, 226010
              </span>
            </div>

            {/* Social Media Links */}
            <div className="p-6">
              <span className="block mb-3 font-semibold text-gray-800">
                Follow Us
              </span>
              <div className="flex space-x-6">
                <a
                  href="https://www.facebook.com/difmotech"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook
                    size={32}
                    className="text-blue-600 hover:text-[#EA130C] transition-all duration-300"
                  />
                </a>
                <a
                  href="https://x.com/difmotech"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter
                    size={32}
                    className="text-blue-500 hover:text-[#EA130C] transition-all duration-300"
                  />
                </a>
                <a
                  href="https://in.linkedin.com/company/difmo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin
                    size={32}
                    className="text-blue-700 hover:text-[#EA130C] transition-all duration-300"
                  />
                </a>
                <a
                  href="https://www.instagram.com/thedifmo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram
                    size={32}
                    className="text-pink-600 hover:text-[#EA130C] transition-all duration-300"
                  />
                </a>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="p-8 bg-white rounded-lg shadow-2xl lg:w-2/3">
          <h2 className="mb-8 font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-500">
          Reach Us
            </h2>
            <h2 className="mb-8 font-extrabold text-center bg-clip-text bg-gradient-to-r ">
            Please complete the form below, to request a quote, and we’ll be in touch.
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <CustomInput
                id="fullName"
                label="Full Name"
                type="text"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
              />
              {errors.fullName && (
                <p className="text-xs italic text-red-500">{errors.fullName}</p>
              )}

              <CustomInput
                id="email"
                label="Email Address"
                type="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-xs italic text-red-500">{errors.email}</p>
              )}

              <CustomInput
                id="number"
                label="Mobile Number"
                placeholder="Enter your mobile number"
                value={formData.number}
                onChange={handleChange}
              />
              {errors.number && (
                <p className="text-xs italic text-red-500">{errors.number}</p>
              )}

              <CustomInput
                id="message"
                label="Message"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && (
                <p className="text-xs italic text-red-500">{errors.message}</p>
              )}

              <CustomButton
                type="submit"
                label="Submit"
                className="w-full py-3 text-lg text-white bg-[#EA130C] hover:bg-[#ea130c9d] rounded-lg shadow-md transition duration-300 ease-in-out"
              />
            </form>
          </div>
        </div>
      </div>

      <div className="mx-auto lg:flex-row">
        <div className="px-6 mx-auto sm:px-8 lg:px-16">
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-deep-blue to-[#EA130C] text-center mb-6 sm:mb-10">
            Our Location
          </h2>

          <p className="max-w-3xl mx-auto mb-10 text-xl text-center text-gray-700">
            Visit us at our office to see how we innovate and bring your ideas
            to life. Explore the map below to find our exact location.
          </p>

          <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-gray hover:border-gray-50 transition-all duration-300 transform hover:scale-105">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7118.9080435365395!2d81.01650384305744!3d26.857312606720715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x921922aa4e79ddd%3A0x54e478f227f46594!2sDifmo%20Technologies!5e0!3m2!1sen!2sin!4v1732274230223!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
               className="w-full h-full"
            ></iframe>
          </div>
        </div>
        <div className="mt-5 ml-3"></div>
      </div>
    </div>
  );
};

export default OurContact;
