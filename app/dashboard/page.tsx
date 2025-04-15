"use client";

import { motion } from "framer-motion";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white p-6 shadow-lg hidden md:block">
        <h1 className="text-2xl font-extrabold text-indigo-600 mb-8">NOTIQ</h1>
        <nav className="space-y-4">
          <a href="#" className="block text-gray-700 hover:text-indigo-600 font-medium transition">Dashboard</a>
          <a href="#" className="block text-gray-700 hover:text-indigo-600 font-medium transition">My Notes</a>
          <a href="#" className="block text-gray-700 hover:text-indigo-600 font-medium transition">Settings</a>
          <a href="#" className="block text-red-500 hover:text-red-600 font-medium transition">Logout</a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Top Navbar */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Welcome back 👋</h2>
          <div className="text-gray-600">Hello, User</div>
        </div>

        {/* Content Area */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
        >
          {/* Example Note Cards */}
          {["Meeting Notes", "Ideas", "To-Do", "Quotes", "Shopping List"].map((title, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl shadow-md p-4 cursor-pointer transition"
            >
              <h3 className="font-semibold text-lg text-indigo-600">{title}</h3>
              <p className="text-gray-600 text-sm mt-2">This is a quick preview of your note...</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
