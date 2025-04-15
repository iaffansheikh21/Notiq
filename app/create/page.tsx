"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function CreateNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Submit logic here
    alert("Note Created ✅");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 flex flex-col items-center p-6">
      {/* App Header */}
      <div className="w-full max-w-4xl flex justify-between items-center mb-8">
        <h1 className="text-3xl font-extrabold text-indigo-600">NOTIQ</h1>
        <p className="text-gray-500 text-sm italic hidden sm:block">Create. Organize. Reflect.</p>
      </div>

      {/* Note Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-8 space-y-6"
      >
        <h2 className="text-2xl font-bold text-gray-800">Create New Note</h2>

        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="My Awesome Idea"
            className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            required
          />
        </div>

        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700">Note Content</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={6}
            placeholder="Write your thoughts here..."
            className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition resize-none"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300"
        >
          Save Note
        </button>
      </motion.form>
    </div>
  );
}
