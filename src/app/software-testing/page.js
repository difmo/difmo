"use client";

import React from "react";
// import Image from "next/image";

// import fqaQ from "../assets/backgrounds_images/mibileapp.png";
// import webdevlopment from "../assets/webdevlopment .jpg";

import Contactus from "../component/Contactus";
// import Pageseo from "../marketing/Page";

const Mobiledevlopment = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-50 pt-24">
        {/* Hero Section */}
        <div className="px-4 py-16 text-center text-white bg-primary-orange md:px-12">
          <h1 className="text-4xl font-bold md:text-5xl">
            Ensuring Quality eCommerce Solutions through Rigorous Software
            Testing
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Delivering seamless online shopping experiences through innovation
            and precision.
          </p>
        </div>

        {/* Introduction Section */}
        <section className="px-4 py-12 md:px-12">
          <div className="max-w-5xl mx-auto text-gray-800">
            <h2 className="mb-6 text-3xl font-bold text-deep-blue">
              Why Software Testing Matters in eCommerce
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              In today’s dynamic digital marketplace, delivering seamless online
              shopping experiences is crucial for business success. At Difmo
              Technologies, we don't just build innovative eCommerce
              solutions—we ensure they work flawlessly through rigorous software
              testing. Every custom-built platform we create undergoes thorough
              testing to guarantee high performance, security, and reliability.
            </p>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="px-4 py-12 bg-gray-100 md:px-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="mb-6 text-3xl font-bold text-deep-blue">
              Mastering eCommerce Development Technologies for Your Success
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              At Difmo Technologies, our years of expertise in eCommerce
              development have not only made us leaders in the industry but have
              also highlighted the importance of top-notch software testing
              practices. We leverage the latest technologies to build fast,
              secure, and scalable online stores tailored to your business
              needs.
            </p>
            <ul className="pl-8 space-y-3 text-lg text-gray-700 list-disc">
              <li>
                Comprehensive functional testing ensures every feature of your
                platform works as expected.
              </li>
              <li>
                Performance testing guarantees fast and responsive user
                interactions, even under heavy traffic.
              </li>
              <li>
                Security testing protects sensitive data, including secure
                payment gateways.
              </li>
              <li>
                Usability testing ensures intuitive and engaging user
                experiences.
              </li>
            </ul>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="px-4 py-12 text-center md:px-12">
          <div className="max-w-4xl mx-auto text-gray-800">
            <h2 className="mb-6 text-3xl font-bold text-deep-blue">
              Stay Ahead with Difmo Technologies
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              By adopting the most advanced testing methodologies, we eliminate
              bugs and performance issues, keeping your eCommerce solutions
              running flawlessly. Stay ahead of the competition with innovative,
              well-tested eCommerce solutions powered by cutting-edge
              technology—only from Difmo Technologies.
            </p>
            <a
              href="/contact"
              className="px-6 py-3 text-lg font-semibold text-white transition duration-300 rounded-lg bg-deep-blue hover:bg-blue-700"
            >
              Contact Us Today
            </a>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-4 py-12 bg-gray-100 md:px-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="mb-6 text-3xl font-bold text-deep-blue">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Why is software testing crucial for eCommerce platforms?
                </h3>
                <p className="text-gray-700">
                  Software testing ensures your platform performs flawlessly,
                  providing secure, reliable, and intuitive experiences for your
                  customers. It minimizes bugs, performance issues, and risks,
                  keeping your business competitive.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  What types of testing does Difmo Technologies offer?
                </h3>
                <p className="text-gray-700">
                  We offer functional, performance, security, and usability
                  testing, tailored to ensure your eCommerce solution operates
                  seamlessly in all aspects.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  How does Difmo Technologies ensure platform scalability?
                </h3>
                <p className="text-gray-700">
                  Our rigorous performance testing ensures that your platform
                  handles increased traffic without compromising user experience
                  or performance.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="p-4 py-2 pb-8 bg-warm-gray ">
        <div className="p-1 rounded-lg shadow-2xl">
          <Contactus />
          {/* <Pageseo /> */}
        </div>
      </div>
    </>
  );
};

export default Mobiledevlopment;