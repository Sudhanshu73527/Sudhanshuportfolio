import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiSanity,
  SiContentful,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiZod,
  SiPnpm,
  SiBun,
  SiGit,
  SiGithub,
  SiVercel,
  SiDocker,
  SiExpo,
  SiClerk,
  SiLinux,
} from "react-icons/si";

const skills = [
  { name: "ReactJS", icon: SiReact, color: "#61DAFB" },
  { name: "NextJS", icon: SiNextdotjs, color: "#ffffff" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "Motion", icon: SiFramer, color: "#0055FF" },
  { name: "Sanity", icon: SiSanity, color: "#F03E2F" },
  { name: "Contentful", icon: SiContentful, color: "#2478CC" },
  { name: "NodeJS", icon: SiNodedotjs, color: "#3C873A" },
  { name: "ExpressJS", icon: SiExpress, color: "#ffffff" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Prisma", icon: SiPrisma, color: "#0C344B" },
  { name: "Zod", icon: SiZod, color: "#3E67B1" },
  { name: "pnpm", icon: SiPnpm, color: "#F69220" },
  { name: "Bun", icon: SiBun, color: "#FBF0DF" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#ffffff" },
  { name: "Vercel", icon: SiVercel, color: "#ffffff" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Expo", icon: SiExpo, color: "#ffffff" },
  { name: "Clerk", icon: SiClerk, color: "#6C47FF" },
  { name: "Linux", icon: SiLinux, color: "#FCC624" },
];

const SkillsSection = () => {
  return (
    <section className="relative bg-black py-28 overflow-hidden">
      {/* Glow background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-transparent blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="uppercase text-xs tracking-widest text-white/50 mb-3">
            My Skillset
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            The Magic <span className="italic text-purple-400">Behind</span>
          </h2>
        </div>

        {/* Skills grid */}
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.12, y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="
                flex items-center gap-3 px-5 py-2.5 rounded-full
                bg-white/5 border border-white/10
                backdrop-blur-md
                hover:bg-white/10
                shadow-lg
              "
            >
              <skill.icon
                className="text-xl"
                style={{
                  color: skill.color,
                  filter: "drop-shadow(0 0 6px rgba(255,255,255,0.25))",
                }}
              />
              <span className="text-sm md:text-base text-white/80">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
