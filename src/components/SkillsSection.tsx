import { motion } from "framer-motion";

const skills = [
  "Video Editing",
  "Color Grading",
  "Motion Graphics",
  "Sound Design",
  "Photo Retouching",
  "High-End Photo Retouching",
  "Social Media Post Designing",
  "Print Media Knowledge",
  "Camera Operating",
  "Product Packaging Designing",
];

const SkillsSection = () => (
  <section id="skills" className="py-24 relative">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-number mb-4">04 // Skills</p>
        <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter mb-12">
          Technical <span className="text-primary">Skills</span>
        </h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, i) => (
            <motion.span
              key={skill}
              className="skill-pill"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default SkillsSection;
