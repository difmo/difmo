import React from "react";
import ecom from "../../assets/Cover.png";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import CustomButton from "../Buttons/CustomButton";
import { motion } from "framer-motion";
import Link from "next/link";

const features = [
  "Home",
  "Contact Us",
  "Services",
  "About Us",
  "Business Map Integration",
  "Privacy Policy",
  "Terms & Conditions",
];

function BusinessProfile() {
  return (
    <div className="py-10">
      {/* Heading */}
      <motion.h1
        className="text-left text-3xl sm:text-4xl md:text-4xl py-6 font-lilita font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-deep-blue to-primary-orange"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Business Profile
      </motion.h1>

      {/* Content Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Text Section */}
        <motion.div
          className="md:w-1/2 py-7"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-sm sm:text-base md:text-lg p-4 text-gray-700">
            We design custom websites to elevate your business, combining
            creativity and functionality to build a strong online presence,
            attract customers, and drive success in the digital world.
          </p>
          <ul className="list-none space-y-2">
            {features.map((feature, index) => (
              <motion.li
                key={index}
                className="text-sm sm:text-base md:text-lg px-4 text-gray-700 flex items-center gap-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <FaCheck className="text-green-500" />
                {feature}
              </motion.li>
            ))}
          </ul>
          <div className="p-5 flex gap-4">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <Link href="/contact-us">
                <CustomButton
                  className="bg-primary-orange text-white p-3 w-36 rounded-3xl flex justify-center hover:bg-[#f8710f]"
                  fname="Contact Us"
                />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <Link href="/blogs">
                <CustomButton
                  className="bg-primary-orange text-white p-3 w-36 rounded-3xl flex justify-center hover:bg-[#f8710f]"
                  fname="Learn More"
                />
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="md:w-1/2 px-4 sm:px-6 "
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          <Image
            src={ecom}
            alt="Business Profile Illustration"
            className="rounded-xl shadow-2xl"
            layout="responsive"
            width={500}
            height={400}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default BusinessProfile;
