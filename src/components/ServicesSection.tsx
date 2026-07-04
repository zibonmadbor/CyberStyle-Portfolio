/**
 * ServicesSection — Futuristic neon cards for offered services
 */
import { motion } from "framer-motion";
import { Globe, Code2, Shield, Search, Wrench, Zap } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Modern, responsive websites built with cutting-edge technologies. From landing pages to complex web apps.",
    color: "green",
    features: ["Responsive Design", "SEO Optimized", "Fast Performance"],
  },
  {
    icon: Code2,
    title: "MERN Stack Development",
    description:
      "Full-stack applications using MongoDB, Express, React, and Node.js with clean, scalable architecture.",
    color: "cyan",
    features: ["REST & GraphQL APIs", "JWT Authentication", "Real-time Features"],
  },
  {
    icon: Shield,
    title: "Cyber Security Consulting",
    description:
      "Expert security consulting to identify vulnerabilities and implement robust defense strategies.",
    color: "purple",
    features: ["Threat Assessment", "Security Roadmap", "Compliance Review"],
  },
  {
    icon: Search,
    title: "Website Security Audit",
    description:
      "Comprehensive security audits including OWASP Top 10 checks, vulnerability scanning and detailed reports.",
    color: "green",
    features: ["OWASP Top 10", "Detailed Reports", "Remediation Steps"],
  },
  {
    icon: Wrench,
    title: "Bug Fixing & Optimization",
    description:
      "Diagnose and fix existing bugs, performance issues, and security flaws in your current application.",
    color: "cyan",
    features: ["Performance Tuning", "Code Review", "Security Patches"],
  },
  {
    icon: Zap,
    title: "Penetration Testing",
    description:
      "Simulated ethical hacking to uncover exploitable vulnerabilities before malicious actors do.",
    color: "purple",
    features: ["Black/White Box", "Full Report", "CVSS Scoring"],
  },
];

type ColorKey = "green" | "cyan" | "purple";

const colorClasses: Record<ColorKey, { border: string; icon: string; tag: string; dot: string }> = {
  green: {
    border: "neon-border-green",
    icon: "text-neon-green",
    tag: "bg-neon-green/10 text-neon-green",
    dot: "bg-neon-green",
  },
  cyan: {
    border: "neon-border-cyan",
    icon: "text-neon-cyan",
    tag: "bg-neon-cyan/10 text-neon-cyan",
    dot: "bg-neon-cyan",
  },
  purple: {
    border: "neon-border-purple",
    icon: "text-neon-purple",
    tag: "bg-neon-purple/10 text-neon-purple",
    dot: "bg-neon-purple",
  },
};

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-24 px-4">
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
            <span className="text-neon-green">&lt;</span>Services<span className="text-neon-green">/&gt;</span>
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-neon-green to-transparent mx-auto mt-4" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            const colors = colorClasses[service.color as ColorKey];

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className={`glass-card ${colors.border} p-6 group transition-all duration-300 relative overflow-hidden`}
              >
                {/* Top line accent */}
                <div
                  className={`absolute top-0 left-0 right-0 h-px ${colors.dot} opacity-60`}
                />

                {/* Icon */}
                <div
                  className={`w-12 h-12 glass-card ${colors.border} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon className={`w-6 h-6 ${colors.icon}`} />
                </div>

                {/* Title */}
                <h3 className={`font-orbitron text-sm font-bold ${colors.icon} mb-2 uppercase tracking-wide`}>
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed font-inter mb-4">
                  {service.description}
                </p>

                {/* Features list */}
                <ul className="space-y-1.5">
                  {service.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 font-mono text-xs">
                      <span className={`w-1.5 h-1.5 rounded-full ${colors.dot} flex-shrink-0`} />
                      <span className="text-muted-foreground">{feat}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
