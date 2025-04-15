"use client";
import { motion } from "framer-motion";

interface NoteCardProps {
  title: string;
  content: string;
  date: string;
  onClick: () => void;
}

export default function NoteCard({ title, content, date, onClick }: NoteCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-xl shadow-lg p-6 max-w-sm mx-auto transform transition-all duration-300"
    >
      <div className="flex flex-col justify-between h-full">
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-indigo-700 truncate">{title}</h3>
          <p className="text-sm text-gray-500 mt-2">{date}</p>
          <p className="text-gray-700 mt-4 text-base line-clamp-3">{content}</p>
        </div>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={onClick}
          className="mt-4 w-full py-2 px-4 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition duration-300"
        >
          View Note
        </motion.button>
      </div>
    </motion.div>
  );
}
