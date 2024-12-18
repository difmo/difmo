 
"use client";

import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs, faUsers, faGlobe } from "@fortawesome/free-solid-svg-icons";
import fqaQ from "../assets/backgrounds_images/aboutbg2.jpg";
import career from "../assets/career.jpg";
import Contactus from "../component/Contactus";
import OurContact from "../component/OurContact";
import see from "../assets/Question.png";
 
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import Link from "next/link";
const About = () => {
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
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen">
      {/* Image Component */}
      <Image
        src={career}
        alt="Contact Illustration"
        layout="fill"
        objectFit="cover"
        className="brightness-75" 
      />

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 space-y-4 text-center sm:px-8 md:px-16 sm:space-y-6 md:space-y-8">
        {/* Headline */}
        <h1 className="text-2xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
        Driving Innovation. Delivering Excellence
        </h1>

        {/* Subtitle */}
        <p className="text-sm font-medium text-orange-500 sm:text-lg md:text-xl lg:text-2xl">
        Transforming ideas into impactful digital solutions
        </p>

        {/* Description */}
        <ul className="space-y-2 text-sm text-white sm:text-md md:text-lg lg:text-xl">
          <li>
          Build smarter, scale faster, grow stronger
          </li>
        </ul>

        {/* Call to Action Button */}
        <button className="px-4 py-2 mt-6 font-semibold text-white transition duration-300 ease-in-out bg-orange-600 rounded-lg sm:px-6 sm:py-3 hover:bg-[#EA130C]">
        Read Below More Careers
        </button>
      </div>
    </div>
    <div className="mx-4 my-6 sm:mx-8 lg:mx-16">
  {/* Grid Container for mobile responsive layout */}
  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
  
  {/* Text Section */}
  <div className="flex flex-col justify-between p-4 rounded-lg">
    <h2 className="mb-6 text-4xl font-extrabold text-transparent md:text-3xl font-lilita bg-clip-text bg-gradient-to-r from-deep-blue to-[#EA130C]">
      Want to be a part of an ever-warming culture?
    </h2>
    <p className="text-gray-700 text-[16px] leading-relaxed md:leading-loose tracking-wide text-justify">
      Find Your Fit

      At Difmo Technologies, our commitment to excellence shines through in our diverse and engaging work environments. We specialize in creating world-class web and mobile applications for global enterprises, leveraging our expertise across various sectors.

      We strive to be the easiest company to work with and for, fostering a collaborative talent ecosystem powered by enthusiastic and seasoned professionals. Our welcoming culture ensures that new joiners seamlessly integrate into our team, promoting a sense of belonging from day one. With offices located in Lucknow, India, and Singapore, we are dedicated to providing rewarding benefits, recognizing achievements, and maintaining a positive atmosphere.

      Join us at Difmo Technologies, where we offer work-life balance, steady career growth, and a vibrant community that celebrates innovation and teamwork. Discover your fit and be part of our journey!
    </p>
  </div>

  {/* Additional content section */}
  <div className="flex items-center justify-center">
    <Image
      src={see} // Image from public folder
      alt="About Us"
      width={500}
      height={300}
      className="w-full h-auto transition-transform duration-300 ease-in-out transform shadow-lg rounded-xl"
    />
  </div>
</div>
<div className="flex flex-col items-center justify-center py-10 bg-warm-gray">
  <h2 className="mb-6 text-xl font-extrabold text-center text-transparent md:text-3xl font-lilita bg-clip-text bg-gradient-to-r from-deep-blue to-[#EA130C]">
    Mastering Web Application Technologies for Your Success
  </h2>
  <button className="px-6 py-2 text-white transition duration-300 rounded-lg bg-[#EA130C] hover:bg-deep-blue">
  <Link href="/apply-job">
    Apply Now
  </Link>
</button>
</div>

</div>

     
    </>
  );
};

export default About;
