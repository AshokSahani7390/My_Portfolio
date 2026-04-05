"use client";

import { motion } from "framer-motion";

const skills = [
  "Antigravity",
  "ClaudeCode",
  "Supabase",
  "Vercel",
  "Clerk",
  "PostHog",
  "Pinecone",
  "n8n",
  "FastAPI",
  "Next.js",
  "Flutter",
  "GSAP",
  "Motion",
  "Lenis",
];

const techIcons = [
  { name: "AI", color: "primary", icon: "smart_toy" },
  { name: "DB", color: "secondary", icon: "database" },
  { name: "AUTO", color: "tertiary", icon: "alt_route" },
  { name: "CODE", color: "primary-dim", icon: "code" },
  { name: "AUTH", color: "secondary-dim", icon: "key" },
  { name: "PAY", color: "tertiary-dim", icon: "payments" },
];

export default function TechStack() {
  return (
    <section className="py-40 px-12 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-24">
        <div className="w-full md:w-1/2">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-primary font-headline font-black uppercase tracking-[0.3em] text-xs block mb-6 px-4 py-1 border-l-4 border-primary bg-primary/5 w-fit"
          >
            Toolkit
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-black font-headline mb-10 tracking-tighter text-white uppercase leading-[0.9]"
          >
            The Weapons of <br /> <span className="text-primary italic">Choice.</span>
          </motion.h2>
          <p className="text-on-surface-variant text-xl leading-relaxed mb-12 font-body max-w-xl">
             I leverage a world-class ecosystem of agentic AI, vector databases, and automated workflows to build software that is performant, intelligent, and future-proof.
          </p>
          
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="bg-surface-container-high px-5 py-2.5 rounded-xs text-[10px] font-black uppercase tracking-widest border border-white/5 hover:border-primary/50 hover:bg-primary/5 transition-all cursor-default select-none text-on-surface"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
        
        <div className="w-full md:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-8">
          {techIcons.map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ 
                scale: 1.02, 
                backgroundColor: "rgba(163, 166, 255, 0.05)",
                transition: { duration: 0.2 } 
              }}
              className="aspect-square bg-surface-container-lowest rounded-sm flex flex-col items-center justify-center border border-white/5 shadow-2xl relative overflow-hidden group p-8"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className={`material-symbols-outlined text-5xl mb-6 text-primary group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500`}>
                {tech.icon}
              </span>
              <span className="font-headline font-black text-xs tracking-[0.3em] uppercase text-on-surface-variant group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
