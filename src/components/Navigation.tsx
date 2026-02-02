import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoIcon from "@/assets/logo-icon.png";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" }
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${isScrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/80 shadow-lg shadow-black/5"
          : "bg-transparent"
        }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo — scale on scroll */}
        <a href="#" className="flex items-center transition-transform duration-300 hover:scale-105 active:scale-95">
          <img src={logoIcon} alt="Logo" className={`h-16 w-auto transition-all duration-300 ${isScrolled ? "h-12" : ""}`} />
        </a>

        {/* Desktop Navigation — underline reveal on hover */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-white/70 hover:text-white text-sm uppercase tracking-wider py-2 transition-colors duration-300 after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button variant="hero" size="sm" asChild className="hover-glow">
            <a href="https://www.instagram.com/mirai.brand1/" target="_blank" rel="noopener noreferrer">
              Mirai Brand
            </a>
          </Button>
        </div>

        {/* Mobile menu button — rotate on open */}
        <button
          className="md:hidden text-foreground p-2 rounded-lg hover:bg-muted/50 transition-all duration-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Navigation — slide down + stagger */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border animate-slide-up-blur">
          <div className="px-6 py-4 space-y-1">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-3 text-white/70 hover:text-white hover:bg-white/10 rounded-lg px-3 -mx-3 transition-all duration-200 text-sm uppercase tracking-wider"
                style={{ animationDelay: `${i * 50}ms` }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <Button variant="hero" size="sm" className="w-full hover-glow" asChild>
                <a href="https://www.instagram.com/mirai.brand1/" target="_blank" rel="noopener noreferrer">
                  Mirai Brand
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
