import React from "react";

const Properties = () => {
  const snapshots = [
    {
      title: "Minimum Investment",
      value: "₦500,000",
      desc: "Start owning premium real estate with low entry capital",
      img: "/img/investment.jpeg",
    },
    {
      title: "Property Size",
      value: "1200sqm+",
      desc: "Large-scale, high-value land & developments only",
      img: "/img/land-size.jpeg",
    },
    {
      title: "Group Size",
      value: "10 – 30 Investors",
      desc: "Shared ownership with structured governance",
      img: "/img/investor.jpeg",
    },
    {
      title: "Target ROI",
      value: "15% – 25%",
      desc: "Projected appreciation based on market cycles",
      img: "/img/roi.jpeg",
    },
    {
      title: "Hold Period",
      value: "6 – 12 Months",
      desc: "Periodic value review and exit planning",
      img: "/img/timeline.jpeg",
    },
    {
      title: "Asset Management",
      value: "Fully Managed",
      desc: "Legal, valuation & mediator-backed oversight",
      img: "/img/management.jpeg",
    },
  ];

  return (
    <section
      id="properties"
      className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            Investment Snapshot
          </h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Clear, transparent insights into how our group real estate
            investments work — no complexity, no guesswork.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {snapshots.map((item, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-3xl font-extrabold text-blue-600 dark:text-blue-400 mb-3">
                  {item.value}
                </p>

                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Properties;
