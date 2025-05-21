"use client";
import React, { useEffect, useState } from "react";
import { data as dummyData } from "../Alldata";
import Image from "next/image";
import Link from "next/link";
import DeveloperTools from "../Tools/DeveloperTools";
import DevelopmentProcess from "../Tools/DevelopmentProcess";

const SkeletonCard = () => (
  <div className="animate-pulse p-3 rounded-2xl border bg-gray-100">
    <div className="h-40 bg-gray-300 rounded mb-4" />
    <div className="h-4 bg-gray-300 rounded w-3/4 mb-2" />
    <div className="h-3 bg-gray-200 rounded w-5/6 mb-1" />
    <div className="h-3 bg-gray-200 rounded w-2/3 mb-1" />
    <div className="h-10 bg-gray-300 rounded mt-4" />
  </div>
);

const BusinessProfiledata = ({ data }) => {
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    // Simulate API/data loading
    setTimeout(() => {
      setPageData(data || dummyData);
    }, 1500);
  }, [data]);

  // If pageData is null, render a loading state
  if (!pageData) {
    return (
      <div className="w-full  text-center text-gray-700 relative">
        <h2 className="text-3xl font-bold mb-4 px-4">Loading...</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-8">
          {Array(3)
            .fill(null)
            .map((_, index) => (
              <SkeletonCard key={index} />
            ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container flex flex-col relative items-center justify-center mx-auto ">  
 <div className="w-96 h-96 rounded-full bg-gradient-to-br from-red-300 to-pink-300 opacity-50 blur-3xl absolute top-10 -left-10 md:-left-20" />
      <div className="w-96 h-96 rounded-full bg-gradient-to-br from-blue-300 to-purple-300 opacity-50 blur-3xl absolute top-1/3 -right-10 md:-right-20" />
      <div className="w-80 h-80 rounded-full bg-gradient-to-br from-green-200 to-teal-200 opacity-50 blur-3xl absolute bottom-20 -left-10 md:-left-20" />

    <div className=" text-center text-gray-700 relative overflow-hidden">
      {/* Background Blur Elements */}
     
      {/* CTA */}
      <h2 className="text-3xl font-bold mb-4 px-4 md:px-8 relative z-10">{pageData.cta.title}</h2>
      <p className="mb-10 text-gray-600 px-4 md:px-8 relative z-10">{pageData.cta.subtitle}</p>

      {/* Solutions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-8 relative z-10">
        {pageData.solutions.map((solution, index) => (
          <div
            key={index}
            className="p-3 rounded-2xl bg-white/60 backdrop-blur-sm  hover:shadow-xl hover:scale-105 transition transform duration-300"
          >
            <Image
              src={solution.image}
              alt={solution.title}
              className="mb-4 w-full h-40 object-cover rounded-lg"
              width={400}
              height={160}
            />
            <h3 className="text-xl font-semibold mb-4">{solution.title}</h3>
            <ul className="text-left text-gray-600 space-y-2">
              {solution.features.map((feature, i) => (
                <li key={i}>✔ {feature}</li>
              ))}
            </ul>
            <Link href="/contact-us">
              <button className="mt-6 bg-secondary text-white py-2 px-4 rounded-xl w-full hover:bg-red-600 transition">
                Get Started
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* Development Process */}
      <div className="">

   <DevelopmentProcess/>
      </div>

      {/* Developer Tools */}
      {pageData.tools && <DeveloperTools tools={pageData.tools} />}

      {/* Final CTA */}
      <div className="mt-8 text-center p-6 px-4 md:px-8 rounded-lg relative z-10">
        <h2 className="text-xl font-bold">{pageData.cta.ctaTitle}</h2>
        <p className="text-sm mt-2">{pageData.cta.ctaSubtitle}</p>
        <Link href="/contact-us">
          <button className="mt-4 bg-gray-900 text-white px-6 py-2 rounded-xl hover:bg-red-600 transition">
            {pageData.cta.ctaButton}
          </button>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default BusinessProfiledata;