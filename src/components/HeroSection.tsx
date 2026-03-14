import { motion } from "framer-motion";
import umeshPortrait from "@/assets/umesh-portrait.png";

const letterVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -90 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { delay: 0.5 + i * 0.04, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const AnimatedText = ({ text, className }: { text: string; className?: string }) => (
  <span className={className}>
    {text.split("").map((char, i) => (
      <motion.span
        key={i}
        custom={i}
        variants={letterVariants}
        initial="hidden"
        animate="visible"
        className="inline-block"
        style={{ display: char === " " ? "inline" : "inline-block" }}
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ))}
  </span>
);

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
    {/* Animated background */}
    <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
    <motion.div
      className="absolute top-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]"
      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
      transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute bottom-1/4 -left-32 w-[400px] h-[400px] rounded-full bg-primary/3 blur-[100px]"
      animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
      transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
    />

    <div className="container mx-auto px-6 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
        {/* Left content */}
        <div className="lg:col-span-3 space-y-8 py-12 lg:py-24">
          <motion.p
            className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.span
              className="inline-block w-8 h-px bg-primary mr-3 align-middle"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ transformOrigin: "left" }}
            />
            Video Editor // Cinematographer // Photographer
          </motion.p>

          <h1 className="text-5xl sm:text-6xl md:text-8xl font-display font-bold tracking-tighter" style={{ letterSpacing: "-0.04em" }}>
            <AnimatedText text="UMESH " />
            <AnimatedText text="CHAUDHARI" className="text-gradient-gold" />
          </h1>

          <motion.p
            className="text-xl md:text-2xl font-body text-muted-foreground max-w-[50ch] leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2 }}
          >
            Crafting Stories Through Visuals
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
          >
            <a href="#portfolio" className="btn-primary-cinema group">
              <span className="flex items-center gap-2">
                View Portfolio
                <motion.span
                  className="inline-block"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.span>
              </span>
            </a>
            <a href="#contact" className="btn-secondary-cinema">
              Hire Me
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            className="flex gap-8 pt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            {[
              { value: "5+", label: "Years Exp." },
              { value: "50+", label: "Projects" },
              { value: "30+", label: "Clients" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 + i * 0.15 }}
              >
                <p className="font-display text-2xl font-bold text-primary">{stat.value}</p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right portrait */}
        <motion.div
          className="lg:col-span-2 relative flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative w-72 sm:w-80 md:w-96 lg:w-full max-w-md">
            {/* Animated glow ring */}
            <motion.div
              className="absolute -inset-4 rounded-2xl"
              style={{ background: "linear-gradient(135deg, hsl(45 100% 50% / 0.1), transparent, hsl(45 100% 50% / 0.05))" }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 3 }}
            />
            <motion.div
              className="absolute -inset-1 rounded-xl border border-primary/10"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ repeat: Infinity, duration: 4 }}
            />
            <div className="relative overflow-hidden rounded-xl scanline-overlay">
              <img
                src={umeshPortrait}
                alt="Umesh Chaudhari - Cinematographer & Video Editor"
                className="w-full h-auto object-cover gradient-mask-left"
              />
            </div>
            {/* Timecode overlay */}
            <motion.div
              className="absolute bottom-4 right-4 font-mono text-xs text-primary/60 tracking-widest"
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              REC ● 00:00:01:00
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>

    {/* Scroll indicator */}
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.5 }}
    >
      <motion.span className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground/50">
        Scroll
      </motion.span>
      <motion.div
        className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent"
        animate={{ scaleY: [0.5, 1, 0.5], opacity: [0.3, 0.7, 0.3] }}
        transition={{ repeat: Infinity, duration: 2 }}
        style={{ transformOrigin: "top" }}
      />
    </motion.div>
  </section>
);

export default HeroSection;
