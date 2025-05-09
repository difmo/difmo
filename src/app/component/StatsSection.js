import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
const data = [
  { label: "Mobile Apps Developed", value: "70+" },
  { label: "Happy Partners", value: "19+" },
  { label: "Industries Covered", value: "23+" },
  { label: "Tech Enthusiasts", value: "121+" },
  { label: "AI Solutions", value: "48+" },
  { label: "Raised through Developed Apps", value: "$86" },
];

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2, duration: 0.6 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const StatsSection = () => {
  const [inView, setInView] = useState(false);
  const [numbers, setNumbers] = useState(
    data.map((item) => ({ ...item, currentValue: 0 }))
  );
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !inView) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, [inView]);

  useEffect(() => {
    if (inView) {
      const duration = 1000; // Animation duration in ms
      const incrementInterval = 20; // Interval in ms
      const maxSteps = duration / incrementInterval;

      const interval = setInterval(() => {
        setNumbers((prevNumbers) =>
          prevNumbers.map((item) => {
            const targetValue = parseInt(item.value.replace(/[^0-9]/g, ""));
            const increment = Math.ceil(targetValue / maxSteps);
            if (item.currentValue < targetValue) {
              return {
                ...item,
                currentValue: Math.min(
                  item.currentValue + increment,
                  targetValue
                ),
              };
            }
            return item;
          })
        );
      }, incrementInterval);

      return () => clearInterval(interval);
    }
  }, [inView]);

  const formatNumber = (num) =>
    num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <div ref={sectionRef} className="py-12">
      <motion.div
        className="text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.p
          className="text-3xl text-black font-bold sm:text-4xl"
          variants={itemVariants}
        >
          Why Choose Us?
        </motion.p>
        <motion.p
          className="my-2 text-gray-600 text-lg"
          variants={itemVariants}
        >
          Empowering businesses with scalable technology solutions.
        </motion.p>
      </motion.div>
      <motion.div
        className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-3 lg:grid-cols-6"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {numbers.map((item, index) => (
          <motion.div
            key={index}
            className="text-center py-2"
            variants={itemVariants}
          >
            <div className="text-4xl font-bold text-primary-orange">
              {formatNumber(item.currentValue)}
              <span className="text-xl font-medium">
                {item.value.replace(/[^a-zA-Z+$]/g, "")}
              </span>
            </div>
            <p className="mt-2 text-gray-700">{item.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default StatsSection;
