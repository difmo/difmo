"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import Script from "next/script";

import BuildingSoft from "./component/BuildingSoft";
import Development from "./component/Development";
import OurServices from "./component/OurServices";
import OurContact from "./component/OurContact";
import LandingPage from "./component/landingpage/LandingPage";

export default function Home() {
  const router = useRouter(); // Initialize the Next.js router
  const pathname = usePathname(); // Get the current pathname

  // Google Analytics - Track Route Changes
  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-YJS1KZQ78Q", {
        page_path: pathname,
      });
    }
  }, [pathname]); // Track changes to the pathname

  const handleViewMoreClick = () => {
    router.push("/our-projects"); // Navigate to the projects page
  };

  return (
    <>
      {/* Main Slider */}
      {/* <MainSlider /> */}
      <LandingPage />
      {/* Building Soft */}
      <BuildingSoft />

      {/* Our Services */}
      <div className="my-7">
        <OurServices />
      </div>

      {/* Development */}
      <div className="my-7">
        <Development />
      </div>

      {/* Get In Touch */}
      <div className="bg-slate-50 py-24 px-2 md:px-10">
        <h1 className="text-4xl flex justify-center font-bold px-10 text-gray-800 ">
          {" "}
          Contact Us
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

      {/* Google Analytics Scripts */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-YJS1KZQ78Q"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-YJS1KZQ78Q');
        `}
      </Script>
    </>
  );
}
