import React, { useState, useEffect, useRef } from "react";

const data = [
  { point: ".", label: "Mobile Apps Developed", value: "70+" },
  { point: ".", label: "Happy Partners", value: "19+" },
  { point: ".", label: "Industries Covered", value: "23+" },
  { point: ".", label: "Tech Enthusiasts", value: "121+" },
  { point: ".", label: "AI Solutions", value: "48+" },
  { point: ".", label: "Raised through developed Apps", value: "$86" },
];

const StatsSection = () => {
  const [inView, setInView] = useState(false);
  const [numbers, setNumbers] = useState(data.map((item) => ({
    ...item,
    currentValue: 0, // Initial value for animation
  })));
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
      { threshold: 0.5 } // Trigger when 50% of the section is in view
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
      }, 20); // Adjust the interval for smooth animation (in ms)

      return () => clearInterval(interval); // Cleanup interval on unmount
    }
  }, [inView]);

  return (
    <div ref={sectionRef} className="py-12 text-white rounded-xl">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold">
          Why <span className="text-white">difmo</span> for your next project?
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {numbers.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-between h-full p-8 transition-all duration-300 transform bg-white border shadow-lg bg-primary-orange/20 border-primary-orange/20 rounded-3xl hover:scale-105"
          >
            <p className="pb-12 text-xl text-black">
              <span className="w-8 h-8 font-bold text-green-600">
                {item.point}
              </span>
              {item.label}
            </p>
            <span className="text-4xl font-semibold text-black">
              {item.currentValue}+ {/* Prepend the + sign */}
              {item.value.replace(/[^a-zA-Z]/g, "")} {/* Append any non-numeric text (e.g., "$", "+") */}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <a href="#" className="font-semibold underline">
          See for yourself!
        </a>
      </div>
    </div>
  );
};

export default StatsSection;
