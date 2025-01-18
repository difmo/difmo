import { useState } from "react";
import acco1 from "../../assets/marketing/meta.png";
import Image from "next/image";
import sco1 from "../../assets/landing/landing3.png";
import sco2 from "../../assets/landing/landing6.png";
import web from "../../assets/Deliver/code1.svg";
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
    <div className="mb-4 bg-white border rounded-md shadow-sm">
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

const AccordingListMeta = () => {
  // Data for multiple accordion items
  const accordionData = [
    {
      id: 1,
      title: " SetupStrategy",
      content:
        " We begin by learning about your business and who your ideal customers are. Then, we create a custom plan for your ads.",
    },
    {
      id: 2,
      title: "Ad Creation",
      content:
        " Our creative team designs eye-catching ads with clear, persuasive messages.",
    },
    {
      id: 3,
      title: "Targeting the Right Audience",
      content:
        " We use Meta’s advanced tools to make sure your ads reach the right people.",
    },
    {
      id: 4,
      title: "Launch & Monitor",
      content:
        " We launch your ads and keep a close eye on how they’re performing.",
    },
    {
      id: 5,
      title: "Ongoing Improvements",
      content:
        "We adjust your ads as needed to keep improving their performance.",
    },
    {
      id: 6,
      title: "Clear Reporting",
      content:
        "You’ll get easy-to-understand reports showing how well your ads are doing.",
    },
  ];
  const cards = [
    {
      title: "Custom Meta Ad Campaigns",
      description:
        "Tailored ad campaigns on Meta platforms, strategically crafted to align with your specific business objectives.",
      icon: web, // Tailwind icons can be used here
    },

    {
      title: "Engaging Ad Designs",
      description:
        "Visually appealing images and compelling messages crafted to capture attention and drive interaction.",
      icon: note,
    },
    {
      title: "Targeted Ads",
      description:
        "We optimize your ads to reach the ideal audience, ensuring high-quality leads and better conversions.",
      icon: note1,
    },
    {
      title: "Performance Tracking",
      description:
        "We monitor your ads in real-time, providing immediate insights and adjustments to maximize results.",
      icon: pancil,
    },
    {
      title: "Detailed Reports",
      description:
        "Clear, concise reports that highlight your campaign's performance, key results, and areas for improvement.",
      icon: pen,
    },
    {
      title: "Continuous Support",
      description:
        "Our dedicated team offers ongoing assistance to ensure your campaign's success and optimize performance.",
      icon: pen,
    },
  ];
  return (
    <>
      <div className="px-16">
        <h1 className="flex justify-center py-4 text-2xl font-bold text-gray-800 md:text-5xl">
          Our <span className="text-primary-orange"> Process </span>
        </h1>
        <p className="flex justify-center p-2 text-xl text-gray-600">
          We make it easy to run successful Meta ad campaigns. Here’s how it
          works:
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="max-w-4xl p-5 mx-auto">
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
          <Image src={sco1} />
        </div>
      </div>
      {/* <div className="flex justify-center py-3 ">
        <p className="px-4 py-2 text-white border-2 border-gray-300 bg-deep-blue rounded-xl">
          Gat a Quote
        </p>
      </div> */}
      {/* Our Deliverables */}
      <div className="py-4 bg-gray-100">
        <h1 className="flex justify-center py-2 text-2xl font-bold text-gray-800 md:text-5xl ">
          Our Deliverables
        </h1>
        <p className="flex justify-center py-5 text-base text-gray-600 sm:text-lg md:text-xl ">
          When you choose our{" "}
          <span className="font-semibold">
            {" "}
            meta ads services and decided to work with us,{" "}
          </span>
          here’s what you’ll get:
        </p>
        {/* </div> */}

        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card, index) => (
              <div
                key={index}
                className="flex flex-col items-start p-6 text-gray-800 bg-white rounded-lg shadow-lg"
              >
                <div className="flex items-center justify-center w-16 h-16 mb-4 text-blue-500 bg-gray-300 rounded-full">
                  <Image
                    src={card.icon}
                    className={`text-4xl ${card.textColor}`}
                  />
                </div>
                {/* <div className="mb-4 text-3xl text-blue-500">
                  <FontAwesomeIcon className={`fas fa-${card.icon}`} />
                </div> */}
                <h3 className="mb-2 text-lg font-semibold">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AccordingListMeta;
