"use client";

import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  // Handle system preference on init
  useEffect(() => {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(isDark ? "dark" : "light");
  }, []);

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative flex h-10 w-10 items-center justify-center border border-border bg-foreground/[0.03] hover:bg-foreground/[0.08] transition-colors"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ 
          rotate: theme === "dark" ? 0 : 90, 
          scale: theme === "dark" ? 1 : 0,
          opacity: theme === "dark" ? 1 : 0
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="absolute"
      >
        <Moon className="h-5 w-5 text-accent" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{ 
          rotate: theme === "dark" ? -90 : 0, 
          scale: theme === "dark" ? 0 : 1,
          opacity: theme === "dark" ? 0 : 1
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="absolute"
      >
        <Sun className="h-5 w-5 text-accent" />
      </motion.div>
    </motion.button>
  );
};
