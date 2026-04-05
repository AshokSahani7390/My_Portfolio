"use client";

import { motion } from "framer-motion";

const clients = [
  "LOGIC_GATE",
  "QUANTUM",
  "FLUX",
  "NEXUS",
  "VELOCITY",
];

export default function Clients() {
  return (
    <section className="py-24 bg-surface border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-headline text-center text-on-surface-variant text-[10px] font-bold tracking-[0.3em] uppercase mb-12"
        >
          Trusted by Next-Gen Startups
        </motion.p>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
          {clients.map((client, i) => (
            <motion.span
              key={client}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="font-headline text-2xl font-black tracking-tight cursor-default hover:text-primary transition-colors"
            >
              {client === "FLUX" ? (
                <span className="italic underline decoration-primary decoration-4 underline-offset-4">{client}</span>
              ) : client === "NEXUS" ? (
                <span className="border-2 border-white px-2 py-0.5">{client}</span>
              ) : client}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
