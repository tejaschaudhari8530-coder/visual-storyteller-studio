import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, ArrowUpRight } from "lucide-react";
import umeshPortrait from "@/assets/umesh-portrait.png";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  const inputClasses = (field: string) =>
    `w-full bg-muted/30 border rounded-lg px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none transition-all duration-300 ${
      focused === field ? "border-primary/50 shadow-[0_0_15px_hsl(45_100%_50%/0.1)]" : "border-border/50"
    }`;

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 blur-[150px] rounded-full" />
      <div className="container mx-auto px-6">
        <motion.p
          className="section-number mb-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          06 // Contact
        </motion.p>
        <motion.h2
          className="text-4xl md:text-5xl font-display font-bold tracking-tighter mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Start a <span className="text-gradient-gold">Project</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Profile card */}
          <motion.div
            className="surface-card rounded-xl p-8 flex flex-col items-center text-center space-y-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4 }}
          >
            <motion.div
              className="w-32 h-32 rounded-full overflow-hidden glow-ring"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src={umeshPortrait} alt="Umesh Chaudhari" className="w-full h-full object-cover object-top" />
            </motion.div>
            <h3 className="font-display font-bold text-xl">Umesh Chaudhari</h3>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Cinematographer & Editor
            </p>
            <div className="w-12 h-px bg-primary/30" />
            <div className="space-y-3 text-sm text-muted-foreground pt-2">
              <p className="flex items-center gap-2 justify-center">
                <Mail size={14} className="text-primary" /> Available for freelance
              </p>
              <p className="flex items-center gap-2 justify-center">
                <MapPin size={14} className="text-primary" /> India
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
                  Name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                  required
                  className={inputClasses("name")}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
                  Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  required
                  className={inputClasses("email")}
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
                Message
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                required
                rows={5}
                className={`${inputClasses("message")} resize-none`}
                placeholder="Tell me about your project..."
              />
            </div>
            <motion.button
              type="submit"
              className="btn-primary-cinema flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {sent ? (
                "✓ Message Sent!"
              ) : (
                <>
                  Send Message
                  <ArrowUpRight size={16} />
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
