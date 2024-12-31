import React from "react";
import see from "../assets/Question.png";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
const Contactus = () => {
  return (
    <div className="mx-4 my-6 sm:mx-8 lg:mx-16">
      {/* Grid Container for mobile responsive layout */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Text Section */}
        <div className="rounded-lg">
          <h2 className="mb-6 text-4xl font-extrabold text-transparent md:text-3xl font-lilita bg-clip-text bg-gradient-to-r from-deep-blue to-primary-orange">
            Question About Services
          </h2>
          <p className="text-gray-700 text-[16px] leading-relaxed md:leading-loose tracking-wide text-justify">
            No matter what you wish to discuss, we're here to assist. We are
            eager to understand your business objectives and collaborate with
            you to create a strategy that will drive you towards success.
          </p>
          <div className="py-2">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="p-4 bg-white border rounded-lg shadow-md">
                <span className="block text-sm font-bold">Phone Number</span>
                <a
                  href="tel:+919455791624"
                  className="text-blue-500 hover:underline hover:text-primary-orange"
                >
                  +91 945-579-1624
                </a>
                ,{" "}
                <a
                  href="tel:+918172848306"
                  className="text-blue-500 hover:underline hover:text-primary-orange"
                >
                  +91 817-284-8306
                </a>
              </div>

              <div className="p-4 bg-white border rounded-lg shadow-md">
                <span className="block text-sm font-bold">Email Address</span>
                <a
                  href="mailto:info@difmo.com"
                  className="text-blue-500 hover:underline hover:text-primary-orange"
                >
                  info@difmo.com
                </a>
                ,{" "}
                <a
                  href="mailto:difmotech@gmail.com"
                  className="text-blue-500 hover:underline hover:text-primary-orange"
                >
                  difmotech@gmail.com
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2">
              <div className="p-4 bg-white border rounded-lg shadow-md">
                <span className="block text-sm font-bold">Address</span>
                <span>
                  4/37 Vibhav Khand, Gomtinagar, Lucknow, Uttar Pradesh, 226010
                </span>
              </div>

              <div className="flex items-center justify-between p-4 bg-white border rounded-lg shadow-md">
                <p className="text-sm font-bold">Social Media</p>
                <br />
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/difmotech"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook
                      size={30}
                      className="text-blue-600  hover:text-[#EA130C]"
                    />
                  </a>
                  <a
                    href="https://x.com/difmotech"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter
                      size={30}
                      className="text-blue-400  hover:text-[#EA130C]"
                    />
                  </a>
                  <a
                    href="https://in.linkedin.com/company/difmo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin
                      size={30}
                      className="text-blue-700  hover:text-[#EA130C]"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/difmotech"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram
                      size={30}
                      className="text-pink-600  hover:text-[#EA130C]"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional content section */}
        <div>
          <Image
            src={see} // Image from public folder
            alt="About Us"
            width={500}
            height={300}
            className="w-full transition-transform duration-300 ease-in-out transform shadow-lg rounded-xl "
          />
        </div>
      </div>
    </div>
  );
};

export default Contactus;
