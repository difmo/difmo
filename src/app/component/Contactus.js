import React from "react";
import Formcontect from "./OurContactForm";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Contactus = () => {
  return (
    <>
      <div className="flex justify-center font-bold py-3 text-deep-blue">
        <h1 className="text-2xl md:text-5xl ">Get In Touch</h1>
      </div>
      <div className="md:flex gap-7 px-2 md:px-10 py-5 justify-center">
        <div className="w-full md:w-1/2">
          <div className="rounded-lg bg-white border-gray-500 py-6 md:p-8">
            <h2 className="font-extrabold text-2xl md:text-3xl text-black mb-6">
              Get in Touch
            </h2>
            {/* Phone Number */}
            <div className="mb-4">
              <div className="flex items-center text-black">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="w-5 h-5 mr-2 text-primary-orange"
                />
                <span className="font-semibold">Phone Number</span>
              </div>
              <a
                href="tel:+919455791624"
                className="block px-8 text-black hover:text-primary-orange hover:underline mt-1"
              >
                +91 945-579-1624
              </a>
              <a
                href="tel:+918172848306"
                className="block px-8 text-black hover:text-primary-orange hover:underline mt-1"
              >
                +91 817-284-8306
              </a>
            </div>
            {/* Email Address */}
            <div className="mb-4">
              <div className="flex items-center text-black">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="w-5 h-5 mr-2 text-primary-orange"
                />
                <span className="font-semibold">Email Address</span>
              </div>
              <a
                href="mailto:info@difmo.com"
                className="block px-8 text-black hover:text-primary-orange hover:underline mt-1"
              >
                info@difmo.com
              </a>
              <a
                href="mailto:difmotech@gmail.com"
                className="block px-8 text-black hover:text-primary-orange hover:underline mt-1"
              >
                difmotech@gmail.com
              </a>
            </div>
            {/* Address */}
            <div className=" border-gray-200 ">
              <div className="flex items-center text-black">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="w-5 h-5 mr-2 text-primary-orange"
                />
                <span className="font-semibold">Address</span>
              </div>
              <p className="text-black px-8">
                4/37 Vibhav Khand, Gomtinagar, Lucknow, Uttar Pradesh, 226010
              </p>
            </div>
            {/* Business Hours */}
          </div>
          <div className="mt-6 rounded-lg bg-white text-black border-gray-500 md:p-4">
            <h2 className="text-xl font-semibold mb-4">Business Hours</h2>
            <div className="space-y-2">
              <div className="flex justify-between border-b pb-2">
                <span>Monday - Friday</span>
                <span className="font-medium">10:00 AM - 7:00 PM</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span>Saturday</span>
                <span className="font-medium">10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="font-medium">Closed</span>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <Formcontect />
        </div>{" "}
      </div>
    </>
  );
};

export default Contactus;

// import React from "react";
// import see from "../assets/Question.png";
// import Image from "next/image";
// import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
// const Contactus = () => {
//   return (
//     <div className="mx-4 my-6 sm:mx-8 lg:mx-16">
//       {/* Grid Container for mobile responsive layout */}
//       <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
//         {/* Text Section */}
//         <div className="rounded-lg">
//           <h2 className="mb-6 text-4xl font-extrabold md:text-3xl text-deep-blue">
//             Question About Services
//           </h2>
//           <p className="text-gray-700 text-[16px] leading-relaxed md:leading-loose tracking-wide text-justify">
//             No matter what you wish to discuss, we're here to assist. We are
//             eager to understand your business objectives and collaborate with
//             you to create a strategy that will drive you towards success.
//           </p>
//           <div className="py-2">
//             <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
//               <div className="p-4 bg-white border rounded-lg shadow-md">
//                 <span className="block text-sm font-bold">Phone Number</span>
//                 <a
//                   href="tel:+919455791624"
//                   className="text-blue-500 hover:underline hover:text-primary-orange"
//                 >
//                   +91 945-579-1624
//                 </a>
//                 ,{" "}
//                 <a
//                   href="tel:+918172848306"
//                   className="text-blue-500 hover:underline hover:text-primary-orange"
//                 >
//                   +91 817-284-8306
//                 </a>
//               </div>

//               <div className="p-4 bg-white border rounded-lg shadow-md">
//                 <span className="block text-sm font-bold">Email Address</span>
//                 <a
//                   href="mailto:info@difmo.com"
//                   className="text-blue-500 hover:underline hover:text-primary-orange"
//                 >
//                   info@difmo.com
//                 </a>
//                 ,{" "}
//                 <a
//                   href="mailto:difmotech@gmail.com"
//                   className="text-blue-500 hover:underline hover:text-primary-orange"
//                 >
//                   difmotech@gmail.com
//                 </a>
//               </div>
//             </div>

//             <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2">
//               <div className="p-4 text-blue-500  bg-white border rounded-lg shadow-md">
//                 <span className="block text-sm font-bold">Address</span>
//                 <span>
//                   4/37 Vibhav Khand, Gomtinagar, Lucknow, Uttar Pradesh, 226010
//                 </span>
//               </div>

//               <div className="flex items-center justify-between p-4 bg-white border rounded-lg shadow-md">
//                 <p className="text-sm font-bold ">Social Media</p>
//                 <br />
//                 <div className="flex space-x-4">
//                   <a
//                     href="https://www.facebook.com/difmotech"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <FaFacebook
//                       size={30}
//                       className="text-blue-600  hover:text-[#EA130C]"
//                     />
//                   </a>
//                   <a
//                     href="https://x.com/difmotech"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <FaTwitter
//                       size={30}
//                       className="text-blue-400  hover:text-[#EA130C]"
//                     />
//                   </a>
//                   <a
//                     href="https://in.linkedin.com/company/difmo"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <FaLinkedin
//                       size={30}
//                       className="text-blue-700  hover:text-[#EA130C]"
//                     />
//                   </a>
//                   <a
//                     href="https://www.instagram.com/difmotech"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <FaInstagram
//                       size={30}
//                       className="text-pink-600  hover:text-[#EA130C]"
//                     />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Additional content section */}
//         <div>
//           <Image
//             src={see} // Image from public folder
//             alt="About Us"
//             width={500}
//             height={300}
//             className="w-full transition-transform duration-300 ease-in-out transform shadow-lg rounded-xl "
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contactus;
