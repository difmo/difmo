// components/Testimonials.jsx
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Seovedio() {
  const testimonials = [
    {
      name: "Tayeba Milla",
      title:
        "Web Developer and Digital Marketing Specialist, This Is My South Bay",
      videoSrc: "/path-to-tayeba-video.jpg", // Placeholder image for video
      testimonial:
        "We have worked with webdew on a promotional video production. And their services have been absolutely amazing.",
    },
    {
      name: "Carol",
      title: "Marketing Director, Ageras",
      videoSrc: "/path-to-carol-video.jpg",
      testimonial:
        "Hi, my name is Carol, and I'm the marketing director for Ageras. Recently, we needed an animated explainer video for our website, so we partnered with webdew to create one for us.",
    },
    {
      name: "Eddie Cange",
      title: "Marketing Associate, The Intelligence Exchange",
      videoSrc: "/path-to-eddie-video.jpg",
      testimonial:
        "Hi, my name is Eddie Cange, and I'm Marketing Associate for the Intelligence Exchange. We recently partnered with webdew to create an animated video in the form of Whiteboard Animation explainer videos.",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">
          What Our <span className="text-primary-orange">Clients Say</span>
        </h2>
        <p className="text-gray-600 mt-4">
          Hear why our clients love our SEO services and the results they’ve
          achieved.
        </p>
        <Slider {...settings} className="mt-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative">
                  <img
                    src={testimonial.videoSrc}
                    alt={testimonial.name}
                    className="w-full h-56 object-cover"
                  />
                  <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <span className="text-white text-3xl">▶</span>
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                  <p className="text-gray-600 mt-2">
                    {testimonial.testimonial}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
