/**
 * ProjectsSection — Cyber dashboard style project cards
 * with hover glitch animation, live demo and GitHub links
 */
import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Shield, ShoppingCart, LayoutDashboard, Bug } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce MERN Platform",
    subtitle: "Full Stack Web App",
    description:
      "Feature-rich e-commerce platform with product management, cart, payment integration (SSLCommerz), JWT auth, and admin panel. Built with React, Node, Express & MongoDB.",
    icon: ShoppingCart,
    tags: ["React", "Node.js", "MongoDB", "Redux", "SSLCommerz"],
    color: "green",
    demo: "#",
    github: "#",
    status: "LIVE",
  },
  {
    id: 2,
    title: "Admin Panel Dashboard",
    subtitle: "Analytics & Management",
    description:
      "Real-time admin dashboard with user analytics, chart visualizations, role-based access control, and full CRUD operations. Dark-themed with responsive design.",
    icon: LayoutDashboard,
    tags: ["React", "Recharts", "Node.js", "JWT", "TailwindCSS"],
    color: "cyan",
    demo: "#",
    github: "#",
    status: "LIVE",
  },
  {
    id: 3,
    title: "Cyber Security Audit Tool",
    subtitle: "Security Automation",
    description:
      "Web-based security audit tool that performs automated vulnerability scanning, OWASP checks, and generates detailed PDF security reports for target websites.",
    icon: Shield,
    tags: ["Python", "React", "OWASP", "Node.js", "PDF-gen"],
    color: "purple",
    demo: "#",
    github: "#",
    status: "BETA",
  },
  {
    id: 4,
    title: "Penetration Testing Report System",
    subtitle: "Security Reporting",
    description:
      "Professional platform for generating structured penetration testing reports with severity ratings, CVSS scores, remediation steps, and collaborative team features.",
    icon: Bug,
    tags: ["React", "MongoDB", "Express", "Node.js", "CVSS"],
    color: "green",
    demo: "#",
    github: "#",
    status: "DEV",
  },
];

type ColorKey = "green" | "cyan" | "purple";

const colorMap: Record<ColorKey, { border: string; title: string; tag: string; status: string; glow: string }> = {
  green: {
    border: "neon-border-green",
    title: "text-neon-green",
    tag: "border-neon-green/30 text-neon-green/80",
    status: "bg-neon-green/10 text-neon-green border border-neon-green/30",
    glow: "hover:glow-green",
  },
  cyan: {
    border: "neon-border-cyan",
    title: "text-neon-cyan",
    tag: "border-neon-cyan/30 text-neon-cyan/80",
    status: "bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30",
    glow: "hover:glow-cyan",
  },
  purple: {
    border: "neon-border-purple",
    title: "text-neon-purple",
    tag: "border-neon-purple/30 text-neon-purple/80",
    status: "bg-neon-purple/10 text-neon-purple border border-neon-purple/30",
    glow: "hover:glow-purple",
  },
};

const ProjectsSection = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="projects" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-foreground mt-2">
            <span className="text-neon-green">&lt;</span>Projects<span className="text-neon-green">/&gt;</span>
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-neon-green to-transparent mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => {
            const colors = colorMap[project.color as ColorKey];
            const Icon = project.icon;
            const isHovered = hovered === project.id;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                onMouseEnter={() => setHovered(project.id)}
                onMouseLeave={() => setHovered(null)}
                className={`glass-card ${colors.border} ${colors.glow} p-6 transition-all duration-300 relative overflow-hidden group cursor-default`}
              >
                {/* Glitch hover effect overlay */}
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: `linear-gradient(135deg, hsl(var(--${project.color === "green" ? "neon-green" : project.color === "cyan" ? "neon-cyan" : "neon-purple"}) / 0.04), transparent)`,
                    }}
                  />
                )}

                {/* Header row */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 glass-card ${colors.border} flex items-center justify-center`}>
                      <Icon className={`w-5 h-5 ${colors.title}`} />
                    </div>
                    <div>
                      <h3
                        className={`font-orbitron text-sm font-bold ${colors.title} ${
                          isHovered ? "glitch" : ""
                        }`}
                        data-text={project.title}
                      >
                        {project.title}
                      </h3>
                      <p className="font-mono text-xs text-muted-foreground">{project.subtitle}</p>
                    </div>
                  </div>
                  <span className={`font-mono text-xs px-2 py-0.5 rounded ${colors.status}`}>
                    {project.status}
                  </span>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 font-inter">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`font-mono text-xs px-2 py-0.5 border rounded ${colors.tag}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.demo}
                    className={`btn-cyber text-xs py-2 px-4 flex items-center gap-2 ${
                      project.color === "green"
                        ? "btn-cyber-filled"
                        : project.color === "cyan"
                        ? "btn-cyber-cyan"
                        : "border border-neon-purple text-neon-purple hover:bg-neon-purple/10"
                    }`}
                  >
                    <ExternalLink className="w-3 h-3" />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="btn-cyber-green text-xs py-2 px-4 flex items-center gap-2"
                  >
                    <Github className="w-3 h-3" />
                    GitHub
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
