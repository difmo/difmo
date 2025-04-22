"use client";
import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    description:
      "Responsive, high-performance websites built using Next.js, React, and Node.js to suit your unique business needs.",
  },
  {
    title: "UI/UX Design",
    description:
      "Clean, intuitive, and user-first design for web and mobile apps that boost engagement and retention.",
  },
  {
    title: "Mobile App Development",
    description:
      "Robust cross-platform mobile apps with great performance, crafted using Flutter and React Native.",
  },
  {
    title: "Firebase Integration",
    description:
      "Real-time database, authentication, cloud functions, and more to scale your application instantly.",
  },
  {
    title: "Branding & Strategy",
    description:
      "Strong branding, visual identity, and strategy that resonates with your target audience.",
  },
  {
    title: "Maintenance & Support",
    description:
      "Ongoing updates, improvements, and issue resolution to ensure smooth functioning post-deployment.",
  },
];

const workflowSteps = [
  {
    title: "1. Understanding Your Needs",
    description:
      "We start by talking with you to understand your business, your goals, and what you need from us. This helps us plan the project in a clear and organized way.",
  },
  {
    title: "2. Planning and Design Ideas",
    description:
      "Next, we sketch out the structure and design of your website or app. This includes layouts, colors, and how users will move through it. You’ll get to see previews before we begin building.",
  },
  {
    title: "3. Building the Product",
    description:
      "Our team starts developing the actual product. We build each part step by step — the visuals you see (frontend) and the systems behind the scenes (backend). We also connect it to tools like login systems or databases if needed.",
  },
  {
    title: "4. Checking Everything Works",
    description:
      "We test everything carefully to make sure it works properly on phones, tablets, and computers. We fix any problems, big or small, before showing it to you.",
  },
  {
    title: "5. Review and Changes",
    description:
      "You get to see the full product and share your thoughts. If anything needs to be changed — design, features, text — we’ll take care of it based on your feedback.",
  },
  {
    title: "6. Launching the Project",
    description:
      "Once you’re happy with it, we publish your website or app online. We make sure it loads fast, is secure, and is easy for search engines like Google to find.",
  },
  {
    title: "7. Ongoing Support and Updates",
    description:
      "Even after launch, we’re here to help! We can fix issues, make updates, and add new features as your business grows. Think of us as your tech support team.",
  },
];

const reasons = [
  {
    title: "Experienced Team",
    desc: "Our developers and designers have years of experience delivering high-quality products.",
  },
  {
    title: "Client-Centric Approach",
    desc: "We listen closely, understand your vision, and deliver beyond expectations.",
  },
  {
    title: "End-to-End Solutions",
    desc: "From design to deployment, we handle it all—so you can focus on your business.",
  },
];
const fadeVariants = {
  top: { initial: { opacity: 0, y: -30 }, animate: { opacity: 1, y: 0 } },
  bottom: { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } },
  left: { initial: { opacity: 0, x: -30 }, animate: { opacity: 1, x: 0 } },
  right: { initial: { opacity: 0, x: 30 }, animate: { opacity: 1, x: 0 } },
};
export default function page() {
  return (
    <div className="min-h-screen text-gray-800 bg-white">
      {/* Hero Section */}
      <motion.section
        initial={fadeVariants.top.initial}
        animate={fadeVariants.top.animate}
        transition={{ duration: 0.6 }}
        className="py-20 px-6 text-center"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-600">
            At Difmo Technologies, we craft cutting-edge digital solutions that
            accelerate your business growth.
          </p>
        </div>
      </motion.section>

      {/* Services Grid */}
      <section className="py-20 px-6 bg-gray-100 text-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((item, idx) => {
              const direction =
                idx % 3 === 0 ? "left" : idx % 3 === 1 ? "bottom" : "right";
              return (
                <motion.div
                  key={idx}
                  initial={fadeVariants[direction].initial}
                  whileInView={fadeVariants[direction].animate}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className=" p-3 rounded-2xl bg-oceania  border-oceania border-3 hover:shadow-red-400 hover:shadow-2xl transition border"
                >
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className=" py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Why Choose Difmo?</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {reasons.map((item, idx) => (
              <motion.div
                key={idx}
                initial={fadeVariants.bottom.initial}
                whileInView={fadeVariants.bottom.animate}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                className="p-3 rounded-2xl bg-white hover:shadow-red-400 hover:shadow-2xl transition border"
              >
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Workflow */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-10">Our Workflow</h2>
          <div className="space-y-10 text-left">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={fadeVariants.left.initial}
                whileInView={fadeVariants.left.animate}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row  items-start md:items-center gap-6"
              >
                {/* <div className="text-2xl font-bold w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full">
                  {index + 1}
                </div> */}
                <div>
                  <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
                  <p className="text-gray-600 px-6">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={fadeVariants.top.initial}
        animate={fadeVariants.top.animate}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-blue-600 py-16 px-6 text-white text-center"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="mb-6 text-lg">
            Let Difmo turn your idea into a fully functional product. We’re just
            one click away.
          </p>
          <a
            href="/contact-us"
            className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition"
          >
            Get in Touch
          </a>
        </div>
      </motion.section>
    </div>
  );
}
