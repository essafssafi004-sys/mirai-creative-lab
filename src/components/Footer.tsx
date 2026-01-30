import { Instagram, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo / Name */}
          <div>
            <h3 className="font-display text-2xl text-foreground">
              ABDELMOUGHIT <span className="text-gradient">ESSAFSSAFI</span>
            </h3>
            <p className="text-muted-foreground text-sm mt-1">
              Creative Designer & Video Editor
            </p>
          </div>

          {/* Quick links */}
          <nav className="flex items-center gap-6">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              About
            </a>
            <a href="#work" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Work
            </a>
            <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Skills
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Contact
            </a>
          </nav>

          {/* Social & back to top */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/mirai.brand1/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Abdelmoughit Essafssafi. All designs and creations are original.
          </p>
          <p className="text-muted-foreground/60 text-xs mt-2">
            Mirai Brand — Where Future Meets Fashion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
