import Image from "next/image";
import { technicalBlog } from "../../component/blogss"; // Adjust the import path
import about from "../../assets/about.jpg";
import Link from "next/link";

// This will generate the static paths at build time
export async function generateStaticParams() {
  const paths = technicalBlog.map((project) => ({
    id: project.id.toString(),
  }));

  return paths.map((params) => ({
    params,
  }));
}

const ProjectDetails = ({ params }) => {
  const { id } = params;
  const project = technicalBlog.find((proj) => proj.id.toString() === id);

  if (!project) {
    return <p className="text-center text-red-500">Project not found</p>;
  }

  return (
    <>
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen">
        <Image
          src={about}
          alt="Blog Header"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center sm:px-8 md:px-16">
          <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
            {project.title}
          </h1>
          <p className="mt-2 text-lg font-medium text-orange-300 sm:text-xl lg:text-2xl">
            Discover insights and inspiration on Difmo’s web development!
          </p>
          <button
            className="px-4 py-2 mt-4 font-semibold text-white transition duration-300 ease-in-out bg-orange-600 rounded-lg sm:px-6 sm:py-3 hover:bg-orange-500"
            aria-label="Explore more blogs"
          >
            Explore More Blogs
          </button>
        </div>
      </div>

      {/* Blog Content Section */}
      <div className="container mx-auto p-6 md:p-12">
        {/* Blog Title */}
        <h2 className="md:text-4xl text-xl font-lilita mb-8 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-deep-blue to-primary-orange">
          {project.title}
        </h2>

        {/* Blog Image */}
        <div className="relative w-full h-[350px] sm:h-[250px] md:h-[300px] lg:h-[600px] mb-6 bg-gray-100 rounded-lg   overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            layout="cover"
            className="rounded-lg"
            // placeholder="blur" // Optional: Add blur placeholder for smoother loading
          />
        </div>

        <div className="flex flex-col justify-center p-6 bg-white rounded-lg shadow-lg">
  {/* Blog Text Content */}
  {/* <div className="flex flex-col justify-center p-6 bg-white rounded-lg shadow-lg"> */}
          {/* Blog Text Content */}
          <div className="leading-relaxed text-gray-700 text-lg space-y-6">
            <p className="md:text-xl text-xl font-lilita font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-deep-blue to-primary-orange ">
              <strong>{project.h11}</strong>
            </p>
            <p className="text-gray-700 text-[16px] leading-relaxed tracking-wide text-justify ">
              {project.p1}
            </p>

            <h3 className="md:text-xl text-xl font-lilita font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-deep-blue to-primary-orange ">
              1. {project.h22}
            </h3>
            <p className="text-gray-700 text-[16px] leading-relaxed tracking-wide text-justify ">
              {project.p2}
            </p>
            <p className="text-gray-700 text-[16px] leading-relaxed tracking-wide text-justify ">
              {project.p3}
            </p>

            <h3 className="md:text-xl text-xl font-lilita font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-deep-blue to-primary-orange ">
              2. {project.h33}
            </h3>
            <p className="text-gray-700 text-[16px] leading-relaxed tracking-wide text-justify ">
              {project.p4}
            </p>
            <p className="text-gray-700 text-[16px] leading-relaxed tracking-wide text-justify ">
             {project.p5}
            </p>
            <p className="text-gray-700 text-[16px] leading-relaxed tracking-wide text-justify ">
              {project.p6}
            </p>

            <h3 className="md:text-xl text-xl font-lilita font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-deep-blue to-primary-orange ">
              3. {project.h44}
            </h3>
            <p className="text-gray-700 text-[16px] leading-relaxed tracking-wide text-justify ">
             {project.p7}
            </p>
            <p className="text-gray-700 text-[16px] leading-relaxed tracking-wide text-justify ">
              {project.p8}
            </p>
            <p className="text-gray-700 text-[16px] leading-relaxed tracking-wide text-justify ">
             {project.p9}
            </p>

            <h3 className="md:text-xl text-xl font-lilita font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-deep-blue to-primary-orange ">
              4. {project.h55}
            </h3>
            <p className="text-gray-700 text-[16px] leading-relaxed tracking-wide text-justify ">
             {project.p10}
            </p>
            <p className="text-gray-700 text-[16px] leading-relaxed tracking-wide text-justify ">
            {project.p11}
            </p>

            <h3 className="md:text-xl text-xl font-lilita font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-deep-blue to-primary-orange ">
              5. {project.h66}
            </h3>
            <p className="text-gray-700 text-[16px] leading-relaxed tracking-wide text-justify ">
            {project.p12}
            </p>
            <p className="text-gray-700 text-[16px] leading-relaxed tracking-wide text-justify ">
              {project.p13}
            </p>
            <p className="text-gray-700 text-[16px] leading-relaxed tracking-wide text-justify ">
             {project.p14}
            </p>

            <h3 className="md:text-xl text-xl font-lilita font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-deep-blue to-primary-orange ">
              6. {project.h77}
            </h3>
            <p className="text-gray-700 text-[16px] leading-relaxed tracking-wide text-justify ">
              {project.p15}
            </p>
            <p className="text-gray-700 text-[16px] leading-relaxed tracking-wide text-justify ">
              {project.p16}
            </p>
            <p className="text-gray-700 text-[16px] leading-relaxed tracking-wide text-justify ">
             {project.p17}
                         </p>

            <h3 className="md:text-xl text-xl font-lilita font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-deep-blue to-primary-orange ">
              7. {project.h88}
            </h3>
            <p className="text-gray-700 text-[16px] leading-relaxed tracking-wide text-justify ">
             {project.p18}
            </p>
            <p className="text-gray-700 text-[16px] leading-relaxed tracking-wide text-justify ">
              {project.p19}
            </p>
            <p className="text-gray-700 text-[16px] leading-relaxed tracking-wide text-justify ">
              {project.p20}
            </p>

            <h3 className="md:text-xl text-xl font-lilita font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-deep-blue to-primary-orange ">
             {project.h99}
            </h3>
            <p className="text-gray-700 text-[16px] leading-relaxed tracking-wide text-justify ">
              {project.p21}
            </p>
            <p className="text-gray-700 text-[16px] leading-relaxed tracking-wide text-justify ">
              {project.p22}
            </p>
          </div>
        </div>
{/* </div> */}

      </div>
    </>
  );
};

export default ProjectDetails;
