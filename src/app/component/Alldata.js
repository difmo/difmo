
import Ecom from "../assets/servicesimg/IMG@1x (2).png";
import busin from "../assets/servicesimg/IMG@1x (1).png";
import busin1 from "../assets/servicesimg/IMG@1x.png";
import chat from "../assets/chat.png";
import corporate from "../assets/corporate.png";
import you from "../assets/Cover2.png";

// web stuff
import react from '../assets/developertool/web/react.svg';
import vue from '../assets/developertool/web/Vue.svg';
import bootstrap from '../assets/developertool/web/bootstrap.svg';
import tailwind from '../assets/developertool/web/tailwind.svg';
import Nodejs from '../assets/developertool/web/Nodejs.svg';

// ios stuff

import android from '../assets/developertool/ios/android.svg';
import androidstudio from '../assets/developertool/ios/androidstudio.svg';
import flutter from '../assets/developertool/ios/flutter.svg';
import ios from '../assets/developertool/ios/ios.svg';
import xcode from '../assets/developertool/ios/xcode.svg';


const data = [
  {
    id: "web",

    tools: [
      {
        name: "React",
        image: react,
        description: "A JavaScript library for building user interfaces",
      },
      {
        name: "Vue.js",
        image: vue,
        description: "The Progressive JavaScript Framework",
      },
      {
        name: "Bootstrap",
        image: bootstrap,
        description: "Front-end framework for responsive web design",
      },
      {
        name: "Tailwind CSS",
        image: tailwind,
        description: "Utility-first CSS framework for custom designs",
      },
      {
        name: "Node.js",
        image: Nodejs,
        description: "JavaScript runtime for building server-side applications",
      },
    ],

    cta: {
      title: "Web Development Solutions",
      subtitle:
        "We specialize in designing and developing cutting-edge web applications that perfectly showcase your local business portfolio. Our goal is to craft applications that not only stand out with stunning design but also deliver seamless functionality, ensuring a lasting impression on your audience.",
      ctaTitle: "Ready to Start?",
      ctaSubtitle: "Get in touch with us to discuss your business needs.",
      ctaButton: "Contact Us",
    },
    solutions: [
      {
        title: "E-Commerce Website ",
        image: Ecom,
        features: [
          "Custom websites tailored your brand",
          "Responsive and mobile-friendly design",
          "SEO-optimized for better visibility",
        ],
      },
      {
        title: "Business Profile",
        image: busin,
        features: [
          "Cross-platform mobile app - solutions",
          "Seamless user experience",
          "Performance-focused design",
        ],
      },
      {
        title: "Personal Website",
        image: busin1,
        features: [
          "Fully integrated e-commerce platforms",
          "Secure payment gateways",
          "Custom product management",
        ],
      },
    ],
    processSteps: [
      {
        icon: "🔍",
        title: "Discovery",
        description: "We start by understanding your business needs and goals.",
      },
      {
        icon: "💡",
        title: "Planning",
        description:
          "Our team crafts a detailed roadmap for your project’s success.",
      },
      {
        icon: "🛠️",
        title: "Development",
        description:
          "We begin the development phase, ensuring smooth progress.",
      },
      {
        icon: "🚀",
        title: "Launch",
        description:
          "We help you launch your product and ensure it performs optimally.",
      },
    ],
  },
  {
    id: "mobile",
     tools: [
      {
        name: "React",
        image: android,
        description: "A JavaScript library for building user interfaces",
      },
      {
        name: "Vue.js",
        image: androidstudio,
        description: "The Progressive JavaScript Framework",
      },
      {
        name: "Bootstrap",
        image: flutter,
        description: "Front-end framework for responsive web design",
      },
      {
        name: "Tailwind CSS",
        image: ios,
        description: "Utility-first CSS framework for custom designs",
      },
      {
        name: "XCode",
        image: xcode,
        description: "XCode is an integrated development environment (IDE) for macOS",
      },
    ],

    cta: {
      title: "Empower Your Mobile Experience",
      subtitle: "Build innovative and high-performance mobile applications.",
      ctaTitle: "Start Your Mobile App Journey Today",
      ctaSubtitle: "Let's create a next-gen mobile solution for your business.",
      ctaButton: "Get in Touch",
    },
    solutions: [
      {
        title: "Chatting App Development",
        image: chat,
        features: [
          "Real-time messaging with WebSocket & Firebase",
          "End-to-end encryption for secure ",
          "Voice and video calling integration",
        ],
      },
      {
        title: "Game App Development",
        image: corporate,
        features: [
          "2D & 3D game development with Unity & Unreal Engine",
          "Multi-platform support (iOS, Android, PC)",
          "Seamless in-app purchases ",
        ],
      },
      {
        title: "Social Media App Development",
        image: you,
        features: [
          "User-friendly UI with interactive feeds",
          "AI-driven content recommendations",
          "Live streaming and community  engagement features",
        ],
      },
    ],
    processSteps: [
      {
        icon: "🔍",
        title: "Requirement Analysis",
        description: "Understanding your app vision and feature requirements.",
      },
      {
        icon: "📱",
        title: "UI/UX Design",
        description: "Crafting an intuitive and engaging mobile experience.",
      },
      {
        icon: "🛠️",
        title: "Development",
        description: "Building the app with cutting-edge mobile technologies.",
      },
      {
        icon: "🚀",
        title: "Testing & Launch",
        description: "Ensuring a flawless app experience before going live.",
      },
    ],
  },
];

export { data };
