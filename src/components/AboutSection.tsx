import { motion } from "framer-motion";
import umeshPortrait from "@/assets/umesh-portrait.png";

const AboutSection = () => (
  <section id="about" className="py-24 relative">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-number mb-4">01 // About</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative w-64 h-80 rounded-xl overflow-hidden surface-card">
              <img
                src={umeshPortrait}
                alt="Umesh Chaudhari"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed max-w-[65ch]">
              I'm Umesh Chaudhari — a passionate visual storyteller specializing in video editing,
              cinematography, photography, and graphic design. With years of hands-on experience
              across the creative industry, I transform raw footage and ideas into compelling
              visual narratives that captivate audiences.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed max-w-[65ch]">
              From candid photography to brand campaigns, I bring a cinematic eye and technical
              precision to every project. Currently working with Brand Banao.AI, I continue to
              push the boundaries of visual storytelling.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
