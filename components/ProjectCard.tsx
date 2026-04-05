"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import VideoModal from "./VideoModal";

interface ProjectCardProps {
  id?: string;
  title: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
  link?: string;
  demoUrl?: string;
  large?: boolean;
}

export default function ProjectCard({
  title,
  description,
  category,
  image,
  tags,
  link = "#",
  demoUrl,
  large = false,
}: ProjectCardProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <motion.article 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -8 }}
        className={`group bg-[#0A0A0A] p-0 rounded-[2.5rem] border border-white/5 transition-all duration-500 relative overflow-hidden flex flex-col
          ${large ? "lg:col-span-2" : "col-span-1"}
          hover:border-primary/30 hover:shadow-[0_0_80px_rgba(163,166,255,0.07)]`}
      >
        <div className={`flex flex-col h-full ${large ? "md:flex-row" : ""}`}>
          {/* Image Container */}
          <div 
            onClick={() => demoUrl && setIsVideoOpen(true)}
            className={`relative overflow-hidden cursor-pointer group/img ${large ? "md:w-1/2 aspect-video md:aspect-auto" : "aspect-[16/10]"}`}
          >
            <div className="absolute inset-0 z-10 bg-black/40 group-hover/img:bg-black/10 transition-colors duration-500 flex items-center justify-center">
               {demoUrl && (
                 <motion.div 
                   initial={{ opacity: 0, scale: 0.5 }}
                   whileHover={{ scale: 1.1 }}
                   className="w-16 h-16 rounded-full bg-primary/90 backdrop-blur-md flex items-center justify-center shadow-[0_0_40px_rgba(163,166,255,0.4)] opacity-0 group-hover/img:opacity-100 transition-all duration-300"
                 >
                   <Play className="w-6 h-6 text-black fill-black ml-1" />
                 </motion.div>
               )}
            </div>
            <Image 
              src={image} 
              alt={title}
              fill
              className="object-cover grayscale group-hover/img:grayscale-0 scale-100 group-hover/img:scale-110 transition-all duration-700 ease-out"
            />
            {/* Category Badge */}
            <div className="absolute top-6 left-6 z-20">
              <span className="bg-white/10 backdrop-blur-xl text-white border border-white/10 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.1em]">
                {category}
              </span>
            </div>
          </div>

          {/* Content Container */}
          <div className={`p-8 md:p-10 flex flex-col ${large ? "md:w-1/2" : "flex-1"}`}>
            <div className="flex-1 space-y-6">
              <div className="space-y-4">
                <Link href={link}>
                   <h3 className={`font-headline font-black text-white leading-[1.1] tracking-tighter hover:text-primary transition-colors duration-300 ${large ? "text-5xl" : "text-3xl"}`}>
                     {title}
                   </h3>
                </Link>
                <p className="font-body text-on-surface-variant/80 text-sm md:text-base leading-relaxed line-clamp-3">
                  {description}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-white/5 border border-white/5 rounded-lg text-[9px] font-medium uppercase tracking-wider text-on-surface-variant">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-col xs:flex-row gap-3">
              <Link 
                href={link}
                className="flex-[1.4] py-4 bg-primary text-black text-[11px] font-black uppercase tracking-[0.15em] rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 group/btn hover:bg-white hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary/10"
              >
                Case Study
                <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </Link>
              
              {demoUrl && (
                <button 
                  onClick={() => setIsVideoOpen(true)}
                  className="flex-1 py-4 bg-white/5 border border-white/10 text-white text-[11px] font-black uppercase tracking-[0.15em] rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 hover:bg-white/10 hover:border-white/20 active:scale-[0.98]"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  Demo
                </button>
              )}
            </div>
          </div>
        </div>
      </motion.article>

      {demoUrl && (
        <VideoModal 
          isOpen={isVideoOpen} 
          onClose={() => setIsVideoOpen(false)} 
          videoUrl={demoUrl} 
          title={title} 
        />
      )}
    </>
  );
}
