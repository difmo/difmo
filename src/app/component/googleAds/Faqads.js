import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const faqs = [
  {
    question: "How do you find the right audience for my Google Ads?",
    answer:
      " We research your market and understand your business goals to identify the best audience. We then use Google Ads' targeting tools to show your ads to the right people.",
  },
  {
    question: "What results can I expect from your lead generation services?",
    answer:
      "Results vary, but our clients typically see an improvement in the quality of their leads, higher conversion rates, and better returns on their investment.",
  },
  {
    question: "How do you measure the success of the Google Ads campaigns?",
    answer:
      "We track important numbers like clicks, conversions, and the cost per lead. We share these insights with you through regular reports.",
  },
  {
    question: "Can you manage my existing Google Ads account?",
    answer:
      "Yes, we can take over your existing Google Ads account, improve its performance, and help you get better results. ",
  },
  {
    question:
      "How soon will I see results?",
    answer:
      "Most clients start seeing better leads and conversions within a few weeks of launching their campaign. We continually optimize to ensure long-term success.",
  },
];

const Faqads = () => {
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

export default Faqads;
