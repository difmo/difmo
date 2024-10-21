"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // For active link detection
import logo from "../assets/svgfiles/blacklogo1.svg";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname(); // Get the current route for active styling

  // Helper function to determine active link
  const isActive = (path) => pathname === path;

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white shadow-sm">
      <div className="container flex items-center justify-between px-6 py-4 mx-auto">
        {/* Logo Section */}
        <Link href="/" className="flex items-center space-x-2">
          {/* <Image src={logo} alt="Hexad Logo" width={40} height={40} /> */}
          <span className="text-2xl font-semibold text-orange-600">Difmo Technologies</span>
        </Link>

        {/* Navigation Links */}
        <nav className="items-center hidden space-x-8 text-lg font-medium text-gray-800 md:flex">
          <HeaderLink href="/" isActive={isActive("/")}>
            Home
          </HeaderLink>
          <HeaderLink href="/about" isActive={isActive("/about")}>
            About Us
          </HeaderLink>

          {/* Dropdown with Hover */}
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="flex items-center space-x-1 hover:text-orange-600">
             
              <HeaderLink href="/services" isActive={isActive("/services")}>
              Services
          </HeaderLink>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute left-0 w-48 mt-2 bg-white rounded-md shadow-lg top-full">
                <ul className="py-2">
                  <li>
                    <Link
                       href="/web-development"
                      className="block px-4 py-2 hover:bg-gray-100 hover:text-orange-600"
                    >
                     Web Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/mobile-development"
                      className="block px-4 py-2 hover:bg-gray-100 hover:text-orange-600"
                    >
                      Mobile Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/ecommerce-development"
                      className="block px-4 py-2 hover:bg-gray-100 hover:text-orange-600"
                    >
                      E-Commerce Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/software-maintenance"
                      className="block px-4 py-2 hover:bg-gray-100 hover:text-orange-600"
                    >
                       Software Maintenance Services
                    </Link>
                  </li>

                  <li>
                    <Link
                     href="/software-testing"
                      className="block px-4 py-2 hover:bg-gray-100 hover:text-orange-600"
                    >
                       Software Testing Services
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <HeaderLink href="/portfolio" isActive={isActive("/portfolio")}>
            Products
          </HeaderLink>
          
          <HeaderLink href="/blogs" isActive={isActive("/blogs")}>
            Blogs
          </HeaderLink>
          <HeaderLink href="/careers" isActive={isActive("/careers")}>
            Careers
          </HeaderLink>
        </nav>

        {/* Email Icon */}
        <Link
          href="/contact-us"
          className="items-center justify-center hidden h-10 px-5 text-white bg-orange-600 rounded-3xl md:flex"
        >
          <p>Get Started</p>
          {/* <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 12l-4-4-4 4m8-4v8H8V8"
            />
          </svg> */}
        </Link>
      </div>
    </header>
  );
};

// Component for individual header links with active state styling
const HeaderLink = ({ href, isActive, children }) => (
  <Link
    href={href}
    className={`relative hover:text-orange-600 ${
      isActive ? "text-black font-semibold" : ""
    }`}
  >
    {children}
    {isActive && (
      <span className="absolute left-0 w-full h-0.5 bg-orange-600 -bottom-1" />
    )}
  </Link>
);

export default Header;
