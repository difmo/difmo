import React, { useState, useEffect, useRef } from "react";

import OurContact from "../OurContact";
import Link from "next/link";
import RequestForm from "../RequestForm";
import MainSlider from "../slider/MainSlider";

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
  // const handleContactClick = () => {
  //   // router.push("");
  //   navigate("/contact-us");
  //   <contact-us />;
  // };
  return (
    <div className="landing-page bg-gradient-to-b from-gray-100 to-gray-200 py-12">
      <div className="flex flex-wrap items-center justify-center md:flex-nowrap">
        {/* Text Section */}
        <div className="text-content w-full md:w-1/2 px-4 my-8">
          <div className="w-full flex justify-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-relaxed text-center md:text-left">
              <span className="bg-gradient-to-r from-red-400 to-purple-600 text-transparent bg-clip-text">
                Start, Build & Grow
              </span>{" "}
              your Business with{" "}
              <span className="bg-gradient-to-r from-red-400 to-purple-600 text-transparent bg-clip-text">
                {currentText}
              </span>
            </h1>
          </div>

          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed mb-8 text-center md:text-left">
            Empowering Small Businesses: Build Stunning{" "}
            <span className="bg-gradient-to-r from-red-400 to-purple-600 text-transparent bg-clip-text font-semibold">
              Websites
            </span>
            , Develop High-Performance{" "}
            <span className="bg-gradient-to-r from-red-400 to-purple-600 text-transparent bg-clip-text font-semibold">
              Mobile Apps
            </span>
            , and Boost Growth with{" "}
            <span className="bg-gradient-to-r from-red-400 to-purple-600 text-transparent bg-clip-text font-semibold">
              Expert SEO
            </span>{" "}
            & Digital Marketing Solutions.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Link href={"/contact-us"}>
              <button className="px-6 py-3 text-white transition bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700">
                Let’s Talk
              </button>
            </Link>
            <button
              onClick={handleOpenModal}
              className="px-6 py-3 text-blue-600 transition border border-blue-600 rounded-lg shadow-lg hover:bg-blue-100"
            >
              <span>Request Demo</span>
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 px-4">
          <MainSlider />
        </div>
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
