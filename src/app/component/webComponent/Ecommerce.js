import React from "react";
import ecom from "../../assets/Ecommerce.png";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import CustomButton from "../Buttons/CustomButton";

const features = [
  "Landing Page",
  "Product listing",
  "Add to Cart",
  "Buy the Product",
  "Payment Gateway",
  "Domain for You",
  "About Page",
  "Contact Page",
  "Privacy Policy & Refund",
  "Integrate Your Business Location",
];

function Ecommerce() {
  return (
    <div className="py-10">
      {/* Heading */}
      <motion.h1
        className="text-left text-3xl sm:text-4xl md:text-4xl py-6 font-lilita font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-deep-blue to-primary-orange"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        E-Commerce Web Application / Website
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
          <p className="py-5 text-sm sm:text-base md:text-lg px-4 text-gray-700">
            Explore our E-Commerce platform, offering a diverse selection of
            products. Enjoy secure payments, fast shipping, and exceptional
            customer service. Shop conveniently from home, with exclusive deals
            and discounts. Your satisfaction is our priority—begin your shopping
            experience today!
          </p>
          {features.map((feature, index) => (
            <motion.p
              key={index}
              className="text-sm sm:text-base md:text-lg px-4 text-gray-700"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <span className="px-4 inline-flex gap-4 items-center">
                <FaCheck className="text-green-500" />
                {feature}
              </span>
            </motion.p>
          ))}
          <div className="p-5 flex gap-4">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <Link href="/contact-us">
                <CustomButton
                  className="bg-primary-orange text-white p-3 w-36 rounded-3xl flex justify-center hover:bg-[#f8710f]  border-2 border-deep-blue"
                  fname="Get Started"
                />
              </Link>
            </motion.div>
            {/* <motion.div
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
            </motion.div> */}
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="md:w-1/2 px-4 sm:px-6"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          <Image
            src={ecom}
            alt="E-commerce Illustration"
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

export default Ecommerce;
