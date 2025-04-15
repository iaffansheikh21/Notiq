"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Connect this to your backend register API
    alert("Registration successful (mock)!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white rounded-2xl p-8 shadow-2xl"
      >
        <div className="text-center mb-6">
          <h1 className="text-3xl font-extrabold text-gray-800">NOTIQ</h1>
          <p className="text-sm text-gray-500">Smarter notes. Smarter you.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            required
          />
          <input
            type="password"
            placeholder="Create Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            required
          />

          <button
            type="submit"
            className="w-full py-3 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition-all duration-300"
          >
            Register
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-purple-700 hover:underline font-medium">Login here</a>
        </p>
      </motion.div>
    </div>
  );
}
