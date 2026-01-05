import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Finance Tracker Web App",
    description:
      "Personal finance tracker focused on clean state management, secure data handling, and API-driven architecture.",
    stack: ["React", "Next.js", "TypeScript", "Supabase"],
    status: "Deployed",
    live: "#",
    source: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal site focused on clean UI, performance, and accessibility.",
    stack: ["React", "Tailwind", "TypeScript"],
    status: "Live",
    live: "#",
  },
  {
    title: "Login & Registration System",
    description: "Authentication flow with validation and backend logic.",
    stack: ["PHP", "HTML", "CSS"],
    status: "Completed",
    source: "#",
  },
];

export function ProjectsSection2() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl mb-3">Selected Projects</h2>
          <p className="text-muted-foreground max-w-2xl">
            A focused selection of real-world projects showcasing practical web
            development and continuous learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 auto-rows-fr">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="group relative flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Accent bar */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/80 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />

              <CardHeader className="space-y-3 pb-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl leading-tight">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="mt-2 max-w-[95%] leading-relaxed text-muted-foreground/90">
                      {project.description}
                    </CardDescription>
                  </div>

                  <Badge
                    variant="outline"
                    className="shrink-0 text-xs text-muted-foreground"
                  >
                    {project.status}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="flex flex-col flex-1">
                {/* Tech stack */}
                <div className="flex flex-wrap gap-3 pt-2">
                  {project.stack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="transition-all duration-200 group-hover:border-primary/60"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Actions */}
                <div className="mt-auto flex flex-wrap items-center gap-3 pt-4">
                  {project.live && (
                    <Button size="sm" className="gap-2 h-9 px-4">
                      <ExternalLink className="w-4 h-4" />
                      Live
                    </Button>
                  )}
                  {project.source && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="gap-2 h-9 px-4"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
