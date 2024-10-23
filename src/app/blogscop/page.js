"use client";

import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCogs, faGlobe, faUsers } from "@fortawesome/free-solid-svg-icons"; // Import icons
import about from "../assets/about.jpg";
import blogImage1 from "../assets/blogs.jpg"; // Example blog images
import blogImage2 from "../assets/b1.jpg";
import blogImage3 from "../assets/dev.jpg";
import blogImage4 from "../assets/dev.jpg";

const BlogList = () => {
  const blogs = [
    {
      title: "Web Development Trends in 2024",
      description: "Explore the latest trends and innovations shaping web development this year.",
      // icon: faCogs,
      image: blogImage1,
      link: "/blog/web-development-trends",
    },
    {
      title: "How to Optimize Your Website for SEO",
      description: "Boost your website’s search engine rankings with these expert tips.",
      // icon: faGlobe,
      image: blogImage2,
      link: "/blog/seo-optimization-tips",
    },
    {
      title: "Building Scalable Web Applications",
      description: "Learn how to build web apps that can scale with your business needs.",
      // icon: faUsers,
      image: blogImage3,
      link: "/blog/building-scalable-web-apps",
    },
    {
      title: "Future of AI in Web Development",
      description: "Discover how AI is transforming the future of web development.",
      // icon: faCogs,
      image: blogImage4,
      link: "/blog/ai-in-web-development",
    },
  ];

  return (
    <>
      {/* Header Section */}
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen">
        <Image
          src={about}
          alt="Blog Header"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center sm:px-8 md:px-16">
          <h1 className="text-2xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Blogs
          </h1>
          <p className="mt-4 text-sm font-medium text-orange-500 sm:text-lg md:text-xl lg:text-2xl">
            Discover insights and inspiration on Difmo’s web development!
          </p>
          <button className="px-4 py-2 mt-6 font-semibold text-white transition duration-300 ease-in-out bg-orange-600 rounded-lg sm:px-6 sm:py-3 hover:bg-orange-500">
            Explore More Blogs
          </button>
        </div>
      </div>

      {/* Blog List Section */}
      <div className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Latest Blogs
          </h2>

          {/* Blog grid with 4 cards per row */}
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
  {blogs.map((blog, index) => (
    <div
      key={index}
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
    >
      {/* Blog Image */}
      <div className="relative w-full h-[200px]"> {/* Fixed height */}
        <Image
          src={blog.image}
          alt={blog.title}
          layout="fill" // Ensures the image fills the container
          objectFit="cover" // Maintains aspect ratio
          className="rounded-t-lg"
        />
      </div>

      {/* Blog Content */}
      <div className="p-6">
        <div className="flex items-center mb-2">
          <FontAwesomeIcon
            icon={blog.icon}
            className="text-orange-500 text-2xl mr-4"
          />
          <h2 className="md:text-xl text-xl font-lilita font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-deep-blue to-primary-orange mb-1">
          {blog.title.length > 20 ? blog.title.substring(0, 20) + "..." : blog.title}
            </h2>
          {/* <h3 className="text-xl font-semibold text-gray-800">{blog.title}</h3> */}
        </div>
        <p className="text-gray-700 text-[16px] leading-relaxed md:leading-loose tracking-wide text-justify">
               
                {blog.description.length > 60 ? blog.description.substring(0, 60) + "..." : blog.description}
              </p>
        {/* <p className="text-gray-600">{blog.description}</p> */}
        <a
          href={blog.link}
          className="mt-4 inline-flex items-center text-orange-600 hover:text-orange-500"
        >
          Read More
          <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-sm" />
        </a>
      </div>
    </div>
  ))}
</div>

        </div>
      </div>
    </>
  );
};

export default BlogList;
