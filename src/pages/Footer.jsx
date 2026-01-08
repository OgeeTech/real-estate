const Footer = () => {
  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-14 w-full text-slate-500 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 border-b border-slate-200/60 dark:border-slate-800/60 pb-10">
        {/* Logo & Description */}
        <div className="max-w-sm">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-lg overflow-hidden">
              <img
                src="/img/logo1.png"
                alt="Buildvest Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-lg font-black tracking-tight text-slate-900 dark:text-white uppercase italic">
                Build
                <span className="text-blue-600">vest</span>
              </span>
              <span className="text-[10px] font-semibold tracking-widest text-slate-400 uppercase">
                Real Estate
              </span>
            </div>
          </div>

          <p className="mt-5 text-sm leading-relaxed">
            Buildvest helps you discover, compare, and invest in verified
            properties with confidence — faster, smarter, and securely.
          </p>
        </div>

        {/* Newsletter / Investors Community */}
        <div className="flex flex-col gap-4 max-w-sm">
          <h2 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">
            Join Our Investors Community
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Subscribe to get updates, investment insights, and property news.
          </p>
          <form className="flex gap-2 mt-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-16 md:gap-24">
          <div>
            <h2 className="text-sm font-semibold text-slate-900 dark:text-white mb-4">
              Company
            </h2>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-blue-600">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Properties
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-slate-900 dark:text-white mb-4">
              Get in Touch
            </h2>
            <div className="space-y-3 text-sm">
              <p>+234 810 828 4356</p>
              <p>support@buildvest.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <p className="pt-6 pb-8 text-center text-xs md:text-sm text-slate-400">
        © 2026 Buildvest. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
