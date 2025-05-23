"use client";
import Formcontect from "./OurContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
  faClock
} from "@fortawesome/free-solid-svg-icons";
import FAQSection from "./FAQSection";
import Image from "next/image";
import logo from "../assets/backgroundsvg/Vector.svg";
import tweet from "../assets/backgroundsvg/twit.svg";
import insta from "../assets/backgroundsvg/insta.svg";
import letter from "../assets/backgroundsvg/letter_send 1.png";

const OurContact = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center  text-white p-8">
  <div className="w-full max-w-6xl bg-white rounded-lg flex flex-col lg:flex-row overflow-hidden shadow-2xl">
    
    {/* Left Section */}
    <div className="bg-[#1E003A] text-white p-10 lg:w-1/2">
      <h2 className="text-3xl font-bold leading-snug mb-8">
        Let’s discuss <br />
        on something <span className="text-pink-500">cool</span> <br />
        together
      </h2>

      <div className="space-y-6 text-sm">
        <div className="flex items-center gap-3">
          <FontAwesomeIcon icon={faEnvelope} />
          <span>SaulDesign@gmail.com</span>
        </div>
        <div className="flex items-center gap-3">
          <FontAwesomeIcon icon={faPhone} />
          <span>+123 456 789</span>
        </div>
        <div className="flex items-center gap-3">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <span>123 Street 456 House</span>
        </div>
      </div>

      <div className="flex gap-4 mt-8">
        <Image src={insta} alt="Instagram" className="w-6 h-6" />
        <Image src={tweet} alt="Twitter" className="w-6 h-6" />
      </div>
    </div>

    {/* Right Section - Form */}
    <div className="bg-white text-gray-900 p-10 lg:w-1/2">
      <Formcontect />
    </div>
  </div>
</div>

  );
};

export default OurContact;
