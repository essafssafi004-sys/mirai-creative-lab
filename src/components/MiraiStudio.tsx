import { ExternalLink, Video, Camera, Megaphone, Instagram } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const clients = [
  {
    name: "Cigogne Official",
    handle: "@cigogne.official",
    services: ["Video Production", "Social Media Content", "Instagram Ads"],
    description: "Complete brand content strategy with video teasers, reels, and paid advertising campaigns.",
    results: "Increased engagement and brand visibility through consistent visual storytelling."
  },
  {
    name: "PDA Akademie",
    handle: "@pdakademie",
    services: ["Video Shootings", "Teasers", "Stories & Reels"],
    description: "Educational content creation with professional video production and social media management.",
    results: "Enhanced online presence with high-quality educational content."
  },
  {
    name: "Estilaser Center",
    handle: "@estilaser_center",
    services: ["Content Creation", "Instagram Management", "Promotional Videos"],
    description: "Medical aesthetic center branding with professional promotional content.",
    results: "Professional brand image with consistent social media presence."
  },
  {
    name: "El-Ruh",
    handle: "@el-ruh",
    services: ["Video Production", "Brand Content", "Social Media"],
    description: "Creative brand storytelling through cinematic video content and social media strategy.",
    results: "Elevated brand perception through high-quality visual content."
  },
  {
    name: "Epik Leaders",
    handle: "@epikleaders_encgc",
    services: ["Event Coverage", "Promotional Content", "Social Media Management"],
    description: "Complete social media management and event documentation for student organization.",
    results: "Strong community engagement and event promotion success."
  },
  {
    name: "Elpincel",
    handle: "@elpincel_encgc",
    services: ["Graphic Design", "Video Content", "Event Coverage"],
    description: "Creative content for art and culture student organization.",
    results: "Visually compelling content that resonates with the artistic community."
  }
];

const services = [
  { icon: Video, name: "Video Production", desc: "Teasers, reels, and promotional videos" },
  { icon: Camera, name: "Photo Shoots", desc: "Professional photography for brands" },
  { icon: Megaphone, name: "Instagram Ads", desc: "Paid advertising campaigns" },
  { icon: Instagram, name: "Social Media", desc: "Content creation and management" }
];

const MiraiStudio = () => {
  return (
    <section id="mirai-studio" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm tracking-[0.3em] uppercase mb-4 block">
            Marketing Agency
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            MIRAI <span className="text-primary">STUDIO</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A full-service marketing agency specializing in content creation, video production, 
            and social media management. We transform brands through visual storytelling.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 text-center hover:border-primary/50 transition-all duration-300 group"
            >
              <service.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-sm mb-1">{service.name}</h3>
              <p className="text-muted-foreground text-xs">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* Clients Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-display font-bold text-center mb-8">
            Client <span className="text-primary">Portfolio</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clients.map((client, index) => (
              <Card 
                key={index} 
                className="bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 group overflow-hidden"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="font-display font-bold text-lg group-hover:text-primary transition-colors">
                        {client.name}
                      </h4>
                      <span className="text-muted-foreground text-sm">{client.handle}</span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Instagram className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4">
                    {client.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {client.services.map((service, sIndex) => (
                      <span 
                        key={sIndex}
                        className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                  
                  <div className="pt-4 border-t border-border/50">
                    <p className="text-xs text-muted-foreground italic">
                      <span className="text-primary font-semibold">Result:</span> {client.results}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="group"
            onClick={() => window.open("https://www.instagram.com/mirai.studio1/", "_blank")}
          >
            <Instagram className="w-5 h-5 mr-2" />
            View Our Work
            <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MiraiStudio;
