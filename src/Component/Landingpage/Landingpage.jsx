import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaCopy } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const roles = [
  "Freelancer",
  "Product Builder",
  "Software Developer",
  "Full Stack Developer",
  "Problem Solver",
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const Landingpage = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [openForm, setOpenForm] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const [form, setForm] = useState({
    name: "",
    message: "",
  });

  // Role loop
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Mouse glow
  useEffect(() => {
    const move = (e) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText("tiwarisunny7352@gmail.com");
    toast.success("Email copied!");
  };

  const handleSubmit = () => {
    if (!form.name || !form.message) {
      toast.error("Fill all fields");
      return;
    }

    const phone = "917352205506";
    const text = `Hello, I'm ${form.name}%0A${form.message}`;
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");

    setOpenForm(false);
  };

  // 🔥 Magnetic Button Improved
  const MagneticButton = ({ children, onClick }) => {
    const [pos, setPos] = useState({ x: 0, y: 0 });

    return (
      <motion.button
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          setPos({
            x: (e.clientX - rect.left - rect.width / 2) * 0.25,
            y: (e.clientY - rect.top - rect.height / 2) * 0.25,
          });
        }}
        onMouseLeave={() => setPos({ x: 0, y: 0 })}
        animate={{ x: pos.x, y: pos.y }}
        transition={{ type: "spring", stiffness: 120, damping: 8 }}
        onClick={onClick}
        className="relative bg-red-500 px-7 py-3 rounded-full flex items-center gap-2 shadow-lg overflow-hidden"
      >
        <span className="relative z-10">{children}</span>

        {/* Shine effect */}
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 hover:opacity-100 transition duration-700 animate-[shine_2s_linear_infinite]" />
      </motion.button>
    );
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-white bg-black">

      <Toaster position="bottom-center" />

      {/* Mouse Glow */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: `radial-gradient(600px at ${mouse.x}px ${mouse.y}px, rgba(255,0,0,0.15), transparent 80%)`,
        }}
      />

      {/* Floating Lights */}
      <div className="absolute w-72 h-72 bg-red-500/20 blur-[120px] rounded-full top-10 left-10 animate-pulse" />
      <div className="absolute w-60 h-60 bg-red-400/10 blur-[100px] rounded-full bottom-10 right-10" />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center max-w-3xl px-6"
      >

        <motion.div variants={item} className="mb-6">
          <span className="px-4 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-sm">
             Available for Freelance Work
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="text-4xl md:text-6xl font-extrabold leading-tight mb-5"
        >
          I design & build brands that{" "}
          <span className="text-red-500 relative">
            create real impact
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-red-500 animate-pulse"></span>
          </span>
        </motion.h1>

        <motion.p variants={item} className="text-lg text-white/70 mb-6">
          Hello, I'm{" "}
          <span className="text-white font-semibold">
            Sudhanshu Kumar <br /> A
          </span>
        </motion.p>

        {/* Role */}
        <AnimatePresence mode="wait">
          <motion.div
            key={roleIndex}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="inline-block mb-8 px-5 py-2 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-sm"
          >
            {roles[roleIndex]}
          </motion.div>
        </AnimatePresence>

        {/* Buttons */}
        <motion.div variants={item} className="flex flex-col sm:flex-row justify-center gap-4">

          <MagneticButton onClick={() => setOpenForm(true)}>
            Let's Connect 
          </MagneticButton>

          <motion.button
            onClick={handleCopy}
            whileHover={{ scale: 1.05 }}
            className="px-7 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center gap-2"
          >
            Copy Email <FaCopy />
          </motion.button>

        </motion.div>
      </motion.div>

      {/* Bottom Card */}
      <div className="absolute bottom-6 w-full flex justify-center px-4">
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 px-6 py-3 rounded-xl text-sm text-white/70 shadow-lg hover:scale-105 transition">
           Crafting modern web experiences with performance & aesthetics
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {openForm && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="bg-[#111] p-6 rounded-2xl w-[90%] max-w-md"
            >
              <h2 className="text-xl font-bold mb-4">Let's Connect</h2>

              <input
                type="text"
                placeholder="Your Name"
                className="w-full mb-3 p-3 rounded-lg bg-black border border-white/20"
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
              />

              <textarea
                placeholder="Your Message"
                className="w-full mb-4 p-3 rounded-lg bg-black border border-white/20"
                rows={4}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
              />

              <div className="flex justify-between">
                <button
                  onClick={() => setOpenForm(false)}
                  className="px-4 py-2 bg-gray-700 rounded-lg"
                >
                  Cancel
                </button>

                <button
                  onClick={handleSubmit}
                  className="px-4 py-2 bg-red-500 rounded-lg"
                >
                  Send
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Landingpage;