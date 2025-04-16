"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

// Dynamically import ReactQuill to ensure it's only rendered on the client side
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function NoteDetails() {
  const { id } = useParams();
  const [note, setNote] = useState({ title: "", content: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      // Simulate fetching the note based on the ID (this can be an API call in real projects)
      setTimeout(() => {
        setNote({
          title: "Sample Note Title",
          content: "<p>This is the content of the note. You can edit it.</p>",
        });
        setLoading(false);
      }, 800);
    }
  }, [id]);

  const handleSave = () => {
    // Handle the save logic (send to server, etc.)
    setIsEditing(false);
    alert("Note saved!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-500 text-white p-6">
      <div className="max-w-4xl mx-auto bg-white text-indigo-700 rounded-2xl shadow-2xl p-8 space-y-6 transition-all duration-500">
        {/* App Branding */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight">NOTIQ</h1>
          <p className="text-sm text-gray-400 mt-1">Capture. Organize. Think Smarter.</p>
        </div>

        {/* Loading State */}
        {loading ? (
          <p className="text-center text-gray-500">Loading note...</p>
        ) : (
          <>
            {/* Title Input */}
            <input
              type="text"
              value={note.title}
              disabled={!isEditing}
              onChange={(e) => setNote({ ...note, title: e.target.value })}
              className={`w-full text-2xl font-bold border-2 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                isEditing ? "bg-white text-gray-900" : "bg-gray-100 text-gray-500"
              }`}
              placeholder="Note title..."
            />

            {/* Rich Text Editor */}
            <div className="text-gray-800">
              <ReactQuill
                value={note.content}
                onChange={(value) => setNote({ ...note, content: value })}
                readOnly={!isEditing}
                theme={isEditing ? "snow" : "bubble"}
                className="bg-white rounded-xl"
              />
            </div>

            {/* Edit and Save Buttons */}
            <div className="flex justify-between pt-4">
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
              >
                {isEditing ? "Cancel" : "Edit"}
              </button>
              {isEditing && (
                <button
                  onClick={handleSave}
                  className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition"
                >
                  Save
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
