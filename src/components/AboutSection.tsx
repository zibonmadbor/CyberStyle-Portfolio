/**
 * AboutSection — Glassmorphism terminal-style bio card
 * with animated icons and professional summary
 */
import { motion } from "framer-motion";
import { Shield, Code, Server, Database, Lock, Cpu } from "lucide-react";

const floatingIcons = [
  { Icon: Shield, color: "text-neon-green", delay: 0 },
  { Icon: Code, color: "text-neon-cyan", delay: 0.5 },
  { Icon: Lock, color: "text-neon-purple", delay: 1 },
  { Icon: Server, color: "text-neon-green", delay: 1.5 },
  { Icon: Database, color: "text-neon-cyan", delay: 2 },
  { Icon: Cpu, color: "text-neon-purple", delay: 2.5 },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-foreground mt-2">
            <span className="text-neon-green">&lt;</span>About<span className="text-neon-green">/&gt;</span>
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-neon-green to-transparent mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Terminal bio card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="terminal-card overflow-hidden">
              {/* Terminal header bar */}
              <div className="terminal-header">
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/70" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <span className="w-3 h-3 rounded-full bg-neon-green/70" />
                </div>
                <span className="font-mono text-xs text-neon-green/70 ml-2">
                  jibon@portfolio:~$ whoami
                </span>
              </div>

              <div className="p-6 space-y-4 font-mono text-sm">
                <p>
                  <span className="text-neon-green">{">"}</span>{" "}
                  <span className="text-neon-cyan">Name:</span>{" "}
                  <span className="text-foreground">Jibon Madber</span>
                </p>
                <p>
                  <span className="text-neon-green">{">"}</span>{" "}
                  <span className="text-neon-cyan">Role:</span>{" "}
                  <span className="text-foreground">Full Stack MERN Developer & Cyber Security Expert</span>
                </p>
                <p>
                  <span className="text-neon-green">{">"}</span>{" "}
                  <span className="text-neon-cyan">Location:</span>{" "}
                  <span className="text-foreground">Bangladesh 🇧🇩</span>
                </p>
                <p>
                  <span className="text-neon-green">{">"}</span>{" "}
                  <span className="text-neon-cyan">Education:</span>{" "}
                  <span className="text-foreground">BSc CSE — Green University of Bangladesh</span>
                </p>
                <p>
                  <span className="text-neon-green">{">"}</span>{" "}
                  <span className="text-neon-cyan">Status:</span>{" "}
                  <span className="text-neon-green animate-neon-pulse">
                    ● Available for Projects
                  </span>
                </p>
                <div className="border-t border-neon-green/20 pt-4 mt-4">
                  <p className="text-muted-foreground leading-relaxed">
                    I am a passionate developer who bridges the worlds of web development
                    and cyber security. With expertise in the MERN stack and ethical
                    hacking, I build secure applications from the ground up — because
                    security isn't an afterthought, it's a foundation.
                  </p>
                </div>
                <p className="text-neon-green/50 text-xs mt-2">
                  <span className="animate-neon-pulse">█</span> Ready for next mission...
                </p>
              </div>
            </div>
          </motion.div>

          {/* Floating icons radar grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            {/* Radar ring graphic */}
            <div className="relative w-56 h-56 mx-auto">
              <div className="absolute inset-0 rounded-full border border-neon-green/20" />
              <div className="absolute inset-4 rounded-full border border-neon-green/15" />
              <div className="absolute inset-8 rounded-full border border-neon-green/10" />
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <div
                  className="absolute inset-0 animate-radar origin-center"
                  style={{
                    background:
                      "conic-gradient(from 0deg, transparent 70%, hsl(152 100% 50% / 0.15) 100%)",
                  }}
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Shield className="w-10 h-10 text-neon-green text-glow-green animate-neon-pulse" />
              </div>
              {/* Orbiting dots */}
              {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-neon-green/60 animate-neon-pulse"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: `rotate(${deg}deg) translateX(90px) rotate(-${deg}deg)`,
                    marginTop: "-4px",
                    marginLeft: "-4px",
                    animationDelay: `${i * 0.3}s`,
                  }}
                />
              ))}
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "MERN Projects", value: "15+", color: "neon-border-green" },
                { label: "Security Audits", value: "10+", color: "neon-border-cyan" },
                { label: "CTF Challenges", value: "50+", color: "neon-border-purple" },
                { label: "Happy Clients", value: "10+", color: "neon-border-green" },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`glass-card ${item.color} p-4 text-center`}
                >
                  <div className="font-orbitron text-2xl font-bold text-neon-green">
                    {item.value}
                  </div>
                  <div className="font-mono text-xs text-muted-foreground mt-1">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
