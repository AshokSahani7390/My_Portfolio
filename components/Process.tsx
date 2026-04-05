"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Idea",
    description: "Deep dive into requirements and business objectives.",
    icon: "lightbulb",
    color: "primary",
  },
  {
    title: "Design",
    description: "Crafting high-fidelity mockups and technical architecture.",
    icon: "architecture",
    color: "secondary",
  },
  {
    title: "Build",
    description: "Clean, scalable code using the latest tech stack.",
    icon: "code",
    color: "tertiary",
  },
  {
    title: "Deploy",
    description: "Rigorous testing followed by seamless production launch.",
    icon: "rocket_launch",
    color: "primary",
  },
];

export default function Process() {
  return (
    <section className="py-32 px-8 bg-surface-container-lowest overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-5xl font-black font-headline mb-6 tracking-tighter"
          >
            My Kinetic Process.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-on-surface-variant max-w-2xl mx-auto"
          >
            Structured logic combined with creative flexibility ensures projects are delivered with precision and flair.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="absolute top-10 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent hidden lg:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex flex-col items-center text-center group"
              >
                <div className={`w-20 h-20 bg-surface-container rounded-2xl flex items-center justify-center mb-8 border border-white/5 shadow-xl transition-all hover:bg-${step.color}/10 hover:border-${step.color} group`}>
                  <span className={`material-symbols-outlined text-${step.color} group-hover:scale-110 transition-transform`}>
                    {step.icon}
                  </span>
                </div>
                <h4 className="text-xl font-bold font-headline mb-2">{step.title}</h4>
                <p className="text-on-surface-variant text-sm font-body max-w-[200px]">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
