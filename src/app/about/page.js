"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs, faUsers, faGlobe } from "@fortawesome/free-solid-svg-icons";
import fqaQ from "../assets/Deliver/a2.png";
import Link from "next/link";
import TeamSection from "../component/teamMembers";
import svg from "../assets/backgroundsvg/card1.svg";
import { motion, useInView } from "framer-motion";
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
  const features = [
    {
      title: "Full-Service Digital",
      description:
        "We provide a full-service digital solution for your project. This solution reduces cost, allows total ownership of the project with superior quality and timely delivery.",
      icon: "💻",
    },
    {
      title: "Delivered on Time",
      description:
        "We understand the value of being 100% reliable, and we want to offer excellent service that exceeds your expectations. We always want to be given to on-time project delivery.",
      icon: "⏰",
    },
    {
      title: "Customer Support (24/7)",
      description:
        "Our mission is to provide the best possible service to our customers and make software development a better experience. Which is why we provide 24/7 customer support.",
      icon: "🎧",
    },
    {
      title: "Culture of Innovation",
      description:
        "We believe that only with an innovative culture can you lead the industry. We have developed a unique business model that combines creativity and quality to create success.",
      icon: "📊",
    },
    {
      title: "Flexibility",
      description:
        "We are a flexible business. We make it easy for you to be part of the partnership, by offering flexible pricing and intense collaboration.",
      icon: "🔄",
    },
    {
      title: "Born Digital",
      description:
        "Our new-age digital solutions have helped our clients remain digitally advanced and sustainable in the face of uncertain challenges since 2008.",
      icon: "🌐",
    },
  ];
  return (
    <>
      <div className="relative">
        {/* Background SVG */}
        <div className="absolute  top-0 right-0 inset-0 pointer-events-none">
          {/* <svg
            width="600"
            height="600"
            viewBox="0 0 600 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M134.08 111.421C182.58 119.06 419.398 228.142 464.523 284.104C509.648 340.066 447.823 415.037 404.83 447.193C361.837 479.349 253.821 504.932 206.564 477.04C159.307 449.147 126.796 319.635 121.289 279.84C115.781 240.045 171.388 266.338 173.52 238.268"
              fill="url(#paint0_linear_33_9)"
            />
            <path
              d="M216.361 111.391C264.862 119.031 501.679 228.112 546.804 284.074C591.929 340.036 530.104 415.008 487.111 447.164C444.118 479.32 336.102 504.903 288.845 477.01C241.589 449.118 209.077 319.606 203.57 279.811C198.063 240.015 253.669 266.309 255.801 238.239"
              fill="url(#paint1_linear_33_9)"
              fill-opacity="0.35"
            />
            <defs>
              <linearGradient
                id="paint0_linear_33_9"
                x1="46.7551"
                y1="15.2556"
                x2="-28.21"
                y2="-337.428"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF5E5E" />
                <stop offset="1" stop-color="#FFB366" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_33_9"
                x1="202"
                y1="111"
                x2="562.562"
                y2="111"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF5E5E" />
                <stop offset="1" stop-color="#FFB366" />
              </linearGradient>
            </defs>
          </svg> */}

          {/* Content Here */}
          {/* <div className="relative z-10">
            <h1 className="text-3xl font-bold">Start, Build & Grow</h1>
          </div> */}
        </div>

        {/* Hero Section */}
        <section className="text-center text-black pt-12">
          <motion.h1
            className="font-semibold text-3xl sm:text-4xl md:text-5xl pb-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Technology at Work for You
          </motion.h1>
        </section>

        {/* About Us Section */}
        <div className="mx-4 my-20  bottom-0 sm:px-8 lg:px-16">
          <div className="grid  grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2">
            <motion.div
              className="col-span-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6 text-2xl sm:text-3xl md:text-3xl font-extrabold text-black">
                Transforming Businesses Through Technology
              </h2>
              <p className="text-base leading-relaxed tracking-wide text-justify text-gray-700 md:leading-loose">
                Based in Lucknow, India, Difmo Technologies is a premier
                provider of custom web and mobile app development solutions. We
                specialize in delivering tailored software, CRM solutions, and
                web design that accelerates business growth. Our team of skilled
                engineers and marketers work tirelessly to craft digital
                experiences that elevate brands, drive success, and provide
                exceptional value to clients across the globe. We believe in the
                power of innovation and continuously push the boundaries of
                technology to ensure your business stays ahead of the curve.
              </p>
            </motion.div>
            <motion.div
              className="flex items-center justify-center col-span-1"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Image
                src={fqaQ}
                alt="FAQ Illustration"
                className="w-full max-w-md bg-cover"
                priority
              />
            </motion.div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="py-10 bg-warm-gray">
          <div className="px-4 sm:px-8 lg:px-16">
            <motion.h2
              className="mb-6 text-3xl sm:text-4xl md:text-3xl font-extrabold text-black"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Our Core Values: Guiding Our Every Step
            </motion.h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-3">
              {cardData.map((card, index) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <CoreValueCard
                    icon={card.icon}
                    title={card.title}
                    description={card.description}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className=" mx-auto py-6">
          <h1 className="text-3xl font-bold text-center text-black mb-8">
            Our Features
          </h1>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const ref = useRef(null);
              const isInView = useInView(ref, {
                triggerOnce: true,
                threshold: 0.2,
              });

              // Determine row index for animation direction
              const rowIndex = Math.floor(index / 3);
              const initialX = rowIndex % 2 === 0 ? -50 : 50;

              return (
                <motion.div
                  ref={ref}
                  key={index}
                  className="bg-white  text-gray-800 rounded-lg p-6 transition-all hover:bg-oceanic hover:text-white"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: initialX }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: index * 0.15,
                  }}
                >
                  <div className="text-4xl mb-4 w-12 py-1 bg-white rounded-md">
                    {feature.icon}
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-semibold mb-2 transition-colors">
                      {feature.title}
                    </h2>
                    <p className="transition-colors">{feature.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Meet Our Team Section */}
        <TeamSection />

        {/* Call to Action Section */}
        <div className="px-2 py-10 text-center text-white bg-gradient-to-r from-deep-blue to-primary-orange">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Ready to Transform Your Business?
          </h2>
          <p className="mt-4 text-lg sm:text-xl">
            Join hands with Difmo Technologies and take your business to the
            next level with our advanced solutions.
          </p>
          <Link href="/contact-us">
            <button className="px-6 py-3 mt-6 font-semibold text-white transition duration-300 bg-red-600 rounded-lg hover:bg-red-500">
              Contact Us Now
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default About;
