"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import logo from "../assets/svgfiles/blacklogo1.svg";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolling ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="Difmo Logo" className="h-12 w-auto" />
        </Link>

        {/* Hamburger for mobile */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setIsMenuOpen(true)}
        >
          <HiOutlineMenu />
        </button>

        {/* Desktop Nav */}

        <nav
          className={`hidden ${
            scrolling ? "px-8 py-2" : "shadow-lg border px-8 py-2 rounded-full"
          } lg:flex items-center space-x-8 text-gray-800 font-medium`}
        >
          <HeaderLink href="/" isActive={isActive("/")}>
            Home
          </HeaderLink>
          <HeaderLink href="/about" isActive={isActive("/about")}>
            About Us
          </HeaderLink>
          <DropdownMenu
            title="Services"
            items={[
              { href: "/services/web", label: "Web Development" },
              { href: "/services/mobile", label: "Mobile Development" },
              { href: "/software-maintenance", label: "Software Maintenance" },
              { href: "/software-testing", label: "Software Testing" },
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

          {/* Icons + Get in Touch Button */}
          <div className="flex items-center space-x-4  rounded-full px-2  bg-secondary">
            <a
              href="https://wa.me/+919519202509"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white pl-2 text-2xl hover:scale-110 transition"
            >
              <FaWhatsapp />
            </a>
            <a
              href="tel:+919519202509"
              className="text-white  text-xl hover:scale-110 transition"
            >
              <FaPhoneAlt />
            </a>
            <Link
              href="/contact-us"
              className="bg-[#e00909] text-white px-4 py-2 m-1 rounded-full hover:bg-secondary border-2 border-gray-200  hover:text-white transition"
            >
              Get in touch
            </Link>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 p-6">
          <div className="flex items-center justify-between mb-6">
            <Link href="/" className="text-2xl font-bold text-[#e00909]">
              Difmo
            </Link>
            <button onClick={() => setIsMenuOpen(false)} className="text-3xl">
              <HiOutlineX />
            </button>
          </div>
          <nav className="flex flex-col gap-4 text-lg font-medium">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link href="/about" onClick={() => setIsMenuOpen(false)}>
              About Us
            </Link>
            <div>
              <span className="font-semibold">Services</span>
              <div className="ml-4 mt-2 space-y-2">
                <Link href="/services/web" onClick={() => setIsMenuOpen(false)}>
                  Web Development
                </Link>
                <Link
                  href="/services/mobile"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Mobile Development
                </Link>
                <Link
                  href="/software-maintenance"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Software Maintenance
                </Link>
                <Link
                  href="/software-testing"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Software Testing
                </Link>
              </div>
            </div>
            <Link href="/projects" onClick={() => setIsMenuOpen(false)}>
              Projects
            </Link>
            <Link href="/blogs" onClick={() => setIsMenuOpen(false)}>
              Blogs
            </Link>
            <Link href="/careers" onClick={() => setIsMenuOpen(false)}>
              Careers
            </Link>
            <Link
              href="/contact-us"
              onClick={() => setIsMenuOpen(false)}
              className="bg-[#e00909] text-white px-4 py-2 rounded-lg text-center"
            >
              Get in touch
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

const HeaderLink = ({ href, isActive, children }) => (
  <Link
    href={href}
    className={`relative hover:text-[#e00909] transition ${
      isActive ? "font-semibold text-[#e00909]" : ""
    }`}
  >
    {children}
    {isActive && (
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#e00909]" />
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
      <button className="flex items-center hover:text-[#e00909] transition">
        {title}
        <svg
          className="ml-1 w-4 h-4 transition-transform transform"
          style={{ transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0)" }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M19 9l-7 7-7-7"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      </button>
      {isDropdownOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-white border rounded-lg shadow-lg py-2 z-50 transition-all duration-300">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-5 py-2 hover:bg-gray-100 hover:text-[#e00909] transition"
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
