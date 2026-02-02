import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import MiraiStudio from "@/components/MiraiStudio";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import AutoPlayAudio from "@/components/AutoPlayAudio";
import Preloader from "@/components/Preloader";

// Import assets to ensure they are processed by Vite
import preloaderVid from "@/assets/dbd.mp4";
import backgroundMusic from "@/assets/music/fashion-killa.mp3";

const SECTION_IDS = ["about", "work", "mirai-studio", "experience", "skills", "contact"];

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("in-view");
        });
      },
      { rootMargin: "0px 0px -80px 0px", threshold: 0.08 }
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      {/* Preloader (shows until page load completes) - using uploaded video */}
      <Preloader videoSrc={preloaderVid} />

      {/* Auto-play audio component — using the uploaded song */}
      <AutoPlayAudio src={backgroundMusic} />

      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <MiraiStudio />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
