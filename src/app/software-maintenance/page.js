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
      <div className="w-full h-[250px] md:h-[400px] mb-6 relative">
        <Image
          src={webdevlopment}
          alt="About Illustration"
          layout="fill"
          objectFit="cover"
          className="rounded-b-[20%]"
        />
      </div>

      <div className="mx-4 sm:mx-8 lg:mx-16 my-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-2 rounded-lg">
            <h2 className="md:text-3xl text-xl font-lilita font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-deep-blue to-primary-orange mb-6">
            Elevating Your Business with Cutting-Edge Software Maintenance Solutions
            </h2>
            <p className="text-gray-700 text-[16px] leading-relaxed md:leading-loose tracking-wide text-justify">
            In today’s fast-paced digital landscape, keeping your software running smoothly isn’t just an advantage—it’s essential. At Difmo Technologies, we specialize in delivering cutting-edge software maintenance solutions that ensure your business operations stay efficient and uninterrupted. Our expert team provides comprehensive support, from bug fixes and performance enhancements to security updates and system optimizations, tailored to your unique business needs. Whether you require routine maintenance, feature upgrades, or long-term support, we ensure your software remains secure, up-to-date, and scalable as your business grows. Our focus on reliability and innovation guarantees that your systems evolve with the latest technologies, driving productivity and customer satisfaction. Trust Difmo Technologies to help you maximize the potential of your software, ensuring stability and performance with powerful, user-friendly solutions.
  </p>
          </div>

          {/* <div className="col-span-1 flex justify-center items-center">
            <Image
              src={fqaQ}
              alt="FAQ Illustration"
              width={500}
              height={300}
              className="w-full max-w-md bg-cover rounded-full"
              // className="w-full max-w-md bg-cover rounded-full"
            /> */}
            <div className="col-span-1 mt-5 flex justify-center items-center">
            <Image
              src={fqaQ}
              alt="FAQ Illustration"
              width={500}
              height={300}
            className="w-full transition-transform duration-300 ease-in-out transform shadow-lg rounded-xl hover:scale-105 hover:shadow-2xl"
            /> 
          {/* </div> */}
          </div>
        </div>
      </div>

      <div className="bg-warm-gray py-2 pb-8">
        <div className="mx-4 sm:mx-8 lg:mx-16">
          <div className="my-7">
            <h2 className="md:text-3xl text-xl font-lilita font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-deep-blue to-primary-orange mb-6">
            Mastering Software Maintenance Technologies for Your Success
            </h2>
            <p className="text-gray-700 px-4 sm:px-0 sm:pt-2 text-[16px] leading-relaxed md:leading-loose tracking-wide text-justify">
            At Difmo Technologies, our years of expertise have positioned us as leaders in software maintenance. We’ve mastered the latest technologies to ensure your systems remain fast, secure, and scalable, tailored to your evolving business needs. Whether it’s troubleshooting, updating, or optimizing, we provide seamless maintenance services that keep your software running smoothly and efficiently. Stay ahead of potential issues with proactive and innovative maintenance solutions powered by cutting-edge tech—only from Difmo. Empower your growth and enhance operational efficiency through dynamic software support and management.
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
