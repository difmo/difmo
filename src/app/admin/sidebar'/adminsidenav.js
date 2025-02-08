"use client"; // If using Next.js App Router (pages inside app/)

import React from "react";
import { useRouter, usePathname } from "next/navigation"; // Correct import for pathname
import Link from "next/link"; // Use Next.js Link instead of react-router-dom

function Adminsidenav() {
  const router = useRouter(); // Correct way to navigate in Next.js
  const pathname = usePathname(); // Get current path

  const isActive = (path) => pathname === path;

  return (
    <div className="bg-white min-h-screen w-[12%] pt-20">
      <div className="mx-auto py-6 px-5 h-full">
        <h1 className="text-3xl w-full font-extrabold text-gray-900">Admin</h1>
        <div className="flex flex-col py-10">
          <div className="py-5 w-full">
            <Link
              href="/adminBlog"
              className={
                isActive("/adminBlog") ? "text-blue-600 font-bold" : "text-gray-700"
              }
            >
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 shadow-md">
                Add Blog
              </button>
            </Link>
          </div>
          <div className="py-5">
            <Link
              href="/Createproject"
              className={isActive("/Createproject") ? "" : "s"}
            >
              <button
                className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out shadow-md"
                // onClick={() => router.push("/adminProject")} // Correct way to navigate
              >
                Project Section
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adminsidenav;
