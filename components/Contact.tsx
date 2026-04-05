"use client";

import { motion } from "framer-motion";

export default function Contact({ isPage = false }: { isPage?: boolean }) {
  // Contact form logic planned for implementation


  return (
    <section id="contact" className={`py-40 relative overflow-hidden ${isPage ? "p-0" : "px-12"}`}>
      {!isPage && (
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent pointer-events-none" />
      )}
      
      {!isPage && (
        <div className="max-w-7xl mx-auto mb-24 flex flex-col md:flex-row justify-between items-end gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-headline text-8xl md:text-[10rem] font-black tracking-tighter text-white leading-[0.8] mb-12">
              LET&apos;S <br/> <span className="kinetic-gradient-text italic">BUILD.</span>
            </h2>
            <div className="flex items-center gap-6 group cursor-pointer">
              <span className="w-16 h-px bg-primary group-hover:w-32 transition-all duration-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-on-surface-variant group-hover:text-white transition-colors">Start a conversation</span>
            </div>
          </motion.div>
        </div>
      )}

      <div className={`grid grid-cols-1 md:grid-cols-12 gap-16 relative z-10 ${isPage ? "" : "max-w-7xl mx-auto"}`}>
        <div className={`${isPage ? "md:col-span-12" : "md:col-span-7"}`}>
          <motion.form 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-12 bg-surface-container-high p-16 rounded-3xl border-r-[12px] border-b-[12px] border-primary/20 relative"
            style={{ boxShadow: "inset 0 1px 1px 0 rgba(255,255,255,0.05)" }}
          >
            <div className="absolute top-0 right-0 p-8">
              <div className="w-12 h-12 bg-black/40 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/5">
                <span className="material-symbols-outlined text-primary text-xl">draw</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <label className="text-[10px] font-black text-primary uppercase tracking-[0.3em] ml-2">YOUR NAME</label>
                <input 
                  type="text" 
                  placeholder="ARCHITECT SURNAME"
                  className="w-full bg-black/40 border border-white/5 rounded-2xl px-8 py-5 text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-headline text-lg"
                />
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-black text-primary uppercase tracking-[0.3em] ml-2">EMAIL ADDRESS</label>
                <input 
                  type="email" 
                  placeholder="PROTOCOL@DOMAIN.COM"
                  className="w-full bg-black/40 border border-white/5 rounded-2xl px-8 py-5 text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-headline text-lg"
                />
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-[10px] font-black text-primary uppercase tracking-[0.3em] ml-2">PROJECT BRIEF</label>
              <textarea 
                rows={6}
                placeholder="DESCRIBE THE LOGIC STRUCTURE..."
                className="w-full bg-black/40 border border-white/5 rounded-2xl px-8 py-6 text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-body text-lg resize-none"
              ></textarea>
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-white text-black py-8 rounded-2xl font-headline font-black text-xs uppercase tracking-[0.6em] hover:bg-primary transition-colors flex items-center justify-center gap-6 group"
            >
              INITIALIZE CONNECTION
              <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">bolt</span>
            </motion.button>
          </motion.form>
        </div>

        {!isPage && (
          <div className="md:col-span-5 flex flex-col justify-between py-12">
            <div className="space-y-16">
              <div className="space-y-6">
                <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.5em]">Global Relay</h4>
                <a href="mailto:ashoksahani2004@gmail.com" className="text-4xl font-headline font-black text-white hover:text-primary transition-colors block tracking-tighter">ashoksahani2004@gmail.com</a>
              </div>
              <div className="space-y-6">
                <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.5em]">Availability</h4>
                <div className="flex items-center gap-4 text-2xl font-headline font-black text-white italic">
                  <span className="w-3 h-3 bg-primary rounded-full animate-pulse shadow-[0_0_15px_rgba(163,166,255,1)]" />
                  Q3 & Q4 PROJECTS
                </div>
              </div>
            </div>
            
            <div className="p-10 bg-white/5 border border-white/5 rounded-3xl backdrop-blur-3xl overflow-hidden relative">
              <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
              <div className="text-on-surface-variant font-body text-sm leading-relaxed relative z-10">
                &quot;The structure of code is the skeleton of modern reality. Let&apos;s architect a reality that scales.&quot;
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
