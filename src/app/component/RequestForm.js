import React, { useState } from "react";
import CustomInput from "./CustomInput";
import CustomButton from "./Buttons/CustomButton";

function RequestForm({ handleFormSubmit }) {
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

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
      valid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
      valid = false;
    }
    if (!formData.number.trim()) {
      newErrors.number = "Mobile number is required.";
      valid = false;
    } else if (!/^\d{10}$/.test(formData.number)) {
      newErrors.number = "Enter a valid 10-digit mobile number.";
      valid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      console.log("Form submitted:", formData);

      // If a parent callback is provided, invoke it
      if (handleFormSubmit) {
        handleFormSubmit(formData);
      }

      alert("Message sent successfully!");
      setFormData({
        fullName: "",
        email: "",
        number: "",
        message: "",
      });
      setErrors({});
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to send the message. Please try again.");
    }
  };

  return (
    <div className=" bg-white w-full  ">
      <h2 className="mb-8 font-extrabold text-2xl md:text-4xl text-center text-transparent bg-clip-text bg-deep-blue ">
        Request a Demo
      </h2>

      <form onSubmit={handleSubmit} className="w-full">
        <CustomInput
          id="fullName"
          label="Full Name"
          type="text"
          placeholder="Enter your full name"
          value={formData.fullName}
          onChange={handleChange}
          error={errors.fullName}
        />

        <CustomInput
          id="email"
          label="Email Address"
          type="email"
          placeholder="Enter your email address"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />

        <CustomInput
          id="number"
          label="Mobile Number"
          placeholder="Enter your mobile number"
          value={formData.number}
          onChange={handleChange}
          error={errors.number}
        />

        <CustomInput
          id="message"
          label="Message"
          type="textarea"
          placeholder="Enter your message"
          value={formData.message}
          onChange={handleChange}
          error={errors.message}
        />

        <CustomButton
          type="submit"
          label="Submit"
          className="w-full py-3 text-lg text-white bg-orange-600 hover:bg-orange-500 transition duration-300"
        />
      </form>
    </div>
  );
}

export default RequestForm;
