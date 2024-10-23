import Link from "next/link";
import Image from "next/image";
import { technicalBlog } from "../component/blogss"; // Import the project data
import about from "../assets/about.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  return (
    <>
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
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {technicalBlog.map((blog, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out overflow-hidden"
              >
                {/* Blog Image */}
                <div className="relative w-full h-[200px]">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    layout="fill"
                    // objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>

                {/* Blog Content */}
                <div className="p-6">
                  <h2 className="md:text-xl text-xl font-lilita font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-deep-blue to-primary-orange mb-2">
                    {blog.title.length > 16 ? `${blog.title.substring(0, 16)}...` : blog.title}
                  </h2>
                  <p className="text-gray-700 text-[16px] leading-relaxed tracking-wide text-justify mb-4">
                    {blog.description.length > 60 ? `${blog.description.substring(0, 60)}...` : blog.description}
                  </p>
                   
                  <Link href={`/blogs/${blog.id}`} className="inline-flex items-center text-orange-600 hover:text-orange-500 font-semibold">
                    Read More
                    <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-sm" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
