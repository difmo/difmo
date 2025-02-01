"use client";
import { useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
// import { db } from "../config/config"; // Ensure the Firebase setup is correct
import { collection, addDoc, Timestamp } from "firebase/firestore";

import Formcontect from "./OurContactForm";

const OurContact = () => {
  return (
    <div className="min-h-screen">
      <div className="container px-4 py-12 mx-auto md:py-16">
        <div className="container flex flex-col gap-8 mx-auto lg:flex-row">
          {/* Left section with image */}

          <div className="p-8 bg-[#111827] rounded-3xl  md:rounded-lg  lg:w-2/3">
            <h2 className="mb-8 text-4xl font-extrabold text-center text-transparent text-white bg-clip-text">
              Quick Contact
            </h2>
            <h2 className="mb-8 font-extrabold text-center text-white capitalize bg-clip-text bg-gradient-to-r ">
              Feel free to contact with our team
            </h2>
            {/* Phone Number */}
            <div className="p-6 border-b border-gray-200">
              <span className="block mb-3 text-white">Phone Number</span>
              <a
                href="tel:+919455791624"
                className="block text-white hover:text-primary-orange hover:underline"
              >
                +91 945-579-1624
              </a>
              <a
                href="tel:+918172848306"
                className="block text-white hover:text-primary-orange hover:underline"
              >
                +91 817-284-8306
              </a>
            </div>

            {/* Email Address */}
            <div className="p-6 border-b border-gray-200">
              <span className="block mb-3 text-white">Email Address</span>
              <a
                href="mailto:info@difmo.com"
                className="block text-white hover:text-primary-orange hover:underline"
              >
                info@difmo.com
              </a>
              <a
                href="mailto:difmotech@gmail.com"
                className="block text-white hover:text-primary-orange hover:underline"
              >
                difmotech@gmail.com
              </a>
            </div>

            {/* Address */}
            <div className="p-6 border-b border-gray-200">
              <span className="block mb-3 text-white">Address</span>
              <span className="text-white hover:text-primary-orange ">
                4/37 Vibhav Khand, Gomtinagar, Lucknow, Uttar Pradesh, 226010
              </span>
            </div>

            {/* Social Media Links */}
            <div className="p-6">
              <span className="block mb-3 text-white">Follow Us</span>
              <div className="flex space-x-6">
                <a
                  href="https://www.facebook.com/difmotech"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook
                    size={32}
                    className="text-white transition-all duration-300 hover:text-primary-orange"
                  />
                </a>
                <a
                  href="https://x.com/difmotech"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter
                    size={32}
                    className="text-white transition-all duration-300 hover:text-primary-orange"
                  />
                </a>
                <a
                  href="https://in.linkedin.com/company/difmo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin
                    size={32}
                    className="text-white transition-all duration-300 hover:text-primary-orange"
                  />
                </a>
                <a
                  href="https://www.instagram.com/thedifmo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram
                    size={32}
                    className="text-white transition-all duration-300 hover:text-primary-orange"
                  />
                </a>
              </div>
            </div>
          </div>
          {/* right */}
          <Formcontect />
        </div>
      </div>

      <div className="mx-auto lg:flex-row">
        <div className="px-6 mx-auto sm:px-8 lg:px-16">
          <h2 className="mb-6 text-5xl font-extrabold text-center text-black sm:mb-10">
            Our Location
          </h2>

          <p className="max-w-3xl mx-auto mb-10 text-lg text-center text-gray-700">
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
