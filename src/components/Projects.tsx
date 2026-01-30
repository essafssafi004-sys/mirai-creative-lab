import { ExternalLink, Shirt } from "lucide-react";
import { Button } from "@/components/ui/button";

const collections = [
  {
    name: "Future",
    description: "Forward-thinking designs that embrace innovation and modern streetwear aesthetics.",
    tags: ["Streetwear", "Original Design"]
  },
  {
    name: "Chaos",
    description: "Bold designs exploring disruption and raw energy in contemporary fashion.",
    tags: ["Streetwear", "Original Design"]
  },
  {
    name: "Resurgence",
    description: "A collection symbolizing rebirth and new beginnings through powerful visual motifs.",
    tags: ["Limited Edition", "Collaboration"]
  },
  {
    name: "Light It Up",
    description: "Vibrant pieces that capture energy and movement, created in collaboration with Light club.",
    tags: ["Collaboration", "Light Club"]
  },
  {
    name: "Trunks",
    description: "Anime-inspired collection merging pop culture with contemporary fashion.",
    tags: ["Anime", "Pop Culture"]
  }
];

const collaborations = [
  { name: "Epik Leaders", type: "Club Collaboration" },
  { name: "Elpincel ENCGC", type: "Design Partnership" },
  { name: "Light Club", type: "Creative Collab" }
];

const Projects = () => {
  return (
    <section id="work" className="section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4">My Work</p>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4">
            MIRAI BRAND
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            "Mirai" means "future" in Japanese. Every piece is designed and created by me — 
            from concept to final product. Streetwear that tells a story.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {collections.map((collection, index) => (
            <div
              key={collection.name}
              className="group relative overflow-hidden rounded-xl border border-border bg-card hover-lift"
            >
              {/* Placeholder visual - gradient background */}
              <div className="h-48 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary flex items-center justify-center">
                <Shirt className="h-16 w-16 text-primary/40 group-hover:text-primary/60 transition-colors" />
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {collection.tags.map(tag => (
                    <span key={tag} className="text-xs uppercase tracking-wider text-accent bg-accent/10 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-display text-2xl text-foreground mb-2">{collection.name}</h3>
                <p className="text-muted-foreground text-sm">{collection.description}</p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Collaborations */}
        <div className="text-center mb-8">
          <h3 className="font-display text-2xl text-foreground mb-6">Collaborations</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {collaborations.map(collab => (
              <div
                key={collab.name}
                className="px-6 py-3 rounded-full border border-border bg-card/50 hover:border-primary/50 transition-colors"
              >
                <span className="text-foreground font-medium">{collab.name}</span>
                <span className="text-muted-foreground text-sm ml-2">• {collab.type}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="lg" asChild>
            <a href="https://www.instagram.com/mirai.brand1/" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-5 w-5" />
              Explore on Instagram
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
