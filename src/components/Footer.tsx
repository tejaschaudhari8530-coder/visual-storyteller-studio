import { motion } from "framer-motion";

const Footer = () => (
  <motion.footer
    className="border-t border-border/50 py-8"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="font-mono text-xs text-muted-foreground tracking-widest">
        © 2025 UMESH CHAUDHARI
      </p>
      <div className="flex items-center gap-2">
        <motion.div
          className="w-2 h-2 rounded-full bg-primary"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
        <p className="font-mono text-[10px] text-muted-foreground/50 tracking-widest uppercase">
          Crafted with passion
        </p>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
