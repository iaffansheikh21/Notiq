// "use client";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import { motion } from "framer-motion";

// export default function NoteDetails() {
//   const router = useRouter();
//   const { id } = router.query;

//   const [note, setNote] = useState<{ title: string; content: string }>({
//     title: "",
//     content: "",
//   });
//   const [isEditing, setIsEditing] = useState(false);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (id) {
//       // Simulate fetching the note based on its ID from a database
//       setLoading(true);
//       setTimeout(() => {
//         setNote({
//           title: "Sample Note Title",
//           content: "This is the content of the note. You can edit it.",
//         });
//         setLoading(false);
//       }, 1000);
//     }
//   }, [id]);

//   const handleSave = () => {
//     // Simulate saving the updated note (can integrate with backend later)
//     setIsEditing(false);
//     alert("Note saved!");
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-600 to-blue-500 text-white p-6">
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         className="max-w-2xl mx-auto bg-white text-indigo-700 rounded-lg shadow-xl p-8"
//       >
//         {loading ? (
//           <div className="text-center text-lg text-gray-500">Loading...</div>
//         ) : (
//           <div className="space-y-6">
//             <motion.h2
//               initial={{ opacity: 0, y: -30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2, duration: 0.5 }}
//               className="text-3xl font-bold"
//             >
//               {isEditing ? "Edit Your Note" : note.title}
//             </motion.h2>

//             <motion.textarea
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 0.4, duration: 0.6 }}
//               value={note.content}
//               onChange={(e) => setNote({ ...note, content: e.target.value })}
//               disabled={!isEditing}
//               rows={10}
//               className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 text-gray-700 resize-none"
//             />

//             <div className="flex justify-between items-center">
//               <button
//                 onClick={() => setIsEditing(!isEditing)}
//                 className="bg-indigo-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
//               >
//                 {isEditing ? "Cancel" : "Edit Note"}
//               </button>
//               {isEditing && (
//                 <button
//                   onClick={handleSave}
//                   className="bg-green-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-green-700 transition duration-300"
//                 >
//                   Save Changes
//                 </button>
//               )}
//             </div>
//           </div>
//         )}
//       </motion.div>
//     </div>
//   );
// }
