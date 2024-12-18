import React from "react";
import see from "../assets/yes1.png";
import Image from "next/image";
const BuildingSoft = () => {
  return (
    <div className="mx-4 sm:mx-8 lg:mx-16 mt-20 my-12">
      {/* Grid Container for mobile responsive layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Text Section */}
        <div className=" rounded-lg">
          <h2 className="md:text-3xl text-4xl font-lilita font-extrabold text-transparent bg-clip-text bg-gradient-to-r  from-deep-blue to-[#EA130C]  mb-6">
            Building Software for World Changers
          </h2>
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
            className="w-full h-50 transition-all duration-500 ease-in-out transform hover:scale-105 hover:translate-x-4 hover:translate-y-4 hover:rotate-3"
          />
        </div>
      </div>
    </div>
  );
};

export default BuildingSoft;
