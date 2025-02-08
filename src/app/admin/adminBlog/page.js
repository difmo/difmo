"use client";
import React, { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
// import { db } from "../config/config";
import { useRouter } from "next/navigation";
import { db } from "../../config/config";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogsCollection = collection(db, "blogs");
        const blogsSnapshot = await getDocs(blogsCollection);
        const blogsList = blogsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBlogs(blogsList);
      } catch (err) {
        setError("Failed to load blogs");
        console.error("Error fetching blogs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const removeHtmlTags = (text) => text.replace(/<[^>]+>/g, "");
  const truncateDescription = (description, wordCount) => {
    const plainText = removeHtmlTags(description);
    const words = plainText.split(" ");
    return words.length > wordCount
      ? words.slice(0, wordCount).join(" ") + "..."
      : plainText;
  };

  const handleDelete = async (blogId) => {
    try {
      await deleteDoc(doc(db, "blogs", blogId));
      setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== blogId));
      alert("Blog deleted successfully!");
    } catch (error) {
      console.error("Error deleting blog:", error);
      alert("Failed to delete blog. Please try again.");
    }
  };

  if (loading)
    return <div className="py-10 text-center text-gray-500">Loading...</div>;
  if (error)
    return <div className="py-10 text-center text-red-500">{error}</div>;

  return (
    <div className="max-w-6xl px-6 py-12 mx-auto text-black">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-4xl font-semibold text-gray-900">All Blogs</h2>
        <button
          className="px-6 py-2 font-semibold text-black transition duration-300 ease-in-out bg-red-500 rounded-lg shadow-lg hover:bg-primary-orange"
          onClick={() => router.push("/addblog")}
        >
          Add Blog
        </button>
      </div>
      <table className="min-w-full overflow-hidden bg-white rounded-lg shadow-lg">
        <thead className="border-b bg-gray-50">
          <tr>
            <th className="px-6 py-3 font-semibold text-left text-gray-600">
              Title
            </th>
            <th className="px-6 py-3 font-semibold text-left text-gray-600">
              Description
            </th>
            <th className="px-6 py-3 font-semibold text-left text-gray-600">
              Image
            </th>
            <th className="px-6 py-3 font-semibold text-center text-gray-600">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog) => (
            <tr
              key={blog.id}
              className="transition duration-200 ease-in-out border-b hover:bg-gray-50"
            >
              <td className="px-6 py-4 text-gray-800">{blog.title}</td>
              <td className="px-6 py-4 text-gray-600">
                {truncateDescription(blog.description, 20)}
              </td>
              <td className="px-6 py-4">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="object-cover w-24 h-24 border rounded-md"
                />
              </td>
              <td className="px-6 py-4 text-center">
                <button
                  onClick={() => handleDelete(blog.id)}
                  className="font-medium text-red-500 transition duration-300 ease-in-out hover:text-primary-orange"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllBlogs;
