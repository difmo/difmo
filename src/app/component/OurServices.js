import React from "react";
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
import Heading from "./Headings";
import Link from "next/link";

const OurServices = () => {
  const servicesData = [
    {
      icon: faLaptopCode,
      title: "Android & iOS",
      description:
        "Building scalable, feature-rich mobile apps for Android and iOS to meet your business needs.",
      bgColor: "bg-green-100",
      textColor: "text-green-800",
      link: "/mobile-development",
    },
    {
      icon: faLaptopCode,
      title: "Web Development",
      description:
        "Creating responsive, user-friendly websites to boost your online presence.",
      bgColor: "bg-blue-100",
      textColor: "text-blue-800",
      link: "/web-development",
    },
    {
      icon: faLaptopCode,
      title: "UI/UX Design",
      description:
        "Crafting intuitive and visually appealing designs for exceptional user experiences.",
      bgColor: "bg-teal-100",
      textColor: "text-teal-800",
    },
    {
      icon: faTools,
      title: "Tech Consulting",
      description:
        "Offering expert guidance to help you adopt the best technology solutions.",
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-800",
    },
    {
      icon: faCloud,
      title: "Cloud Solutions",
      description:
        "Empowering businesses with secure and scalable cloud computing services.",
      bgColor: "bg-purple-100",
      textColor: "text-purple-800",
    },
    {
      icon: faBrain,
      title: "Machine Learning",
      description:
        "Integrating AI-powered solutions to enhance automation and decision-making.",
      bgColor: "bg-indigo-100",
      textColor: "text-indigo-800",
    },
    {
      icon: faShieldAlt,
      title: "Cybersecurity",
      description:
        "Protecting your business data with advanced security solutions.",
      bgColor: "bg-red-100",
      textColor: "text-red-800",
    },
    {
      icon: faNavicon,
      title: "Data Analytics",
      description:
        "Transforming data into actionable insights to drive business success.",
      bgColor: "bg-pink-100",
      textColor: "text-pink-800",
    },
  ];

  return (
    <>
      <div className="mx-4 my-12 sm:mx-8 lg:mx-16">
        {/* Section Heading */}
        <Heading headingtext="Our Services" />
        <p className="text-gray-700 text-[16px] leading-relaxed md:leading-loose tracking-wide text-justify mb-8">
          We deliver innovative solutions to empower your business, from mobile
          app and web development to advanced tech services. With a focus on
          quality and innovation, we ensure your digital transformation stands
          out.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
          {servicesData.map((service, index) => (
            <Link href={service.link || " "} key={index}>
              <div
                key={index}
                className={`flex flex-col items-center p-5 transition-transform duration-300 ease-in-out transform rounded-lg shadow-lg hover:scale-105 cursor-pointer ${service.bgColor}`}
              >
                <div className="flex items-center justify-center w-16 h-16 mb-4 bg-white rounded-full shadow-md">
                  <FontAwesomeIcon
                    icon={service.icon}
                    className={`text-3xl ${service.textColor}`}
                  />
                </div>
                <h3
                  className={`text-xl font-semibold mb-3 ${service.textColor}`}
                >
                  {service.title}
                </h3>
                <p className="text-center text-gray-600">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-12">
          <StatsSection />
        </div>
      </div>
    </>
  );
};

export default OurServices;
