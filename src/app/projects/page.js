"use client";

import { useState } from "react";
import Image from "next/image";
import { projects } from "../component/projects"; // Ensure this path is correct
import Link from "next/link";

const categories = ["All", "Web Design", "Mobile Apps", "Branding"];

export default function FeaturedProjects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <>
      <div className="bg-gray-50 py-12 px-4 md:px-10 pt-24">
        <h1 className="text-3xl font-bold text-center text-gray-900">
          Featured Projects
        </h1>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-md text-sm font-semibold ${
                selectedCategory === category
                  ? "bg-black text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white p-5 rounded-xl shadow-md">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={250}
                className="w-full h-52 bg-cover rounded-lg"
              />
              <div className="mt-4">
                <h3 className="text-sm text-gray-600">{project.category}</h3>
                <h2 className="text-lg font-bold text-gray-900">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-700">
                  {project.description.split(" ").length > 5
                    ? project.description.split(" ").slice(0, 5).join(" ") +
                      "..."
                    : project.description}
                </p>
                <Link
                  href={`/our-projects/${project.id}`} // Corrected href
                  className="inline-block mt-3 text-blue-600 font-semibold"
                >
                  View Project →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-slate-900 py-12 px-4">
        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-white text-center">
          <div className="bg-slate-700 rounded-md p-6">
            <h1 className="text-3xl font-bold">250+</h1>
            <p className="text-sm text-gray-400 mt-2">Projects Completed</p>
          </div>
          <div className="bg-slate-700 rounded-md p-6">
            <h1 className="text-3xl font-bold">8</h1>
            <p className="text-sm text-gray-400 mt-2">Years Experience</p>
          </div>
          <div className="bg-slate-700 rounded-md p-6">
            <h1 className="text-3xl font-bold">98%</h1>
            <p className="text-sm text-gray-400 mt-2">Client Satisfaction</p>
          </div>
          <div className="bg-slate-700 rounded-md p-6">
            <h1 className="text-3xl font-bold">12</h1>
            <p className="text-sm text-gray-400 mt-2">Industry Awards</p>
          </div>
        </div>
      </div>

      <div className="py-12 px-4">
        {/* Call to Action Section */}
        <div className="text-center mt-12">
          <h1 className="text-2xl font-bold text-gray-700">
            Ready to Start Your Project?
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Let's create something amazing together
          </p>
          <div className="mt-6">
            <Link
              href="/contact-us"
              className="px-8 py-3 text-lg text-white hover:text-black rounded-md bg-black hover:bg-gray-200 transition"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
