const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-950 px-6 md:px-16 lg:px-24 xl:px-32 pt-12 w-full text-slate-500">
      {/* TOP SECTION */}
      <div className="flex flex-col gap-12 border-b border-slate-200 dark:border-slate-800 pb-10">
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* LOGO & DESCRIPTION */}
          <div className="space-y-5">
            <div className="flex items-center gap-2">
              <img
                src="/img/logo1.png"
                alt="propatiz"
                className="w-15 h-10 object-contain"
              />
              <span className="text-lg font-black text-slate-900 dark:text-white tracking-tight">
                propatiz
              </span>
            </div>

            <p className="text-sm leading-relaxed max-w-sm">
              propatiz enables smart group ownership of high-value real estate,
              making property investment accessible, transparent, and secure.
            </p>
          </div>

          {/* COMPANY LINKS */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-4">
              Company
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-blue-600">
                  Home
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-blue-600">
                  How it works
                </a>
              </li>

              <li>
                <a href="#faq" className="hover:text-blue-600">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* INVESTOR COMMUNITY */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
              Join our investors community
            </h3>

            <p className="text-sm">
              Get early access to new properties and exclusive updates.
            </p>

            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition"
              >
                Join
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="py-6 text-center text-xs md:text-sm">
        © 2026{" "}
        <span className="font-semibold text-slate-700 dark:text-slate-300">
          propatiz
        </span>
        . All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
