"use client";

import React from "react";
import { motion } from "framer-motion";

interface TickerProps {
  text: string;
  speed?: number;
  className?: string;
}

export const Ticker = ({ text, speed = 20, className }: TickerProps) => {
  // Duplicate text to create seamless loop
  const content = `${text} • ${text} • ${text} • ${text} • `;

  return (
    <div className={`overflow-hidden whitespace-nowrap w-full ${className}`}>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{
          repeat: Infinity,
          duration: speed,
          ease: "linear",
        }}
        className="inline-block"
      >
        <span className="inline-block px-4">{content}</span>
      </motion.div>
    </div>
  );
};
