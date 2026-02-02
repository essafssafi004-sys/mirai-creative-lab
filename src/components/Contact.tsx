import { Instagram, Mail, MapPin, Send, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4 animate-on-scroll">Get In Touch</p>
        <h2 className="font-display text-4xl md:text-6xl text-foreground mb-6 animate-on-scroll" style={{ animationDelay: "80ms" }}>
          LET&apos;S CREATE<br />
          <span className="text-gradient">TOGETHER</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12 animate-on-scroll-fade" style={{ animationDelay: "160ms" }}>
          Whether you need graphic design, video editing, or brand consultation —
          I&apos;m always excited to collaborate on new projects.
        </p>

        {/* Contact cards — stagger + hover glow + icon pulse */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <a
            href="https://www.instagram.com/mirai.brand1/"
            target="_blank"
            rel="noopener noreferrer"
            className="group card-gradient p-6 rounded-xl border border-border hover:border-primary/50 hover-lift hover-glow transition-all duration-300 animate-on-scroll-scale"
            style={{ animationDelay: "200ms" }}
          >
            <Instagram className="h-8 w-8 text-primary mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
            <h3 className="font-display text-lg text-foreground mb-1">Instagram</h3>
            <p className="text-muted-foreground text-sm">@mirai.brand1</p>
          </a>

          <a
            href="mailto:essafssafi0004@gmail.com"
            className="group card-gradient p-6 rounded-xl border border-border hover:border-primary/50 hover-lift hover-glow transition-all duration-300 animate-on-scroll-scale"
            style={{ animationDelay: "280ms" }}
          >
            <Mail className="h-8 w-8 text-primary mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
            <h3 className="font-display text-lg text-foreground mb-1">Email</h3>
            <p className="text-muted-foreground text-sm">essafssafi0004@gmail.com</p>
          </a>

          <a
            href="tel:+212694285708"
            className="group card-gradient p-6 rounded-xl border border-border hover:border-primary/50 hover-lift hover-glow transition-all duration-300 animate-on-scroll-scale"
            style={{ animationDelay: "360ms" }}
          >
            <Phone className="h-8 w-8 text-primary mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
            <h3 className="font-display text-lg text-foreground mb-1">Phone</h3>
            <p className="text-muted-foreground text-sm">0694285708</p>
          </a>

          <div className="card-gradient p-6 rounded-xl border border-border hover:border-primary/30 transition-colors duration-300 animate-on-scroll-scale" style={{ animationDelay: "440ms" }}>
            <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="font-display text-lg text-foreground mb-1">Location</h3>
            <p className="text-muted-foreground text-sm">Casablanca, Morocco</p>
          </div>
        </div>

        {/* CTA */}
        <Button variant="hero" size="lg" asChild className="hover-glow animate-on-scroll-fade" style={{ animationDelay: "520ms" }}>
          <a href="mailto:essafssafi0004@gmail.com">
            <Send className="mr-2 h-5 w-5" />
            Send Message
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Contact;
