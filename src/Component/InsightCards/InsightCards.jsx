import React from "react";
import { motion } from "framer-motion";
import {
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiPrisma,
  SiThreedotjs,
  SiJest,
  SiCypress,
} from "react-icons/si";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const InsightCards = () => {
  return (
    <section className="relative bg-black py-28 overflow-hidden">
      {/* soft background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(236,72,153,0.12),_transparent_55%)]" />

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* CARD 1 – Partnership */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative col-span-1 lg:col-span-2 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-10 overflow-hidden hover:border-pink-500/30 transition"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-transparent" />

          <p className="text-xs uppercase tracking-[0.25em] text-white/40 mb-6">
            Partnership mindset
          </p>

          <h3 className="text-2xl md:text-3xl leading-snug text-white font-semibold max-w-2xl">
            I focus on long-term partnerships, transparent communication,
            and delivering outcomes that genuinely move the needle.
          </h3>

          {/* chain */}
          <div className="relative mt-10 flex items-center gap-6">
            {[1, 2, 3, 4, 5].map((_, i) => (
              <div
                key={i}
                className="w-16 h-16 rounded-full border border-white/10"
              />
            ))}

            <div className="absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full border border-pink-500/40 shadow-[0_0_25px_rgba(236,72,153,0.45)] overflow-hidden">
              <img
                src="/sudh1.jpeg"
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* CARD 2 – Tech Stack */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-10 hover:border-pink-500/30 transition"
        >
          <h3 className="text-xl font-semibold text-pink-400 mb-8">
            Modern tech I work with
          </h3>

          <div className="flex flex-wrap gap-3">
            <Tech label="TypeScript" icon={SiTypescript} color="#3178C6" />
            <Tech label="Tailwind CSS" icon={SiTailwindcss} color="#38BDF8" />
            <Tech label="MongoDB" icon={SiMongodb} color="#47A248" />
            <Tech label="Prisma" icon={SiPrisma} color="#0C344B" />
            <Tech label="Three.js" icon={SiThreedotjs} color="#ffffff" />
            <Tech label="Jest" icon={SiJest} color="#C21325" />
            <Tech label="Cypress" icon={SiCypress} color="#69D3A7" />
          </div>
        </motion.div>

        {/* CARD 3 – Time Zone */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7, delay: 0.15 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-10 hover:border-pink-500/30 transition"
        >
          <h3 className="text-xl text-pink-400 font-semibold mb-5">
            Globally time-zone flexible
          </h3>

          <p className="text-white/60 mb-6 text-sm leading-relaxed">
            Comfortable collaborating across regions with clear communication
            and flexible working hours.
          </p>

          <div className="flex gap-3">
            <Badge text="UK" />
            <Badge text="India" active />
            <Badge text="USA" />
          </div>
        </motion.div>

        {/* CARD 4 – CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-gradient-to-br from-pink-500/10 to-white/5 backdrop-blur-xl border border-pink-500/30 p-10 flex flex-col justify-between shadow-[0_0_40px_rgba(236,72,153,0.15)]"
        >
          <div>
            <h3 className="text-3xl font-bold text-white mb-3">
              Let’s build something impactful
            </h3>
            <p className="text-white/60">
              Have an idea? Let’s turn it into a polished digital product.
            </p>
          </div>

          <a
            href="mailto:ksparth12@gmail.com"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-white text-black px-7 py-3 text-sm font-semibold hover:scale-105 transition"
          >
            tiwarisunny7352@gmail.com 
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default InsightCards;

/* Small Components */

const Tech = ({ label, icon: Icon, color }) => (
  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 border border-white/10 text-sm text-white/80 hover:border-pink-500/30 transition">
    <Icon style={{ color }} />
    <span>{label}</span>
  </div>
);

const Badge = ({ text, active }) => (
  <span
    className={`px-4 py-1.5 rounded-full text-xs border ${
      active
        ? "bg-pink-500/10 text-pink-400 border-pink-500/40"
        : "text-white/60 border-white/10"
    }`}
  >
    {text}
  </span>
);
