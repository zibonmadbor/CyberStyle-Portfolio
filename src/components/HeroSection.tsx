/**
 * HeroSection — Full-screen hero with glitch name, typing animation,
 * animated cyber grid background and scanning line overlay
 */
import { motion } from "framer-motion";
import { Download, Mail, ChevronDown, Terminal } from "lucide-react";
import { Link } from "react-router-dom";
import GlitchText from "./GlitchText";
import TypingAnimation from "./TypingAnimation";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated cyber grid background */}
      <div className="absolute inset-0 cyber-grid bg-grid-60 animate-grid-move opacity-60" />

      {/* Radial glow center */}
      <div className="absolute inset-0 bg-radial-gradient" style={{
        background: "radial-gradient(ellipse 60% 60% at 50% 50%, hsl(152 100% 50% / 0.08) 0%, transparent 70%)"
      }} />

      {/* Scanning line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-green to-transparent opacity-60 animate-scan-line"
          style={{ top: 0 }}
        />
      </div>

      {/* Scan line overlay */}
      <div className="scan-line absolute inset-0 pointer-events-none" />

      {/* Corner decorations */}
      <div className="absolute top-24 left-6 w-16 h-16 border-l-2 border-t-2 border-neon-green/40" />
      <div className="absolute top-24 right-6 w-16 h-16 border-r-2 border-t-2 border-neon-green/40" />
      <div className="absolute bottom-24 left-6 w-16 h-16 border-l-2 border-b-2 border-neon-green/40" />
      <div className="absolute bottom-24 right-6 w-16 h-16 border-r-2 border-b-2 border-neon-green/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 terminal-card"
        >
          <span className="w-2 h-2 rounded-full bg-neon-green animate-neon-pulse" />
          <span className="font-mono text-xs text-neon-green tracking-widest">
            SYSTEM ONLINE — AVAILABLE FOR HIRE
          </span>
        </motion.div>

        {/* Glitch name */}
        <GlitchText
          text="JIBON MADBER"
          as="h1"
          className="font-orbitron text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-wider text-foreground text-glow-green mb-4"
        />

        {/* Typing subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex items-center justify-center gap-2 mb-8 min-h-[40px]"
        >
          <Terminal className="w-4 h-4 text-neon-green flex-shrink-0" />
          <TypingAnimation
            strings={[
              "Full Stack MERN Developer",
              "Cyber Security Expert",
              "Ethical Hacker",
              "Penetration Tester",
              "Problem Solver",
            ]}
            className="font-mono text-lg sm:text-xl text-neon-cyan text-glow-cyan"
            prefix="$ "
          />
        </motion.div>

        {/* Short bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="font-inter text-muted-foreground max-w-xl mx-auto mb-10 text-base leading-relaxed"
        >
          Building secure, scalable web applications and protecting digital
          infrastructure. Bridging the gap between development and security.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollToSection("contact")}
            className="btn-cyber-filled flex items-center gap-2"
          >
            <Mail className="w-4 h-4" />
            Hire Me
          </button>
          <Link
            to="/resume"
            className="btn-cyber-green flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Download CV
          </Link>
        </motion.div>

        {/* Stat chips */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-wrap items-center justify-center gap-6 mt-14"
        >
          {[
            { value: "3+", label: "Years Exp." },
            { value: "20+", label: "Projects" },
            { value: "10+", label: "Clients" },
            { value: "100%", label: "Dedication" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-orbitron text-2xl font-bold text-neon-green text-glow-green">
                {stat.value}
              </div>
              <div className="font-mono text-xs text-muted-foreground tracking-wider mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollToSection("about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.5, y: { repeat: Infinity, duration: 1.5 } }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-neon-green/60 hover:text-neon-green transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.button>
    </section>
  );
};

export default HeroSection;
