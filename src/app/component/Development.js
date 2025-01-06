import React from "react";
import see from "../assets/svgfiles/pathCurve.svg";
import Image from "next/image";
import TrustPilotWidget from "../trustpilat/page";

const Development = () => {
  return (
    <div className="mx-4 sm:mx-8 lg:mx-16 mt-20 my-12">
      {/* Text Section - Spans 1 column */}
      <div className="md:col-span-1 rounded-lg">
        <h2 className="md:text-3xl text-4xl font-lilita font-extrabold text-deep-blue   mb-3">
          Development Cycle
        </h2>

        <p className="text-gray-700 text-[16px] leading-relaxed md:leading-loose tracking-wide text-justify">
          we turn your ideas into reality with a complete development process
          aimed at sustainable growth. From concept to launch, we manage every
          phase. We begin by understanding your vision and outlining clear
          project goals. In the design phase, we create a scalable framework,
          then bring it to life using cutting-edge tech. Rigorous testing
          ensures quality, and any issues are resolved before final approval. We
          handle deployment, delivering high-performance software that drives
          your business forward, ensuring success at every step. Let us be your
          trusted digital partner in innovation.
        </p>
      </div>

      {/* Image Section - Spans 2 columns */}
      <div className="md:col-span-2">
        <div className="relative w-full  flex justify-center items-center">
          <Image src={see} alt="Path Curve" objectFit="contain" />
        </div>
      </div>
    </div>
  );
};

export default Development;
