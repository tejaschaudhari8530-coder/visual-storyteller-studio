import { motion } from "framer-motion";
import { Linkedin, Instagram, Phone, Mail, ExternalLink } from "lucide-react";

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/umesh-chaudhari-844b38317/", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Phone, href: "tel:+919561447383", label: "Phone" },
  { icon: Mail, href: "mailto:contact@umeshchaudhari.com", label: "Email" },
];

const Footer = () => (
  <motion.footer
    className="border-t border-border/50 py-8"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left - Name and info */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <h4 className="font-display font-bold text-lg">Umesh Chaudhari</h4>
          <p className="font-mono text-xs text-muted-foreground">
            +91 9561447383
          </p>
          <p className="font-mono text-xs text-muted-foreground tracking-widest">
            © 2025 — All Rights Reserved
          </p>
        </div>

        {/* Center - Social Links */}
        <div className="flex items-center gap-3">
          {socialLinks.map((social, i) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-background transition-all duration-300"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              title={social.label}
            >
              <social.icon size={18} />
            </motion.a>
          ))}
        </div>

        {/* Right - Status */}
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
    </div>
  </motion.footer>
);

export default Footer;
