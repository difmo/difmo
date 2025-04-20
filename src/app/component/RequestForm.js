import React, { useState, useEffect, useRef } from "react";
import { db } from "../config/config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const RequestForm = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);

  // Handle click outside to close modal
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    number: "",
    projectType: "",
  });
  const [errors, setErrors] = useState({});
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [id]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full name is required.";
    if (!formData.email) newErrors.email = "Email address is required.";
    if (!formData.number) newErrors.number = "Number is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const docRef = await addDoc(collection(db, "requestForms"), {
        ...formData,
        date: serverTimestamp(),
      });
      setSubmitMessage("Message sent successfully!");
      setFormData({
        fullName: "",
        email: "",
        number: "",
        projectType: "",
      });
    } catch (error) {
      setSubmitMessage("Error sending message. Please try again.");
    }
  };

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-8">
      <div
        ref={modalRef}
        className="bg-white rounded-lg shadow-lg w-full max-w-2xl relative "
      >
        {/* Header with Close Button */}
        <div className="relative bg-gradient-to-r from-red-400 to-pink-500 h-16 rounded-t-lg flex justify-end items-center">
          <button
            onClick={onClose}
            className="absolute -top-4 -right-4 bg-white shadow-lg text-black w-10 h-10 rounded-full flex items-center justify-center border border-gray-300 hover:bg-gray-100"
          >
            ✖
          </button>
        </div>
        <form onSubmit={handleSubmit} className="mt-10 mb-10 px-8">
          {[
            { id: "fullName", label: "Full Name", type: "text" },
            { id: "email", label: "Email", type: "email" },
            { id: "number", label: "Phone Number", type: "text" },
          ].map((field) => (
            <div key={field.id} className="space-y-2">
              <label
                htmlFor={field.id}
                className=" text-lg font-medium text-gray-700"
              >
                {field.label}
              </label>
              <input
                id={field.id}
                type={field.type}
                className="w-full px-4 py-2 border text-gray-800 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
                placeholder={`Enter ${field.label.toLowerCase()}`}
                value={formData[field.id]}
                onChange={handleChange}
              />
              {errors[field.id] && (
                <p className="text-red-500 text-sm">{errors[field.id]}</p>
              )}
            </div>
          ))}

          <div className="space-y-2">
            <label
              htmlFor="projectType"
              className="block text-lg font-medium text-gray-700"
            >
              Select Project Type
            </label>
            <select
              id="projectType"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 text-gray-800 focus:outline-none"
              value={formData.projectType}
              onChange={handleChange}
            >
              <option value="">--Select--</option>
              <option value="mobileApp">Mobile Application</option>
              <option value="website">Web Application</option>
              <option value="seoService">SEO Service</option>
              <option value="ecommerce">E-Commerce</option>
            </select>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full px-12 mt-6 py-3 text-lg font-semibold text-white hover:text-black rounded-xl bg-[#111827] hover:bg-gray-200"
            >
              Submit
            </button>
          </div>

          {submitMessage && (
            <div className="mt-4 text-center text-lg">
              <p
                className={
                  submitMessage.includes("Error")
                    ? "text-red-500"
                    : "text-green-500"
                }
              >
                {submitMessage}
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default RequestForm;
