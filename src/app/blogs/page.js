"use client";
import Link from "next/link";
import Image from "next/image";
import { technicalBlog } from "../component/blogss"; // Import the project data
import about from "../assets/about.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore"; // Import deleteDoc and doc
import { db } from "../config/config";

const Projects = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch blogs from Firestore on component mount
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogsCollection = collection(db, "blogs"); // Reference to the blogs collection
        const blogsSnapshot = await getDocs(blogsCollection); // Fetch the documents
        const blogsList = blogsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })); // Map to an array
        setBlogs(blogsList); // Set the state with fetched blogs
      } catch (err) {
        setError("Failed to load blogs"); // Handle any errors
        console.error("Error fetching blogs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []); // Empty dependency array to run only on mount

  if (loading) {
    return <div>Loading...</div>; // Show loading state
  }

  if (error) {
    return <div>{error}</div>; // Show error if any
  }
  const removeHtmlTags = (text) => {
    return text.replace(/<[^>]+>/g, ""); // Regular expression to remove HTML tags
  };

  const truncateDescription = (description, wordCount) => {
    const plainText = removeHtmlTags(description); // Remove HTML tags first
    const words = plainText.split(" ");
    return words.length > wordCount
      ? words.slice(0, wordCount).join(" ") + "..."
      : plainText;
  };
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
          <p className="mt-4 text-sm font-medium text-white sm:text-lg md:text-xl lg:text-2xl">
            Discover insights and inspiration on Difmo’s web development!
          </p>
          {/* <button className="px-4 py-2 mt-6 font-semibold text-white transition duration-300 ease-in-out bg-orange-600 rounded-lg sm:px-6 sm:py-3 hover:bg-[#EA130C]">
            Explore More Blogs
          </button> */}
        </div>
      </div>

      <div className="py-12 bg-gray-100">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">
            Latest Blogs
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {blogs.map((blog, index) => (
              <Link href={`/blogs/${blog.id}`} key={blog.id} passHref>
                <div className="overflow-hidden transition-shadow duration-300 ease-in-out bg-white rounded-lg shadow-md hover:shadow-lg">
                  <div className="relative w-full h-[200px]">
                    {/* <Image
          src={blog.image}
          alt={blog.title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        /> */}
                    <img
                      src={blog.image}
                      alt={blog.title}
                      // className="object-cover w-24 h-24"
                      className="rounded-t-lg"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="mb-2 text-xl font-extrabold text-transparent md:text-xl font-lilita bg-clip-text bg-gradient-to-r from-deep-blue to-primary-orange">
                      {blog.title.length > 16
                        ? `${blog.title.substring(0, 10)}...`
                        : blog.title}
                    </h2>
                    <p className="text-gray-700 text-[16px] leading-relaxed tracking-wide text-justify mb-4">
                      {truncateDescription(blog.description, 10)}
                    </p>
                    <span className="inline-flex items-center text-orange-600 hover:text-[#EA130C] font-semibold">
                      Read More
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="ml-2 text-sm"
                      />
                    </span>
                  </div>
                </div>
              </Link>

              // <Link href={`/blogs/${blog.id}`} key={index} passHref>

              //     <div className="overflow-hidden transition-shadow duration-300 ease-in-out bg-white rounded-lg shadow-md hover:shadow-lg">

              //       <div className="relative w-full h-[200px]">
              //         <Image
              //           src={blog.image}
              //           alt={blog.title}
              //           layout="fill"
              //           objectFit="cover"
              //           className="rounded-t-lg"
              //         />
              //       </div>

              //       <div className="p-6">
              //         <h2 className="mb-2 text-xl font-extrabold text-transparent md:text-xl font-lilita bg-clip-text bg-gradient-to-r from-deep-blue to-primary-orange">

              //           {blog.title.length > 16 ? `${blog.title.substring(0, 10)}...` : blog.title}
              //         </h2>
              //         <p className="text-gray-700 text-[16px] leading-relaxed tracking-wide text-justify mb-4">
              //         {truncateDescription(blog.description, 10)}
              //           {/* {blog.description.length > 60 ? `${blog.description.substring(0, 60)}...` : blog.description} */}
              //         </p>

              //         <span className="inline-flex items-center text-orange-600 hover:text-[#EA130C] font-semibold">
              //           Read More
              //           <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-sm" />
              //         </span>
              //       </div>
              //     </div>

              // </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
