import React from "react";
import { motion } from "framer-motion";
import {
  FaArrowUpRightFromSquare,
  FaCode,
  FaLayerGroup,
  FaRocket,
  FaCheck,
  FaRobot,
  FaBrain,
  FaBolt,
  FaChartLine,
} from "react-icons/fa6";

const AboutHero = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050505] text-white py-24 md:py-32 scroll-mt-24"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="absolute inset-0 pointer-events-none">
        {/* Main red glow */}
        <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] rounded-full bg-red-500/[0.08] blur-[160px]" />

        {/* AI glow */}
        <div className="absolute top-[35%] right-[-150px] w-[500px] h-[500px] rounded-full bg-purple-500/[0.06] blur-[160px]" />

        {/* Bottom glow */}
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] rounded-full bg-red-600/[0.05] blur-[140px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">

        {/* TOP LABEL */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-4 mb-14"
        >
          <span className="h-px w-10 bg-red-500" />

          <span className="text-xs uppercase tracking-[0.35em] text-white/40">
            About the person behind the work
          </span>

          <span className="hidden sm:block text-xs text-white/20">
            01 / 04
          </span>
        </motion.div>

        {/* =====================================================
            HERO INTRO
        ===================================================== */}

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-16 lg:gap-24 items-center">

          {/* LEFT */}

          <div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                text-5xl
                sm:text-6xl
                md:text-7xl
                lg:text-[82px]
                font-semibold
                tracking-[-0.06em]
                leading-[0.92]
              "
            >
              I turn
              <br />

              <span className="text-white/30">
                complex ideas
              </span>

              <br />

              into{" "}
              <span className="relative inline-block">
                useful products
                <span className="absolute -bottom-2 left-0 w-1/2 h-[3px] bg-red-500" />
              </span>
              .
            </motion.h2>

            {/* INTRO */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mt-10 max-w-2xl"
            >
              <p className="text-base md:text-lg leading-relaxed text-white/55">
                I'm{" "}
                <span className="text-white font-semibold">
                  Sudhanshu Kumar
                </span>
                , a full-stack developer, product builder and AI automation
                specialist. I design and build modern digital products,
                intelligent AI agents and business systems that solve real
                problems.
              </p>

              <p className="mt-5 text-base leading-relaxed text-white/35">
                My work goes beyond writing code. I understand the business,
                design the experience, build the technology and automate
                repetitive workflows so businesses can operate smarter,
                faster and with less manual effort.
              </p>
            </motion.div>

            {/* QUICK STATS */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="
                mt-10
                grid
                grid-cols-2
                sm:grid-cols-4
                gap-3
                max-w-2xl
              "
            >
              <Stat
                number="Full Stack"
                label="Development"
              />

              <Stat
                number="AI Agents"
                label="Automation"
              />

              <Stat
                number="Product"
                label="Mindset"
              />

              <Stat
                number="Business"
                label="Focused"
              />
            </motion.div>
          </div>

          {/* =====================================================
              IMAGE COMPOSITION
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-[280px] sm:w-[330px] md:w-[380px]">

              {/* Decorative ring */}

              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  -inset-8
                  rounded-full
                  border
                  border-dashed
                  border-white/[0.08]
                "
              />

              {/* Glow */}

              <div
                className="
                  absolute
                  inset-10
                  bg-red-500/20
                  blur-[90px]
                  rounded-full
                "
              />

              {/* Main image */}

              <div
                className="
                  relative
                  aspect-[4/5]
                  rounded-[32px]
                  overflow-hidden
                  border border-white/10
                  bg-[#0c0c0c]
                  shadow-[0_40px_120px_rgba(0,0,0,0.8)]
                "
              >
                <img
                  src="/sudh5.jpeg"
                  alt="Sudhanshu Kumar"
                  className="
                    w-full
                    h-full
                    object-cover
                    grayscale-[10%]
                    scale-[1.02]
                    transition
                    duration-700
                    hover:scale-105
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/85
                    via-transparent
                    to-black/10
                  "
                />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-xs uppercase tracking-[0.25em] text-white/70">
                    Based in India
                  </p>

                  <p className="mt-2 text-lg font-medium">
                    Building the future of digital business.
                  </p>
                </div>
              </div>

              {/* AI FLOATING BADGE */}

              <motion.div
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 1, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  -left-8
                  sm:-left-12
                  top-20
                  px-4
                  py-3
                  rounded-2xl
                  border border-red-500/20
                  bg-[#0b0b0b]/85
                  backdrop-blur-xl
                  shadow-[0_15px_50px_rgba(0,0,0,0.5)]
                "
              >
                <div className="flex items-center gap-3">

                  <div
                    className="
                      w-9
                      h-9
                      rounded-xl
                      bg-red-500/10
                      border border-red-500/20
                      flex
                      items-center
                      justify-center
                      text-red-400
                    "
                  >
                    <FaRobot size={15} />
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-white/30">
                      Building
                    </p>

                    <p className="text-xs font-medium text-white/80">
                      AI Agents
                    </p>
                  </div>

                </div>
              </motion.div>

              {/* AVAILABILITY */}

              <motion.div
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  -right-6
                  sm:-right-10
                  bottom-20
                  px-4
                  py-3
                  rounded-2xl
                  border border-white/10
                  bg-[#0b0b0b]/80
                  backdrop-blur-xl
                "
              >
                <div className="flex items-center gap-2">

                  <span className="relative flex w-2 h-2">
                    <span
                      className="
                        absolute
                        inline-flex
                        w-full
                        h-full
                        rounded-full
                        bg-green-400
                        animate-ping
                        opacity-50
                      "
                    />

                    <span
                      className="
                        relative
                        inline-flex
                        w-2
                        h-2
                        rounded-full
                        bg-green-400
                      "
                    />
                  </span>

                  <span className="text-xs text-white/60">
                    Open to opportunities
                  </span>

                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>

        {/* =====================================================
            WHAT I ACTUALLY DO
        ===================================================== */}

        <div className="mt-28 md:mt-36">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_15px_rgba(255,0,0,0.8)]" />

              <p className="text-xs uppercase tracking-[0.3em] text-red-400">
                What I actually do
              </p>
            </div>

            <h3
              className="
                text-3xl
                md:text-5xl
                font-semibold
                tracking-[-0.04em]
              "
            >
              I don't just build websites.
              <br />
              <span className="text-white/30">
                I build systems that work for your business.
              </span>
            </h3>

            <p className="mt-5 max-w-2xl text-white/40 leading-relaxed">
              From digital products to AI-powered employees, I combine
              development, automation and product thinking to help businesses
              reduce manual work and operate more efficiently.
            </p>
          </motion.div>

          {/* SERVICE CARDS */}

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">

            <ServiceCard
              icon={<FaLayerGroup />}
              number="01"
              title="Product Development"
              description="Modern websites, dashboards, SaaS platforms and complete web applications built around real business requirements."
            />

            <ServiceCard
              icon={<FaRobot />}
              number="02"
              title="AI Agents"
              description="Intelligent AI agents that can handle repetitive business tasks, answer customers, process information and support daily operations."
              featured
            />

            <ServiceCard
              icon={<FaBolt />}
              number="03"
              title="Business Automation"
              description="Automate repetitive workflows, customer communication, lead handling and operational processes to reduce manual effort."
            />

            <ServiceCard
              icon={<FaRocket />}
              number="04"
              title="Engineering"
              description="Clean architecture, reusable systems, performance and scalable technology designed to grow with your business."
            />

          </div>
        </div>

        {/* =====================================================
            AI BUSINESS SECTION
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            mt-5
            relative
            rounded-[30px]
            border
            border-red-500/20
            bg-gradient-to-br
            from-red-500/[0.08]
            via-white/[0.025]
            to-transparent
            overflow-hidden
          "
        >

          {/* Glow */}

          <div
            className="
              absolute
              -right-20
              -top-20
              w-96
              h-96
              bg-red-500/15
              blur-[120px]
              rounded-full
            "
          />

          <div
            className="
              absolute
              left-1/3
              bottom-[-100px]
              w-72
              h-72
              bg-purple-500/10
              blur-[100px]
              rounded-full
            "
          />

          <div className="relative p-7 md:p-12">

            <div className="grid lg:grid-cols-[1fr_0.8fr] gap-12 items-center">

              {/* LEFT */}

              <div>

                <div className="flex items-center gap-3 mb-6">

                  <div
                    className="
                      w-10
                      h-10
                      rounded-xl
                      bg-red-500/10
                      border border-red-500/20
                      flex
                      items-center
                      justify-center
                      text-red-400
                    "
                  >
                    <FaBrain />
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-red-400">
                      AI-Powered Business
                    </p>

                    <p className="text-xs text-white/30 mt-1">
                      Automation • Intelligence • Scale
                    </p>
                  </div>

                </div>

                <h3
                  className="
                    text-4xl
                    md:text-5xl
                    lg:text-6xl
                    font-semibold
                    tracking-[-0.05em]
                    leading-[0.95]
                  "
                >
                  Give your business
                  <br />

                  <span className="text-white/30">
                    an AI employee.
                  </span>
                </h3>

                <p
                  className="
                    mt-6
                    max-w-2xl
                    text-sm
                    md:text-base
                    leading-relaxed
                    text-white/45
                  "
                >
                  I design AI agents that can become part of your business
                  operations — handling repetitive tasks, answering customer
                  questions, qualifying leads, managing workflows and assisting
                  your team around the clock.
                </p>

                <p
                  className="
                    mt-4
                    max-w-2xl
                    text-sm
                    leading-relaxed
                    text-white/30
                  "
                >
                  Instead of adding more people for repetitive operational
                  work, businesses can automate those processes with intelligent
                  AI systems and let their human team focus on higher-value work.
                </p>

              </div>

              {/* RIGHT AI VISUAL */}

              <div className="relative">

                <div
                  className="
                    relative
                    rounded-[28px]
                    border border-white/10
                    bg-black/40
                    backdrop-blur-xl
                    p-6
                    overflow-hidden
                  "
                >

                  {/* Top */}

                  <div className="flex items-center justify-between mb-8">

                    <div className="flex items-center gap-3">

                      <div className="relative w-3 h-3">
                        <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-40" />
                        <span className="relative block w-3 h-3 rounded-full bg-green-400" />
                      </div>

                      <span className="text-xs text-white/60">
                        AI Agent Online
                      </span>

                    </div>

                    <span className="text-[10px] text-white/20 uppercase tracking-widest">
                      24 / 7
                    </span>

                  </div>

                  {/* AI workflow */}

                  <div className="space-y-3">

                    <AIItem
                      icon={<FaBrain />}
                      title="Understands"
                      text="Customer questions & business context"
                    />

                    <AIItem
                      icon={<FaBolt />}
                      title="Automates"
                      text="Repetitive workflows & daily tasks"
                    />

                    <AIItem
                      icon={<FaChartLine />}
                      title="Improves"
                      text="Speed, efficiency & customer experience"
                    />

                  </div>

                  {/* Bottom */}

                  <div
                    className="
                      mt-6
                      pt-5
                      border-t border-white/10
                      flex
                      items-center
                      justify-between
                    "
                  >

                    <span className="text-xs text-white/30">
                      Human + AI
                    </span>

                    <span className="text-xs text-red-400">
                      Built for business
                    </span>

                  </div>

                </div>

              </div>

            </div>
          </div>
        </motion.div>

        {/* =====================================================
            WEBALA
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            mt-5
            relative
            rounded-[28px]
            border
            border-white/10
            bg-white/[0.025]
            overflow-hidden
          "
        >

          <div
            className="
              absolute
              right-0
              top-0
              w-96
              h-96
              bg-red-500/10
              blur-[120px]
              rounded-full
            "
          />

          <div
            className="
              relative
              p-7
              md:p-10
              grid
              md:grid-cols-[1fr_auto]
              gap-8
              items-center
            "
          >

            <div>

              <div className="flex items-center gap-3 mb-5">

                <span
                  className="
                    px-3
                    py-1
                    rounded-full
                    border border-red-500/20
                    bg-red-500/5
                    text-red-400
                    text-[10px]
                    uppercase
                    tracking-[0.25em]
                  "
                >
                  Founder
                </span>

                <span className="text-white/20 text-xs">
                  —
                </span>

                <span className="text-xs text-white/40">
                  WEBALA
                </span>

              </div>

              <h3
                className="
                  text-3xl
                  md:text-5xl
                  font-semibold
                  tracking-tight
                "
              >
                Building businesses,
                <br />

                <span className="text-white/35">
                  not just websites.
                </span>
              </h3>

              <p
                className="
                  mt-5
                  max-w-2xl
                  text-sm
                  md:text-base
                  leading-relaxed
                  text-white/45
                "
              >
                I'm also the founder of{" "}
                <a
                  href="https://www.webala.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-white
                    font-semibold
                    hover:text-red-400
                    transition
                  "
                >
                  WEBALA
                </a>
                , where I help businesses build websites, applications,
                automation systems, AI agents and digital solutions designed
                around real business goals.
              </p>

            </div>

            <a
              href="https://www.webala.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                shrink-0
                inline-flex
                items-center
                gap-3
                px-6
                py-4
                rounded-full
                bg-white
                text-black
                text-sm
                font-semibold
                hover:bg-red-500
                hover:text-white
                transition-all
              "
            >
              Visit Webala

              <FaArrowUpRightFromSquare
                className="
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                  transition
                "
              />
            </a>

          </div>
        </motion.div>

        {/* =====================================================
            PHILOSOPHY
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            mt-5
            grid
            lg:grid-cols-[0.8fr_1.2fr]
            gap-5
          "
        >

          {/* Quote */}

          <div
            className="
              rounded-[28px]
              border border-white/10
              bg-white/[0.025]
              p-8
              md:p-10
            "
          >

            <p
              className="
                text-xs
                uppercase
                tracking-[0.3em]
                text-white/25
                mb-8
              "
            >
              My approach
            </p>

            <p
              className="
                text-2xl
                md:text-3xl
                font-medium
                leading-snug
                tracking-tight
              "
            >
              "Good technology should make
              <span className="text-red-400">
                {" "}complex things feel simple.
              </span>
              "
            </p>

          </div>

          {/* Principles */}

          <div
            className="
              rounded-[28px]
              border border-white/10
              bg-white/[0.025]
              p-8
              md:p-10
            "
          >

            <div className="grid sm:grid-cols-2 gap-6">

              <Principle
                title="Think beyond code"
                text="Understand the business problem before choosing the technical solution."
              />

              <Principle
                title="Use AI intelligently"
                text="Automate repetitive work while keeping people focused on decisions that actually require human thinking."
              />

              <Principle
                title="Design for people"
                text="Every interface and AI interaction should feel intuitive, intentional and easy to use."
              />

              <Principle
                title="Build to scale"
                text="Create systems that can evolve with the business instead of becoming technical debt."
              />

              <Principle
                title="Deliver real value"
                text="The final product should solve a business problem, not simply look impressive."
              />

              <Principle
                title="Human + technology"
                text="The best systems don't replace good people — they remove repetitive work and help teams do more."
              />

            </div>

          </div>

        </motion.div>

        {/* =====================================================
            BOTTOM STATEMENT
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-24 text-center"
        >

          <p
            className="
              text-xs
              uppercase
              tracking-[0.35em]
              text-white/20
            "
          >
            Idea → Product → Automation → Growth
          </p>

          <p
            className="
              mt-5
              text-3xl
              md:text-5xl
              font-semibold
              tracking-[-0.04em]
            "
          >
            Let's build something
            <span className="text-red-500">
              {" "}worth remembering.
            </span>
          </p>

          <p className="mt-4 text-sm text-white/25">
            Websites. Products. AI Agents. Business Automation.
          </p>

        </motion.div>

      </div>
    </section>
  );
};


/* ============================================================
   STAT
============================================================ */

const Stat = ({ number, label }) => {
  return (
    <div
      className="
        group
        rounded-2xl
        border border-white/10
        bg-white/[0.025]
        px-5
        py-4
        hover:border-red-500/20
        hover:bg-red-500/[0.03]
        transition
      "
    >
      <p className="text-sm font-medium text-white">
        {number}
      </p>

      <p className="mt-1 text-[11px] uppercase tracking-wider text-white/30">
        {label}
      </p>
    </div>
  );
};


/* ============================================================
   SERVICE CARD
============================================================ */

const ServiceCard = ({
  icon,
  number,
  title,
  description,
  featured,
}) => {
  return (
    <motion.div
      whileHover={{ y: -7 }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 20,
      }}
      className={`
        group
        relative
        rounded-[26px]
        border
        ${
          featured
            ? "border-red-500/30 bg-red-500/[0.045]"
            : "border-white/10 bg-white/[0.025]"
        }
        p-7
        overflow-hidden
        hover:border-red-500/30
        transition-colors
      `}
    >

      {/* Hover glow */}

      <div
        className="
          absolute
          -top-20
          -right-20
          w-40
          h-40
          bg-red-500/10
          blur-[70px]
          rounded-full
          opacity-0
          group-hover:opacity-100
          transition
        "
      />

      {/* Featured indicator */}

      {featured && (
        <div
          className="
            absolute
            top-5
            right-5
            px-2.5
            py-1
            rounded-full
            bg-red-500/10
            border border-red-500/20
            text-[9px]
            uppercase
            tracking-widest
            text-red-400
          "
        >
          AI
        </div>
      )}

      <div
        className="
          relative
          flex
          justify-between
          items-start
        "
      >

        <div
          className={`
            w-11
            h-11
            rounded-2xl
            ${
              featured
                ? "bg-red-500/15 border-red-500/20"
                : "bg-red-500/10 border-red-500/10"
            }
            border
            flex
            items-center
            justify-center
            text-red-400
          `}
        >
          {icon}
        </div>

        <span
          className="
            text-xs
            text-white/20
            font-mono
          "
        >
          {number}
        </span>

      </div>

      <h4
        className="
          mt-10
          text-xl
          font-semibold
          tracking-tight
        "
      >
        {title}
      </h4>

      <p
        className="
          mt-3
          text-sm
          leading-relaxed
          text-white/40
        "
      >
        {description}
      </p>

      <div
        className="
          mt-7
          flex
          items-center
          gap-2
          text-[11px]
          uppercase
          tracking-widest
          text-white/20
          group-hover:text-red-400
          transition
        "
      >
        <FaCheck size={9} />
        Built with purpose
      </div>

    </motion.div>
  );
};


/* ============================================================
   AI ITEM
============================================================ */

const AIItem = ({ icon, title, text }) => {
  return (
    <motion.div
      whileHover={{ x: 5 }}
      className="
        group
        flex
        items-center
        gap-4
        rounded-2xl
        border
        border-white/10
        bg-white/[0.025]
        p-4
        hover:border-red-500/20
        transition
      "
    >

      <div
        className="
          shrink-0
          w-10
          h-10
          rounded-xl
          bg-red-500/10
          border border-red-500/10
          flex
          items-center
          justify-center
          text-red-400
        "
      >
        {icon}
      </div>

      <div>
        <p className="text-sm font-medium text-white">
          {title}
        </p>

        <p className="mt-1 text-xs text-white/30">
          {text}
        </p>
      </div>

    </motion.div>
  );
};


/* ============================================================
   PRINCIPLE
============================================================ */

const Principle = ({ title, text }) => {
  return (
    <div
      className="
        border-t
        border-white/10
        pt-5
      "
    >
      <h4 className="text-sm font-medium">
        {title}
      </h4>

      <p
        className="
          mt-2
          text-xs
          leading-relaxed
          text-white/35
        "
      >
        {text}
      </p>
    </div>
  );
};


export default AboutHero;