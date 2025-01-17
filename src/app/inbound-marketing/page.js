"use client";
import React, { useState } from "react";
import Image from "next/image";
import sco1 from "../assets/landing/landing3.png";
import sco2 from "../assets/landing/landing6.png";

import OurContact from "../component/OurContact";
import app from "../assets/Deliver/app.svg";
import AccordingListInbiund from "../component/inbound-Marketing/AccordingListInbiund";
import FaqInbiuond from "../component/inbound-Marketing/FaqInbiuond";
import SeovedioInbund from "../component/inbound-Marketing/SeovedioInbund";
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
      title: "Drive Traffic",
      description:
        "Attract high-quality leads with captivating, on-point content.",
    },
    {
      icon: "📈", // Replace with an appropriate icon or image
      title: "Boost Conversions",
      description:
        "Utilize valuable insights to increase conversion rates organically.",
    },
    {
      icon: "🛡️", // Replace with an appropriate icon or image
      title: "Enhance ROI",
      description: "Optimize strategic processes to maximize returns.",
    },
    {
      icon: "🎯", // Replace with an appropriate icon or image
      title: "Marketing Metrics",
      description: "Keep a close eye on metrics to identify improvement areas.",
    },
    {
      icon: "📉", // Replace with an appropriate icon or image
      title: "Sales Efforts",
      description:
        "Simplify the job of sales by sharing information collaboratively.",
    },
    {
      icon: "💾",
      title: "Increase Visibility",
      description:
        "Engage your audience with content that boosts brand awareness.",
    },
    {
      icon: "💾",
      title: "Audience Needs",
      description:
        "Dive deep into the preferences and needs of your potential buyers.",
    },
    {
      icon: "💾",
      title: "Trust and Credibility",
      description:
        "Offer valuable, consent-driven content to build trust with your audience.",
    },
  ];
  return (
    <>
      {/* Main Section */}
      <div className="flex items-center min-h-screen justify-cente bg-gradient-to-b from-blue-50 to-white ">
        <div className="container grid items-center grid-cols-1 gap-8 px-6 mx-auto md:px-12 lg:px-20 md:grid-cols-2">
          {/* Left Section */}
          <div>
            <h1 className="mb-4 text-3xl font-bold text-center text-gray-800 sm:text-4xl md:text-5xl md:text-left line-">
              Upgrade Your
              <span className="ml-2 text-primary-orange">
                Marketing Approach
              </span>{" "}
              with Inbound Strategy!
            </h1>
            <p className="mb-6 text-base text-center text-gray-800 sm:text-lg md:text-left">
              <span className="font-bold text-gray-800">
                Drive traffic, attract leads, and boost conversions
              </span>{" "}
              with our certified Inbound marketers.
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
          <h2 className="px-10 py-4 text-3xl font-bold text-gray-800 md:text-5xl l">
            <span className="text-primary-orange">Inbound Marketing, </span>
            amplify your reach & foster conversions
          </h2>
          <p className="py-4 text-xl text-gray-600 px-7">
            Our inbound marketing methodology is designed to elevate your ROI
            and nurture business expansion. By focusing on attracting, engaging,
            and delighting your audience, we place your brand where your
            potential customers are actively seeking what you offer.
          </p>
          {/* <button
            className="flex justify-center p-2 text-center text-white border-2 border-gray-400 bg-deep-blue rounded-xl "
            onClick={openModal}
          >
            Get a Quote
          </button> */}
        </div>
      </div>
      {/*      */}

      <div>
        <div className="px-6 py-10 ">
          <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-4">
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
      <AccordingListInbiund />
      <FaqInbiuond />
      {/* <SeovedioInbund /> */}
      <OurContact />
    </>
  );
}
