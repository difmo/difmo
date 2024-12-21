"use client";

import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs, faUsers, faGlobe } from "@fortawesome/free-solid-svg-icons";
import fqaQ from "../assets/backgrounds_images/aboutbg2.jpg";
import webdevlopment from "../assets/webdevlopment .jpg";
import webimage from "../assets/dev.jpg";
import software from "../assets/projectImages/sh.png";
import appdev from "../assets/appdevs.png";
import apiint from "../assets/apiint.png";
import crmimg from "../assets/crmimg.png";
import consulating from "../assets/consulating.png";
import iot from "../assets/iot.png";
import ailear from "../assets/ailear.png";
import sofware1 from "../assets/imagess.png";
import Contactus from "../component/Contactus";
import about from "../assets/blogs.jpg";
import Ecommerce from "../component/webComponent/Ecommerce";
import BusinessProfile from "../component/webComponent/BusinessProfile";
import PersinalWebsite from "../component/webComponent/PersinalWebsite";
import Socialmedioa from "../component/webComponent/Socialmedia";
import CorporateWebsite from "../component/webComponent/CorporateWebsite";
import Chatingwebsite from "../component/webComponent/Chatingwebsite";

const Webdevlopment = () => {
  const cardData = [
    {
      id: 1,
      title: "Web Development",
      // imageUrl: webimage, // Add your image path here
      imageUrl: software,
    },
    {
      id: 2,
      title: "Software development",
      imageUrl: webimage, // Add your image path here
      // imageUrl: software, // Add your image path here
    },
    {
      id: 3,
      title: "App development",
      imageUrl: appdev, // Add your image path here
    },
    {
      id: 4,
      title: "3rd Party API's integration",
      imageUrl: apiint, // Add your image path here
    },
    {
      id: 5,
      title: "CRM development",
      imageUrl: crmimg, // Add your image path here
    },
    {
      id: 6,
      title: "Software consulting",
      imageUrl: consulating, // Add your image path here
    },
    {
      id: 7,
      title: "IOT & Automation",
      imageUrl: iot, // Add your image path here
    },
    {
      id: 8,
      title: "Machine Learning & AI",
      imageUrl: ailear, // Add your image path here
    },
    {
      id: 9,
      title: "Software Re-engineering",
      imageUrl: sofware1,
    },
  ];

  return (
    <>
      {/* <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen">
        Image Component
        <Image
          src={about}
          alt="Contact Illustration"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 space-y-4 text-center sm:px-8 md:px-16 sm:space-y-6 md:space-y-8">
          <h1 className="text-2xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Web Development
          </h1>

          <p className="text-sm font-medium text-orange-500 sm:text-lg md:text-xl lg:text-2xl">
            Explore Difmo’s web development insights to build smarter, scale
            faster, and grow stronger!
          </p>

          <ul className="space-y-2 text-sm text-white sm:text-md md:text-lg lg:text-xl">
            <li>Build smarter, scale faster, grow stronger</li>
          </ul>

          <button className="px-4 py-2 mt-6 font-semibold text-white transition duration-300 ease-in-out bg-orange-600 rounded-lg sm:px-6 sm:py-3 hover:bg-[#EA130C]">
            Read Below More Blogs
          </button>
        </div>
      </div> */}

      <div className="mx-4 sm:mx-8 lg:mx-28 my-20 mt-36">
        <div className="">
          <div className="col-span-2 rounded-lg">
            <h2 className="md:text-4xl text-xl font-lilita font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-deep-blue to-[#EA130C] mb-6 flex justify-center">
              Wev Development
            </h2>
            <p className="text-gray-700 text-[18px] leading-relaxed md:leading-loose tracking-wide text-justify  ">
              {/* In today's fast-paced digital age, staying ahead isn’t just an
              advantage—it’s essential. With customer preferences evolving
              rapidly and brand loyalty fleeting, businesses must innovate to
              remain competitive. At Difmo Technologies, we understand the pulse
              of the digital landscape and provide cutting-edge custom web
              development services that position your brand to thrive. We’re not
              just building websites; we’re creating immersive digital
              experiences. Our tailored web design solutions ensure your online
              presence is compelling and unique. Whether you’re launching a new
              brand or refining an existing one, our skilled developers are
              dedicated to turning your vision into reality, with affordability
              and innovation at the core. At Difmo Technologies, we are driven
              by a commitment to excellence, pushing the boundaries of what’s
              possible to help your business soar. Trust us for forward-thinking
              web solutions that keep you at the forefront of your industry. */}
              We specialize in designing and developing cutting-edge web
              applications that perfectly showcase your local business
              portfolio. Our goal is to craft applications that not only stand
              out with stunning design but also deliver seamless functionality,
              ensuring a lasting impression on your audience.
            </p>
          </div>

          {/* <div className="col-span-1 flex justify-center items-center">
            <Image
              src={fqaQ}
              alt="FAQ Illustration"
              width={500}
              height={300}
              className="w-full max-w-md bg-cover rounded-full"
            />
          </div> */}
        </div>
        <Ecommerce />
        <BusinessProfile />
        <PersinalWebsite />
        <Socialmedioa />
        <Chatingwebsite />
        <CorporateWebsite />
      </div>
      <div className="py-2 pb-8   bg-warm-gray p-4 ">
        <div className="rounded-lg shadow-2xl p-1">
          <Contactus />
        </div>
      </div>
    </>
  );
};

export default Webdevlopment;
