"use client";

import { motion } from "framer-motion";

const timelineItems = [
  {
    period: "2025 — 2026",
    title: "AI Solution Architect",
    company: "Autonomous Product Development",
    description: "Architecting high-scale AI systems and SaaS platforms using context-aware agentic workflows and vector-driven intelligence.",
    tags: ["Antigravity", "ClaudeCode", "Pinecone", "OpenRouter"],
    current: true,
  },
  {
    period: "2024 — 2025",
    title: "Full-Stack Automation Lead",
    company: "Digital Ecosystems",
    description: "Building production-ready automation engines and secure communication systems with deep integration across WhatsApp and Email APIs.",
    tags: ["Supabase", "n8n", "FastAPI", "Meta API"],
    current: false,
  },
  {
    period: "2023 — 2024",
    title: "Product Engineer",
    company: "SaaS Launchpad",
    description: "Focused on high-performance web applications with real-time analytics, secure payment processing, and premium product monitoring.",
    tags: ["Next.js", "Vercel", "Clerk", "Razorpay"],
    current: false,
  },
];

export default function Timeline() {
  return (
    <section className="py-40 relative">
      <div className="max-w-7xl mx-auto px-12 grid grid-cols-1 md:grid-cols-12 gap-16">
        <div className="md:col-span-4 sticky top-32 h-fit">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-headline text-5xl font-black tracking-tighter mb-8 leading-none">
              THE <br /> CHRONOLOGY
            </h2>
            <div className="h-1.5 w-24 bg-primary mb-10"></div>
            <p className="text-on-surface-variant font-body text-lg leading-relaxed max-w-sm">
              Charting the evolution of architectural logic across diverse industries and complex challenges from 2023 to 2026.
            </p>
          </motion.div>
        </div>

        <div className="md:col-span-8 space-y-24 relative">
          <div className="absolute left-[7px] top-0 bottom-0 w-[2px] bg-white/5"></div>
          
          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-16 group"
            >
              <div className={`absolute left-0 top-0 w-4 h-4 rounded-full ring-4 ring-black z-10 
                ${item.current ? "bg-primary shadow-[0_0_20px_rgba(163,166,255,0.6)]" : "bg-white/10 group-hover:bg-primary transition-colors"}`} 
              />
              
              <span className="font-headline text-xs font-bold text-primary mb-4 block tracking-[0.3em] uppercase">
                {item.period}
              </span>
              <h3 className="text-4xl font-headline font-black text-white mb-4 tracking-tighter">
                {item.title}
              </h3>
              <p className="text-xl text-on-surface-variant font-medium mb-8 leading-relaxed">
                {item.description}
              </p>
              
              <div className="flex flex-wrap gap-4">
                {item.tags.map((tag) => (
                  <span key={tag} className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-on-surface hover:bg-primary/10 hover:border-primary/30 transition-all">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
