// "use client";
// import { signIn } from "next-auth/react";
// import { useState } from "react";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     const res = await signIn("credentials", {
//       redirect: false,
//       email,
//       password,
//     });

//     setLoading(false);

//     if (res?.error) {
//       alert("Login failed");
//     } else {
//       alert("Login successful!");
//       // Redirect to dashboard or home page
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-700 flex justify-center items-center p-4">
//       <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Welcome Back!</h2>
//         <p className="text-center text-gray-500 mb-4">Please log in to continue</p>
        
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div className="relative">
//             <input
//               type="email"
//               placeholder="Email Address"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
//             />
//             <div className="absolute top-2 left-3 text-gray-500">
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
//                 <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
//               </svg>
//             </div>
//           </div>

//           <div className="relative">
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
//             />
//             <div className="absolute top-2 left-3 text-gray-500">
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
//                 <path d="M12 4C7.03 4 3 7.83 3 12s4.03 8 9 8 9-3.83 9-8-4.03-8-9-8zm0 14c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
//               </svg>
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300"
//             disabled={loading}
//           >
//             {loading ? "Logging in..." : "Login"}
//           </button>
//         </form>

//         <div className="text-center mt-6">
//           <p className="text-sm text-gray-500">
//             Don’t have an account?{" "}
//             <a href="/register" className="text-blue-600 hover:text-blue-700 font-semibold transition-all duration-200">
//               Register Here
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    setLoading(false);

    if (res?.error) {
      alert("Login failed");
    } else {
      alert("Login successful!");
      router.push("/dashboard"); // Redirect to dashboard or home page
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-700 flex justify-center items-center p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        {/* App Name & Tagline */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-indigo-600">NOTIQ</h1>
          <p className="text-sm text-gray-500 italic mt-1">
            Capture. Organize. Think Smarter.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">Welcome Back!</h2>
        <p className="text-center text-gray-500 mb-6">Please log in to continue</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            />
          </div>

          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            Don't have an account?{" "}
            <a href="/register" className="text-blue-600 hover:text-blue-700 font-semibold transition-all duration-200">
              Register Here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
