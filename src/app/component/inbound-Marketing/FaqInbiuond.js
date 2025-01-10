import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const FaqInbiuonds = [
  {
    question:
      "What makes Difmo on-page optimization different from other providers?",
    answer:
      " we combine unparalleled technical expertise with a deep understanding of your business objectives to craft strategies tailored to your unique needs. Our data-driven approach ensures continuous optimization, delivering measurable outcomes and maximizing the ROI of your investment. Partner with us to transform your vision into impactful solutions that drive growth and success.",
  },
  {
    question: "Will difmo's on-page services work for my industry?",
    answer:
      "Absolutely! Difmo Technologies offers on-page services that are tailored to meet the needs of any industry. Our team takes the time to understand your business goals, target audience, and competitive landscape to craft strategies that work specifically for your sector. Whether you're in e-commerce, healthcare, education, technology, or another field, our customized solutions are designed to drive results and help your business thrive.",
  },
  {
    question:
      "How involved do I need to be in the on-page optimization process?",
    answer:
      "At Difmo Technologies, your involvement in the on-page optimization process is flexible and tailored to your preferences. We handle the technical and strategic work, requiring your input mainly during the initial stages to understand your business goals and for occasional feedback on recommendations. Beyond that, we take care of implementation, updates, and performance tracking, keeping you informed every step of the way.",
  },
  {
    question:
      "Does difmo offer other SEO services besides on-page optimization?",
    answer:
      "Yes, Difmo Technologies offers a range of SEO services beyond on-page optimization. Their comprehensive SEO solutions include off-page optimization, such as link building and social media integration, as well as technical SEO, focusing on improving website speed, mobile-friendliness, and crawlability. They also provide keyword research, competitor analysis, content marketing strategies, and local SEO to enhance visibility in regional searches. ",
  },
  {
    question:
      "How do I get started with Difmo's on-page optimization services?",
    answer:
      "simply contact their team through their website or provided channels to discuss your needs. They will conduct an initial consultation to understand your goals and perform a detailed website audit to identify optimization opportunities, such as improving meta tags, headers, keyword usage, and content structure. Based on this analysis, they’ll provide a customized proposal outlining their strategy and pricing.",
  },
];

const FaqInbiuond = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const toggleFaqInbiuond = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      ref={ref}
      className="px-4 py-16 mx-auto max-w-8xl sm:px-6 bg-gray-50 text-gray-800"
    >
      <h2 className="mb-10 text-4xl font-bold text-center text-secondaryblue">
        Frequently <span className="text-primary">Asked Questions</span>
      </h2>
      <div className="container space-y-4">
        {FaqInbiuonds.map((FaqInbiuond, index) => (
          <motion.div
            key={index}
            className="overflow-hidden bg-white border-2 border-gray-200 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div
              className="flex items-center justify-between p-5 transition duration-300 cursor-pointer hover:bg-gray-100"
              onClick={() => toggleFaqInbiuond(index)}
            >
              <h3 className="text-lg font-semibold text-gray-800">
                {FaqInbiuond.question}
              </h3>
              <span className="p-2 text-5xl text-red-500 ">
                {openIndex === index ? "-" : "+"}
              </span>
            </div>
            {openIndex === index && (
              <div className="p-5 text-gray-700 bg-gray-50">
                <p>{FaqInbiuond.answer}</p>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FaqInbiuond;
