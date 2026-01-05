import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  setActiveSection: (section: string) => void;
}

export function HeroSection({ setActiveSection }: HeroSectionProps) {
  return (
    <section id="home" className="min-h-screen flex items-center relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
            Full Stack Developer • Security-Focused
          </p>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Jose Bernardo <br />
            <span className="text-primary">Santos</span>
          </h1>

          {/* Value proposition */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            I build modern, secure, and scalable web applications.
            <br className="hidden sm:block" />
            BSIT student majoring in{" "}
            <span className="text-foreground font-medium">
              Information Security
            </span>
            , open to freelance and collaborations.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={() => setActiveSection("projects")}
              className="flex items-center gap-2"
            >
              View Projects
              <ArrowRight className="w-4 h-4" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => setActiveSection("contact")}
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
