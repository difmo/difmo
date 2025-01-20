"use client";

import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs, faUsers, faGlobe } from "@fortawesome/free-solid-svg-icons";
import fqaQ from "../assets/Deliver/a2.png";
import about from "../assets/blogsvg/about.svg";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import TeamSection from "../component/teamMembers";

// Reusable Core Value Card Component
const CoreValueCard = ({ icon, title, description }) => (
  <div className="p-6 transition-transform transform bg-white rounded-lg shadow-xl hover:scale-105">
    <div className="text-center">
      <FontAwesomeIcon
        icon={icon}
        className="mx-auto mb-4 text-4xl text-primary-orange"
      />
      <h3 className="mb-4 text-xl font-extrabold text-deep-blue">{title}</h3>
      <p className="text-base leading-relaxed tracking-wide text-justify text-gray-700">
        {description}
      </p>
    </div>
  </div>
);

const About = () => {
  const cardData = [
    {
      id: 1,
      title: "Mission",
      description:
        "At Difmo Technologies, we are driven by the mission to revolutionize businesses through innovative, high-tech solutions that foster growth, efficiency, and societal advancement. We turn challenges into opportunities with cutting-edge technologies, empowering our clients to thrive in the digital era.",
      icon: faCogs,
    },
    {
      id: 2,
      title: "Vision",
      description:
        "Our vision is to become a globally recognized leader in technology, pioneering solutions that transform industries and create lasting value. We aspire to connect the world through technology, providing scalable, sustainable, and impactful solutions that resonate globally.",
      icon: faGlobe,
    },
    {
      id: 3,
      title: "Core Values",
      description:
        "We operate with integrity, a passion for innovation, and an unwavering commitment to collaboration and sustainability. Our values guide us as we work towards creating a future where technology drives positive change, enhances lives, and fosters trust in all our business relationships.",
      icon: faUsers,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-blue-00 text-center text-gray-700 py-12">
        <h1 className="bg-gradient-to-r from-red-400 to-purple-600 text-transparent bg-clip-text font-semibold text-5xl pb-2">
          Technology at Work for You
        </h1>
        <p className=" text-3xl md:text-4xl font-medium py-2">
          Providing the effective solution for your most complex problem
        </p>
        {/* <p className="text-sm font-light">
          Automated Work + Faster Process = Happy Client
        </p> */}
      </section>

      {/* About Us Section */}
      <div className="mx-4 my-20 sm:mx-8 lg:mx-16">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="col-span-1">
            <h2 className="mb-6  text-2xl md:text-3xl font-extrabold text-deep-blue">
              Transforming Businesses Through Technology
            </h2>
            <p className="text-base leading-relaxed tracking-wide text-justify text-gray-700 md:leading-loose">
              Based in Lucknow, India, Difmo Technologies is a premier provider
              of custom web and mobile app development solutions. We specialize
              in delivering tailored software, CRM solutions, and web design
              that accelerates business growth. Our team of skilled engineers
              and marketers work tirelessly to craft digital experiences that
              elevate brands, drive success, and provide exceptional value to
              clients across the globe. We believe in the power of innovation
              and continuously push the boundaries of technology to ensure your
              business stays ahead of the curve. Our comprehensive suite of
              services—ranging from custom software and mobile app development
              to digital marketing strategies—ensures your digital presence is
              impactful and engaging.
            </p>
          </div>
          <div className="flex items-center justify-center col-span-1">
            <Image
              // src={fqaQ}
              alt="FAQ Illustration"
              className="w-full max-w-md bg-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="py-10 bg-warm-gray">
        <div className="mx-4 sm:mx-8 lg:mx-16">
          <h2 className="mb-6 text-3xl font-extrabold text-deep-blue">
            Our Core Values: Guiding Our Every Step
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {cardData.map((card) => (
              <CoreValueCard
                key={card.id}
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Meet Our Team */}
      {/* <TeamSection /> */}
      {/* Call to Action */}
      <div className="px-2 py-10 text-center text-white bg-gradient-to-r from-deep-blue to-primary-orange">
        <h2 className="text-3xl font-extrabold sm:text-4xl">
          Ready to Transform Your Business?
        </h2>
        <p className="mt-4 text-lg sm:text-xl">
          Join hands with Difmo Technologies and take your business to the next
          level with our advanced solutions.
        </p>
        <Link href="/contact-us">
          <button className="px-6 py-3 mt-6 font-semibold text-white transition duration-300 bg-red-600 rounded-lg hover:bg-red-500">
            Contact Us Now
          </button>
        </Link>
      </div>
    </>
  );
};

export default About;
