import Image from "next/image";
import { projects } from "../../component/projects"; // Adjust the import path

// This will generate the static paths at build time
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
    return <p>Project not found</p>;
  }

  return (
    <div className="container mx-auto p-6 md:p-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Text Section */}
        <div className="flex flex-col justify-center p-6 bg-white rounded-lg shadow-lg">
          <h1 className="text-4xl font-extrabold text-gradient mb-6">
            {project.title}
          </h1>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {project.description}
          </p>

          <div className="mt-6">
            {/* Optional Call-to-Action Button */}
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative w-full h-[350px] sm:h-[250px] md:h-[300px] lg:h-[400px] mb-4 bg-gray-100 rounded-lg shadow-lg overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            layout="fill" // Ensures the image fills the parent container
            objectFit="contain" // Ensures the image covers the container maintaining aspect ratio
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
