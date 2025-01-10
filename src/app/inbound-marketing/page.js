"use client";
import React, { useState } from "react";
import Image from "next/image";
import sco1 from "../assets/marketing/1.png";
import sco2 from "../assets/marketing/inbound.webp";

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
      <div className="min-h-screen flex items-center justify-cente bg-gradient-to-b from-blue-50 to-white  ">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Section */}
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center md:text-left text-gray-800 line-">
              Upgrade Your
              <span className="text-primary-orange">
                Marketing Approach
              </span>{" "}
              with Inbound Strategy!
            </h1>
            <p className="text-base sm:text-lg text-gray-800 mb-6 text-center md:text-left">
              <span className="font-bold text-gray-800">
                Drive traffic, attract leads, and boost conversions
              </span>{" "}
              with our certified Inbound marketers.
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
          <h2 className="font-bold text-3xl md:text-5xl  px-10 l  py-4 text-gray-800">
            <span className="text-primary-orange">Inbound Marketing, </span>
            amplify your reach & foster conversions
          </h2>
          <p className="text-xl text-gray-600  py-4 px-7">
            Our inbound marketing methodology is designed to elevate your ROI
            and nurture business expansion. By focusing on attracting, engaging,
            and delighting your audience, we place your brand where your
            potential customers are actively seeking what you offer.
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
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-4  gap-6">
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
      <AccordingListInbiund />
      <FaqInbiuond />
      {/* <SeovedioInbund /> */}
      <OurContact />
    </>
  );
}
