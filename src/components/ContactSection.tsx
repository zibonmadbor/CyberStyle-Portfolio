/**
 * ContactSection — Secure terminal-style contact form + social links
 */
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  User,
  Mail,
  MessageSquare,
  Github,
  Linkedin,
  Facebook,
  Phone,
  MapPin,
  Terminal,
} from "lucide-react";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/zibonmadbor", color: "text-neon-green" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/jibonmadbercc/", color: "text-neon-cyan" },
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/abubokkorciddik.zibon", color: "text-neon-purple" },
  { icon: Phone, label: "WhatsApp", href: "https://wa.me/", color: "text-neon-green" },
];

const infoItems = [
  { icon: Mail, label: "Email", value: "zibonmadbor@gmail.com" },
  { icon: MapPin, label: "Location", value: "Bangladesh 🇧🇩" },
  { icon: Phone, label: "WhatsApp", value: "+880 1751 602201" },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/zibonmadbor@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSent(true);
        setForm({ name: "", email: "", message: "" });
        // Hide success message after 5 seconds
        setTimeout(() => setSent(false), 5000);
      } else {
        console.error("Form submission failed");
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      alert("An error occurred. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 px-4">
      <div className="absolute inset-0 cyber-grid bg-grid-60 opacity-20" />

      <div className="relative max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-foreground mt-2">
            <span className="text-neon-green">&lt;</span>Contact
            <span className="text-neon-green">/&gt;</span>
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-neon-green to-transparent mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="terminal-card overflow-hidden">
              <div className="terminal-header">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: "rgb(239 68 68 / 0.6)" }} />
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: "rgb(234 179 8 / 0.6)" }} />
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: "hsl(152 100% 50% / 0.6)" }} />
                </div>
                <Terminal className="w-4 h-4 text-neon-green ml-2" />
                <span className="font-mono text-xs text-neon-green/70">secure-contact.sh</span>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-5">
                {/* Success message */}
                {sent && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass-card neon-border-green p-3 font-mono text-xs text-neon-green"
                  >
                    <span className="text-neon-green">✓</span> Message transmitted! I'll respond within 24 hours.
                  </motion.div>
                )}

                {/* Name field */}
                <div>
                  <label className="font-mono text-xs text-neon-green mb-1.5 flex items-center gap-2">
                    <User className="w-3 h-3" />
                    NAME
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    placeholder="John Doe"
                    className="w-full bg-muted border border-neon-green/20 focus:border-neon-green/60 rounded px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground outline-none transition-all"
                  />
                </div>

                {/* Email field */}
                <div>
                  <label className="font-mono text-xs text-neon-green mb-1.5 flex items-center gap-2">
                    <Mail className="w-3 h-3" />
                    EMAIL
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    placeholder="you@example.com"
                    className="w-full bg-muted border border-neon-green/20 focus:border-neon-green/60 rounded px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground outline-none transition-all"
                  />
                </div>

                {/* Message field */}
                <div>
                  <label className="font-mono text-xs text-neon-green mb-1.5 flex items-center gap-2">
                    <MessageSquare className="w-3 h-3" />
                    MESSAGE
                  </label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    placeholder="Tell me about your project..."
                    className="w-full bg-muted border border-neon-green/20 focus:border-neon-green/60 rounded px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="btn-cyber-filled w-full flex items-center justify-center gap-2"
                >
                  {sending ? (
                    <>
                      <span className="w-4 h-4 border-2 border-cyber-black border-t-transparent rounded-full animate-spin" />
                      Transmitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Secure Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Info + socials */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            {/* Contact info */}
            <div className="glass-card neon-border-green p-6 space-y-4">
              <h3 className="font-orbitron text-sm font-bold text-neon-green tracking-wide">
                GET IN TOUCH
              </h3>
              <div className="space-y-3">
                {infoItems.map((info) => {
                  const InfoIcon = info.icon;
                  return (
                    <div key={info.label} className="flex items-center gap-3">
                      <div className="w-8 h-8 glass-card neon-border-green flex items-center justify-center flex-shrink-0">
                        <InfoIcon className="w-4 h-4 text-neon-green" />
                      </div>
                      <div>
                        <p className="font-mono text-xs text-muted-foreground">{info.label}</p>
                        <p className="font-mono text-sm text-foreground">{info.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Social links */}
            <div className="glass-card neon-border-cyan p-6">
              <h3 className="font-orbitron text-sm font-bold text-neon-cyan tracking-wide mb-4">
                CONNECT WITH ME
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {socials.map((social) => {
                  const SocialIcon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-card border border-neon-green/20 hover:border-neon-green/50 p-3 flex items-center gap-2 transition-all group"
                    >
                      <SocialIcon className={`w-4 h-4 ${social.color} group-hover:scale-110 transition-transform`} />
                      <span className="font-mono text-xs text-muted-foreground group-hover:text-foreground">
                        {social.label}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Location card */}
            <div className="glass-card neon-border-purple p-6 flex-1 min-h-[140px] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 cyber-grid bg-grid-60 opacity-30" />
              <div className="relative text-center">
                <MapPin className="w-8 h-8 text-neon-purple mx-auto mb-2 animate-float" />
                <p className="font-mono text-xs text-neon-purple">Bangladesh 🇧🇩</p>
                <p className="font-mono text-xs text-muted-foreground mt-1">Open to Remote Work Worldwide</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
