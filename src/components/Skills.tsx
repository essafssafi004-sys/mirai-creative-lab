const tools = [
  { name: "Photoshop", category: "Design", level: 95 },
  { name: "Illustrator", category: "Design", level: 90 },
  { name: "Premiere Pro", category: "Video", level: 92 },
  { name: "Lightroom", category: "Photo", level: 88 }
];

const softSkills = [
  "Team Leadership",
  "Event Management",
  "Project Coordination",
  "Client Communication",
  "Creative Direction",
  "Brand Strategy"
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4 animate-on-scroll">Skills</p>
          <h2 className="font-display text-4xl md:text-6xl text-foreground animate-on-scroll" style={{ animationDelay: "80ms" }}>
            TOOLS &<br />
            <span className="text-gradient">EXPERTISE</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Technical Skills — progress bars animate on scroll */}
          <div className="animate-on-scroll-fade" style={{ animationDelay: "120ms" }}>
            <h3 className="font-display text-2xl text-foreground mb-8">Adobe Creative Suite</h3>
            <div className="space-y-6">
              {tools.map((tool, index) => (
                <div key={tool.name} className="group animate-on-scroll-fade" style={{ animationDelay: `${180 + index * 80}ms` }}>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-foreground font-medium">{tool.name}</span>
                      <span className="text-xs uppercase tracking-wider text-muted-foreground bg-muted px-2 py-0.5 rounded">
                        {tool.category}
                      </span>
                    </div>
                    <span className="text-primary font-display text-lg">{tool.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-hero rounded-full origin-left animate-progress-fill"
                      style={{
                        width: `${tool.level}%`,
                        animationDelay: `${400 + index * 120}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills — stagger + hover */}
          <div>
            <h3 className="font-display text-2xl text-foreground mb-8 animate-on-scroll" style={{ animationDelay: "140ms" }}>Professional Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <div
                  key={skill}
                  className="relative p-4 rounded-lg border border-border bg-card/50 hover:border-primary/50 hover-lift hover-glow group overflow-hidden animate-on-scroll-scale transition-all duration-300"
                  style={{ animationDelay: `${200 + index * 60}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10 text-foreground">{skill}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 card-gradient rounded-xl border border-border hover-lift animate-on-scroll-fade" style={{ animationDelay: "500ms" }}>
              <h4 className="font-display text-xl text-foreground mb-3">Languages</h4>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm hover:scale-105 transition-transform">Arabic</span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm hover:scale-105 transition-transform">French</span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm hover:scale-105 transition-transform">English</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
