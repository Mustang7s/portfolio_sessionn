"use client";

import React from "react";
import { GridCell } from "@/components/ui/grid-cell";
import { Mail, Globe } from "lucide-react";
import { LinkedinIcon } from "@/components/icons";

export const Contact = () => {
  return (
    <footer id="contact" className="w-full bg-foreground text-background relative overflow-hidden border-t-4 border-background">
      {/* Primary Contact Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 w-full border-b border-background/20">
        {/* Large CTA Cell */}
        <GridCell className="md:col-span-8 flex flex-col justify-between py-24 min-h-[450px] border-r border-background/20" noBorder>
          <div className="space-y-8">
            <p className="font-accent text-[10px] uppercase font-black tracking-[0.3em] text-background/80 mb-2">Section 07</p>
            <h2 className="font-display text-[clamp(4.5rem,10vw,12vw)] leading-[0.8] tracking-tighter uppercase font-black text-background">
              Contact <br /> Details
            </h2>
            <p className="font-sans text-xl text-background/70 max-w-sm font-medium">
              Available for technical collaborations and professional opportunities.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 mt-12 overflow-x-auto w-full no-scrollbar">
            <a 
              href="mailto:rivu851@gmail.com"
              aria-label="Send email to Rivu Chattopadhyay"
              className="flex items-center gap-6 px-10 py-8 border-2 border-background group/btn hover:bg-background transition-all duration-300 bg-background/5"
            >
              <Mail className="h-6 w-6 text-background group-hover/btn:text-foreground transition-colors" />
              <div className="shrink-0 text-background group-hover/btn:text-foreground transition-colors">
                <p className="font-accent text-[9px] uppercase font-bold tracking-[0.3em] opacity-60 mb-1">Email</p>
                <p className="font-sans font-black text-lg uppercase tracking-tight">rivu851@gmail.com</p>
              </div>
            </a>
            
            <a 
              href="https://linkedin.com/in/rivu851/" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Rivu Chattopadhyay on LinkedIn"
              className="flex items-center gap-6 px-10 py-8 border-2 border-background group/btn hover:bg-background transition-all duration-300 bg-background/5"
            >
              <LinkedinIcon className="h-6 w-6 text-background group-hover/btn:text-foreground transition-colors" />
              <div className="shrink-0 text-background group-hover/btn:text-foreground transition-colors">
                <p className="font-accent text-[9px] uppercase font-bold tracking-[0.3em] opacity-60 mb-1">Network</p>
                <p className="font-sans font-black text-lg uppercase tracking-tight">LinkedIn</p>
              </div>
            </a>
          </div>

        </GridCell>

        {/* Technical Cell (Stats/Meta) */}
        <GridCell className="md:col-span-4 bg-background/5 flex flex-col justify-between py-24 border-l border-background/20" noBorder>
          <div className="space-y-12 pl-4">
            <div>
              <p className="font-accent text-[10px] uppercase font-black tracking-[0.2em] text-background/80 mb-6 border-b-2 border-background w-max pb-2">Current Focus State</p>
              <div className="space-y-4">
                {["Full Stack / Mobile", "Generative AI", "Scalable Systems"].map((stack) => (
                  <div key={stack} className="flex items-center gap-4 group">
                    <div className="h-2 w-2 bg-background" />
                    <span className="font-display text-3xl font-black uppercase tracking-tight transition-colors group-hover:opacity-70">{stack}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="pl-4 pt-12">
            <p className="font-accent text-[9px] uppercase font-black text-background/50 leading-loose">
              Technical Professional // <br /> Software Development Engineer
            </p>
          </div>
        </GridCell>
      </div>

      {/* Final Meta Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 w-full text-[9px] font-black uppercase tracking-[0.4em] text-background/60 bg-background/5 relative z-10">
        <GridCell className="py-10 border-r border-background/20" noBorder>
          © 2026 Rivu Chattopadhyay
        </GridCell>
        <GridCell className="py-10 border-r border-background/20" noBorder>
          Kolkata, India // Available
        </GridCell>
        <GridCell className="py-10" noBorder>
          <div className="flex justify-between items-center w-full px-4">
            <div className="flex items-center gap-2 text-background animate-pulse">
              <Globe className="h-3 w-3" />
              <span>LIVE</span>
            </div>
          </div>
        </GridCell>
      </div>
    </footer>
  );
};
