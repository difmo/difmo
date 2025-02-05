"use client";

import React, { useState, useEffect, useRef } from "react";
// import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import RequestForm from "../RequestForm";
import MainSlider from "../slider/MainSlider";
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
  useEffect(() => {
    let index = 0;

    const type = () => {
      let charIndex = 0;
      setCurrentText("");

      const typeInterval = setInterval(() => {
        if (charIndex < texts.length) {
          setCurrentText(texts[charIndex]);
          charIndex++;
        } else {
          clearInterval(typeInterval);
          setTimeout(deleteText, 1000);
        }
      }, 1000);
    };

    const deleteText = () => {
      let charIndex = texts[index].length;

      const deleteInterval = setInterval(() => {
        if (charIndex > 0) {
          setCurrentText((prev) => prev.slice(0, -1));
          charIndex--;
        } else {
          clearInterval(deleteInterval);
          index = (index + 1) % texts.length;
          setTimeout(type, 300);
        }
      }, 100);
    };

    type();
    return () => setCurrentText("");
  }, []);
  const handleContactClick = () => {
    // router.push("");
    navigate("/contact-us");
    // <contact-us />;
  };
  return (
    <div className="landing-page bg-white px-2 md:px-20 lg:px-20 top-10">
      <div className="flex flex-wrap items-center justify-center md:flex-nowrap ">
        <div className="absolute inset-0 ">
          <Image
            src={svg}
            alt="Background SVG"
            layout="fill"
            // objectFit="cover"
            className="opacity-30 md:object-cover z-10" // Adjust opacity as needed
          />
        </div>
        {/* Text Section */}
        <motion.div
          className="text-content w-full md:w-1/2 px-4 my-8"
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

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Link href={"/contact-us"}>
              <button className="px-6 py-3 text-white hover:text-black transition bg-[#111827] rounded-lg shadow-lg hover:border-primary-orange hover:border hover:bg-gray-200">
                Let’s Talk
              </button>
            </Link>
            <button
              onClick={handleOpenModal}
              className="px-6 py-3 text-black hover:text-white bg-gray-200 transition border border-primary-orange rounded-lg shadow-lg hover:bg-[#111827]"
            >
              <span>Request Demo</span>
            </button>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="flex flex-wrap items-center justify-center md:flex-nowrap"
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
          <div
            className="modal-content bg-white rounded-lg shadow-lg p-6 max-w-lg relative"
            ref={modalRef}
          >
            <button
              className="absolute top-8 right-4 text-gray-600 hover:text-gray-800"
              onClick={handleCloseModal}
            >
              &times;
            </button>
            <RequestForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;