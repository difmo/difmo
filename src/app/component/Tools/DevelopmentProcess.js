import React from "react";
import {
  Code2,
  Brush,
  MonitorSmartphone,
  Rocket,
} from "lucide-react"; // Example icons

const processSteps = [
  {
    title: "Planning",
    description: "Understanding requirements and defining the roadmap.",
    icon: <Brush className="w-10 h-10 text-indigo-600 group-hover:scale-110 transition-transform duration-300" />,
  },
  {
    title: "Design",
    description: "Creating wireframes and visual design prototypes.",
    icon: <MonitorSmartphone className="w-10 h-10 text-pink-600 group-hover:scale-110 transition-transform duration-300" />,
  },
  {
    title: "Development",
    description: "Building the product with clean, scalable code.",
    icon: <Code2 className="w-10 h-10 text-green-600 group-hover:scale-110 transition-transform duration-300" />,
  },
  {
    title: "Launch",
    description: "Deploying and optimizing for performance.",
    icon: <Rocket className="w-10 h-10 text-blue-600 group-hover:scale-110 transition-transform duration-300" />,
  },
];

const DevelopmentProcess = () => {
  return (
    <div className="mt-16 relative z-60 px-4 md:px-8">
      <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
        Our Development Process
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 bg-white/20 backdrop-blur-lg rounded-2xl border border-gray-200 shadow-lg p-8">
        {processSteps.map((step, index) => (
          <div
            key={index}
            className="group  hover:bg-white/80 transition-all duration-300 ease-in-out rounded-xl p-6 flex flex-col items-center text-center "
          >
            <div className="mb-4">{step.icon}</div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              {step.title}
            </h4>
            <p className="text-gray-600 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DevelopmentProcess;
