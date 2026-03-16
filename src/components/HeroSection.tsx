import { motion } from "framer-motion";
import umeshPortrait from "@/assets/umesh-portrait.png";
import { Clapperboard, Palette, Film, Camera, Aperture } from "lucide-react";

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

// Adobe-style software icons
const SoftwareIcon = ({ 
  label, 
  color, 
  delay 
}: { 
  label: string; 
  color: string; 
  delay: number;
}) => (
  <motion.div
    className="relative"
    initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
    transition={{ duration: 0.8, delay: 1.8 + delay * 0.2, ease: [0.22, 1, 0.36, 1] }}
  >
    <motion.div
      className="w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center font-display font-bold text-lg md:text-xl text-white shadow-lg"
      style={{ 
        background: color,
        boxShadow: `0 0 30px ${color}66`
      }}
      whileHover={{ scale: 1.15, rotate: 5 }}
      animate={{ 
        y: [0, -5, 0],
        rotate: [0, 2, -2, 0]
      }}
      transition={{ 
        y: { repeat: Infinity, duration: 3, delay: delay * 0.3 },
        rotate: { repeat: Infinity, duration: 4, delay: delay * 0.2 }
      }}
    >
      {label}
    </motion.div>
  </motion.div>
);

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
    {/* Animated background */}
    <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
    
    {/* Animated yellow wave */}
    <motion.div
      className="absolute top-1/2 left-0 w-full h-64 -translate-y-1/2"
      initial={{ opacity: 0, x: -200 }}
      animate={{ opacity: 0.4, x: 0 }}
      transition={{ duration: 1.5, delay: 0.5 }}
    >
      <svg viewBox="0 0 1200 200" className="w-full h-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(45 100% 50% / 0.3)" />
            <stop offset="50%" stopColor="hsl(45 100% 60% / 0.6)" />
            <stop offset="100%" stopColor="hsl(45 100% 50% / 0.3)" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="10" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <motion.path
          d="M0,100 Q150,20 300,80 T600,100 T900,60 T1200,100 L1200,200 L0,200 Z"
          fill="url(#waveGradient)"
          filter="url(#glow)"
          animate={{
            d: [
              "M0,100 Q150,20 300,80 T600,100 T900,60 T1200,100 L1200,200 L0,200 Z",
              "M0,80 Q150,120 300,60 T600,90 T900,100 T1200,80 L1200,200 L0,200 Z",
              "M0,100 Q150,20 300,80 T600,100 T900,60 T1200,100 L1200,200 L0,200 Z"
            ]
          }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        />
      </svg>
    </motion.div>

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
        <div className="lg:col-span-3 space-y-6 py-12 lg:py-24">
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

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold tracking-tighter" style={{ letterSpacing: "-0.04em" }}>
            <AnimatedText text="Video " className="text-white" />
            <AnimatedText text="Editor" className="text-gradient-gold" />
            <span className="text-muted-foreground mx-2">&</span>
            <br />
            <AnimatedText text="Visual " className="text-white" />
            <AnimatedText text="Creator" className="text-gradient-gold" />
          </h1>

          <motion.p
            className="text-lg md:text-xl font-body text-muted-foreground max-w-[45ch] leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2 }}
          >
            Helping creators & brands grow with powerful videos.
          </motion.p>

          {/* Services tags */}
          <motion.div
            className="flex flex-wrap gap-3 pt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            {["YouTube", "Reels", "Cinematic", "Commercial Ads"].map((tag, i) => (
              <motion.span
                key={tag}
                className="px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-sm font-mono text-primary"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 + i * 0.1 }}
                whileHover={{ scale: 1.05, borderColor: "hsl(45 100% 50%)" }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          {/* Software Icons */}
          <motion.div
            className="flex gap-4 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.6 }}
          >
            <SoftwareIcon label="Ps" color="#31A8FF" delay={0} />
            <SoftwareIcon label="Pr" color="#9999FF" delay={1} />
            <SoftwareIcon label="Ae" color="#9999FF" delay={2} />
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.2 }}
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
        </div>

        {/* Right portrait with floating icons */}
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
            
            {/* Floating Ps icon */}
            <motion.div
              className="absolute -top-4 -right-4 z-20"
              animate={{ 
                y: [0, -8, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <div className="w-12 h-12 rounded-lg bg-[#31A8FF] flex items-center justify-center font-bold text-white shadow-lg shadow-[#31A8FF]/30">
                Ps
              </div>
            </motion.div>

            {/* Floating Pr icon */}
            <motion.div
              className="absolute top-1/3 -right-8 z-20"
              animate={{ 
                y: [0, -6, 0],
                rotate: [0, -3, 3, 0]
              }}
              transition={{ repeat: Infinity, duration: 3.5, delay: 0.5, ease: "easeInOut" }}
            >
              <div className="w-12 h-12 rounded-lg bg-[#9999FF] flex items-center justify-center font-bold text-white shadow-lg shadow-[#9999FF]/30">
                Pr
              </div>
            </motion.div>

            {/* Floating Ae icon */}
            <motion.div
              className="absolute bottom-1/4 -right-6 z-20"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 8, -8, 0]
              }}
              transition={{ repeat: Infinity, duration: 5, delay: 1, ease: "easeInOut" }}
            >
              <div className="w-12 h-12 rounded-lg bg-[#9999FF] flex items-center justify-center font-bold text-white shadow-lg shadow-[#9999FF]/30">
                Ae
              </div>
            </motion.div>

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
