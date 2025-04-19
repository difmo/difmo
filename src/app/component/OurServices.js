import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faTools,
  faCloud,
  faShieldAlt,
  faBrain,
  faNavicon,
} from "@fortawesome/free-solid-svg-icons";
import StatsSection from "./StatsSection";
import Link from "next/link";

const OurServices = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { triggerOnce: true, threshold: 0.2 });

  const servicesData = [
    {
      icon: faLaptopCode,
      title: "Android & iOS",
      description:
        "Building scalable, feature-rich mobile apps for Android and iOS to meet your business needs.",
      textColor: "text-green-800",
      link: "/mobile-development",
    },
    {
      icon: faLaptopCode,
      title: "Web Development",
      description:
        "Creating responsive, user-friendly websites to boost your online presence.",
      textColor: "text-blue-800",
      link: "/web-development",
    },
    {
      icon: faLaptopCode,
      title: "UI/UX Design",
      description:
        "Crafting intuitive and visually appealing designs for exceptional user experiences.",
      textColor: "text-teal-800",
    },
    {
      icon: faTools,
      title: "Tech Consulting",
      description:
        "Offering expert guidance to help you adopt the best technology solutions.",
      textColor: "text-yellow-800",
    },
    {
      icon: faCloud,
      title: "Cloud Solutions",
      description:
        "Empowering businesses with secure and scalable cloud computing services.",
      textColor: "text-purple-800",
    },
    {
      icon: faBrain,
      title: "Machine Learning",
      description:
        "Integrating AI-powered solutions to enhance automation and decision-making.",
      textColor: "text-indigo-800",
    },
    {
      icon: faShieldAlt,
      title: "Cybersecurity",
      description:
        "Protecting your business data with advanced security solutions.",
      textColor: "text-red-800",
    },
    {
      icon: faNavicon,
      title: "Data Analytics",
      description:
        "Transforming data into actionable insights to drive business success.",
      textColor: "text-pink-800",
    },
  ];

  return (
    <div className="mx-4 my-12 sm:mx-8 lg:mx-16" ref={sectionRef}>
      <motion.h1
        className="text-center text-black font-bold text-5xl py-5"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Our Services
      </motion.h1>
      <motion.p
        className="text-gray-700 text-lg leading-relaxed md:leading-loose tracking-wide text-justify mb-8"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        We deliver innovative solutions to empower your business, from mobile
        app and web development to advanced tech services. With a focus on
        quality and innovation, we ensure your digital transformation stands
        out.
      </motion.p>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
        {servicesData.map((service, index) => (
          <motion.div
            className="bg-white text-gray-800 rounded-lg p-6 transition-all hover:bg-oceanic hover:text-white flex flex-col items-center duration-300 ease-in-out transform hover:scale-105"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="flex items-center justify-center w-16 h-16 mb-4 bg-white rounded-full shadow-md">
              <FontAwesomeIcon
                icon={service.icon}
                className={`text-3xl ${service.textColor}`}
              />
            </div>
            <h3 className={`text-xl font-semibold mb-3 ${service.textColor}`}>
              {service.title}
            </h3>
            <p className="text-center">{service.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Stats Section */}
      <motion.div
        className="mt-12"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <StatsSection />
      </motion.div>
    </div>
  );
};

export default OurServices;
