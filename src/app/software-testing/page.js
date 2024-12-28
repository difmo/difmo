"use client";

import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs, faUsers, faGlobe } from "@fortawesome/free-solid-svg-icons";
import fqaQ from "../assets/backgrounds_images/mibileapp.png";
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

const Mobiledevlopment = () => {
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
        src={webdevlopment}
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
        <button className="px-4 py-2 mt-6 font-semibold text-white transition duration-300 ease-in-out bg-orange-600 rounded-lg sm:px-6 sm:py-3 hover:bg-primary-orange">
        Read Below More Blogs
        </button>
      </div>
    </div>

      <div className="mx-4 sm:mx-8 lg:mx-16 my-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-2 rounded-lg">
          <h2 className="md:text-3xl text-xl font-lilita font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-deep-blue to-primary-orange mb-6">
            Ensuring Quality eCommerce Solutions through Rigorous Software Testing
          </h2>
          <p className="text-gray-700 text-[16px] leading-relaxed md:leading-loose tracking-wide text-justify">
            In today’s dynamic digital marketplace, delivering seamless online shopping experiences is crucial for business success. At Difmo Technologies, we don't just build innovative eCommerce solutions—we ensure they work flawlessly through rigorous software testing. Every custom-built platform we create undergoes thorough testing to guarantee high performance, security, and reliability...
          </p>
        </div>

        <div className="col-span-1 flex justify-center items-center">
          <Image
            src={fqaQ}
            alt="FAQ Illustration"
            width={500}
            height={300}
            className="w-full transition-transform duration-300 ease-in-out transform shadow-lg rounded-xl hover:scale-105 hover:shadow-2xl"
          />
        </div>
      </div>
    </div>

      <div className="bg-warm-gray py-2 pb-8">
        <div className="mx-4 sm:mx-8 lg:mx-16">
          <div className="my-7">
            <h2 className="md:text-3xl text-xl font-lilita font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-deep-blue to-primary-orange mb-6">
              Mastering eCommerce Development Technologies for Your Success with
              Rigorous Software Testing
            </h2>
            <p className="text-gray-700 px-4 sm:px-0 sm:pt-2 text-[16px] leading-relaxed md:leading-loose tracking-wide text-justify">
              At Difmo Technologies, our years of expertise in eCommerce
              development have not only made us leaders in the industry but have
              also highlighted the importance of top-notch software testing
              practices. We leverage the latest technologies to build fast,
              secure, and scalable online stores tailored to your business
              needs. Through rigorous testing—be it functional, performance,
              security, or usability testing—we ensure every feature of your
              platform, from custom product catalogs to secure payment gateways,
              operates seamlessly. Our commitment to testing guarantees smooth
              functionality and intuitive user experiences, ensuring your
              business thrives in the competitive online marketplace. By
              adopting the most advanced testing methodologies, we eliminate
              bugs and performance issues, keeping your eCommerce solutions
              running flawlessly. Stay ahead of the competition with innovative,
              well-tested eCommerce solutions powered by cutting-edge
              technology—only from Difmo Technologies. Empower your growth and
              elevate customer satisfaction through dynamic, reliable, and
              secure eCommerce platforms.
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

                    <h2 className="md:text-[16px] text-xl font-lilita font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-deep-blue to-primary-orange mb-1">
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
          <Contactus />
        </div>
      </div>
    </>
  );
};

export default Mobiledevlopment;
