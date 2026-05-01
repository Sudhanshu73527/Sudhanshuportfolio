import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white pt-20 pb-10 overflow-hidden">

      {/* 🔥 Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(255,0,0,0.15),_transparent_60%)]" />
      <div className="absolute w-80 h-80 bg-red-500/10 blur-[120px] rounded-full bottom-0 left-10" />

      <div className="relative max-w-6xl mx-auto px-6 text-center">

        {/* 🔥 BIG CTA */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold leading-tight mb-6"
        >
          Let’s build something{" "}
          <span className="text-red-500">amazing together</span>
        </motion.h2>

        {/* 🔥 TAGLINE */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white/60 max-w-2xl mx-auto mb-8"
        >
          I design and develop high-performance websites that not only look great
          but also drive real results for your business.
        </motion.p>

        {/* 🔥 CTA BUTTON */}
        <motion.a
          href="mailto:tiwarisunny7352@gmail.com"
          whileHover={{ scale: 1.08 }}
          className="inline-block bg-red-500 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-red-600 transition"
        >
           Hire Me
        </motion.a>

        {/* 🔥 SOCIAL ICONS */}
        <div className="flex justify-center gap-6 mt-10">

          <Social icon={<FaGithub />} link="https://github.com/Sudhanshu73527" />
          <Social icon={<FaLinkedin />} link="#" />
          <Social icon={<FaInstagram />} link="#" />

        </div>

        {/* 🔥 EMAIL */}
        <p className="text-white/50 text-sm mt-6 flex justify-center items-center gap-2">
          <FaEnvelope /> tiwarisunny7352@gmail.com
        </p>

        {/* 🔥 DIVIDER */}
        <div className="mt-10 border-t border-white/10 pt-6 text-white/40 text-sm">
          © {new Date().getFullYear()} Sudhanshu Kumar — Crafted with passion 
        </div>

      </div>
    </footer>
  );
};

export default Footer;

/* 🔥 Social Component */
const Social = ({ icon, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 flex items-center justify-center rounded-full 
    bg-white/5 border border-white/10 hover:border-red-500/40 
    hover:bg-red-500/10 transition text-lg"
  >
    {icon}
  </a>
);