"use client";

import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs, faUsers, faGlobe } from "@fortawesome/free-solid-svg-icons";
import fqaQ from "../assets/backgrounds_images/aboutbg2.jpg";
import about from "../assets/about.jpg";

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
          src={about}
          alt="Contact Illustration"
          // layout="fill"
          // objectFit="cover"
          className="brightness-75"
          fill
          style={{ objectFit: "cover" }}
          // alt="About Image"
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 space-y-4 text-center sm:px-8 md:px-16 sm:space-y-6 md:space-y-8">
          {/* Headline */}
          <h1 className="text-2xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Driving Innovation. Delivering Excellence
          </h1>

          {/* Subtitle */}
          <p className="text-sm font-medium text-white sm:text-lg md:text-xl lg:text-2xl">
            Transforming ideas into impactful digital solutions
          </p>

          {/* Description */}
          <ul className="space-y-2 text-sm text-white sm:text-md md:text-lg lg:text-xl">
            <li>Build smarter, scale faster, grow stronger</li>
          </ul>

          {/* Call to Action Button */}
          {/* <button className="px-4 py-2 mt-6 font-semibold text-white transition duration-300 ease-in-out bg-orange-600 rounded-lg sm:px-6 sm:py-3 hover:bg-[#EA130C]">
            Read Below More About Us
          </button> */}
        </div>
      </div>

      <div className="mx-4 my-20 sm:mx-8 lg:mx-16">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="col-span-2 rounded-lg">
            <h2 className="mb-6 text-xl font-extrabold text-transparent md:text-3xl font-lilita bg-clip-text bg-gradient-to-r from-deep-blue to-[#EA130C]">
              Custom Web Solutions Designed for Your Business
            </h2>
            <p className="text-gray-700 text-[16px] leading-relaxed md:leading-loose tracking-wide text-justify">
              At Difmo Technology, based in Lucknow, India, we specialize in
              crafting smart and user-friendly web and mobile applications that
              boost business productivity and elevate customer experiences. As
              experts in custom software development, CRM solutions, web design,
              and mobile app development, we assist businesses worldwide in
              expanding their digital presence and growing their client base.
              Our talented team of software engineers, developers, and digital
              marketing experts uses state-of-the-art technology to deliver
              innovative, tailored solutions. From custom mobile apps to a
              strong web presence, we have the expertise to bring your vision to
              life. Beyond development, we offer comprehensive digital marketing
              services like SEO, PPC, social media marketing, and email
              campaigns. Our results-oriented approach ensures your online
              presence is strategically positioned to attract the right audience
              and drive growth. At Difmo Technology, we stay at the forefront of
              technological advancements, ensuring your business remains
              competitive in the dynamic digital landscape. Partner with us for
              cutting-edge web and mobile solutions to empower your business in
              the digital age.
            </p>
          </div>

          <div className="flex items-center justify-center col-span-1">
            <Image
              src={fqaQ}
              alt="FAQ Illustration"
              width={500}
              height={300}
              className="w-full max-w-md bg-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="py-2 pb-8 bg-warm-gray">
        <div className="mx-4 sm:mx-8 lg:mx-16">
          <div className="my-7">
            <h2 className="mb-6 text-xl font-extrabold text-transparent md:text-3xl font-lilita bg-clip-text bg-gradient-to-r from-deep-blue to-[#EA130C]">
              The Things We Care About
            </h2>
            <p className="text-gray-700 px-4 sm:px-0 sm:pt-2 text-[16px] leading-relaxed md:leading-loose tracking-wide text-justify">
              At Difmo Technology, we prioritize innovation, collaboration, and
              integrity. Every idea and contribution is valued as we create
              solutions that drive progress. Our commitment to fostering a
              culture of respect, continuous learning, and ethical excellence
              shapes our approach to technology and business.
            </p>
          </div>

          <div className="flex justify-center py-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {cardData.map((card) => (
                <div
                  key={card.id}
                  className="bg-warm-gray rounded-tr-[2rem] rounded-bl-[2rem] p-6 md:mx-0 mx-5 shadow-2xl transition-transform transform"
                >
                  <div className="text-center">
                    <FontAwesomeIcon
                      icon={card.icon}
                      className="mx-auto mb-2 text-3xl text-primary-orange"
                    />
                    <h2 className="mb-6 text-xl font-extrabold text-transparent md:text-3xl font-lilita bg-clip-text bg-gradient-to-r from-deep-blue to-[#EA130C]">
                      {card.title}
                    </h2>
                    <p className="text-gray-700 px-4 sm:px-0 sm:pt-2 text-[12px] leading-relaxed md:leading-loose tracking-wide text-justify">
                      {/* <p className="leading-relaxed text-gray-700 font-concert text-start"> */}
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
