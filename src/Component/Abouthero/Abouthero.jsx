import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = ["/sudh5.jpeg", "/sudh4.jpeg", "/sudh1.jpeg"];

const AboutHero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about" // ✅ FIX: Added id for smooth scroll
      className="relative bg-black text-white py-20 md:py-24 overflow-hidden scroll-mt-24" // ✅ FIX: offset for fixed navbar
    >
      <div className="max-w-7xl mx-auto px-5 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center">
        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left">
          <p className="uppercase text-xs tracking-widest text-white/50 mb-3">
            A QUICK GLANCE
          </p>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl 
          font-extrabold leading-tight mb-6"
          >
            Building the bridge between ideas and{" "}
            <span className="italic text-pink-500 font-semibold">
              experiences
            </span>
          </h2>

          <div className="space-y-5 text-white/70 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
            <p>
              Hey.. I'm{" "}
              <span className="text-white font-semibold">Sudhanshu Kumar</span>,
              an engineering-driven developer who turns complex technical
              challenges into high-speed web products. I manage the entire stack
              with a focus on clean, reusable code and seamless performance. I
              excel in Next.js React.js and full-stack architecture, always
              delivering modern solutions that actually solve problems for every
              user
            </p>

            <p>
              As the founder of my web services company{" "}
              <a
                href="https://www.webala.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 font-semibold hover:underline"
              >
                WEBALA
              </a>{" "}
              , I design and build scalable digital solutions that help
              businesses grow, perform, and stand out online.
            </p>

            <p>
              My code is built to last, helping your business reach the next
              level !
            </p>
          </div>
        </div>

        {/* RIGHT IMAGES */}
        <div className="relative flex justify-center lg:justify-end">
          <div
            className="
            relative 
            w-[260px] h-[340px]
            sm:w-[300px] sm:h-[400px]
            md:w-[340px] md:h-[440px]
            lg:w-[380px] lg:h-[480px]
          "
          >
            {/* LEFT STACK IMAGE */}
            <img
              src={images[(index + 1) % images.length]}
              className="
                absolute inset-0 w-full h-full object-cover rounded-3xl
                -rotate-6 -translate-x-6 sm:-translate-x-10
                opacity-80 scale-95
                shadow-xl
              "
              alt="about"
            />

            {/* RIGHT STACK IMAGE */}
            <img
              src={images[(index + 2) % images.length]}
              className="
                absolute inset-0 w-full h-full object-cover rounded-3xl
                rotate-6 translate-x-6 sm:translate-x-10
                opacity-80 scale-95
                shadow-xl
              "
              alt="about"
            />

            {/* CENTER IMAGE */}
            <AnimatePresence mode="wait">
              <motion.img
                key={index}
                src={images[index]}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="
                  relative w-full h-full object-cover rounded-3xl
                  shadow-[0_30px_100px_rgba(0,0,0,0.9)]
                  z-10
                "
                alt="about-main"
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
