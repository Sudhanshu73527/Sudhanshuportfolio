import { motion, useMotionValue, useTransform } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiFramer,
  SiMongodb,
  SiNextdotjs,
} from "react-icons/si";
import { useState } from "react";

/* =======================
   👉 EDIT YOUR PROJECTS HERE
======================= */
const projects = [
  {
    title: "SHNAU MART",
    image: "/mart.jpeg",
    description: "An all-in-one grocery delivery solution for ordering fresh daily essentials with quick doorstep delivery..",
    tech: [FaReact, SiTailwindcss, SiFramer],
    live: "https://www.shanumart.in/",
  },
  {
    title: "THE 9TO9 RESTAURANT",
    image: "/ninetonine.jpeg",
    description: "A seamless fast-food delivery experience designed for speed, easy ordering, and smooth checkout.",
    tech: [FaReact, SiTailwindcss, SiFramer],
    live: "http://the9to9restaurant.com/",
  },
  {
    title: "CIHS INSTITUTE",
    image: "/cihs.jpeg",
    description: "Institutional website for admissions & compelete academic management.",
    tech: [FaReact, SiTailwindcss],
    live: "http://cihsstudies.com/",
  },
  {
    title: "PITTENWEEM CHOCLATE COMPANY",
    image: "/choc.png",
    description: "A premium chocolate brand website showcasing handcrafted chocolates with smooth browsing and online ordering",
    tech: [FaReact, SiNextdotjs, SiMongodb],
    live: "https://pittenweemchocolate.co.uk/",
  },
  {
    title: "ZIZA BEDS",
    image: "/ziza.png",
    description: "A furniture delivery system with product browsing, cart, and seamless checkout.",
    tech: [FaReact, FaNodeJs, SiMongodb],
    live: "#",
  },
  {
    title: "YAVAR AI",
    image: "/yavar.png",
    description: "Reinventingworkflows to deliver Enterprise Intelligence.",
    tech: [FaReact, SiTailwindcss, SiFramer],
    live: "https://www.yavar.ai/",
  },
];

/* =======================
   👉 CARD COMPONENT
======================= */
const Card = ({ project }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [14, -14]);
  const rotateY = useTransform(x, [-100, 100], [-14, 14]);

  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const posX = e.clientX - rect.left;
    const posY = e.clientY - rect.top;

    e.currentTarget.style.setProperty("--x", `${posX}px`);
    e.currentTarget.style.setProperty("--y", `${posY}px`);

    x.set(posX - rect.width / 2);
    y.set(posY - rect.height / 2);
    setCursor({ x: posX, y: posY });
  };

  const handleLeave = (e) => {
    setHovered(false);
    x.set(0);
    y.set(0);
    e.currentTarget.style.setProperty("--x", `50%`);
    e.currentTarget.style.setProperty("--y", `50%`);
  };

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className="relative rounded-xl bg-[#0b0b0d] overflow-hidden cursor-none"
    >
      {/* 🔴 CUSTOM CURSOR */}
      {hovered && (
        <motion.div
          animate={{ x: cursor.x - 45, y: cursor.y - 45 }}
          className="pointer-events-none absolute z-50 w-24 h-24 rounded-full bg-red-500/20 border border-red-500 backdrop-blur-md flex items-center justify-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
            className="absolute inset-0 rounded-full"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <defs>
                <path
                  id="circle"
                  d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                />
              </defs>
              <text fill="white" fontSize="8" letterSpacing="2">
                <textPath href="#circle">
                  OPEN TO REVIEW MY DELIVIRED PROJECT •
                </textPath>
              </text>
            </svg>
          </motion.div>
        </motion.div>
      )}

      {/* 🔥 BORDER GLOW */}
      <div
        className="absolute inset-0 rounded-xl pointer-events-none"
        style={{
          background:
            "radial-gradient(300px circle at var(--x) var(--y), rgba(239,68,68,.9), transparent 65%)",
        }}
      />

      {/* CARD CONTENT */}
      <div className="relative z-10 rounded-xl border border-white/10 bg-[#0b0b0d]">
        <div className="h-36 overflow-hidden rounded-t-xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-5">
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <p className="text-gray-400 text-sm mt-2">
            {project.description}
          </p>

          <div className="flex gap-3 text-lg text-gray-400 mt-4">
            {project.tech.map((Icon, i) => (
              <Icon key={i} className="hover:text-white transition" />
            ))}
          </div>

          <a
            href={project.live}
            className="inline-flex items-center gap-2 mt-4 text-sm text-red-500 hover:text-white"
          >
            <ExternalLink size={14} /> Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

/* =======================
   👉 MAIN PORTFOLIO
======================= */
const Portfolio = () => {
  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold mb-14">
          Selected <span className="text-pink-500 font-extrabold">Portfolio</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
