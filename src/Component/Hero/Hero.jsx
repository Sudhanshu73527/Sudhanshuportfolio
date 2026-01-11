import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden flex items-center">
      
      {/* Background texture */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03]" />
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-black" />

      {/* Floating liquid background */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 w-[700px] h-[700px] bg-white/5 rounded-full blur-[180px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h1 className="text-[42px] sm:text-[56px] xl:text-[68px] font-extrabold leading-tight tracking-tight uppercase">
            From Idea to Execution <br />
            <span className="text-white">
              Let’s Build Something Real!
            </span>
          </h1>

          {/* CTA */}
          <div className="mt-10 flex items-center gap-6">
            <button className="group flex items-center gap-3 px-7 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition">
              Get in touch
              <span className="w-7 h-7 flex items-center justify-center rounded-full bg-black text-white group-hover:translate-x-1 transition">
                →
              </span>
            </button>
          </div>

          {/* Subtext */}
          <div className="mt-12 max-w-lg">
            <p className="text-gray-300 font-extrabold text-xl">
              Available for full-time roles and selective freelance projects.
            </p>
            <p className="text-gray-400 text-xl mt-2">
              I focus on shipping clean, scalable web solutions that support real users and growing products.
            </p>
          </div>
        </motion.div>

        {/* RIGHT IMAGE + BADGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          {/* Image */}
          <div className="relative w-[320px] sm:w-[380px] xl:w-[420px] aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-white/10 to-white/0 border border-white/10">
            <img
              src="/sudh1.jpeg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Circular badge */}
          <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full border-2 border-red-600 flex items-center justify-center">
            <span className="absolute w-full h-full rounded-full animate-spin-slow border border-transparent" />
            <p className="text-[11px] tracking-widest text-center uppercase leading-tight">
             • Open to Work <br /> • Open to Work
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
