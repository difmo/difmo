"use client";

import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs, faUsers, faGlobe } from "@fortawesome/free-solid-svg-icons";
import fqaQ from "../assets/backgrounds_images/mibileapp.png";
import webdevlopment from "../assets/mobapp.jpg";
import webimage from "../assets/dev.jpg";
import software from "../assets/projectImages/sh.png";
import appdev from "../assets/appdevs.png";
import apiint from "../assets/apiint.png";
import crmimg from "../assets/crmimg.png";
import consulating from "../assets/consulating.png";
import iot from "../assets/iot.png";
import ailear from "../assets/ailear.png";
import sofware1 from "../assets/imagess.png";
import Contactus from "../component/Contactus";
import SoftwareMaintenance from "../component/SoftwareMaintenance";

const Mobiledevlopment = () => {
  const cardData = [
    {
      id: 1,
      title: "Web Development",
      // imageUrl: webimage, // Add your image path here
      imageUrl: software,
    },
    {
      id: 2,
      title: "Software development",
      imageUrl: webimage, // Add your image path here
      // imageUrl: software, // Add your image path here
    },
    {
      id: 3,
      title: "App development",
      imageUrl: appdev, // Add your image path here
    },
    {
      id: 4,
      title: "3rd Party API's integration",
      imageUrl: apiint, // Add your image path here
    },
    {
      id: 5,
      title: "CRM development",
      imageUrl: crmimg, // Add your image path here
    },
    {
      id: 6,
      title: "Software consulting",
      imageUrl: consulating, // Add your image path here
    },
    {
      id: 7,
      title: "IOT & Automation",
      imageUrl: iot, // Add your image path here
    },
    {
      id: 8,
      title: "Machine Learning & AI",
      imageUrl: ailear, // Add your image path here
    },
    {
      id: 9,
      title: "Software Re-engineering",
      imageUrl: sofware1,
    },
  ];

  return (
    <>
      <SoftwareMaintenance />
      <div className="py-2 pb-8   bg-warm-gray p-4 ">
        <div className="rounded-lg shadow-2xl p-1">
          <Contactus />
        </div>
      </div>
    </>
  );
};

export default Mobiledevlopment;
