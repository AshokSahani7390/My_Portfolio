"use client";

import { use } from "react";
import { projects } from "@/data/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MoveLeft, CheckCircle2, AlertCircle, Target, Layers, Laptop, Smartphone, Terminal, Share2, Play } from "lucide-react";
import { notFound } from "next/navigation";
import { useState } from "react";
import VideoModal from "@/components/VideoModal";

export default function CaseStudyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const project = projects.find(p => p.id === id);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  if (!project) {
    notFound();
  }

  const sectionVariants = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" }
  };

  return (
    <SmoothScroll>
      <main className="min-h-screen bg-surface">
        <Navbar />

        {/* Hero Section */}
        <section className="relative pt-48 pb-32 px-12 overflow-hidden border-b border-white/5">
          <div className="max-w-screen-2xl mx-auto">
            <div className="flex flex-col md:flex-row items-end gap-16 mb-24">
              <div className="flex-1">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-4 mb-8"
                >
                  <Link href="/projects" className="group flex items-center gap-2 text-white/50 hover:text-white transition-colors">
                    <MoveLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span className="text-xs font-black uppercase tracking-[0.3em]">Gallery</span>
                  </Link>
                  <span className="w-1 h-1 bg-white/20 rounded-full" />
                  <span className="text-xs font-black uppercase tracking-[0.3em] text-primary">{project.category}</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-7xl md:text-[8rem] lg:text-[10rem] font-headline font-black tracking-tighter text-white leading-[0.85] mb-12"
                >
                  {project.title.split('-')[0]}<span className="text-primary">.</span><br />
                  <span className="text-on-surface-variant italic">{project.title.split('-')[1] || "Connect"}</span>
                </motion.h1>

                <div className="flex flex-col md:flex-row items-start md:items-center gap-10">
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-on-surface-variant text-xl md:text-2xl max-w-2xl font-light leading-relaxed font-body"
                  >
                    {project.subtitle}
                  </motion.p>
                  
                  {project.demoUrl && (
                    <motion.button
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 }}
                      onClick={() => setIsVideoOpen(true)}
                      className="group flex items-center gap-4 px-10 py-5 bg-primary text-black rounded-2xl font-black uppercase text-[11px] tracking-[0.15em] hover:scale-105 transition-all shadow-2xl shadow-primary/20 hover:bg-white active:scale-95"
                    >
                      <Play className="w-4 h-4 fill-black" />
                      Watch Demo
                    </motion.button>
                  )}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="hidden lg:flex flex-col gap-8 text-right border-l border-white/10 pl-16 py-8"
              >
                <div className="space-y-1">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-white/30 mb-2">Year</h4>
                  <p className="text-2xl font-headline text-white">2024</p>
                </div>
                <div className="space-y-1">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-white/30 mb-2">Role</h4>
                  <p className="text-2xl font-headline text-white">Product Designer <br /> & Developer</p>
                </div>
              </motion.div>
            </div>

            {/* Main Mockup */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1, ease: "circOut" }}
              onClick={() => project.demoUrl && setIsVideoOpen(true)}
              className={`relative aspect-video rounded-[3rem] overflow-hidden border border-white/10 group bg-[#0A0A0A] shadow-2xl ${project.demoUrl ? "cursor-pointer" : ""}`}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-[1.02] transition-all duration-[2s] ease-out opacity-80"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              
              {project.demoUrl && (
                <div className="absolute inset-x-0 bottom-0 p-12 flex justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center shadow-[0_0_80px_rgba(163,166,255,0.6)] group-hover:scale-110 transition-transform duration-500">
                    <Play className="w-10 h-10 text-black fill-black ml-1" />
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Overview & Problem */}
        <section className="py-40 px-12 max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-24">
            <motion.div {...sectionVariants} className="md:col-span-12 lg:col-span-6 space-y-12">
              <div className="space-y-6">
                <h2 className="text-xs font-black uppercase tracking-[0.5em] text-primary">Overview</h2>
                <p className="text-3xl md:text-5xl text-white font-headline leading-tight tracking-tight max-w-3xl">
                  {project.overview}
                </p>
              </div>
              <div className="h-px w-32 bg-white/10" />
              <p className="text-xl text-on-surface-variant/80 font-body leading-relaxed max-w-2xl">
                {project.fullDescription}
              </p>
            </motion.div>

            <motion.div {...sectionVariants} className="md:col-span-12 lg:col-span-6 space-y-16">
                <div className="p-14 rounded-[3rem] bg-surface-container-high border border-white/5 relative overflow-hidden group shadow-2xl">
                  <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                    <AlertCircle className="w-32 h-32 text-red-500" />
                  </div>
                  <h3 className="text-3xl font-headline font-black text-white mb-10 flex items-center gap-4">
                    <span className="w-12 h-1 bg-primary rounded-full" /> The Challenge
                  </h3>
                  <ul className="space-y-8">
                    {project.problem?.map((item, i) => (
                      <li key={i} className="flex items-start gap-5 text-on-surface-variant font-body text-xl">
                        <span className="text-primary italic mt-1 font-black shrink-0">/</span>
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-14 rounded-[3rem] bg-primary/5 border border-primary/20 relative overflow-hidden group shadow-2xl shadow-primary/5">
                  <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                    <Target className="w-32 h-32 text-primary" />
                  </div>
                  <h3 className="text-3xl font-headline font-black text-white mb-10 flex items-center gap-4">
                    <span className="w-12 h-1 bg-white rounded-full" /> The Objective
                  </h3>
                  <ul className="space-y-8">
                    {project.goal?.map((item, i) => (
                      <li key={i} className="flex items-start gap-5 text-on-surface-variant font-body text-xl">
                        <CheckCircle2 className="w-6 h-6 text-primary mt-1 shrink-0" />
                        <span className="leading-snug text-white/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
            </motion.div>
          </div>
        </section>

        {/* Architecture Section */}
        <section className="py-40 bg-[#080808] border-y border-white/5 overflow-hidden">
          <div className="max-w-screen-2xl mx-auto px-12">
            <div className="flex flex-col lg:flex-row gap-24 items-center">
              <motion.div {...sectionVariants} className="flex-1">
                <h2 className="text-xs font-black uppercase tracking-[0.5em] text-primary mb-12">The Strategy</h2>
                <h3 className="text-6xl md:text-8xl font-headline font-black text-white tracking-tighter leading-[0.95] mb-12">
                  Modern <br /> <span className="kinetic-gradient-text italic">Engineering</span>
                </h3>
                <p className="text-xl md:text-2xl text-on-surface-variant/80 font-light leading-relaxed font-body mb-12 max-w-2xl">
                  {project.approach}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
                  {project.keyFeatures?.slice(0, 6).map((feature, i) => (
                    <div key={i} className="flex items-center gap-4 py-6 border-b border-white/10 hover:border-primary transition-colors">
                       <div className="w-2 h-2 bg-primary rounded-full shadow-[0_0_15px_rgba(163,166,255,1)]" />
                       <span className="text-[11px] font-black uppercase tracking-[0.2em] text-white/70">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                {...sectionVariants}
                className="flex-1 relative aspect-square rounded-[4rem] overflow-hidden border border-white/5 bg-surface-container p-6 group"
              >
                 <div className="absolute inset-0 bg-primary/20 blur-[150px] opacity-20 group-hover:opacity-40 transition-opacity" />
                 <div className="h-full w-full rounded-[3rem] border border-dashed border-white/20 flex items-center justify-center relative overflow-hidden">
                    <div className="text-center p-16">
                       <div className="mb-14 relative inline-block">
                         <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
                         <Layers className="w-40 h-40 text-primary mx-auto relative z-10 group-hover:rotate-12 transition-transform duration-1000" />
                       </div>
                       <h4 className="text-5xl font-headline font-black text-white mb-6">Modular Core</h4>
                       <p className="text-on-surface-variant font-body text-lg leading-relaxed">System-first thinking ensures robust scalability and performance consistency across all modules.</p>
                    </div>
                 </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Tech Stack Grid */}
        <section className="py-40 px-12 max-w-screen-2xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-24">
            <motion.div {...sectionVariants} className="flex-[1.5]">
               <h2 className="text-xs font-black uppercase tracking-[0.5em] text-primary mb-16 px-1">Technical Stack</h2>
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {project.techStack && Object.entries(project.techStack).map(([key, value]) => (
                    <div key={key} className="p-10 rounded-[2.5rem] bg-[#0A0A0A] border border-white/5 hover:border-primary/20 transition-all group shadow-xl">
                       <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 mb-4 block">{key}</span>
                       <p className="text-2xl font-headline text-white group-hover:text-primary transition-colors leading-tight">{value}</p>
                    </div>
                  ))}
               </div>
            </motion.div>

            <motion.div {...sectionVariants} className="flex-1 bg-surface-container-high rounded-[3rem] p-16 border border-white/5 shadow-2xl relative overflow-hidden h-fit lg:mt-32">
               <div className="absolute top-0 right-0 w-full h-1 bg-primary" />
               <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-white/30 mb-10 font-headline">Design Direction</h2>
               <p className="text-3xl text-white font-headline leading-tight mb-14 tracking-tight">
                {project.designThinking?.description}
               </p>
               <div className="space-y-10">
                {project.designThinking?.focus.map((item, i) => (
                  <div key={i} className="flex flex-col gap-3">
                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-2">
                      <span>{item}</span>
                      <span className="text-white/40">100%</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + (i * 0.1), duration: 1.5, ease: "circOut" }}
                        className="h-full bg-primary shadow-[0_0_10px_rgba(163,166,255,1)]"
                      />
                    </div>
                  </div>
                ))}
               </div>
            </motion.div>
          </div>
        </section>

        {/* Final Solution & Result */}
        <section className="py-40 bg-black border-t border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-50" />
          <div className="max-w-[1440px] mx-auto px-12">
            <motion.div {...sectionVariants} className="text-center mb-40 max-w-5xl mx-auto space-y-12">
               <h2 className="text-xs font-black uppercase tracking-[0.5em] text-primary">Final Result</h2>
               <h3 className="text-7xl md:text-8xl lg:text-[10rem] font-headline font-black text-white tracking-tighter leading-[0.8] mb-12">
                 Classic<br /> <span className="kinetic-gradient-text italic">Refinement</span>.
               </h3>
               <p className="text-2xl md:text-4xl text-on-surface-variant font-light leading-relaxed font-body max-w-4xl mx-auto text-balance">
                {project.solution}
               </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-40">
                {[
                  { icon: Laptop, title: "Desktop Polish", desc: "Pixel-perfect refinement across ultra-wide and high-DPI displays." },
                  { icon: Smartphone, title: "Touch Logic", desc: "Highly intuitive interaction patterns for a seamless mobile traversal." },
                  { icon: Terminal, title: "Performance", desc: "Rigorous optimization for sub-second load times and silky motion." }
                ].map((item, i) => (
                  <div key={i} className="aspect-square relative rounded-[3rem] overflow-hidden border border-white/10 p-16 flex flex-col justify-between group bg-surface-container hover:bg-surface-container-high transition-colors duration-500">
                    <div className="w-20 h-20 rounded-[1.5rem] bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-primary transition-all duration-500">
                      <item.icon className="w-10 h-10 text-white group-hover:text-black transition-colors" />
                    </div>
                    <div className="space-y-6">
                      <h4 className="text-4xl font-headline font-black text-white">{item.title}</h4>
                      <p className="text-on-surface-variant text-lg leading-relaxed font-body">{item.desc}</p>
                    </div>
                  </div>
                ))}
            </div>

            <motion.div {...sectionVariants} className="p-20 md:p-32 rounded-[4rem] bg-surface-container-high relative overflow-hidden border border-white/5 shadow-2xl">
                <div className="absolute top-0 right-0 w-2/3 h-full bg-primary/10 blur-[180px] pointer-events-none opacity-30" />
                <div className="max-w-5xl relative z-10">
                   <h2 className="text-xs font-black uppercase tracking-[0.5em] text-primary mb-16">The Verdict</h2>
                   <p className="text-4xl md:text-6xl text-white font-headline font-black tracking-tight leading-[1.1] mb-16 italic italic-accent">
                    &ldquo;{project.outcome}&rdquo;
                   </p>
                   <div className="flex flex-col md:flex-row items-start md:items-center gap-8 border-t border-white/10 pt-16">
                     <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                       <CheckCircle2 className="w-8 h-8 text-primary shadow-[0_0_20px_rgba(163,166,255,0.4)]" />
                     </div>
                     <p className="text-2xl text-on-surface-variant/80 font-body leading-relaxed max-w-3xl">
                      {project.closingSummary}
                     </p>
                   </div>
                </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-48 px-12 bg-[#050505] relative overflow-hidden">
           <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent pointer-events-none" />
           <div className="max-w-screen-2xl mx-auto text-center space-y-24">
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="inline-flex items-center gap-4 px-8 py-3 bg-white/5 border border-white/10 rounded-full"
              >
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">Case Study Completed</span>
              </motion.div>
              
              <Link href="/projects" className="group block">
                <h2 className="text-7xl md:text-[10rem] lg:text-[14rem] font-headline font-black text-white tracking-tighter leading-none hover:italic scale-100 hover:scale-[1.02] transition-all duration-700">
                  Next <br /> <span className="group-hover:text-primary transition-colors italic">Selected</span> <span className="italic">Work</span>
                </h2>
              </Link>

              <div className="flex flex-wrap justify-center gap-10 mt-24">
                 <button className="flex items-center gap-4 px-12 py-5 bg-white text-black rounded-2xl font-black uppercase text-[12px] tracking-[0.2em] hover:bg-primary transition-all hover:scale-105 active:scale-95 shadow-2xl">
                    <Share2 className="w-5 h-5" /> Share Case
                 </button>
                 <Link href="/contact" className="flex items-center gap-4 px-12 py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-black uppercase text-[12px] tracking-[0.2em] hover:bg-white hover:text-black transition-all hover:scale-105 active:scale-95 backdrop-blur-md">
                    Start a Project
                 </Link>
              </div>
           </div>
        </section>

        <Footer />

        {project.demoUrl && (
          <VideoModal 
            isOpen={isVideoOpen} 
            onClose={() => setIsVideoOpen(false)} 
            videoUrl={project.demoUrl} 
            title={project.title} 
          />
        )}
      </main>
    </SmoothScroll>
  );
}
