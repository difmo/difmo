import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
// Use the correct public folder image or import properly
import primary from "../../../public/pritam.png";

const teamMembers = [
  {
    name: "Er.Dinesh Kumar",
    image: primary, // Correct usage with imported image
    description:
      "As a Software Developer with a strong foundation in React Native, Flutter, and Node.js, I specialize in building high-performance mobile and web applications. With a passion for creating intuitive user experiences, I have honed my expertise in developing scalable and maintainable code for cross-platform applications. My ability to seamlessly integrate cutting-edge technologies ensures that the software I develop is not only functional but also optimized for speed and efficiency. I am eager to specialize in databases, particularly NoSQL, MongoDB, and Firebase.",
    socials: {
      linkedin: "https://www.linkedin.com",
      instagram: "https://www.instagram.com",
      facebook: "https://www.facebook.com",
    },
  },
  {
    name: "Er.Pritam Sharma",
    image: primary, // Correct usage with imported image
    description:
      "As a Software Developer with a strong foundation in React Native, Flutter, and Node.js, I specialize in building high-performance mobile and web applications. With a passion for creating intuitive user experiences, I have honed my expertise in developing scalable and maintainable code for cross-platform applications. My ability to seamlessly integrate cutting-edge technologies ensures that the software I develop is not only functional but also optimized for speed and efficiency. I am eager to specialize in databases, particularly NoSQL, MongoDB, and Firebase.",
    socials: {
      linkedin: "https://www.linkedin.com",
      instagram: "https://www.instagram.com",
      facebook: "https://www.facebook.com",
    },
  },
  {
    name: "Er.Vimalraj",
    image: primary, // Correct usage with imported image
    description:
      "As a Software Developer with a strong foundation in React Native, Flutter, and Node.js, I specialize in building high-performance mobile and web applications. With a passion for creating intuitive user experiences, I have honed my expertise in developing scalable and maintainable code for cross-platform applications. My ability to seamlessly integrate cutting-edge technologies ensures that the software I develop is not only functional but also optimized for speed and efficiency. I am eager to specialize in databases, particularly NoSQL, MongoDB, and Firebase.",
    socials: {
      linkedin: "https://www.linkedin.com",
      instagram: "https://www.instagram.com",
      facebook: "https://www.facebook.com",
    },
  },
  {
    name: "Er.Aman Kumar",
    image: primary, // Correct usage with imported image
    description:
      "As a Software Developer with a strong foundation in React Native, Flutter, and Node.js, I specialize in building high-performance mobile and web applications. With a passion for creating intuitive user experiences, I have honed my expertise in developing scalable and maintainable code for cross-platform applications. My ability to seamlessly integrate cutting-edge technologies ensures that the software I develop is not only functional but also optimized for speed and efficiency. I am eager to specialize in databases, particularly NoSQL, MongoDB, and Firebase.",
    socials: {
      linkedin: "https://www.linkedin.com",
      instagram: "https://www.instagram.com",
      facebook: "https://www.facebook.com",
    },
  },
  {
    name: "Amar Maurya",
    image: primary, // Correct usage with imported image
    description:
      "As a Software Developer with a strong foundation in React Native, Flutter, and Node.js, I specialize in building high-performance mobile and web applications. With a passion for creating intuitive user experiences, I have honed my expertise in developing scalable and maintainable code for cross-platform applications. My ability to seamlessly integrate cutting-edge technologies ensures that the software I develop is not only functional but also optimized for speed and efficiency. I am eager to specialize in databases, particularly NoSQL, MongoDB, and Firebase.",
    socials: {
      linkedin: "https://www.linkedin.com",
      instagram: "https://www.instagram.com",
      facebook: "https://www.facebook.com",
    },
  },

  // Add more team members here if needed
];

export default function TeamSection() {
  return (
    <div className="py-6 sm:mx-8 lg:mx-16">
      <h1 className="text-3xl md:text-5xl font-extrabold py-5 text-center text-deep-blue">
        Meet Our Team
      </h1>
      {teamMembers.map((member) => (
        <div className=" flex py-5 border border-gray-300 rounded-md mb-6">
          {/* Image Section */}
          <div className="w-1/2 flex justify-center">
            <Image
              src={member.image}
              alt={member.name}
              width={320}
              height={320}
              className="h-80 w-80 object-cover rounded-lg"
            />
          </div>

          {/* Member Details Section */}
          <div className="w-1/2 px-4">
            <h1 className="text-3xl font-extrabold text-gray-700">
              {member.name}
            </h1>
            <div className="flex gap-3 py-4">
              <Link href={member.socials.linkedin} target="_blank">
                <FaLinkedin className="h-10 w-10 text-deep-blue hover:text-primary-orange" />
              </Link>
              <Link href={member.socials.instagram} target="_blank">
                <FaInstagram className="h-10 w-10 text-red-500 hover:text-primary-orange" />
              </Link>
              <Link href={member.socials.facebook} target="_blank">
                <FaFacebook className="h-10 w-10 text-deep-blue hover:text-primary-orange" />
              </Link>
            </div>
            <p className="text-gray-600 leading-7">{member.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
