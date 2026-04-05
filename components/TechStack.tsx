"use client";

import { motion } from "framer-motion";

const skills = [
  "Next.js",
  "Tailwind CSS",
  "TypeScript",
  "Three.js",
  "GSAP",
  "Node.js",
  "PostgreSQL",
];

const techIcons = [
  { name: "NEXT", color: "white", icon: null },
  { name: "CSS", color: "primary", icon: "css" },
  { name: "3D", color: "secondary", icon: "view_in_ar" },
  { name: "DB", color: "tertiary", icon: "database" },
  { name: "TERM", color: "primary-dim", icon: "terminal" },
  { name: "API", color: "primary", icon: "api" },
];

export default function TechStack() {
  return (
    <section className="py-32 px-8 bg-surface">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
        <div className="w-full md:w-1/2">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-tertiary-dim font-headline font-bold uppercase tracking-[0.2em] text-xs block mb-4"
          >
            Toolkit
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-black font-headline mb-8 tracking-tighter"
          >
            The Weapons of <br /> Choice.
          </motion.h2>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-10 font-body">
            I leverage cutting-edge frameworks to ensure every application is performant, SEO-friendly, and future-proof.
          </p>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-surface-variant px-6 py-2 rounded-full text-xs font-bold border border-white/5 hover:border-primary transition-colors cursor-default select-none"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
        
        <div className="w-full md:w-1/2 grid grid-cols-3 gap-6">
          {techIcons.map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, rotateY: 90 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 1, ease: "circOut" }}
              whileHover={{ 
                scale: 1.05, 
                rotateZ: 2, 
                transition: { duration: 0.2 } 
              }}
              className={`aspect-square bg-surface-container rounded-3xl flex items-center justify-center border border-white/5 shadow-2xl relative overflow-hidden group`}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              {tech.icon ? (
                <span className={`material-symbols-outlined text-4xl text-${tech.color} group-hover:scale-125 transition-transform duration-500`}>
                  {tech.icon}
                </span>
              ) : (
                <span className="font-black text-2xl group-hover:scale-110 transition-transform duration-500">
                  {tech.name}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
