import React from "react";
import see from "../assets/tech.png";
import Image from "next/image";
import Heading from "./Headings";
const BuildingSoft = () => {
  return (
    <div className="mx-4 my-12 mt-20 sm:mx-8 lg:mx-16">
      {/* Grid Container for mobile responsive layout */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Text Section */}
        <div className="rounded-lg ">
          <Heading headingtext=" Building Software for World Changers"/>
      
          <p className="text-gray-700 text-[16px] leading-relaxed md:leading-loose tracking-wide text-justify">
            Websites are essential nowadays. Whether it&apos;s a large-scale
            industry or a new startup, everyone owns a website for their
            company. It can upscale your reach to more people, and that’s where
            we come in. Our technological expertise coupled with excellent UX
            skills makes us the leading web development company in India.
          </p>
        </div>
        <div>
          <Image
            src={see} // Image from public folder
            alt="About Us"
            className="w-full h-64 transition-all duration-500 ease-in-out transform hover:scale-105 hover:translate-x-4 hover:translate-y-4 "
          />
        </div>
      </div>
    </div>
  );
};

export default BuildingSoft;
