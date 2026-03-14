import { motion } from "framer-motion";
import umeshPortrait from "@/assets/umesh-portrait.png";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
    {/* Background grain */}
    <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
    
    <div className="container mx-auto px-6 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
        {/* Left content - 60% */}
        <motion.div
          className="lg:col-span-3 space-y-8 py-12 lg:py-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Video Editor // Cinematographer // Photographer
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-display font-bold tracking-tighter" style={{ letterSpacing: "-0.04em" }}>
            UMESH{" "}
            <span className="text-primary">CHAUDHARI</span>
          </h1>
          <p className="text-xl md:text-2xl font-body text-muted-foreground max-w-[50ch] leading-relaxed">
            Crafting Stories Through Visuals
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#portfolio" className="btn-primary-cinema">
              View Portfolio
            </a>
            <a href="#contact" className="btn-secondary-cinema">
              Hire Me
            </a>
          </div>
        </motion.div>

        {/* Right portrait - 40% */}
        <motion.div
          className="lg:col-span-2 relative flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative w-72 sm:w-80 md:w-96 lg:w-full max-w-md">
            {/* Gold accent glow behind */}
            <div className="absolute -inset-4 bg-primary/10 rounded-2xl blur-3xl" />
            <div className="relative overflow-hidden rounded-xl">
              <img
                src={umeshPortrait}
                alt="Umesh Chaudhari - Cinematographer & Video Editor"
                className="w-full h-auto object-cover gradient-mask-left"
              />
            </div>
            {/* Timecode overlay */}
            <div className="absolute bottom-4 right-4 font-mono text-xs text-primary/60 tracking-widest">
              00:00:01:00
            </div>
          </div>
        </motion.div>
      </div>
    </div>

    {/* Scroll indicator */}
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
      animate={{ y: [0, 8, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
    >
      <div className="w-px h-12 bg-gradient-to-b from-transparent to-primary/50" />
    </motion.div>
  </section>
);

export default HeroSection;
