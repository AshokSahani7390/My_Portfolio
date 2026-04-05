"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import SmoothScroll from "@/components/SmoothScroll";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram } from "lucide-react";

export default function ContactPage() {
  const socialLinks = [
    { 
      name: "LinkedIn", 
      icon: Linkedin, 
      href: "https://www.linkedin.com/in/ashok-sahani-b38b94305?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      color: "hover:bg-[#0077B5] hover:border-[#0077B5]"
    },
    { 
      name: "GitHub", 
      icon: Github, 
      href: "https://github.com/AshokSahani7390",
      color: "hover:bg-[#333] hover:border-[#333]" 
    },
    { 
      name: "Instagram", 
      icon: Instagram, 
      href: "https://www.instagram.com/ashoksahani7390",
      color: "hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:border-transparent" 
    },
  ];

  return (
    <SmoothScroll>
      <main className="min-h-screen bg-surface">
        <Navbar />
        
        <header className="pt-48 pb-20 px-12 max-w-7xl mx-auto overflow-hidden">
          <div className="flex flex-col md:flex-row items-end justify-between gap-12">
            <div className="max-w-4xl">
              <motion.h1 
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-8xl md:text-[10rem] font-headline font-black tracking-tighter text-white leading-none mb-12 uppercase"
              >
                LET&apos;S <br/><span className="text-primary italic uppercase">CONNECT</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-on-surface-variant text-xl md:text-2xl max-w-xl font-light leading-relaxed font-body"
              >
                Building high-performance digital systems and premium interfaces. How can I help you?
              </motion.p>
            </div>
          </div>
        </header>

        <section className="px-12 py-32 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-24">
            <div className="md:col-span-4 space-y-24">
              <div className="space-y-8">
                <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">Direct Relay</h4>
                <a href="mailto:ashoksahani2004@gmail.com" className="text-4xl md:text-5xl font-headline font-black text-white hover:text-primary transition-colors block tracking-tighter break-words">ashoksahani2004@gmail.com</a>
                <p className="text-on-surface-variant font-body">Based in the global digital cloud, available for international collaborations.</p>
              </div>

              <div className="space-y-12">
                <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">Social Channels</h4>
                <div className="flex flex-wrap gap-6">
                  {socialLinks.map((social, i) => (
                    <motion.a 
                      key={social.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`relative group flex items-center justify-center w-16 h-16 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-500 shadow-xl ${social.color}`}
                    >
                      <social.icon className="w-8 h-8 text-white group-hover:text-white transition-colors relative z-10" />
                      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity pointer-events-none" />
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="pt-24 border-t border-white/5">
                <div className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-8">Service Hours</div>
                <div className="flex justify-between items-center text-white font-headline text-lg tracking-tighter gap-4">
                  <span>Monday — Friday</span>
                  <span className="text-white/40">9AM — 6PM EST</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-8">
              <Contact isPage />
            </div>
        </section>

        <Footer />
      </main>
    </SmoothScroll>
  );
}
