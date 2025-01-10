import { useState } from "react";
import acco1 from "../../assets/marketing/google.gif";
import Image from "next/image";

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

const AccordingListads = () => {
  // Data for multiple accordion items
  const accordionData = [
    {
      id: 1,
      title: "Understanding Your Business",
      content:
        "We begin by gaining a deep understanding of your business goals and target audience. Then, we craft a tailored plan to ensure optimal results for your Google Ads campaign. ",
    },
    {
      id: 2,
      title: "Creating the Ads",
      content:
        "Our team crafts compelling ads that capture attention and inspire action, whether it’s clicking through, signing up, or making a purchase.",
    },
    {
      id: 3,
      title: "Targeting the Right Audience",
      content:
        "We leverage Google’s powerful tools to ensure your ads reach the people most likely to be interested in your business, maximizing relevance and engagement.",
    },
    {
      id: 4,
      title: "Launching the Campaign",
      content:
        "We launch your ads on Google and closely monitor their performance to ensure optimal results. ",
    },
    {
      id: 5,
      title: "Continuous Optimization",
      content:
        "We consistently refine and improve your campaign to achieve even better results over time. ",
    },
    {
      id: 6,
      title: "Keeping You Informed",
      content:
        "We provide clear, easy-to-understand reports on your ad performance, along with actionable insights for continuous improvement.",
    },
  ];
  const cards = [
    {
      title: "Custom Campaign",
      description:
        "A personalized Google Ads strategy crafted to align perfectly with your unique business goals and target audience.",
      icon: web, // Tailwind icons can be used here
    },
    {
      title: "Precise Targeting",
      description:
        "We specialize in connecting with your ideal audience to deliver the highest quality leads for your business. ",
      icon: web1,
    },
    {
      title: "Performance Tracking",
      description:
        "We track your ads in real time, delivering timely updates and making adjustments to ensure optimal results.",
      icon: note,
    },
    {
      title: "Clear Reports",
      description:
        "Actionable reports that clearly showcase campaign performance, highlighting key metrics and insights.",
      icon: note1,
    },
    {
      title: "Ongoing Support",
      description:
        "Continuous assistance from our expert team, providing guidance to ensure campaign success.",
      icon: pancil,
    },
    {
      title: "Engaging Ads",
      description:
        "Strategically designed ads that grab attention, spark interest, and encourage active engagement with your audience.",
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
          Our streamlined process is designed to deliver the best results from
          your Google Ads campaign:
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

export default AccordingListads;
