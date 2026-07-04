/**
 * TimelineSection — Animated digital timeline for Experience & Education
 */
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Calendar } from "lucide-react";

const timelineItems = [
  {
    type: "education",
    icon: GraduationCap,
    period: "2022 – Present",
    title: "BSc in Computer Science & Engineering",
    org: "Green University of Bangladesh",
    color: "green",
    description:
      "Studying core CS fundamentals, algorithms, data structures, networking, and software engineering. Specializing in web development and cyber security.",
  },
  {
    type: "experience",
    icon: Briefcase,
    period: "2023 – Present",
    title: "MERN Stack Developer",
    org: "Freelance / Remote",
    color: "cyan",
    description:
      "Building full-stack web applications for clients using MongoDB, Express.js, React, and Node.js. Delivered 15+ production projects with a focus on security and performance.",
  },
  {
    type: "experience",
    icon: Briefcase,
    period: "2023 – 2024",
    title: "Cyber Security Trainee",
    org: "Self-Directed / Online Platforms",
    color: "green",
    description:
      "Completed intensive cyber security training covering ethical hacking, web application security, penetration testing, and OWASP vulnerabilities through TryHackMe, HackTheBox and other platforms.",
  },
];

type ColorKey = "green" | "cyan" | "purple";

const colorClasses: Record<ColorKey, { border: string; icon: string; dot: string; badge: string }> = {
  green: {
    border: "neon-border-green",
    icon: "text-neon-green",
    dot: "bg-neon-green border-neon-green",
    badge: "bg-neon-green/10 text-neon-green border-neon-green/30",
  },
  cyan: {
    border: "neon-border-cyan",
    icon: "text-neon-cyan",
    dot: "bg-neon-cyan border-neon-cyan",
    badge: "bg-neon-cyan/10 text-neon-cyan border-neon-cyan/30",
  },
  purple: {
    border: "neon-border-purple",
    icon: "text-neon-purple",
    dot: "bg-neon-purple border-neon-purple",
    badge: "bg-neon-purple/10 text-neon-purple border-neon-purple/30",
  },
};

const TimelineSection = () => {
  return (
    <section id="timeline" className="relative py-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-foreground mt-2">
            <span className="text-neon-green">&lt;</span>Timeline<span className="text-neon-green">/&gt;</span>
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-neon-green to-transparent mx-auto mt-4" />
        </motion.div>

        {/* Legend */}
        <div className="flex justify-center gap-6 mb-10">
          <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <GraduationCap className="w-4 h-4 text-neon-green" />
            Education
          </div>
          <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <Briefcase className="w-4 h-4 text-neon-cyan" />
            Experience
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-green/50 via-neon-cyan/30 to-neon-purple/20 -translate-x-1/2" />

          <div className="space-y-10">
            {timelineItems.map((item, i) => {
              const Icon = item.icon;
              const colors = colorClasses[item.color as ColorKey];
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`relative flex ${isLeft ? "justify-start" : "justify-end"}`}
                >
                  {/* Card */}
                  <div className={`w-full md:w-5/12 ${isLeft ? "md:mr-auto" : "md:ml-auto"}`}>
                    <div className={`glass-card ${colors.border} p-5 relative`}>
                      {/* Period badge */}
                      <div className={`inline-flex items-center gap-1 font-mono text-xs px-2 py-0.5 rounded border mb-3 ${colors.badge}`}>
                        <Calendar className="w-3 h-3" />
                        {item.period}
                      </div>

                      <div className="flex items-center gap-2 mb-1">
                        <Icon className={`w-4 h-4 ${colors.icon}`} />
                        <h3 className={`font-orbitron text-xs font-bold ${colors.icon} uppercase tracking-wide`}>
                          {item.title}
                        </h3>
                      </div>

                      <p className="font-mono text-xs text-muted-foreground mb-2">{item.org}</p>
                      <p className="text-sm text-muted-foreground font-inter leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div
                    className={`absolute left-1/2 top-6 w-4 h-4 rounded-full ${colors.dot} border-2 -translate-x-1/2 z-10 animate-neon-pulse`}
                    style={{ boxShadow: `0 0 8px currentColor` }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
