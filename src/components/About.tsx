import { Palette, Video, Camera, Users } from "lucide-react";

const highlights = [
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Adobe Photoshop, Illustrator, Lightroom"
  },
  {
    icon: Video,
    title: "Video Editing",
    description: "Adobe Premiere Pro, Motion Graphics"
  },
  {
    icon: Camera,
    title: "Photography",
    description: "Event Coverage, Product Photography"
  },
  {
    icon: Users,
    title: "Leadership",
    description: "Event & Team Management"
  }
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <div>
            <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4">About Me</p>
            <h2 className="font-display text-4xl md:text-6xl text-foreground mb-6">
              FROM DRAWINGS TO<br />
              <span className="text-gradient">DIGITAL MASTERY</span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                My creative journey began with pencil and paper, nurturing a passion for visual 
                storytelling that would later evolve into digital artistry. At ENCG Casablanca, 
                where I study Digital Marketing, I discovered Elpincel ENCGC — a club that 
                became my gateway to professional design.
              </p>
              <p>
                Through dedication and countless hours of self-learning, I mastered the Adobe 
                Creative Suite. Currently, I serve as <span className="text-primary font-semibold">VP Marketing & Co-Founder of Epik Leaders ENCGC</span>, 
                <span className="text-primary font-semibold"> Graphic Designer for Epik Leaders Morocco's national board</span>, and 
                <span className="text-primary font-semibold"> Co-Founder of Mirai Studio</span>. 
                My leadership journey includes roles as Event Manager, Photography Manager, and 
                Graphic Design Manager at Elpincel ENCGC.
              </p>
              <p>
                This experience fueled my entrepreneurial spirit, leading to the creation of 
                <span className="text-primary font-semibold"> Mirai Brand</span> — my streetwear 
                clothing line, and <span className="text-primary font-semibold">Mirai Studio</span> — a marketing agency 
                serving clients like Cigogne Official, PDA Akademie, Estilaser Center, and El-Ruh with video production, 
                social media content, and Instagram ads.
              </p>
            </div>
          </div>

          {/* Highlights grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="card-gradient p-6 rounded-xl border border-border hover-lift group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:glow-primary transition-all duration-300">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
