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
    { label: "Home", href: "#home" },
    { label: "How It Works", href: "#how-it-works" },
    // { label: "Properties", href: "#properties" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 border-b border-transparent
        ${
          isScrolled
            ? "bg-white/90 dark:bg-slate-950/90 shadow-md backdrop-blur-md border-slate-200 dark:border-slate-800"
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
              Propa<span className="text-blue-600">tiz</span>
            </span>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </a>
            ))}

            <a
              href="https://forms.gle/b89FiuZNkZ8ZFNRw6"
              className="px-5 py-2.5 bg-blue-600 text-white text-sm font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-sm hover:shadow"
            >
              Join Waitlist
            </a>
          </div>

          {/* MOBILE TOGGLE (Just the Menu Icon) */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-200 transition-colors"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* --- MOBILE DRAWER & OVERLAY --- */}

      {/* 1. Backdrop Overlay with Blur */}
      <div
        className={`fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm lg:hidden transition-opacity duration-300 ease-in-out
        ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* 2. Sliding Sidebar (Right Side) */}
      <div
        className={`fixed inset-y-0 right-0 z-[70] w-[280px] bg-white dark:bg-slate-950 shadow-2xl transform transition-transform duration-300 cubic-bezier(0.4, 0, 0.2, 1) lg:hidden flex flex-col
        ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-100 dark:border-slate-800">
          <span className="font-bold text-lg text-slate-900 dark:text-white">
            Menu
          </span>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-500 transition-colors"
          >
            <X size={22} />
          </button>
        </div>

        {/* Drawer Links */}
        <div className="flex-1 overflow-y-auto py-6 px-5 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl text-base font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 hover:text-blue-600 transition-all group"
            >
              {item.label}
              <ChevronRight
                size={16}
                className="text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-transform"
              />
            </a>
          ))}
        </div>

        {/* Drawer Footer (CTA) */}
        <div className="p-5 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
          <a
            href="https://forms.gle/b89FiuZNkZ8ZFNRw6"
            className="flex items-center justify-center w-full py-3.5 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-600/20 active:scale-95 transition-transform"
          >
            Join Waitlist
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
