"use client";

import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs, faUsers, faGlobe } from "@fortawesome/free-solid-svg-icons";
import fqaQ from "../assets/abouta.jpg";
import fqaQ1 from "../assets/pritam.png";
import about from "../assets/blogsvg/about.svg";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

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
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen">
        <Image
          src={about}
          alt="About Image"
          className="brightness-75"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 space-y-4 text-center sm:px-8 md:px-16">
          <h1 className="text-3xl font-bold text-white sm:text-5xl md:text-6xl">
            Leading Innovation, Empowering Growth
          </h1>
          <p className="text-lg text-white sm:text-xl md:text-2xl">
            Transforming Ideas into Digital Realities
          </p>
          <p className="text-sm text-white sm:text-md md:text-lg lg:text-xl">
            Building smarter solutions for a connected world
          </p>
        </div>
      </div>

      {/* About Us Section */}
      <div className="mx-4 my-20 sm:mx-8 lg:mx-16">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="col-span-1">
            <h2 className="mb-6 text-3xl font-extrabold text-deep-blue">
              Transforming Businesses Through Technology
            </h2>
            <p className="text-base leading-relaxed tracking-wide text-justify text-gray-700 md:leading-loose">
              Based in Lucknow, India, Difmo Technologies is a premier provider
              of custom web and mobile app development solutions. We specialize
              in delivering tailored software, CRM solutions, and web design
              that accelerates business growth. Our team of skilled engineers
              and marketers work tirelessly to craft digital experiences that
              elevate brands, drive success, and provide exceptional value to
              clients across the globe.
              <br />
              <br />
              We believe in the power of innovation and continuously push the
              boundaries of technology to ensure your business stays ahead of
              the curve. Our comprehensive suite of services—ranging from custom
              software and mobile app development to digital marketing
              strategies—ensures your digital presence is impactful and
              engaging.
            </p>
          </div>
          <div className="flex items-center justify-center col-span-1">
            <Image
              src={fqaQ}
              alt="FAQ Illustration"
              width={500}
              height={300}
              className="w-full max-w-md bg-cover "
            />
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="py-10 bg-warm-gray">
        <div className="mx-4 sm:mx-8 lg:mx-16">
          <h2 className="mb-6 text-3xl font-extrabold  text-deep-blue">
            Our Core Values: Guiding Our Every Step
          </h2>
          <p className="px-4 text-lg leading-relaxed tracking-wide text-justify text-gray-700 sm:px-0 sm:pt-2 md:leading-loose">
            At Difmo Technologies, our culture is defined by the core values we
            hold dear. We strive for excellence in every project, valuing
            transparency, respect, and ethical practices in our relationships
            with clients and teams. Our commitment to continuous learning and
            collaboration ensures we stay at the forefront of technological
            advancements, delivering innovative solutions that shape the future.
          </p>

          <div className="flex justify-center py-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {cardData.map((card) => (
                <div
                  key={card.id}
                  className="p-6 transition-transform transform bg-white rounded-lg shadow-xl hover:scale-105"
                >
                  <div className="text-center">
                    <FontAwesomeIcon
                      icon={card.icon}
                      className="mx-auto mb-4 text-4xl text-primary-orange"
                    />
                    <h3 className="mb-4 text-xl font-extrabold  text-deep-blue">
                      {card.title}
                    </h3>
                    <p className="text-base leading-relaxed tracking-wide text-justify text-gray-700">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* ///////  our team /// //// /// // /// /// /// // /// //// /// //  */}
      <div className="py-6 sm:mx-8 lg:mx-16">
        <h1 className="flex justify-center text-3xl md:text-5xl font-extrabold py-5 text-deep-blue">
          Meet our team
        </h1>
        <div className="flex py-5  border border-gray-300 rounded-md ">
          <div className="w-1/2 ">
            {" "}
            <Image src={fqaQ1} className="h-80 w-80 " />
          </div>
          <div className="w-1/2">
            <h1 className="text-3xl font-extrabold text-gray-700">
              Pritam Sharma
            </h1>
            <div className="flex gap-3 py-4">
              <Link
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="h-10 w-10 text-deep-blue hover:text-primary-orange" />
              </Link>
              <Link
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="h-10 w-10 text-red-500 hover:text-primary-orange" />
              </Link>
              <Link
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="h-10 w-10 text-deep-blue hover:text-primary-orange" />
              </Link>
            </div>
            <p className="text-gray-600 leading-7">
              As a Software Developer with a strong foundation in React Native,
              Flutter, and Node.js, I specialize in building high-performance
              mobile and web applications. With a passion for creating intuitive
              user experiences, I have honed my expertise in developing scalable
              and maintainable code for cross-platform applications. My ability
              to seamlessly integrate cutting-edge technologies ensures that the
              software I develop is not only functional but also optimized for
              speed and efficiency. I am eager to specialize in databases,
              particularly NoSQL, MongoDB, and Firebase, where I aim to leverage
            </p>
          </div>
        </div>
      </div>
      {/* Call to Action Section */}
      <div className="px-2 py-10 text-center text-white bg-gradient-to-r from-deep-blue to-primary-orange">
        <h2 className="text-3xl font-extrabold sm:text-4xl">
          Ready to Transform Your Business?
        </h2>
        <p className="mt-4 text-lg sm:text-xl">
          Join hands with Difmo Technologies and take your business to the next
          level with our advanced solutions.
        </p>
        <Link href={"/contact-us"}>
          <button className="px-6 py-3 mt-6 font-semibold text-white transition duration-300 bg-red-600 rounded-lg hover:bg-red-500">
            Contact Us Now
          </button>
        </Link>
      </div>
    </>
  );
};

export default About;
