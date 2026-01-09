import { X } from "lucide-react";
import { useEffect } from "react";

const StartInvestModal = ({ isOpen, onClose }) => {
  // Close on ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg mx-4 bg-white dark:bg-slate-950 rounded-2xl shadow-2xl p-8 animate-fadeIn">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-500 hover:text-slate-900 dark:hover:text-white"
        >
          <X size={22} />
        </button>

        {/* Header */}
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
          Start Investing
        </h2>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          Join our investors community and get early access.
        </p>

        {/* Form */}
        <form className="mt-6 space-y-5">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <select className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-blue-500 outline-none">
            <option>₦100,000 – ₦500,000</option>
            <option>₦500,000 – ₦2,000,000</option>
            <option>₦2,000,000+</option>
          </select>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition"
          >
            Join Investors Community
          </button>
        </form>
      </div>
    </div>
  );
};

export default StartInvestModal;
