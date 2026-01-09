// import { useState, useEffect } from "react";
// import { Sun, Moon, Menu, X, Sparkles, ChevronRight } from "lucide-react";

// const Navbar = ({ isDarkMode, toggleTheme }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navItems = [
//     { label: "Features", href: "#features" },
//     { label: "How It Works", href: "#how-it-works" },
//     { label: "Properties", href: "#properties" },
//     { label: "FAQ", href: "#faq" },
//   ];

//   return (
//     <>
//       <nav
//         className={`fixed top-0 w-full z-50 transition-all duration-500 ${
//           isScrolled
//             ? "bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl shadow-lg shadow-black/5"
//             : "bg-white/80 dark:bg-slate-950/80 backdrop-blur-md"
//         } border-b border-white/20 dark:border-slate-800/50`}
//       >
//         <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
//           {/* REFINED LOGO SECTION */}
//           <div className="flex items-center gap-1.5 group cursor-pointer">
//             <div className="relative">
//               <div className="w-25 h-20 rounded-xl overflow-hidden group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
//                 <img
//                   src="/img/logo1.png"
//                   alt="company Logo"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>

//             <div className="flex flex-col leading-none">
//               <span className="text-xl font-black tracking-tighter text-slate-900 dark:text-white uppercase italic">
//                 Build
//                 <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
//                   vest
//                 </span>
//               </span>
//               <span className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase">
//                 Real Estate
//               </span>
//             </div>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center gap-10">
//             <div className="flex gap-8">
//               {navItems.map((item) => (
//                 <a
//                   key={item.label}
//                   href={item.href}
//                   className="relative text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group/nav"
//                 >
//                   {item.label}
//                   <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover/nav:w-full transition-all duration-300"></span>
//                 </a>
//               ))}
//             </div>

//             <div className="h-8 w-px bg-slate-200 dark:bg-slate-800"></div>

//             {/* Theme Toggle */}
//             <button
//               onClick={toggleTheme}
//               className="relative p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-all duration-300"
//             >
//               {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
//             </button>

//             {/* Waitlist CTA */}
//             <button className="group relative px-6 py-3 bg-blue-600 text-white text-sm font-bold rounded-xl hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 active:scale-95">
//               <span className="relative z-10 flex items-center gap-2">
//                 Join Waitlist
//                 <ChevronRight
//                   size={16}
//                   className="group-hover:translate-x-1 transition-transform"
//                 />
//               </span>
//             </button>
//           </div>

//           {/* Mobile Toggle */}
//           <div className="lg:hidden flex items-center gap-4">
//             <button
//               onClick={toggleTheme}
//               className="p-2 text-slate-600 dark:text-slate-400"
//             >
//               {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
//             </button>
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white"
//             >
//               {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="lg:hidden bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800">
//             <div className="px-6 py-8 space-y-6">
//               {navItems.map((item) => (
//                 <a
//                   key={item.label}
//                   href={item.href}
//                   className="block text-lg font-semibold text-slate-700 dark:text-slate-300"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   {item.label}
//                 </a>
//               ))}
//               <button className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg">
//                 Join Waitlist
//               </button>
//             </div>
//           </div>
//         )}
//       </nav>

//       {isMenuOpen && (
//         <div
//           className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
//           onClick={() => setIsMenuOpen(false)}
//         />
//       )}
//     </>
//   );
// };

// export default Navbar;

import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X, ChevronRight } from "lucide-react";

const Navbar = ({ isDarkMode, toggleTheme }) => {
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
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Properties", href: "#properties" },
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

            <button onClick={toggleTheme} className="p-2">
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button className="px-5 py-2.5 bg-blue-600 text-white text-sm font-bold rounded-lg">
              Join Waitlist
            </button>
          </div>

          {/* MOBILE CONTROLS */}
          <div className="lg:hidden flex items-center gap-2">
            <button onClick={toggleTheme} className="p-2">
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

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
