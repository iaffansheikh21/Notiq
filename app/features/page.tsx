"use client";

import { motion } from "framer-motion";
import Link from "next/link";
export default function Features() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-blue-600 text-white">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto text-center pt-16 pb-8">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-white leading-tight"
        >
          Why Choose <span className="text-yellow-300">NOTIQ</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mt-4"
        >
          Notiq is your smart companion for effortless note-taking and organizing. Explore its amazing features!
        </motion.p>
      </div>

      {/* Features List */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* Feature 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-white text-gray-800 rounded-2xl shadow-lg p-6 space-y-4"
          >
            <h3 className="text-2xl font-semibold text-indigo-600">Smart Organization</h3>
            <p>
              Organize your notes with ease using categories, labels, and smart folders. Access anything instantly!
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="bg-white text-gray-800 rounded-2xl shadow-lg p-6 space-y-4"
          >
            <h3 className="text-2xl font-semibold text-indigo-600">Cloud Sync</h3>
            <p>
              All your notes are safely stored in the cloud, accessible across devices whenever you need them.
            </p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="bg-white text-gray-800 rounded-2xl shadow-lg p-6 space-y-4"
          >
            <h3 className="text-2xl font-semibold text-indigo-600">Rich Text Editing</h3>
            <p>
              Take notes with rich formatting, bullet points, and headers, just like working on a word processor.
            </p>
          </motion.div>

          {/* Feature 4 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="bg-white text-gray-800 rounded-2xl shadow-lg p-6 space-y-4"
          >
            <h3 className="text-2xl font-semibold text-indigo-600">Task Management</h3>
            <p>
              Turn your notes into tasks with to-do lists, deadlines, and priority tags to stay productive!
            </p>
          </motion.div>

          {/* Feature 5 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="bg-white text-gray-800 rounded-2xl shadow-lg p-6 space-y-4"
          >
            <h3 className="text-2xl font-semibold text-indigo-600">Dark Mode</h3>
            <p>
              Work comfortably day or night. Toggle dark mode to match your preferences.
            </p>
          </motion.div>

          {/* Feature 6 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="bg-white text-gray-800 rounded-2xl shadow-lg p-6 space-y-4"
          >
            <h3 className="text-2xl font-semibold text-indigo-600">Secure & Private</h3>
            <p>
              Your notes are encrypted and stored securely, so your ideas remain private and safe.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-indigo-600 py-16 text-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="text-3xl font-bold"
        >
          Ready to Get Started?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="text-lg mt-4"
        >
          Start using NOTIQ and take your notes to the next level.
        </motion.p>
        <Link
          href="/login"
          className="inline-block mt-6 bg-yellow-300 text-indigo-600 font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-indigo-600 hover:text-white transition duration-300"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
