import React from "react";
const page = () => {
  <div className="bg-white p-4 shadow rounded">
    <h2 className="font-semibold text-black">Budget Overview</h2>
    <div className="mt-4 flex justify-center">
      {/* <PieChart width={200} height={200}>
        <Pie
          data={budgetData}
          cx="50%"
          cy="50%"
          outerRadius={60}
          fill="#8884d8"
          dataKey="value"
          label
        >
          {budgetData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart> */}
    </div>
  </div>;
  
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white p-6 shadow-md rounded-lg">
        <h1 className="text-2xl font-bold text-black">Enterprise Mobile App Development</h1>
        <p className="text-gray-600">Started: Jan 15, 2024 - Due: Dec 31, 2024</p>

        <div className="grid grid-cols-3 gap-6 mt-6">
          <div className="bg-white p-4 shadow rounded">
            <h2 className="font-semibold text-black">Project Progress</h2>
            <div className="mt-2">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-black h-2.5 rounded-full" style={{ width: "100%" }}></div>
              </div>
              <p className="mt-2 text-gray-600">100%</p>
            </div>
          </div>
         






          <div className="bg-white p-4 shadow rounded">
            <h2 className="font-semibold text-black">Budget Overview</h2>
            <div className="mt-4 flex justify-center">[Pie Chart Placeholder]</div>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <h2 className="font-semibold text-black">Team Performance</h2>
            <div className="mt-4 flex justify-center">[Line Chart Placeholder]</div>
          </div>
        </div>

       <div className="mt-6 bg-white p-4 shadow rounded">
          <h2 className="font-semibold text-black">Milestone Timeline</h2>
          <ul className="mt-4">
            <li className="mb-2 text-black">
              ✅ <strong>Project Kickoff</strong>
              <p className="text-gray-600">Completed on January 15, 2025</p>
            </li>
            <li className="mb-2 text-black">
              ✅ <strong>Design Phase</strong>
              <p className="text-gray-600">Completed on March 25, 2025</p>
            </li>
            <li className="mb-2 text-black">
              ✅ <strong>Development Phase</strong>
              <p className="text-gray-600">Completed on December 15, 2025 </p>
            </li>
          </ul>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-6">
          <div className="bg-white p-4 shadow rounded">
            <h2 className="font-semibold text-black">Recent Updates</h2>
            <ul className="mt-4 text-gray-600">
              <li> New feature branch created - 2 hours ago</li>
              <li> UI Design Review completed - Yesterday</li>
              <li> Project documentation updated - 2 days ago</li>
            </ul>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <h2 className="font-semibold text-black">Risk Assessment</h2>
            <ul className="mt-4">
              <li className="text-gray-600">🔴 High - Resource availability</li>
              <li className="text-gray-600">🟡 Medium - Technical complexity</li>
              <li className="text-gray-600">🟢 Low - Budget overrun</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;


// import Image from "next/image";
// import { projects } from "../../component/projects";
// import Link from "next/link";

// export async function generateStaticParams() {
//   const paths = projects.map((project) => ({
//     id: project.id.toString(),
//   }));

//   return paths.map((params) => ({
//     params,
//   }));
// }

// const ProjectDetails = ({ params }) => {
//   const { id } = params;
//   const project = projects.find((proj) => proj.id.toString() === id);

//   if (!project) {
//     return (
//       <p className="mt-10 text-xl text-center text-gray-700">
//         Project not found
//       </p>
//     );
//   }

//   return (
//     <div className="container px-6 py-12 mx-auto">
//       {/* Header Section */}
//       <div className="mb-8 text-center">
//         <h1 className="text-4xl font-extrabold text-gray-800 sm:text-5xl">
//           {project.title}
//         </h1>
//         <p className="mt-4 text-lg text-gray-600">
//           Discover the details of our live project
//         </p>
//       </div>

//       {/* Content Section */}
//       <div className="flex flex-col items-center gap-8 p-6 bg-white lg:p-12">
//         {/* Project Image */}
//         <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
//           <Image
//             src={project.image  }
//             alt={project.title}
//             layout="fill"
//             objectFit="contain"
//             className="transition-transform transform rounded-lg hover:scale-105"
//           />
//         </div>

//         {/* Project Details */}
//         <div className="text-center">
//           <p className="text-lg leading-relaxed text-gray-700">
//             {project.description}
//           </p>
//         </div>

//         {/* Buttons Section */}
//         <div className="flex w-full gap-4 sm:flex-row sm:gap-8 sm:justify-center">
//           {project.link && (
//             <Link href={project.link}>
//               <button
//                 className="px-6 py-3 font-semibold text-white transition-transform rounded-lg shadow-md bg-gradient-to-r from-red-500 to-primary-orange hover:scale-105 focus:outline-none active:scale-95"
//                 aria-label={`Explore ${project.title}`}
//               >
//                 Explore Live
//               </button>
//             </Link>
//           )}
//         </div>

//         {/* Expertise Section */}
//         <div className="flex flex-col items-center justify-between w-full p-6 mt-8 space-y-4 rounded-lg shadow-lg sm:flex-row sm:space-y-0 sm:space-x-6 bg-gradient-to-r from-primary-orange to-red-800">
//           {project.link && (
//             <b className="text-xl font-extrabold text-center text-white sm:text-2xl sm:text-left">
//               Does your need match our expertise?
//             </b>
//           )}
//           <Link href="/contact-us">
//             <button
//               href="/contact-us"
//               className="flex items-center justify-center w-full px-6 py-3 space-x-2 text-lg font-semibold text-center text-white transition-all border-2 border-white rounded-lg bg-primary-orange hover:bg-red-800 sm:max-w-screen-lg sm:ml-auto focus:outline-none focus:ring-2 focus:ring-red-300"
//             >
//               <span>GET STARTED</span>
//               <svg
//                 className="w-6 h-6 text-white"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M10 6l6 6-6 6"
//                 ></path>
//               </svg>
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectDetails;
