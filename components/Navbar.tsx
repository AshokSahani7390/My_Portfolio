"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

// Global navigation links moved inline to support future dynamic state


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        scrolled ? "py-4" : "py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <div className="text-2xl font-black tracking-tighter text-white">
          ASHOK_SAHANI
        </div>
        
        <div className="hidden md:flex gap-12 items-center">
          {[
            { name: "Home", href: "/" },
            { name: "Projects", href: "/projects" },
            { name: "Services", href: "/services" },
            { name: "About", href: "/about" },
            { name: "Contact", href: "/contact" },
          ].map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-headline text-[11px] font-black uppercase tracking-[0.3em] text-on-surface-variant hover:text-white transition-all relative group overflow-hidden"
            >
              <span className="relative z-10">{link.name}</span>
              <motion.span 
                className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-300" 
              />
            </Link>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-primary text-on-primary-container px-6 py-2.5 rounded-full font-bold uppercase text-[10px] tracking-widest inner-glow shadow-[0_4px_20px_0_rgba(163,166,255,0.2)]"
        >
          Hire Me
        </motion.button>
      </div>
    </motion.nav>
  );
}
