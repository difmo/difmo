"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import dinesh from "../../../public/image/dinesh.jpeg";
import aman from "../../../public/image/aman.png";
import amar from "../../../public/image/amar.jpg";
import pritam1 from "../../../public/image/pritam1.png";
import vimalraj from "../../../public/image/vimalraj.png";

const teamMembers = [
  {
    name: "Dinesh Kumar",
    image: dinesh,
    role: "Product Manager",
    description:
      "Software Engineer with 4+ years of experience in React Native, Flutter, and cross-platform mobile app development for Android and iOS...",
    socials: {
      linkedin: "https://www.linkedin.com/in/dineshappdeveloper/",
      instagram: "https://www.instagram.com/dineshkumartlbupi/",
      facebook: "https://www.facebook.com/dineshkumartlbupi",
    },
  },
  {
    name: "Pritam Sharma",
    image: pritam1,
    role: "Tech Lead",
    description:
      "Software Developer specializing in React Native, Flutter, and Node.js, with expertise in building high-performance mobile and web applications...",
    socials: {
      linkedin: "https://www.linkedin.com/in/pritamksharma/",
      instagram: "https://www.instagram.com/pritamk_sharma/",
      facebook: "",
    },
  },
  {
    name: "Vimalraj",
    image: vimalraj,
    role: "Frontend Developer",
    description:
      "Frontend Developer specializing in Next.js, React Native, React.js, and JavaScript...",
    socials: {
      linkedin: "https://www.linkedin.com/in/vimal-raj-frontend-developer/",
      instagram: "https://www.instagram.com/vr854302/",
      facebook: "https://www.facebook.com/vimalraj.raj.5667",
    },
  },
  {
    name: "Aman Kumar",
    role: "Frontend Developer",
    image: aman,
    description:
      "Software Developer at Difmo Technologies specializing in mobile app development with React Native, Flutter, and Android...",
    socials: {
      linkedin: "https://www.linkedin.com/in/aman-software-developer/",
      instagram: "https://www.instagram.com/aman13_70/",
      facebook: "https://www.facebook.com/profile.php?id=100022683532377",
    },
  },
  {
    name: "Amar Maurya",
    role: "Frontend Developer",
    image: amar,
    description:
      "Software Developer at Difmo Technologies, specializing in React.js, Next.js, Node.js, Express.js, Google Cloud, Firebase, and MongoDB...",
    socials: {
      linkedin: "https://www.linkedin.com/in/amar-maurya1234/",
      instagram: "https://www.instagram.com/amarmaurya_official/",
      facebook: "https://www.facebook.com/profile.php?id=100019601992354",
    },
  },
];
const teamMember = [
  {
    name: "Dinesh Kumar",
    image: dinesh,
    role: "Product Manager",
    description:
      "Software Engineer with 4+ years of experience in React Native, Flutter, and cross-platform mobile app development for Android and iOS. Proficient in backend technologies including Firebase, Google Cloud, React.js, and Node.js, delivering seamless, scalable, and high-performance applications.",
    socials: {
      linkedin: "https://www.linkedin.com/in/dineshappdeveloper/",
      instagram: "https://www.instagram.com/dineshkumartlbupi/",
      facebook: "https://www.facebook.com/dineshkumartlbupi",
    },
  },
  {
    name: "Pritam Sharma",
    image: pritam1,
    role: "Tech Lead",
    description:
      "Software Developer specializing in React Native, Flutter, and Node.js, with expertise in building high-performance mobile and web applications. I focus on creating scalable, maintainable, and intuitive user experiences while seamlessly integrating modern technologies. Skilled in NoSQL, MongoDB, and Firebase, I aim to optimize software for speed, efficiency, and functionality.",
    socials: {
      linkedin: "https://www.linkedin.com/in/pritamksharma/",
      instagram: "https://www.instagram.com/pritamk_sharma/",
      facebook: "",
    },
  },
  {
    name: "Vimalraj",
    image: vimalraj,
    role: "Frontend Developer",
    description:
      "Frontend Developer specializing in Next.js, React Native, React.js, and JavaScript. Proficient in modern UI frameworks like Tailwind CSS and Bootstrap, with strong expertise in HTML5 and API integration to create responsive, user-friendly, and dynamic web applications.",
    socials: {
      linkedin: "https://www.linkedin.com/in/vimal-raj-frontend-developer/",
      instagram: "https://www.instagram.com/vr854302/",
      facebook: "https://www.facebook.com/vimalraj.raj.5667",
    },
  },
  {
    name: "Aman Kumar",
    role: "Frontend Developer",
    image: aman,
    description:
      "Software Developer at Difmo Technologies specializing in mobile app development with React Native, Flutter, and Android. I build scalable, high-performance apps for Android and iOS, leveraging Java, Kotlin, and cross-platform frameworks.",
    socials: {
      linkedin: "https://www.linkedin.com/in/aman-software-developer/",
      instagram: "https://www.instagram.com/aman13_70/",
      facebook: "https://www.facebook.com/profile.php?id=100022683532377",
    },
  },
  {
    name: "Amar Maurya",
    role: "Frontend Developer",
    image: amar,
    description:
      "Software Developer at Difmo Technologies, specializing in React.js, Next.js, Node.js, Express.js, Google Cloud, Firebase, and MongoDB. Proficient in developing scalable, modern web applications and backend solutions, leveraging cutting-edge technologies to deliver exceptional software products.",
    socials: {
      linkedin: "https://www.linkedin.com/in/amar-maurya1234/",
      instagram: "https://www.instagram.com/amarmaurya_official/",
      facebook: "https://www.facebook.com/profile.php?id=100019601992354",
    },
  },
];

