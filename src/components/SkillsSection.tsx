import { motion } from "framer-motion";
import { 
  Film, Palette, Camera, Volume2, Wand2, 
  Sparkles, PenTool, Printer, Video, Package
} from "lucide-react";

const skills = [
  { name: "Video Editing", icon: Film },
  { name: "Color Grading", icon: Palette },
  { name: "Motion Graphics", icon: Sparkles },
  { name: "Sound Design", icon: Volume2 },
  { name: "Photo Retouching", icon: Wand2 },
  { name: "High-End Retouching", icon: Camera },
  { name: "Social Media Design", icon: PenTool },
  { name: "Print Media", icon: Printer },
  { name: "Camera Operating", icon: Video },
  { name: "Packaging Design", icon: Package },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const SkillsSection = () => (
  <section id="skills" className="py-24 relative overflow-hidden">
    <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/3 blur-[150px] rounded-full -translate-y-1/2" />
    <div className="container mx-auto px-6">
      <motion.p
        className="section-number mb-4"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        04 // Skills
      </motion.p>
      <motion.h2
        className="text-4xl md:text-5xl font-display font-bold tracking-tighter mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Technical <span className="text-gradient-gold">Skills</span>
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="surface-card p-5 rounded-xl flex flex-col items-center gap-3 text-center group cursor-default"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <Icon size={22} className="text-primary" />
              </div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                {skill.name}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  </section>
);

export default SkillsSection;
