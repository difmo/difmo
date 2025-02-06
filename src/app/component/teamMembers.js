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
    name: "Er.Dinesh Kumar",
    image: dinesh,
    description:
      "Software Engineer with 4+ years of experience in React Native, Flutter, and cross-platform mobile app development for Android and iOS. Proficient in backend technologies including Firebase, Google Cloud, React.js, and Node.js, delivering seamless, scalable, and high-performance applications.",
    socials: {
      linkedin: "https://www.linkedin.com/in/dineshappdeveloper/",
      instagram: "https://www.instagram.com/dineshkumartlbupi/",
      facebook: "https://www.facebook.com/dineshkumartlbupi",
    },
  },
  {
    name: "Er.Pritam Sharma",
    image: pritam1,
    description:
      "Software Developer specializing in React Native, Flutter, and Node.js, with expertise in building high-performance mobile and web applications. I focus on creating scalable, maintainable, and intuitive user experiences while seamlessly integrating modern technologies. Skilled in NoSQL, MongoDB, and Firebase, I aim to optimize software for speed, efficiency, and functionality.",
    socials: {
      linkedin: "https://www.linkedin.com/in/pritamksharma/",
      instagram: "https://www.instagram.com/pritamk_sharma/",
      facebook: "",
    },
  },
  {
    name: "Er.Vimalraj",
    image: vimalraj,
    description:
      "Frontend Developer specializing in Next.js, React Native, React.js, and JavaScript. Proficient in modern UI frameworks like Tailwind CSS and Bootstrap, with strong expertise in HTML5 and API integration to create responsive, user-friendly, and dynamic web applications.",
    socials: {
      linkedin: "https://www.linkedin.com/in/vimal-raj-frontend-developer/",
      instagram: "https://www.instagram.com/vr854302/",
      facebook: "https://www.facebook.com/vimalraj.raj.5667",
    },
  },
  {
    name: "Er.Aman Kumar",
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
      <h1 className="text-3xl md:text-5xl font-extrabold py-5 text-center text-black">
        Meet Our Team
      </h1>
      {teamMembers.map((member, index) => {
        const isEven = index % 2 === 0; // Determine alternating direction
        return (
          <div
            key={member.name}
            className="flex flex-col md:flex-row py-5 border border-gray-300 rounded-md mb-6"
          >
            {/* Image Section */}
            <div className="w-full flex justify-center md:w-1/2">
              <Image
                src={member.image}
                alt={member.name}
                className="h-72 w-full md:h-[350px] md:w-80 bg-cover md:object-cover md:rounded-lg"
              />
            </div>

            {/* Member Details Section */}
            <div className="w-full md:w-1/2 p-4">
              <h1 className="text-2xl md:text-3xl font-extrabold text-gray-700 hover:text-primary-orange">
                {member.name}
              </h1>
              <div className="flex gap-3 py-4">
                {member.socials.linkedin && (
                  <Link href={member.socials.linkedin} target="_blank">
                    <FaLinkedin className="h-6 w-6 text-deep-blue hover:text-primary-orange" />
                  </Link>
                )}
                {member.socials.instagram && (
                  <Link href={member.socials.instagram} target="_blank">
                    <FaInstagram className="h-6 w-6 text-red-500 hover:text-primary-orange" />
                  </Link>
                )}
                {member.socials.facebook && (
                  <Link href={member.socials.facebook} target="_blank">
                    <FaFacebook className="h-6 w-6 text-deep-blue hover:text-primary-orange" />
                  </Link>
                )}
              </div>
              <p className="text-gray-600 leading-7">{member.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// "use client";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";
// import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
// import dinesh from "../../../public/image/dinesh.jpeg";
// import aman from "../../../public/image/aman.png";
// import amar from "../../../public/image/amar.jpg";
// import pritam1 from "../../../public/image/pritam1.png";
// import vimalraj from "../../../public/image/vimalraj.png";

// const teamMembers = [
//   {
//     name: "Er.Dinesh Kumar",
//     image: dinesh,
//     description:
//       "Software Engineer with 4+ years of experience in React Native, Flutter, and cross-platform mobile app development for Android and iOS. Proficient in backend technologies including Firebase, Google Cloud, React.js, and Node.js, delivering seamless, scalable, and high-performance applications.",
//     socials: {
//       linkedin: "https://www.linkedin.com/in/dineshappdeveloper/",
//       instagram: "https://www.instagram.com/dineshkumartlbupi/",
//       facebook: "https://www.facebook.com/dineshkumartlbupi",
//     },
//   },
//   {
//     name: "Er.Pritam Sharma",
//     image: pritam1,
//     description:
//       "Software Developer specializing in React Native, Flutter, and Node.js, with expertise in building high-performance mobile and web applications. I focus on creating scalable, maintainable, and intuitive user experiences while seamlessly integrating modern technologies. Skilled in NoSQL, MongoDB, and Firebase, I aim to optimize software for speed, efficiency, and functionality.",
//     socials: {
//       linkedin: "https://www.linkedin.com/in/pritamksharma/",
//       instagram: "https://www.instagram.com/pritamk_sharma/",
//       facebook: "",
//     },
//   },
//   {
//     name: "Er.Vimalraj",
//     image: vimalraj,
//     description:
//       "Frontend Developer specializing in Next.js, React Native, React.js, and JavaScript. Proficient in modern UI frameworks like Tailwind CSS and Bootstrap, with strong expertise in HTML5 and API integration to create responsive, user-friendly, and dynamic web applications.",
//     socials: {
//       linkedin: "https://www.linkedin.com/in/vimal-raj-frontend-developer/",
//       instagram: "https://www.instagram.com/vr854302/",
//       facebook: "https://www.facebook.com/vimalraj.raj.5667",
//     },
//   },
//   {
//     name: "Er.Aman Kumar",
//     image: aman,
//     description:
//       "Software Developer at Difmo Technologies specializing in mobile app development with React Native, Flutter, and Android. I build scalable, high-performance apps for Android and iOS, leveraging Java, Kotlin, and cross-platform frameworks.",
//     socials: {
//       linkedin: "https://www.linkedin.com/in/aman-software-developer/",
//       instagram: "https://www.instagram.com/aman13_70/",
//       facebook: "https://www.facebook.com/profile.php?id=100022683532377",
//     },
//   },
//   {
//     name: "Amar Maurya",
//     image: amar,
//     description:
//       "Software Developer at Difmo Technologies, specializing in React.js, Next.js, Node.js, Express.js, Google Cloud, Firebase, and MongoDB. Proficient in developing scalable, modern web applications and backend solutions, leveraging cutting-edge technologies to deliver exceptional software products.",
//     socials: {
//       linkedin: "https://www.linkedin.com/in/amar-maurya1234/",
//       instagram: "https://www.instagram.com/amarmaurya_official/",
//       facebook: "https://www.facebook.com/profile.php?id=100019601992354",
//     },
//   },
// ];

// export default function TeamSection() {
//   return (
//     <div className="py-6 px-4 md:px-10">
//       <h1 className="text-3xl md:text-5xl font-extrabold py-5 text-center text-black">
//         Meet Our Team
//       </h1>
//       {teamMembers.map((member, index) => {
//         const isEven = index % 2 === 0; // Determine alternating direction
//         return (
//           <motion.div
//             key={member.name}
//             className="flex flex-col md:flex-row py-5 border border-gray-300 rounded-md mb-6"
//             initial={{ opacity: 0, x: isEven ? -50 : 50 }} // Left for even, right for odd
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
//             viewport={{ once: true }}
//           >
//             {/* Image Section */}
//             <div className="w-full flex justify-center md:w-1/2">
//               <Image
//                 src={member.image}
//                 alt={member.name}
//                 className="h-72 w-full md:h-[350px] md:w-80 bg-cover md:object-cover md:rounded-lg"
//               />
//             </div>

//             {/* Member Details Section */}
//             <div className="w-full md:w-1/2 p-4">
//               <h1 className="text-2xl md:text-3xl font-extrabold text-gray-700 hover:text-primary-orange">
//                 {member.name}
//               </h1>
//               <div className="flex gap-3 py-4">
//                 {member.socials.linkedin && (
//                   <Link href={member.socials.linkedin} target="_blank">
//                     <FaLinkedin className="h-6 w-6 text-deep-blue hover:text-primary-orange" />
//                   </Link>
//                 )}
//                 {member.socials.instagram && (
//                   <Link href={member.socials.instagram} target="_blank">
//                     <FaInstagram className="h-6 w-6 text-red-500 hover:text-primary-orange" />
//                   </Link>
//                 )}
//                 {member.socials.facebook && (
//                   <Link href={member.socials.facebook} target="_blank">
//                     <FaFacebook className="h-6 w-6 text-deep-blue hover:text-primary-orange" />
//                   </Link>
//                 )}
//               </div>
//               <p className="text-gray-600 leading-7">{member.description}</p>
//             </div>
//           </motion.div>
//         );
//       })}
//     </div>
//   );
// }
