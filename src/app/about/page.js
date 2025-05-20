"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs, faUsers, faGlobe } from "@fortawesome/free-solid-svg-icons";
import fqaQ from "../assets/Deliver/a2.png";
import Link from "next/link";
import TeamSection from "../component/teamMembers";
import svg from "../assets/backgroundsvg/card1.svg";
import icon3 from "../assets/Values.png";
import icon2 from "../assets/Vision.png";
import icon1 from "../assets/misson.png";
import about1 from "../assets/backgroundsvg/Group.png";
import { motion, useInView } from "framer-motion";
// Reusable Core Value Card Component
const CoreValueCard = ({ icon, title, subtitle, description }) => (
  <div className="p-6 transition-transform transform bg-white rounded-lg shadow-xl hover:scale-105">
    <div className="text-center">
      <Image
        src={icon}
        className="mx-auto mb-4 w-20 h-20 text-primary-orange"
      />
      <h3 className="mb-4 text-xl font-extrabold text-deep-blue">{title}</h3>

      <h3 className="mb-4 text-lg font-extrabold text-deep-blue">{subtitle}</h3>
      <p className=" leading-relaxed tracking-wide text-sm text-justify text-gray-700">
        {description}
      </p>
    </div>
  </div>
);

const About = () => {
  const cardData = [
    {
      id: 1,
      title: "Our Mission ",
      subtitle: "  Businesses with Innovation",
      description:
        "Our mission is to empower businesses with next-generation technology solutions that drive efficiency, innovation, and sustainable growth. We turn challenges into opportunities by leveraging the latest advancements in AI, cloud computing, and automation, helping businesses scale, optimize, and stay ahead in the digital era.",
      icon: icon3,
    },
    {
      id: 2,
      title: " Our Vision",
      subtitle: "A Future-Ready Digital World",
      description:
        "We envision a world where technology is a force for positive change, connecting people, businesses, and communities through smart, scalable, and future-proof solutions. By pushing the boundaries of digital transformation, we aspire to be a global leader in tech innovation, shaping the future with intelligent, impactful  solutions.",
      icon: icon2,
    },
    {
      id: 3,
      title: "Core Values",
      subtitle: " Integrity | Innovation | Collaboration | Sustainability",
      description:
        "We prioritize transparency and trust in everything we do \
Innovation fuels our passion to create future-ready solutions. \
Collaboration drives success—together, we achieve more. \
We build technology responsibly, ensuring a sustainable impact.",
      icon: icon1,
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
      <div className=" z-30">
        {/* Background SVG */}

        {/* About Us Section */}
        <div className="mx-4 pb-20 pt-32 bottom-0 sm:px-8 lg:px-16 relative z-30">
          <div className="grid  grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2">
            <motion.div>
              <h2 className="mb-6 text-2xl sm:text-3xl md:text-3xl font-extrabold text-black">
                Empowering Digital Futures{" "}
              </h2>
              <p className="text-base leading-relaxed tracking-wide text-justify text-gray-700 md:leading-loose">
                At Difmo Technologies, we are more than just a tech company—we
                are innovators, problem-solvers, and digital transformation
                enablers. With a passion for technology and a commitment to
                excellence, we help businesses turn ideas into reality, optimize
                operations, and drive growth. From custom software solutions to
                AI-powered applications, cloud computing, and automation, we
                craft cutting-edge digital experiences that redefine industries
                and create lasting impact.
              </p>
            </motion.div>
            <motion.div
              className="flex items-center justify-center col-span-1"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="">
                <Image
                  src={about1}
                  alt="FAQ Illustration"
                  className="w-full max-w-md bg-cover   "
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="py-10 bg-warm-gray relative z-20">
          <div className="px-4 sm:px-8 lg:px-16">
            <motion.h2
              c
              lassName="my-6 text-3xl sm:text-4xl md:text-3xl font-extrabold text-black"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Core Values:The Foundation of Our Success
            </motion.h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-3">
              {cardData.map((card, index) => (
                <div key={card.id}>
                  <CoreValueCard
                    icon={card.icon}
                    title={card.title}
                    subtitle={card.subtitle}
                    description={card.description}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className=" mx-auto px-10 py-6">
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
                <div
                  ref={ref}
                  key={index}
                  className="bg-white  text-gray-800 rounded-lg p-6 transition-all hover:bg-oceanic hover:text-white"
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
                </div>
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
