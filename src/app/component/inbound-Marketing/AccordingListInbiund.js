import { useState } from "react";
import acco1 from "../../assets/marketing/1.png";
import Image from "next/image";

import web from "../../assets/Deliver/code2.svg";
import web1 from "../../assets/Deliver/serch.svg";
import note from "../../assets/Deliver/note.svg";
import note1 from "../../assets/Deliver/note1.svg";
import pancil from "../../assets/Deliver/pancial.svg";
import pen from "../../assets/Deliver/pen.svg";
const Accordion = ({ title, content, id }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="border rounded-md shadow-sm bg-white mb-4">
      {/* Accordion Header */}
      <div className="kt-accordion-header-wrap">
        <button
          className={`w-full flex justify-between items-center px-5 py-3 text-left ${
            isExpanded ? "border-b border-gray-300" : ""
          } focus:outline-none focus:ring focus:ring-blue-300`}
          type="button"
          id={`accordion-header-${id}`}
          aria-controls={`accordion-panel-${id}`}
          aria-expanded={isExpanded}
          onClick={toggleAccordion}
        >
          <span className="font-bold text-gray-950">{title}</span>
          <span
            className={`transform transition-transform  text-red-600 ${
              isExpanded ? "rotate-180" : ""
            }`}
          >
            ▼
          </span>
        </button>
      </div>

      {/* Accordion Panel */}
      <div
        id={`accordion-panel-${id}`}
        className={`overflow-hidden transition-max-height duration-300 ${
          isExpanded ? "max-h-screen" : "max-h-0"
        }`}
        aria-labelledby={`accordion-header-${id}`}
        role="region"
        style={{ transition: "max-height 0.3s ease-in-out" }}
      >
        <div className="px-5 py-4">
          <p className="text-gray-600">{content}</p>
        </div>
      </div>
    </div>
  );
};

const AccordingListInbiund = () => {
  // Data for multiple accordion items
  const accordionData = [
    {
      id: 1,
      title: "In-Depth Website Audit",
      content:
        "We begin by thoroughly analyzing your website's current on-page elements, identifying areas for improvement and opportunities for optimization.",
    },
    {
      id: 2,
      title: "Keyword Research & Strategy",
      content:
        "We conduct extensive research to identify relevant keywords that align with your target audience's search intent. Our tailored keyword strategy incorporates these terms strategically.",
    },
    {
      id: 3,
      title: "Content Optimization",
      content:
        "We optimize your website content to ensure it is engaging, informative, and SEO-friendly, driving more organic traffic.",
    },
    {
      id: 4,
      title: "Technical SEO Enhancement",
      content:
        "Our team ensures your website is technically sound by optimizing page speed, mobile responsiveness, and other critical elements.",
    },
    {
      id: 5,
      title: "Meta Tag Optimization",
      content:
        "We craft compelling meta titles and descriptions that improve your click-through rates and search engine rankings.",
    },
    {
      id: 6,
      title: "Performance Tracking & Reporting",
      content:
        "We monitor your website's performance after implementing our on-page optimizations, tracking key metrics like organic traffic, search rankings, and user engagement.",
    },
  ];
  const cards = [
    {
      title: "Website Audit Report",
      description:
        "A detailed on-page analysis of your website, highlighting strengths and weaknesses.",
      icon: web, // Tailwind icons can be used here
    },
    {
      title: "Keyword Research & Strategy",
      description:
        "A list of keywords, search volumes, competitor analysis, and a website integration plan.",
      icon: web1,
    },
    {
      title: "On-Page Optimization Roadmap",
      description:
        "A clear outline of the recommended on-page actions, timelines, and expected outcomes.",
      icon: note,
    },
    {
      title: "Optimized Content",
      description:
        "Rewritten or optimized content with targeted keywords for better search visibility and engagement.",
      icon: note1,
    },
    {
      title: "Technical SEO Implementation",
      description:
        "Resolution of technical issues like site speed, mobile optimization, and broken link fixes.",
      icon: pancil,
    },
    {
      title: "Meta Tag Optimization",
      description:
        "Engaging meta titles and descriptions designed to attract clicks from search results.",
      icon: pen,
    },
  ];
  return (
    <>
      <div className="px-16">
        <h1 className="font-bold text-2xl md:text-5xl py-4 flex justify-center text-gray-800">
          Our <span className="text-primary-orange"> Process </span>
        </h1>
        <p className="text-xl flex justify-center text-gray-600 p-2">
          Our on-page optimization process is designed to maximize your
          website's potential and achieve tangible results. We follow a
          comprehensive, data-driven approach to ensure your site performs at
          its best:
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="max-w-4xl mx-auto p-5">
          {accordionData.map((item) => (
            <Accordion
              key={item.id}
              id={item.id}
              title={item.title}
              content={item.content}
            />
          ))}
        </div>
        <div>
          <Image src={acco1} />
        </div>
      </div>
      <div className=" flex justify-center py-3">
        <p className="text-white bg-deep-blue py-2 px-4 rounded-xl border-2 border-gray-300">
          Gat a Quote
        </p>
      </div>
      {/* Our Deliverables */}
      <div className="bg-gray-100 py-10">
        <h1 className="font-bold text-2xl md:text-5xl flex justify-center py-2 text-gray-800 ">
          Our Deliverables
        </h1>
        <p className="text-base sm:text-lg md:text-xl py-5    flex justify-center text-gray-600 ">
          When you partner
          <span className="font-semibold">
            {" "}
            with Difmo for on-page optimization,{" "}
          </span>
          you can expect a comprehensive set of deliverables:
        </p>
        {/* </div> */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 flex flex-col text-gray-800 items-start"
              >
                <div className="flex items-center justify-center text-blue-500 w-16 h-16 mb-4 bg-gray-300 rounded-full">
                  <Image
                    src={card.icon}
                    className={`text-4xl ${card.textColor}`}
                  />
                </div>
                {/* <div className="text-blue-500 text-3xl mb-4">
                  <FontAwesomeIcon className={`fas fa-${card.icon}`} />
                </div> */}
                <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AccordingListInbiund;
