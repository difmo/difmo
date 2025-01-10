import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const FaqInbiuonds = [
  {
    question: "Where can Inbound Marketing be applied?",
    answer:
      " Inbound marketing can be applied across various platforms, including your website, landing pages, social media, email campaigns, and more. It's effective for attracting visitors, converting leads, closing deals, and delighting customers.",
  },
  {
    question: "How do you measure the success of Inbound Marketing campaigns?",
    answer:
      "We measure the success of inbound marketing campaigns by tracking key metrics such as website traffic, lead generation, conversion rates, and customer engagement. We provide regular reports to show progress and identify areas for improvement.",
  },
  {
    question: "How long does it take to see results from Inbound Marketing?",
    answer:
      "The timeline for seeing results from inbound marketing can vary depending on your industry, goals, and the competitiveness of your market. However, you can typically expect to see initial improvements in traffic and engagement within a few months, with more substantial results over the course of 6-12 months.",
  },
  {
    question: "What kind of content do you create for Inbound Marketing?",
    answer:
      "We create a wide range of content, including blog posts, ebooks, whitepapers, infographics, videos, social media posts, and more. Each piece of content is designed to attract, engage, and delight your audience at different stages of their buyer's journey.",
  },
  //   {
  //     question:
  //       "How do I get started with Difmo's on-page optimization services?",
  //     answer:
  //       "simply contact their team through their website or provided channels to discuss your needs. They will conduct an initial consultation to understand your goals and perform a detailed website audit to identify optimization opportunities, such as improving meta tags, headers, keyword usage, and content structure. Based on this analysis, they’ll provide a customized proposal outlining their strategy and pricing.",
  //   },
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
