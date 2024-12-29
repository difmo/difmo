"use client";

import React from "react";
import Image from "next/image";

import about from "../assets/about.jpg";
import Link from "next/link";
import { projects } from "../component/projects";
import Projects from "../our-projects/page";
const About = () => {
  return (
    <>
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen">
        {/* Image Component */}
        <Image
          src={about}
          alt="Contact Illustration"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 space-y-4 text-center sm:px-8">
          <h1 className="text-2xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Live Projects Showcase
          </h1>
          <p className="text-sm font-medium text-white sm:text-lg md:text-xl lg:text-2xl">
            Explore our impactful digital solutions
          </p>
        </div>
        {/* Call to Action Button */}
        {/* <button className="px-4 py-2 mt-6 font-semibold text-white transition duration-300 ease-in-out bg-orange-600 rounded-lg sm:px-6 sm:py-3 hover:bg-primary-orange">
            Read Below More Product
          </button> */}
      </div>

      <div className="px-6 py-12 bg-gray-100">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* <div className="grid grid-cols-1 gap-8 px-4 py-8 sm:grid-cols-2 lg:grid-cols-3"> */}
          {projects.map((service) => (
            <div
              className="relative overflow-hidden bg-white rounded-lg shadow-lg group"
              key={service.id}
            >
              {/* Image */}
              <Image
                src={service.image[0]}
                alt={`${service.title} image`}
                width={300}
                height={200}
                className="w-full h-auto transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                loading="lazy"
              />

              {/* Overlay Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 ease-in-out opacity-0 bg-gradient-to-b from-black/40 to-black/70 group-hover:opacity-100">
                {/* Title */}
                <h2 className="mb-4 text-lg font-bold text-white md:text-xl font-lilita">
                  {service.title}
                </h2>

                {/* Read More Button */}
                <Link href={`/our-projects/${service.id}`}>
                  <button
                    className="relative px-6 py-3 pr-10 font-semibold text-white transition-transform duration-300 rounded-full shadow-lg bg-gradient-to-r from-primary-orange to-deep-blue hover:scale-105 focus:outline-none active:scale-95"
                    aria-label={`Read more about ${service.title}`}
                  >
                    Read More
                    <span className="absolute w-4 h-4 ml-2 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 mt-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 12h14m-6-6l6 6-6 6"
                        />
                      </svg>
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
