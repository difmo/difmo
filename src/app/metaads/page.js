"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
// import sco1 from "../assets/Deliver/app.svg";
import sco1 from "../assets/landing/landing3.png";
import sco2 from "../assets/landing/landing6.png";
import AccordionList from "../component/AccordionList";

import OurContact from "../component/OurContact";
import app from "../assets/Deliver/app.svg";
import AccordingListMeta from "../component/metaAds/AccordingListMeta";
import FaqMeta from "../component/metaAds/FaqMeta";
import Seovediometa from "../component/metaAds/Seovediometa";
import Contactus from "../component/Contactus";
import Link from "next/link";
import RequestForm from "../component/RequestForm";
export default function Pageseo() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
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
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const features = [
    {
      icon: "📊", // Replace with an appropriate icon or image
      title: "Better Leads",
      description:
        "Connect with individuals genuinely interested in your products or services for higher conversion rates.",
    },
    {
      icon: "📈", // Replace with an appropriate icon or image
      title: "Smart Spending",
      description:
        "Maximize your ad budget by targeting the right audience and ensuring cost-effective campaigns.",
    },
    {
      icon: "🛡️", // Replace with an appropriate icon or image
      title: "Fits All Sizes",
      description:
        " Our services are flexible and scalable, supporting businesses at any stage of growth.",
    },
    {
      icon: "🎯", // Replace with an appropriate icon or image
      title: "Expert Support",
      description:
        "Benefit from our experienced team, providing guidance and support throughout your campaign journey.",
    },
    {
      icon: "📉", // Replace with an appropriate icon or image
      title: "More Sales",
      description:
        "Drive higher sales and conversions through expertly targeted ads that resonate with your audience.",
    },
    // {
    //   icon: "💾",
    //   title: "App Store Optimization (ASO)",
    //   description:
    //     "App title and description Keywords in app listing  Positive user reviews",
    // },
  ];
  return (
    <>
      {/* Main Section */}
      <div className="flex items-center min-h-screen justify-cente bg-gradient-to-b from-blue-50 to-white ">
        <div className="container grid items-center grid-cols-1 gap-8 px-6 mx-auto md:px-12 lg:px-20 md:grid-cols-2">
          {/* Left Section */}
          <div>
            <h1 className="pb-5 text-3xl font-bold text-center text-gray-800 sm:text-3xl leading-tight md:leading-tight md:text-5xl md:text-left">
              Maximize Your Reach, Multiply{" "}
              <span className="text-primary-orange">
                Your Leads with Meta Ads!{" "}
              </span>{" "}
            </h1>
            <p className="mb-6 text-base text-center text-gray-800 sm:text-lg md:text-left">
              Generate designed to grow your business.{" "}
              <span className="font-bold text-gray-800">
                top-quality leads with our expert Meta ad services,{" "}
              </span>{" "}
              designed to grow your business.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <button
                onClick={handleOpenModal}
                className="bg-blue-600 text-white px-12 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
              >
                Get a Quote
              </button>
              <Link
                href={"/contact-us"}
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg shadow-lg hover:bg-blue-100 transition"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
          {/* Image Section */}
          <div className="image-content">
            <Image
              src={sco1}
              alt="Business Illustration"
              width={500}
              height={500}
              className="illustration"
            />
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="w-full px-12">
          <Image
            src={sco2}
            alt="difmo seo service"
            width={534}
            height={328}
            title="Search Engine Optimization "
          />
        </div>

        {/* Content Section */}

        <div className="w-full">
          <h2 className="px-2 py-4 text-3xl font-bold leading-relaxed md:leading-tight text-gray-800 md:text-5xl">
            Navigating success with strategic{" "}
            <span className="text-primary-orange">Meta ads </span>
          </h2>
          <p className="py-4 text-xl text-gray-600 px-7 leading-relaxed">
            Unlock new growth for your business with our Meta ad services. We
            create and manage ad campaigns that attract the right customers and
            help turn them into loyal clients. Our goal is to deliver a steady
            flow of leads that match your business needs.
          </p>
        </div>
      </div>
      {/*      */}

      <div>
        <div className="px-6 py-10 ">
          <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 text-center bg-white rounded-lg shadow-md"
              >
                <div className="mb-4 text-5xl text-blue-600">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <AccordingListMeta />
      <FaqMeta />
      {/* <Seovediometa /> */}
      <Contactus />
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div
            ref={modalRef}
            className="relative max-w-lg w-full bg-white rounded-lg shadow-lg p-6"
          >
            <button
              aria-label="Close Modal"
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-2xl"
            >
              &times;
            </button>
          </div>
          {isModalOpen && (
            <div className="fixed mt-16 inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4 sm:px-6 md:px-8">
              <RequestForm isOpen={isModalOpen} onClose={handleCloseModal} />
            </div>
          )}
        </div>
      )}
    </>
  );
}
