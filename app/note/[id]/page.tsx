
// "use client";

// import Link from "next/link";
// import Image from "next/image";
// // import logo from "/public/logo.png"; // Make sure this path is correct
// import { useState, useEffect } from "react";

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//         scrolled
//           ? "bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-200"
//           : "bg-white/30 backdrop-blur-md"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
//         {/* Logo + Brand */}
//         <Link href="/" className="flex items-center space-x-3">
//           <Image src='logo.svg' alt="NOTIQ Logo" width={40} height={40} />
//           <div>
//             <span className="text-xl sm:text-2xl font-bold text-indigo-700">NOTIQ</span>
//             <p className="text-xs text-indigo-400 -mt-1 hidden sm:block">Capture. Organize. Think Smarter.</p>
//           </div>
//         </Link>

//         {/* Menu Links */}
//         <div className="hidden md:flex space-x-6 items-center">
//           <Link
//             href="/features"
//             className="text-indigo-700 hover:text-purple-600 font-medium transition-colors duration-300"
//           >
//             Features
//           </Link>
//           <Link
//             href="/login"
//             className="text-indigo-700 hover:text-purple-600 font-medium transition-colors duration-300"
//           >
//             Login
//           </Link>
//           <Link
//             href="/register"
//             className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-4 py-2 rounded-full transition duration-300"
//           >
//             Get Started
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// }



"use client";

import Link from "next/link";
import Image from "next/image";
// import logo from "/public/logo.png"; // Adjust this path if needed
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/60 backdrop-blur-md shadow-md"
          : "bg-transparent backdrop-blur-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex justify-between items-center">
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center gap-3">
          <Image src='logo.svg' alt="NOTIQ Logo" width={36} height={36} />
          <div>
            <span className="text-2xl font-bold text-indigo-700">NOTIQ</span>
            <p className="text-xs text-indigo-400 -mt-1 hidden sm:block tracking-wide">Capture. Organize. Think Smarter.</p>
          </div>
        </Link>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/features"
            className="text-indigo-700 hover:text-purple-600 font-medium transition-colors"
          >
            Features
          </Link>
          <Link
            href="/login"
            className="text-indigo-700 hover:text-purple-600 font-medium transition-colors"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-full shadow transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
