"use client";
import React, { useEffect, useState } from "react";
import { data } from "../Alldata"; // Import both data and mobile
import Image from "next/image";
import { useParams } from "react-router-dom";
import Link from "next/link";

const BusinessProfiledata = ({ data }) => {
  return (
    <div className="p-6 md:p-12 bg-gray-50 text-center text-gray-700">
      {/* CTA Section */}
      <h2 className="text-3xl font-bold mb-4">{data.cta.title}</h2>
      <p className="mb-10 text-gray-600">{data.cta.subtitle}</p>

      {/* Solutions Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {data.solutions.map((solution, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl hover:shadow-red-400 hover:shadow-2xl transition"
          >
            <Image
              src={solution.image}
              alt={solution.title}
              className=" mb-4 bg-cover h-ful w-full"
            />
            <h3 className="text-xl font-semibold mb-4">{solution.title}</h3>
            <ul className="text-left text-gray-600 space-y-2">
              {solution.features.map((feature, i) => (
                <li key={i}>✔ {feature}</li>
              ))}
            </ul>
            <button className="mt-6 bg-black text-white py-2 px-4 rounded w-full">
              Get Started
            </button>
          </div>
        ))}
      </div>

      {/* Development Process */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold mb-8">Our Development Process</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {data.processSteps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4">{step.icon}</div>
              <h4 className="font-semibold mb-2">{step.title}</h4>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="mt-8 text-center bg-gray-100 p-6 rounded-lg">
        <h2 className="text-xl font-bold">{data.cta.ctaTitle}</h2>
        <p className="text-sm mt-2">{data.cta.ctaSubtitle}</p>
        <Link href="/contact-us">
          <button className="mt-4 bg-gray-900 text-white px-6 py-2 rounded-xl">
            {data.cta.ctaButton}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BusinessProfiledata;
