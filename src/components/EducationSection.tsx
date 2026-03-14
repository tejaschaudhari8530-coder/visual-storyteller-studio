import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  { year: "2020–2021", title: "12th Pass", institution: "Pratap College" },
  { year: "2023–2024", title: "Graduation in B.A", institution: "Pratap College" },
];

const EducationSection = () => (
  <section className="py-24 relative">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-number mb-4">02 // Education</p>
        <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter mb-12">
          Education
        </h2>
        <div className="relative pl-8">
          <div className="absolute left-0 top-0 bottom-0 timeline-line" />
          <div className="space-y-10">
            {education.map((item, i) => (
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
                    <GraduationCap size={18} className="text-primary" />
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{item.institution}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default EducationSection;
