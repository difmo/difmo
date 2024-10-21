"use client";

import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs, faUsers, faGlobe } from "@fortawesome/free-solid-svg-icons";
import fqaQ from "../assets/backgrounds_images/aboutbg2.jpg";
import about from "../assets/contact.jpg";
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
      <div className="w-full h-[250px] md:h-[400px] mb-6 relative">
        <Image
          src={about}
          alt="About Illustration"
          layout="fill"
          objectFit="cover"
          className="rounded-b-[10%]"
        />
      </div>

      <div className=" my-7 ">
        <div className="bg-slate-200" >
          {/* <h2 className="md:text-3xl text-center p-4 sm:p-0  text-4xl font-lilita font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-deep-blue to-primary-orange   ">
            Get In Touch
          </h2> */}

          <OurContact />
        </div>
      </div>
    </>
  );
};

export default Contact;
