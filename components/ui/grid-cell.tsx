"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GridCellProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  noBorder?: boolean;
}

export const GridCell = ({ children, className, delay = 0, noBorder = false }: GridCellProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: [0.16, 1, 0.3, 1], // EaseOutExpo
      }}
      className={cn(
        "relative flex flex-col p-6 h-full",
        !noBorder && "border-r border-b border-border",
        "group transition-colors duration-300",
        className
      )}
    >
      {/* Subtle Hover Background Glow */}
      <div className="absolute inset-0 bg-foreground/[0.01] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </motion.div>
  );
};
