import React, { useState } from "react";
import {
  FaUserPlus,
  FaSearch,
  FaChartPie,
  FaChartLine,
  FaShieldAlt,
  FaChevronDown,
  FaChevronUp,
  FaTimes,
} from "react-icons/fa";

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(null);

  const toggleStep = (id) => {
    setActiveStep(activeStep === id ? null : id);
  };

  const steps = [
    {
      id: 1,
      title: "Join Propatiz",
      description:
        "Create an account to access our collective ownership ecosystem.",
      details:
        "Register with your unique username. Once verified, you gain access to the dashboard where you can view properties uploaded by Admins. Your privacy is paramount; other users will only ever see your username, keeping your phone and email private.",
      icon: <FaUserPlus />,
      image: "/img/join.png",
    },
    {
      id: 2,
      title: "Discover Properties",
      description:
        "Explore vetted real estate listings tailored for group or sole ownership.",
      details:
        "Our properties are strictly vetted and must meet the minimum specification of 1200sqm. Browse listings with transparent pricing set by Admins, location data, and projected appreciation values updated every 6 to 12 months.",
      icon: <FaSearch />,
      image: "/img/discover.png",
    },
    {
      id: 3,
      title: "Invest Fractionally",
      description:
        "Buy a fraction of a property. <100% ownership adds you to a group.",
      details:
        "If you buy 100%, you have sole control. If you buy less, you are automatically added to a private Chat Group with other co-owners. A Staff Mediator is present in every group to maintain order and facilitate communication.",
      icon: <FaChartPie />,
      image: "/img/invest.png",
    },
    {
      id: 4,
      title: "Earn & Decide",
      description:
        "Vote on property decisions and earn rental income automatically.",
      details:
        "Decisions (like Renting vs. Selling) are made via Polls activated by the Mediator. A 75-85% consensus is required for action. Rental income is automatically calculated and distributed to your wallet based on your ownership percentage.",
      icon: <FaChartLine />,
      image: "/img/decide.jpeg",
    },
    {
      id: 5,
      title: "Secure & Flexible",
      description: "Protected investments with options to sell after holding.",
      details:
        "All investments have a 6-month lock-in period to ensure stability. After this, you can sell your shares. Per our rules, shares must first be offered to existing group members before being listed to the general public.",
      icon: <FaShieldAlt />,
      image: "/img/secure.jpeg",
    },
  ];

  return (
    <section className="py-24 bg-gray-50 font-sans" id="how-it-works">
      <div className="max-w-7xl mx-auto px-6">
        {/* ================= HEADER ================= */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="h-[2px] w-8 bg-blue-600"></div>
            <h4 className="text-gray-500 font-bold uppercase tracking-wider text-sm">
              Our Process
            </h4>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f172a]">
            How <span className="text-blue-600">Propatiz</span> Works
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-lg">
            From registration to consensus building—here is how we democratize
            real estate.
          </p>
        </div>

        {/* ================= STEPS GRID ================= */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {steps.map((step, index) => {
            const isActive = activeStep === step.id;

            return (
              <div
                key={step.id}
                className={`
                  relative w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] 
                  bg-white rounded-[2rem] shadow-lg border border-gray-100 
                  flex flex-col transition-all duration-500
                  ${isActive ? "ring-2 ring-blue-600 shadow-xl" : "hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]"}
                `}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* ================= IMAGE AREA (Collapsible) ================= 
                    This div now strictly contains the image and overlay.
                    overflow-hidden here ensures the image cuts off cleanly during animation.
                */}
                <div
                  className={`relative w-full transition-all duration-500 ease-in-out origin-top overflow-hidden rounded-t-[2rem]
                    ${isActive ? "h-0 opacity-0" : "h-64 opacity-100"}
                  `}
                >
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#0f172a]/10 transition-colors"></div>

                  {/* Step Number Badge (Inside Image) */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold text-[#0f172a] uppercase shadow-sm">
                    Step 0{step.id}
                  </div>
                </div>

                {/* ================= FLOATING ICON (Independent) ================= 
                    This is now a sibling to the image container.
                    It sits on top of the card using absolute positioning.
                    top-[14rem] places it exactly at the 64 (16rem) boundary: 16rem - 2rem (half icon) = 14rem.
                    We fade it out (opacity-0 scale-75) when active.
                */}
                <div
                  className={`absolute left-8 w-16 h-16 bg-[#0f172a] rounded-full flex items-center justify-center text-white text-2xl border-4 border-white z-20 shadow-md transition-all duration-300
                    ${isActive ? "top-[-50px] opacity-0 scale-75 pointer-events-none" : "top-[14rem] opacity-100 scale-100"}
                  `}
                >
                  {step.icon}
                </div>

                {/* ================= TEXT CONTENT ================= */}
                <div
                  className={`
                    flex-grow flex flex-col transition-all duration-500
                    ${isActive ? "p-8 pt-8" : "px-8 pt-12 pb-8"}
                `}
                >
                  {/* Header Section */}
                  <div className="flex justify-between items-start mb-4">
                    <h3
                      className={`text-2xl font-bold transition-colors ${isActive ? "text-blue-600" : "text-[#0f172a]"}`}
                    >
                      {step.title}
                    </h3>

                    {/* Close Icon */}
                    {isActive && (
                      <button
                        onClick={() => toggleStep(step.id)}
                        className="text-gray-400 hover:text-red-500"
                      >
                        <FaTimes />
                      </button>
                    )}
                  </div>

                  {/* Description */}
                  <p
                    className={`text-gray-500 leading-relaxed text-sm ${isActive ? "font-bold mb-4" : "mb-6"}`}
                  >
                    {step.description}
                  </p>

                  {/* Hidden Details */}
                  <div
                    className={`
                    overflow-hidden transition-all duration-500 ease-in-out
                    ${isActive ? "max-h-60 opacity-100 mb-6" : "max-h-0 opacity-0"}
                  `}
                  >
                    <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 text-sm text-gray-700 leading-relaxed">
                      {step.details}
                    </div>
                  </div>

                  {/* Toggle Button */}
                  <div className="mt-auto">
                    <button
                      onClick={() => toggleStep(step.id)}
                      className={`
                         inline-flex items-center gap-2 font-bold text-sm uppercase tracking-wide transition-colors
                         ${isActive ? "text-gray-400 hover:text-gray-600" : "text-blue-600 hover:text-blue-700"}
                       `}
                    >
                      {isActive ? (
                        <>
                          Close Details <FaChevronUp />
                        </>
                      ) : (
                        <>
                          Click to read more <FaChevronDown />
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Bottom Blue Line */}
                {!isActive && (
                  <div className="absolute bottom-0 left-0 w-full h-1.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
