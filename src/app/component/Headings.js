import React from "react";

const Heading = ({headingtext}) => {
  return (
    <h2 className="mb-6 text-xl font-extrabold text-transparent md:text-3xl font-lilita bg-clip-text bg-gradient-to-r from-deep-blue to-primary-orange">
     {headingtext}
    </h2>
  );
};

export default Heading;
