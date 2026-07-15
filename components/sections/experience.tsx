"use client";

import React from "react";
import { GridCell } from "@/components/ui/grid-cell";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export const Experience = () => {
  const experiences = [

  {
    company: "IKA360",
    role: "Full-Stack Web Developer (Contract)",
    period: "Feb 2026 – Mar 2026",
    location: "Remote",
    points: [
      "Led the end-to-end redesign of the IKA360 platform using Next.js, Tailwind CSS, and ShadCN UI.",
      "Integrated Convex, Clerk Authentication, and Resend to build a secure, scalable application.",
      "Deployed a production-ready cloud-native solution on Vercel with performance optimization."
    ]
  },
  {
    company: "OppX.AI",
    role: "AI Developer & Software Engineer",
    period: "Jul 2025 – Sep 2025",
    location: "Remote",
    points: [
      "Developed AI voice agents and SaaS applications for healthcare and real estate industries.",
      "Integrated Vapi, ElevenLabs, HubSpot CRM, and AWS cloud services for intelligent automation.",
      "Implemented Docker and GitHub Actions CI/CD pipelines for scalable deployments."
    ]
  },
  {
    company: "Mimshark Kenya × Pesafast",
    role: "Full-Stack Developer",
    period: "May 2025 – Jun 2025",
    location: "Hybrid",
    points: [
      "Built enterprise betting platforms using Spring Boot, Node.js, MySQL, and PostgreSQL.",
      "Integrated payment gateways, JWT authentication, and WebSocket-powered real-time services.",
      "Designed scalable backend APIs supporting secure financial transactions."
    ]
  },
  {
    company: "Brisk Credit Ltd",
    role: "Software Developer Intern",
    period: "Oct 2023 – Jun 2024",
    location: "On-site",
    points: [
      "Developed secure microfinance applications using Spring Boot, React, MySQL, and REST APIs.",
      "Built responsive web applications with Next.js and integrated GraphQL APIs.",
      "Developed analytics dashboards and enhanced application security."
    ]
  },
  {
    company: "Aga Khan University Hospital",
    role: "IT Support Technician & Network Administrator",
    period: "Oct 2022 – May 2023",
    location: "On-site",
    points: [
      "Supported over 100 staff by managing IT infrastructure, network administration, and technical support.",
      "Contributed to the implementation of the Meditech Hospital Information System.",
      "Performed system administration, data backup, cybersecurity, and network optimization."
    ]
  }
];

  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section id="experience" className="w-full border-b border-border bg-background">
      <div className="grid grid-cols-1 md:grid-cols-12 w-full">
        {/* Sidebar Label */}
        <div className="md:col-span-3 border-r border-border p-6 md:p-10 flex flex-col justify-between bg-foreground/[0.01] relative overflow-hidden group">
          <div className="absolute top-1/2 -translate-y-1/2 -left-32 md:-left-48 text-[250px] md:text-[380px] font-display font-black leading-none opacity-[0.03] text-foreground pointer-events-none select-none z-0 group-hover:opacity-[0.05] transition-opacity duration-700 hidden md:block">
            03
          </div>
          <div className="relative z-10">
            <p className="font-accent text-[11px] uppercase font-bold tracking-[0.18em] text-accent mb-2">Section 03</p>
            <h2 className="font-display text-5xl md:text-6xl font-black leading-none uppercase">Professional History</h2>
          </div>
          <p className="font-sans text-[10px] text-foreground/40 leading-relaxed max-w-[150px] relative z-10">
            Technical roles focused on high-performance architecture.
          </p>
        </div>
        {/* Experience Rows */}
        <div className="md:col-span-9 flex flex-col w-full">
          {experiences.map((exp, index) => {
            const [isHovered, setIsHovered] = React.useState(false);

            return (
              <div 
                key={index} 
                className="grid grid-cols-1 md:grid-cols-2 w-full border-b last:border-b-0 border-border group/exp transition-colors duration-500 hover:bg-foreground hover:text-background font-sans overflow-hidden"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Company Side */}
                <GridCell className="p-8 md:p-12 border-r border-border h-auto" noBorder delay={index * 0.1}>
                  <div className="flex flex-col h-full">
                    <h3 className="font-display text-4xl font-black uppercase tracking-tighter transition-colors group-hover/exp:text-background">{exp.company}</h3>
                    <p className="font-accent text-[10px] items-center uppercase font-bold tracking-[0.15em] opacity-40 group-hover/exp:opacity-100 transition-opacity mt-2">
                       {exp.role}
                    </p>

                    <motion.div
                      initial={false}
                      animate={{ 
                        height: (isMobile || isHovered) ? "auto" : 0,
                        opacity: (isMobile || isHovered) ? 1 : 0
                      }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-4 pt-12">
                        <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.15em] font-accent text-background/60">
                          <Calendar className="h-4 w-4 text-background/80" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.15em] font-accent text-background/60">
                          <MapPin className="h-4 w-4 text-background/80" />
                          {exp.location}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </GridCell>

                {/* Description Side */}
                <GridCell className="p-8 md:p-12 h-auto" noBorder delay={index * 0.1}>
                  <motion.div
                    initial={false}
                    animate={{ 
                      height: (isMobile || isHovered) ? "auto" : 0,
                      opacity: (isMobile || isHovered) ? 1 : 0
                    }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <ul className="space-y-10">
                      {exp.points.map((point, i) => (
                        <li key={i} className="flex gap-8 items-start group/item">
                          <span className="font-accent text-[11px] font-black text-accent mt-1 group-hover/exp:text-background/80">0{i+1}</span>
                          <p className="text-base md:text-lg leading-relaxed max-w-2xl font-sans group-hover/exp:text-background/90">
                            {point}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </GridCell>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
