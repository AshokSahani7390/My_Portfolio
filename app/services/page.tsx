"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { motion } from "framer-motion";
import { ArrowUpRight, Code, Terminal, Bot, Cloud } from "lucide-react";

const services = [
  {
    title: "SaaS Systems",
    description: "Building scalable, multi-tenant cloud platforms with modern architectural standards and high-fidelity user interfaces.",
    icon: Cloud,
    tags: ["Microservices", "Scalability", "Identity Management"],
    price: "From $12k",
  },
  {
    title: "Web Applications",
    description: "High-performance editorial experiences and complex data-driven dashboards using Next.js and high-end animations.",
    icon: Code,
    tags: ["React/Next.js", "GSAP/Framer", "Performance Optimization"],
    price: "From $8k",
  },
  {
    title: "Automation Engines",
    description: "Custom deployment pipelines and internal tooling that streamlines production workflows for engineering teams.",
    icon: Terminal,
    tags: ["CI/CD", "Infrastructure as Code", "Custom CLI"],
    price: "From $5k",
  },
  {
    title: "AI Integrations",
    description: "Integrating intelligent logic and machine learning models into existing ecosystems for predictive analytics and automation.",
    icon: Bot,
    tags: ["LLM Fine-tuning", "RAG", "Predictive Modeling"],
    price: "From $15k",
  },
];

export default function ServicesPage() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-surface">
        <Navbar />
        
        <header className="pt-48 pb-20 px-12 max-w-7xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-8xl md:text-[10rem] font-headline font-black tracking-tighter text-white leading-none mb-12"
            >
              SERVICES <br/><span className="text-primary italic">& CAPABILITIES</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-on-surface-variant text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed font-body"
            >
              Transforming complex technical challenges into simplified, premium software solutions.
            </motion.p>
        </header>

        <section className="px-12 py-32 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-surface-container-high p-12 rounded-xs border-r-4 border-b-4 border-primary hover:border-r-8 hover:border-b-8 transition-all duration-300 relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-primary/2 opacity-0 group-hover:opacity-100 transition-opacity" />
                <service.icon className="w-16 h-16 text-primary mb-12 group-hover:scale-110 group-hover:rotate-12 transition-transform" />
                <h3 className="text-5xl font-headline font-black text-white mb-6 uppercase tracking-tighter">{service.title}</h3>
                <p className="text-on-surface-variant text-xl leading-relaxed mb-10 font-body">{service.description}</p>
                <div className="flex flex-wrap gap-4 mb-12">
                  {service.tags.map((tag) => (
                    <span key={tag} className="px-5 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-white">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-12 border-t border-white/5">
                  <span className="text-2xl font-headline font-black text-primary italic uppercase tracking-widest">{service.price}</span>
                  <motion.button 
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 text-xs font-black uppercase tracking-[0.3em] text-white group-hover:text-primary transition-colors"
                  >
                    Start Project <ArrowUpRight className="w-6 h-6" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
        </section>

        <Footer />
      </main>
    </SmoothScroll>
  );
}
