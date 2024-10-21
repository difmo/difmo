import Image from "next/image";
import JaiJyotish from "../assets/ourprojects/1.png";
import Genzoalpha from "../assets/ourprojects/2.png";
import sakshamstudy from "../assets/ourprojects/3.png";
import Pragaticoaching from "../assets/ourprojects/4.png";
import Bhatiasportsv2 from "../assets/ourprojects/5.png";
import Bhatiasportsv1 from "../assets/ourprojects/6.png";
import Agape from "../assets/ourprojects/7.png";
import Jmart from "../assets/ourprojects/8.png";
import Jstore from "../assets/ourprojects/9.png";
import JDelivery from "../assets/ourprojects/10.png";
import Shiksha from "../assets/ourprojects/11.png";
import skps from "../assets/ourprojects/12.png";
import VanService from "../assets/ourprojects/13.png";
import saptrishi from "../assets/ourprojects/14.png";
import sikshaErp from "../assets/ourprojects/15.png";
import Buzride from "../assets/ourprojects/16.png";
import RKGym from "../assets/ourprojects/17.png";
import RKGymStaff from "../assets/ourprojects/18.png";
import CarWash from "../assets/ourprojects/19.png";
import Link from "next/link";

const ManyProjects = ({ limit }) => {
  const projects = [
    {
      title: "Car washing Android & iOS",
      id: 1,
      description:
        "Streamlined booking for expert car detailing. Schedule services, manage bookings, and ensure your vehicle shines.",
      image: CarWash,
    },
    {
      title: "Shree Hari Medical Store",
      id: 2,
      description:
        "Shree Hari Medical Store: Modern shopping mall hosting diverse stores, including a prominent medical outlet.",
      image: JaiJyotish, // Assuming this is the correct image
    },
    {
      id: 3,
      title: "RK Fitness Android & iOS",
      description:
        "A tranquil Fitness studio app fostering mindfulness and exercise practices, designed for serene wellness experiences.",
      image: RKGym,
    },
    {
      id: 4,
      title: "RK Gym Staff Management",
      description:
        "An efficient app for managing gym staff and schedules, ensuring smooth operations and enhanced communication.",
      image: RKGymStaff,
    },
    {
      id: 5,
      title: "Buzride",
      description:
        "A seamless platform for ride-sharing, connecting drivers and passengers with ease.",
      image: Buzride,
    },
    {
      id: 6,
      title: "Siksha ERP",
      description:
        "An integrated ERP solution for educational institutions, enhancing management and operational efficiency.",
      image: sikshaErp,
    },
    {
      id: 7,
      title: "Saptrishi",
      description:
        "A comprehensive platform offering various educational services and resources.",
      image: saptrishi,
    },
    {
      id: 8,
      title: "Van Service",
      description:
        "A reliable transportation service for schools, ensuring safe and timely commutes.",
      image: VanService,
    },
    {
      id: 9,
      title: "Shiksha",
      description:
        "An educational app providing a range of learning resources and tools for students.",
      image: Shiksha,
    },
    {
      id: 10,
      title: "Jmart",
      description:
        "A modern e-commerce platform offering a variety of products at competitive prices.",
      image: Jmart,
    },
    {
      id: 11,
      title: "Jstore",
      description:
        "A user-friendly online store for shopping, with diverse categories and fast delivery options.",
      image: Jstore,
    },
    {
      id: 12,
      title: "JDelivery",
      description:
        "An efficient delivery app ensuring timely transport of goods to customers.",
      image: JDelivery,
    },

    {
      id: 13,
      title: "Bhatia Sports v2",
      description:
        "An engaging platform for sports enthusiasts to stay updated with news and events.",
      image: Bhatiasportsv2,
    },
    {
      id: 14,
      title: "Bhatia Sports v1",
      description:
        "A revamped version of the sports app with enhanced features and user experience.",
      image: Bhatiasportsv1,
    },
    {
      id: 15,
      title: "Pragati Coaching",
      description:
        "An educational platform providing coaching for competitive exams and personal development.",
      image: Pragaticoaching,
    },
    {
      id: 16,
      title: "Saksham Study",
      description:
        "A comprehensive study platform offering resources and tools for academic success.",
      image: sakshamstudy,
    },
    {
      id: 17,
      title: "Genzoalpha",
      description:
        "A modern solution for managing digital content and user engagement effectively.",
      image: Genzoalpha,
    },
    {
      id: 18,
      title: "Jai Jyotish",
      description:
        "An astrology app offering insights and guidance for a better life.",
      image: JaiJyotish,
    },
    {
      id: 19,
      title: "SKPS",
      description:
        "A school management app streamlining administrative tasks and enhancing communication.",
      image: skps,
    },
  ];
  const displayedProjects = projects.slice(0, limit);
  return (
    <div className="bg-[#ffffff0d] p-4 sm:p-0  md:py-6  rounded-2xl">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {displayedProjects.map((project) => (
          <div
            key={project.id}
            className="bg-[#ffffff] hover:bg-warm-gray p-4 border-2 border-gray-200 rounded-xl shadow-md flex flex-col relative"
          >
            <Image
              src={project.image}
              alt={project.title}
              className="object-cover w-full mb-2 rounded-lg h-100"
            />
            <div className="flex-1 px-4">
              <h3 className="md:text-xl    text-lg font-lilita font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-deep-blue to-primary-orange ">
                {project.title}
              </h3>
              <p className="text-gray-700 text-[16px] sm:pt-2  leading-loose tracking-wide text-justify">
                {project.description.length > 65
                  ? `${project.description.slice(0, 65)}...`
                  : project.description}
              </p>

              <div className="mt-4">
                <Link
                  href={`/our-projects/${project.id}`}
                  className="absolute bottom-4 right-4 text-[#26baf6] font-semibold cursor-pointer animate-blink"
                >
                  View Detail's
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManyProjects;
