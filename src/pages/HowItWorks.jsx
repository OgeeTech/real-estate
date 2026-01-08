import {
  Search,
  Users,
  MessageSquare,
  FileText,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Discover Properties",
      description:
        "Browse curated properties above 1200sqm with clear projections.",
    },
    {
      icon: Users,
      title: "Join an Investment Group",
      description:
        "Co-invest with verified members under a dedicated mediator.",
    },
    {
      icon: MessageSquare,
      title: "Vote & Decide",
      description:
        "Make key decisions using secure polls with 75–85% consensus.",
    },
    {
      icon: FileText,
      title: "Build or Rent",
      description: "Choose to develop residential units or earn rental income.",
    },
    {
      icon: TrendingUp,
      title: "Track Growth",
      description: "Monitor appreciation and automated income distribution.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white">
            How It Works
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-sm leading-relaxed">
            A simple, transparent flow — from discovering properties to growing
            your investment.
          </p>
        </div>

        {/* FLOW STEPS */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* CARD */}
              <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 transition-all duration-300">
                {/* STEP NUMBER */}
                <div className="mb-4 text-xs font-black tracking-widest text-blue-500">
                  STEP {index + 1}
                </div>

                {/* ICON */}
                <div className="mb-4 p-3 rounded-xl bg-blue-100 dark:bg-blue-500/10 text-blue-600 group-hover:scale-110 transition-transform">
                  <step.icon size={22} />
                </div>

                {/* TITLE */}
                <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-2">
                  {step.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* FLOW ARROW (except last) */}
              {index !== steps.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-6 transform -translate-y-1/2">
                  <ArrowRight
                    size={20}
                    className="text-blue-400 animate-pulse"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
