"use client";

import React from "react";
import { GridCell } from "@/components/ui/grid-cell";
import { motion } from "framer-motion";
import Image from "next/image";
import BlurText from "@/components/ui/blurText";

const reveal = {
  hidden: { y: "120%", clipPath: "inset(100% 0 0 0)" },
  visible: (i: number) => ({
    y: 0,
    clipPath: "inset(0% 0 0 0)",
    transition: {
      delay: i * 0.08,
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1] as const, // Custom cubic-bezier for high-end feel
    },
  }),
} as any;

export const Hero = () => {
  return (
    <section className="w-full border-b border-border bg-background overflow-hidden">
      {/* Level 1: Massive Bold Headline */}
      <div className="w-full border-b border-border pt-20 pb-12 px-2 md:px-6 flex flex-col items-center md:items-start justify-center relative overflow-hidden">
        <motion.p 
          className="font-display italic text-xl md:text-2xl font-normal tracking-[0.12em] text-accent mb-6 ml-2 md:ml-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Rivu Chattopadhyay
        </motion.p>
        <h1 className="font-display leading-[0.85] tracking-tighter uppercase font-black text-foreground flex flex-col w-full text-left">
          <div className="overflow-hidden pb-2 pt-1">
            <motion.span
              custom={1}
              variants={reveal}
              initial="hidden"
              animate="visible"
              className="block text-[10vw] md:text-[6vw] text-accent tracking-[0.05em] ml-2 md:ml-4 -ml-[0.02em]"
            >
              FULL STACK
            </motion.span>
          </div>
          <div className="overflow-hidden pb-4 pt-2 w-full">
            <motion.span
              custom={2}
              variants={reveal}
              initial="hidden"
              animate="visible"
              className="block text-accent text-[clamp(4rem,15vw,25rem)] w-full -ml-[0.04em]"
              style={{ paddingBottom: '0.15em' }}
            >
              DEVELOPER.
            </motion.span>
          </div>
        </h1>
      </div>

      {/* Level 2: Information Grid (Inspired by Reference) */}
      <div className="grid grid-cols-1 md:grid-cols-12 w-full h-auto">
        
        {/* Col 1: Vertical Metadata */}
        <GridCell className="md:col-span-3 p-10 flex flex-col justify-between border-r border-border" noBorder>
          <div className="space-y-12">
            <div>
              <p className="font-accent text-[10px] uppercase font-bold tracking-[0.15em] text-foreground/40 mb-4 italic">Location</p>
              <h3 className="font-sans text-lg font-black uppercase tracking-tighter">Kolkata, India</h3>
            </div>
            <div>
              <p className="font-accent text-[10px] uppercase font-bold tracking-[0.15em] text-foreground/40 mb-4 italic">Status</p>
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                <h3 className="font-sans text-lg font-black uppercase tracking-tighter">Available for Opportunities</h3>
              </div>
            </div>
          </div>
          <div className="pt-12">
            <p className="font-accent text-[10px] uppercase font-bold tracking-[0.1em] text-foreground/30 leading-loose">
              Technical Professional — SDE
            </p>
          </div>
        </GridCell>

        {/* Col 2: Bio & Description */}
        <GridCell className="md:col-span-5 p-10 md:p-16 flex flex-col border-r border-border bg-surface/5" noBorder delay={0.3}>
          <div className="space-y-10 max-w-xl">
            <div className="h-0.5 w-12 bg-accent" />
            <BlurText
              text="A 3rd-year IT scholar focused on building scalable architectures and user-centric solutions. Specialized in the MERN stack with a growing expertise in Generative AI. 3x Hackathon Winner, Web Lead."
              delay={30}
              animateBy="words"
              direction="top"
              className="font-sans text-xl md:text-2xl leading-[1.3] text-foreground font-medium tracking-tight"
            />
          </div>
        </GridCell>

        {/* Col 3: Portrait (Optimized Hover) */}
        <GridCell className="md:col-span-4 p-0 w-full relative group overflow-hidden bg-foreground/2" noBorder delay={0.5}>
          <motion.div 
            className="relative w-full h-full min-h-[400px]"
          >
            <Image 
              src="/rivu.jpeg" 
              alt="Rivu Chattopadhyay" 
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-all duration-1000 ease-[0.16, 1, 0.3, 1] group-hover:scale-110 group-hover:brightness-110 grayscale group-hover:grayscale-0"
              priority
            />
            
            {/* Minimal Overlay Grid */}
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(var(--foreground)_1px,transparent_1px),linear-gradient(90deg,var(--foreground)_1px,transparent_1px)] bg-size-[32px_32px] group-hover:opacity-5 transition-opacity" />
            
            {/* Cinematic Shadow Gradient */}
            <div className="absolute inset-0 bg-linear-to-t from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        </GridCell>
      </div>
    </section>
  );
};
