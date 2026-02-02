import { ExternalLink, Shirt } from "lucide-react";
import { Button } from "@/components/ui/button";
import resvid from "@/assets/resvid.mp4";

// Collection images: place images in `src/assets/collections/` and name them to match the `image` paths below (e.g., `future.jpg`).
const collections = [
  {
    name: "Future",
    image: "/src/assets/future.png",
    description: "Forward-thinking designs that embrace innovation and modern streetwear aesthetics.",
    tags: ["Streetwear", "Original Design"]
  },
  {
    name: "Chaos",
    image: "/src/assets/chaos.png",
    description: "Bold designs exploring disruption and raw energy in contemporary fashion.",
    tags: ["Streetwear", "Original Design"]
  },
  {
    name: "Resurgence",
    image: "/src/assets/resurgence.png",
    description: "A collection symbolizing rebirth and new beginnings through powerful visual motifs.",
    tags: ["Limited Edition", "Collaboration"]
  },
  {
    name: "Light It Up",
    image: "/src/assets/light-it-up.png",
    description: "Vibrant pieces that capture energy and movement, created in collaboration with Light club.",
    tags: ["Collaboration", "Light Club"]
  },
  {
    name: "Trunks",
    image: "/src/assets/trunks3.png",
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
    <section id="work" className="section-padding relative overflow-hidden bg-secondary/30">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-40 blur-[2px]"
        >
          <source src={resvid} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-background/20" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header — scroll reveal */}
        <div className="text-center mb-16 relative">
          <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4 animate-on-scroll">My Work</p>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4 animate-on-scroll" style={{ animationDelay: "80ms" }}>
            MIRAI BRAND
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll-fade" style={{ animationDelay: "160ms" }}>
            &quot;Mirai&quot; means &quot;future&quot; in Japanese. Every piece is designed and created by me —
            from concept to final product. Streetwear that tells a story.
          </p>
        </div>

        {/* Collections Grid — stagger + image zoom on hover */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {collections.map((collection, index) => (
            <div
              key={collection.name}
              className="group relative overflow-hidden rounded-xl border border-border bg-card hover-lift hover-tilt animate-on-scroll-scale"
              style={{ animationDelay: `${200 + index * 80}ms` }}
            >
              <div className="h-40 md:h-52 w-full overflow-hidden bg-gradient-card">
                <img
                  src={collection.image ?? "/src/assets/logo-icon.png"}
                  alt={`${collection.name} preview`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-4">
                <div className="flex flex-wrap gap-2 mb-3">
                  {collection.tags.map((tag) => (
                    <span key={tag} className="text-xs uppercase tracking-wider text-accent bg-accent/10 px-2 py-1 rounded transition-transform duration-200 group-hover:scale-105">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-display text-2xl text-foreground mb-2">{collection.name}</h3>
                <p className="text-muted-foreground text-sm">{collection.description}</p>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Collaborations — scroll reveal + hover */}
        <div className="text-center mb-8">
          <h3 className="font-display text-2xl text-foreground mb-6 animate-on-scroll">Collaborations</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {collaborations.map((collab, i) => (
              <div
                key={collab.name}
                className="px-6 py-3 rounded-full border border-border bg-card/50 hover:border-primary/50 hover:scale-105 hover:shadow-lg transition-all duration-300 animate-on-scroll-fade"
                style={{ animationDelay: `${400 + i * 60}ms` }}
              >
                <span className="text-foreground font-medium">{collab.name}</span>
                <span className="text-muted-foreground text-sm ml-2">• {collab.type}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="lg" asChild className="hover-glow animate-on-scroll-fade" style={{ animationDelay: "600ms" }}>
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
