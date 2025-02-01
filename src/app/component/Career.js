"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { db, storage } from "../config/config";
import "firebase/compat/storage"; // Ensure this is imported

function Career() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [submitMessage, setSubmitMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      let resumeUrl = "No file uploaded";

      // Check if a resume file is uploaded
      if (data.resume && data.resume[0]) {
        const file = data.resume[0];
        const storageRef = storage.ref(`resumes/${file.name}`); // Use storage.ref() here
        await storageRef.put(file); // Use put() for uploading files
        resumeUrl = await storageRef.getDownloadURL(); // Use getDownloadURL() to get the file URL
      }

      // Add form data to Firestore
      await db.collection("jobApplications").add({
        position: data.position,
        fullName: data.fullName,
        email: data.email,
        number: data.number,
        dob: data.dob,
        address: data.address,
        state: data.state,
        city: data.city,

        gender: data.gender,
        education: data.education,
        experience: data.experience,
        resume: resumeUrl,
      });

      setSubmitMessage("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitMessage("Error submitting form, please try again.");
    }
  };

  return (
    <div className="min-h-screen flex justify-center text-gray-700 items-center px-4 py-10">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-xl p-6 sm:p-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-black">
          Apply for a Job
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {[
            {
              id: "position",
              label: "Position",
              options: [
                "--Select--",
                "Software Development",
                "Frontend Developer",
                "Backend Developer",
                "Full Stack Developer",
                "Mobile App Developer",
                "Web Developer",
                "UI/UX Designer",
                "Software Engineer",
                "Other",
              ],
            },
            { id: "fullName", label: "Full Name", type: "text" },
            { id: "email", label: "Email", type: "email" },
            { id: "number", label: "Phone Number", type: "text" },
            { id: "dob", label: "Date of Birth", type: "date" },
            { id: "address", label: "Address", type: "text" },
            { id: "state", label: "State", type: "text" },
            { id: "city", label: "City", type: "text" },

            {
              id: "gender",
              label: "Gender",
              options: ["--Select--", "Male", "Female", "Other"],
            },
            {
              id: "education",
              label: "Education",
              options: [
                "Select education",
                "High School",
                "Bachelor's",
                "Master's",
                "PhD",
                "Other",
              ],
            },
            {
              id: "experience",
              label: "Work Experience (Years)",
              options: ["--Select--", 0, 1, 2, 3, 4, 5, 6],
            },
            { id: "resume", label: "Resume/Portfolio Upload", type: "file" },
          ].map((field) => (
            <div key={field.id} className="space-y-2">
              <label
                htmlFor={field.id}
                className="block text-lg font-medium text-gray-700"
              >
                {field.label}
              </label>
              {field.options ? (
                <select
                  id={field.id}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
                  {...register(field.id, {
                    required: `${field.label} is required.`,
                  })}
                >
                  {field.options.map((option, index) => (
                    <option
                      key={index}
                      value={option === "--Select--" ? "" : option}
                    >
                      {option}
                    </option>
                  ))}
                </select>
              ) : field.type === "file" ? (
                <input
                  id={field.id}
                  type="file"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
                  {...register(field.id, {
                    required: `${field.label} is required.`,
                    validate: (value) => {
                      const file = value[0];
                      if (!file) return "Resume is required.";
                      const allowedFileTypes = [
                        "application/pdf",
                        "application/msword",
                        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                      ];
                      if (!allowedFileTypes.includes(file.type)) {
                        return "File type must be PDF or DOC/DOCX";
                      }
                      if (file.size > 5 * 1024 * 1024) {
                        return "File size must be under 5MB.";
                      }
                    },
                  })}
                />
              ) : (
                <input
                  id={field.id}
                  type={field.type}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
                  placeholder={`Enter ${field.label.toLowerCase()}`}
                  {...register(field.id, {
                    required: `${field.label} is required.`,
                    ...(field.type === "email" && {
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "Enter a valid email address.",
                      },
                    }),
                    ...(field.type === "text" &&
                      field.id === "number" && {
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message: "Enter a valid 10-digit phone number.",
                        },
                      }),
                    ...(field.type === "date" && {
                      validate: (value) => {
                        const today = new Date();
                        const dob = new Date(value);
                        return (
                          dob <= today ||
                          "Date of birth cannot be in the future."
                        );
                      },
                    }),
                  })}
                />
              )}
              {errors[field.id] && (
                <p className="text-red-500 text-sm">
                  {errors[field.id].message}
                </p>
              )}
            </div>
          ))}

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full sm:w-auto px-12 py-3 text-lg font-semibold text-white hover:text-black  rounded-xl bg-black hover:bg-gray-200"
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
}

export default Career;
