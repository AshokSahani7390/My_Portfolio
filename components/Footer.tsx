"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Instagram, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

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

  const footerLinks = [
    { name: "SaaS Development", href: "#" },
    { name: "Web Apps", href: "#" },
    { name: "Automation", href: "#" },
    { name: "AI Integrations", href: "#" },
  ];

  return (
    <footer className="bg-[#050505] full-width relative border-t border-white/5 overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/5 blur-[100px] rounded-full translate-y-1/3 -translate-x-1/4 pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto px-12 py-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20">
          
          {/* Brand Info */}
          <div className="md:col-span-4 space-y-10">
            <Link href="/" className="font-headline text-3xl font-black text-white tracking-tighter group flex items-center gap-2">
              <span className="text-white group-hover:text-primary transition-colors">ASHOK</span>
              <span className="text-white/40 group-hover:text-white transition-colors italic">SAHANI</span>
            </Link>
            <p className="font-body text-lg leading-relaxed text-on-surface-variant/80 max-w-sm">
              Building high-performance digital systems and premium interfaces for the next generation of industry leaders.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              {socialLinks.map((social, i) => (
                <motion.a 
                  key={social.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative group flex items-center justify-center w-14 h-14 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-500 shadow-xl ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon className="w-6 h-6 text-white group-hover:text-white transition-colors relative z-10" />
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity pointer-events-none" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2 md:col-start-6 space-y-10">
            <h4 className="text-white/40 font-black uppercase text-[10px] tracking-[0.5em]">Capabilities</h4>
            <ul className="space-y-6">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="flex items-center gap-2 group font-headline font-bold text-sm text-on-surface-variant hover:text-white transition-all">
                    <span className="w-1.5 h-1.5 bg-primary/40 rounded-full group-hover:bg-primary group-hover:scale-125 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact CTA */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div className="space-y-8">
              <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">Ready to grow?</h4>
              <Link href="/contact" className="group block space-y-4">
                <h3 className="text-5xl lg:text-6xl font-headline font-black text-white tracking-tighter group-hover:text-primary transition-colors leading-[0.9]">
                  Let&apos;s Build <br /> <span className="italic">Together.</span>
                </h3>
                <div className="flex items-center gap-3 text-white/40 group-hover:text-white transition-colors font-headline font-bold text-xs uppercase tracking-widest">
                  Start a project <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-body text-[10px] font-bold uppercase tracking-[0.4em] text-white/20">
            © {currentYear} ASHOK SAHANI. PULSE OF THE MODERN WEB.
          </div>
          <div className="flex gap-10">
             <Link href="#" className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 hover:text-white transition-colors">Privacy Protocol</Link>
             <Link href="#" className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 hover:text-white transition-colors">Terms of Logic</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
