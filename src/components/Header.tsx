import { Button } from "./ui/button";
import { ThemeToggle } from "./ThemeToggle";

interface HeaderProps {
  activeSection: string;
  onNavClick: (section: string) => void;
}

export function Header({ activeSection, onNavClick }: HeaderProps) {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex flex-col">
          <h1 className="text-xl font-bold">Santos, Jose Bernardo</h1>
          <p className="text-sm text-muted-foreground">Full Stack Developer</p>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant={activeSection === item.id ? "default" : "ghost"}
              onClick={() => onNavClick(item.id)}
              className="text-sm"
            >
              {item.label}
            </Button>
          ))}
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
              className="justify-start"
            >
              {item.label}
            </Button>
          ))}
        </div>
      </div>
    </header>
  );
}
