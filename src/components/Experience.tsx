import { Briefcase, GraduationCap, Award } from "lucide-react";

// Import logos directly for better Vite compatibility
import miraiStudioLogo from "@/assets/experience/mirai-studio.png";
import epikLeadersLogo from "@/assets/experience/epik-leaders.png";
import epikMoroccoLogo from "@/assets/experience/epik-morocco.png";
import mAutomotivLogo from "@/assets/experience/m-automotiv.png";
import strapexLogo from "@/assets/experience/strapex.png";
import callCenterLogo from "@/assets/experience/call-center.png";
import elpincelLogo from "@/assets/experience/elpincel.png";
import photographyLogo from "@/assets/experience/photography.png";
import designLogo from "@/assets/experience/design.png";
import encgLogo from "@/assets/experience/encg.png";

const experiences = [
  {
    type: "current",
    title: "Co-Founder",
    company: "Mirai Studio",
    description: "Marketing agency creating content for brands including Cigogne Official, PDA Akademie, Estilaser Center, El-Ruh, Epik Leaders & Elpincel. Services include video production, shootings, teasers, social media content, and Instagram ads management.",
    period: "Current Role",
    icon: Award,
    link: "https://www.instagram.com/mirai.studio1/",
    logo: miraiStudioLogo,
    logoClassName: "h-20"
  },
  {
    type: "current",
    title: "VP Marketing & Co-Founder",
    company: "Epik Leaders ENCGC",
    description: "Leading marketing strategy and organizing all club events. Creating visual content and building the club's brand identity.",
    period: "Current Role",
    icon: Award,
    link: "https://www.instagram.com/epikleaders_encgc/",
    logo: epikLeadersLogo,
    logoClassName: "h-20"
  },
  {
    type: "current",
    title: "National Graphic Designer",
    company: "Epik Leaders Morocco",
    description: "Joined the national board to design and create visual content for the organization across Morocco.",
    period: "Current Role",
    icon: Award,
    link: "https://www.instagram.com/epikleaders.morocco/",
    logo: epikMoroccoLogo
  },
  {
    type: "work",
    title: "Intern - M-Automotiv",
    company: "Dacia, Renault & Alpine",
    description: "Gained commercial and administrative skills at Morocco's premier automotive dealer. Developed client relations and sales expertise.",
    period: "Professional Experience",
    icon: Briefcase,
    logo: mAutomotivLogo,
    logoClassName: "h-20"
  },
  {
    type: "work",
    title: "Intern - GROUPE STRAPEX MAROC",
    company: "Agadir-Casablanca",
    description: "Focused on developing professional skills within the materials and logistics sector. Contributed to operational efficiency and team projects during this internship.",
    period: "Professional Experience",
    icon: Briefcase,
    logo: strapexLogo,
    logoClassName: "h-8"
  },
  {
    type: "work",
    title: "Employee - AK Performance ",
    company: "Call Center",
    description: "Developed communication skills and learned to handle diverse client needs effectively.",
    period: "Professional Experience",
    icon: Briefcase,
    logo: callCenterLogo
  },
  {
    type: "leadership",
    title: "Event Manager",
    company: "Elpincel ENCGC",
    description: "Organized and managed multiple successful events, coordinating teams and resources.",
    period: "Leadership Role",
    icon: Award,
    logo: elpincelLogo
  },
  {
    type: "leadership",
    title: "Photography Manager",
    company: "Elpincel ENCGC",
    description: "Led photography initiatives for events and club activities, building a visual archive.",
    period: "Leadership Role",
    icon: Award,
    logo: photographyLogo
  },
  {
    type: "leadership",
    title: "Graphic Design Manager",
    company: "Elpincel ENCGC",
    description: "Directed visual identity projects and mentored club members in design principles.",
    period: "Leadership Role",
    icon: Award,
    logo: designLogo
  },
  {
    type: "education",
    title: "Digital Marketing",
    company: "ENCG Casablanca",
    description: "Studying the intersection of marketing strategy and digital innovation.",
    period: "Current Studies",
    icon: GraduationCap,
    logo: encgLogo,
    logoClassName: "h-20"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4 animate-on-scroll">Experience</p>
          <h2 className="font-display text-4xl md:text-6xl text-foreground animate-on-scroll" style={{ animationDelay: "80ms" }}>
            JOURNEY &<br />
            <span className="text-gradient">GROWTH</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <div
              key={`${exp.title}-${index}`}
              className="group relative card-gradient p-6 rounded-xl border border-border hover-lift hover-tilt overflow-hidden animate-on-scroll-scale"
              style={{ animationDelay: `${100 + index * 50}ms` }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                  {/* Custom Logo or Lucide Icon */}
                  {(exp as any).logo ? (
                    <img
                      src={(exp as any).logo}
                      alt={`${exp.company} logo`}
                      className={`${(exp as any).logoClassName || "h-14"} w-auto object-contain group-hover:scale-110 transition-all duration-300`}
                    />
                  ) : (
                    <exp.icon className="h-6 w-6 text-muted-foreground group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
                  )}
                </div>

                <h3 className="font-display text-xl text-foreground mb-1">{exp.title}</h3>
                <p className="text-primary text-sm mb-3">{exp.company}</p>
                <p className="text-muted-foreground text-sm mb-3">{exp.description}</p>
                {exp.link && (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-primary hover:text-primary/80 transition-colors"
                  >
                    View on Instagram →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
