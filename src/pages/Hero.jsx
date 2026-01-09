import React from "react";
// 1. Added necessary icon imports
import {
  Shield,
  Play,
  Users,
  TrendingUp,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import HowItWorksVideoModal from "../components/HowITWorksVideoModal";

const Hero = ({ onOpenModal, openVideo, setOpenVideo }) => {
  const features = [
    {
      icon: Shield,
      label: "Mediator Protected",
      desc: "Staff mediator in every group",
    },
    {
      icon: Users,
      label: "Group Decision",
      desc: "75-85% consensus voting",
    },
    {
      icon: TrendingUp,
      label: "Auto Appreciation",
      desc: "Value updates every 6-12 months",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="flex flex-col space-y-8">
          <div className="text-center lg:text-left space-y-6 mt-10">
            {/* <h1 className="text-4xl lg:text-[32px] font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Own High-Value <br />
              <span className="relative inline-block text-blue-600">
                Real Estate
                <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-blue-500/30 rounded-full"></span>
              </span>
              <br />
              As a Group.
            </h1> */}
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              Own High-Value <br />
              <span className="relative inline-block text-blue-600">
                Real Estate
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-primary/40"></span>
              </span>
              <br />
              As a Group.
            </h1>

            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
              Co-invest in high-value properties starting from{" "}
              <span className="font-semibold text-primary">1200sqm+</span>.
              Start with as little as{" "}
              <span className="font-semibold text-green-600 dark:text-green-400">
                ₦500k
              </span>{" "}
              and build wealth through fractional ownership and smart group
              governance.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group flex flex-col p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-primary dark:hover:border-primary transition-all duration-300 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                    <feature.icon size={18} />
                  </div>
                  <span className="font-bold text-slate-900 dark:text-white text-sm">
                    {feature.label}
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-tight">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={onOpenModal}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-[1.02] active:scale-95 overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                Start Investing Now
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </span>
              {/* Shine effect */}
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-1000"></span>
            </button>

            <button
              onClick={() => setOpenVideo(true)}
              className="group relative px-8 py-4 bg-white/80 dark:bg-slate-900/40 backdrop-blur-sm border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-95 overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                {/* Modernized Play Icon */}
                <div className="relative flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary">
                  <Play size={12} fill="currentColor" className="ml-0.5" />
                  {/* Pulsing Ring */}
                  <span className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
                </div>

                <span className="text-sm transition-colors group-hover:text-primary">
                  How It Works
                </span>

                <ChevronRight
                  size={20}
                  className="text-slate-400 group-hover:text-primary group-hover:translate-x-1 transition-transform"
                />
              </span>
            </button>
          </div>

          {/* Video Modal */}
          <HowItWorksVideoModal
            isOpen={openVideo}
            onClose={() => setOpenVideo(false)}
          />
          {/* Trust Indicators */}
          <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
            <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-6 text-center lg:text-left">
              Secured & Powered by
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-8 md:gap-12 opacity-50 grayscale hover:opacity-100 transition-all duration-500">
              {/* Paystack */}
              <div className="h-6 w-auto">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Paystack_Logo.png"
                  alt="Paystack"
                  className="h-full object-contain dark:invert"
                />
              </div>

              {/* Stripe */}
              <div className="h-6 w-auto">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg"
                  alt="Stripe"
                  className="h-full object-contain dark:invert"
                />
              </div>

              {/* Flutterwave */}
              <div className="h-5 w-auto">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flutterwave_Logo.png/1200px-Flutterwave_Logo.png"
                  alt="Flutterwave"
                  className="h-full object-contain dark:invert"
                />
              </div>

              {/* PayPal */}
              <div className="h-6 w-auto">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                  alt="PayPal"
                  className="h-full object-contain dark:invert"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Content - Visual */}
        <div className="relative group lg:ml-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-cyan-400 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden shadow-2xl border-[10px] border-white dark:border-slate-900">
            <img
              src="/img/hero2.jpeg"
              alt="Premium Property"
              className="w-full h-auto object-cover transform transition duration-700 hover:scale-110"
            />

            {/* Ownership Overlay */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl p-6 rounded-2xl border border-white/20 shadow-xl">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-bold text-slate-900 dark:text-white">
                  Lekki Phase 1 - 1500sqm
                </span>
                <span className="text-xs text-primary font-black uppercase">
                  85% Funded
                </span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                <div className="bg-primary h-full rounded-full w-[85%] transition-all duration-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
