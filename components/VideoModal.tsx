"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title: string;
}

export default function VideoModal({ isOpen, onClose, videoUrl, title }: VideoModalProps) {
  const [videoSrc, setVideoSrc] = useState<string | null>(null);

  // Handle URL parsing correctly
  useEffect(() => {
    if (!videoUrl || !isOpen) return;

    let finalUrl = "";
    if (videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be")) {
      const videoId = videoUrl.includes("v=") 
        ? videoUrl.split("v=")[1].split("&")[0] 
        : videoUrl.split("/").pop()?.split("?")[0];
      
      // Use standard embed ID with extra parameters for robustness
      finalUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0&origin=${typeof window !== 'undefined' ? window.location.origin : ''}`;
    } else {
      finalUrl = videoUrl;
    }
    setVideoSrc(finalUrl);

    // Cleanup on close
    return () => setVideoSrc(null);
  }, [videoUrl, isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl aspect-video bg-[#0A0A0A] rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.5)] z-10"
          >
            {/* Header Area (Overlay on hover) */}
            <div className="absolute top-0 left-0 w-full p-8 flex justify-between items-center z-20 bg-gradient-to-b from-black/80 via-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
              <h4 className="text-xl font-headline font-black text-white">{title} — Project Demo</h4>
              <button 
                onClick={onClose}
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center backdrop-blur-xl border border-white/10 transition-all active:scale-95"
                aria-label="Close Modal"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Video Content */}
            <div className="w-full h-full bg-black flex items-center justify-center">
              {!videoSrc ? (
                 <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Initializing Player...</span>
                 </div>
              ) : videoSrc.includes("youtube.com/embed") ? (
                <iframe
                  src={videoSrc}
                  className="w-full h-full border-none"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              ) : (
                <video 
                  src={videoSrc} 
                  controls 
                  autoPlay 
                  className="w-full h-full object-contain"
                />
              )}
            </div>

            {/* Always visible Close button for Mobile */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/90 flex items-center justify-center shadow-lg md:hidden z-30 shadow-primary/20"
            >
              <X className="w-5 h-5 text-black" />
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
