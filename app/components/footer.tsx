import React from "react";
import {
//   Instagram,
//   Twitter,
//   Linkedin,
  Sparkles,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0B1220] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Travel<span className="text-blue-500">AI</span>
            </h2>

            <p className="text-gray-400 leading-7 max-w-xs">
              The world's first AI-native travel platform.
              Redefining how you discover, plan, and book
              adventures.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-gray-300">
              Company
            </h3>

            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  Careers
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  Press
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-gray-300">
              Support
            </h3>

            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  Help Center
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  Contact Support
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  Safety Hub
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-gray-300">
              Legal
            </h3>

            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  Terms of Service
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-10"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-400 text-sm">
            © 2026 TravelAI. Powered by Artificial Intelligence.
          </p>

          <div className="flex items-center gap-4">
            <button className="w-10 h-10 rounded-full bg-[#131D31] hover:bg-[#1D2A44] flex items-center justify-center transition">
              {/* <Twitter size={18} /> */}
            </button>

            <button className="w-10 h-10 rounded-full bg-[#131D31] hover:bg-[#1D2A44] flex items-center justify-center transition">
              {/* <Instagram size={18} /> */}
            </button>

            <button className="w-10 h-10 rounded-full bg-[#131D31] hover:bg-[#1D2A44] flex items-center justify-center transition">
              {/* <Facebook size={18} /> */}
            </button>

          
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;