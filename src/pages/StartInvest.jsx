import React from "react";

const StartInvest = () => {
  return (
    <section
      id="start-invest"
      className="w-full px-6 md:px-16 lg:px-24 py-20 bg-white dark:bg-slate-950"
    >
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
            Start Investing Today
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Join our investors community and get early access to premium real
            estate opportunities.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6 bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl shadow-lg">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Investment Amount */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">
              Intended Investment Amount
            </label>
            <select className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>₦100,000 – ₦500,000</option>
              <option>₦500,000 – ₦2,000,000</option>
              <option>₦2,000,000+</option>
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all duration-300"
          >
            Join Investors Community
          </button>
        </form>
      </div>
    </section>
  );
};

export default StartInvest;
