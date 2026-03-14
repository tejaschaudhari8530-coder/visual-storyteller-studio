import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Image, Palette, Sparkles } from "lucide-react";
import portfolioAngioplasty from "@/assets/portfolio-angioplasty.jpg";
import portfolioPodcast from "@/assets/portfolio-podcast.png";

const categories = [
  { id: "all", label: "All" },
  { id: "video", label: "Video Editing" },
  { id: "cinematic", label: "Cinematic" },
  { id: "photo", label: "Photography" },
  { id: "motion", label: "Motion Graphics" },
  { id: "design", label: "Graphic Design" },
];

const projects = [
  { id: 1, title: "Dr. Sheetalkumar Hiran – Angioplasty", category: "design", aspect: "9/16", icon: Palette, color: "from-primary/20 to-accent/30", image: portfolioAngioplasty },
  { id: 2, title: "Gen Z Podcast Thumbnail", category: "design", aspect: "9/16", icon: Palette, color: "from-primary/15 to-secondary/40", image: portfolioPodcast },
  { id: 3, title: "Brand Campaign Film", category: "video", aspect: "16/9", icon: Play, color: "from-primary/20 to-accent/30", image: null },
  { id: 4, title: "Wedding Cinematic", category: "cinematic", aspect: "16/9", icon: Play, color: "from-primary/15 to-secondary/40", image: null },
  { id: 5, title: "Product Shoot", category: "photo", aspect: "4/5", icon: Image, color: "from-accent/30 to-muted/50", image: null },
  { id: 6, title: "Social Media Reel", category: "video", aspect: "16/9", icon: Play, color: "from-secondary/30 to-primary/15", image: null },
  { id: 7, title: "Logo Animation", category: "motion", aspect: "16/9", icon: Sparkles, color: "from-primary/25 to-accent/20", image: null },
  { id: 8, title: "Brand Identity", category: "design", aspect: "4/5", icon: Palette, color: "from-muted/40 to-accent/30", image: null },
  { id: 9, title: "Event Coverage", category: "cinematic", aspect: "16/9", icon: Play, color: "from-accent/20 to-primary/10", image: null },
  { id: 10, title: "Portrait Series", category: "photo", aspect: "4/5", icon: Image, color: "from-secondary/20 to-muted/40", image: null },
  { id: 11, title: "Packaging Design", category: "design", aspect: "4/5", icon: Palette, color: "from-primary/10 to-secondary/30", image: null },
];

const PortfolioSection = () => {
  const [active, setActive] = useState("all");
  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-number mb-4">05 // Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter mb-8">
            Selected <span className="text-primary">Work</span>
          </h2>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`font-mono text-xs uppercase tracking-[0.15em] px-4 py-2 rounded-lg transition-all duration-300 ${
                  active === cat.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted/50 text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => {
                const Icon = project.icon;
                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="group relative surface-card rounded-xl overflow-hidden cursor-pointer"
                    style={{ aspectRatio: project.aspect }}
                  >
                    {/* Image or gradient placeholder */}
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    ) : (
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.color}`} />
                    )}

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Icon size={40} className="text-primary opacity-0 group-hover:opacity-80 transition-opacity duration-300" />
                    </div>

                    {/* Timecode */}
                    <div className="absolute top-3 right-3 font-mono text-[10px] text-foreground/40 tracking-widest">
                      {String(project.id).padStart(2, "0")}:00:00
                    </div>

                    {/* Title */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/80 to-transparent">
                      <p className="font-display font-semibold text-sm">{project.title}</p>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                        {project.category}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
