"use client";
import { useState } from "react";
import { db } from "../config/config"; // Ensure the Firebase setup is correct
import { collection, addDoc, Timestamp } from "firebase/firestore";

const Career = () => {
  const [formData, setFormData] = useState({
    position: "",
    fullName: "",
    email: "",
    number: "",
    dob: "",
    gender: "",
    address: "",
    education: "",
    graduation: "",
    postGraduation: "",
    ppgCourse: "",
    certificates: "",
    experience: "",
    resume: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.position) newErrors.position = "Position is required.";
    if (!formData.fullName) newErrors.fullName = "Full name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!formData.number) {
      newErrors.number = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.number)) {
      newErrors.number = "Phone number must be 10 digits.";
    }
    if (!formData.dob) newErrors.dob = "Date of birth is required.";
    if (!formData.gender) newErrors.gender = "Gender is required.";
    if (!formData.address) newErrors.address = "Address is required.";
    if (!formData.education) newErrors.education = "Education is required.";
    if (!formData.graduation)
      newErrors.graduation = "Graduation details are required.";
    if (!formData.postGraduation)
      newErrors.postGraduation = "Post-graduation details are required.";
    if (!formData.ppgCourse)
      newErrors.ppgCourse = "Professional courses are required.";
    if (!formData.certificates)
      newErrors.certificates = "Certificates or skills are required.";
    if (!formData.experience)
      newErrors.experience = "Work experience is required.";
    if (!formData.resume) {
      newErrors.resume = "Resume or portfolio link is required.";
    } else if (!/^https?:\/\/.+$/.test(formData.resume)) {
      newErrors.resume = "Enter a valid URL for the resume.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // No errors
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      try {
        await addDoc(collection(db, "jobApplications"), {
          ...formData,
          createdAt: Timestamp.now(),
        });
        alert("Application submitted successfully!");
        setFormData({
          position: "",
          fullName: "",
          email: "",
          number: "",
          dob: "",
          gender: "",
          address: "",
          education: "",
          graduation: "",
          postGraduation: "",
          ppgCourse: "",
          certificates: "",
          experience: "",
          resume: "",
        });
      } catch (error) {
        console.error("Error adding document: ", error);
        alert("An error occurred while submitting your application.");
      } finally {
        setIsSubmitting(false);
      }
    } else {
      console.error("Validation errors:", errors);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="container grid grid-cols-1 gap-8 py-10 mx-auto md:grid-cols-1 md:px-36">
        <div className="col-span-1 p-4 bg-white rounded-lg shadow-lg">
          <h2 className="md:text-3xl text-xl font-lilita font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-deep-blue to-primary-orange mb-6 text-center">
            Apply for a Job
          </h2>
          <form className="text-gray-800" onSubmit={handleSubmit}>
            {[
              { id: "position", label: "Position to Apply for", type: "text" },
              { id: "fullName", label: "Full Name", type: "text" },
              { id: "email", label: "Email", type: "email" },
              { id: "number", label: "Phone Number", type: "text" },
              { id: "dob", label: "Date of Birth", type: "date" },
              { id: "gender", label: "Gender", type: "text" },
              { id: "address", label: "Address", type: "text" },
              { id: "education", label: "Education", type: "text" },
              { id: "graduation", label: "Graduation", type: "text" },
              {
                id: "postGraduation",
                label: "Post-Graduation",
                type: "text",
              },
              { id: "ppgCourse", label: "Professional Courses", type: "text" },
              {
                id: "certificates",
                label: "Certificates/Skills",
                type: "text",
              },
              { id: "experience", label: "Work Experience", type: "text" },
              {
                id: "resume",
                label: "Resume/Portfolio Link",
                type: "file",
              },
            ].map((field) => (
              <div className="mb-4" key={field.id}>
                <label
                  htmlFor={field.id}
                  className="block text-sm font-medium mb-2"
                >
                  {field.label}
                </label>
                <input
                  id={field.id}
                  type={field.type}
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder={`Enter ${field.label.toLowerCase()}`}
                  value={formData[field.id]}
                  onChange={handleChange}
                />
                {errors[field.id] && (
                  <p className="text-red-500 text-sm">{errors[field.id]}</p>
                )}
              </div>
            ))}

            <div className="flex justify-center">
              <button
                type="submit"
                className={`w-[50%] p-5 py-2 my-5 text-white rounded-lg transition duration-300 ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-primary-orange hover:bg-deep-blue"
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Career;
