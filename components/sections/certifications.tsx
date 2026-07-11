"use client";

import React from "react";
import { GridCell } from "@/components/ui/grid-cell";
import { ShieldCheck, Calendar, ExternalLink } from "lucide-react";

const CERTIFICATIONS = [
  {
    title: "AWS Academy Web Foundations",
    issuer: "Amazon Web Services",
    date: "Dec 2024",
    id: "Cloud Practitioner Path"
  },
  {
    title: "PostgreSQL for Developers",
    issuer: "Coursera / Meta",
    date: "July 2024",
    id: "Backend specialization"
  },
  {
    title: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
    date: "Jan 2024",
    id: "DSA Core Logic"
  }
];

export const Certifications = () => {
  return (
    <section id="certifications" className="w-full border-b border-border bg-background">
      <div className="grid grid-cols-1 md:grid-cols-12 w-full">
         {/* Sidebar Label */}
        <div className="md:col-span-3 border-r border-border p-6 md:p-10 flex flex-col justify-between bg-foreground/[0.01] relative overflow-hidden group">
          <div className="absolute top-1/2 -translate-y-1/2 -left-32 md:-left-48 text-[250px] md:text-[380px] font-display font-black leading-none opacity-[0.03] text-foreground pointer-events-none select-none z-0 group-hover:opacity-[0.05] transition-opacity duration-700 hidden md:block">
            06
          </div>
          <div className="relative z-10">
             <p className="font-accent text-[10px] uppercase font-black tracking-[0.3em] text-accent mb-2">Section 06</p>
             <h2 className="font-display text-5xl md:text-6xl font-black leading-none">Verified <br /> Credentials</h2>
          </div>
          <p className="font-sans text-[10px] text-foreground/40 leading-relaxed max-w-[150px] relative z-10">
            Technical certifications and academic milestones.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-3 w-full h-full">
          {CERTIFICATIONS.map((cert, i) => (
            <GridCell key={i} className="p-10 border-r last:border-r-0 border-border group bg-surface/5 hover:bg-foreground hover:text-background transition-all duration-300 flex flex-col justify-between" noBorder delay={0.1 * i}>
              <div className="space-y-8">
                <div className="h-14 w-14 border border-border flex items-center justify-center grayscale group-hover:grayscale-0 transition-all bg-foreground/[0.03] group-hover:bg-background/10 group-hover:border-background/30">
                  <ShieldCheck className="h-6 w-6 text-accent group-hover:text-background transition-colors" />
                </div>

                <div className="space-y-3">
                  <span className="font-accent text-[8px] uppercase font-black tracking-[0.4em] text-foreground/30 group-hover:text-background/40 transition-colors">{cert.issuer}</span>
                  <h3 className="font-display text-2xl font-black tracking-tighter leading-tight transition-colors group-hover:text-background">{cert.title}</h3>
                </div>
              </div>

              <div className="pt-12 flex justify-between items-center border-t border-border/5 group-hover:border-background/10">
                <div className="flex items-center gap-2 text-[10px] font-accent uppercase font-black tracking-widest text-foreground/40 group-hover:text-background/60 transition-colors">
                  <Calendar className="h-3 w-3" />
                  {cert.date}
                </div>
                <ExternalLink className="h-4 w-4 text-foreground/20 group-hover:text-background/40 transition-colors cursor-pointer" />
              </div>
            </GridCell>
          ))}
        </div>
      </div>
    </section>
  );
};
