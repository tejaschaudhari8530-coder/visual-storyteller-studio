import ViewfinderOverlay from "@/components/ViewfinderOverlay";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <ViewfinderOverlay />
    <Navbar />
    <HeroSection />
    <AboutSection />
    <EducationSection />
    <ExperienceSection />
    <SkillsSection />
    <PortfolioSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
