

"use client";

import Link from "next/link";
import Image from "next/image";
// import logo from "/public/logo.png"; // Adjust the path if needed
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/60 backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex justify-between items-center">
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center gap-3">
          <Image src='logo.svg' alt="NOTIQ Logo" width={36} height={36} />
          <div>
            <span className="text-2xl font-bold text-yellow-300">NOTIQ</span>
            <p className="text-xs text-white/90 -mt-1 hidden sm:block tracking-wide">
              Capture. Organize. Think Smarter.
            </p>
          </div>
        </Link>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/features"
            className="text-white/90 hover:text-yellow-300 font-medium transition"
          >
            Features
          </Link>
          <Link
            href="/login"
            className="text-white/90 hover:text-yellow-300 font-medium transition"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-full transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}





