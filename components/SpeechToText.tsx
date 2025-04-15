// "use client";
// import { useState } from "react";
// import { motion } from "framer-motion";

// export default function SpeechToText() {
//   const [isListening, setIsListening] = useState(false);
//   const [transcript, setTranscript] = useState("");
//   const [error, setError] = useState("");

//   // Initialize the Speech Recognition API
//   const recognition = typeof window !== "undefined" && window.SpeechRecognition
//     ? new window.SpeechRecognition()
//     : new (window as any).webkitSpeechRecognition();

//   recognition.continuous = true;
//   recognition.interimResults = true;

//   const handleStartListening = () => {
//     setIsListening(true);
//     recognition.start();

//     recognition.onresult = (event: any) => {
//       const currentTranscript = event.results[event.resultIndex][0].transcript;
//       setTranscript(currentTranscript);
//     };

//     recognition.onerror = (event: any) => {
//       setError(event.error);
//       setIsListening(false);
//     };
//   };

//   const handleStopListening = () => {
//     setIsListening(false);
//     recognition.stop();
//   };

//   return (
//     <motion.div
//       whileHover={{ scale: 1.05 }}
//       className="bg-white rounded-xl shadow-lg p-6 max-w-md mx-auto transform transition-all duration-300"
//     >
//       <div className="flex flex-col items-center">
//         <h2 className="text-2xl font-bold text-indigo-700">Speech-to-Text</h2>
//         <p className="text-gray-500 text-center mt-2">Speak and your words will appear here</p>

//         <motion.div
//           whileHover={{ scale: 1.1 }}
//           className="mt-6 space-y-4 w-full flex flex-col items-center"
//         >
//           <button
//             onClick={isListening ? handleStopListening : handleStartListening}
//             className={`py-2 px-4 rounded-xl text-white ${isListening ? 'bg-red-600 hover:bg-red-700' : 'bg-indigo-600 hover:bg-indigo-700'} transition duration-300`}
//           >
//             {isListening ? "Stop Listening" : "Start Listening"}
//           </button>

//           {error && <p className="text-red-500">{`Error: ${error}`}</p>}

//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3, duration: 0.6 }}
//             className="mt-4 p-4 w-full bg-gray-100 rounded-lg text-gray-700"
//           >
//             <p>{transcript || "Your speech will appear here..."}</p>
//           </motion.div>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// }
