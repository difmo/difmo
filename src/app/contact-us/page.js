"use client";

import React from "react";

import OurContact from "../component/OurContact";

const Contact = () => {
  return (
    <>
      {/* <div className="py-24"> */}
      <div className="bg-slate-50 py-8 pt-24 md:py-24 px-2 md:px-24">
        <h1 className="text-4xl py-3 font-bold text-gray-800 text-center mb-8">
          Contact fUs
        </h1>
        <div className="text-lg text-gray-700">
          <p className="mb-4 text-center w-full lg:px-44">
            Have questions or need assistance? We're here to help! Reach out to
            us through any of the following channels.
          </p>
        </div>

        <OurContact />
      </div>
    </>
  );
};

export default Contact;
