import React, { useState } from "react";
import { db } from "../config/config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const RequestForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    number: "",
    projectType: "",
  });

  const [errors, setErrors] = useState({});
  const [submitMessage, setSubmitMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [id]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required.";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required.";
    if (!formData.number.trim() || !/^\d{10}$/.test(formData.number))
      newErrors.number = "Enter a valid 10-digit phone number.";
    if (!formData.projectType) newErrors.projectType = "Select a project type.";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setSubmitMessage("");

    try {
      await addDoc(collection(db, "requestForms"), {
        ...formData,
        date: serverTimestamp(),
      });
      setSubmitMessage("🎉 Message sent successfully!");
      setFormData({ fullName: "", email: "", number: "", projectType: "" });
    } catch (error) {
      setSubmitMessage("❌ Error sending message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full mx-auto">
      <h2 className="text-2xl font-bold text-center text-gray-800">
        Request a Demo 🚀
      </h2>
      
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        {/* Input Fields */}
        {[
          { id: "fullName", label: "Full Name", type: "text" },
          { id: "email", label: "Email", type: "email" },
          { id: "number", label: "Phone Number", type: "text" },
        ].map(({ id, label, type }) => (
          <div key={id} className="flex flex-col">
            <label htmlFor={id} className="text-lg font-medium text-gray-700">{label}</label>
            <input
              id={id}
              type={type}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none ${
                errors[id] ? "border-red-500" : "border-gray-300"
              }`}
              placeholder={`Enter ${label}`}
              value={formData[id]}
              onChange={handleChange}
            />
            {errors[id] && <p className="text-red-500 text-sm">{errors[id]}</p>}
          </div>
        ))}

        {/* Dropdown */}
        <div className="flex flex-col">
          <label htmlFor="projectType" className="text-lg font-medium text-gray-700">
            Select Project Type
          </label>
          <select
            id="projectType"
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-400 text-gray-500 focus:outline-none ${
              errors.projectType ? "border-red-500" : "border-gray-300"
            }`}
            value={formData.projectType}
            onChange={handleChange}
          >
            <option value="">--Select--</option>
            <option value="mobileApp">📱 Mobile Application</option>
            <option value="website">🌍 Web Application</option>
            <option value="seoService">📈 SEO Service</option>
            <option value="ecommerce">🛒 E-Commerce</option>
          </select>
          {errors.projectType && <p className="text-red-500 text-sm">{errors.projectType}</p>}
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full px-12 py-3 text-lg font-semibold text-white rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg flex items-center justify-center"
            disabled={loading}
          >
            {loading ? (
              <>
                <svg className="w-5 h-5 animate-spin mr-2" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8v8H4z"></path>
                </svg>
                Processing...
              </>
            ) : (
              "Submit Request"
            )}
          </button>
        </div>

        {/* Feedback Message */}
        {submitMessage && (
          <div className="mt-4 text-center text-lg">
            <p className={submitMessage.includes("Error") ? "text-red-500" : "text-green-500"}>
              {submitMessage}
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

export default RequestForm;
