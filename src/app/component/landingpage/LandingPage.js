"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import RequestForm from "../RequestForm";
import img from "../../assets/landing/landing1.png";
import svg from "../../assets/backgroundsvg/card.svg";
import Image from "next/image";

const LandingPage = () => {
  const [currentText, setCurrentText] = useState("");
  const texts = ["Websites", "Mobile Apps", "Digital Solutions"];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Typing Effect
  useEffect(() => {
    let index = 0;
    let charIndex = 0;
    let isDeleting = false;

    const typeEffect = () => {
      if (!isDeleting) {
        setCurrentText(texts[index].slice(0, charIndex + 1));
        charIndex++;
        if (charIndex === texts[index].length) {
          setTimeout(() => (isDeleting = true), 1000);
        }
      } else {
        setCurrentText(texts[index].slice(0, charIndex - 1));
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          index = (index + 1) % texts.length;
        }
      }
    };

    const typingInterval = setInterval(typeEffect, 150);
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="landing-page bg-white px-2 md:px-20 lg:px-20 relative z-10 ">
      <div className="flex flex-wrap items-center justify-center md:flex-nowrap">
        {/* Background SVG */}
        <div className=" inset-0 absolute ">
          <Image
            src={svg}
            alt="Background SVG"
            layout="fill"
            className="opacity-30 md:object-cover "
          />
        </div>

        {/* Text Section */}
        <motion.div
          className="text-content w-full md:w-1/2 px-4 my-8 z-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="w-full flex justify-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-relaxed text-center md:text-left pt-24">
              <span className="text-primary-orange bg-clip-text">
                Start, Build & Grow
              </span>{" "}
              your Business with{" "}
              <span className="text-primary-orange bg-clip-text">
                {currentText}
              </span>
            </h1>
          </div>

          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed mb-8 text-center md:text-left py-5">
            Empowering Small Businesses: Build Stunning{" "}
            <span className="text-primary-orange bg-clip-text font-semibold">
              Websites
            </span>
            , Develop High-Performance{" "}
            <span className="text-primary-orange bg-clip-text font-semibold">
              Mobile Apps
            </span>
            , and Boost Growth with{" "}
            <span className="text-primary-orange bg-clip-text font-semibold">
              Expert SEO
            </span>{" "}
            & Digital Marketing Solutions.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Link href="/contact-us">
              <button className="px-6 py-3 text-white hover:text-black transition bg-[#111827] rounded-lg shadow-lg hover:border-red-200 hover:border hover:bg-gray-200">
                Let’s Talk
              </button>
            </Link>
            <button
              onClick={handleOpenModal}
              className="px-6 py-3 text-black hover:text-white bg-gray-200 transition border border-red-200 rounded-lg shadow-lg hover:bg-[#111827]"
            >
              <span>Request Demo</span>
            </button>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="flex flex-wrap items-center justify-center md:flex-nowrap z-50"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image src={img} alt="Landing Image" />
        </motion.div>
      </div>

      {/* Modal Section */}
      {isModalOpen && (
        <div className="fixed mt-16 inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          
            <RequestForm  isOpen={isModalOpen} onClose={handleCloseModal}/>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
