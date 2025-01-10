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
      [id]: "", // Clear error when user starts typing
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
      // Save the form data to Firebase Firestore
      await db.collection("contactRequests").add({
        fullName: formData.fullName,
        email: formData.email,
        number: formData.number,
        message: formData.message,
        date: firebase.firestore.FieldValue.serverTimestamp(), // Current date and time
      });

      console.log("Form submitted:", formData);
      alert("Message sent successfully!");

      // Reset form fields after submission
      setFormData({
        fullName: "",
        email: "",
        number: "",
        message: "",
        date: "",
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="p-8 bg-white lg:w-2/5  rounded-[50px] border-2 border-red-600 ">
      <h2 className="mb-8 font-extrabold text-4xl text-center text-transparent bg-clip-text bg-secondary ">
        Reach Us
      </h2>

      <h2 className="mb-8 font-extrabold text-center text-gray-700">
        Please complete the form below, to request a quote, and we’ll be in
        touch.
      </h2>
      <form onSubmit={handleSubmit} className="space-y-3">
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
          placeholder="Enter your message"
          value={formData.message}
          onChange={handleChange}
          error={errors.message}
        />

        <CustomButton
          type="submit"
          label="Submit"
          className="w-full py-3 text-lg text-white bg-primary-orange hover:bg-[#ea130c9d] transition duration-300 ease-in-out rounded-md"
        />
      </form>
    </div>
  );
}

export default Formcontect;

// import React, { useState } from "react";
// import CustomInput from "./CustomInput";
// import CustomButton from "./Buttons/CustomButton";

// function Formcontect() {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     number: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState({
//     fullName: "",
//     email: "",
//     number: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [id]: value,
//     }));
//     setErrors((prevErrors) => ({
//       ...prevErrors,
//       [id]: "", // Clear error when user starts typing
//     }));
//   };

//   const validate = () => {
//     let valid = true;
//     const newErrors = {};

//     if (!formData.fullName) {
//       newErrors.fullName = "Full name is required.";
//       valid = false;
//     }
//     if (!formData.email) {
//       newErrors.email = "Email address is required.";
//       valid = false;
//     }
//     if (!formData.number) {
//       newErrors.number = "Number is required.";
//       valid = false;
//     }
//     if (!formData.message) {
//       newErrors.message = "Message is required.";
//       valid = false;
//     }

//     setErrors(newErrors);
//     return valid;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validate()) {
//       return;
//     }
//     try {
//       // Simulating a submission
//       console.log("Form submitted:", formData);
//       alert("Message sent successfully!");
//       setFormData({
//         fullName: "",
//         email: "",
//         number: "",
//         message: "",
//       });
//     } catch (error) {
//       console.error("Error adding document: ", error);
//       alert("Failed to send message. Please try again.");
//     }
//   };

//   return (
//     <div className="p-8 bg-white lg:w-2/5  rounded-[50px] ">
//       <h2 className="mb-8 font-extrabold text-4xl text-center text-transparent bg-clip-text bg-secondary ">
//         Reach Us
//       </h2>

//       <h2 className="mb-8 font-extrabold text-center bg-clip-text bg-gradient-to-r">
//         Please complete the form below, to request a quote, and we’ll be in
//         touch.
//       </h2>
//       <form onSubmit={handleSubmit} className="space-y-3">
//         <CustomInput
//           id="fullName"
//           label="Full Name"
//           type="text"
//           placeholder="Enter your full name"
//           value={formData.fullName}
//           onChange={handleChange}
//           error={errors.fullName}
//         />

//         <CustomInput
//           id="email"
//           label="Email Address"
//           type="email"
//           placeholder="Enter your email address"
//           value={formData.email}
//           onChange={handleChange}
//           error={errors.email}
//         />

//         <CustomInput
//           id="number"
//           label="Mobile Number"
//           placeholder="Enter your mobile number"
//           value={formData.number}
//           onChange={handleChange}
//           error={errors.number}
//         />

//         <CustomInput
//           id="message"
//           label="Message"
//           placeholder="Enter your message"
//           value={formData.message}
//           onChange={handleChange}
//           error={errors.message}
//         />

//         <CustomButton
//           type="submit"
//           label="Submit"
//           className="w-full py-3 text-lg text-white bg-primary-orange hover:bg-[#ea130c9d] transition duration-300 ease-in-out"
//         />
//       </form>
//     </div>
//   );
// }

// export default Formcontect;
