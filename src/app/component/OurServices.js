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

const OurServices = () => {
  const servicesData = [
    {
      icon: faLaptopCode,
      title: "Android & iOS",
      description:
        "Crafting robust, scalable Android & iOS apps customized to meet your business requirements for optimal mobile experiences.",
      bgColor: "bg-green-100",
      textColor: "text-green-800",
    },
    {
      icon: faLaptopCode,
      title: "Web",
      description:
        "Our web development team crafts responsive, user-friendly websites and web applications tailored to elevate your online presence and user experience.",
      bgColor: "bg-blue-100",
      textColor: "text-blue-800",
    },
    {
      icon: faLaptopCode,
      title: "UI/UX",
      description:
        "We specialize in building responsive, user-centered websites and web apps, designed to enhance your digital presence and deliver a seamless user experience.",
      bgColor: "bg-blue-100",
      textColor: "text-blue-800",
    },
    {
      icon: faTools,
      title: "Tech Consulting",
      description:
        "We provide expert tech consulting services to help you navigate the latest technologies and solutions.",
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-800",
    },
    {
      icon: faCloud,
      title: "Cloud Solutions",
      description:
        "We offer cloud computing solutions to enhance your business infrastructure and scalability.",
      bgColor: "bg-purple-100",
      textColor: "text-purple-800",
    },
    {
      icon: faBrain,
      title: "Machine Learning",
      description:
        "Explore machine learning solutions to optimize your business processes and decision-making.",
      bgColor: "bg-indigo-100",
      textColor: "text-indigo-800",
    },
    {
      icon: faShieldAlt,
      title: "Cybersecurity",
      description:
        "Our cybersecurity services ensure the safety and integrity of your business data.",
      bgColor: "bg-red-100",
      textColor: "text-red-800",
    },
    {
      icon: faNavicon,
      title: "Data Analytics",
      description:
        "Analyze and visualize complex data patterns to stay ahead of the competition and improve business performance.",
      bgColor: "bg-indigo-100",
      textColor: "text-indigo-800",
    },
  ];

  return (
    <div className="mx-4 my-8 sm:mx-8 lg:mx-16">
      <h2 className="mb-4 text-4xl font-extrabold text-transparent md:text-3xl font-lilita bg-clip-text bg-gradient-to-r from-deep-blue to-[#EA130C]">
        Our Services
      </h2>
      <p className="text-gray-700 text-[16px] leading-relaxed md:leading-loose tracking-wide text-justify">
        We elevate your business with cutting-edge mobile app and website
        development services. Our SEO expertise ensures maximum visibility and
        engagement, taking your digital presence to new heights. Innovate and
        stand out with solutions that push boundaries.
      </p>
      <div className="container mx-auto mt-7 grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="cursor-pointer p-4 sm:p-5 rounded-lg flex flex-col items-center shadow-2xl transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out mb-5"
          >
            <div className="flex items-center justify-center w-16 h-16 mb-4 bg-white rounded-full">
              <FontAwesomeIcon
                icon={service.icon}
                className={`text-4xl ${service.textColor}`}
              />
            </div>
            <h2
              className={`text-2xl sm:text-xl font-semibold mb-4 ${service.textColor}`}
            >
              {service.title}
            </h2>
            <p className="px-4 text-center text-gray-700">
              {service.description}
            </p>
          </div>
        ))}
      </div>
      <StatsSection/>
    </div>
  );
};

export default OurServices;
