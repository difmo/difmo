"use client";
import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/config"; // Adjust the path to your Firebase config
import { useParams } from "next/navigation";
import about from "../../assets/about.jpg";
import Image from "next/image";

const BlogDetails = () => {
  const { id } = useParams(); // Get the blog ID directly from the params
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch blog details from Firestore
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const blogDoc = doc(db, "blogs", id); // Reference to the specific blog document
        const blogSnapshot = await getDoc(blogDoc); // Fetch the document

        if (blogSnapshot.exists()) {
          setBlog({ id: blogSnapshot.id, ...blogSnapshot.data() }); // Set blog data
        } else {
          setError("Blog not found");
        }
      } catch (err) {
        setError("Failed to load blog");
        console.error("Error fetching blog:", err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchBlog();
    }
  }, [id]); // Run effect when ID changes

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  // Function to format timestamp
  const formatDate = (timestamp) => {
    if (!timestamp) return "";
    const date = timestamp.toDate(); // Convert Firestore Timestamp to JS Date
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Function to remove HTML tags and split by new lines
  const formatDescription = (text) => {
    const plainText = text.replace(/<[^>]+>/g, ""); // Remove HTML tags
    return plainText.split("\n"); // Split by new line for paragraph formatting
  };

  return (
    <>
      {/* <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen">
        <Image
          src={about}
          alt="Blog Header"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center sm:px-8 md:px-16">
          <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
            {blog.title}
          </h1>
          <p className="mt-2 text-lg font-medium text-orange-300 sm:text-xl lg:text-2xl">
            Discover insights and inspiration on Difmo’s web development!
          </p>
          <button
            className="px-4 py-2 mt-4 font-semibold text-white transition duration-300 ease-in-out bg-orange-600 rounded-lg sm:px-6 sm:py-3 hover:bg-primary-orange"
            aria-label="Explore more blogs"
          >
            Explore More Blogs
          </button>
        </div>
      </div> */}

      {/* Blog Content Section */}
      <div className="container mx-auto p-6 md:p-12">
        {/* Blog Title */}
        <h2 className="md:text-4xl text-xl font-lilita mb-8 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-deep-blue to-primary-orange">
          {blog.title}
        </h2>

        {/* Blog Creation Time */}
        <p className="text-gray-600 text-sm mb-4">
          Created on: {formatDate(blog.timestamp)}
        </p>

        {/* Blog Image */}
        <div className="relative w-full h-[350px] sm:h-[250px] md:h-full lg:h-full mb-6 bg-gray-100 rounded-lg overflow-hidden">
          {/* <Image
            src={blog.image}
            alt={blog.title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg object-cover"
          /> */}
          <img
            src={blog.image}
            alt={blog.title}
            className="rounded-lg object-cover"
          />
        </div>

        <div className="flex flex-col justify-center p-6 bg-white rounded-lg shadow-lg">
          <p
            className="text-gray-700 text-[16px] leading-relaxed tracking-wide text-justify"
            dangerouslySetInnerHTML={{
              __html: blog?.description,
            }}
          ></p>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
