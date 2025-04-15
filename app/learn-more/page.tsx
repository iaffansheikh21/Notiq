"use client";

import { motion } from "framer-motion";

export default function LearnMore() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-600 to-blue-500 text-white flex flex-col items-center justify-center p-8">
      {/* Title Section */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-extrabold text-center leading-tight mb-6"
      >
        Learn More About <span className="text-yellow-300">NOTIQ</span>
      </motion.h1>

      {/* Tagline Section */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-lg md:text-xl text-white/90 max-w-3xl text-center mb-12"
      >
        Capture your thoughts, organize your ideas, and think smarter with <span className="font-semibold">NOTIQ</span>, your intelligent note-taking companion.
      </motion.p>

      {/* Key Features Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="w-full max-w-3xl space-y-8 text-center"
      >
        <h2 className="text-3xl font-semibold text-white mb-4">Why Choose NOTIQ?</h2>
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="w-32 h-32 bg-white text-indigo-600 rounded-full flex justify-center items-center mb-4 sm:mb-0">
              <span className="text-4xl font-bold">📱</span>
            </div>
            <div className="sm:w-3/4">
              <h3 className="text-xl font-semibold text-white">Accessible Anywhere</h3>
              <p className="text-white/80">
                Access your notes from any device, anywhere. Seamlessly sync across multiple platforms.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="w-32 h-32 bg-white text-indigo-600 rounded-full flex justify-center items-center mb-4 sm:mb-0">
              <span className="text-4xl font-bold">🔐</span>
            </div>
            <div className="sm:w-3/4">
              <h3 className="text-xl font-semibold text-white">Data Privacy</h3>
              <p className="text-white/80">
                Your notes are secured with the highest levels of encryption. We respect your privacy.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="w-32 h-32 bg-white text-indigo-600 rounded-full flex justify-center items-center mb-4 sm:mb-0">
              <span className="text-4xl font-bold">⚡</span>
            </div>
            <div className="sm:w-3/4">
              <h3 className="text-xl font-semibold text-white">Fast & Efficient</h3>
              <p className="text-white/80">
                Experience fast note-taking and instant synchronization, making your workflow smooth.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Call-to-Action Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-12"
      >
        <p className="text-lg text-white/90 mb-4">
          Ready to get started with <span className="font-semibold">NOTIQ</span> and elevate your note-taking?
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex justify-center gap-6"
        >
          <a
            href="/register"
            className="bg-yellow-300 text-black font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-yellow-400 transition duration-300"
          >
            Get Started
          </a>
          <a
            href="/login"
            className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-indigo-600 hover:text-white transition duration-300"
          >
            Login
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
