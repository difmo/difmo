import React from "react";
import see from "../assets/landing/landing5.png";
import Image from "next/image";
import { motion } from "framer-motion";
const BuildingSoft = () => {
  return (
    <div className="mx-4 my-12  sm:mx-8 lg:mx-16">
      {/* Grid Container for responsive layout */}
      <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
        {/* Text Section */}
        <motion.div
          className="rounded-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-12 text-3xl font-bold leading-snug md:text-3xl text-black">
            Empowering with Cutting-Edge Software Solutions
          </h2>
          <p className="text-base leading-relaxed tracking-wide text-justify text-gray-700 md:text-lg">
            In today’s digital world, a strong online presence is essential. At{" "}
            <strong>Our Company</strong>, we create websites and software that
            elevate your brand and connect you with your audience. Combining
            technical expertise with creative design, we deliver scalable,
            secure, and user-friendly solutions that drive real impact. Let’s
            bring your vision to life.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="relative md:mt-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src={see}
            alt="Empowering Innovators"
            className="w-full h-auto transition-transform duration-500 ease-in-out transform hover:scale-110 hover:translate-y-2"
          />
          {/* Optional overlay for added design */}
          <div className="absolute inset-0 opacity-20"></div>
        </motion.div>
      </div>
      {/* Styles */}
      <style jsx>{`
        .landing-page {
          font-family: "Arial", sans-serif;
          background: linear-gradient(to bottom, #f9fafc, #eef2f7);
          padding: 50px 20px;
        }

        .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          flex-wrap: wrap; /* Make it responsive */
        }

        .text-content {
          flex: 1 1 50%;
          margin: 20px;
        }

        h1 {
          font-size: clamp(2rem, 5vw, 3rem); /* Dynamic scaling */
          line-height: 1.2;
          margin-bottom: 20px;
          font-weight: bold;
          color: #333;
        }

        .highlight {
          background: linear-gradient(90deg, #ff6f61, #9c27b0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        p {
          font-size: clamp(1rem, 3vw, 1.3rem); /* Dynamic scaling */
          line-height: 1.6;
          margin-bottom: 30px;
          color: #555;
        }

        .buttons button {
          padding: 12px 25px;
          font-size: clamp(0.9rem, 2.5vw, 1rem); /* Dynamic scaling */
          margin: 10px;
          border: none;
          border-radius: 25px;
          cursor: pointer;
          transition: background 0.3s;
        }

        .primary-btn {
          background-color: #007bff;
          color: #fff;
        }

        .primary-btn:hover {
          background-color: #0056b3;
        }

        .secondary-btn {
          background-color: #f1f1f1;
          color: #333;
          background-color: #e0e0e0;
        }

        .secondary-btn:hover {
          background-color: #e0e0e0;
        }

        .image-content {
          flex: 1 1 40%;
          text-align: right;
        }

        .illustration {
          max-width: 100%;
          height: auto;
        }

        @media (max-width: 768px) {
          .container {
            flex-direction: column;
          }

          .text-content {
            text-align: center;
          }

          .image-content {
            text-align: center;
            margin-top: 20px;
          }
        }

        @media (max-width: 480px) {
          .buttons button {
            padding: 10px 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default BuildingSoft;
