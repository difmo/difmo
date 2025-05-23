[media pointer="file-service://file-KHuw2pFdixPNT3ZwK4jAUz"]
"use client";
import Formcontect from "./OurContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
  faClock
} from "@fortawesome/free-solid-svg-icons";
import FAQSection from "./FAQSection";
import Image from "next/image";
import logo from "../assets/backgroundsvg/Vector.svg";
import tweet from "../assets/backgroundsvg/twit.svg";
import insta from "../assets/backgroundsvg/insta.svg";
import letter from "../assets/backgroundsvg/letter_send 1.png";

const OurContact = () => {
  return (
    <div className="w-full bg-gray-50 px-4 sm:px-6 lg:px-12 py-8 lg:py-16">
      <div className="container mx-auto">
        {/* Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
          {/* Left Section: Contact Info */}
          <div className="relative w-full rounded-lg bg-[#002D55] text-white p-6 sm:p-8 overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-6">
                Let’s discuss\n
on something cool\n together
              </h2>
              {/* Phone Number */}
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <FontAwesomeIcon icon={faPhone} className="w-5 h-5 mr-3" />
                  <span className="font-semibold">Phone Number</span>
                </div>
                <div className="pl-8">
                  <a
                    href="tel:+919519202509"
                    className="block hover:underline transition-colors duration-200"
                  >
                    +91 951-920-2509
                  </a>
                  <a
                    href="tel:+919455791624"
                    className="block hover:underline transition-colors duration-200 mt-1"
                  >
                    +91 945-579-1624
                  </a>
                </div>
              </div>
              {/* Email Address */}
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 mr-3" />
                  <span className="font-semibold">Email Address</span>
                </div>
                <div className="pl-8">
                  <a
                    href="mailto:info@difmo.com"
                    className="block hover:underline transition-colors duration-200"
                  >
                    info@difmo.com
                  </a>
                  <a
                    href="mailto:difmotech@gmail.com"
                    className="block hover:underline transition-colors duration-200 mt-1"
                  >
                    difmotech@gmail.com
                  </a>
                </div>
              </div>
              {/* Address */}
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="w-5 h-5 mr-3"
                  />
                  <span className="font-semibold">Address</span>
                </div>
                <p className="pl-8">
                  4/37 Vibhav Khand, Gomtinagar, Lucknow, Uttar Pradesh, 226010
                </p>
              </div>
              {/* Business Hours */}
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <FontAwesomeIcon
                    icon={faClock}
                    className="w-5 h-5 mr-3"
                  />
                  <span className="font-semibold">Business Hours</span>
                </div>
                <p className="pl-8">
                  Monday - Friday: 9:00 AM - 6:00 PM
                  <br />
                  Saturday: 10:00 AM - 4:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
              {/* Social Media Icons */}
              <div className="flex gap-4 mt-8">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Image
                    src={insta}
                    alt="Instagram"
                    className="w-8 h-8 object-contain hover:opacity-80 transition-opacity"
                  />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Image
                    src={tweet}
                    alt="Twitter"
                    className="w-8 h-8 object-contain hover:opacity-80 transition-opacity"
                  />
                </a>
               
              </div>
            </div>

            <div>
               <a href="mailto:info@difmo.com">
                  <Image
                    src={letter}
                    alt="Email"
                    className=" absolute -bottom-10 left-20 object-contain hover:opacity-80 transition-opacity"
                  />
                </a>
            </div>
            {/* Background Logo */}
            <div className="absolute bottom-0 right-0 opacity-35   ">
              <Image
                src={logo}
                alt="Background Logo"
                className="object-contain"
              />
            </div>
          </div>
          {/* Right Section: Contact Form */}
          <div className="w-full">
            <Formcontect />
          </div>
        </div>
        {/* Map Section */}
        <div className="mt-12 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-4">
            Our Location
          </h2>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-gray-600 mb-8">
            Visit us at our office to see how we innovate and bring your ideas to
            life. Explore the map below to find our exact location.
          </p>
          <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-[1.02]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7118.9080435365395!2d81.01650384305744!3d26.857312606720715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x921922aa4e79ddd%3A0x54e478f227f46594!2sDifmo%20Technologies!5e0!3m2!1sen!2sin!4v1732274230223!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full border-0"
              title="Difmo Technologies Location"
            />
          </div>
        </div>
        {/* FAQ Section */}
        <div className="mt-12">
          <FAQSection />
        </div>
      </div>
    </div>
  );
};

export default OurContact;



make design like screenshort
