// components/Footer.tsx
"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-white">
        
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-300">NOTIQ</h2>
          <p className="text-sm text-white/80 mt-1">Capture. Organize. Think Smarter.</p>
          <p className="text-xs text-white/40 mt-4">&copy; {new Date().getFullYear()} NOTIQ. All rights reserved.</p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Navigate</h3>
          <ul className="space-y-2 text-white/70 text-sm">
            <li><Link href="/" className="hover:text-yellow-300 transition">Home</Link></li>
            <li><Link href="/features" className="hover:text-yellow-300 transition">Features</Link></li>
            <li><Link href="/dashboard" className="hover:text-yellow-300 transition">Dashboard</Link></li>
            <li><Link href="/learn-more" className="hover:text-yellow-300 transition">Learn More</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Support</h3>
          <ul className="space-y-2 text-white/70 text-sm">
            <li><Link href="#" className="hover:text-yellow-300 transition">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-yellow-300 transition">Terms & Conditions</Link></li>
            <li><a href="mailto:support@notiq.app" className="hover:text-yellow-300 transition">Contact Support</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Connect</h3>
          <div className="flex flex-col gap-2 text-white/70 text-sm">
            <a href="#" className="hover:text-yellow-300 transition">Twitter</a>
            <a href="#" className="hover:text-yellow-300 transition">Instagram</a>
            <a href="#" className="hover:text-yellow-300 transition">GitHub</a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-12 text-center text-xs text-white/40 hover:opacity-80 transition-opacity duration-300">
        Built with 💜 by the NOTIQ Team
      </div>
    </footer>
  );
}
