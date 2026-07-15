"use client";

import React from "react";
import { GridCell } from "@/components/ui/grid-cell";
import { Star, Trophy, Users } from "lucide-react";
import { motion } from "framer-motion";

export const Awards = () => {
  const honors = [
    {
      title: "University of Cambridge",
      year: "2026",
      icon: Trophy,
      details:
        "Completed the Carbon Accounting & ESG Analysis Programme, specializing in sustainability, carbon accounting, and ESG reporting."
    },
    {
      title: "Bachelor of Business Information Technology",
      year: "2022 – 2025",
      icon: Trophy,
      details:
        "Graduated from Strathmore University with a strong foundation in software engineering, enterprise systems, AI, and cloud technologies."
    },
    {
      title: "Diploma in Business Information Technology",
      year: "2021 – 2022",
      icon: Trophy,
      details:
        "Completed a diploma at Strathmore University, building core competencies in software development, networking, databases, and information systems."
    },
    {
      title: "Unity Game Development Certification",
      year: "2025",
      icon: Star,
      details:
        "Completed intensive practical training in Unity game development, software architecture, and production workflows."
    },
      {
    title: "HO-B2V Electrical Safety Certification",
    year: "2025",
    icon: Star,
    details: "Advanced certification in electrical safety, energized systems, lockout/tagout procedures, and risk management."
    }
  ];

  return (
    <section id="awards" className="w-full border-b-[2px] border-border bg-background relative overflow-visible">
      <div className="grid grid-cols-1 md:grid-cols-12 w-full">
        {/* Sidebar Label */}
        <div className="md:col-span-3 border-r border-border p-6 md:p-10 flex flex-col justify-between bg-foreground/[0.01] relative overflow-hidden group">
          <div className="absolute top-1/2 -translate-y-1/2 -left-32 md:-left-48 text-[250px] md:text-[380px] font-display font-black leading-none opacity-[0.03] text-foreground pointer-events-none select-none z-0 group-hover:opacity-[0.05] transition-opacity duration-700 hidden md:block">
            02
          </div>
          <div className="relative z-10">
            <p className="font-accent text-[11px] uppercase font-bold tracking-[0.18em] text-accent mb-2">Section 02</p>
            <h2 className="font-display text-5xl md:text-6xl font-black leading-none uppercase">Honors & Impact</h2>
          </div>
          <p className="font-sans text-[10px] text-foreground/40 leading-relaxed max-w-[150px] relative z-10">
            Technical awards and community leadership roles.
          </p>
        </div>

        {/* Content Matrix - Ensuring full vertical containment */}
        <div className="md:col-span-9 flex flex-col w-full">
          {/* Honors Column */}
          <div className="w-full">
            {honors.map((honor, i) => (
              <GridCell 
                key={i} 
                className="border-b last:border-b-0 border-border group hover:bg-foreground hover:text-background transition-colors duration-300 py-12 md:py-20 h-auto"
                noBorder
              >
                <div className="flex flex-col md:flex-row gap-10 items-start px-10">
                  <div className="h-20 w-20 border-2 border-foreground/10 flex items-center justify-center shrink-0 group-hover:border-background/30 group-hover:bg-background/20 transition-all bg-foreground/5">
                    <honor.icon className="h-8 w-8 text-accent group-hover:text-background transition-colors" />
                  </div>
                  <div className="flex-1">
                    <span className="font-accent text-[10px] font-bold text-accent uppercase tracking-[0.2em] group-hover:text-background/80 transition-colors">{honor.year}</span>
                    <h3 className="font-display text-4xl font-black uppercase mt-3 mb-4 tracking-tighter leading-[0.9]">
                      {honor.title}
                    </h3>
                    <p className="font-sans text-base opacity-70 leading-relaxed max-w-xl group-hover:opacity-90">{honor.details}</p>
                  </div>
                </div>
              </GridCell>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
