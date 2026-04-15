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

const SNOW_COUNT = 60;

const Landingpage = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [openForm, setOpenForm] = useState(false); // ✅ modal state

  const [form, setForm] = useState({
    name: "",
    message: "",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText("sudhanshu@example.com");

    toast.success("Email copied to clipboard!", {
      style: {
        background: "#111",
        color: "#fff",
        borderRadius: "12px",
      },
    });
  };

  // ✅ WhatsApp Send
  const handleSubmit = () => {
    if (!form.name || !form.message) {
      toast.error("Please fill all fields");
      return;
    }

    const phone = "917352205506";

    const text = `Hello, I'm ${form.name}%0A${form.message}`;
    const url = `https://wa.me/${phone}?text=${text}`;

    window.open(url, "_blank");
    setOpenForm(false);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-white 
      bg-gradient-to-b from-[#160000] via-[#300000] to-black">

      <Toaster position="bottom-center" />

      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,0,0,0.2),_transparent_65%)] -z-10" />

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        {[...Array(SNOW_COUNT)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-white/60"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              left: `${Math.random() * 100}%`,
              top: `-${Math.random() * 20}%`,
            }}
            animate={{
              y: "120vh",
              x: [`${Math.random() * -40}px`, `${Math.random() * 40}px`],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 8,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 6,
            }}
          />
        ))}
      </div>

      <div className="text-center px-4 sm:px-6 max-w-4xl z-10">

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
          I design & build brands that{" "}
          <span className="text-red-500">create real impact</span>
        </h1>

        <h3 className="text-base sm:text-lg md:text-2xl mb-5 text-white/80">
          Hello, I'm{" "}
          <span className="font-bold text-red-500">Sudhanshu Kumar</span>
        </h3>

        {/* Role */}
        <div className="flex justify-center mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={roleIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="bg-red-500 px-5 py-2 rounded-full text-sm sm:text-base font-semibold shadow-lg"
            >
              {roles[roleIndex]}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full">

          {/* ✅ UPDATED BUTTON */}
          <motion.button
            onClick={() => setOpenForm(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto bg-red-500 px-6 py-3 rounded-full 
            text-sm font-semibold flex items-center justify-center gap-2 
            shadow-xl hover:bg-red-600 transition"
          >
            Let's Connect <FaArrowRight size={14} />
          </motion.button>

          {/* Email */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCopy}
            className="w-full sm:w-auto px-6 py-3 rounded-full 
            text-sm font-medium flex items-center justify-center gap-3 
            border border-white/20 bg-white/5 backdrop-blur-md 
            hover:bg-white/10 transition shadow-lg"
          >
            tiwarisunny7352@gmail.com
            <FaCopy className="text-white/60" />
          </motion.button>
        </div>
      </div>

      {/* ✅ MODAL FORM */}
      <AnimatePresence>
        {openForm && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-[#111] p-6 rounded-2xl w-[90%] max-w-md text-white"
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