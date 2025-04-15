"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-600 to-blue-500 text-white flex items-center justify-center px-4">
      <div className="max-w-4xl text-center space-y-10 py-16">
        <motion.h1 
          initial={{ opacity: 0, y: -40 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold leading-tight"
        >
          Welcome to <span className="text-yellow-300">NOTIQ</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto"
        >
          Capture. Organize. Think Smarter. <br />
          Your intelligent companion for smart note-taking, accessible anywhere.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Link
            href="/login"
            className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-yellow-300 hover:text-black transition duration-300"
          >
            Get Started
          </Link>
          <Link
            href="learn-more"
            className="border-2 border-white px-6 py-3 rounded-xl hover:bg-white hover:text-indigo-600 transition duration-300"
          >
            Learn More
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
