import { motion } from "framer-motion";
import umeshPortrait from "@/assets/umesh-portrait.png";

const AboutSection = () => (
  <section id="about" className="py-24 relative overflow-hidden">
    {/* Subtle background glow */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[150px] rounded-full" />

    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <motion.p
          className="section-number mb-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          01 // About
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative w-64 h-80 group">
              {/* Gold border frame */}
              <motion.div
                className="absolute -inset-2 rounded-xl border border-primary/20"
                whileHover={{ borderColor: "hsl(45 100% 50% / 0.4)" }}
                transition={{ duration: 0.3 }}
              />
              <div className="relative w-full h-full rounded-xl overflow-hidden surface-card">
                <img
                  src={umeshPortrait}
                  alt="Umesh Chaudhari"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                {/* Cinematic bars */}
                <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-background/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
              {/* Floating label */}
              <motion.div
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full font-mono text-[10px] uppercase tracking-widest whitespace-nowrap"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                Creative Director
              </motion.div>
            </div>
          </motion.div>

          <div className="lg:col-span-2 space-y-6">
            <motion.h2
              className="text-4xl md:text-5xl font-display font-bold tracking-tighter"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              About <span className="text-gradient-gold">Me</span>
            </motion.h2>
            <motion.p
              className="font-body text-muted-foreground leading-relaxed max-w-[65ch]"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              I'm Umesh Chaudhari — a passionate visual storyteller specializing in video editing,
              cinematography, photography, and graphic design. With years of hands-on experience
              across the creative industry, I transform raw footage and ideas into compelling
              visual narratives that captivate audiences.
            </motion.p>
            <motion.p
              className="font-body text-muted-foreground leading-relaxed max-w-[65ch]"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              From candid photography to brand campaigns, I bring a cinematic eye and technical
              precision to every project. Currently working with Brand Banao.AI, I continue to
              push the boundaries of visual storytelling.
            </motion.p>

            {/* Specialties */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {["Cinematography", "Video Editing", "Photography", "Graphic Design"].map((item, i) => (
                <motion.div
                  key={item}
                  className="text-center p-3 rounded-lg border border-border/50 bg-card/50 hover:border-primary/30 transition-colors duration-300"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  whileHover={{ y: -3 }}
                >
                  <p className="font-mono text-[10px] uppercase tracking-widest text-primary">{String(i + 1).padStart(2, "0")}</p>
                  <p className="font-display text-xs font-semibold mt-1">{item}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
