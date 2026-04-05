"use client";

import { motion } from "framer-motion";
import { MoveRight, Play, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import VideoModal from "./VideoModal";

export default function Portfolio() {
  const [activeVideo, setActiveVideo] = useState<{ url: string; title: string } | null>(null);

  return (
    <section className="py-32 px-12 bg-surface">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <motion.span 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="text-primary font-headline font-black uppercase tracking-[0.4em] text-[10px] block mb-6 px-1"
            >
              Selected Case Studies
            </motion.span>
            <motion.h2 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-6xl md:text-8xl font-black font-headline tracking-tighter text-white leading-none"
            >
              Selected <span className="kinetic-gradient-text italic">Works</span>.
            </motion.h2>
          </div>
          <Link href="/projects" className="text-white hover:text-black hover:bg-white transition-all flex items-center gap-3 group font-headline font-bold text-[10px] tracking-widest border border-white/20 px-8 py-3.5 rounded-full backdrop-blur-md">
            VIEW ALL PROJECTS 
            <MoveRight className="w-4 h-4 group-hover:translate-x-1.5 transition-all" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10">
          {projects.map((project, index) => {
            let spanClass = "md:col-span-12 lg:col-span-6";
            if (project.large) {
              spanClass = "md:col-span-12";
            } else if (index % 3 === 0) {
              spanClass = "md:col-span-12 lg:col-span-8";
            } else {
              spanClass = "md:col-span-12 lg:col-span-4";
            }

            return (
              <motion.div 
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8, ease: "circOut" }}
                className={`${spanClass} bg-surface-container rounded-[3rem] overflow-hidden group relative min-h-[550px] border border-white/10 flex flex-col shadow-2xl transition-all duration-500 hover:border-primary/20 hover:scale-[1.01]`}
              >
                <div 
                  className="absolute inset-0 z-0 cursor-pointer overflow-hidden group/img" 
                  onClick={() => project.demoUrl && setActiveVideo({ url: project.demoUrl, title: project.title })}
                >
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover opacity-50 group-hover/img:opacity-40 group-hover/img:scale-110 transition-all duration-1000 ease-out grayscale group-hover/img:grayscale-0" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  
                  {project.demoUrl && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-all duration-500 bg-black/10 backdrop-blur-[2px]">
                      <div className="w-24 h-24 rounded-full bg-primary/95 flex items-center justify-center shadow-[0_0_80px_rgba(163,166,255,0.4)] hover:scale-110 transition-all active:scale-95">
                        <Play className="w-10 h-10 text-black fill-black ml-1" />
                      </div>
                    </div>
                  )}
                </div>

                <div className="absolute inset-x-0 bottom-0 z-10 p-10 md:p-14 flex flex-col pointer-events-none">
                  <div className="flex gap-2 mb-8">
                    {project.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="px-5 py-2 bg-white/5 backdrop-blur-2xl rounded-full text-[10px] uppercase font-black tracking-[0.2em] border border-white/10 text-white shadow-lg">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-4xl md:text-5xl lg:text-7xl font-black font-headline mb-6 text-white tracking-tighter group-hover:text-primary transition-colors leading-[0.95]">
                    {project.title}
                  </h3>
                  <p className="text-on-surface-variant font-body text-base md:text-lg leading-relaxed mb-10 line-clamp-2 max-w-2xl text-balance">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 pointer-events-auto">
                    <Link 
                      href={project.link} 
                      className="bg-primary hover:bg-white text-black px-10 py-4 rounded-2xl transition-all font-black uppercase text-[11px] tracking-[0.15em] hover:scale-105 active:scale-95 shadow-xl shadow-primary/20 flex items-center gap-2 group/btn"
                    >
                      Case Study
                      <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </Link>
                    
                    {project.demoUrl && (
                      <button 
                        onClick={() => setActiveVideo({ url: project.demoUrl!, title: project.title })}
                        className="bg-black/40 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/20 text-white px-10 py-4 rounded-2xl transition-all font-black uppercase text-[11px] tracking-[0.15em] flex items-center gap-3 hover:scale-105 active:scale-95"
                      >
                        <Play className="w-4 h-4 fill-white" />
                        Demo
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {activeVideo && (
        <VideoModal 
          isOpen={!!activeVideo} 
          onClose={() => setActiveVideo(null)} 
          videoUrl={activeVideo.url} 
          title={activeVideo.title} 
        />
      )}
    </section>
  );
}
