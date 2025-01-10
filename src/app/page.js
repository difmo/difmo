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
<LandingPage/>
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

      <section className="px-6 py-12 text-center rounded-lg shadow-md bg-gray-50 sm:px-8 lg:px-16">
      <h2 className="mb-4 text-3xl font-extrabold sm:text-4xl text-deep-blue">
        Get In Touch
      </h2>
      <p className="max-w-3xl mx-auto text-base leading-relaxed text-gray-700 sm:text-lg">
        At <strong>Difmo Technologies</strong>, we craft innovative mobile apps for Android and iOS, delivering tailored solutions to drive your business success. Let’s create something amazing together!
      </p>
      <div className="mt-6">
        <OurContact />
      </div>
    </section>

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
