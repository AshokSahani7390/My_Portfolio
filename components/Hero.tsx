"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useScroll, useTransform, motion as m } from "framer-motion";
import ThreeScene from "./ThreeScene";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-headline", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.1,
      });
      
      gsap.from(".hero-subheading", {
        y: 20,
        opacity: 0,
        duration: 1.2,
        delay: 0.4,
        ease: "power3.out",
      });

      gsap.from(".hero-cta", {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        delay: 0.6,
        ease: "back.out(1.7)",
        stagger: 0.1,
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-surface-container-lowest pt-20"
    >
      <ThreeScene />
      
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
        <m.div style={{ y, opacity }}>
          <div className="overflow-hidden">
            <h1 className="hero-headline font-headline text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
              Building <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-primary-dim">SaaS</span>, Apps, and Automation.
            </h1>
          </div>
          
          <p className="hero-subheading text-on-surface-variant text-xl max-w-lg mb-10 leading-relaxed font-body">
            Transforming complex logic into high-end digital experiences that drive exponential business growth.
          </p>
          
          <div className="flex flex-wrap gap-6">
            <button className="hero-cta bg-primary text-on-primary-fixed px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-xl shadow-primary/20 inner-glow">
              View My Work
            </button>
            <button className="hero-cta bg-surface-bright/10 backdrop-blur-md border border-white/10 text-on-surface px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-white/5 transition-all inner-glow">
              Get in Touch
            </button>
          </div>
        </m.div>

        {/* Mockup / Secondary Visual */}
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative perspective-lg hidden lg:block"
        >
          <div className="animate-float relative z-20 hover:rotate-y-12 transition-transform duration-700">
            <div className="bg-surface-container rounded-2xl p-4 border border-white/10 shadow-2xl overflow-hidden glass-nav">
              <div className="aspect-video bg-gradient-to-tr from-surface-container-low to-surface-container-high rounded-xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-1/2 h-1/2 bg-primary/20 blur-[80px] rounded-full group-hover:bg-primary/40 transition-all duration-700"></div>
                </div>
                <div className="p-8 relative h-full flex flex-col justify-between">
                   <div className="flex gap-2">
                     <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                     <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                     <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                   </div>
                   <div className="space-y-4">
                     <div className="h-4 w-32 bg-white/10 rounded"></div>
                     <div className="h-4 w-48 bg-white/5 rounded"></div>
                     <div className="grid grid-cols-3 gap-4 pt-4">
                       <div className="h-16 bg-white/10 rounded-lg"></div>
                       <div className="h-16 bg-white/10 rounded-lg"></div>
                       <div className="h-16 bg-white/10 rounded-lg"></div>
                     </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating Mobile Overlay */}
          <motion.div 
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
            className="absolute -bottom-10 -right-10 w-48 z-30"
          >
            <div className="bg-surface-container-high rounded-[2.5rem] p-2 border-4 border-surface-variant shadow-2xl glass-nav">
              <div className="aspect-[9/16] bg-gradient-to-br from-secondary/20 to-primary/20 rounded-[2rem] flex items-center justify-center">
                 <span className="material-symbols-outlined text-4xl text-white/20">touch_app</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
