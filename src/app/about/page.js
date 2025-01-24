"use client";

import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs, faUsers, faGlobe } from "@fortawesome/free-solid-svg-icons";
import fqaQ from "../assets/Deliver/a2.png";
import Link from "next/link";
import TeamSection from "../component/teamMembers";
import { motion } from "framer-motion";
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
      {/* Hero Section */}
      <section className=" text-center text-gray-700 pt-12">
        <h1 className="bg-gradient-to-r from-red-400 to-purple-600 text-transparent bg-clip-text font-semibold text-5xl pb-2">
          Technology at Work for You
        </h1>
        {/* <p className=" text-3xl md:text-4xl font-medium py-2">
          Providing the effective solution for your most complex problem
        </p> */}
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
              src={fqaQ}
              alt="FAQ Illustration"
              className="w-full max-w-md bg-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="py-10 bg-warm-gray ">
        <div className="mx-4 sm:mx-8 lg:mx-16">
          <h2 className="mb-6 text-3xl font-extrabold text-deep-blue">
            Our Core Values: Guiding Our Every Step
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 ">
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

      <div className="max-w-7xl mx-auto py-6">
        <h1 className="text-3xl font-bold text-center text-deep-blue mb-8">
          Our Features
        </h1>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white text-gray-800  rounded-lg p-6 transition-all hover:bg-oceanic hover:text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-4xl mb-4 w-12 py-1 bg-white rounded-md">
                {feature.icon}
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2 transition-colors">
                  {feature.title}
                </h2>
                <p className="transition-colors">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Meet Our Team */}
      <TeamSection />
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
