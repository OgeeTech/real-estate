import { X } from "lucide-react";
import { useEffect, useRef } from "react";

const HowItWorksVideoModal = ({ isOpen, onClose }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    if (isOpen && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
      {/* Backdrop with Fade-In */}
      <div
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity duration-500 animate-in fade-in"
        onClick={onClose}
      />

      {/* Modal with "Pop" Animation */}
      <div className="relative w-full max-w-4xl bg-black rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 animate-in zoom-in-95 slide-in-from-bottom-10 duration-500">
        {/* Floating Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 p-2 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all"
        >
          <X size={20} />
        </button>

        {/* Video Player */}
        <div className="aspect-video bg-slate-900 flex items-center justify-center">
          <video
            ref={videoRef}
            src="/img/hiw.mp4"
            controls
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HowItWorksVideoModal;
