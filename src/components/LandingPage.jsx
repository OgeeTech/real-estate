import React, { useState } from "react";
import Navbar from "../pages/Navbar";
import Hero from "../pages/Hero";
import HowItWorks from "../pages/HowItWorks";
import FAQ from "../pages/FAQ";
import Footer from "../pages/Footer";
import StartInvestModal from "../components/StartInvestModal";
import ScrollToTop from "./ScrollToTop";
import Investment from "../pages/Investment";

const LandingPage = () => {
  // 1. State for the Start Investing (Waitlist) Modal
  const [openModal, setOpenModal] = useState(false);

  // 2. State for the How It Works Video Modal
  const [openVideo, setOpenVideo] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      {/* Pass onOpenModal to Navbar so the 'Join Waitlist' button works */}
      <Navbar onOpenModal={() => setOpenModal(true)} />

      <main className="w-full overflow-x-hidden">
        {/* 3. Pass ALL required props to Hero */}
        <Hero
          onOpenModal={() => setOpenModal(true)}
          openVideo={openVideo}
          setOpenVideo={setOpenVideo}
        />

        <HowItWorks />
        {/* <Investment /> */}
        <FAQ />
        <Footer />
      </main>

      {/* Waitlist Modal */}
      <StartInvestModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />

      <ScrollToTop />
    </div>
  );
};

export default LandingPage;
