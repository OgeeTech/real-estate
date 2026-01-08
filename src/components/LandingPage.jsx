import React from "react";
import Navbar from "../pages/Navbar";
import Hero from "../pages/Hero";
import HowItWorks from "../pages/HowItWorks";
import Properties from "../pages/Properties";
import FAQ from "../pages/FAQ";
import Footer from "../pages/Footer";
// Import other sections...

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Properties />
        <FAQ />
        <Footer />
      </main>
    </div>
  );
};

export default LandingPage;
