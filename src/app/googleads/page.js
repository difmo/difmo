"use client";
import React, { useState } from "react";
import Image from "next/image";
import sco1 from "../assets/landing/landing1.png";
import sco2 from "../assets/marketing/google.gif";

import OurContact from "../component/OurContact";
import app from "../assets/Deliver/app.svg";
import AccordingListads from "../component/googleAds/AccordingListads";
import Faqads from "../component/googleAds/Faqads";
import Seovedioads from "../component/googleAds/Seovedioads";
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
        "Connect and engage with the right audience—individuals genuinely interested in your products or services.",
    },
    {
      icon: "📈", // Replace with an appropriate icon or image
      title: "Cost-Effective",
      description:
        "Optimize your budget by targeting the right audience and maximizing your return on investment.",
    },
    {
      icon: "🛡️", // Replace with an appropriate icon or image
      title: "Fits Any Business Size",
      description:
        "Whether you’re a growing startup or an established enterprise, our services are designed to deliver results for businesses of all sizes.",
    },
    {
      icon: "🎯", // Replace with an appropriate icon or image
      title: "Expert Assistance",
      description:
        "Our skilled team is here to guide you at every step, offering dedicated support and expert advice",
    },
    {
      icon: "📉", // Replace with an appropriate icon or image
      title: "More Conversions",
      description:
        "Transform more of your website visitors into loyal customers with precisely targeted Google Ads. ",
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
            <h1 className="mb-4 text-3xl font-bold text-center text-gray-800 sm:text-4xl md:text-5xl md:text-left">
              Maximize Your Impact, Multiply {""}
              <span className="text-primary-orange">
                Your Leads with Google Ads!{" "}
              </span>{" "}
            </h1>
            <p className="mb-6 text-base text-center text-gray-800 sm:text-lg md:text-left">
              Generate{" "}
              <span className="font-bold text-gray-800">
                high-quality leads with precision-targeted Google Ads
              </span>{" "}
              powered by our expert services!
            </p>
            <div className="flex justify-center gap-4 md:justify-start">
              <button className="px-6 py-3 text-white transition bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700">
                Get a Quote
              </button>
              <button className="px-6 py-3 text-blue-600 transition border border-blue-600 rounded-lg shadow-lg hover:bg-blue-100">
                Book a Consultation
              </button>
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
          <h2 className="px-2 py-4 text-3xl font-bold leading-normal text-gray-800 md:text-5xl">
            Achieve success with expertly crafted{" "}
            <span className="text-primary-orange">Google Ads strategies!</span>
          </h2>
          <p className="py-4 text-xl text-gray-600 px-7">
            Unlock your business's potential with our expert Google Ads lead
            generation services. We design and run highly effective campaigns
            that connect you with the right audience and convert them into
            valuable leads. Our goal is to drive consistent growth for your
            business by delivering a steady stream of high-quality leads
            tailored to your needs.
          </p>
          <button
            className="flex justify-center p-2 text-center text-white border-2 border-gray-400 bg-deep-blue rounded-xl "
            onClick={openModal}
          >
            Get a Quote
          </button>
        </div>
      </div>
      {/*      */}

      <div>
        <div className="px-6 py-10 ">
          <div className="container grid justify-center grid-cols-1 gap-6 mx-auto sm:grid-cols-2 lg:grid-cols-3">
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
      <AccordingListads />
      <Faqads />
      {/* <Seovedioads /> */}
      <OurContact />
    </>
  );
}
