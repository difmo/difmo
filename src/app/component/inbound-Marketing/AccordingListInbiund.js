import { useState } from "react";
import acco1 from "../../assets/marketing/inbound.webp";
import Image from "next/image";
import sco2 from "../../assets/landing/landing7.png";
import web from "../../assets/Deliver/code2.svg";
import web1 from "../../assets/Deliver/serch.svg";
import note from "../../assets/Deliver/note.svg";
import note1 from "../../assets/Deliver/note1.svg";
import pancil from "../../assets/Deliver/pancial.svg";
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

const AccordingListInbiund = () => {
  // Data for multiple accordion items
  const accordionData = [
    {
      id: 1,
      title: "Strategy Creation",
      content:
        "We’ll position your brand where potential customers are actively seeking your products or services.",
    },
    {
      id: 2,
      title: "Implemented Methods",
      content:
        "Calling, prospecting, email marketing, meeting scheduling, and deploying chatbots.",
    },
    {
      id: 3,
      title: "Video Formats",
      content:
        "We’ll adapt our messaging formats to fit varied audience preferences, ensuring that every interaction resonates.",
    },
    {
      id: 4,
      title: "Components",
      content:
        "Deals, videos, playbooks, email sequences, and sales automation for better outcome for your business.",
    },
    {
      id: 5,
      title: "Value Delivery",
      content:
        "We’ll consistently deliver value to your existing customers to uncover new sales opportunities and enhance brand loyalty.",
    },
    {
      id: 6,
      title: "Add-ons",
      content:
        "Quotes, sales automation, smart notifications, conversations inbox, and conversation routing.",
    },
  ];
  const cards = [
    {
      title: "Comprehensive Strategy",
      description:
        "A customized inbound marketing approach that attracts, engages, and delights your target audience.",
      icon: web, // Tailwind icons can be used here
    },
    {
      title: "Content Creation",
      description:
        "Crafting high-quality, engaging content designed to boost traffic, nurture leads, and drive conversions.",
      icon: web1,
    },
    {
      title: "Marketing Automation",
      description:
        "Streamlining your marketing processes with tools and strategies that enhance efficiency.",
      icon: note,
    },
    {
      title: "Ongoing Support",
      description:
        "Offering continuous support to ensure your inbound marketing strategy evolves with your business goals.",
      icon: note1,
    },
    {
      title: "Detailed Reporting",
      description:
        "Providing regular, insightful reports that highlight campaign performance and offer actionable recommendations.",
      icon: pancil,
    },
    // {
    //   title: "Meta Tag Optimization",
    //   description:
    //     "Engaging meta titles and descriptions designed to attract clicks from search results.",
    //   icon: pen,
    // },
  ];
  return (
    <>
      <div className="px-16">
        <h1 className="flex justify-center py-4 text-2xl font-bold text-gray-800 md:text-5xl">
          Our <span className="text-primary-orange"> Process </span>
        </h1>
        <p className="flex justify-center p-2 text-xl text-gray-600">
          Our Inbound Marketing methodology guides the way to elevating your ROI
          and nurturing business expansion through a three-step approach:
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
          <Image src={sco2} />
        </div>
      </div>
           {/* Our Deliverables */}
      <div className="py-10 bg-gray-100">
        <h1 className="flex justify-center py-2 text-2xl font-bold text-gray-800 md:text-5xl ">
          Our Deliverables
        </h1>
        <p className="flex justify-center py-5 text-base text-gray-600 sm:text-lg md:text-xl ">
          When you{" "}
          <span className="font-semibold">
            choose our Inbound Marketing services,{" "}
          </span>
          you receive:
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

export default AccordingListInbiund;
