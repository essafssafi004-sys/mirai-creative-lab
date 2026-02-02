import { Instagram, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border bg-card/50 overflow-hidden">
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

          {/* Quick links — underline on hover */}
          <nav className="flex items-center gap-6">
            {["About", "Work", "Skills", "Contact"].map((label, i) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                className="relative text-muted-foreground hover:text-primary text-sm transition-colors duration-300 after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Social & back to top — scale + bounce */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/mirai.brand1/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:scale-110 transition-all duration-300"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:scale-110 hover:-translate-y-0.5 transition-all duration-300"
              aria-label="Back to top"
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
