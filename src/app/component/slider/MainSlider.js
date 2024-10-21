"use client";
import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Dynamic import of react-slick to avoid SSR issues
const Slider = dynamic(() => import("react-slick"), { ssr: false });

// Import images
import image1 from "../../assets/b1.jpg";
import image2 from "../../assets/b2.jpg";
import image3 from "../../assets/b3.jpg";
import image4 from "../../assets/img1.jpg";

const MainSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Disable previous and next buttons
    autoplay: true, // Enable auto-sliding
    autoplaySpeed: 2000, // Slide change interval in milliseconds
  };

  const images = [
    { src: image1, alt: "Slide 1" },
    { src: image2, alt: "Slide 2" },
    { src: image3, alt: "Slide 3" },
    { src: image4, alt: "Slide 4" },
  ];

  return (
    <div className="relative w-full h-56 sm:h-72 md:h-screen">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative w-full h-56 sm:h-72 md:h-screen">
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MainSlider;

 