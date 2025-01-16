"use client";

import React from "react";
import Image from "next/image";
import see1 from "../assets/career/alpha.jpg";
// import see2 from "../assets/career/xyz1.jpg";
import Link from "next/link";
import JoinRemoteTeam from "../component/JoinRemoteTeam";
import PhotoGallery from "../component/PhotoGallery";
const About = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen px-4 pt-10 bg-secondary border-secondary md:flex-row md:pt-16 md:px-6 lg:px-20">
        {/* Left Content Section */}
        <div className="w-full p-2 md:w-1/2 md:p-3">
          <h1 className="py-3 text-2xl font-bold text-white sm:text-2xl md:text-3xl lg:text-4xl">
            Looking For An Exciting{" "}
            <span className="text-primary-orange">Career in Technology</span>{" "}
            And Innovat ion
          </h1>
          <p className="py-2 mt-4 text-base text-white sm:text-lg md:text-xl">
            Join our dynamic team and make an impact!
            <span className="font-semibold"> Explore</span> opportunities to
            grow,learn, and achieve your
            <span className="font-semibold"> professional </span> goals with us.
          </p>
          <div className="py-5">
            <Link
              href="/apply-job"
              className="mt-6 text-white px-6 py-2 sm:px-8 sm:py-3 bg-primary-orange rounded-3xl  hover:bg-[#ff8d89]"
            >
              Apply Now
            </Link>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative flex items-center justify-center w-full mt-8 md:w-1/2 md:mt-0">
          {/* Small Image */}
          <div className="absolute right-0 h-32 overflow-hidden border-4 rounded-lg shadow-lg -top-16 w-28 sm:h-40 sm:w-36 md:h-60 md:w-52 border-primary-orange">
            <Image
              src={see1}
              alt="Small team photo"
              layout="fill"
              // objectFit="cover"
            />
          </div>

          {/* Large Circular Image */}
          <div
            className="border-4 rounded-full shadow-xl border-primary-orange"
            style={{
              backgroundImage: `url('/bgim.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "90%", // Dynamically adjust for smaller screens
              maxWidth: "500px", // Cap size for larger screens
              aspectRatio: "1", // Ensures perfect circle
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
      </div>

      <PhotoGallery />
      {/* /////////////  video ///////////////// */}
      <div className="flex items-center justify-center h-full bg-gray-50 z-70 ">
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
