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

  const validate = () => {
    let valid = true;
    let newErrors = {};

    if (!formData.fullName) {
      newErrors.fullName = "Full name is required.";
      valid = false;
    }
    if (!formData.email) {
      newErrors.email = "Email address is required.";
      valid = false;
    }
    if (!formData.number) {
      newErrors.number = "Phone number is required.";
      valid = false;
    }
    if (!formData.position) {
      newErrors.position = "Please select a position to apply for.";
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
      const docRef = await addDoc(collection(db, "jobApplications"), {
        ...formData,
        timestamp: Timestamp.fromDate(new Date()), // Adding timestamp here
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
      alert("Failed to submit application. Please try again.");
    }
  };

  return (
    <div className="min-h-screen">
      <div className="container grid grid-cols-1 gap-8 py-10 mx-auto md:grid-cols-1 md:px-36">
        <div className="col-span-1 p-4 bg-white rounded-lg shadow-lg">
          <h2 className="md:text-3xl text-xl font-lilita font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-deep-blue to-primary-orange mb-6 text-center">
            Apply for a Job
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="position"
                className="   block text-sm font-medium mb-2 "
              >
                Position to Apply for
              </label>
              <input
                id="position"
                type="text"
                className="w-full px-4 py-2 border rounded-md"
                placeholder="e.g. Frontend Developer"
                value={formData.position}
                onChange={handleChange}
              />
              {errors.position && (
                <p className="text-red-500 text-sm">{errors.position}</p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="fullName"
                className="block text-sm font-medium mb-2 "
              >
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm">{errors.fullName}</p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2 "
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="number"
                className="block text-sm font-medium mb-2 "
              >
                Phone Number
              </label>
              <input
                id="number"
                type="tel"
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Enter your phone number"
                value={formData.number}
                onChange={handleChange}
              />
              {errors.number && (
                <p className="text-red-500 text-sm">{errors.number}</p>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="dob" className="block text-sm font-medium mb-2 ">
                Date of Birth
              </label>
              <input
                id="dob"
                type="date"
                className="w-full px-4 py-2 border rounded-md"
                value={formData.dob}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="gender"
                className="block text-sm font-medium mb-2 "
              >
                Gender
              </label>
              <input
                id="gender"
                type="text"
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Male/Female/Other"
                value={formData.gender}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="address"
                className="block text-sm font-medium mb-2 "
              >
                Address
              </label>
              <input
                id="address"
                type="text"
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Enter your address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="education"
                className="block text-sm font-medium mb-2 "
              >
                Education & Qualification
              </label>
              <input
                id="education"
                type="text"
                className="w-full px-4 py-2 border rounded-md"
                placeholder="E.g., BSc Computer Science"
                value={formData.education}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="graduation"
                className="block text-sm font-medium mb-2 "
              >
                Graduation (School/University Name/Degree)
              </label>
              <input
                id="graduation"
                type="text"
                className="w-full px-4 py-2 border rounded-md"
                placeholder="E.g., ABC University, B.Tech"
                value={formData.graduation}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="postGraduation"
                className="block text-sm font-medium mb-2 "
              >
                Post Graduation (School/University Name/Degree)
              </label>
              <input
                id="postGraduation"
                type="text"
                className="w-full px-4 py-2 border rounded-md"
                placeholder="E.g., XYZ University, M.Tech"
                value={formData.postGraduation}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="ppgCourse"
                className="block text-sm font-medium mb-2 "
              >
                PPG Course (School/University Name/Degree)
              </label>
              <input
                id="ppgCourse"
                type="text"
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Enter your PPG course details"
                value={formData.ppgCourse}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="certificates"
                className="block text-sm font-medium mb-2 "
              >
                Professional Certificates / Skills
              </label>
              <input
                id="certificates"
                type="text"
                className="w-full px-4 py-2 border rounded-md"
                placeholder="E.g., AWS Certified, React.js"
                value={formData.certificates}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="experience"
                className="block text-sm font-medium mb-2 "
              >
                Work Experience
              </label>
              <input
                id="experience"
                type="text"
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Describe your professional experience"
                value={formData.experience}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="resume"
                className="block text-sm font-medium mb-2 "
              >
                Resume & Portfolio (Link or Upload)
              </label>
              <input
                id="resume"
                type="text"
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Provide a link to your resume or portfolio"
                value={formData.resume}
                onChange={handleChange}
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-[50%] p-5 py-2 my-5  text-white bg-primary-orange rounded-lg hover:bg-deep-blue transition duration-300"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Career;
