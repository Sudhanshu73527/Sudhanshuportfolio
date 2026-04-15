import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import BookCallModal from "./BookCallModal";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);

  // ✅ IMPROVED SMOOTH SCROLL
  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      const navbarHeight = 100; // adjust if needed
      const elementPosition = element.offsetTop;

      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full flex justify-center px-4">

        {/* Desktop Navbar */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden md:flex items-center gap-8 px-8 py-3 rounded-full 
          bg-white/10 backdrop-blur-xl border border-white/20 
          shadow-[0_0_40px_rgba(255,255,255,0.05)]"
        >
          <button onClick={() => scrollToSection("home")} className="text-sm text-white/80 hover:text-white">
            Home
          </button>

          <button onClick={() => scrollToSection("about")} className="text-sm text-white/80 hover:text-white">
            About
          </button>

          <button onClick={() => scrollToSection("work")} className="text-sm text-white/80 hover:text-white">
            Work
          </button>

          <button className="flex items-center gap-1 text-sm text-white/80 hover:text-white">
            More <ChevronDown size={14} />
          </button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowForm(true)}
            className="ml-4 px-5 py-2 rounded-full text-sm font-medium
            bg-white/20 hover:bg-white/30 text-white"
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

                <button
                  onClick={() => {
                    setOpen(false);
                    scrollToSection("home");
                  }}
                  className="py-3 text-white/80"
                >
                  Home
                </button>

                <button
                  onClick={() => {
                    setOpen(false);
                    scrollToSection("about");
                  }}
                  className="py-3 text-white/80"
                >
                  About
                </button>

                <button
                  onClick={() => {
                    setOpen(false);
                    scrollToSection("work");
                  }}
                  className="py-3 text-white/80"
                >
                  Work
                </button>

                <button
                  onClick={() => {
                    setOpen(false);
                    setShowForm(true);
                  }}
                  className="mx-4 mt-3 py-3 rounded-full text-sm font-medium
                  bg-white/20 hover:bg-white/30 text-white"
                >
                  Book a Call
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Modal */}
      <BookCallModal open={showForm} onClose={() => setShowForm(false)} />
    </>
  );
};

export default Navbar;