import React, { useState } from "react";
import CustomInput from "./CustomInput";
import CustomButton from "./Buttons/CustomButton";
import { db, firebase } from "../config/config";
// import { db } from "."; // Import db (Firestore) from your Firebase setup

function RequestForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    number: "",
    message: "",
    date: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    number: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: "",
    }));
  };

  const validate = () => {
    let valid = true;
    const newErrors = {};

    if (!formData.fullName) {
      newErrors.fullName = "Full name is required.";
      valid = false;
    }
    if (!formData.email) {
      newErrors.email = "Email address is required.";
      valid = false;
    }
    if (!formData.number) {
      newErrors.number = "Number is required.";
      valid = false;
    }
    if (!formData.message) {
      newErrors.message = "Message is required.";
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
      // Simulating a submission
      console.log("Form submitted:", formData);
      alert("Message sent successfully!");

      // Reset form data
      setFormData({
        fullName: "",
        email: "",
        number: "",
        message: "",
        date: "",
      });
    } catch (error) {
      console.error("Error sending data to Firebase: ", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="p-8 bg-white sm:w-full lg:w-2/4 md:w-2/4 ">
      <h2 className="mb-8 text-4xl font-extrabold text-center text-transparent bg-clip-text bg-secondary ">
        Request a Demo
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <CustomInput
          id="fullName"
          label="Full Name"
          type="text"
          placeholder="Enter your full name"
          value={formData.fullName}
          onChange={handleChange}
          error={errors.fullName}
          className="text-sm sm:text-base md:text-lg lg:text-xl"
        />

        <CustomInput
          id="email"
          label="Email Address"
          type="email"
          placeholder="Enter your email address"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          className="text-sm sm:text-base md:text-lg lg:text-xl"
        />

        <CustomInput
          id="number"
          label="Mobile Number"
          placeholder="Enter your mobile number"
          value={formData.number}
          onChange={handleChange}
          error={errors.number}
          className="text-sm sm:text-base md:text-lg lg:text-xl"
        />

        <CustomInput
          id="message"
          label="Message"
          placeholder="Enter your message"
          value={formData.message}
          onChange={handleChange}
          error={errors.message}
          className="text-sm sm:text-base md:text-lg lg:text-xl"
        />

        <CustomButton
          type="submit"
          label="Submit"
          className="w-full py-2 text-base text-white bg-primary-orange hover:bg-[#ea130c9d] rounded transition duration-300 ease-in-out sm:py-3 sm:text-lg md:py-4 md:text-xl lg:py-5"
        />
      </form>
    </div>
  );
}

export default RequestForm;
