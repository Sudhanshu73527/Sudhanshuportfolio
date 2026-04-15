import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-10 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Sudhanshu Kumar</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Freelance Web Developer & Software Engineer. I build modern,
            responsive, and high-performance websites & applications.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Projects</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Social + Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Connect with me</h3>
          <div className="flex space-x-4 mb-4">
            <a href="https://github.com/Sudhanshu73527" className="hover:scale-110 transition">
              <FaGithub size={22} />
            </a>
            <a href="#" className="hover:scale-110 transition">
              <FaLinkedin size={22} />
            </a>
            <a href="#" className="hover:scale-110 transition">
              <FaInstagram size={22} />
            </a>
          </div>

          <p className="text-gray-400 text-sm flex items-center gap-2">
            <FaEnvelope /> sudhanshu@example.com
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Sudhanshu Kumar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
