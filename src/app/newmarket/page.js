"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import acco1 from "../assets/marketing/sec1.jpeg";
import acco2 from "../assets/marketing/seo2.png";
import AccordionList from "../component/AccordionList";
import FAQ from "../component/Faq";
import Contact from "../contact-us/page";
import RequestForm from "../component/RequestForm"; // Ensure  is correctly imported
import Link from "next/link";
import Contactus from "../component/Contactus";

export default function Pageseo() {
  const [currentText, setCurrentText] = useState("");
  const texts = ["Websites", "Mobile Apps", "Digital Solutions"];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    let index = 0;

    const type = () => {
      let charIndex = 0;
      setCurrentText("");

      const typeInterval = setInterval(() => {
        if (charIndex <= texts[index].length) {
          setCurrentText((prev) => prev + texts[index][charIndex]);
          charIndex++;
        } else {
          clearInterval(typeInterval);
          setTimeout(deleteText, 1000);
        }
      }, 100);
    };

    const deleteText = () => {
      let charIndex = texts[index].length;

      const deleteInterval = setInterval(() => {
        if (charIndex > 0) {
          setCurrentText((prev) => prev.slice(0, -1));
          charIndex--;
        } else {
          clearInterval(deleteInterval);
          index = (index + 1) % texts.length;
          setTimeout(type, 300);
        }
      }, 50);
    };

    type(); // Start typing effect on mount
  }, [texts]);

  const features = [
    {
      icon: "📊",
      title: "Higher Search Rankings",
      description:
        "We optimize your website's content to align with SEO algorithms, increasing visibility and organic traffic.",
    },
    {
      icon: "📈",
      title: "Increased Organic Traffic",
      description:
        "Our on-page strategies attract visitors actively searching for your products or services.",
    },
    {
      icon: "🛡️",
      title: "Improved User Experience",
      description:
        "We improve your website's navigation, readability, and design to keep visitors engaged.",
    },
    {
      icon: "🎯",
      title: "Targeted Keyword Optimization",
      description:
        "We identify and integrate relevant keywords into your content to reach your ideal audience.",
    },
    {
      icon: "📉",
      title: "Data-Driven Insights",
      description:
        "We track KPIs to measure the impact of our on-page efforts and refine strategies for improvement.",
    },
    {
      icon: "💾",
      title: "App Store Optimization (ASO)",
      description:
        "App title and description Keywords in app listing Positive user reviews",
    },
  ];

  return (
    <>
      {/* Main Section */}
      <div className="min-h-screen flex items-center bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Section */}
          <div>
            <h1 className="leading-tight text-3xl md:leading-snug md:text-5xl font-bold mb-4 text-center md:text-left text-gray-800">
              <span className="text-primary-orange">Boost Rankings</span>&nbsp;
              with On-Page SEO Optimization
            </h1>
            <p className="text-base sm:text-lg text-gray-800 mb-6 text-center md:text-left">
              Enhance your{" "}
              <span className="font-bold text-gray-800">
                business’s SERP rankings
              </span>{" "}
              with our expert on-page SEO optimization.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <button
                onClick={handleOpenModal}
                className="bg-blue-600 text-white px-12 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
              >
                Get a Quote
              </button>
              <Link
                href={"/contact-us"}
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg shadow-lg hover:bg-blue-100 transition"
              >
                Book a Consultation
              </Link>
            </div>
          </div>

          {/* Video/Image Section */}
          <div className="relative w-full h-full bg-gray-200 rounded-lg shadow-md overflow-hidden">
            <Image
              src={acco2}
              alt="SEO Optimization"
              layout="responsive"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-10 px-6">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center"
            >
              <div className="text-5xl text-blue-600 mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold mb-2 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <AccordionList />
      <FAQ />
      <Contactus />

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div
            className="modal-content bg-white rounded-lg shadow-lg p-6 max-w-lg relative"
            ref={modalRef}
          >
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
              onClick={handleCloseModal}
            >
              &times;
            </button>
            <RequestForm />
          </div>
        </div>
      )}
    </>
  );
}
