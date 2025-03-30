

"use client";

import React from "react";

// import SoftwareMaintenance from "../component/SoftwareMaintenance";
import Contactus from "../component/Contactus";
import SoftwareMaintenance from "../component/SoftwareMaintenance";

const Mobiledevlopment = () => {
  // const cardData = [
  //   {
  //     id: 1,
  //     title: "Web Development",
  //     // imageUrl: webimage, // Add your image path here
  //     imageUrl: software,
  //   },
  //   {
  //     id: 2,
  //     title: "Software development",
  //     // imageUrl: webimage, // Add your image path here
  //     // imageUrl: software, // Add your image path here
  //   },
  //   {
  //     id: 3,
  //     title: "App development",
  //     imageUrl: appdev, // Add your image path here
  //   },
  //   {
  //     id: 4,
  //     title: "3rd Party API's integration",
  //     imageUrl: apiint, // Add your image path here
  //   },
  //   {
  //     id: 5,
  //     title: "CRM development",
  //     imageUrl: crmimg, // Add your image path here
  //   },
  //   {
  //     id: 6,
  //     title: "Software consulting",
  //     imageUrl: consulating, // Add your image path here
  //   },
  //   {
  //     id: 7,
  //     title: "IOT & Automation",
  //     imageUrl: iot, // Add your image path here
  //   },
  //   {
  //     id: 8,
  //     title: "Machine Learning & AI",
  //     imageUrl: ailear, // Add your image path here
  //   },
  //   {
  //     id: 9,
  //     title: "Software Re-engineering",
  //     imageUrl: sofware1,
  //   },
  // ];

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