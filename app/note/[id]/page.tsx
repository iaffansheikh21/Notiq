
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";


export default function NoteDetails() {
  const { id } = useParams();
  const [note, setNote] = useState({ title: "", content: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);

  const editor = useEditor({
    extensions: [StarterKit],
    content: note.content,
    editable: isEditing,
    onUpdate: ({ editor }) => {
      setNote((prev) => ({ ...prev, content: editor.getHTML() }));
    },
  });

  useEffect(() => {
    if (id) {
      setTimeout(() => {
        const loadedNote = {
          title: "Sample Note Title",
          content: "<p>This is the content of the note. You can edit it.</p>",
        };
        setNote(loadedNote);
        setLoading(false);
        if (editor) editor.commands.setContent(loadedNote.content);
      }, 500);
    }
  }, [id, editor]);

  const handleSave = () => {
    setIsEditing(false);
    editor?.setEditable(false);
    alert("Note saved!");
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
    editor?.setEditable(!isEditing);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-500 text-white p-6">
      <div className="max-w-4xl mx-auto bg-white text-indigo-700 rounded-2xl shadow-2xl p-8 space-y-6">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold">NOTIQ</h1>
          <p className="text-sm text-gray-400">Capture. Organize. Think Smarter.</p>
        </div>

        {loading ? (
          <p className="text-center text-gray-500">Loading note...</p>
        ) : (
          <>
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

            <div className="text-gray-800 rounded-xl border-2 p-4">
              <EditorContent editor={editor} />
            </div>

            <div className="flex justify-between pt-4">
              <button
                onClick={toggleEdit}
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