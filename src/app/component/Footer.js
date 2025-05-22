"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import logo from "../assets/svgfiles/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import TrustPilotWidget from "../trustpilat/page";

// Footer data
const footerData = {
  sections: [
    {
      title: "Useful Links",
      links: [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        // { name: "Pricing", path: "#" },
        { name: "Services", path: "/service" },
        { name: "Contact Us", path: "/contact-us" },
        // { name: "Term And Condition", path: "/termandcondition" },
        // { name: "Privacy And Policy", path: "/privacypolicy" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Web Development", path: "/services/web" },
        {
          name: "Mobile App Development",
          path: "/services/mobile",
        },
        { name: "Software Maintenance", path: "/software-maintenance" },
        { name: "Software Testing", path: "/software-testing" },
        // { name: "Cloud Computing", path: "/services/cloud-computing" },
        // {
        //   name: "Blockchain Solutions",
        //   path: "/services/blockchain-solutions",
        // },
        // { name: "Cybersecurity", path: "/services/cybersecurity" },
        // // {
        // //   name: "AI & Machine Learning",
        // //   path: "/services/ai-machine-learning",
        // // },
        // { name: "Data Analytics", path: "/services/data-analytics" },
        // { name: "IT Consulting", path: "/services/it-consulting" },
      ],
    },
    {
      title: "Marketing",
      links: [
        { name: "On-page SEO", path: "/newmarket" },
        { name: "Google Ads", path: "/googleads" },
        { name: "Meta Ads", path: "/metaads" },
        { name: "Inbound-Marketing", path: "/inbound-marketing" },
      ],
    },
  ],
  contact: {
    email: "info@difmo.com",
    phone: "+91 945-579-1624",
    location: "4/37 Vibhav Khand Gomti Nagar, Lucknow, Uttar Pradesh, 226010 ",
  },
  social: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/difmotech",
      icon: faFacebook,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/thedifmo",
      icon: faInstagram,
    },

    {
      name: "YouTube",
      href: "https://www.youtube.com/@thedifmo",
      icon: faYoutube,
    },
    {
      name: "Twitter",
      href: "https://x.com/difmotech",
      icon: faTwitter,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/difmo",
      icon: faLinkedin,
    },
  ],
};

const Footer = () => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-[#111827] text-white bg-gradient-to-br from-[#002D55] via-[#00325d] to-[#002D55] relative overflow-hidden w-full font-poppins pl-5 sm:pl-0 ">
      <div className="relative m-10 bg-[#002D55] md:px-28 py-16 rounded-full z-10 max-w-screen-xl  mx-auto ">
        <div className="grid  grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-5 text-center">
          {/* First column with logo, description, and social icons */}
          <div className="flex flex-col items-center justify-center h-full">
            <Image
              src={logo}
              alt="Company Logo"
              width={96}
              height={96}
              className="object-contain w-auto h-16 mb-5"
            />
            <h3 className="text-center">
              Enhancing Customer Experience  with Innovative <br/> Web and Mobile
            </h3>
            <div className="flex flex-col justify-between md:flex-row">
              {/* <p className="max-w-md mx-auto mt-4 text-sm text-white md:mx-0">
                At Difmo Technologies, we don’t just build software—we craft the
                future. Powered by innovation, driven for global impact.
              </p> */}
         
              <div className="flex justify-center mt-4 space-x-4 md:justify-start">
                {footerData.social.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-900 dark:hover:text-white"
                  >
                    <FontAwesomeIcon
                      icon={social.icon}
                      className="w-5 h-5 hover:text-primary-orange"
                    />
                    <span className="sr-only">{social.name} page</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Second column with links */}
          <div className="mb-6">
            <h2 className="mb-4 text-sm font-semibold  text-white uppercase">
              {footerData.sections[0].title}
            </h2>
            <ul className="font-medium text-white">
              {footerData.sections[0].links.map((link, index) => (
                <li key={index} className="mb-2">
                  <Link href={link.path}>
                    <span
                      onClick={handleLinkClick}
                      className="cursor-pointer hover:underline hover:text-primary-orange"
                    >
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Third column with services links */}
          <div className="mb-6">
            <h2 className="mb-4 text-sm font-semibold text-white uppercase dark:text-white">
              {footerData.sections[1].title}
            </h2>
            <ul className="font-medium text-white">
              {footerData.sections[1].links.map((link, index) => (
                <li key={index} className="mb-2">
                  <Link href={link.path}>
                    <span
                      onClick={handleLinkClick}
                      className="cursor-pointer hover:underline hover:text-primary-orange"
                    >
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Fourth column with contact details */}
          <div className="mb-6">
            <h2 className="mb-4 text-sm font-semibold text-white uppercase dark:text-white">
              Marketing
            </h2>
            <ul className="font-medium text-white">
              {footerData.sections[2].links.map((link, index) => (
                <li key={index} className="mb-2">
                  <Link href={link.path}>
                    <span
                      onClick={handleLinkClick}
                      className="cursor-pointer hover:underline hover:text-primary-orange"
                    >
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* fiveth column with contact details */}
          <div className="mb-6">
            <h2 className="mb-4 text-sm font-semibold text-white uppercase dark:text-white">
              Contact
            </h2>
            <ul className="font-medium text-white">
              <li className="mb-2">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="w-4 h-4 mr-2 hover:text-primary-orange"
                />
                {footerData.contact.email}
              </li>
              <li className="mb-2">
                <FontAwesomeIcon icon={faPhone} className="w-4 h-4 mr-2" />
                {footerData.contact.phone}
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="w-4 h-4 mr-2"
                />
                {footerData.contact.location}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-8 border-white lg:my-8" />

      <div className="flex flex-col-reverse items-center justify-center mt-8 mb-2 sm:flex-row sm:items-center ">
        {/* Copyright notice */}
        <span className="mb-4 text-sm text-white dark:text-gray-400 sm:text-center sm:mb-0">
          © 2025{" "}
          <a href="#" className="hover:underline">
            DIFMO TECHNOLOGIES
          </a>
          . All Rights Reserved.
        </span>
      </div>
      <div className="flex flex-col-reverse items-center justify-center mb-8 sm:flex-row sm:items-center ">
        {/* Copyright notice */}
        <span className="mb-4 text-sm text-white dark:text-gray-400 sm:text-center sm:mb-0">
          <Link href="/terms-conditions" className="mx-3 hover:underline">
            Terms & Conditions
          </Link>
          ||
          <Link href="/privacy-policy" className="mx-3 hover:underline">
            Privacy Policy
          </Link>
          {/* ||
          <Link href="/cookie-policy" className="mx-3 hover:underline">
            Cookie Policy
          </Link> */}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
