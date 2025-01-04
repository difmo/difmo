"use client";

import React from "react";
import Image from "next/image";
import see1 from "../assets/career/alpha.jpg";
import see2 from "../assets/career/xyz1.jpg";
import Link from "next/link";
import JoinRemoteTeam from "../component/JoinRemoteTeam";
import PhotoGallery from "../component/PhotoGallery";
const About = () => {
  return (
    <>
      <div className=" bg-secondary border-secondary  min-h-screen flex flex-col md:flex-row items-center justify-center pt-10     md:pt-16 px-4 md:px-6 lg:px-20">
        {/* Left Content Section */}
        <div className="w-full md:w-1/2 p-2 md:p-3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold py-3 text-white">
            Looking for an exciting career in technology and innovation
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-white py-2">
            Join our dynamic team and make an impact!
            <span className="font-semibold"> Explore</span> opportunities to
            grow,learn, and achieve your
            <span className="font-semibold"> professional </span> goals with us.
          </p>
          <div className="py-5">
            <Link
              href="/apply-job"
              className="mt-6 text-white px-6 py-2 sm:px-8 sm:py-3 bg-red-700 rounded-3xl  hover:bg-[#ff8d89]"
            >
              Apply Now
            </Link>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative w-full md:w-1/2 flex items-center justify-center mt-8 md:mt-0">
          {/* Small Image */}
          <div className="absolute -top-8 right-0 h-32 w-28 sm:h-40 sm:w-36 md:h-60 md:w-52 rounded-lg overflow-hidden border-4 border-white shadow-md">
            <Image
              src={see1}
              alt="Small team photo"
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Large Circular Image */}
          <div
            className="rounded-full border-4 border-blue-500 shadow-xl"
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
      {/* dkcndovnd nx mlskcjdolkn xsa;ocewofnkwdif;y */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:px-10 lg:px-20 h-full py-10">
        {/* Left Image Section */}
        <div className="relative w-full h-60 sm:h-80 md:h-96 lg:h-auto">
          <Image
            src={see2}
            alt="Small team photo"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Right Content Section */}
        <div className="px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-secondary mb-4">
            Who are we?
          </h1>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            At Difmo Technologies, growth is more than a goal—it’s our mission
            and way of life. Guided by our motto, "Innovate Together," we are
            dedicated to empowering clients and team members to achieve their
            fullest potential. We blend cutting-edge technology, top-tier
            expertise, and an unwavering commitment to quality to deliver
            exceptional solutions in software development, digital
            transformation, and IT services. At Difmo Technologies, you’ll join
            a forward-thinking, collaborative environment where every idea
            matters, and every contribution propels businesses to new heights.
          </p>
        </div>
      </div>

      <PhotoGallery />
      {/* /////////////  video ///////////////// */}
      <div className="bg-gray-50 h-full flex justify-center items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl w-full px-6 py-10">
          {/* Left Video/Image Section */}
          <div className="relative w-full h-64 sm:h-96 lg:h-full bg-gray-200 rounded-lg shadow-md overflow-hidden">
            {/* YouTube Video Embed */}
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/_gxv4BnSiBU"
              title="Referral video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="object-center"
            ></iframe>
          </div>

          {/* Right Content Section */}
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-deep-blue to-primary-orange">
              Grow Our Team, Earn Rewards
            </h1>

            <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
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
        <h2 className="mb-6 text-xl font-extrabold text-center text-transparent md:text-3xl font-lilita text-white">
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
