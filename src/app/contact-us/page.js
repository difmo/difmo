"use client";

import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs, faUsers, faGlobe } from "@fortawesome/free-solid-svg-icons";
import contact from "../assets/contact.jpeg";
import OurContact from "../component/OurContact";

const Contact = () => {
  const cardData = [
    {
      id: 1,
      title: "Mission",
      description:
        "At Difmo Technology, our mission is to innovate and deliver cutting-edge solutions that empower businesses and create positive societal impact. We strive to simplify complex challenges with advanced technology while fostering long-term growth for our clients and communities.",
      icon: faCogs, // Icon for Mission
    },
    {
      id: 2,
      title: "Vision",
      description:
        "Our vision is to be a global leader in technological innovation, offering transformative solutions that drive business success and positively impact communities worldwide. We aim to expand our reach, adapting to diverse markets and empowering people through the power of technology.",
      icon: faGlobe, // Icon for Vision
    },
    {
      id: 3,
      title: "Values",
      description:
        "At Difmo Technology, we are guided by our core values: Integrity, Innovation, Collaboration, and Impact. We are committed to ethical practices, continuous learning, and fostering a culture that celebrates creativity and drives positive change both within our organization and in the communities we serve.",
      icon: faUsers, // Icon for Values
    },
  ];

  return (
    <>
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen pt-24">
        <Image
          src={contact}
          alt="Contact Illustration"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 space-y-4 text-center sm:px-8 md:px-16 sm:space-y-6 md:space-y-8">
          <h1 className="text-2xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Do You Need a Technology Partner <br className="hidden sm:inline" />{" "}
            For Your Business Idea?
          </h1>

          <ul className="space-y-2 text-sm text-white sm:text-md md:text-lg lg:text-xl">
            <li>
              Our experts are ready to connect with you upon receiving your
              inquiry.
            </li>
          </ul>
        </div>
      </div>

      <div className="">
        <div className="bg-slate-200">
          <OurContact />
        </div>
      </div>
    </>
  );
};

export default Contact;
