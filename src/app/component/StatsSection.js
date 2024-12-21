import React from "react";

const data = [
  { point: ".", label: " Mobile Apps Developed", value: "1400+" },
  { point: ".", label: "Happy Partners", value: "800+" },
  { point: ".", label: "Industries Covered", value: "50+" },
  { point: ".", label: "Tech Enthusiasts", value: "200+" },
  { point: ".", label: "AI Solutions", value: "50+" },
  { point: ".", label: "Raised through developed Apps", value: "$869+M" },
];

const StatsSection = () => {
  return (
    <div className="bg-[#162A3A] text-white py-12 rounded-xl">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">
          Why <span className="text-[#00CC83]">difmo</span> for your next
          project?
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 p-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-[#2c4357] rounded-3xl p-8 shadow-lg flex flex-col justify-between h-full"
          >
            <p className="text-xl pb-12 text-white">
              <span className="text-green-600 font-bold h-8 w-8">
                {item.point}
              </span>
              {item.label}
            </p>
            <span className="text-4xl font-semibold text-white">
              {item.value}
            </span>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <a href="#" className="font-semibold underline">
          See for yourself!
        </a>
      </div>
    </div>
  );
};

export default StatsSection;
