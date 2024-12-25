"use client";

import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs, faUsers, faGlobe } from "@fortawesome/free-solid-svg-icons";
import fqaQ from "../assets/backgrounds_images/aboutbg2.jpg";
import Contactus from "../component/Contactus";
import Ecommerce from "../component/webComponent/Ecommerce";
import BusinessProfile from "../component/webComponent/BusinessProfile";
import PersinalWebsite from "../component/webComponent/PersinalWebsite";
import Socialmedioa from "../component/webComponent/Socialmedia";
import CorporateWebsite from "../component/webComponent/CorporateWebsite";
import Chatingwebsite from "../component/webComponent/Chatingwebsite";

const Webdevlopment = () => {
  return (
    <>
      <div className="mx-4 my-20 sm:mx-8 lg:mx-28 mt-36">
        <div className="">
          <div className="col-span-2 rounded-lg">
            <h2 className="md:text-4xl text-xl font-lilita font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-deep-blue to-[#EA130C] mb-6 flex justify-center">
              Wev Development
            </h2>
            <p className="text-gray-700 text-[18px] leading-relaxed md:leading-loose tracking-wide text-justify  ">

              We specialize in designing and developing cutting-edge web
              applications that perfectly showcase your local business
              portfolio. Our goal is to craft applications that not only stand
              out with stunning design but also deliver seamless functionality,
              ensuring a lasting impression on your audience.
            </p>
          </div>
        </div>
        <Ecommerce />
        <BusinessProfile />
        <PersinalWebsite />
        <Socialmedioa />
        <Chatingwebsite />
        <CorporateWebsite />
      </div>
      <div className="p-4 py-2 pb-8 bg-warm-gray ">
        <div className="p-1 rounded-lg shadow-2xl">
          <Contactus />
        </div>
      </div>
    </>
  );
};

export default Webdevlopment;
