import { Github, Linkedin, Twitter, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background text-foreground py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 opacity-90">
                Santos, Jose Bernardo
              </h3>
              <p className="text-sm opacity-90">
                Full Stack Developer passionate about creating innovative web
                solutions and learning new technologies.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 opacity-90">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <div>
                  <a
                    href="#home"
                    className="opacity-90 hover:opacity-100 transition-opacity"
                  >
                    Home
                  </a>
                </div>
                <div>
                  <a
                    href="#about"
                    className="opacity-90 hover:opacity-100 transition-opacity"
                  >
                    About
                  </a>
                </div>
                <div>
                  <a
                    href="#projects"
                    className="opacity-90 hover:opacity-100 transition-opacity"
                  >
                    Projects
                  </a>
                </div>
                <div>
                  <a
                    href="#contact"
                    className="opacity-90 hover:opacity-100 transition-opacity"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 opacity-90">Connect</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/josebernardo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/josebernardosantos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com/josebernardo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 text-center">
            <p className="text-sm opacity-90 flex items-center justify-center gap-2">
              © {currentYear} Santos, Jose Bernardo. Made with{" "}
              <Heart className="w-4 h-4 text-red-400" /> using React & Tailwind
              CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
