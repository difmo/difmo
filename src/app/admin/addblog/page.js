"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic"; // Import dynamic for SSR handling
import "react-quill/dist/quill.snow.css";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../config/config";
import { useRouter } from "next/navigation";

// Dynamically import ReactQuill with ssr: false
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const AddBlogForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    image: null,
    description: "",
  });

  const [errors, setErrors] = useState({
    title: "",
    image: "",
    description: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: "", // Clear error when user starts typing
    }));
  };

  const handleDescriptionChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      description: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      description: "", // Clear error when user starts typing
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prevData) => ({
        ...prevData,
        image: file, // Store the file object
      }));
      setErrors((prevErrors) => ({
        ...prevErrors,
        image: "", // Clear error when user uploads an image
      }));
    }
  };

  const validate = () => {
    let valid = true;
    let newErrors = {};

    if (!formData.title) {
      newErrors.title = "Title is required.";
      valid = false;
    }
    if (!formData.description) {
      newErrors.description = "Description is required.";
      valid = false;
    }
    if (!formData.image) {
      newErrors.image = "Image is required.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    try {
      // Upload the image to Firebase Storage
      const imageRef = ref(storage, `images/${formData.image.name}`);
      await uploadBytes(imageRef, formData.image);

      // Get the download URL of the uploaded image
      const imageUrl = await getDownloadURL(imageRef); // Use getDownloadURL function

      // Add the blog post to Firestore
      const docRef = await addDoc(collection(db, "blogs"), {
        title: formData.title,
        description: formData.description,
        image: imageUrl, // Store the image URL
        timestamp: Timestamp.fromDate(new Date()), // Adding timestamp
      });
      console.log("Document written with ID: ", docRef.id);
      alert("Blog added successfully!");

      // Clear form fields after successful submission
      setFormData({
        title: "",
        image: null,
        description: "",
      });
      router.push("/adminBlog");
    } catch (error) {
      console.error("Error submitting form: ", error);
      alert("Failed to submit blog. Please try again.");
    }
  };

  return (
    <div className="max-w-2xl p-8 mx-auto bg-white rounded-lg shadow-md text-black">
      <h2 className="mb-6 text-2xl font-bold text-black">Add New Blog</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title Input */}
        <div>
          <label className="block mb-2 text-gray-700">Title</label>
          <input
            type="text"
            id="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Enter blog title"
          />
          {errors.title && (
            <p className="text-sm text-red-500">{errors.title}</p>
          )}
        </div>

        {/* Image Upload */}
        <div>
          <label className="block mb-2 text-gray-700">Image</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-2 border rounded"
          />
          {errors.image && (
            <p className="text-sm text-red-500">{errors.image}</p>
          )}
        </div>

        {/* Description (React Quill Editor) */}
        <div>
          <label className="block mb-2 text-gray-700">Description</label>
          <ReactQuill
            value={formData.description}
            onChange={handleDescriptionChange}
            className="h-40"
            theme="snow"
            modules={{
              toolbar: [
                ["bold", "italic", "underline", "strike"],
                ["link"],
                [{ list: "ordered" }, { list: "bullet" }],
                ["clean"],
              ],
            }}
            placeholder="Write your blog description here..."
          />
          {errors.description && (
            <p className="text-sm text-red-500">{errors.description}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="mt-4">
          <button
            type="submit"
            className="px-4 py-2 mt-10 text-white rounded bg-primary-orange hover:bg-primary-orange "
          >
            Add Blog
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlogForm;
