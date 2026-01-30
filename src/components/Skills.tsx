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
          <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4">Skills</p>
          <h2 className="font-display text-4xl md:text-6xl text-foreground">
            TOOLS &<br />
            <span className="text-gradient">EXPERTISE</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Technical Skills */}
          <div>
            <h3 className="font-display text-2xl text-foreground mb-8">Adobe Creative Suite</h3>
            <div className="space-y-6">
              {tools.map((tool, index) => (
                <div key={tool.name} className="group">
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
                      className="h-full bg-gradient-hero rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${tool.level}%`,
                        animationDelay: `${index * 150}ms`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="font-display text-2xl text-foreground mb-8">Professional Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <div
                  key={skill}
                  className="relative p-4 rounded-lg border border-border bg-card/50 hover:border-primary/50 hover-lift group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative z-10 text-foreground">{skill}</span>
                </div>
              ))}
            </div>

            {/* Additional info */}
            <div className="mt-8 p-6 card-gradient rounded-xl border border-border">
              <h4 className="font-display text-xl text-foreground mb-3">Languages</h4>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">Arabic</span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">French</span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">English</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
