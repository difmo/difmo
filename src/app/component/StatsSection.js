import React, { useState, useEffect, useRef } from "react";

const data = [
  { label: "Mobile Apps Developed", value: "70+" },
  { label: "Happy Partners", value: "19+" },
  { label: "Industries Covered", value: "23+" },
  { label: "Tech Enthusiasts", value: "121+" },
  { label: "AI Solutions", value: "48+" },
  { label: "Raised through Developed Apps", value: "$86" },
];

const StatsSection = () => {
  const [inView, setInView] = useState(false);
  const [numbers, setNumbers] = useState(
    data.map((item) => ({
      ...item,
      currentValue: 0, // Initial value for animation
    }))
  );
  const sectionRef = useRef(null);

  // IntersectionObserver to detect when the section is in view
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [inView]);

  // Increment logic for animating numbers
  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setNumbers((prevNumbers) =>
          prevNumbers.map((item) => {
            const targetValue = parseInt(item.value.replace(/[^0-9]/g, ""));
            if (item.currentValue < targetValue) {
              return { ...item, currentValue: item.currentValue + 1 };
            }
            return item;
          })
        );
      }, 20); // Smooth animation interval

      return () => clearInterval(interval);
    }
  }, [inView]);

  return (
    <div ref={sectionRef} className="py-16 text-white bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
          Why <span className="text-primary-orange">Difmo</span> for Your Next Project?
        </h2>
        <p className="mt-4 text-gray-400 sm:text-lg">
          Empowering businesses with technology that scales.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {numbers.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center h-full p-6 transition-all duration-300 transform bg-white rounded-lg shadow-lg hover:scale-105"
          >
            <span className="text-5xl font-bold text-primary-orange">
              {item.currentValue}
              <span className="text-lg font-medium">
                {item.value.replace(/[^a-zA-Z+$]/g, "")}
              </span>
            </span>
            <p className="mt-4 text-lg font-medium text-center text-gray-700">
              {item.label}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href="/contact-us"
          className="inline-block px-6 py-3 text-lg font-semibold text-white transition-all duration-300 rounded-full shadow-md bg-primary-orange hover:bg-primary-orange-dark"
        >
          See for Yourself!
        </a>
      </div>
    </div>
  );
};

export default StatsSection;
