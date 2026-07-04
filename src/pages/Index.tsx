/**
 * Index — Main portfolio page
 * Assembles all sections with Matrix rain background and navbar
 */
import MatrixRain from "@/components/MatrixRain";
import CyberNavBar from "@/components/CyberNavBar";
import CursorGlow from "@/components/CursorGlow";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";
import TimelineSection from "@/components/TimelineSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Neon cursor glow trail */}
      <CursorGlow />

      {/* Matrix rain canvas — fixed background layer */}
      <MatrixRain />

      {/* Sticky top navigation */}
      <CyberNavBar />

      {/* All portfolio sections */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ServicesSection />
        <TimelineSection />
        <ContactSection />
      </main>

      <FooterSection />
    </div>
  );
};

export default Index;
