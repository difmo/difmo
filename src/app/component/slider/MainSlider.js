"use client";
import React, { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Formcontect from "../OurContactForm";
import { motion, AnimatePresence } from "framer-motion";

// Dynamically import Slider
const Slider = dynamic(() => import("react-slick"), { ssr: false });

// Import images
import image1 from "../../assets/home1.jpg";
import image2 from "../../assets/home2.jpg";
import image3 from "../../assets/home3.jpg";
import image4 from "../../assets/home4.jpg";
import RequestForm from "../RequestForm";

const MainSlider = () => {
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

  // Callback for form submission
  const handleFormSubmit = () => {
    setIsModalOpen(true); // Close modal after successful form submission
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [
    {
      src: image1,
      alt: "Slide 1",
      title: "Empower Your Digital Presence",
      description:
        "Build feature-rich web applications that drive engagement and elevate your brand.",
    },
    {
      src: image2,
      alt: "Slide 2",
      title: "Seamless Mobile App Development",
      description:
        "Deliver fast, user-friendly Android and iOS apps that create unforgettable experiences.",
    },
    {
      src: image3,
      alt: "Slide 3",
      title: "Unified Cross-Platform Solutions",
      description:
        "Build apps for mobile, web, and desktop simultaneously using cutting-edge technology stacks.",
    },
    {
      src: image4,
      alt: "Slide 4",
      title: "Custom Software Tailored to Scale",
      description:
        "Design, develop, and deploy enterprise-level applications that grow with your business.",
    },
  ];

  return (
    <>
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div
              key={index}
              className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen"
            >
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="w-full h-full brightness-75"
                priority={index === 0}
              />
              <div className="absolute inset-0 flex flex-col items-start justify-center px-6 space-y-4 sm:px-16 md:px-24 lg:px-32">
                <h1 className="text-2xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                  {image.title}
                </h1>
                <p className="text-sm text-gray-300 sm:text-lg md:text-xl">
                  {image.description}
                </p>
                <button
                  onClick={handleOpenModal}
                  className="flex items-center px-5 py-2 space-x-2 text-white bg-orange-600 rounded-md hover:bg-primary-orange sm:px-6 sm:py-3"
                >
                  <span>Request Demo</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </Slider>

        {/* Modal */}
        {isModalOpen && (
          <AnimatePresence>
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black mt-14 bg-opacity-80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                ref={modalRef}
                className="flex justify-center w-1/2 rounded-lg shadow-lg"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <RequestForm
                  onSubmit={handleFormSubmit}
                  onClose={handleCloseModal}
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </>
  );
};

export default MainSlider;
