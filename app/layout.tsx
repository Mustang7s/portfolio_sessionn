import type { Metadata } from "next";
import "./globals.css";
import { NoiseOverlay } from "@/components/ui/noise-overlay";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-session-gdg.vercel.app/"), // Replace with your actual domain before deploying
  title: {
    default: "Prince.E.Rutto | Full Stack Developer",
    template: "%s | Prince.E.Rutto"
  },
  description: "Portfolio of Prince.E.Rutto — SDE Intern, MERN/PERN Stack Developer, and GenAI Enthusiast. Building scalable web architectures and user-centric digital products.",
  keywords: [
    "Full Stack Developer", "Software Engineer", "MERN Stack", "PERN Stack",
    "React Developer", "Next.js Developer", "Generative AI", "Prince.E.Rutto",
    "Web Development India", "Frontend Developer", "Backend Developer",
    "Kolkata Developer", "SDE Intern", "Hackathon Winner"
  ],
  authors: [{ name: "Prince.E.Rutto", url: "https://portfolio-session-gdg.vercel.app/" }],
  creator: "Prince.E.Rutto",
  publisher: "Prince.E.Rutto",
  category: "technology",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-session-gdg.vercel.app/",
    title: "Prince.E.Rutto | Full Stack Developer",
    description: "Portfolio of Prince.E.Rutto — SDE Intern, MERN/PERN Stack Developer, and GenAI Enthusiast.",
    siteName: "Prince.E.Rutto Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Prince.E.Rutto — Full Stack Developer Portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Prince.E.Rutto | Full Stack Developer",
    description: "Portfolio of Prince.E.Rutto — SDE Intern, MERN/PERN Stack Developer, and GenAI Enthusiast.",
    creator: "@rivudev", 
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://portfolio-session-gdg.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full antialiased scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&family=Instrument+Serif:ital@0;1&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background selection:bg-accent selection:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Prince.E.Rutto",
              "jobTitle": "Full Stack Developer & AI Engineer",
              "description": "Full-stack developer specializing in MERN stack, scalable architectures, and Generative AI applications.",
              "url": "https://portfolio-session-gdg.vercel.app/",
              "email": "ruttoevans85@gmail.com",
              "sameAs": [
                "https://linkedin.com/in/rivu851",
                "https://https://github.com/Mustang7s"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Kolkata",
                "addressRegion": "West Bengal",
                "addressCountry": "IN"
              },
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "RCC Institute of Information Technology"
              },
              "knowsAbout": [
                "React", "Next.js", "Node.js", "PostgreSQL", "MongoDB",
                "TypeScript", "Generative AI", "System Design", "Spring Boot"
              ]
            })
          }}
        />
        <NoiseOverlay />
        <main className="relative flex-1 flex flex-col">
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  );
}

