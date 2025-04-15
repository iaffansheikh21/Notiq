"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-indigo-600 p-4 text-white">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">NOTIQ</Link>
        <div className="space-x-4">
          <Link href="/features" className="hover:text-yellow-300">Features</Link>
          <Link href="/login" className="hover:text-yellow-300">Login</Link>
          <Link href="/register" className="hover:text-yellow-300">Register</Link>
        </div>
      </div>
    </nav>
  );
}
