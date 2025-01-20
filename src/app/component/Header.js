"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi"; // Icons for menu and close
import logo from "../assets/svgfiles/blacklogo1.svg";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const pathname = usePathname();

  // Helper to determine if a link is active
  const isActive = (path) => pathname === path;

  // Close all menus
  const closeMenu = () => {
    setIsMenuOpen(false);
    closeDropdown();
  };

  // Close desktop dropdown
  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  // Ensure dropdown is closed on resize to desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
        setIsMobileDropdownOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="sticky top-0 left-0 z-50 w-full bg-white shadow-sm">
      <div className="container flex items-center justify-between px-6 py-2 mx-auto">
        {/* Logo Section */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src={logo} alt="Difmo Logo" width={150} height={64} />
          {/* <span className="text-2xl font-semibold text-primary-orange">
            Difmo Technologies
          </span> */}
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
          <HeaderLink href="/" isActive={isActive("/")}>
            Home
          </HeaderLink>
          <HeaderLink href="/about" isActive={isActive("/about")}>
            About Us
          </HeaderLink>
          <DropdownMenu
            title="Services"
            isActive={isActive("/services")}
            closeMenu={() => setIsMenuOpen(false)}
            items={[
              { href: "/web-development", label: "Web Development" },
              { href: "/mobile-development", label: "Mobile Development" },
              {
                href: "/software-maintenance",
                label: "Software Maintenance Services",
              },
              { href: "/software-testing", label: "Software Testing Services" },
            ]}
          />

          <HeaderLink href="/projects" isActive={isActive("/projects")}>
            Projects
          </HeaderLink>
          <HeaderLink href="/blogs" isActive={isActive("/blogs")}>
            Blogs
          </HeaderLink>
          <HeaderLink href="/careers" isActive={isActive("/careers")}>
            Careers
          </HeaderLink>
          <Link
            href="/contact-us"
            className="items-center justify-center hidden h-9 px-5 space-x-2 text-white transition-colors duration-300 bg-primary-orange rounded-3xl md:flex hover:bg-[#ff8d89]"
          >
            <p>GET STARTED</p>
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

        {/* Popup Menu for Mobile */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 p-6 bg-white  text-black">
            <div className="flex items-center justify-between mb-6">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-2">
                <span className="text-2xl font-semibold text-primary-orange">
                  Difmo Technologies
                </span>
              </Link>
              {/* Close Icon */}
              <button
                className="text-3xl "
                onClick={() => setIsMenuOpen(false)}
              >
                <HiOutlineX className="text-black" />
              </button>
            </div>

            {/* Mobile Menu Links */}
            <nav className="flex flex-col space-y-6 dark:text-black">
              <Link
                href="/"
                isActive={isActive("/")}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                isActive={isActive("/about")}
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>

              <div>
                <button
                  className="flex items-center w-full text-left text-gray-700 hover:text-primary-orange"
                  onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                  aria-expanded={isMobileDropdownOpen}
                  aria-haspopup="true"
                >
                  Services
                  <svg
                    className="w-4 h-4 ml-1 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      transform: isMobileDropdownOpen
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>

                {isMobileDropdownOpen && (
                  <div className="ml-4">
                    <Link
                      href="/web-development"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary-orange"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Web Development
                    </Link>
                    <Link
                      href="/mobile-development"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary-orange"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Mobile Development
                    </Link>
                    <Link
                      href="/software-maintenance"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary-orange"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Software Maintenance Services
                    </Link>
                    <Link
                      href="/software-testing"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary-orange"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Software Testing Services
                    </Link>
                  </div>
                )}
              </div>
              <Link
                href="/projects"
                isActive={isActive("/projects")}
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/blogs"
                isActive={isActive("/blogs")}
                onClick={() => setIsMenuOpen(false)}
              >
                Blogs
              </Link>
              <Link
                href="/careers"
                isActive={isActive("/careers")}
                onClick={() => setIsMenuOpen(false)}
              >
                Careers
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
      isActive ? " font-semibold" : ""
    }`}
  >
    {children}
    {isActive && (
      <span className="absolute left-0 w-full h-0.5  bg-primary-orange -bottom-1" />
    )}
  </Link>
);

const DropdownMenu = ({ title, items, closeMenu }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsDropdownOpen(true)}
      onMouseLeave={() => setIsDropdownOpen(false)}
    >
      {/* Menu Title */}
      <div className="flex items-center space-x-1 hover:text-primary-orange cursor-pointer">
        <span>{title}</span>
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
      </div>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute left-0 w-56 pt-3 bg-white rounded-md shadow-lg top-full">
          <ul className="py-2">
            {items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={closeMenu}
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-primary-orange"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
