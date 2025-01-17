"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
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
          id: doc.id, // Correctly fetch document ID
          ...doc.data(), // Fetch document data
        }));
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
    return <div className="text-gray-700">Loading...</div>; // Show loading state
  }

  if (error) {
    return <div className="text-gray-800">{error}</div>; // Show error if any
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
    <div className="py-12 bg-gray-100">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-bold text-center text-deep-blue">
          Difmo Technologies Blog
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {blogs.map((blog) => (
            <Link href={`/blogs/${blog.id}`} key={blog.id}>
              <div className="overflow-hidden transition-shadow duration-300 ease-in-out bg-white rounded-lg shadow-md hover:shadow-lg">
                <div className="relative w-full h-full">
                  <img
                    src={blog.image || "/default-image.jpg"} // Fallback for missing images
                    alt={blog.title || "Blog Image"} // Fallback for missing titles
                    className="bg-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h2 className="mb-2 text-xl font-extrabold text-transparent md:text-xl font-lilita bg-clip-text bg-gradient-to-r from-deep-blue to-primary-orange">
                    {blog.title && blog.title.length > 16
                      ? `${blog.title.substring(0, 16)}...`
                      : blog.title}
                  </h2>
                  <p className="text-gray-700 text-[16px] leading-relaxed tracking-wide text-justify mb-4">
                    {truncateDescription(blog.description || "", 10)}
                  </p>
                  <span className="inline-flex items-center text-orange-600 hover:text-primary-orange font-semibold">
                    Read More
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="ml-2 text-sm"
                    />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
