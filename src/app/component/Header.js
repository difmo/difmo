"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import logo from "../assets/svgfiles/blacklogo1.svg";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => pathname === path;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
        setIsMobileDropdownOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-60 md:px-20 lg:px-20 transition-all duration-300 ${
        scrolling ? "bg-white shadow" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between px-6 py-2 mx-auto">
        {/* Logo Section */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src={logo}
            alt="Difmo Logo"
            className="w-auto h-10 md:h-10 bg-cover"
          />
        </Link>

        {/* Hamburger Icon */}
        <button
          className="text-2xl dark:text-black lg:hidden"
          onClick={() => setIsMenuOpen(true)}
        >
          <HiOutlineMenu />
        </button>

        {/* Desktop Navigation */}
        <nav className="items-center hidden space-x-8 text-sm font-medium text-gray-800 lg:flex">
          <HeaderLink href="/" isActive={isActive("/")}>Home</HeaderLink>
          <HeaderLink href="/about" isActive={isActive("/about")}>About Us</HeaderLink>

          <DropdownMenu
            title="Services"
            items={[
              { href: "/services/web", label: "Web Development" },
              { href: "/services/mobile", label: "Mobile Development" },
              { href: "/software-maintenance", label: "Software Maintenance Services" },
              { href: "/software-testing", label: "Software Testing Services" },
            ]}
          />

          <HeaderLink href="/projects" isActive={isActive("/projects")}>Projects</HeaderLink>
          <HeaderLink href="/blogs" isActive={isActive("/blogs")}>Blogs</HeaderLink>
          <HeaderLink href="/careers" isActive={isActive("/careers")}>Careers</HeaderLink>

          <Link
            href="/contact-us"
            className="items-center justify-center hidden h-10 px-5 space-x-2 text-white hover:text-black transition-colors duration-300 bg-[#e00909] rounded-xl md:flex hover:bg-slate-200"
          >
            <p>Get in touch</p>
            <svg
              className="w-5 h-5 animate-bounce-right"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h14m-6-6l6 6-6 6"
              />
            </svg>
          </Link>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 p-6 bg-white text-black">
            <div className="flex items-center justify-between mb-6">
              <Link href="/" className="text-2xl font-semibold text-primary-orange">
                Difmo Technologies
              </Link>
              <button className="text-3xl" onClick={() => setIsMenuOpen(false)}>
                <HiOutlineX />
              </button>
            </div>

            <nav className="flex flex-col space-y-6">
              <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link href="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link>

              <div>
                <button
                  className="flex items-center w-full text-left text-gray-700 hover:text-primary-orange"
                  onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                >
                  Services
                  <svg
                    className="w-4 h-4 ml-1 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{
                      transform: isMobileDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isMobileDropdownOpen && (
                  <div className="ml-4 mt-2">
                    <Link href="/services/web" onClick={() => setIsMenuOpen(false)}>
                      Web Development
                    </Link>
                    <Link href="/services/mobile" onClick={() => setIsMenuOpen(false)}>
                      Mobile Development
                    </Link>
                    <Link href="/software-maintenance" onClick={() => setIsMenuOpen(false)}>
                      Software Maintenance Services
                    </Link>
                    <Link href="/software-testing" onClick={() => setIsMenuOpen(false)}>
                      Software Testing Services
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/projects" onClick={() => setIsMenuOpen(false)}>Projects</Link>
              <Link href="/blogs" onClick={() => setIsMenuOpen(false)}>Blogs</Link>
              <Link href="/careers" onClick={() => setIsMenuOpen(false)}>Careers</Link>
              <Link
                href="/contact-us"
                className="inline-block mt-4 text-center bg-[#e00909] text-white px-5 py-2 rounded-xl"
                onClick={() => setIsMenuOpen(false)}
              >
                Get in touch
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

const HeaderLink = ({ href, isActive, children }) => (
  <Link
    href={href}
    className={`relative hover:text-primary-orange ${
      isActive ? "font-semibold" : ""
    }`}
  >
    {children}
    {isActive && (
      <span className="absolute left-0 w-full h-0.5 bg-primary-orange -bottom-1" />
    )}
  </Link>
);

const DropdownMenu = ({ title, items }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsDropdownOpen(true)}
      onMouseLeave={() => setIsDropdownOpen(false)}
    >
      <button className="flex items-center hover:text-primary-orange">
        {title}
        <svg
          className="w-4 h-4 ml-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isDropdownOpen && (
        <div className="absolute left-0 w-56 mt-2 bg-white shadow-lg border rounded-md">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary-orange"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
