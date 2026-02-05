import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import BookCallModal from "./BookCallModal"; // ✅ add

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showForm, setShowForm] = useState(false); // ✅ add

  return (
    <>
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full flex justify-center px-4">
        
        {/* Desktop Navbar */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="hidden md:flex items-center gap-8 px-8 py-3 rounded-full 
          bg-white/10 backdrop-blur-xl border border-white/20 
          shadow-[0_0_40px_rgba(255,255,255,0.05)]"
        >
          <a href="#home" className="text-sm text-white/80 hover:text-white transition">Home</a>
          <a href="#about" className="text-sm text-white/80 hover:text-white transition">About</a>
          <a href="#work" className="text-sm text-white/80 hover:text-white transition">Work</a>

          <button className="flex items-center gap-1 text-sm text-white/80 hover:text-white transition">
            More <ChevronDown size={14} />
          </button>

          {/* 🔥 ONLY CHANGE HERE */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowForm(true)}
            className="ml-4 px-5 py-2 rounded-full text-sm font-medium
            bg-white/20 hover:bg-white/30 text-white shadow-md transition"
          >
            Book a Call
          </motion.button>
        </motion.div>

        {/* Mobile Navbar */}
        <div className="md:hidden w-full max-w-sm flex justify-between items-center px-5 py-3 rounded-full
          bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg">
          
          <span className="text-white text-sm font-medium">Sudhanshu</span>

          <button onClick={() => setOpen(!open)} className="text-white">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="md:hidden absolute top-16 w-[90%] max-w-sm rounded-2xl
              bg-white/10 backdrop-blur-xl border border-white/20
              shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden"
            >
              <div className="flex flex-col text-center py-4">
                <a onClick={() => setOpen(false)} href="#home" className="py-3 text-white/80">Home</a>
                <a onClick={() => setOpen(false)} href="#about" className="py-3 text-white/80">About</a>
                <a onClick={() => setOpen(false)} href="#work" className="py-3 text-white/80">Work</a>

                {/* 🔥 SAME CHANGE FOR MOBILE */}
                <button
                  onClick={() => {
                    setOpen(false);
                    setShowForm(true);
                  }}
                  className="mx-4 mt-3 py-3 rounded-full text-sm font-medium
                  bg-white/20 hover:bg-white/30 text-white transition"
                >
                  Book a Call
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ✅ Modal (design untouched) */}
      <BookCallModal open={showForm} onClose={() => setShowForm(false)} />
    </>
  );
};

export default Navbar;
