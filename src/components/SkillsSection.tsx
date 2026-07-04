/**
 * SkillsSection — Terminal-style skill cards with animated neon progress bars
 * Categories: MERN Stack, Cyber Security, Tools
 */
import { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Shield, Wrench } from "lucide-react";

interface Skill {
  name: string;
  level: number;
  fill: "green" | "cyan" | "purple";
}

const skillCategories = [
  {
    title: "MERN Stack",
    icon: Code2,
    color: "neon-border-green",
    titleColor: "text-neon-green",
    fill: "green" as const,
    skills: [
      { name: "MongoDB", level: 88, fill: "green" as const },
      { name: "Express.js", level: 85, fill: "green" as const },
      { name: "React.js", level: 92, fill: "green" as const },
      { name: "Node.js", level: 87, fill: "green" as const },
      { name: "TypeScript", level: 80, fill: "green" as const },
    ],
  },
  {
    title: "Cyber Security",
    icon: Shield,
    color: "neon-border-cyan",
    titleColor: "text-neon-cyan",
    fill: "cyan" as const,
    skills: [
      { name: "Ethical Hacking", level: 82, fill: "cyan" as const },
      { name: "Web Security", level: 85, fill: "cyan" as const },
      { name: "Penetration Testing", level: 78, fill: "cyan" as const },
      { name: "OWASP Top 10", level: 90, fill: "cyan" as const },
      { name: "Network Security", level: 75, fill: "cyan" as const },
    ],
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    color: "neon-border-purple",
    titleColor: "text-neon-purple",
    fill: "purple" as const,
    skills: [
      { name: "Git / GitHub", level: 92, fill: "purple" as const },
      { name: "Docker", level: 70, fill: "purple" as const },
      { name: "Linux / Kali", level: 85, fill: "purple" as const },
      { name: "Burp Suite", level: 80, fill: "purple" as const },
      { name: "Nmap / Postman", level: 78, fill: "purple" as const },
    ],
  },
];

interface SkillBarProps {
  skill: Skill;
  index: number;
}

const fillColors = {
  green: {
    background: "linear-gradient(90deg, hsl(152 100% 50% / 0.7), hsl(152 100% 50%))",
    boxShadow: "0 0 10px hsl(152 100% 50% / 0.8)",
  },
  cyan: {
    background: "linear-gradient(90deg, hsl(191 100% 50% / 0.7), hsl(191 100% 50%))",
    boxShadow: "0 0 10px hsl(191 100% 50% / 0.8)",
  },
  purple: {
    background: "linear-gradient(90deg, hsl(258 90% 66% / 0.7), hsl(258 90% 66%))",
    boxShadow: "0 0 10px hsl(258 90% 66% / 0.8)",
  },
};

const SkillBar = ({ skill, index }: SkillBarProps) => {
  const [inView, setInView] = useState(false);
  const colors = fillColors[skill.fill];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      onViewportEnter={() => setInView(true)}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="space-y-1"
    >
      <div className="flex justify-between items-center font-mono text-xs">
        <span className="text-foreground">{skill.name}</span>
        <span
          className={
            skill.fill === "green"
              ? "text-neon-green"
              : skill.fill === "cyan"
              ? "text-neon-cyan"
              : "text-neon-purple"
          }
        >
          {skill.level}%
        </span>
      </div>
      <div className="neon-progress-track">
        <div
          style={{
            width: inView ? `${skill.level}%` : "0%",
            height: "100%",
            borderRadius: "4px",
            background: colors.background,
            boxShadow: colors.boxShadow,
            transition: `width 1.2s ease-out ${index * 0.1}s`,
          }}
        />
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-24 px-4">
      {/* Subtle bg accent */}
      <div className="absolute inset-0 cyber-grid bg-grid-60 opacity-30" />

      <div className="relative max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-foreground mt-2">
            <span className="text-neon-green">&lt;</span>Skills<span className="text-neon-green">/&gt;</span>
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-neon-green to-transparent mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.15 }}
                className={`terminal-card ${category.color} overflow-hidden`}
              >
                {/* Card header */}
                <div className="terminal-header">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-neon-green/60" />
                  </div>
                  <Icon className={`w-4 h-4 ${category.titleColor} ml-2`} />
                  <span className={`font-mono text-xs ${category.titleColor} tracking-wide`}>
                    {category.title}
                  </span>
                </div>

                <div className="p-5 space-y-4">
                  {category.skills.map((skill, i) => (
                    <SkillBar key={skill.name} skill={skill} index={i} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Extra tech badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          {[
            "REST API", "GraphQL", "JWT Auth", "Metasploit", "SQLMap",
            "Wireshark", "Nginx", "Redis", "AWS", "Figma",
          ].map((tech) => (
            <span
              key={tech}
              className="glass-card neon-border-green px-3 py-1.5 font-mono text-xs text-neon-green hover:glow-green transition-all cursor-default"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
