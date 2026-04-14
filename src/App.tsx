import { useState, useEffect } from "react";
import { PageTransition } from "./components/PageTransition";
import { Header } from "./components/Header";
import { ProfileHeader } from "./components/ProfileHeader";
import { ProjectsSection2 } from "./components/ProjectsSection2";
import { MainProfile } from "./components/MainProfile";
import { LearningJourney } from "./components/LearningJourney";
import { ContactSection } from "./components/ContactSection";
import { ContactModal } from "./components/ContactModal";
import { CustomCursor } from "./components/CustomCursor";
import { Footer } from "./components/Footer";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { ScrollProgress } from "./components/ScrollProgress";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "certifications", "contact"];

      // Check if user has scrolled to the absolute bottom
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 20) {
        setActiveSection("contact");
        return;
      }

      // Otherwise find the section currently in the upper half of viewport
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2.5) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (section: string) => {
    const el = document.getElementById(section);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setActiveSection(section);
  };

  return (
    <div className="min-h-screen relative">
      <CustomCursor />
      <AnimatedBackground />
      <ScrollProgress />
      <Header 
        activeSection={activeSection} 
        onNavClick={handleNavClick} 
        onContactClick={() => setIsContactModalOpen(true)}
      />

      <main className="relative z-10 flex flex-col gap-24 pb-20">
        <section id="home" style={{ paddingTop: 'max(10vh, 120px)' }}>
          <PageTransition>
            <ProfileHeader />
          </PageTransition>
        </section>

        <section id="about">
          <PageTransition delay={0.2}>
            <MainProfile />
          </PageTransition>
        </section>

        <section id="projects">
          <PageTransition delay={0.25}>
            <ProjectsSection2 />
          </PageTransition>
        </section>

        <section id="certifications">
          <PageTransition delay={0.3}>
            <LearningJourney />
          </PageTransition>
        </section>

        <section id="contact">
          <PageTransition delay={0.35}>
            <ContactSection onContactClick={() => setIsContactModalOpen(true)} />
          </PageTransition>
        </section>
      </main>
      
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />

      {/** <Footer /> */}
    </div>
  );
}
