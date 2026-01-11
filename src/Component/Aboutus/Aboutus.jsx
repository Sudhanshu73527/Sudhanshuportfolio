import React from "react";

const Aboutus = () => {
  return (
    <section className="min-h-screen bg-white px-6 md:px-20 py-24">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-8 text-center">
          About Me
        </h2>

        {/* Intro Paragraph */}
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
          I am a <span className="text-green-600 font-semibold">passionate freelancer</span> 
          and <span className="text-green-600 font-semibold">software engineer</span> with 
          extensive experience across multiple industries. I specialize in designing, 
          developing, and delivering high-quality digital solutions tailored to client needs.
        </p>

        {/* Expertise Grid */}
        <div className="mt-12 grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Industries I Serve</h3>
            <ul className="text-gray-700 list-disc list-inside space-y-2">
              <li>E-commerce Websites</li>
              <li>Restaurant Ordering Systems</li>
              <li>School & Institute Portals</li>
              <li>Online Marts</li>
              <li>Portfolio Websites</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">My Achievements</h3>
            <ul className="text-gray-700 list-disc list-inside space-y-2">
              <li>15+ successfully delivered projects to clients</li>
              <li>Expert in <span className="text-green-600">MERN & MEAN Stack</span></li>
              <li>Proficient in <span className="text-green-600">CMS & PHP development</span></li>
              <li>Focus on scalable, secure, and high-performance web applications</li>
            </ul>
          </div>
        </div>

        {/* Call-to-action */}
        <div className="mt-16 text-center">
          <p className="text-gray-700 text-lg md:text-xl">
            I am committed to delivering professional digital solutions that help businesses 
            grow and succeed online.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
