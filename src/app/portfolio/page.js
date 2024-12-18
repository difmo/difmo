import React from "react";
import ManyProjects from "../component/ManyProjects";

const page = () => {
  return (
    <>
      <div className=" my-7 ">
        <div className="md:p-10 sm:mx-[2rem] md:my-3 my-7">
          <h2 className="md:text-3xl p-4 sm:p-0  text-4xl text-center font-lilita font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-deep-blue to-[#EA130C]   ">
            Portfolio
          </h2>
          <p className="text-gray-700 px-4 sm:px-0  sm:pt-2 text-[16px] leading-relaxed md:leading-loose tracking-wide text-justify">
            we elevate your business with cutting-edge mobile app and website
            development services. Our SEO expertise ensures maximum visibility
            and engagement, taking your digital presence to new heights.
            Innovate and stand out with solutions that push boundaries.
          </p>
          <ManyProjects />
          {/* <div className="mt-4 text-center">
            <button
              onClick={handleViewMoreClick}
              className="px-6 py-2 bg-[#26baf6] text-white font-semibold rounded-lg shadow-md hover:bg-[#EA130C] transition duration-300"
            >
              View More
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default page;
