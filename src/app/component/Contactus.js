import React from "react";
import Formcontect from "./OurContactForm";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contactus = () => {
  return (
    <>
      <div className="flex justify-center font-bold py-3 text-deep-blue">
        <h1 className="text-2xl md:text-5xl ">Get In Touch</h1>
      </div>
      <div className="md:flex gap-7 px-2 md:px-10 py-5 justify-center">
        <div className="p-8 bg-secondary border-secondary  rounded-2xl  lg:rounded-[50px]  w-full lg:w-2/4 md:pb-5 mb-4">
          <h2 className="mb-8 text-4xl font-extrabold text-center text-transparent text-white bg-clip-text">
            Quick Contact
          </h2>
          <h2 className="mb-8 font-extrabold text-center text-white capitalize bg-clip-text bg-gradient-to-r ">
            Feel free to contact with our team
          </h2>
          {/* Phone Number */}
          <div className="p-6 border-b border-gray-200">
            <span className="block mb-3 text-white">Phone Number</span>
            <a
              href="tel:+919455791624"
              className="block text-white hover:text-primary-orange hover:underline"
            >
              +91 945-579-1624
            </a>
            <a
              href="tel:+918172848306"
              className="block text-white hover:text-primary-orange hover:underline"
            >
              +91 817-284-8306
            </a>
          </div>

          {/* Email Address */}
          <div className="p-6 border-b border-gray-200">
            <span className="block mb-3 text-white">Email Address</span>
            <a
              href="mailto:info@difmo.com"
              className="block text-white hover:text-primary-orange hover:underline"
            >
              info@difmo.com
            </a>
            <a
              href="mailto:difmotech@gmail.com"
              className="block text-white hover:text-primary-orange hover:underline"
            >
              difmotech@gmail.com
            </a>
          </div>

          {/* Address */}
          <div className="p-6 border-b border-gray-200">
            <span className="block mb-3 text-white">Address</span>
            <span className="text-white ">
              4/37 Vibhav Khand, Gomtinagar, Lucknow, Uttar Pradesh, 226010
            </span>
          </div>

          {/* Social Media Links */}
          <div className="p-6">
            <span className="block mb-3 text-white">Follow Us</span>
            <div className="flex space-x-6">
              <a
                href="https://www.facebook.com/difmotech"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook
                  size={32}
                  className="text-white transition-all duration-300 hover:text-white"
                />
              </a>
              <a
                href="https://x.com/difmotech"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter
                  size={32}
                  className="text-white transition-all duration-300 hover:text-white"
                />
              </a>
              <a
                href="https://in.linkedin.com/company/difmo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin
                  size={32}
                  className="text-white transition-all duration-300 hover:text-white"
                />
              </a>
              <a
                href="https://www.instagram.com/thedifmo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram
                  size={32}
                  className="text-white transition-all duration-300 hover:text-white"
                />
              </a>
            </div>
          </div>
        </div>
        <Formcontect />
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
