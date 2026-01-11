import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Armaan Singh",
    role: "Technical Lead · Infosys",
    text: "A highly dependable frontend developer with exceptional attention to detail. His structured thinking, clean code practices, and proactive communication significantly elevated our product quality.",
    gradient: "from-purple-600/40 to-indigo-800/40",
  },
  {
    name: "Akshit Malik",
    role: "Software Engineer · Google",
    text: "Consistently delivers polished, scalable interfaces. Strong command over modern frontend architecture and performance optimization.",
    gradient: "from-sky-600/40 to-blue-800/40",
  },
  {
    name: "Yuvika Bhat",
    role: "Product Manager · Amazon",
    text: "Perfect balance of engineering and design sense. Quickly understands product vision and delivers elegant, user-centric solutions.",
    gradient: "from-emerald-600/40 to-teal-800/40",
  },
  {
    name: "Rahul Kumar",
    role: "Senior Engineer · Cognizant",
    text: "Creative, reliable, and proactive. Always suggests smart UI improvements and delivers production-ready results.",
    gradient: "from-pink-600/40 to-rose-800/40",
  },
  {
    name: "Neha Verma",
    role: "Startup Founder",
    text: "Delivered a premium, modern experience that impressed both users and investors. Speed and quality combined.",
    gradient: "from-orange-500/40 to-red-700/40",
  },
  {
    name: "Rohit Mehra",
    role: "CTO · SaaS Company",
    text: "Strong ownership mindset. Builds scalable UI systems with excellent UX and performance across all devices.",
    gradient: "from-cyan-500/40 to-blue-700/40",
  },
  {
    name: "Simran Kaur",
    role: "UI/UX Designer",
    text: "Pixel-perfect execution with smooth animations. A developer who truly respects design systems.",
    gradient: "from-fuchsia-500/40 to-purple-700/40",
  },
  {
    name: "Amit Joshi",
    role: "Product Engineer",
    text: "Highly dependable with great communication. Delivers clean, maintainable, and scalable frontend code.",
    gradient: "from-lime-500/40 to-green-700/40",
  },
  {
    name: "Pooja Sharma",
    role: "Marketing Lead",
    text: "Transformed ideas into a fast, responsive, and visually stunning frontend that boosted engagement.",
    gradient: "from-yellow-500/40 to-orange-700/40",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-black py-20 md:py-28 overflow-hidden text-white font-extrabold">
      
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-12 md:mb-16">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          Proof of impact from the{" "}
          <span className="italic text-pink-500">trusted network</span>
        </h2>
      </div>

      {/* Auto Scroll */}
      <motion.div
        className="flex gap-5 md:gap-8 w-max px-4 md:px-6"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 60,
        }}
      >
        {[...testimonials, ...testimonials].map((item, index) => (
          <motion.div
            key={index}
            whileTap={{ scale: 0.96 }}
            className={`relative 
              w-[260px] sm:w-[300px] md:w-[320px]
              h-[360px] sm:h-[380px]
              rounded-3xl p-[1px]
              bg-gradient-to-br ${item.gradient}`}
          >
            {/* Card */}
            <div
              className="relative h-full rounded-3xl p-5 sm:p-6 flex flex-col justify-between"
              style={{
                background:
                  "linear-gradient(180deg, rgba(18,18,18,0.96), rgba(10,10,10,0.96))",
              }}
            >
              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${item.gradient} opacity-25`}
              />

              {/* Text */}
              <p className="relative z-10 text-[13px] sm:text-sm text-gray-200 leading-relaxed">
                {item.text}
              </p>

              {/* Footer */}
              <div className="relative z-10 mt-5 pt-4 border-t border-white/10">
                <h4 className="font-semibold text-sm sm:text-base">
                  {item.name}
                </h4>
                <p className="text-[11px] sm:text-xs text-gray-400 mt-1">
                  {item.role}
                </p>
              </div>

              {/* Glow */}
              <div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{
                  background:
                    "radial-gradient(280px circle at top, rgba(255,255,255,0.15), transparent 60%)",
                }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials;
