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
      <div className="w-full h-[250px] md:h-[400px] mb-6 relative">
        <Image
          src={about}
          alt="About Illustration"
          layout="fill"
          objectFit="cover"
          className="rounded-b-[20%]"
        />
      </div>

      <div className="mx-4 sm:mx-8 lg:mx-16 my-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-2 rounded-lg">
            <h2 className="md:text-3xl text-xl font-lilita font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-deep-blue to-primary-orange mb-6">
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

          <div className="col-span-1 flex justify-center items-center">
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

      <div className="bg-warm-gray py-2 pb-8">
        <div className="mx-4 sm:mx-8 lg:mx-16">
          <div className="my-7">
            <h2 className="md:text-3xl text-xl font-lilita font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-deep-blue to-primary-orange mb-6">
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {cardData.map((card) => (
                <div
                  key={card.id}
                  className="bg-warm-gray rounded-tr-[2rem] rounded-bl-[2rem] p-6 md:mx-0 mx-5 shadow-2xl transition-transform transform"
                >
                  <div className="text-center">
                    <FontAwesomeIcon
                      icon={card.icon}
                      className="text-3xl text-primary-orange mb-2 mx-auto"
                    />
                    <h2 className="md:text-3xl text-xl font-lilita font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-deep-blue to-primary-orange mb-6">
                      {card.title}
                    </h2>
                    <p className="text-gray-700 px-4 sm:px-0 sm:pt-2 text-[12px] leading-relaxed md:leading-loose tracking-wide text-justify">
                      {/* <p className="font-concert text-start text-gray-700 leading-relaxed"> */}
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
