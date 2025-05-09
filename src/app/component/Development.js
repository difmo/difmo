import React from "react";
import see from "../assets/development/development.svg";
import Image from "next/image";

const Development = () => {
  return (
    <section className="mx-4 my-12 lg:my-20 sm:mx-8 lg:mx-16">
      {/* Title Section */}
      <div className="mb-8 text-center">
        <p className="text-4xl font-bold text-black">
          Our Development Life Cycle
        </p>
        <p className="mt-4 text-lg text-gray-600 sm:text-base md:text-lg">
          Empowering businesses with scalable technology solutions.
        </p>
      </div>

      {/* Image Section */}
      <figure className="flex items-center justify-center">
        <Image
          src={see}
          alt="Development Life Cycle"
          objectFit="contain"
          className="w-full h-auto max-w-4xl"
          priority
        />
      </figure>
    </section>
  );
};

export default Development;
