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
          value={formData.fullName}
          onChange={handleChange}
          error={errors.fullName}
        />
        <CustomInput
          id="email"
          label="Email Address"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />
        <CustomInput
          id="number"
          label="Mobile Number"
          type="text"
          value={formData.number}
          onChange={handleChange}
          error={errors.number}
        />
        <CustomInput
          id="message"
          label="Message"
          type="textarea"
          value={formData.message}
          onChange={handleChange}
          error={errors.message}
        />
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
