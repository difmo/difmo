"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import logo from "../assets/svgfiles/blacklogo1.svg";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu toggle
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false); // Mobile dropdown toggle
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown for desktop

  // Close dropdown when a link is clicked
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
    <header className="bg-white shadow-md transition-shadow duration-300 top-0 left-0 w-full z-50 fixed">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src={logo}
              alt="Company Logo"
              width={24}
              height={16}
              className="w-auto h-12 object-cover"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-3">
          <Link href="/" className="text-gray-900 font-bold hover:text-primary-orange">
            Home
          </Link>

          {/* Services Dropdown (Desktop) */}
          <div className="relative group">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)} // Handle click for mobile
              className="text-gray-700 font-bold hover:text-primary-orange flex items-center"
            >
              Services
              <svg
                className="w-4 h-4 ml-1"
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
                ></path>
              </svg>
            </button>

            {/* Dropdown visible on hover for desktop and toggle for mobile */}
            <div
              className={`absolute right-0 mt-0 w-72 pt-4 bg-white shadow-lg rounded-md z-10 opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300 ease-in-out transform group-hover:scale-100 scale-95 ${
                isDropdownOpen ? "opacity-100 visible" : "invisible"
              }`}
            >
              <ul className="py-2">
                <li>
                  <Link
                    href="/web-development"
                    onClick={closeDropdown} // Close dropdown on link click
                    className="block px-4 py-2 text-gray-700 font-bold hover:bg-gray-100 hover:text-primary-orange"
                  >
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/mobile-development"
                    onClick={closeDropdown}
                    className="block px-4 py-2 text-gray-700 font-bold hover:bg-gray-100 hover:text-primary-orange"
                  >
                    Mobile Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ecommerce-development"
                    onClick={closeDropdown}
                    className="block px-4 py-2 text-gray-700 font-bold hover:bg-gray-100 hover:text-primary-orange"
                  >
                    E-Commerce Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/software-maintenance"
                    onClick={closeDropdown}
                    className="block px-4 py-2 text-gray-700 font-bold hover:bg-gray-100 hover:text-primary-orange"
                  >
                    Software Maintenance Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/software-testing"
                    onClick={closeDropdown}
                    className="block px-4 py-2 text-gray-700 font-bold hover:bg-gray-100 hover:text-primary-orange"
                  >
                    Software Testing Services
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <Link href="/about" className="text-gray-700 font-bold hover:text-primary-orange">
            About Us
          </Link>
          <Link href="/contact-us" className="text-gray-700 font-bold hover:text-primary-orange">
            Contact Us
          </Link>
          <Link href="/portfolio" className="text-gray-700 font-bold hover:text-primary-orange">
            Portfolio
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <div className="flex flex-col p-4 space-y-2">
            <Link href="/" className="text-gray-700 hover:text-primary-orange">
              Home
            </Link>

            {/* Services Dropdown (Mobile) */}
            <div>
              <button
                className="text-gray-700 hover:text-primary-orange w-full text-left"
                onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
              >
                Services
              </button>
              {isMobileDropdownOpen && (
                <div className="ml-4">
                  <Link
                    href="/web-development"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary-orange"
                  >
                    Web Development
                  </Link>
                  <Link
                    href="/mobile-development"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary-orange"
                  >
                    Mobile Development
                  </Link>

                  <Link
                    href="/ecommerce-development"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary-orange"
                  >
                    E-Commerce Development
                  </Link>
                  <Link
                    href="/software-maintenance"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary-orange"
                  >
                    Software Maintenance Services
                  </Link>

                  <Link
                    href="/software-testing"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary-orange"
                  >
                    Software Testing Services
                  </Link>
                </div>
              )}
            </div>

            <Link href="/about" className="text-gray-700 hover:text-primary-orange">
              About Us
            </Link>
            <Link href="/contact-us" className="text-gray-700 hover:text-primary-orange">
              Contact Us
            </Link>
            <Link href="/portfolio" className="text-gray-700 hover:text-primary-orange">
              Portfolio
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;


// "use client";
// import Image from "next/image";
// import React, { useState } from "react";
// import logo from "../assets/svgfiles/blacklogo1.svg";
// import Link from "next/link";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
//   const [isMobileSubmenuOpen, setIsMobileSubmenuOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   // Toggle dropdown visibility on click for mobile
//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   // Close dropdown when a link is clicked
//   const closeDropdown = () => {
//     setIsDropdownOpen(false);
//   };
//   return (
//     <header className="bg-white shadow-md transition-shadow duration-300 top-0 left-0 w-full z-50 fixed">
//       <div className="container mx-auto flex justify-between items-center py-4 px-4">
//         {/* Logo */}
//         <div className="flex items-center">
//           <Link href="/">
//             <Image
//               src={logo}
//               alt="Company Logo"
//               width={24}
//               height={16}
//               className="w-auto h-12 object-cover"
//             />
//           </Link>
//         </div>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex space-x-3">
//           <Link
//             href="/"
//             className="text-gray-900 font-bold hover:text-primary-orange"
//           >
//             Home
//           </Link>
//           <div className="relative group">
//       {/* Services button to toggle dropdown */}
//       <button
//         onClick={toggleDropdown} // Handle click for mobile
//         className="text-gray-700 font-bold hover:text-primary-orange flex items-center"
//       >
//         Services
//         <svg
//           className="w-4 h-4 ml-1"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M19 9l-7 7-7-7"
//           ></path>
//         </svg>
//       </button>

