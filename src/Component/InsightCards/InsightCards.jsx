import React, { useRef } from "react";
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

/* 🔥 Reusable 3D Card */
const TiltCard = ({ children, className }) => {
  const ref = useRef(null);

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    ref.current.style.transform = `
      rotateX(${y * -10}deg)
      rotateY(${x * 10}deg)
      scale(1.03)
    `;
  };

  const reset = () => {
    ref.current.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={`transition-transform duration-300 ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
};

const InsightCards = () => {
  return (
    <section className="relative bg-black py-32 overflow-hidden">

      {/* 🔥 Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,0,0,0.12),_transparent_55%)]" />
      <div className="absolute w-80 h-80 bg-red-500/10 blur-[120px] rounded-full top-10 left-10 animate-pulse" />
      <div className="absolute w-72 h-72 bg-red-400/10 blur-[100px] rounded-full bottom-10 right-10" />

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* 🔥 HERO CARD */}
        <TiltCard className="col-span-1 lg:col-span-2">
          <div className="relative rounded-3xl p-[1px] bg-gradient-to-br from-red-500/40 to-transparent">

            <div className="relative rounded-3xl bg-black/80 backdrop-blur-xl border border-white/10 p-10 overflow-hidden">

              {/* Spotlight */}
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_center,_rgba(255,0,0,0.15),_transparent_60%)]" />

              <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-6">
                Partnership mindset
              </p>

              <h3 className="text-3xl leading-snug text-white font-semibold max-w-2xl">
                I focus on long-term partnerships, transparent communication,
                and delivering outcomes that genuinely move the needle.
              </h3>

              {/* Floating circles */}
              <div className="relative mt-12 flex items-center gap-6">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                    className="w-16 h-16 rounded-full border border-white/10"
                  />
                ))}

                <div className="absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full border border-red-500/50 shadow-[0_0_35px_rgba(255,0,0,0.6)] overflow-hidden">
                  <img
                    src="/sudh1.jpeg"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </TiltCard>

        {/* 🔥 TECH */}
        <TiltCard>
          <div className="relative rounded-3xl p-[1px] bg-gradient-to-br from-red-500/30 to-transparent">
            <div className="rounded-3xl bg-black/80 backdrop-blur-xl border border-white/10 p-10">

              <h3 className="text-xl font-semibold text-red-400 mb-8">
                Modern tech I work with
              </h3>

              <div className="flex flex-wrap gap-3">
                <Tech label="TypeScript" icon={SiTypescript} />
                <Tech label="Tailwind" icon={SiTailwindcss} />
                <Tech label="MongoDB" icon={SiMongodb} />
                <Tech label="Prisma" icon={SiPrisma} />
                <Tech label="Three.js" icon={SiThreedotjs} />
                <Tech label="Jest" icon={SiJest} />
                <Tech label="Cypress" icon={SiCypress} />
              </div>
            </div>
          </div>
        </TiltCard>

        {/* 🔥 TIME ZONE */}
        <TiltCard>
          <div className="relative rounded-3xl p-[1px] bg-gradient-to-br from-red-500/30 to-transparent">
            <div className="rounded-3xl bg-black/80 backdrop-blur-xl border border-white/10 p-10">

              <h3 className="text-xl text-red-400 font-semibold mb-5">
                Globally time-zone flexible
              </h3>

              <p className="text-white/60 mb-6 text-sm">
                Comfortable collaborating across regions with clear communication
                and flexible working hours.
              </p>

              <div className="flex gap-3">
                <Badge text="UK" />
                <Badge text="India" active />
                <Badge text="USA" />
              </div>
            </div>
          </div>
        </TiltCard>

        {/* 🔥 CTA (NEXT LEVEL) */}
        <TiltCard>
          <div className="relative rounded-3xl p-[1px] bg-gradient-to-br from-red-500/60 to-red-500/10">

            <div className="rounded-3xl bg-black/90 backdrop-blur-xl border border-red-500/30 p-10 flex flex-col justify-between shadow-[0_0_60px_rgba(255,0,0,0.25)]">

              <div>
                <h3 className="text-3xl font-bold text-white mb-3">
                  Let’s build something impactful
                </h3>
                <p className="text-white/60">
                  Have an idea? Let’s turn it into a polished digital product.
                </p>
              </div>

              <a
                href="mailto:tiwarisunny7352@gmail.com"
                className="relative mt-8 inline-flex items-center justify-center rounded-full bg-red-500 text-white px-7 py-3 text-sm font-semibold overflow-hidden group"
              >
                <span className="relative z-10">Contact Me →</span>

                {/* Shine */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 animate-[shine_2s_linear_infinite]" />
              </a>

            </div>
          </div>
        </TiltCard>

      </div>
    </section>
  );
};

export default InsightCards;

/* 🔥 Tech */
const Tech = ({ label, icon: Icon }) => (
  <motion.div
    whileHover={{ scale: 1.15 }}
    className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 border border-white/10 text-sm text-white/80 hover:border-red-500/50 hover:shadow-[0_0_20px_rgba(255,0,0,0.3)] transition"
  >
    <Icon />
    <span>{label}</span>
  </motion.div>
);

/* 🔥 Badge */
const Badge = ({ text, active }) => (
  <span
    className={`px-4 py-1.5 rounded-full text-xs border ${
      active
        ? "bg-red-500/10 text-red-400 border-red-500/40"
        : "text-white/60 border-white/10"
    }`}
  >
    {text}
  </span>
);