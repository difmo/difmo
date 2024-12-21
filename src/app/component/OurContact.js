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
    <div className="min-h-screen">
      <div className="container mx-auto py-12 md:py-16 px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
          {/* Right section with image */}
          <div className="flex items-center justify-center">
            <Image
              src={contactImage}
              alt="Contact Illustration"
              width={500}
              height={400}
              className="w-full h-auto rounded-lg object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Left section with form */}
          <div className="bg-white p-8 sm:p-10 md:p-12 ">
            {/* <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#26baf6] to-[#1d4ed8] text-center mb-8">
        Take a Meet
      </h2> */}

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
                <p className="text-xs text-red-500 italic">{errors.fullName}</p>
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
                <p className="text-xs text-red-500 italic">{errors.email}</p>
              )}

              <CustomInput
                id="number"
                label="Mobile Number"
                placeholder="Enter your mobile number"
                value={formData.number}
                onChange={handleChange}
              />
              {errors.number && (
                <p className="text-xs text-red-500 italic">{errors.number}</p>
              )}

              <CustomInput
                id="message"
                label="Message"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && (
                <p className="text-xs text-red-500 italic">{errors.message}</p>
              )}

              <CustomButton
                type="submit"
                label="Submit"
                className="w-full py-3 text-lg text-white bg-deep-blue hover:bg-[#EA130C] rounded-lg shadow-md transition duration-300 ease-in-out"
              />
            </form>
          </div>
        </div>
      </div>

      {/* Contact Info and Social Media */}
      <div className="p-8 md:p-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Left Section: Contact Info */}
          <div className="space-y-8 flex flex-col justify-between">
            <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#26baf6] to-[#1d4ed8] text-center mb-8">
              We're here to help – contact us anytime.
            </h2>
            {/* Phone Number */}
            <div className="p-6 border-b border-gray-200">
              <span className="block mb-3 text-2xl font-semibold text-gray-800">
                Phone Number
              </span>
              <a
                href="tel:+919455791624"
                className="block text-xl text-blue-600 hover:text-[#EA130C] hover:underline"
              >
                +91 945-579-1624
              </a>
              <a
                href="tel:+918172848306"
                className="block text-xl text-blue-600 hover:text-[#EA130C] hover:underline"
              >
                +91 817-284-8306
              </a>
            </div>

            {/* Email Address */}
            <div className="p-6 border-b border-gray-200">
              <span className="block mb-3 text-2xl font-semibold text-gray-800">
                Email Address
              </span>
              <a
                href="mailto:info@difmo.com"
                className="block text-xl text-blue-600 hover:text-[#EA130C] hover:underline"
              >
                info@difmo.com
              </a>
              <a
                href="mailto:difmotech@gmail.com"
                className="block text-xl text-blue-600 hover:text-[#EA130C] hover:underline"
              >
                difmotech@gmail.com
              </a>
            </div>

            {/* Address */}
            <div className="p-6 border-b border-gray-200">
              <span className="block mb-3 text-2xl font-semibold text-gray-800">
                Address
              </span>
              <span className="text-lg text-gray-700">
                4/37 Vibhav Khand, Gomtinagar, Lucknow, Uttar Pradesh, 226010
              </span>
            </div>

            {/* Social Media Links */}
            <div className="p-6">
              <span className="block mb-3 text-2xl font-semibold text-gray-800">
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

          {/* Right Section: Contact Image */}
          <div className="flex items-stretch justify-center">
            <Image
              src={contactImage}
              alt="Contact Illustration"
              width={500}
              height={400}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="relative w-full bg-gradient-to-b from-gray-50 to-gray-200 py-16">
        <div className=" mx-auto px-6 sm:px-8 lg:px-16">
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-deep-blue to-[#EA130C] text-center mb-6 sm:mb-10">
            Our Location
          </h2>

          <p className="text-xl text-gray-700 mb-10 text-center max-w-3xl mx-auto">
            Visit us at our office to see how we innovate and bring your ideas
            to life. Explore the map below to find our exact location.
          </p>

          <div className="w-full h-[500px] sm:h-[600px] lg:h-[700px] rounded-2xl overflow-hidden shadow-xl border:0; transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7118.9080435365395!2d81.01650384305744!3d26.857312606720715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x921922aa4e79ddd%3A0x54e478f227f46594!2sDifmo%20Technologies!5e0!3m2!1sen!2sin!4v1732274230223!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="transition-transform transform duration-300"
            ></iframe>
          </div>
        </div>
        <div className="ml-3 mt-5"></div>
      </div>
    </div>
  );
};

export default OurContact;