//       {/* Dropdown: visible on hover for desktop, toggle for mobile */}
//       {(isDropdownOpen || window.innerWidth >= 768) && ( // Handle mobile click and desktop hover
//         <div className="absolute right-0 mt-0 w-72 pt-4 bg-white shadow-lg rounded-md z-10 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-300 ease-in-out transform group-hover:scale-100 scale-95">
//           <ul className="py-2">
//             <li>
//               <Link
//                 href="/web-development"
//                 onClick={closeDropdown} // Close dropdown on link click
//                 className="block px-4 py-2 text-gray-700 font-bold hover:bg-gray-100 hover:text-primary-orange"
//               >
//                 Web Development
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/mobile-development"
//                 onClick={closeDropdown} // Close dropdown on link click
//                 className="block px-4 py-2 text-gray-700 font-bold hover:bg-gray-100 hover:text-primary-orange"
//               >
//                 Mobile Development
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/ecommerce-development"
//                 onClick={closeDropdown} // Close dropdown on link click
//                 className="block px-4 py-2 text-gray-700 font-bold hover:bg-gray-100 hover:text-primary-orange"
//               >
//                 E-Commerce Development
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/software-maintenance"
//                 onClick={closeDropdown} // Close dropdown on link click
//                 className="block px-4 py-2 text-gray-700 font-bold hover:bg-gray-100 hover:text-primary-orange"
//               >
//                 Software Maintenance Services
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/software-testing"
//                 onClick={closeDropdown} // Close dropdown on link click
//                 className="block px-4 py-2 text-gray-700 font-bold hover:bg-gray-100 hover:text-primary-orange"
//               >
//                 Software Testing Services
//               </Link>
//             </li>
//           </ul>
//         </div>
//       )}
//     </div>
//           {/* Services Dropdown (Desktop) */}
//           <div className="relative group">
//             <Link
//               href="#"
//               className="text-gray-700 font-bold hover:text-primary-orange flex items-center"
//             >
//               Services
//               <svg
//                 className="w-4 h-4 ml-1"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M19 9l-7 7-7-7"
//                 ></path>
//               </svg>
//             </Link>

//             {/* Dropdown */}
//             <div className="absolute right-0 mt-0 w-72 pt-4 bg-white shadow-lg rounded-md z-10 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-300 ease-in-out transform group-hover:scale-100 scale-95">
//               <ul className="py-2">
//                 <li>
//                   <Link
//                     href="/web-development"
//                     className="block px-4 py-2 text-gray-700 font-bold hover:bg-gray-100 hover:text-primary-orange"
//                   >
//                     Web Development
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/mobile-development"
//                     className="block px-4 py-2 text-gray-700 font-bold hover:bg-gray-100 hover:text-primary-orange"
//                   >
//                     Mobile Development
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/ecommerce-development"
//                     className="block px-4 py-2 text-gray-700 font-bold hover:bg-gray-100 hover:text-primary-orange"
//                   >
//                     E-Commerce Development
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/software-maintenance"
//                     className="block px-4 py-2 text-gray-700 font-bold hover:bg-gray-100 hover:text-primary-orange"
//                   >
//                     Software Maintenance Services
//                   </Link>
//                 </li>
//                 <li></li>
//                 <li>
//                   <Link
//                     href="/software-testing"
//                     className="block px-4 py-2 text-gray-700 font-bold hover:bg-gray-100 hover:text-primary-orange"
//                   >
//                     Software Testing Services
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           <Link
//             href="/about"
//             className="text-gray-700 font-bold hover:text-primary-orange"
//           >
//             About Us
//           </Link>
//           <Link
//             href="/contact-us"
//             className="text-gray-700 font-bold hover:text-primary-orange"
//           >
//             Contact Us
//           </Link>
//           <Link
//             href="/portfolio"
//             className="text-gray-700 font-bold hover:text-primary-orange"
//           >
//             Portfolio
//           </Link>
//         </nav>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-gray-700"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           aria-expanded={isMenuOpen}
//           aria-label="Toggle menu"
//         >
//           {isMenuOpen ? "✖" : "☰"}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <nav className="md:hidden bg-white shadow-md">
//           <div className="flex flex-col p-4 space-y-2">
//             <Link href="/" className="text-gray-700 hover:text-primary-orange">
//               Home
//             </Link>

//             {/* Services Dropdown (Mobile) */}
//             <div>
//               <button
//                 className="text-gray-700 hover:text-primary-orange w-full text-left"
//                 onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
//               >
//                 Services
//               </button>
//               {isMobileDropdownOpen && (
//                 <div className="ml-4">
//                   <Link
//                     href="/web-development"
//                     className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary-orange"
//                   >
//                     Web Development
//                   </Link>
//                   <Link
//                     href="/mobile-development"
//                     className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary-orange"
//                   >
//                     Mobile Development
//                   </Link>

//                   <Link
//                     href="/ecommerce-development"
//                     className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary-orange"
//                   >
//                     E-Commerce Development
//                   </Link>
//                   <Link
//                     href="/software-maintenance"
//                     className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary-orange"
//                   >
//                     Software Maintenance Services
//                   </Link>

//                   <Link
//                     href="/software-testing"
//                     className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary-orange"
//                   >
//                     Software Testing Services
//                   </Link>

//                   {/* Digital Marketing Submenu (Mobile) */}
//                 </div>
//               )}
//             </div>

//             <Link
//               href="/about"
//               className="text-gray-700 hover:text-primary-orange"
//             >
//               About Us
//             </Link>
//             <Link
//               href="/contact-us"
//               className="text-gray-700 hover:text-primary-orange"
//             >
//               Contact Us
//             </Link>
//             <Link
//               href="/portfolio"
//               className="text-gray-700 hover:text-primary-orange"
//             >
//               Portfolio
//             </Link>
//           </div>
//         </nav>
//       )}
//     </header>
//   );
// };

// export default Header;
