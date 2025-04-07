import React, { useState } from "react";
import CustomInput from "./CustomInput";
import CustomButton from "./Buttons/CustomButton";
import { db, firebase } from "../config/config";

function Formcontect() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    number: "",
    message: "",
    date: "",
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
    if (!formData.message) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      await db.collection("contactRequests").add({
        ...formData,
        date: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setSubmitMessage("Message sent successfully!");
      setFormData({
        fullName: "",
        email: "",
        number: "",
        message: "",
        date: "",
      });
    } catch (error) {
      setSubmitMessage("Error sending message. Please try again.");
    }
  };

  return (
    <div className="bg-white px-2 md:p-6 rounded-lg  ">
      <h2 className="text-2xl font-bold text-center text-gray-800">Reach Us</h2>
      <p className="text-center text-gray-700 mb-6">
        Please complete the form below to request a quote, and we’ll be in
        touch.
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <CustomInput
          id="fullName"
          label="Full Name"
          type="text"
          placeholder=" Name (required)"
          value={formData.fullName}
          onChange={handleChange}
          error={errors.fullName}
        />
        <CustomInput
          id="email"
          label="Email Address "
          type="email"
          placeholder=" Email address (required)"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />
        <CustomInput
          id="number"
          label="Phone Number"
          placeholder=" Phone number (required)"
          type="text"
          value={formData.number}
          onChange={handleChange}
          error={errors.number}
        />

        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 "
        >
          Message<span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Type your message here..."
          value={formData.message}
          onChange={handleChange}
          className={`p-3 border w-full text-gray-800 leading-tight rounded-md transition-all duration-300 ease-in-out focus:outline-none focus:ring-1 ${
            errors.message
              ? " focus:ring-red-500"
              : "border-gray-300 focus:ring-primary-orange focus:border-primary-orange"
          }`}
          style={{ height: "7em" }}
        />
        {errors.message && (
          <p className="text-red-500 text-sm ">{errors.message}</p>
        )}
        <CustomButton
          type="submit"
          label="Submit"
          className="w-full py-3 text-lg text-white bg-black hover:bg-gray-200 hover:text-black rounded-xl"
        />
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
  );
}

export default Formcontect;
