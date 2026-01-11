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
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const InsightCards = () => {
  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* CARD 1 – Partnership */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative col-span-1 lg:col-span-2 rounded-2xl bg-white/5 border border-white/10 p-8 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent blur-2xl" />

          <p className="text-xs uppercase tracking-widest text-white/40 mb-4">
            Partnership
          </p>

          <h3 className="text-xl md:text-2xl text-white font-semibold max-w-xl">
            I prioritize client success, fostering open communication and long-term collaboration.
          </h3>

          {/* Circular chain */}
          <div className="mt-8 flex items-center gap-6">
            {[1, 2, 3, 4, 5].map((_, i) => (
              <div
                key={i}
                className="w-16 h-16 rounded-full border border-white/10"
              />
            ))}
            <div className="absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full border border-white/30 overflow-hidden">
              <img
                src="/sudh1.jpeg"
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* CARD 2 – Tech Focus */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-white/5 border border-white/10 p-8"
        >
          <h3 className="text-xl font-semibold text-pink-400 mb-6">
            Focused on latest digital innovations
          </h3>

          <div className="flex flex-wrap gap-3">
            <Tech label="TypeScript" icon={SiTypescript} color="#3178C6" />
            <Tech label="Tailwind" icon={SiTailwindcss} color="#38BDF8" />
            <Tech label="MongoDB" icon={SiMongodb} color="#47A248" />
            <Tech label="Prisma" icon={SiPrisma} color="#0C344B" />
            <Tech label="ThreeJS" icon={SiThreedotjs} color="#ffffff" />
            <Tech label="Jest" icon={SiJest} color="#C21325" />
            <Tech label="Cypress" icon={SiCypress} color="#69D3A7" />
          </div>
        </motion.div>

        {/* CARD 3 – Time Zone */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-white/5 border border-white/10 p-8"
        >
          <h3 className="text-xl text-pink-400 font-semibold mb-4">
            I'm highly adaptable across global time zones
          </h3>

          <div className="flex gap-3 mt-4">
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
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-white/5 border border-white/10 p-8 flex flex-col justify-between"
        >
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Let’s innovate together
            </h3>
            <p className="text-white/60">
              Ready to bring your vision to life?
            </p>
          </div>

          <a
            href="mailto:ksparth12@gmail.com"
            className="mt-6 inline-block rounded-full bg-white text-black px-6 py-3 text-sm font-semibold hover:scale-105 transition"
          >
            ksparth12@gmail.com
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default InsightCards;

/* Small components */

const Tech = ({ label, icon: Icon, color }) => (
  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 border border-white/10 text-sm">
    <Icon style={{ color }} />
    <span className="text-white/80">{label}</span>
  </div>
);

const Badge = ({ text, active }) => (
  <span
    className={`px-4 py-1.5 rounded-full text-xs border ${
      active
        ? "bg-pink-500/10 text-pink-400 border-pink-500/30"
        : "text-white/60 border-white/10"
    }`}
  >
    {text}
  </span>
);
