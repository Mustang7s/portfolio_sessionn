"use client";

import React from "react";
import { GridCell } from "@/components/ui/grid-cell";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    title: "Maison (Interior Design)",
    desc: "A comprehensive interior design platform showcasing curated spaces and furniture.",
    tags: ["React", "ExpressJS", "MongoDB", "NodeJS"],
    link: "https://maison-homes.vercel.app/",
    type: "E-commerce"
  },
  {
    title: "WRLDS AI Integration",
    desc: "AI-powered textile sensors into clothing, footwear, and wearables.",
    tags: ["Next.js","React","Framer Motion", "Lottie"],
    link: "https://wrlds-ai-integration-2170.vercel.app/",
    type: "AI Integration"
  },
  {
    title: "DG Specialists (Replica)",
    desc: "A pixel-accurate clone build focused on replicating a specialist/consulting site's UI and layout",
    tags: ["React", "TailwindCSS", "Node", "Supabase","ML"],
    link: "https://dg-specialists-replica.vercel.app/",
    type: "Consulting Logistics Platform"
  },
  {
    title: "PureDrops",
    desc: "A clean, conversion-focused landing page for a consumer product brand",
    tags: ["React", "ML", "TailwindCSS","ShaDCN"],
    link: "https://puredrops.vercel.app/",
    type: "E-Commerce"
  },
  {
    title: "96 Lost",
    desc: "Kenyan digital media brand that licenses cinematic 4x4 off-roading footage and secures sponsorships for remote expeditions",
    tags: ["React", "ExpressJS","Python", "MongoDB", "NodeJS"],
    link: "https://www.96lost.com/",
    type: "Brand Hub"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="w-full border-b border-border bg-background">
      <div className="grid grid-cols-1 md:grid-cols-12 w-full">
        {/* Sidebar Label */}
        <div className="md:col-span-3 border-r border-border p-6 md:p-10 flex flex-col justify-between bg-foreground/[0.01] relative overflow-hidden group">
          <div className="absolute top-1/2 -translate-y-1/2 -left-32 md:-left-48 text-[250px] md:text-[380px] font-display font-black leading-none opacity-[0.03] text-foreground pointer-events-none select-none z-0 group-hover:opacity-[0.05] transition-opacity duration-700 hidden md:block">
            04
          </div>
          <div className="relative z-10">
            <p className="font-accent text-[11px] uppercase font-bold tracking-[0.18em] text-accent mb-2">Section 04</p>
            <h2 className="font-display text-5xl md:text-6xl font-black leading-none uppercase">Featured Projects</h2>
          </div>
          <p className="font-sans text-[10px] text-foreground/40 leading-relaxed max-w-[150px] relative z-10">
            Technical implementations across Web, ML, and Scaleable Systems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-2 w-full -mb-[1px]">
          {PROJECTS.map((project, i) => (
            <GridCell 
              key={i} 
              className="p-8 md:p-12 border-r border-b border-border border-collapse sm:last:border-r-0 h-full group transition-all duration-300 hover:bg-foreground hover:text-background flex flex-col justify-between min-h-[400px]"
              noBorder
              delay={0.1 * i}
            >
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <span className="font-accent text-[10px] uppercase font-bold tracking-[0.2em] text-accent group-hover:text-background/80 transition-colors">
                    {project.type}
                  </span>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    className="h-10 w-10 border border-border flex items-center justify-center transition-all duration-300 hover:bg-accent hover:border-accent hover:text-background group-hover:border-background/20"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
                
                <div className="space-y-2">
                   <h3 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tighter leading-[0.9]">
                    {project.title.split("(")[0]}
                  </h3>
                  {project.title.includes("(") && (
                    <p className="font-accent text-[10px] uppercase font-bold tracking-[0.1em] opacity-40">
                      {project.title.split("(")[1].replace(")", "")}
                    </p>
                  )}
                </div>
                
                <p className="font-sans text-base opacity-70 leading-relaxed max-w-sm">
                  {project.desc}
                </p>
              </div>

              <div className="pt-8">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 border border-border text-[9px] uppercase font-bold tracking-widest transition-colors font-accent group-hover:border-background/20 group-hover:bg-background/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </GridCell>
          ))}
        </div>
      </div>
    </section>
  );
};
