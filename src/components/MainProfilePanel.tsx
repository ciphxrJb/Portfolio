import { Badge } from "./ui/badge";

export function MainProfilePanel() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14">
          {/* LEFT — About + Tech */}
          <div className="space-y-10">
            {/* About */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">About</h2>

              <p className="text-muted-foreground leading-relaxed">
                I’m a web developer focused on building modern, maintainable,
                and secure web applications. My work emphasizes clean
                architecture, performance, and security-aware development
                practices.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                I’m currently applying my skills through real-world projects
                using React, Next.js, TypeScript, and APIs, while continuously
                expanding my backend knowledge and understanding of secure data
                handling.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Tech Stack</h2>

              <div className="space-y-3">
                <p className="text-sm font-medium">Frontend</p>
                <p className="text-sm text-muted-foreground">
                  HTML, CSS, JavaScript, TypeScript, React, Next.js
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-sm font-medium">Backend & Data</p>
                <p className="text-sm text-muted-foreground">
                  Supabase, REST APIs
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-sm font-medium">Tools</p>
                <p className="text-sm text-muted-foreground">
                  Git, GitHub, Vercel, VS Code, Figma
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT — Experience / Activity */}
          <div className="space-y-8">
            <h2 className="text-xl font-semibold">Experience</h2>

            <div className="space-y-6 border-l border-border pl-6">
              {/* Item */}
              <div className="relative">
                <span className="absolute -left-[9px] top-1 w-3 h-3 rounded-full bg-primary" />
                <p className="font-medium">Finance Tracker (Deployed)</p>
                <p className="text-sm text-muted-foreground">
                  React, Next.js, TypeScript, Supabase, APIs · Live on Vercel
                </p>
              </div>

              {/* Item */}
              <div className="relative">
                <span className="absolute -left-[9px] top-1 w-3 h-3 rounded-full bg-muted-foreground" />
                <p className="font-medium">Portfolio Rebuild (Current)</p>
                <p className="text-sm text-muted-foreground">
                  Design-focused rebuild with performance and accessibility in
                  mind
                </p>
              </div>

              {/* Item */}
              <div className="relative">
                <span className="absolute -left-[9px] top-1 w-3 h-3 rounded-full bg-muted-foreground" />
                <p className="font-medium">Client Portfolio Project</p>
                <p className="text-sm text-muted-foreground">
                  Vanilla HTML, CSS, and JavaScript · In progress
                </p>
              </div>

              {/* Item */}
              <div className="relative">
                <span className="absolute -left-[9px] top-1 w-3 h-3 rounded-full bg-muted-foreground" />
                <p className="font-medium">Certifications & Self-Study</p>
                <p className="text-sm text-muted-foreground">
                  Continuous learning with hands-on implementation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
