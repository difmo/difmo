import React, { useState } from "react";
import CustomInput from "./CustomInput";
import CustomButton from "./Buttons/CustomButton";

function RequestForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    number: "",
    message: "",
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
      console.log("Form submitted:", formData);
      alert("Message sent successfully!");
      setFormData({
        fullName: "",
        email: "",
        number: "",
        message: "",
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="px-4 py-6 mx-auto bg-white rounded-lg shadow-lg md:max-w-2xl lg:max-w-4xl">
      <h2 className="mb-6 text-xl font-bold text-center text-gray-800 sm:text-2xl md:text-3xl lg:text-4xl">
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