export default function TeamSection() {
  return (
    <div className="py-6 px-4 md:px-10">
      {/* Desktop View */}
      <section className="hidden sm:block">
        <h1 className="text-3xl md:text-5xl font-extrabold py-5 text-center text-black">
          Meet <span className="text-primary-orange">Our</span> Team
        </h1>
        {teamMember.map((membe, index) => {
          const isEven = index % 2 === 0; // Alternate directions
          return (
            <motion.div
              key={membe.name}
              className="flex flex-col md:flex-row py-5 border border-gray-300 rounded-md mb-6"
              initial={{ opacity: 0, x: isEven ? -50 : 50 }} // Left for even, right for odd
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
            >
              {/* Image Section */}
              <div className="w-full flex justify-center md:w-1/2">
                <Image
                  src={membe.image}
                  alt={membe.name}
                  className="h-auto w-full  md:w-80 bg-cover  md:rounded-lg"
                />
              </div>

              {/* Member Details Section */}
              <div className="w-full md:w-1/2 p-4">
                <h1 className="text-2xl md:text-3xl font-extrabold text-gray-700 hover:text-primary-orange">
                  {membe.name}
                </h1>
                <p className="text-green-600 text-sm font-medium  py-1">
                  {membe.role}
                </p>
                <div className="flex gap-3 py-2">
                  {membe.socials.linkedin && (
                    <Link href={membe.socials.linkedin} target="_blank">
                      <FaLinkedin className="h-6 w-6 text-deep-blue hover:text-primary-orange" />
                    </Link>
                  )}
                  {membe.socials.instagram && (
                    <Link href={membe.socials.instagram} target="_blank">
                      <FaInstagram className="h-6 w-6 text-red-500 hover:text-primary-orange" />
                    </Link>
                  )}
                  {membe.socials.facebook && (
                    <Link href={membe.socials.facebook} target="_blank">
                      <FaFacebook className="h-6 w-6 text-deep-blue hover:text-primary-orange" />
                    </Link>
                  )}
                </div>
                <p className="text-gray-600 leading-7">{membe.description}</p>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* Mobile View */}
      <section className="text-center py-12 bg-white block sm:hidden">
        <h2 className="text-3xl text-gray-900 font-bold">
          Our <span className="text-primary-orange">Dedicated</span> Team
        </h2>
        <p className="text-gray-500 mt-2 max-w-xl mx-auto">
          Meet our talented professionals committed to delivering excellence.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 px-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 flex flex-col items-center shadow-lg"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={96}
                height={96}
                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
              />
              <h3 className="text-xl text-gray-900 font-semibold mt-4">
                {member.name}
              </h3>
              <p className="text-green-600 text-sm font-medium py-1">
                {member.role}
              </p>
              <p className="text-gray-500 text-center mt-2 text-sm">
                {member.description}
              </p>
              <div className="flex gap-4 mt-4">
                {member.socials.linkedin && (
                  <Link href={member.socials.linkedin} target="_blank">
                    <FaLinkedin className="text-gray-600 hover:text-blue-700 text-xl cursor-pointer" />
                  </Link>
                )}
                {member.socials.facebook && (
                  <Link href={member.socials.facebook} target="_blank">
                    <FaFacebook className="text-gray-600 hover:text-blue-600 text-xl cursor-pointer" />
                  </Link>
                )}
                {member.socials.instagram && (
                  <Link href={member.socials.instagram} target="_blank">
                    <FaInstagram className="text-gray-600 hover:text-pink-600 text-xl cursor-pointer" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
