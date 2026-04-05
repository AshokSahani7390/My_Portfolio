"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "SaaS Development",
    description: "Scalable multi-tenant architectures built with modern cloud-native principles.",
    icon: "cloud_sync",
    color: "primary",
  },
  {
    title: "Web Apps",
    description: "High-performance, interactive applications focused on speed and user experience.",
    icon: "web_asset",
    color: "secondary",
  },
  {
    title: "Mobile Apps",
    description: "Cross-platform solutions that feel native and perform beautifully on every device.",
    icon: "smartphone",
    color: "tertiary",
  },
  {
    title: "Dashboards",
    description: "Data-driven interfaces that turn complex information into actionable insights.",
    icon: "monitoring",
    color: "primary",
  },
  {
    title: "Automation",
    description: "Workflow optimization using Zapier, Make, and custom-built internal engines.",
    icon: "bolt",
    color: "secondary",
  },
  {
    title: "AI Integrations",
    description: "Leveraging LLMs and neural networks to add smart features to your business.",
    icon: "psychology",
    color: "tertiary",
  },
];

export default function Services() {
  return (
    <section className="py-32 px-8 bg-surface-container-low">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-primary font-headline font-bold uppercase tracking-[0.2em] text-xs block mb-4"
          >
            Core Expertise
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black font-headline tracking-tighter"
          >
            Architecture for <br /> the Future Web.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              whileHover={{ 
                scale: 1.02, 
                rotate: 0.5,
                transition: { duration: 0.3 } 
              }}
              className={`group bg-surface p-12 rounded-2xl transition-all duration-500 border-white/5 border`}
            >
              {/* Brutalist Shadow Effect */}
              <div className="absolute inset-0 rounded-2xl transition-opacity group-hover:opacity-100 opacity-0 bg-primary/5 pointer-events-none -z-10 blur-xl"></div>
              
              <span className={`material-symbols-outlined text-4xl mb-8 block transition-transform group-hover:scale-110 group-hover:rotate-6 text-${service.color}`}>
                {service.icon}
              </span>
              
              <h3 className="text-2xl font-bold font-headline mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-on-surface-variant leading-relaxed font-body text-sm">
                {service.description}
              </p>
              
              {/* Interaction Hint */}
              <div className="mt-8 overflow-hidden h-1">
                <div className={`h-full w-full bg-${service.color} -translate-x-full group-hover:translate-x-0 transition-transform duration-500 rounded-full opacity-50`}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
