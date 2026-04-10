import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ThemeToggle";

interface HeaderProps {
  activeSection: string;
  onNavClick: (section: string) => void;
  onContactClick: () => void;
}

const whiteButtonStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  padding: '0.4rem 1.1rem',
  backgroundColor: 'var(--foreground)',
  color: 'var(--background)',
  fontSize: '0.7rem',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.15em',
  borderRadius: '4px',
  border: 'none',
  cursor: 'pointer',
  transition: 'opacity 0.2s',
};

export function Header({ activeSection, onNavClick, onContactClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" 
      style={{ 
        backgroundColor: `color-mix(in srgb, var(--background) 80%, transparent)`,
        backdropFilter: 'blur(8px)',
        borderBottom: isScrolled ? '1px solid var(--border)' : '1px solid transparent'
      }}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className={`flex flex-col transition-all duration-300 ${isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
          <h1 className="text-xl font-bold">Santos, Jose Bernardo</h1>
          <p className="text-sm text-muted-foreground">Full Stack Developer</p>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant={activeSection === item.id ? "default" : "ghost"}
              onClick={() => onNavClick(item.id)}
              className="text-sm uppercase tracking-widest font-bold"
            >
              {item.label}
            </Button>
          ))}

          {/* Distinct white Contact CTA */}
          <button
            onClick={onContactClick}
            style={whiteButtonStyle}
            onMouseOver={e => (e.currentTarget.style.opacity = '0.85')}
            onMouseOut={e => (e.currentTarget.style.opacity = '1')}
          >
            Contact Me
          </button>

          <ThemeToggle />
        </nav>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              const nav = document.getElementById("mobile-nav");
              nav?.classList.toggle("hidden");
            }}
          >
            Menu
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-nav"
        className="hidden md:hidden bg-background border-t border-border"
      >
        <div className="container mx-auto px-4 py-2 flex flex-col space-y-2">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant={activeSection === item.id ? "default" : "ghost"}
              onClick={() => {
                onNavClick(item.id);
                document.getElementById("mobile-nav")?.classList.add("hidden");
              }}
              className="justify-start uppercase tracking-widest font-bold"
            >
              {item.label}
            </Button>
          ))}

          {/* Distinct white Contact CTA - Mobile */}
          <button
            onClick={() => {
              onContactClick();
              document.getElementById("mobile-nav")?.classList.add("hidden");
            }}
            style={{ ...whiteButtonStyle, width: '100%', justifyContent: 'flex-start', padding: '0.5rem 1rem' }}
          >
            Contact
          </button>
        </div>
      </div>
    </header>
  );
}
