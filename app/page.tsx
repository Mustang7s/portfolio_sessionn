import type { Metadata } from "next";
import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { TechStack } from "@/components/sections/tech-stack";
import { Certifications } from "@/components/sections/certifications";
import { Awards } from "@/components/sections/awards";
import { Contact } from "@/components/sections/contact";
import { LenisProvider } from "@/components/ui/lenis-provider";

export const metadata: Metadata = {
  title: "Prince.E.Rutto | Full Stack Developer & GenAI Engineer",
  description:
    "Portfolio of Prince.E.Rutto — SDE Intern, MERN/PERN Stack Developer, 3x Hackathon Winner, and Generative AI Enthusiast. Building scalable, user-centric web architectures.",

  keywords: [
    "Prince.E.Rutto",
    "Full Stack Developer",
    "AI Engineer",
    "MERN Stack Developer",
    "Machine Learning",
    "Generative AI",
    "React Developer",
    "Node.js Developer",
    "RCCIIT",
    "Kolkata Developer",
    "Smart Bengal Hackathon",
    "Web Development",
    "Software Engineer",
    "IT Student",
    "Portfolio"
  ],
  openGraph: {
    title: "Prince.E.Rutto | Full Stack Developer",
    description:
      "SDE Intern, MERN/PERN Stack Developer, Hackathon Winner, GenAI Enthusiast. Explore projects, experience, and skills.",
    url: "https://portfolio-session-gdg.vercel.app/",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Prince.E.Rutto — Portfolio",
      },
    ],
  },
  twitter: {
    title: "Prince.E.Rutto | Full Stack Developer",
    description:
      "SDE Intern, MERN/PERN Stack Developer, Hackathon Winner, GenAI Enthusiast.",
    images: ["/og-image.jpg"],
  },
};

export default function Home() {
  return (
    <LenisProvider>
      <main className="min-h-screen bg-background selection:bg-brand-orange selection:text-background">


        <div className="max-w-[1600px] mx-auto border-x border-border min-h-screen flex flex-col">
          <Navbar />
          <Hero />
          <About />
          <Awards />
          <Experience />
          <Projects />
          <TechStack />
          <Certifications />
          <Contact />
        </div>
      </main>
    </LenisProvider>
  );
}
