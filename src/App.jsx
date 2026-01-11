import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import Landingpage from "./Component/Landingpage/Landingpage";
// import Aboutus from './Component/Aboutus/Aboutus'
import AboutHero from "./Component/Abouthero/Abouthero";
import SkillsetSection from "./Component/SkillsetSection/SkillsetSection";
import InsightCards from "./Component/InsightCards/InsightCards";
import Portfolio from "./Component/Portfolio/Portfolio";
import Testimonials from "./Component/Testimonials/Testimonials";
import Hero from "./Component/Hero/Hero";

const App = () => {
  return (
    <div>
      <Navbar />
      <Landingpage />
      {/* <InsightCards/> */}
      {/* <Aboutus/> */}
      <AboutHero />
      <Portfolio />
      <SkillsetSection />
      <Hero/>
      <Testimonials/>
    
    </div>
  );
};

export default App;
