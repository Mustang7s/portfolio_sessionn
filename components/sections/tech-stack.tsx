"use client";

import React from "react";
import { GridCell } from "@/components/ui/grid-cell";
import { motion } from "framer-motion";

const TECH_CATEGORIES = [
  {
    label: "Frontend",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "React Native / Expo", level: 90 },
      { name: "TailwindCSS / Framer", level: 95 },
      { name: "TypeScript", level: 85 }
    ]
  },
  {
    label: "Backend & Systems",
    skills: [
      { name: "Node.js / Express", level: 90 },
      { name: "PostgreSQL / Prisma", level: 80 },
      { name: "MongoDB", level: 85 },
      { name: "Spring Boot Java", level: 70 }
    ]
  },
  {
    label: "Advanced & AI",
    skills: [
      { name: "Generative AI (LLMs)", level: 85 },
      { name: "Python / PyTorch", level: 75 },
      { name: "System Design", level: 80 },
      { name: "Auth / Security", level: 75 },
      { name: "Cloud Computing", level: 70 }
    ]
  }
];

export const TechStack = () => {
  return (
    <section id="stack" className="w-full border-b border-border bg-background">
      <div className="grid grid-cols-1 md:grid-cols-12 w-full">
        {/* Sidebar Label */}
        <div className="md:col-span-3 border-r border-border p-6 md:p-10 flex flex-col justify-between bg-foreground/[0.01] relative overflow-hidden group">
          <div className="absolute top-1/2 -translate-y-1/2 -left-32 md:-left-48 text-[250px] md:text-[380px] font-display font-black leading-none opacity-[0.03] text-foreground pointer-events-none select-none z-0 group-hover:opacity-[0.05] transition-opacity duration-700 hidden md:block">
            05
          </div>
          <div className="relative z-10">
            <p className="font-accent text-[11px] uppercase font-bold tracking-[0.18em] text-accent mb-2">Section 05</p>
            <h2 className="font-display text-5xl md:text-6xl font-black leading-none uppercase">Technical Proficiencies</h2>
          </div>
          <p className="font-sans text-[10px] text-foreground/40 leading-relaxed max-w-[150px] relative z-10">
             Core stack and specialized technical competencies.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-3 w-full h-full">
          {TECH_CATEGORIES.map((category, i) => (
            <GridCell key={i} className="p-10 border-r last:border-r-0 border-border group transition-all duration-300 hover:bg-foreground hover:text-background" noBorder delay={0.1 * i}>
              <div className="space-y-12">
                <div className="flex items-center gap-4">
                  <div className="h-px w-8 bg-accent group-hover:w-12 transition-all duration-500 group-hover:bg-background" />
                  <h3 className="font-accent text-[11px] items-center uppercase font-bold tracking-[0.18em] transition-colors group-hover:text-background/80">{category.label}</h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="flex flex-col group/skill">
                      <span className="font-display text-2xl font-black tracking-tight group-hover:text-background transition-colors">{skill.name}</span>
                    </div>
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
