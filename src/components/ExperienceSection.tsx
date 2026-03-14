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
  <section id="experience" className="py-24 relative overflow-hidden">
    <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/3 blur-[120px] rounded-full" />
    <div className="container mx-auto px-6">
      <motion.p
        className="section-number mb-4"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        03 // Experience
      </motion.p>
      <motion.h2
        className="text-4xl md:text-5xl font-display font-bold tracking-tighter mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Experience
      </motion.h2>
      <div className="relative pl-8">
        <motion.div
          className="absolute left-0 top-0 bottom-0 timeline-line"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{ transformOrigin: "top" }}
        />
        <div className="space-y-10">
          {experiences.map((item, i) => (
            <motion.div
              key={i}
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                className="absolute -left-8 top-1 w-3 h-3 rounded-full bg-primary"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.2, type: "spring", stiffness: 300 }}
              />
              <motion.div
                className="surface-card p-6 rounded-xl group"
                whileHover={{ x: 8, transition: { duration: 0.3 } }}
              >
                <div className="flex items-center justify-between mb-2">
                  <p className="font-mono text-xs text-primary tracking-widest tabular-nums">
                    {item.year}
                  </p>
                  <motion.div
                    className="w-2 h-2 rounded-full bg-primary/50"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ repeat: Infinity, duration: 2, delay: i * 0.5 }}
                  />
                </div>
                <h3 className="font-display font-semibold text-lg flex items-center gap-2">
                  <Briefcase size={18} className="text-primary" />
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {item.tags.map((tag, j) => (
                    <motion.span
                      key={tag}
                      className="skill-pill text-xs"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.2 + j * 0.08 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
