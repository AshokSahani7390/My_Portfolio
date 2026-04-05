"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Timeline from "@/components/Timeline";
import SmoothScroll from "@/components/SmoothScroll";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-surface">
        <Navbar />

        <section className="relative px-12 pt-48 pb-40 overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24 items-center">
            <div className="w-full md:w-[60%] relative z-10">
              <motion.h1
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                className="font-headline text-6xl md:text-[8rem] font-black tracking-tighter leading-[0.8] mb-16"
              >
                LOGIC <br /> <span className="kinetic-gradient-text italic">ARCHITECTURE</span>
              </motion.h1>

              <div className="max-w-xl space-y-8 text-on-surface-variant text-xl leading-relaxed font-body">
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  I am a Full-Stack Logic Architect. My journey began at the intersection of structural engineering and digital canvases—a space where precision meets pure creativity. I don&apos;t just write code; I design systems that breathe, scale, and endure.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  My philosophy is rooted in <strong>Material Honesty</strong>. Every component should have a purpose, every animation a physics-based reason, and every line of code a mathematical elegance. I transform complex business logic into high-end editorial experiences.
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
                className="aspect-square relative rounded-3xl overflow-hidden border-r-8 border-b-8 border-primary bg-surface-container-high p-4"
                style={{ boxShadow: "32px 32px 0px 0px rgba(163, 166, 255, 0.1)" }}
              >
                <Image
                  src="/profile.jpg"
                  alt="Ashok Sahani"
                  fill
                  className="object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-1000 ease-out"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <Timeline />

        <section className="py-40 bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto px-12">
            <h2 className="font-headline text-5xl font-black mb-24 text-center tracking-tighter">QUALIFICATIONS</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { title: "B.Tech Software Engineering", subtitle: "Dr. A.P.J. Abdul Kalam Technical University, Lucknow", status: "", icon: "school" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-surface-container rounded-2xl p-10 border-r-2 border-b-2 border-primary/20 hover:border-primary/50 transition-colors"
                >
                  <span className="material-symbols-outlined text-primary text-5xl mb-8">{item.icon}</span>
                  <h4 className="text-2xl font-headline font-bold text-white mb-3">{item.title}</h4>
                  <p className="text-on-surface-variant font-body mb-6">{item.subtitle}</p>
                  <span className="text-[10px] font-black text-primary tracking-[0.2em] uppercase">{item.status}</span>
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
