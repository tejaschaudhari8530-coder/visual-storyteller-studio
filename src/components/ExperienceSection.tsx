import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    year: "2020–2022",
    title: "Photography Industry",
    desc: "Candid Photography & Cinematography",
    tags: ["Canon", "Lightroom", "Premiere Pro"],
  },
  {
    year: "2021–2025",
    title: "Graphic Design",
    desc: "Freelancing Work",
    tags: ["Photoshop", "Illustrator", "Figma"],
  },
  {
    year: "2025–2026",
    title: "Brand Banao.AI",
    desc: "Photographer, Cinematographer & Video Editor",
    tags: ["Premiere Pro", "DaVinci Resolve", "After Effects"],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="py-24 relative">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-number mb-4">03 // Experience</p>
        <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter mb-12">
          Experience
        </h2>
        <div className="relative pl-8">
          <div className="absolute left-0 top-0 bottom-0 timeline-line" />
          <div className="space-y-10">
            {experiences.map((item, i) => (
              <motion.div
                key={i}
                className="relative"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <div className="absolute -left-8 top-1 w-2 h-2 rounded-full bg-primary" />
                <div className="surface-card p-6 rounded-xl">
                  <p className="font-mono text-xs text-primary tracking-widest tabular-nums mb-2">
                    {item.year}
                  </p>
                  <h3 className="font-display font-semibold text-lg flex items-center gap-2">
                    <Briefcase size={18} className="text-primary" />
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {item.tags.map((tag) => (
                      <span key={tag} className="skill-pill text-xs">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ExperienceSection;
