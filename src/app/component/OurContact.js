"use client";
import { useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { db } from "../config/config"; // Ensure the Firebase setup is correct
import { collection, addDoc, Timestamp } from "firebase/firestore";

import Image from "next/image";
import contactImage from "../assets/contactimg.png";
import CustomButton from "./Buttons/CustomButton";
import CustomInput from "./CustomInput";

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
      {/* Container for the image and form */}
      <div className="container grid grid-cols-1 gap-8 py-10 mx-auto md:grid-cols-2">
        {/* Right section with image */}
        <div className="flex items-center justify-center col-span-1">
          <Image
            src={contactImage}
            alt="Contact Illustration"
            width={500}
            height={400}
            className="w-full h-auto"
          />
        </div>

        {/* Left section with form */}
        <div className="col-span-1 p-4 bg-white rounded-lg shadow-lg">
          {/* <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#26baf6]"> */}
          <h2 className="md:text-3xl text-center p-4 sm:p-0 mb-4 text-4xl font-lilita font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#26baf6] to-[#1d4ed8]  ">
            Take a meet
          </h2>
          <form onSubmit={handleSubmit}>
            <CustomInput
              id="fullName"
              label="Full Name"
              type="text"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
            />
            {errors.fullName && (
              <p className="mb-4 text-xs italic text-red-500">
                {errors.fullName}
              </p>
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
              <p className="mb-4 text-xs italic text-red-500">{errors.email}</p>
            )}

            <CustomInput
              id="number"
              label="Mobile Number"
              placeholder="Enter your mobile number"
              value={formData.number}
              onChange={handleChange}
            />
            {errors.number && (
              <p className="mb-4 text-xs italic text-red-500">
                {errors.number}
              </p>
            )}

            <CustomInput
              id="message"
              label="Message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && (
              <p className="mb-4 text-xs italic text-red-500">
                {errors.message}
              </p>
            )}

            <CustomButton
              type="submit"
              label="Submit"
              className="w-full p-5 py-2 text-white transition duration-300 rounded-lg bg-deep-blue hover:bg-primary-orange"
            />
          </form>
        </div>
      </div>

      {/* Contact Info and Social Media Links */}
      <div className="p-6 bg-white md:p-10">
  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
    {/* Image Section */}
    <div className="space-y-6">
      {/* Phone Number */}
      <div className="p-6 border rounded-lg shadow-md bg-gray-50">
        <span className="block mb-2 text-xl font-bold">Phone Number</span>
        <a href="tel:+919455791624" className="text-blue-500 hover:underline hover:text-primary-orange">
          +91 945-579-1624
        </a>,{" "}
        <a href="tel:+918172848306" className="text-blue-500 hover:underline hover:text-primary-orange">
          +91 817-284-8306
        </a>
      </div>

      {/* Email Address */}
      <div className="p-6 border rounded-lg shadow-md bg-gray-50">
        <span className="block mb-2 text-xl font-bold">Email Address</span>
        <a href="mailto:info@difmo.com" className="text-blue-500 hover:underline hover:text-primary-orange">
          info@difmo.com
        </a>,{" "}
        <a href="mailto:difmotech@gmail.com" className="text-blue-500 hover:underline hover:text-primary-orange">
          difmotech@gmail.com
        </a>
      </div>

      {/* Address */}
      <div className="p-6 border rounded-lg shadow-md bg-gray-50">
        <span className="block mb-2 text-xl font-bold">Address</span>
        <span>4/37 Vibhav Khand, Gomtinagar, Lucknow, Uttar Pradesh, 226010</span>
      </div>

      {/* Social Media */}
      <div className="flex items-center justify-between p-6 border rounded-lg shadow-md bg-gray-50">
        <span className="text-xl font-bold">Social Media</span>
        <div className="flex space-x-4">
          <a href="https://www.facebook.com/difmotech" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={30} className="text-blue-600" />
          </a>
          <a href="https://x.com/difmotech" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={30} className="text-blue-400" />
          </a>
          <a href="https://in.linkedin.com/company/difmo" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} className="text-blue-700" />
          </a>
          <a href="https://www.instagram.com/difmotech" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} className="text-pink-600" />
          </a>
        </div>
      </div>
    </div>
    <div className="flex items-center justify-center">
      <Image
        src={contactImage}
        alt="Contact Illustration"
        width={500}
        height={400}
        className="w-full h-[80%] rounded-lg  "
      />
    </div>

    
  </div>
</div>


      {/* Google Map */}
      <div className="mt-10 ">
        {/* <h2 className="text-3xl md:text-5xl font-bold text-center mb-6 text-[#26baf6]">
          Our Location
        </h2> */}
        <h2 className="md:text-3xl p-4 mb-5 sm:p-0 text-center text-4xl font-lilita font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#26baf6] to-[#1d4ed8]  ">
          Our Location
        </h2>
        <div className="w-full h-[250px]  sm:h-[450px] overflow-hidden   shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d271.4165368915143!2d81.0200616!3d26.8604014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be389340450d3%3A0x287b8d4f799103a1!2sCodeServir%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1684163893961!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default OurContact;
