"use client";
import React, { useState } from "react";
import Image from "next/image";
// import sco1 from "../assets/Deliver/app.svg";
import sco2 from "../assets/marketing/meta.png";
import AccordionList from "../component/AccordionList";

import OurContact from "../component/OurContact";
import app from "../assets/Deliver/app.svg";
import AccordingListMeta from "../component/metaAds/AccordingListMeta";
import FaqMeta from "../component/metaAds/FaqMeta";
import Seovediometa from "../component/metaAds/Seovediometa";
import Contactus from "../component/Contactus";
export default function Pageseo() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
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
      <div className="min-h-screen flex items-center justify-cente bg-gradient-to-b from-blue-50 to-white  ">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Section */}
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl  font-bold pb-5 text-center md:text-left text-gray-800">
              Maximize Your Reach, Multiply{" "}
              <span className="text-primary-orange">
                Your Leads with Meta Ads!{" "}
              </span>{" "}
            </h1>
            <p className="text-base sm:text-lg text-gray-800 mb-6 text-center md:text-left">
              Generate designed to grow your business.{" "}
              <span className="font-bold text-gray-800">
                top-quality leads with our expert Meta ad services,{" "}
              </span>{" "}
              designed to grow your business.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition">
                Get a Quote
              </button>
              <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg shadow-lg hover:bg-blue-100 transition">
                Book a Consultation
              </button>
            </div>
          </div>

          <div className="relative w-full h-full bg-gray-200 rounded-lg shadow-md overflow-hidden">
            {/* YouTube Video Embed */}
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/_gxv4BnSiBU"
              title="Referral video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="object-center"
            ></iframe>
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
          <h2 className="font-bold text-3xl md:text-5xl leading-normal px-2  py-4 text-gray-800">
            Navigating success with strategic{" "}
            <span className="text-primary-orange">Meta ads </span>
          </h2>
          <p className="text-xl text-gray-600  py-4 px-7">
            Unlock new growth for your business with our Meta ad services. We
            create and manage ad campaigns that attract the right customers and
            help turn them into loyal clients. Our goal is to deliver a steady
            flow of leads that match your business needs.
          </p>
          <button
            className="bg-deep-blue border-2 border-gray-400  text-center text-white rounded-xl p-2 flex justify-center "
            onClick={openModal}
          >
            Get a Quote
          </button>
        </div>
      </div>
      {/*      */}

      <div>
        <div className=" py-10 px-6">
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center"
              >
                <div className="text-5xl text-blue-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-800">
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
    </>
  );
}
