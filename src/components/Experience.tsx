import { Briefcase, GraduationCap, Award } from "lucide-react";

const experiences = [
  {
    type: "current",
    title: "Co-Founder",
    company: "Mirai Studio",
    description: "Marketing agency creating content for brands including Cigogne Official, PDA Akademie, Estilaser Center, El-Ruh, Epik Leaders & Elpincel. Services include video production, shootings, teasers, social media content, and Instagram ads management.",
    period: "Current Role",
    icon: Award,
    link: "https://www.instagram.com/mirai.studio1/"
  },
  {
    type: "current",
    title: "VP Marketing & Co-Founder",
    company: "Epik Leaders ENCGC",
    description: "Leading marketing strategy and organizing all club events. Creating visual content and building the club's brand identity.",
    period: "Current Role",
    icon: Award,
    link: "https://www.instagram.com/epikleaders_encgc/"
  },
  {
    type: "current",
    title: "National Graphic Designer",
    company: "Epik Leaders Morocco",
    description: "Joined the national board to design and create visual content for the organization across Morocco.",
    period: "Current Role",
    icon: Award,
    link: "https://www.instagram.com/epikleaders.morocco/"
  },
  {
    type: "work",
    title: "Intern - M-Automotiv",
    company: "Dacia, Renault & Alpine",
    description: "Gained commercial and administrative skills at Morocco's premier automotive dealer. Developed client relations and sales expertise.",
    period: "Professional Experience",
    icon: Briefcase
  },
  {
    type: "work",
    title: "Call Agency Employee",
    company: "Customer Service",
    description: "Developed communication skills and learned to handle diverse client needs effectively.",
    period: "Professional Experience",
    icon: Briefcase
  },
  {
    type: "leadership",
    title: "Event Manager",
    company: "Elpincel ENCGC",
    description: "Organized and managed multiple successful events, coordinating teams and resources.",
    period: "Leadership Role",
    icon: Award
  },
  {
    type: "leadership",
    title: "Photography Manager",
    company: "Elpincel ENCGC",
    description: "Led photography initiatives for events and club activities, building a visual archive.",
    period: "Leadership Role",
    icon: Award
  },
  {
    type: "leadership",
    title: "Graphic Design Manager",
    company: "Elpincel ENCGC",
    description: "Directed visual identity projects and mentored club members in design principles.",
    period: "Leadership Role",
    icon: Award
  },
  {
    type: "education",
    title: "Digital Marketing",
    company: "ENCG Casablanca",
    description: "Studying the intersection of marketing strategy and digital innovation.",
    period: "Current Studies",
    icon: GraduationCap
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4">Experience</p>
          <h2 className="font-display text-4xl md:text-6xl text-foreground">
            JOURNEY &<br />
            <span className="text-gradient">GROWTH</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <div
              key={`${exp.title}-${index}`}
              className="group relative card-gradient p-6 rounded-xl border border-border hover-lift overflow-hidden"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                  <exp.icon className="h-5 w-5 text-muted-foreground" />
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
