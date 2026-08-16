import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowRight,
  FaCopy,
  FaGithub,
  FaLinkedinIn,
  FaCode,
  FaInstagram,
} from "react-icons/fa";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import toast, { Toaster } from "react-hot-toast";

const roles = [
  "Full Stack Developer",
  "Product Builder",
  "Software Developer",
  "Creative Technologist",
  "Problem Solver",
];

const Landingpage = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [openForm, setOpenForm] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const [form, setForm] = useState({
    name: "",
    message: "",
  });

  /* --------------------------------
     ROLE ANIMATION
  -------------------------------- */
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2600);

    return () => clearInterval(interval);
  }, []);

  /* --------------------------------
     MOUSE TRACKING
  -------------------------------- */
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  /* --------------------------------
     COPY EMAIL
  -------------------------------- */
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("tiwarisunny7352@gmail.com");
      toast.success("Email copied successfully");
    } catch {
      toast.error("Couldn't copy email");
    }
  };

  /* --------------------------------
     WHATSAPP FORM
  -------------------------------- */
  const handleSubmit = () => {
    if (!form.name.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields");
      return;
    }

    const phone = "917352205506";

    const text = encodeURIComponent(
      `Hello Sudhanshu,\n\nI'm ${form.name}.\n\n${form.message}`
    );

    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");

    setForm({
      name: "",
      message: "",
    });

    setOpenForm(false);
  };

  /* --------------------------------
     MAGNETIC BUTTON
  -------------------------------- */
  const MagneticButton = ({ children, onClick }) => {
    const [position, setPosition] = useState({
      x: 0,
      y: 0,
    });

    return (
      <motion.button
        onClick={onClick}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();

          const x =
            (e.clientX - rect.left - rect.width / 2) * 0.18;

          const y =
            (e.clientY - rect.top - rect.height / 2) * 0.18;

          setPosition({ x, y });
        }}
        onMouseLeave={() =>
          setPosition({
            x: 0,
            y: 0,
          })
        }
        animate={{
          x: position.x,
          y: position.y,
        }}
        transition={{
          type: "spring",
          stiffness: 180,
          damping: 12,
        }}
        className="
          group relative
          flex items-center justify-center gap-3
          px-7 py-4
          rounded-full
          bg-white text-black
          font-semibold
          overflow-hidden
          shadow-[0_10px_40px_rgba(255,255,255,0.08)]
          hover:shadow-[0_15px_50px_rgba(255,255,255,0.15)]
          transition-shadow duration-500
        "
      >
        <span className="relative z-10">
          {children}
        </span>

        <span
          className="
            relative z-10
            w-8 h-8
            rounded-full
            bg-black text-white
            flex items-center justify-center
            transition-transform duration-500
            group-hover:rotate-45
          "
        >
          <FaArrowRight size={12} />
        </span>

        <span
          className="
            absolute inset-0
            bg-gradient-to-r
            from-transparent
            via-white/70
            to-transparent
            -translate-x-full
            group-hover:translate-x-full
            transition-transform duration-1000
          "
        />
      </motion.button>
    );
  };

  return (
    <section
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        bg-[#050505]
        text-white
        flex items-center
      "
    >
      <Toaster position="bottom-center" />

      {/* --------------------------------
          CURSOR SPOTLIGHT
      -------------------------------- */}
      <div
        className="
          pointer-events-none
          fixed inset-0
          z-0
        "
        style={{
          background: `
            radial-gradient(
              500px circle at ${mouse.x}px ${mouse.y}px,
              rgba(255, 45, 45, 0.10),
              transparent 70%
            )
          `,
        }}
      />

      {/* --------------------------------
          BACKGROUND GRID
      -------------------------------- */}
      <div
        className="
          absolute inset-0
          opacity-[0.035]
          pointer-events-none
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(255,255,255,0.5) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.5) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* --------------------------------
          RADIAL LIGHT
      -------------------------------- */}
      <div
        className="
          absolute
          top-[-200px]
          left-1/2
          -translate-x-1/2
          w-[700px]
          h-[500px]
          rounded-full
          bg-red-600/10
          blur-[140px]
          pointer-events-none
        "
      />

      {/* --------------------------------
          FLOATING ORBS
      -------------------------------- */}
      <motion.div
        animate={{
          y: [0, -25, 0],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-[18%]
          left-[8%]
          w-24
          h-24
          rounded-full
          border border-white/10
          bg-white/[0.025]
          backdrop-blur-sm
        "
      />

      <motion.div
        animate={{
          y: [0, 20, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-[18%]
          right-[8%]
          w-32
          h-32
          rounded-full
          border border-red-500/10
          bg-red-500/[0.02]
          blur-[1px]
        "
      />

      {/* --------------------------------
          TOP LEFT BRAND MARK
      -------------------------------- */}
      <div
        className="
          absolute
          top-7
          left-6
          md:left-10
          flex items-center gap-3
          z-20
        "
      >
        <div
          className="
            w-9 h-9
            rounded-full
            bg-white
            text-black
            flex items-center justify-center
            font-black
            text-sm
          "
        >
          S
        </div>

        <div className="hidden sm:block">
          <p className="text-sm font-semibold tracking-tight">
            Sudhanshu Kumar
          </p>

          <p className="text-[10px] text-white/40 tracking-[0.2em] uppercase">
            Digital Craftsman
          </p>
        </div>
      </div>

      {/* --------------------------------
          TOP RIGHT STATUS
      -------------------------------- */}
      <div
        className="
          absolute
          top-7
          right-6
          md:right-10
          z-20
          flex items-center gap-2
          px-4 py-2
          rounded-full
          border border-white/10
          bg-white/[0.03]
          backdrop-blur-xl
        "
      >
        <span className="relative flex h-2 w-2">
          <span
            className="
              animate-ping
              absolute inline-flex
              h-full w-full
              rounded-full
              bg-green-400
              opacity-60
            "
          />

          <span
            className="
              relative inline-flex
              rounded-full
              h-2 w-2
              bg-green-400
            "
          />
        </span>

        <span className="text-xs text-white/60">
          Available for work
        </span>
      </div>

      {/* --------------------------------
          MAIN CONTENT
      -------------------------------- */}
      <div
        className="
          relative z-10
          w-full
          max-w-7xl
          mx-auto
          px-6
          md:px-10
          pt-28
          pb-24
        "
      >
        <div className="max-w-5xl">
          {/* SMALL LABEL */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-8 bg-red-500" />

              <span
                className="
                  text-xs
                  uppercase
                  tracking-[0.3em]
                  text-white/40
                "
              >
                Independent Developer · India
              </span>
            </div>
          </motion.div>

          {/* MAIN HEADING */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              text-[12vw]
              sm:text-7xl
              md:text-8xl
              lg:text-[105px]
              font-semibold
              tracking-[-0.065em]
              leading-[0.88]
            "
          >
            I build
            <br />

            <span className="text-white/30">
              digital
            </span>{" "}
            <span className="relative inline-block">
              experiences.
              <span
                className="
                  absolute
                  -bottom-2
                  left-0
                  w-[75%]
                  h-[3px]
                  bg-red-500
                "
              />
            </span>
          </motion.h1>

          {/* DESCRIPTION + ROLE */}
          <div
            className="
              mt-10
              grid
              md:grid-cols-[1fr_auto]
              gap-8
              items-end
            "
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.35,
              }}
              className="max-w-xl"
            >
              <p
                className="
                  text-lg
                  md:text-xl
                  leading-relaxed
                  text-white/55
                "
              >
                I'm{" "}
                <span className="text-white font-medium">
                  Sudhanshu 
                </span>
                , a developer and product builder focused on
                creating fast, modern and meaningful digital
                products.
              </p>

              {/* ROLE */}
              <div className="mt-6 flex items-center gap-3">
                <span className="text-sm text-white/30">
                  Currently:
                </span>

                <div
                  className="
                    relative
                    h-7
                    min-w-[180px]
                    overflow-hidden
                  "
                >
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={roles[roleIndex]}
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: -20,
                      }}
                      transition={{
                        duration: 0.35,
                      }}
                      className="
                        absolute
                        left-0
                        text-sm
                        font-medium
                        text-red-400
                      "
                    >
                      {roles[roleIndex]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            {/* CODE BADGE */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 0.5,
              }}
              className="
                hidden
                md:flex
                items-center
                gap-3
                px-5
                py-3
                rounded-full
                border border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
              "
            >
              <FaCode className="text-red-400" />

              <span className="text-xs text-white/50">
                Turning ideas into products
              </span>
            </motion.div>
          </div>

          {/* --------------------------------
              CTA AREA
          -------------------------------- */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.55,
            }}
            className="
              mt-10
              flex
              flex-col
              sm:flex-row
              gap-4
              items-start
            "
          >
            <MagneticButton
              onClick={() => setOpenForm(true)}
            >
              Let's work together
            </MagneticButton>

            <motion.button
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              onClick={handleCopy}
              className="
                group
                flex
                items-center
                gap-3
                px-6
                py-4
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                text-sm
                text-white/70
                hover:text-white
                hover:border-white/20
                transition
              "
            >
              <FaCopy size={13} />

              Copy email

              <HiOutlineArrowUpRight
                className="
                  text-white/30
                  group-hover:text-white
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                  transition
                "
              />
            </motion.button>
          </motion.div>

          {/* --------------------------------
              SOCIALS
          -------------------------------- */}
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.9,
            }}
            className="
              mt-16
              flex
              items-center
              gap-5
            "
          >
            <span className="text-xs text-white/25 uppercase tracking-widest">
              Find me
            </span>

            <div className="h-px w-8 bg-white/10" />

            <a
              href="https://github.com/Sudhanshu73527"
              className="
                w-9 h-9
                rounded-full
                border border-white/10
                bg-white/[0.02]
                flex items-center justify-center
                text-white/40
                hover:text-white
                hover:border-white/30
                hover:-translate-y-1
                transition-all
              "
            >
              <FaGithub size={14} />
            </a>

            <a
              href="https://www.linkedin.com/in/sudhanshu-kumar-89a307292/"
              className="
                w-9 h-9
                rounded-full
                border border-white/10
                bg-white/[0.02]
                flex items-center justify-center
                text-white/40
                hover:text-white
                hover:border-white/30
                hover:-translate-y-1
                transition-all
              "
            >
              <FaLinkedinIn size={14} />
            </a>

             <a
              href="https://www.linkedin.com/in/sudhanshu-kumar-89a307292/"
              className="
                w-9 h-9
                rounded-full
                border border-white/10
                bg-white/[0.02]
                flex items-center justify-center
                text-white/40
                hover:text-white
                hover:border-white/30
                hover:-translate-y-1
                transition-all
              "
            >
              <FaInstagram size={14} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* --------------------------------
          BOTTOM INFO
      -------------------------------- */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
          delay: 1.2,
        }}
        className="
          absolute
          bottom-7
          left-6
          md:left-10
          text-[10px]
          uppercase
          tracking-[0.25em]
          text-white/20
          hidden sm:block
        "
      >
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
          delay: 1.2,
        }}
        className="
          absolute
          bottom-7
          right-6
          md:right-10
          text-[10px]
          uppercase
          tracking-[0.25em]
          text-white/20
          hidden sm:block
        "
      >
        Scroll to explore ↓
      </motion.div>

      {/* --------------------------------
          CONTACT MODAL
      -------------------------------- */}
      <AnimatePresence>
        {openForm && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="
              fixed
              inset-0
              z-[100]
              flex
              items-center
              justify-center
              p-5
              bg-black/80
              backdrop-blur-xl
            "
            onClick={() => setOpenForm(false)}
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.92,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.92,
                y: 20,
              }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 18,
              }}
              onClick={(e) => e.stopPropagation()}
              className="
                relative
                w-full
                max-w-lg
                rounded-3xl
                border border-white/10
                bg-[#0b0b0b]
                p-7
                md:p-9
                shadow-2xl
              "
            >
              {/* Modal glow */}
              <div
                className="
                  absolute
                  -top-20
                  left-1/2
                  -translate-x-1/2
                  w-40
                  h-40
                  bg-red-500/20
                  blur-[80px]
                  pointer-events-none
                "
              />

              <div className="relative">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-red-400 mb-2">
                      Let's talk
                    </p>

                    <h2 className="text-3xl font-semibold tracking-tight">
                      Start a project.
                    </h2>
                  </div>

                  <button
                    onClick={() => setOpenForm(false)}
                    className="
                      w-9 h-9
                      rounded-full
                      border border-white/10
                      text-white/40
                      hover:text-white
                      hover:border-white/30
                      transition
                    "
                  >
                    ×
                  </button>
                </div>

                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        name: e.target.value,
                      })
                    }
                    className="
                      w-full
                      px-5
                      py-4
                      rounded-2xl
                      bg-white/[0.03]
                      border border-white/10
                      outline-none
                      text-white
                      placeholder:text-white/25
                      focus:border-red-500/50
                      focus:bg-white/[0.05]
                      transition
                    "
                  />

                  <textarea
                    placeholder="Tell me a little about your project..."
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        message: e.target.value,
                      })
                    }
                    className="
                      w-full
                      px-5
                      py-4
                      rounded-2xl
                      bg-white/[0.03]
                      border border-white/10
                      outline-none
                      text-white
                      placeholder:text-white/25
                      resize-none
                      focus:border-red-500/50
                      focus:bg-white/[0.05]
                      transition
                    "
                  />

                  <button
                    onClick={handleSubmit}
                    className="
                      group
                      w-full
                      py-4
                      rounded-2xl
                      bg-white
                      text-black
                      font-semibold
                      flex
                      items-center
                      justify-center
                      gap-3
                      hover:bg-red-500
                      hover:text-white
                      transition-all
                    "
                  >
                    Send message

                    <FaArrowRight
                      className="
                        group-hover:translate-x-1
                        transition
                      "
                    />
                  </button>
                </div>

                <p className="text-center text-xs text-white/20 mt-5">
                  Usually replies within 24 hours.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Landingpage;