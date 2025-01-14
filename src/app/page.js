"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Script from "next/script";

import BuildingSoft from "./component/BuildingSoft";
import Development from "./component/Development";
import OurServices from "./component/OurServices";
import MainSlider from "./component/slider/MainSlider";
import OurContact from "./component/OurContact";
import LandingPage from "./component/landingpage/LandingPage";

export default function Home() {
  const router = useRouter(); // Initialize the Next.js router

  // Google Analytics - Track Route Changes
  useEffect(() => {
    const handleRouteChange = (url) => {
      if (window.gtag) {
        window.gtag("config", "G-YJS1KZQ78Q", {
          page_path: url,
        });
      }
    };
    router.events?.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events?.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

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
      <div className="my-7 md:p-10 sm:mx-[2rem] md:my-3">
        <h2 className="p-4 text-4xl font-extrabold md:text-3xl sm:p-0 font-lilita text-deep-blue">
          Get In Touch
        </h2>
        <p className="text-gray-700 px-4 sm:px-0 sm:pt-2 text-[16px] leading-relaxed md:leading-loose tracking-wide text-justify">
          At Difmo Technologies, we specialize in creating innovative,
          user-friendly mobile apps for Android and iOS. Our expert team
          delivers custom solutions that drive business success.
        </p>
        <OurContact />
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
