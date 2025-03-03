import React, { useState ,useEffect } from "react";
import { db } from "../config/config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const RequestForm = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);

  // Handle click outside to close modal
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);


  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    number: "",
    projectType: "",
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
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const docRef = await addDoc(collection(db, "requestForms"), {
        ...formData,
        date: serverTimestamp(),
      });
      setSubmitMessage("Message sent successfully!");
      setFormData({
        fullName: "",
        email: "",
        number: "",
        projectType: "",
      });
    } catch (error) {
      setSubmitMessage("Error sending message. Please try again.");
    }
  };

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div ref={modalRef} className="bg-white rounded-lg shadow-lg w-full max-w-2xl relative">
        {/* Header with Close Button */}
        <div className="relative bg-gradient-to-r from-red-400 to-pink-500 h-16 rounded-t-lg flex justify-end items-center">
          <button
            onClick={onClose}
            className="absolute -top-4 -right-4 bg-white shadow-lg text-black w-10 h-10 rounded-full flex items-center justify-center border border-gray-300 hover:bg-gray-100"
          >
            ✖
          </button>
        </div>
        <form onSubmit={handleSubmit} className="mt-10">
          {[
            { id: "fullName", label: "Full Name", type: "text" },
            { id: "email", label: "Email", type: "email" },
            { id: "number", label: "Phone Number", type: "text" },
          ].map((field) => (
            <div key={field.id} className="space-y-2">
              <label
                htmlFor={field.id}
                className=" text-lg font-medium text-gray-700"
              >
                {field.label}
              </label>
              <input
                id={field.id}
                type={field.type}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
                placeholder={`Enter ${field.label.toLowerCase()}`}
                value={formData[field.id]}
                onChange={handleChange}
              />
              {errors[field.id] && (
                <p className="text-red-500 text-sm">{errors[field.id]}</p>
              )}
            </div>
          ))}

          <div className="space-y-2">
            <label
              htmlFor="projectType"
              className="block text-lg font-medium text-gray-700"
            >
              Select Project Type
            </label>
            <select
              id="projectType"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 text-gray-500 focus:outline-none"
              value={formData.projectType}
              onChange={handleChange}
            >
              <option value="">--Select--</option>
              <option value="mobileApp">Mobile Application</option>
              <option value="website">Web Application</option>
              <option value="seoService">SEO Service</option>
              <option value="ecommerce">E-Commerce</option>
            </select>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full px-12 mt-6 py-3 text-lg font-semibold text-white hover:text-black rounded-xl bg-[#111827] hover:bg-gray-200"
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

export default RequestForm;

// import React, { useState } from "react";
// import CustomInput from "./CustomInput";
// import CustomButton from "./Buttons/CustomButton";
// import { db } from "../config/config"; // Assuming you're using Firestore
// import { collection, addDoc, serverTimestamp } from "firebase/firestore"; // Import Firestore methods

// function RequestForm() {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     number: "",
//     message: "",
//     date: "",
//   });

//   const [errors, setErrors] = useState({
//     fullName: "",
//     email: "",
//     number: "",
//     message: "",
//   });

//   const [selectedOption, setSelectedOption] = useState(""); // State for dropdown selection

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [id]: value,
//     }));
//     setErrors((prevErrors) => ({
//       ...prevErrors,
//       [id]: "",
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
//     if (id === "number" && /[^0-9]/.test(value)) {
//       return; // Prevent non-numeric input
//     }
//     setErrors(newErrors);
//     return valid;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validate before submitting
//     if (!validate()) {
//       return;
//     }

//     try {
//       // Firestore: Add a new document to the "requestsform" collection
//       await addDoc(collection(db, "requestForm"), {
//         fullName: formData.fullName,
//         email: formData.email,
//         number: formData.number,
//         message: formData.message,
//         projectType: selectedOption,
//         date: serverTimestamp(),
//       });

//       console.log("Form submitted:", formData);
//       alert("Message sent successfully!");

//       // Reset form data
//       setFormData({
//         fullName: "",
//         email: "",
//         number: "",
//         message: "",
//         date: "",
//       });
//       setSelectedOption(""); // Reset the selected dropdown option
//     } catch (error) {
//       console.error("Error sending data to Firebase: ", error);
//       alert("Failed to send message. Please try again.");
//     }
//   };

//   return (
//     <div className=" bg-white ">
//       <h2 className="my-2 text-4xl font-extrabold text-center text-transparent bg-clip-text px-2 bg-secondary">
//         Request a Demo
//       </h2>

//       {/* Request Form */}
//       <form onSubmit={handleSubmit} className="space-y-2 md:space-y-3 px-2">
//         {/* Full Name Input */}
//         <CustomInput
//           id="fullName"
//           label="Full Name"
//           type="text"
//           placeholder="Enter your full name"
//           value={formData.fullName}
//           onChange={handleChange}
//           error={errors.fullName}
//           className="text-sm sm:text-base md:text-lg lg:text-xl"
//         />

//         {/* Email Address Input */}
//         <CustomInput
//           id="email"
//           label="Email Address"
//           type="email"
//           placeholder="Enter your email address"
//           value={formData.email}
//           onChange={handleChange}
//           error={errors.email}
//           className="text-sm sm:text-base md:text-lg lg:text-xl"
//         />

//         {/* Mobile Number Input */}
//         <CustomInput
//           id="number"
//           label="Mobile Number"
//           type="tel"
//           pattern="[0-9]{10}"
//           placeholder="Enter your mobile number"
//           value={formData.number}
//           onChange={handleChange}
//           error={errors.number}
//           className="text-sm sm:text-base md:text-lg lg:text-xl"
//         />

//         {/* Project Type Dropdown */}
//         <div>
//           <label
//             htmlFor="projectType"
//             className="block text-sm font-medium text-gray-800 mb-1"
//           >
//             Select Project Type
//           </label>
//           <select
//             id="projectType"
//             value={selectedOption}
//             onChange={(e) => setSelectedOption(e.target.value)}
//             className="appearance-none border-2 border-gray-300 w-full py-2.5 px-4 text-gray-800 leading-tight focus:outline-none focus:ring-1 focus:ring-primary-orange focus:border-primary-orange transition-all duration-300 ease-in-out rounded-md"
//           >
//             <option value="" disabled>
//               Choose a type
//             </option>
//             <option value="mobileApp">Mobile App</option>
//             <option value="website">Website</option>
//             <option value="seoService">SEO Service</option>
//             <option value="ecommerce">E-Commerce</option>
//           </select>
//         </div>

//         {/* Message Input */}
//         <CustomInput
//           id="message"
//           label="Message"
//           type="textarea"
//           placeholder="Enter your message"
//           value={formData.message}
//           onChange={handleChange}
//           error={errors.message}
//           className="text-sm sm:text-base md:text-lg lg:text-xl"
//         />

//         {/* Submit Button */}
//         <CustomButton
//           type="submit"
//           label="Submit"
//           className="w-full py-2 text-base text-white bg-primary-orange hover:bg-[#ea130c9d] rounded transition duration-300 ease-in-out sm:py-3 sm:text-lg md:py-4 md:text-xl lg:py-2"
//         />
//       </form>
//     </div>
//   );
// }

// export default RequestForm;
