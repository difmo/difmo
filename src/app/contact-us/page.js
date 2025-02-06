"use client";

import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs, faUsers, faGlobe } from "@fortawesome/free-solid-svg-icons";
import contact from "../assets/contact.jpeg";
import OurContact from "../component/OurContact";

const Contact = () => {
  

  return (
    <>
      {/* <div className="py-24"> */}
      <div className="bg-slate-50 py-24 px-10">
        <h1 className="text-4xl flex justify-center font-bold px-10 text-gray-800 ">
          {" "}
          Contect Us
        </h1>
        <div className="py-2">
          {" "}
          <p className="text-lg flex justify-center  px-0 md:px-[390px] lg:px-[390px] text-gray-700 ">
            Have questions or need assistance? We're here to help! Reach out to
            us
          </p>
          <p className="text-lg flex justify-center  px-0 md:px-[430px] lg:px-[430px] text-gray-700 ">
            {" "}
            through any of the following channels.
          </p>
        </div>
        <OurContact />
        {/* </div> */}
      </div>
    </>
  );
};

export default Contact;
