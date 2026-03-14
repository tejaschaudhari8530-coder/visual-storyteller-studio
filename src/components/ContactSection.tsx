import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin } from "lucide-react";
import umeshPortrait from "@/assets/umesh-portrait.png";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-number mb-4">06 // Contact</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter mb-12">
            Start a <span className="text-primary">Project</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Profile card */}
            <div className="surface-card rounded-xl p-8 flex flex-col items-center text-center space-y-4">
              <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-primary/30">
                <img src={umeshPortrait} alt="Umesh Chaudhari" className="w-full h-full object-cover object-top" />
              </div>
              <h3 className="font-display font-bold text-xl">Umesh Chaudhari</h3>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Cinematographer & Editor
              </p>
              <div className="space-y-2 text-sm text-muted-foreground pt-2">
                <p className="flex items-center gap-2 justify-center">
                  <Mail size={14} className="text-primary" /> Available for freelance
                </p>
                <p className="flex items-center gap-2 justify-center">
                  <MapPin size={14} className="text-primary" /> India
                </p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
                    Name
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="w-full bg-muted/30 border border-border/50 rounded-lg px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary transition-all"
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
                    required
                    className="w-full bg-muted/30 border border-border/50 rounded-lg px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary transition-all"
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
                  required
                  rows={5}
                  className="w-full bg-muted/30 border border-border/50 rounded-lg px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="btn-primary-cinema flex items-center gap-2"
              >
                {sent ? "Message Sent!" : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
