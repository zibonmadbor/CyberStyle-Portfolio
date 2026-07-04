/**
 * CyberNavBar — Fixed top navigation with cyber theme
 * Includes smooth scroll links and mobile hamburger menu
 */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Shield, Terminal } from "lucide-react";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Timeline", href: "#timeline" },
  { label: "Contact", href: "#contact" },
];

const CyberNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const id = href.replace("#", "");
    setActive(id);
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cyber-black/90 backdrop-blur-xl border-b border-neon-green/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNavClick("#home")}
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 border border-neon-green/70 flex items-center justify-center rounded group-hover:glow-green transition-all">
            <Shield className="w-4 h-4 text-neon-green" />
          </div>
          <span className="font-orbitron text-sm font-bold text-neon-green text-glow-green">
            J.MADBER
          </span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            return (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`font-mono text-xs uppercase tracking-widest transition-all duration-200 hover:text-neon-green ${
                  active === id
                    ? "text-neon-green text-glow-green"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </button>
            );
          })}
          <Link
            to="/resume"
            className="font-mono text-xs uppercase tracking-widest transition-all duration-200 hover:text-neon-green text-muted-foreground"
          >
            Resume
          </Link>
          <button
            onClick={() => handleNavClick("#contact")}
            className="btn-cyber-filled text-xs py-2 px-4"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-neon-green p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cyber-black/95 backdrop-blur-xl border-t border-neon-green/20"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left font-mono text-sm text-muted-foreground hover:text-neon-green transition-colors py-2 border-b border-neon-green/10"
                >
                  <span className="text-neon-green mr-2">{">"}</span>
                  {link.label}
                </button>
              ))}
              <Link
                to="/resume"
                onClick={() => setIsOpen(false)}
                className="text-left font-mono text-sm text-muted-foreground hover:text-neon-green transition-colors py-2 border-b border-neon-green/10"
              >
                <span className="text-neon-green mr-2">{">"}</span>
                Resume
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default CyberNavBar;
