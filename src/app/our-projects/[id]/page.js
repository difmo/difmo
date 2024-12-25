import Image from "next/image";
import { projects } from "../../component/projects";
import Link from "next/link";

export async function generateStaticParams() {
  const paths = projects.map((project) => ({
    id: project.id.toString(),
  }));

  return paths.map((params) => ({
    params,
  }));
}

const ProjectDetails = ({ params }) => {
  const { id } = params;
  const project = projects.find((proj) => proj.id.toString() === id);

  if (!project) {
    return (
      <p className="mt-10 text-xl text-center text-gray-700">
        Project not found
      </p>
    );
  }

  return (
    <div className="container px-6 py-12 mx-auto">
      {/* Header Section */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Discover the details of our live project
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-center gap-8 p-6 bg-white lg:p-12">
        {/* Project Image */}
        <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            layout="fill"
            objectFit="contain"
            className="transition-transform transform rounded-lg hover:scale-105"
          />
        </div>

        {/* Project Details */}
        <div className="text-center">
          <p className="text-lg leading-relaxed text-gray-700">
            {project.description}
          </p>
        </div>

        {/* Buttons Section */}
        <div className="flex w-full gap-4 sm:flex-row sm:gap-8 sm:justify-center">
          {project.link && (
            <Link href={project.link}>
              <button
                className="px-6 py-3 font-semibold text-white transition-transform rounded-lg shadow-md bg-gradient-to-r from-red-500 to-[#EA130C] hover:scale-105 focus:outline-none active:scale-95"
                aria-label={`Explore ${project.title}`}
              >
                Explore Live
              </button>
            </Link>
          )}
        </div>

        {/* Expertise Section */}
        <div className="flex flex-col items-center w-full p-6 mt-8 space-y-4 rounded-lg shadow-lg sm:flex-row sm:space-y-0 sm:space-x-6 bg-gradient-to-r from-[#EA130C] to-red-800">
          {project.link && (
            <b className="text-xl font-extrabold text-center text-white sm:text-2xl sm:text-left">
              Does your need match our expertise?
            </b>
          )}
          <Link
          href="/contact-us"
          >
          
          <button 
          href="/contact-us"
          className="flex items-center justify-center w-full px-6 py-3 space-x-2 text-lg font-semibold text-center text-white transition-all bg-[#EA130C] border-2 border-white rounded-lg hover:bg-red-800 sm:max-w-screen-lg sm:ml-auto focus:outline-none focus:ring-2 focus:ring-red-300">
            <span>GET STARTED</span>
            <svg
              className="w-6 h-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 6l6 6-6 6"
              ></path>
            </svg>
          </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default ProjectDetails;
