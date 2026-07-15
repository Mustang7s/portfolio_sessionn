"use client";

import React, { useState, useEffect } from "react";
import { GithubIcon as Github } from "@/components/icons";
import { Download, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const NAV_LINKS = ["About", "Awards", "Experience", "Projects", "Stack", "Certifications"];

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close on resize to lg+
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    // Small delay to allow menu close animation before scroll
    setTimeout(() => {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    }, 200);
  };

  return (
    <>
      <nav className="w-full border-b border-border bg-background sticky top-0 z-[100]">
        <div className="flex h-16 items-center overflow-hidden">

          {/* Logo */}
          <div className="flex px-4 sm:px-6 h-full items-center border-r border-border shrink-0 min-w-[120px] sm:min-w-[160px] md:min-w-[200px]">
            <span className="font-display text-xl sm:text-2xl tracking-tighter uppercase font-black text-foreground">
              Prince.E .Rutto
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex flex-1 h-full items-center">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="flex px-8 h-full items-center border-r border-border font-accent text-[9px] uppercase font-black tracking-[0.2em] hover:bg-foreground/[0.03] transition-colors text-foreground/60 hover:text-foreground"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Spacer on mobile so action items push right */}
          <div className="flex-1 lg:hidden" />

          {/* Action Items */}
          <div className="flex items-center h-full shrink-0">
            {/* Theme Toggle */}
            <div className="h-full border-l border-border flex items-center px-3 sm:px-4">
              <ThemeToggle />
            </div>

            {/* GitHub — hidden on mobile */}
            <a
              href="https://https://github.com/Mustang7s"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hidden md:flex px-6 h-full items-center border-l border-border hover:bg-foreground/[0.03] transition-colors"
            >
              <Github className="h-5 w-5 text-foreground/60 hover:text-accent transition-colors" />
            </a>

            {/* Resume — hidden on mobile, shown via mobile menu */}
            <a
              href="/Prince.E.Rutto_IT.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex px-5 md:px-10 h-full items-center bg-accent text-background font-accent text-[9px] uppercase font-black tracking-[0.2em] group gap-2 hover:bg-foreground hover:text-background transition-all border-l border-transparent"
            >
              <span>Resume</span>
              <Download className="h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
            </a>

            {/* Hamburger — only on < lg */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="flex lg:hidden h-full min-w-[56px] items-center justify-center border-l border-border hover:bg-foreground/[0.03] transition-colors"
            >
              <span className="relative h-6 w-6 flex items-center justify-center">
                <Menu
                  className={`absolute h-6 w-6 text-foreground transition-all duration-200 ${
                    menuOpen ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"
                  }`}
                />
                <X
                  className={`absolute h-6 w-6 text-foreground transition-all duration-200 ${
                    menuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`lg:hidden fixed inset-0 top-16 z-[99] flex flex-col transition-all duration-300 ease-in-out ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`relative w-full border-b border-border bg-background flex flex-col transition-transform duration-300 ease-in-out ${
            menuOpen ? "translate-y-0" : "-translate-y-4"
          }`}
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => handleNavClick(`#${link.toLowerCase()}`)}
              className="flex items-center justify-between px-6 py-5 border-b border-border font-accent text-[11px] uppercase font-black tracking-[0.2em] text-foreground/60 hover:text-foreground hover:bg-foreground/[0.03] transition-colors text-left min-h-[56px]"
            >
              {link}
              <span className="text-foreground/20 font-mono text-xs">
                0{NAV_LINKS.indexOf(link) + 1}
              </span>
            </button>
          ))}

          {/* Mobile Resume + GitHub row */}
          <div className="flex items-stretch">
            <a
              href="https://https://github.com/Mustang7s"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex flex-1 items-center justify-center gap-2 px-6 py-5 border-r border-border font-accent text-[11px] uppercase font-black tracking-[0.2em] text-foreground/60 hover:text-foreground hover:bg-foreground/[0.03] transition-colors min-h-[56px]"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>
            <a
              href="/Prince.E.Rutto_IT.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 px-6 py-5 bg-accent text-background font-accent text-[11px] uppercase font-black tracking-[0.2em] group hover:bg-foreground transition-all min-h-[56px]"
            >
              <span>Resume</span>
              <Download className="h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
