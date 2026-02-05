"use client";

import {
  Navigation,
  Hero,
  About,
  Experience,
  Projects,
  Education,
  Research,
  Skills,
  Personal,
  Contact,
  Footer,
} from "@/components/sections";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Noise Texture Overlay */}
      <div className="noise" />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Divider */}
        <div className="divider container" />

        {/* About Section */}
        <About />

        {/* Experience Section */}
        <Experience />

        {/* Projects Section */}
        <Projects />

        {/* Research Section */}
        <Research />

        {/* Skills Section */}
        <Skills />

        {/* Education Section */}
        <Education />

        {/* Personal Section - Hidden for now */}
        {/* <Personal /> */}

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
