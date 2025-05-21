import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";






const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      type: "spring",
    },
  }),
};  

const floatingAnimation = {
  y: [-50, -10, 110],
  rotate: [0, 3, -3, 0],
  transition: {
    duration: 1,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const logoVariants = {
  initial: { y: 0, opacity: 1 },
  hover: {
    y: -100, // Move logo upwards, partially out of container
    opacity: 0.7,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const descriptionVariants = {
  initial: {
    y: 0,
    opacity: 0.7,
    fontSize: "0.875rem",
  },
  hover: {
    y: -20, // Move description up to center
    opacity: 1,
    fontSize: "1.1rem", // Slightly larger font
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const DeveloperTools = ({tools}) => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className="relative py-16 px-4 sm:px-6 md:px-20 bg-gradient-to-b overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-blue-100 rounded-full opacity-20 animate-pulse -z-10" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-100 rounded-full opacity-20 animate-pulse -z-10" />

      <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-12">
       Top Tools for Web Design and Prototyping Like We Use

      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-center items-center">
        {tools.map((tool, index) => (
          <motion.div
            key={tool.name}
            className="relative bg-white/30 border border-gray-200 rounded-2xl  p-6 flex flex-col items-center justify-center hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out group overflow-hidden"
            custom={index}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={cardVariants}
            whileHover={floatingAnimation}
          >
            <motion.div
              className="flex flex-col items-center"
              initial="initial"
              whileHover="hover"
            >
              <motion.div variants={logoVariants}>
                <Image
                  src={tool.image}
                  alt={tool.name}
                  width={80}
                  height={80}
                  className="mb-4 object-cover"
                  loading="lazy"
                />
              </motion.div>
              <h4 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
                {tool.name}
              </h4>
              <motion.p
                className="text-sm text-gray-500 mt-2 text-center"
                variants={descriptionVariants}
              >
                {tool.description}
              </motion.p>
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-blue-100/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DeveloperTools;