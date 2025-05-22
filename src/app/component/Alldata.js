
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
const faqs = [
    {
        question: "What kind of software solutions do you offer?",
        answer: "We specialize in custom web applications, mobile apps, cloud integration, and AI-driven solutions.",
    },
    {
        question: "Do you provide DevOps and cloud services?",
        answer: "Yes, we offer CI/CD pipeline setup, AWS/GCP/Azure deployment, monitoring, and infrastructure automation.",
    },
    {
        question: "Can you build scalable enterprise systems?",
        answer: "Absolutely. We design distributed systems with scalability, reliability, and security in mind.",
    },
    {
        question: "What is your software development process?",
        answer: "We follow Agile methodology with iterative development, continuous testing, and regular client feedback.",
    },
    {
        question: "Do you offer UI/UX design services?",
        answer: "Yes, we have a dedicated team for wireframing, prototyping, and responsive interface design.",
    },
    {
        question: "Is source code ownership included?",
        answer: "Yes, upon project completion and full payment, you will own the complete source code.",
    },
    {
        question: "What technologies do you use?",
        answer: "We use React, Node.js, Python, TypeScript, Docker, Kubernetes, and many other modern tools.",
    },
    {
        question: "Can you help modernize legacy systems?",
        answer: "Yes, we refactor and re-architect legacy systems to improve performance and maintainability.",
    },
    {
        question: "Do you support API development and integration?",
        answer: "Yes, we build RESTful and GraphQL APIs and integrate with third-party services as needed.",
    },
    {
        question: "How do you ensure code quality?",
        answer: "Through code reviews, automated testing, static analysis tools, and continuous integration workflows.",
    },
    {
        question: "Do you offer long-term maintenance?",
        answer: "Yes, we provide maintenance, updates, and support packages for all our deployed applications.",
    },
    {
        question: "Is your development team in-house?",
        answer: "Yes, our developers, designers, and project managers are full-time team members working collaboratively.",
    },
    {
        question: "What are your security practices?",
        answer: "We follow OWASP guidelines, encrypt data in transit and at rest, and conduct regular security audits.",
    },
    {
        question: "Can you work with startups?",
        answer: "Definitely! We love collaborating with startups to build MVPs and scale products.",
    },
    {
        question: "Do you provide consulting or technical audits?",
        answer: "Yes, we offer architectural reviews, code audits, and cloud infrastructure assessments.",
    },
    {
        question: "What industries do you serve?",
        answer: "We work with clients in fintech, healthtech, education, e-commerce, and logistics.",
    },
    {
        question: "How can I request a project quote?",
        answer: "Visit our contact page and fill out the project inquiry form to get a tailored estimate.",
    },
    {
        question: "Do you offer white-label development?",
        answer: "Yes, we partner with agencies and resellers for white-label software development services.",
    },
    {
        question: "Is there a minimum project size?",
        answer: "Our minimum engagement is typically $5,000, but we’re flexible based on the project's scope.",
    },
    {
        question: "Where is your development team located?",
        answer: "Our team operates remotely from tech hubs in North America, Europe, and Asia.",
    },
];



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
    name: "Android",
    image: android,
    description: "A mobile operating system developed by Google, used for smartphones and tablets.",
  },
  {
    name: "Android Studio",
    image: androidstudio,
    description: "The official IDE for Android development, built on IntelliJ IDEA.",
  },
  {
    name: "Flutter",
    image: flutter,
    description: "An open-source UI software development toolkit by Google for building natively compiled applications.",
  },
  {
    name: "iOS",
    image: ios,
    description: "Apple's mobile operating system for iPhone and iPad devices.",
  },
  {
    name: "Xcode",
    image: xcode,
    description: "Apple's integrated development environment (IDE) for macOS for building software for Apple platforms.",
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

export { data,faqs };
