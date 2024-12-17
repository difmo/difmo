"use client";
import { useRouter } from "next/navigation";
import BuildingSoft from "./component/BuildingSoft";
import Development from "./component/Development";
import ManyProjects from "./component/ManyProjects";
import OurServices from "./component/OurServices";
import MainSlider from "./component/slider/MainSlider";
import OurContact from "./component/OurContact";
import ProjectSlider from "./component/ProjectSlider";

export default function Home() {
  const router = useRouter(); // Initialize the Next.js 

  const handleViewMoreClick = () => {
    router.push("/our-projects"); // Navigate to the projects page
  };
  return (
    <>
      <div className="my-4">
        <MainSlider />
      </div>

      <div className=" my-7">
        <BuildingSoft />
      </div>

      <div className=" my-7">
        <OurServices />
      </div>
      <div className=" my-7">
        <Development />
      </div>
      {/* <div className=" my-7  md:p-10 sm:mx-[2rem] md:my-3">
      
        <ProjectSlider />
      </div> */}
      <div className="my-7">
        <div className="md:p-10 sm:mx-[2rem] md:my-3 my-7">
          <h2 className="p-4 text-4xl font-extrabold text-transparent md:text-3xl sm:p-0 font-lilita bg-clip-text bg-gradient-to-r from-deep-blue to-primary-orange">
            Our Projects
          </h2>
          <p className="text-gray-700 px-4 sm:px-0 sm:pt-2 text-[16px] leading-relaxed md:leading-loose tracking-wide text-justify">
            At Difmo Tech, we transform your ideas into impactful digital
            experiences using a wide array of cutting-edge web and mobile
            technologies. Our expertise spans across React, Next.js, React
            Native, Flutter, Kotlin, Java, PHP Laravel, Vue.js, Angular, and
            Python, ensuring the perfect solution for any project. Whether it's
            building dynamic websites, responsive mobile apps, or feature-rich
            eCommerce platforms, we deliver seamless, scalable solutions that
            engage users and drive growth. We stay ahead of the curve by
            adopting trending technologies to create custom solutions tailored
            to your unique business needs.
          </p>
          <ProjectSlider />

        </div>
      </div>
      <div className="">
        <div className="md:p-10 sm:mx-[2rem] md:my-3 my-7">
          <h2 className="p-4 text-4xl font-extrabold text-transparent md:text-3xl sm:p-0 font-lilita bg-clip-text bg-gradient-to-r from-deep-blue to-primary-orange ">
            Get In Touch 
          </h2>
          <p className="text-gray-700 px-4 sm:px-0 sm:pt-2 text-[16px] leading-relaxed md:leading-loose tracking-wide text-justify">At Difmo Technologies, we specialize in creating innovative, user-friendly mobile apps for Android and iOS. Our expert team delivers custom solutions that drive business success with seamless user experiences and powerful functionality. Whether you need a new app or want to enhance an existing one, we're here to help turn your ideas into dynamic, scalable mobile solutions. Contact us today to elevate your brand and shape the future of your business!.</p>
        </div>
        <OurContact />
      </div>
    </>
  );
}
