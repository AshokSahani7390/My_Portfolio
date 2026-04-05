"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Kinetic Architect transformed our stagnant SaaS into a high-converting machine. The attention to detail is unrivaled.",
    author: "Marcus Chen",
    role: "CEO, Flux Labs",
    color: "primary",
  },
  {
    text: "The code is clean, the UI is beautiful, and the communication was perfect. Truly a world-class partner for our agency.",
    author: "Sarah Jenkins",
    role: "Creative Director, Nexus",
    color: "secondary",
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 px-8 bg-surface-container-low">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
           <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-black font-headline mb-12 tracking-tighter"
          >
            Client Voices.
          </motion.h2>
          <div className="space-y-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className={`bg-surface p-10 rounded-2xl border-l-[6px] border-${t.color} shadow-lg shadow-black/20`}
              >
                <p className="text-on-surface-variant italic mb-8 font-body leading-relaxed text-lg italic">
                  &quot;{t.text}&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-surface-variant rounded-full flex items-center justify-center font-bold text-sm">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">{t.author}</h4>
                    <p className="text-[10px] text-on-surface-variant uppercase tracking-[0.2em] font-bold mt-1">
                      {t.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-4xl font-black font-headline mb-12 tracking-tighter"
          >
            Partnership Models.
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-surface-container-high rounded-3xl p-12 border border-white/5 shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[60px] -mr-10 -mt-10 group-hover:bg-primary/40 transition-all duration-700"></div>
            
            <h3 className="text-3xl font-bold font-headline mb-3 text-white">The Catalyst</h3>
            <p className="text-on-surface-variant mb-10 text-sm font-body leading-relaxed max-w-xs">
              Full execution of a single platform or system from discovery to deployment.
            </p>
            
            <div className="mb-10 flex items-baseline gap-2">
              <span className="text-6xl font-black font-headline text-white tracking-tighter">Custom</span>
              <span className="text-on-surface-variant text-xs uppercase tracking-widest font-bold">/ Project</span>
            </div>
            
            <ul className="space-y-5 mb-12 text-sm font-body">
              {[
                "Strategy & Architecture",
                "UI/UX High-Fidelity Design",
                "Full-Stack Implementation",
                "3 Months Post-Launch Support",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-on-surface hover:text-primary transition-colors group/li">
                  <span className="material-symbols-outlined text-primary text-xl scale-75 group-hover/li:scale-100 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>
                    check_circle
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            
            <button className="w-full bg-white text-black py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-black/20">
              Request a Quote
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
