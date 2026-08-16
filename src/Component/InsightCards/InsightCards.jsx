import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  FaArrowRight,
  FaCode,
  FaLightbulb,
  FaRocket,
  FaLayerGroup,
  FaCheck,
} from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiFigma,
} from "react-icons/si";

/* =========================================================
   3D TILT CARD
========================================================= */

const TiltCard = ({ children, className = "" }) => {
  const ref = useRef(null);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springX = useSpring(rotateX, {
    stiffness: 180,
    damping: 18,
  });

  const springY = useSpring(rotateY, {
    stiffness: 180,
    damping: 18,
  });

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    rotateX.set(((y - centerY) / centerY) * -4);
    rotateY.set(((x - centerX) / centerX) * 4);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: springX,
        rotateY: springY,
        transformStyle: "preserve-3d",
      }}
      className={`relative ${className}`}
    >
      {children}
    </motion.div>
  );
};

/* =========================================================
   MAIN SECTION
========================================================= */

const InsightCards = () => {
  return (
    <section className="relative overflow-hidden bg-[#050505] text-white py-28 md:py-40">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="absolute inset-0 pointer-events-none">

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Red glow */}
        <div className="absolute top-[-200px] left-[10%] w-[500px] h-[500px] rounded-full bg-red-600/[0.08] blur-[150px]" />

        <div className="absolute bottom-[-200px] right-[5%] w-[500px] h-[500px] rounded-full bg-red-500/[0.06] blur-[150px]" />
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">

        {/* ===================================================
            SECTION HEADER
        =================================================== */}

        <div className="max-w-4xl mb-16 md:mb-24">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-8 h-px bg-red-500" />

            <span className="text-xs uppercase tracking-[0.3em] text-white/35">
              The way I work
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              font-semibold
              tracking-[-0.055em]
              leading-[0.95]
            "
          >
            I don't just build
            <br />

            <span className="text-white/25">
              websites.
            </span>

            <br />

            I build{" "}
            <span className="relative inline-block">
              products.
              <span className="absolute left-0 -bottom-2 w-[70%] h-[3px] bg-red-500" />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="
              mt-8
              max-w-2xl
              text-base
              md:text-lg
              leading-relaxed
              text-white/45
            "
          >
            From the first idea to the final launch, I focus on creating
            digital experiences that look premium, feel effortless and
            actually solve a business problem.
          </motion.p>
        </div>

        {/* ===================================================
            BENTO GRID
        =================================================== */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">

          {/* =================================================
              CARD 01 — PROCESS
          ================================================= */}



          {/* =================================================
              CARD 02 — VALUE
          ================================================= */}

          <TiltCard className="lg:col-span-4">

            <div
              className="
                group
                relative
                h-full
                min-h-[430px]
                rounded-[30px]
                border border-white/[0.08]
                bg-gradient-to-b from-red-500/[0.08] to-white/[0.015]
                p-7
                md:p-9
                overflow-hidden
              "
            >

              <div className="absolute -right-20 -top-20 w-56 h-56 rounded-full bg-red-500/[0.08] blur-[80px]" />

              <div className="relative z-10 h-full flex flex-col justify-between">

                <div>

                  <span className="text-xs uppercase tracking-[0.25em] text-red-400/70">
                    What matters
                  </span>

                  <h3 className="mt-4 text-3xl font-semibold tracking-tight">
                    Good design is only half the job.
                  </h3>

                  <p className="mt-5 text-sm leading-relaxed text-white/45">
                    A beautiful interface means little if users don't
                    understand it or the business doesn't benefit from it.
                  </p>

                </div>

                <div className="mt-10 space-y-4">

                  <ValueItem text="Clear user experience" />
                  <ValueItem text="Fast & responsive products" />
                  <ValueItem text="Business-focused decisions" />
                  <ValueItem text="Clean & scalable development" />

                </div>

              </div>
            </div>

          </TiltCard>

          {/* =================================================
              CARD 03 — TECHNOLOGY
          ================================================= */}

          {/* <TiltCard className="lg:col-span-5">

            <div
              className="
                relative
                min-h-[390px]
                h-full
                rounded-[30px]
                border border-white/[0.08]
                bg-white/[0.02]
                p-7
                md:p-9
                overflow-hidden
              "
            >

              <div className="flex items-center justify-between">

                <div>
                  <span className="text-xs uppercase tracking-[0.25em] text-white/30">
                    Technology
                  </span>

                  <h3 className="mt-3 text-2xl font-semibold">
                    Tools behind the work
                  </h3>
                </div>

                <FaCode className="text-red-400" />

              </div>

              <div className="mt-10 flex flex-wrap gap-3">

                <Tech label="React" icon={SiReact} />
                <Tech label="Next.js" icon={SiNextdotjs} />
                <Tech label="TypeScript" icon={SiTypescript} />
                <Tech label="Tailwind" icon={SiTailwindcss} />
                <Tech label="Node.js" icon={SiNodedotjs} />
                <Tech label="MongoDB" icon={SiMongodb} />
                <Tech label="PostgreSQL" icon={SiPostgresql} />
                <Tech label="Figma" icon={SiFigma} />

              </div>

              <p className="absolute bottom-8 left-9 right-9 text-xs text-white/25 leading-relaxed">
                The stack changes according to the product. The goal doesn't:
                reliable, maintainable and high-quality digital experiences.
              </p>

            </div>

          </TiltCard> */}

          {/* =================================================
              CARD 04 — COLLABORATION
          ================================================= */}

          <TiltCard className="lg:col-span-7">

            <div
              className="
                group
                relative
                min-h-[390px]
                h-full
                rounded-[30px]
                border border-white/[0.08]
                bg-white/[0.02]
                overflow-hidden
                p-7
                md:p-9
              "
            >

              {/* Decorative circles */}
              <div className="absolute right-[-80px] bottom-[-100px] w-[300px] h-[300px] rounded-full border border-white/[0.04]" />

              <div className="absolute right-[-30px] bottom-[-50px] w-[200px] h-[200px] rounded-full border border-red-500/[0.08]" />

              <div className="relative z-10">

                <span className="text-xs uppercase tracking-[0.25em] text-white/30">
                  Collaboration
                </span>

                <div className="mt-4 max-w-xl">

                  <h3 className="text-3xl md:text-4xl font-semibold tracking-tight">
                    Clear communication.
                    <br />
                    <span className="text-white/30">
                      No unnecessary complexity.
                    </span>
                  </h3>

                  <p className="mt-5 text-sm md:text-base text-white/45 leading-relaxed max-w-lg">
                    I believe the best projects come from good communication.
                    You should always know what is being built, why it is
                    being built and what happens next.
                  </p>

                </div>

                {/* Collaboration points */}
                <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-5 max-w-lg">

                  <ValueItem text="Regular updates" />
                  <ValueItem text="Transparent workflow" />
                  <ValueItem text="Flexible collaboration" />
                  <ValueItem text="Long-term mindset" />

                </div>

              </div>

              {/* Status */}
              <div
                className="
                  absolute
                  right-7
                  top-7
                  flex
                  items-center
                  gap-2
                  px-3
                  py-2
                  rounded-full
                  border
                  border-green-500/20
                  bg-green-500/[0.04]
                "
              >

                <span className="relative flex h-2 w-2">

                  <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60 animate-ping" />

                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />

                </span>

                <span className="text-[10px] text-green-300/80">
                  Open to projects
                </span>

              </div>

            </div>

          </TiltCard>

          {/* =================================================
              CARD 05 — CTA
          ================================================= */}

          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-12"
          >

            <div
              className="
                relative
                rounded-[32px]
                overflow-hidden
                border
                border-red-500/20
                bg-gradient-to-r
                from-red-500/[0.10]
                via-white/[0.025]
                to-transparent
                p-8
                md:p-12
              "
            >

              {/* Glow */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-red-500/[0.08] blur-[100px]" />

              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-10">

                <div className="max-w-2xl">

                  <span className="text-xs uppercase tracking-[0.3em] text-red-400">
                    Have an idea?
                  </span>

                  <h3 className="mt-4 text-3xl md:text-5xl font-semibold tracking-[-0.04em]">
                    Let's turn it into
                    <span className="text-white/30">
                      {" "}real Earnings.
                    </span>
                  </h3>

                  <p className="mt-4 text-sm md:text-base text-white/40">
                    Whether it's a website, SaaS product or a completely new
                    idea — let's figure out the right way to build it.
                  </p>

                </div>

                <a
                  href="mailto:tiwarisunny7352@gmail.com"
                  className="
                    group
                    shrink-0
                    inline-flex
                    items-center
                    justify-center
                    gap-4
                    rounded-full
                    bg-white
                    text-black
                    px-7
                    py-4
                    font-semibold
                    text-sm
                    transition-all
                    duration-300
                    hover:bg-red-500
                    hover:text-white
                    hover:shadow-[0_0_50px_rgba(239,68,68,0.25)]
                  "
                >

                  Start a conversation

                  <span
                    className="
                      w-8
                      h-8
                      rounded-full
                      bg-black
                      text-white
                      flex
                      items-center
                      justify-center
                      transition-transform
                      duration-300
                      group-hover:rotate-45
                    "
                  >
                    <FaArrowRight size={12} />
                  </span>

                </a>

              </div>
            </div>

          </motion.div>

        </div>

      </div>

      {/* =====================================================
          BOTTOM SPACE DECORATION
      ===================================================== */}

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

    </section>
  );
};

/* =========================================================
   PROCESS STEP
========================================================= */

const ProcessStep = ({ number, icon, title, text }) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="group"
    >

      <div className="flex items-center gap-3">

        <span className="text-[10px] tracking-widest text-red-400">
          {number}
        </span>

        <div className="w-9 h-9 rounded-xl border border-white/[0.08] bg-white/[0.025] flex items-center justify-center text-white/50 group-hover:text-red-400 group-hover:border-red-500/20 transition">
          {icon}
        </div>

      </div>

      <h4 className="mt-5 font-medium text-white">
        {title}
      </h4>

      <p className="mt-2 text-xs leading-relaxed text-white/35">
        {text}
      </p>

    </motion.div>
  );
};

