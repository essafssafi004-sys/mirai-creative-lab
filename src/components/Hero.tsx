import { ArrowDown, Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

// Replace this with your video URL or import
const heroVideoUrl = ""; // Add your video URL here

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-[100px] animate-pulse-glow delay-500" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <p className="text-muted-foreground uppercase tracking-[0.3em] text-sm mb-6 animate-fade-in">
          Creative Designer • Video Editor • Entrepreneur
        </p>
        
        {/* Title with video background */}
        <div className="relative inline-block mb-6 animate-slide-up">
          {/* Video background behind title */}
          {heroVideoUrl && (
            <div className="absolute inset-0 -inset-x-8 -inset-y-4 overflow-hidden rounded-lg">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover opacity-30"
              >
                <source src={heroVideoUrl} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-background/50" />
            </div>
          )}
          
          <h1 className="relative font-display text-6xl md:text-8xl lg:text-9xl leading-none">
            <span className="text-foreground">ABDELMOUGHIT</span>
            <br />
            <span className="text-gradient">ESSAFSSAFI</span>
          </h1>
        </div>

        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-slide-up delay-200">
          Digital Marketing student at ENCG Casablanca. Transforming ideas into visual stories 
          through design, video, and brand creation.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up delay-300">
          <Button variant="hero" size="lg" asChild>
            <a href="#work">
              View My Work
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="https://www.instagram.com/mirai.brand1/" target="_blank" rel="noopener noreferrer">
              <Instagram className="mr-2 h-5 w-5" />
              Mirai Brand
            </a>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-6 mt-12 animate-fade-in delay-500">
          <a 
            href="https://www.instagram.com/mirai.brand1/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Instagram className="h-6 w-6" />
          </a>
          <a 
            href="mailto:contact@example.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
          <ArrowDown className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
