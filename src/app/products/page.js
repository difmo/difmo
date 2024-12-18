"use client";

import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs, faUsers, faGlobe } from "@fortawesome/free-solid-svg-icons";
import defeat from "../assets/difeatlogo.jpg";
// import carwash from "../assets/ourprojects/difeat.jpg";
import carwash from "../assets/ourprojects/19.png"; 
import about from "../assets/about.jpg";
import Link from "next/link";
import RKGym from "../assets/ourprojects/17.png";
import RKGymStaff from "../assets/ourprojects/18.png";
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
  const services = [
    {
      id: 1,
      title: "Seamless Food and Water Supply with Difeat",
      description:
        "Difeat delivers essential food and water right to your doorstep. With fast, reliable service, a variety of options, and affordable pricing, Difeat makes sure you get what you need when you need it. Our easy-to-use app and eco-friendly practices ensure a convenient, sustainable experience. Download Difeat today for hassle-free food and water supply services.",
      image: defeat,
      link: "https://www.difeat.com/",
    },
    {
      id: 2,
      title: "Car Washing Services for Android & iOS",
      description:
        "Streamlined Booking for Expert Car Detailing. Our car washing app makes it easier than ever to keep your vehicle in top shape. With seamless booking features available for both Android and iOS, you can effortlessly schedule car wash and detailing services at your convenience. Schedule Services: Choose a time that suits your schedule and book professional car washing and detailing services in just a few taps. Manage Bookings: Easily view, modify, or cancel your bookings, ensuring a hassle-free experience. Expert Care for Your Vehicle: Our app connects you with the best car wash experts, ensuring your vehicle always shines like new.",
      image: carwash,
      link: "https://play.google.com/store/apps/details?id=com.codeservir.carcleanplus.new ",
    },
     
    
    {
      id: 3,
      title: "RK Fitness Android & iOS",
      description:
        "The RK Fitness app is a tranquil fitness studio application dedicated to fostering mindfulness and enhancing exercise practices. Designed with serene wellness experiences in mind, the app provides users with a holistic approach to fitness that emphasizes both physical health and mental well-being. Users can explore a variety of guided workouts, meditation sessions, and mindfulness exercises tailored to their individual needs. The app features customizable workout plans, progress tracking, and community support, allowing users to connect with like-minded individuals on their wellness journey. With its intuitive interface and engaging content, RK Fitness empowers users to cultivate a balanced lifestyle and achieve their health goals in a peaceful environment.",
      image: RKGym,
      link: "https://play.google.com/store/apps/details?id=com.dfimo.jdsgym",
    },
    {
      id: 4,
      title: "JDS Gym Staff Management",
      description:
        "The RK Gym Staff Management app is an efficient and comprehensive solution designed to streamline the management of gym staff and schedules. This powerful tool ensures smooth operations within the gym, enhancing communication and coordination among staff members. With features such as shift scheduling, task assignments, and performance tracking, gym managers can easily oversee daily activities and optimize workforce efficiency. The app also includes a communication platform that allows staff to share updates, collaborate on projects, and address any concerns in real-time. By utilizing the RK Gym Staff Management app, gym owners can improve employee engagement, reduce scheduling conflicts, and create a cohesive working environment that ultimately enhances the overall member experience.",
      image: RKGymStaff,
      link: "https://play.google.com/store/apps/details?id=com.dfimo.jdsgym",
    },
  ];
  return (
    <>
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen">
        {/* Image Component */}
        <Image
          src={about}
          alt="Contact Illustration"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 space-y-4 text-center sm:px-8 md:px-16 sm:space-y-6 md:space-y-8">
          {/* Headline */}
          <h1 className="text-2xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            {/* Driving Innovation. Delivering Excellence
             */}
            Our Product Offerings
          </h1>

          {/* Subtitle */}
          <p className="text-sm font-medium text-orange-500 sm:text-lg md:text-xl lg:text-2xl">
            Transforming ideas into impactful digital solutions
          </p>

          {/* Description */}
          <ul className="space-y-2 text-sm text-white sm:text-md md:text-lg lg:text-xl">
            <li>Build smarter, scale faster, grow stronger</li>
          </ul>

          {/* Call to Action Button */}
          <button className="px-4 py-2 mt-6 font-semibold text-white transition duration-300 ease-in-out bg-orange-600 rounded-lg sm:px-6 sm:py-3 hover:bg-[#EA130C]">
            Read Below More Product
          </button>
        </div>
      </div>

      {services.map((service) => (
        <div className="mx-4 my-20 sm:mx-8 lg:mx-16" key={service.id}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="col-span-1 rounded-lg">
              <h2 className="mb-6 text-xl font-extrabold text-transparent md:text-3xl font-lilita bg-clip-text bg-gradient-to-r from-deep-blue to-[#EA130C]">
                {service.title}
              </h2>
              <p className="text-gray-700 text-[16px] leading-relaxed md:leading-loose tracking-wide text-justify">
                {service.description}
              </p>

              {/* Read More Button */}
              <div className="mt-6">
                <Link href={service.link}>
                  <button className="relative px-6 pr-10 py-3 text-white font-semibold transition-transform duration-300 ease-in-out bg-gradient-to-r from-[#EA130C] to-deep-blue rounded-full hover:scale-105 focus:outline-none active:scale-95 shadow-lg shadow-primary-orange/50 hover:shadow-xl">
                    Read More
                    <span className="absolute w-4 h-4 ml-2 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 mt-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 12h14m-6-6l6 6-6 6"
                        />
                      </svg>
                    </span>
                  </button>
                </Link>
              </div>
            </div>

            <div className="flex items-center pt-10 justify-center col-span-1">
              <Image
                src={service.image}
                alt={service.title || "image"}
                width={500}
                height={300}
                className="w-full max-w-md bg-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow bg-red-500 duration-300 ease-in-out"
              />
            </div>
          </div>
        </div>
      ))}

      {/* <div className="py-2 pb-8 bg-warm-gray">
        <div className="mx-4 sm:mx-8 lg:mx-16">
          <div className="my-7">
            <h2 className="mb-6 text-xl font-extrabold text-transparent md:text-3xl font-lilita bg-clip-text bg-gradient-to-r from-deep-blue to-primary-orange">
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
                    <h2 className="mb-6 text-xl font-extrabold text-transparent md:text-3xl font-lilita bg-clip-text bg-gradient-to-r from-deep-blue to-primary-orange">
                      {card.title}
                    </h2>
                    <p className="text-gray-700 px-4 sm:px-0 sm:pt-2 text-[12px] leading-relaxed md:leading-loose tracking-wide text-justify">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default About;
