"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import SmoothScroll from "@/components/SmoothScroll";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";


export default function ProjectsPage() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-surface">
        <Navbar />
        
        <header className="pt-48 pb-20 px-12 max-w-screen-2xl mx-auto overflow-hidden">
          <div className="flex flex-col md:flex-row items-end justify-between gap-12">
            <div className="max-w-4xl">
              <motion.h1 
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-8xl md:text-[10rem] font-headline font-black tracking-tighter text-white leading-[0.85] mb-12"
              >
                Selected <br/><span className="text-primary italic">Works</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-on-surface-variant text-xl md:text-2xl max-w-xl font-light leading-relaxed font-body"
              >
                A collection of high-performance digital products where architectural logic meets premium editorial aesthetics.
              </motion.p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="px-6 py-3 bg-white/5 border border-white/10 rounded-full flex items-center gap-3"
            >
              <span className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse shadow-[0_0_10px_rgba(163,166,255,1)]"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Available for work</span>
            </motion.div>
          </div>
        </header>

        <section className="px-12 pb-32 max-w-screen-2xl mx-auto mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {projects.map((project, i) => (
              <ProjectCard key={i} {...project} />
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </SmoothScroll>
  );
}
