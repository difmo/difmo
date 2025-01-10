import React from "react";
import see from "../assets/development/development.svg";
import Image from "next/image";

const Development = () => {
  return (
    <section className="mx-4 my-12 lg:my-20 sm:mx-8 lg:mx-16">
      {/* Title Section */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl text-deep-blue">
          Our Development Life Cycle
        </h2>
        <p className="mt-4 text-sm text-gray-600 sm:text-base md:text-lg">
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