/* =========================================================
   VALUE ITEM
========================================================= */

const ValueItem = ({ text }) => {
  return (
    <div className="flex items-center gap-3">

      <span
        className="
          w-5
          h-5
          shrink-0
          rounded-full
          bg-red-500/[0.08]
          border border-red-500/20
          flex
          items-center
          justify-center
          text-red-400
        "
      >
        <FaCheck size={8} />
      </span>

      <span className="text-xs md:text-sm text-white/50">
        {text}
      </span>

    </div>
  );
};

/* =========================================================
   TECH BADGE
========================================================= */

const Tech = ({ label, icon: Icon }) => {
  return (
    <motion.div
      whileHover={{
        y: -4,
        scale: 1.03,
      }}
      transition={{ duration: 0.2 }}
      className="
        group
        flex
        items-center
        gap-2.5
        px-4
        py-2.5
        rounded-full
        border
        border-white/[0.08]
        bg-white/[0.025]
        text-xs
        text-white/55
        hover:text-white
        hover:border-red-500/30
        hover:bg-red-500/[0.04]
        transition-all
      "
    >

      <Icon
        className="
          text-white/35
          group-hover:text-red-400
          transition-colors
        "
        size={15}
      />

      <span>{label}</span>

    </motion.div>
    
  );
};

export default InsightCards;