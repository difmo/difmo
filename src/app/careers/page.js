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
import JobOpportunities from "../component/JobOpportunities";
import EmployeeStories from "../component/EmployeeStories";
import ApplicationProcess from "../component/ApplicationProcess";
const About = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen px-4 pt-10 md:flex-row md:pt-16 md:px-6 lg:px-14">
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
          <div className="relative rounded-md shadow-xl  ">
            {" "}
            <Image
              src={see1}
              alt="Small team photo"
              className="h-80   w-96 md:h-[450px] md:w-[450px] "
            />
          </div>
        </div>
      </div>
      <WhyJoin />
      <JobOpportunities />
      <PhotoGallery />

      {/* <EmployeeStories /> */}
      <ApplicationProcess />
      {/* /////////////  video ///////////////// */}
      {/* <div className="flex items-center justify-center h-full  bg-gray-50 z-70 ">
        <div className="grid w-full grid-cols-1 gap-8 px-6 py-10 lg:grid-cols-2 max-w-7xl">
        
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
      </div> */}

      {/* <JoinRemoteTeam /> */}
      <div className="py-24 px-24">
        <div className="flex flex-col text-center items-center py-12 bg-[#111827]   rounded-2xl">
          <h2 className="my-6 text-xl font-extrabold text-center text-transparent text-white md:text-3xl font-lilita">
            Ready to Join Us?
          </h2>
          <p className="">
            Take the next step in your career journey and be part of something
            extraordinary.
          </p>
          <div className=" flex py-4 px-5">
            <div className="px-7">
              <button className="px-6  py-3 text-black transition duration-300 rounded-md bg-gray-100 hover:bg-gray-300 hover:text-black hover:border-2 hover:border-red-600">
                <Link href="/apply-job">View Opportunities</Link>
              </button>
            </div>
            {/* <div>
              <button className="px-6  py-2 text-white ">
                <Link href="/apply-job">Contact Recruitment Team </Link>
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
