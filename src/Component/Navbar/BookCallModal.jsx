import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const BookCallModal = ({ open, onClose }) => {
  const [data, setData] = useState({
    name: "",
    phone: "",
    work: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Hello Sudhanshu 👋

Name: ${data.name}
Phone: ${data.phone}
Work: ${data.work}`;

    const whatsappURL = `https://wa.me/917352205506?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-[90%] max-w-md rounded-3xl
            bg-white/10 backdrop-blur-xl border border-white/20 p-8"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/60 hover:text-white"
            >
              <X size={18} />
            </button>

            <h3 className="text-2xl font-semibold text-white mb-2">
              Book a Call
            </h3>
            <p className="text-white/60 text-sm mb-6">
              Fill in your details and I’ll reach out on WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                required
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white"
                onChange={(e) => setData({ ...data, name: e.target.value })}
              />

              <input
                required
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white"
                onChange={(e) => setData({ ...data, phone: e.target.value })}
              />

              <textarea
                required
                rows="3"
                placeholder="What kind of work do you need?"
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white resize-none"
                onChange={(e) => setData({ ...data, work: e.target.value })}
              />

              <button
                type="submit"
                className="w-full py-3 rounded-full bg-white text-black font-medium hover:scale-105 transition"
              >
                Submit
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BookCallModal;
