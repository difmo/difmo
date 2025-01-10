import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const faqs = [
  {
    question: " How do you choose the right audience for my Meta ads?",
    answer:
      "  We research your business and customers to find the best audience. Then, we use Meta’s tools to target them effectively.",
  },
  {
    question: "What kind of results can I expect from your Meta ad services?",
    answer:
      "Results vary by industry, but most clients see better quality leads and improved conversion rates.",
  },
  {
    question: "How do you measure success?",
    answer:
      " We track key numbers like clicks, leads, conversions, and return on investment, giving you clear reports on how your ads are performing.",
  },
  {
    question: "Can you manage my existing Meta Ads account?",
    answer:
      " Yes! We can take over your current account, optimize it, and help you get better results. ",
  },
  {
    question: "How soon will I see results?",
    answer:
      " Many clients start to see better leads and conversions within a few weeks. Our ongoing adjustments help ensure long-term success.",
  },
];

const FaqMeta = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const toggleFAQ = (index) => {
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
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="overflow-hidden bg-white border-2 border-gray-200 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div
              className="flex items-center justify-between p-5 transition duration-300 cursor-pointer hover:bg-gray-100"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-semibold text-gray-800">
                {faq.question}
              </h3>
              <span className="p-2 text-5xl text-red-500 ">
                {openIndex === index ? "-" : "+"}
              </span>
            </div>
            {openIndex === index && (
              <div className="p-5 text-gray-700 bg-gray-50">
                <p>{faq.answer}</p>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FaqMeta;
