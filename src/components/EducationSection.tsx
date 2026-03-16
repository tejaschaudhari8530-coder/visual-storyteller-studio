import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  { year: "2020–2021", title: "HSC Pass", institution: "Pratap College" },
  { year: "2023–2024", title: "Graduation in B.A", institution: "Pratap College" },
];

const EducationSection = () => (
  <section className="py-24 relative">
    <div className="container mx-auto px-6">
      <motion.p
        className="section-number mb-4"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        02 // Education
      </motion.p>
      <motion.h2
        className="text-4xl md:text-5xl font-display font-bold tracking-tighter mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Education
      </motion.h2>
      <div className="relative pl-8">
        <motion.div
          className="absolute left-0 top-0 bottom-0 timeline-line"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ transformOrigin: "top" }}
        />
        <div className="space-y-10">
          {education.map((item, i) => (
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
                className="surface-card p-6 rounded-xl"
                whileHover={{ x: 8, transition: { duration: 0.3 } }}
              >
                <p className="font-mono text-xs text-primary tracking-widest tabular-nums mb-2">
                  {item.year}
                </p>
                <h3 className="font-display font-semibold text-lg flex items-center gap-2">
                  <GraduationCap size={18} className="text-primary" />
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">{item.institution}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default EducationSection;
