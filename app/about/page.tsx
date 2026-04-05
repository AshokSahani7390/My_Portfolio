"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Timeline from "@/components/Timeline";
import SmoothScroll from "@/components/SmoothScroll";
import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Terminal, 
  Database, 
  Globe, 
  Cpu, 
  ShieldCheck, 
  Zap, 
  Activity, 
  MessageSquare,
  Search,
  Layout
} from "lucide-react";

const engineeringStack = [
  {
    category: "Core Build",
    icon: Terminal,
    tools: ["Antigravity", "ClaudeCode", "Supabase", "Vercel", "GitHub"]
  },
  {
    category: "Auth & Ops",
    icon: ShieldCheck,
    tools: ["Clerk", "Razorpay", "UptimeRobot", "Sentry", "PostHog"]
  },
  {
    category: "AI & Data",
    icon: Cpu,
    tools: ["Pinecone", "OpenRouter", "OpenAI", "n8n", "FastAPI"]
  },
  {
    category: "Automation",
    icon: Zap,
    tools: ["Meta WhatsApp API", "Gmail API", "Apify", "Playwright"]
  },
  {
    category: "Frontend",
    icon: Layout,
    tools: ["Next.js", "Flutter", "Motion", "GSAP", "Lenis"]
  }
];

export default function AboutPage() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-surface font-body">
        <Navbar />

        <section className="relative px-12 pt-48 pb-40 overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24 items-center">
            <div className="w-full md:w-[60%] relative z-10">
              <motion.h1
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                className="font-headline text-6xl md:text-[8rem] font-black tracking-tighter leading-[0.8] mb-16 text-white uppercase"
              >
                LOGIC <br /> <span className="text-primary italic">ARCHITECTURE</span>
              </motion.h1>

              <div className="max-w-xl space-y-8 text-on-surface-variant text-xl leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  I am a Full-Stack Logic Architect. My journey is defined by the intersection of high-scale automation, AI intelligence, and premium product design. I don&apos;t just build apps; I create ecosystems that solve real-world complexities.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  My stack is built for the 2026 standards—leveraging <strong>Agentic AI</strong>, <strong>Vector Databases</strong>, and <strong>Automated Workflows</strong> to deliver software that isn&apos;t just functional, but intelligent.
                </motion.p>
              </div>
            </div>

            <div className="w-full md:w-[40%] relative group">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, ease: "circOut" }}
                className="absolute inset-0 bg-primary/20 blur-[150px] rounded-full -z-10 group-hover:bg-primary/30 transition-all duration-1000"
              />
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "circOut" }}
                className="aspect-square relative rounded-xs overflow-hidden border-r-8 border-b-8 border-primary bg-surface-container-high p-4"
                style={{ boxShadow: "32px 32px 0px 0px rgba(163, 166, 255, 0.1)" }}
              >
                <Image
                  src="/profile.jpg"
                  alt="Ashok Sahani"
                  fill
                  className="object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-1000 ease-out"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <Timeline />

        <section className="py-40 bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto px-12">
            <h2 className="font-headline text-5xl md:text-7xl font-black mb-32 text-center tracking-tighter uppercase italic text-white flex items-center justify-center gap-6">
              Engineering <span className="text-primary not-italic">Stack</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {engineeringStack.map((group, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-surface-container-high p-8 rounded-xs border-b-4 border-primary/20 hover:border-primary transition-all duration-300 group"
                >
                  <group.icon className="w-10 h-10 text-primary mb-8 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white mb-8 border-b border-white/5 pb-4">{group.category}</h3>
                  <ul className="space-y-4">
                    {group.tools.map((tool) => (
                      <li key={tool} className="text-on-surface-variant text-sm font-medium hover:text-white transition-colors cursor-default">
                        {tool}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-40 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-12">
            <h2 className="font-headline text-5xl font-black mb-24 text-center tracking-tighter uppercase text-white">Academic Foundation</h2>
            <div className="flex flex-wrap justify-center gap-12">
              {[
                { title: "B.Tech Software Engineering", subtitle: "Dr. A.P.J. Abdul Kalam Technical University, Lucknow", status: "2023 - 2027 (Expected)", icon: "school" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-surface-container rounded-xs p-10 border-r-2 border-b-2 border-primary/20 hover:border-primary/50 transition-colors text-center max-w-xl"
                >
                   <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                    <span className="material-symbols-outlined text-primary text-4xl">school</span>
                   </div>
                  <h4 className="text-3xl font-headline font-black text-white mb-4 uppercase tracking-tighter">{item.title}</h4>
                  <p className="text-on-surface-variant text-xl mb-6">{item.subtitle}</p>
                  <span className="px-6 py-2 bg-primary/10 text-primary text-[10px] font-black tracking-[0.2em] uppercase rounded-full">{item.status}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </SmoothScroll>
  );
}
