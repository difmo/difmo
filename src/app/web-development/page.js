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
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 space-y-4 text-center sm:px-8 md:px-16 sm:space-y-6 md:space-y-8">
        {/* Headline */}
        <h1 className="text-2xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
       Web Development
        </h1>

        {/* Subtitle */}
        <p className="text-sm font-medium text-orange-500 sm:text-lg md:text-xl lg:text-2xl">
        Explore Difmo’s web development insights to build smarter, scale faster, and grow stronger!
        </p>

        {/* Description */}
        <ul className="space-y-2 text-sm text-white sm:text-md md:text-lg lg:text-xl">
          <li>
          Build smarter, scale faster, grow stronger
          </li>
        </ul>

        {/* Call to Action Button */}
        <button className="px-4 py-2 mt-6 font-semibold text-white transition duration-300 ease-in-out bg-orange-600 rounded-lg sm:px-6 sm:py-3 hover:bg-[#EA130C]">
        Read Below More Blogs
        </button>
      </div>
    </div>
      

      <div className="mx-4 sm:mx-8 lg:mx-16 my-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-2 rounded-lg">
          <h2 className="md:text-3xl text-xl font-lilita font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-deep-blue to-[#EA130C] mb-6">
              Elevating Your Business with Cutting-Edge Web Solutions
            </h2>
            <p className="text-gray-700 text-[16px] leading-relaxed md:leading-loose tracking-wide text-justify">
              In today's fast-paced digital age, staying ahead isn’t just an
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
              web solutions that keep you at the forefront of your industry.
            </p>
          </div>

          <div className="col-span-1 flex justify-center items-center">
            <Image
              src={fqaQ}
              alt="FAQ Illustration"
              width={500}
              height={300}
              className="w-full max-w-md bg-cover rounded-full"
            />
          </div>
        </div>
      </div>

      <div className="bg-warm-gray py-2 pb-8">
        <div className="mx-4 sm:mx-8 lg:mx-16">
          <div className="my-7">
            <h2 className="md:text-3xl text-xl font-lilita font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-deep-blue to-[#EA130C] mb-6">
              Mastering Web Application Technologies for Your Success
            </h2>
            <p className="text-gray-700 px-4 sm:px-0 sm:pt-2 text-[16px] leading-relaxed md:leading-loose tracking-wide text-justify">
              At Difmo Technologies, years of expertise have made us leaders in
              web development. We've mastered the latest technologies to build
              fast, secure, and scalable web applications tailored to your
              unique business needs. Stay ahead with innovative solutions
              powered by the best in tech, only from Difmo.
            </p>
          </div>

          <div className="flex justify-center py-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {cardData.map((card) => (
                <div
                  key={card.id}
                  className="bg-warm-gray rounded-tr-[2rem] rounded-bl-[2rem] p-3 md:mx-0 mx-5 shadow-2xl transition-transform transform"
                >
                  <div className="text-center ">
                    <div className="h-[100px] w-[100px]  rounded-full overflow-hidden flex items-center justify-center mx-auto">
                      <Image
                        src={card.imageUrl} // Use the image URL from the cardData
                        alt={card.title}
                        width={100} // Set the width
                        height={100} // Set the height
                        className="h-full w-full object-cover" // Add styling to the image
                      />
                    </div>

                    <h2 className="md:text-[16px] text-xl font-lilita font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-deep-blue to-[#EA130C] mb-1">
                      {card.title}
                    </h2>
                    <p className="text-gray-700 px-4 sm:px-0 sm:pt-2 text-[12px] leading-relaxed md:leading-loose tracking-wide text-justify">
                      {/* <p className="font-concert text-start text-gray-700 leading-relaxed"> */}
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="py-2 pb-8   bg-warm-gray p-4 ">
        <div className="rounded-lg shadow-2xl p-1">

  <Contactus/>
        </div>
</div>

    </>
  );
};

export default Webdevlopment;
