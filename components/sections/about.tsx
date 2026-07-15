"use client";

import React from "react";
import { GridCell } from "@/components/ui/grid-cell";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <section id="about" className="w-full border-b border-border bg-background">
      <div className="grid grid-cols-1 md:grid-cols-12 w-full">
        {/* Sidebar Label */}
        <div className="md:col-span-3 border-r border-border p-6 md:p-10 flex flex-col justify-between bg-foreground/[0.01] relative overflow-hidden group">
          <div className="absolute top-1/2 -translate-y-1/2 -left-32 md:-left-48 text-[250px] md:text-[380px] font-display font-black leading-none opacity-[0.03] text-foreground pointer-events-none select-none z-0 group-hover:opacity-[0.05] transition-opacity duration-700 hidden md:block">
            01
          </div>
          <div className="relative z-10">
            <p className="font-accent text-[11px] uppercase font-bold tracking-[0.18em] text-accent mb-2">Section 01</p>
            <h2 className="font-display text-5xl md:text-6xl font-black leading-none uppercase">The Journey</h2>
          </div>
          <div className="hidden md:block relative z-10">
            <p className="font-sans text-[10px] text-foreground/50 leading-relaxed max-w-[120px] uppercase tracking-widest font-bold">
             A Software Engineer crafting scalable systems and intelligent solutions.
            </p>
          </div>
        </div>

        {/* Content Area */}
        <GridCell className="md:col-span-9 p-0" noBorder>
          <div className="p-10 md:p-16 space-y-12 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="relative font-display text-3xl md:text-5xl leading-[1.1] text-foreground/90 italic mb-12">
                <span className="absolute -left-8 md:-left-12 top-0 text-accent/20 text-7xl md:text-9xl font-accent leading-none select-none">“</span>
              I transform complex ideas into scalable, high-performance software. Whether architecting enterprise backend systems, building modern full-stack applications, or integrating Generative AI, I focus on creating secure, maintainable, and user-centric solutions. My approach combines clean architecture, modern engineering practices, and thoughtful design to deliver digital products that solve real-world problems and scale with confidence
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-6">
                  <p className="font-sans text-lg text-foreground/70 leading-relaxed font-medium">
                    Software Engineer specializing in Full-Stack Development and AI Solutions From
                    <span className="text-foreground font-black"> Nairobi, Kenya.</span>
                  </p>
                  <p className="font-sans text-base text-foreground/60 leading-relaxed">
         I am committed to continuous learning through hackathons, technical leadership, and real-world software development. These experiences have strengthened my expertise in building scalable solutions while earning recognition as a <span className="text-accent font-bold">3× Hackathon Winner</span> and <span className="text-accent font-bold">Web Lead.</span>
                  </p>
                </div>
                
                <div className="space-y-6">
                  <p className="font-sans text-base text-foreground/60 leading-relaxed">
My background spans full-stack development, AI engineering, and scalable software Architecture in
                    <span className="text-foreground"> cloud technologies & sustainable innovation.</span>.
                  </p>
                  <div className="pt-6">
                     <a 
                      href="https://linkedin.com/in/ruttoevans85/" 
                      className="inline-flex items-center gap-4 group"
                    >
                      <div className="h-px w-10 bg-accent group-hover:w-16 transition-all duration-500" />
                      <span className="font-accent text-[10px] uppercase font-black tracking-[0.2em] transition-colors">
                        Learn More on LinkedIn
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </GridCell>
      </div>
    </section>
  );
};
