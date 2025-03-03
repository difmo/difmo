"use client";

import React from "react";
import { FaChartLine, FaGlobe, FaLightbulb } from "react-icons/fa"; // Importing icons

function WhyJoin() {
  const benefits = [
    {
      title: "Growth Opportunities",
      description:
        "Clear career paths and continuous learning opportunities to help you reach your full potential.",
      icon: <FaChartLine className="text-gray-500 text-xl" />,
    },
    {
      title: "Global Presence",
      description:
        "Work with diverse teams across our global offices and make an international impact.",
      icon: <FaGlobe className="text-gray-500 text-xl" />,
    },
    {
      title: "Innovation Culture",
      description:
        "Be part of cutting-edge projects and shape the future of technology.",
      icon: <FaLightbulb className="text-gray-500 text-xl" />,
    },
  ];

  return (
    <div className="py-12 text-left px-4  md:px-6 lg:px-14 ">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-black py-3 ">Why Join Us</h1>
        <h3 className="text-2xl font-bold text-gray-700   mt-2">
          Everything you need to grow your career
        </h3>
        <p className="text-gray-600 mt-4 ">
          Join a company that values innovation, growth, and your personal
          development.
        </p>
      </div>

      <div className="flex flex-wrap justify-center mt-8 gap-8">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex flex-col items-start lg:max-w-sm md:max-w-sm
            text-left "
          >
            <h3 className="font-semibold py-2  text-primary-orange flex text-xl">
              <span className="">{benefit.icon}</span>
              <span className=""> {benefit.title}</span>
            </h3>
            <p className="text-gray-600">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyJoin;
