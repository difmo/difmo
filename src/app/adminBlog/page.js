"use client";
import React, { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/config";
import { useRouter } from "next/navigation";

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

  if (loading) return <div className="text-center text-gray-500 py-10">Loading...</div>;
  if (error) return <div className="text-center text-red-500 py-10">{error}</div>;

  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl font-semibold text-gray-800">All Blogs</h2>
        <button
          className="bg-red-500  text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-red-600 transition ease-in-out duration-300"
          onClick={() => router.push('/addblog')}
        >
          Add Blog
        </button>
      </div>
      <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <thead className="bg-gray-50 border-b">
          <tr>
            <th className="py-3 px-6 text-left font-semibold text-gray-600">Title</th>
            <th className="py-3 px-6 text-left font-semibold text-gray-600">Description</th>
            <th className="py-3 px-6 text-left font-semibold text-gray-600">Image</th>
            <th className="py-3 px-6 text-center font-semibold text-gray-600">Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog) => (
            <tr key={blog.id} className="border-b hover:bg-gray-50 transition duration-200 ease-in-out">
              <td className="py-4 px-6 text-gray-800">{blog.title}</td>
              <td className="py-4 px-6 text-gray-600">{truncateDescription(blog.description, 20)}</td>
              <td className="py-4 px-6">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-24 h-24 rounded-md object-cover border"
                />
              </td>
              <td className="py-4 px-6 text-center">
                <button
                  onClick={() => handleDelete(blog.id)}
                  className="text-red-500 hover:text-red-600 font-medium transition ease-in-out duration-300"
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
