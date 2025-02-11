"use client";

import React from "react";
// src / app / assets / career / career.jpg;
import Image from "next/image";
import see1 from "../assets/career/career.jpg";
// import see2 from "../assets/career/xyz1.jpg";
import Link from "next/link";
import JoinRemoteTeam from "../component/JoinRemoteTeam";
import PhotoGallery from "../component/PhotoGallery";
import WhyJoin from "../component/WhyJoin";
const About = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen px-4 pt-10 md:flex-row md:pt-16 md:px-6 lg:px-20">
        {/* Left Content Section */}
        <div className="w-full px-4 py-6 md:w-1/2 md:py-12 flex flex-col justify-center items-start">
          <h1 className="py-3 text-2xl font-bold text-black sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
            Join <span className="text-primary-orange">Our Team</span> of
            Innovators
          </h1>
          <p className="py-2 mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-black leading-relaxed">
            Be part of a global team that's transforming the
            <span className="font-semibold"> future of technology.</span> We're
            looking for passionate individuals who want to make an impact.
          </p>
          <div className="mt-6">
            <Link
              href="/apply-job"
              className="inline-block text-white px-6 py-3 sm:px-9 sm:py-4 bg-black rounded-lg hover:bg-gray-700 transition duration-300"
            >
              Apply Now
            </Link>
          </div>
        </div>

        {/* Right Image Section */}
        <div className=" flex items-center justify-center w-full mt-8 md:w-1/2 md:mt-0">
          <div className="relative md:right-20   rounded-lg shadow-xl  ">
            {" "}
            <Image
              src={see1}
              alt="Small team photo"
              className="h-80   w-80 md:h-[500px] md:w-[500px] "
            />
          </div>
        </div>
      </div>
      <WhyJoin />
      <PhotoGallery />
      {/* /////////////  video ///////////////// */}
      <div className="flex items-center justify-center h-full  bg-gray-50 z-70 ">
        <div className="grid w-full grid-cols-1 gap-8 px-6 py-10 lg:grid-cols-2 max-w-7xl">
          {/* Left Video/Image Section */}
          <div className="relative w-full h-64 sm:h-96 lg:h-full bg-gray-200 rounded-lg shadow-md ">
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

          {/* Right Content Section */}
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-4xl font-bold text-gray-800 sm:text-5xl">
              Grow Our Team, Earn Rewards
            </h1>

            <p className="text-lg leading-relaxed text-gray-700 sm:text-xl">
              At Difmo Technologies, we deeply appreciate the hard work and
              dedication of our incredible team. We’re excited to launch our
              Employee Referral Bonus Program! Know someone who would be a
              perfect fit for our innovative team? Refer them to us, and as a
              token of gratitude, we’ll reward you. It’s our way of saying thank
              you for helping us expand and strengthen our talented workforce.
            </p>
          </div>
        </div>
      </div>

      <JoinRemoteTeam />
      <div className="flex flex-col items-center justify-center py-10 bg-secondary border-secondary">
        <h2 className="mb-6 text-xl font-extrabold text-center text-transparent text-white md:text-3xl font-lilita">
          Mastering Web Application Technologies for Your Success
        </h2>
        <button className="px-6  py-2 text-white transition duration-300 rounded-3xl bg-red-700 hover:bg-[#ff8d89]">
          <Link href="/apply-job">Apply Now</Link>
        </button>
      </div>
    </>
  );
};

export default About;
