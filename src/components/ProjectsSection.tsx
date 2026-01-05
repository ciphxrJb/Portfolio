import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink, Github, Star, Rocket, BookOpen, Code2, Lightbulb } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ProjectsSection() {
  const featuredProjects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A fully responsive e-commerce website built with React and Next.js, featuring user authentication, shopping cart functionality, and payment integration.",
      image: "https://images.unsplash.com/photo-1657256031812-4702fe316f1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlLWNvbW1lcmNlJTIwd2Vic2l0ZSUyMGludGVyZmFjZXxlbnwxfHx8fDE3NTcyOTAzODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "PHP"],
      liveDemo: "#",
      sourceCode: "#",
      featured: true,
      status: "concept"
    },
    {
      id: 2,
      title: "Task Management Dashboard",
      description: "A comprehensive project management tool with drag-and-drop functionality, real-time updates, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1676276375900-dd41f828c985?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXNrJTIwbWFuYWdlbWVudCUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTcyODk2MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["React", "JavaScript", "CSS", "Bootstrap"],
      liveDemo: "#",
      sourceCode: "#",
      featured: true,
      status: "concept"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing development skills and projects with smooth animations and interactive elements.",
      image: "https://images.unsplash.com/photo-1565687981296-535f09db714e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXNrJTIwbWFuYWdlbWVudCUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTcyODk2MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Motion"],
      liveDemo: "#",
      sourceCode: "#",
      featured: true,
      status: "live"
    }
  ];

  const learningProjects = [
    {
      id: 4,
      title: "Weather App",
      description: "A clean weather application with location-based forecasts and beautiful UI animations.",
      technologies: ["JavaScript", "HTML", "CSS", "Weather API"],
      sourceCode: "#",
      status: "learning"
    },
    {
      id: 5,
      title: "Calculator App",
      description: "A fully functional calculator with advanced operations and responsive design.",
      technologies: ["JavaScript", "HTML", "CSS"],
      sourceCode: "#",
      status: "completed"
    },
    {
      id: 6,
      title: "Todo List Application",
      description: "A task management app with local storage and intuitive user interface.",
      technologies: ["React", "JavaScript", "CSS"],
      sourceCode: "#",
      status: "completed"
    }
  ];

  const upcomingProjects = [
    {
      id: 7,
      title: "Cybersecurity Dashboard",
      description: "A security monitoring dashboard showcasing my Information Security specialization.",
      technologies: ["React", "TypeScript", "Chart.js", "Security APIs"],
      status: "planning"
    },
    {
      id: 8,
      title: "Student Portal System",
      description: "A comprehensive student management system with authentication and grade tracking.",
      technologies: ["Next.js", "PHP", "MySQL", "Tailwind CSS"],
      status: "planning"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "live":
        return <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">🚀 Live</Badge>;
      case "concept":
        return <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">💡 Concept</Badge>;
      case "learning":
        return <Badge className="bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300">📚 Learning</Badge>;
      case "completed":
        return <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300">✅ Done</Badge>;
      case "planning":
        return <Badge className="bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300">🎯 Planned</Badge>;
      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background via-secondary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
              <Rocket className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">My Work</span>
            </div>
            <h2 className="text-3xl md:text-4xl mb-4">
              Projects & <span className="text-primary">Learning Journey</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              As a student developer, I'm constantly learning and building. Here's a mix of 
              completed projects, concepts I'm working on, and future plans! 🌟
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-8">
              <Star className="w-5 h-5 text-yellow-500" />
              <h3 className="text-2xl">Featured Concepts & Showcase</h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <Card key={project.id} className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="aspect-video overflow-hidden rounded-t-lg relative">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3">
                      {getStatusBadge(project.status)}
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      {project.title}
                      {project.status === "concept" && <Lightbulb className="w-4 h-4 text-yellow-500" />}
                    </CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      {project.status === "live" ? (
                        <Button size="sm" className="flex items-center gap-2">
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </Button>
                      ) : (
                        <Button size="sm" variant="outline" disabled className="opacity-50">
                          Coming Soon
                        </Button>
                      )}
                      <Button size="sm" variant="outline" className="flex items-center gap-2">
                        <Github className="w-4 h-4" />
                        {project.status === "concept" ? "Planning" : "Code"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Learning Projects */}
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-8">
              <BookOpen className="w-5 h-5 text-blue-500" />
              <h3 className="text-2xl">Learning & Practice Projects</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {learningProjects.map((project) => (
                <Card key={project.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center justify-between">
                      {project.title}
                      {getStatusBadge(project.status)}
                    </CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button size="sm" variant="outline" className="flex items-center gap-2">
                      <Github className="w-4 h-4" />
                      View Code
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Upcoming Projects */}
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-8">
              <Code2 className="w-5 h-5 text-green-500" />
              <h3 className="text-2xl">Upcoming Projects</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {upcomingProjects.map((project) => (
                <Card key={project.id} className="border-dashed border-2 hover:border-solid transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center justify-between">
                      {project.title}
                      {getStatusBadge(project.status)}
                    </CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button size="sm" variant="ghost" disabled className="opacity-50">
                      In Planning Phase
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-2">Want to collaborate on a project? 🚀</h3>
            <p className="text-muted-foreground mb-6">
              I'm always excited to work on new projects and learn from real-world applications!
              <br />
              <span className="text-sm">💡 Fresh ideas • 🔥 Passion for learning • ⚡ Quick to adapt</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="flex items-center gap-2">
                <Github className="w-4 h-4" />
                Visit My GitHub
              </Button>
              <Button variant="outline">
                Let's Build Something Together
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}