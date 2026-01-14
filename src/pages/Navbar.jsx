import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X, ChevronRight } from "lucide-react";

const Navbar = ({ isDarkMode, toggleTheme, onOpenModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  const navItems = [
    { label: "Home", href: "#" },
    { label: "How It Works", href: "#how-it-works" },
    // { label: "Properties", href: "#properties" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300
        ${
          isScrolled
            ? "bg-white/95 dark:bg-slate-950/95 shadow-md backdrop-blur"
            : "bg-white dark:bg-slate-950"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center gap-2 min-w-0">
            <img
              src="/img/logo1.png"
              alt="Logo"
              className="w-9 h-9 object-contain flex-shrink-0"
            />
            <span className="text-lg font-black text-slate-900 dark:text-white truncate">
              Build<span className="text-blue-600">vest</span>
            </span>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-blue-600"
              >
                {item.label}
              </a>
            ))}

            {/* <button onClick={toggleTheme} className="p-2">
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button> */}

            <button
              onClick={onOpenModal}
              className="px-5 py-2.5 bg-blue-600 text-white text-sm font-bold rounded-lg"
            >
              Join Waitlist
            </button>
          </div>

          {/* MOBILE CONTROLS */}
          <div className="lg:hidden flex items-center gap-2">
            {/* <button onClick={toggleTheme} className="p-2">
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button> */}

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md bg-slate-100 dark:bg-slate-900"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300
          ${isMenuOpen ? "max-h-[400px]" : "max-h-0"}`}
        >
          <div className="px-4 py-6 space-y-5 bg-white dark:bg-slate-950 border-t">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-base font-semibold text-slate-700 dark:text-slate-300"
              >
                {item.label}
              </a>
            ))}

            <button className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg">
              Join Waitlist
            </button>
          </div>
        </div>
      </nav>

      {/* OVERLAY */}
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 z-40 bg-black/30 lg:hidden"
        />
      )}
    </>
  );
};

export default Navbar;
