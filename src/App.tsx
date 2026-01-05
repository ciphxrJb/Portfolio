import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AboutSection2 } from "./components/AboutSection2";
import { ProjectsSection } from "./components/ProjectsSection";
import { ProfileHeader } from "./components/ProfileHeader";
import { ProjectsSection2 } from "./components/ProjectsSection2";
import { MainProfile } from "./components/MainProfile";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { SnapshotGrid } from "./components/SnapshotGrid";
import { ScrollProgress } from "./components/ScrollProgress";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];

      for (const section of sections) {
        const el = document.getElementById(section);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
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
      <AnimatedBackground />
      <ScrollProgress />
      <Header activeSection={activeSection} onNavClick={handleNavClick} />

      <main className="relative z-10">
        <section id="home">
          <ProfileHeader />
        </section>

        <section id="about">
          <MainProfile />
        </section>

        <section id="projects">
          <ProjectsSection2 />
        </section>

        <section id="contact">
          <ContactSection />
        </section>

        {/* <section id="home">
          <HeroSection setActiveSection={setActiveSection} />
        </section>  

        <section id="">
          <SnapshotGrid />
        </section>

        <section id="about">
          <AboutSection />
        </section>

        <section id="projects">
          <ProjectsSection />
        </section>

        > */}
      </main>

      {/** <Footer /> */}
    </div>
  );
}
