/**
 * FooterSection — Cyber-themed footer with social links and copyright
 */
import { Shield, Github, Linkedin, Facebook, Phone, Heart, Terminal } from "lucide-react";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { Icon: Github, href: "https://github.com/zibonmadbor", label: "GitHub" },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/jibonmadbercc/", label: "LinkedIn" },
  { Icon: Facebook, href: "https://www.facebook.com/abubokkorciddik.zibon", label: "Facebook" },
  { Icon: Phone, href: "https://wa.me/8801751602201", label: "WhatsApp" },
];

const FooterSection = () => {
  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-neon-green/20 bg-cyber-black/60 backdrop-blur-sm">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-green/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Shield className="w-5 h-5 text-neon-green" />
              <span className="font-orbitron text-sm font-bold text-neon-green text-glow-green">
                J.MADBER
              </span>
            </div>
            <p className="font-mono text-xs text-muted-foreground leading-relaxed">
              Full Stack MERN Developer & Cyber Security Expert from Bangladesh.
              Building secure digital futures.
            </p>
            <div className="flex items-center gap-2 mt-3">
              <Terminal className="w-3 h-3 text-neon-green/50" />
              <span className="font-mono text-xs text-neon-green/50 animate-neon-pulse">
                Available for hire
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-orbitron text-xs text-neon-cyan tracking-widest mb-4">NAVIGATION</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="font-mono text-xs text-muted-foreground hover:text-neon-green transition-colors flex items-center gap-2"
                  >
                    <span className="text-neon-green/40">{">"}</span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-orbitron text-xs text-neon-cyan tracking-widest mb-4">CONNECT</h4>
            <div className="flex flex-wrap gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 glass-card neon-border-green flex items-center justify-center hover:glow-green transition-all group"
                >
                  <Icon className="w-4 h-4 text-neon-green group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
            <p className="font-mono text-xs text-muted-foreground mt-4">zibonmadbor@gmail.com</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-neon-green/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-xs text-muted-foreground flex items-center gap-1">
            © {new Date().getFullYear()} Jibon Madber. Made with
            <Heart className="w-3 h-3 text-red-500 mx-1" />
            &amp; security in mind.
          </p>
          <p className="font-mono text-xs text-neon-green/40">
            v1.0.0 — All systems operational
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
