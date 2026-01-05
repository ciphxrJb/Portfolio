import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import {
  GraduationCap,
  Code,
  Users,
  Lightbulb,
  MessageCircle,
  Target,
  BookOpen,
  Briefcase,
  Star,
  TrendingUp,
  Zap,
  Heart,
} from "lucide-react";
import { useEffect, useState } from "react";

export function AboutSection() {
  const [skillProgress, setSkillProgress] = useState<Record<string, number>>(
    {}
  );
  const [hasEntered, setHasEntered] = useState(false);

  const technicalSkills = [
    {
      category: "Frontend Development",
      skills: [
        { name: "HTML/CSS", level: 80, color: "from-orange-500 to-red-500" },
        {
          name: "JavaScript",
          level: 70,
          color: "from-yellow-500 to-orange-500",
        },
        { name: "TypeScript", level: 70, color: "from-blue-500 to-indigo-500" },
        { name: "React", level: 70, color: "from-cyan-500 to-blue-500" },
        { name: "Next.js", level: 50, color: "from-gray-700 to-gray-900" },
        { name: "Tailwind CSS", level: 50, color: "from-teal-500 to-cyan-500" },
      ],
    },
    {
      category: "Backend Development",
      skills: [
        { name: "PHP", level: 40, color: "from-purple-500 to-indigo-500" },
        { name: "C/C++", level: 60, color: "from-blue-600 to-purple-600" },
        {
          name: "Database Design",
          level: 20,
          color: "from-green-500 to-teal-500",
        },
      ],
    },
    {
      category: "Tools & Technologies",
      skills: [
        { name: "Git/GitHub", level: 30, color: "from-gray-600 to-gray-800" },
        { name: "VS Code", level: 75, color: "from-blue-500 to-cyan-500" },
        { name: "Figma", level: 70, color: "from-pink-500 to-purple-500" },
      ],
    },
  ];

  const softSkills = [
    {
      name: "Problem Solving",
      icon: Lightbulb,
      description: "Breaking down complex problems into manageable solutions",
      level: 85,
    },
    {
      name: "Communication",
      icon: MessageCircle,
      description: "Clear documentation and client interaction skills",
      level: 80,
    },
    {
      name: "Quick Learning",
      icon: TrendingUp,
      description: "Rapidly adapting to new technologies and frameworks",
      level: 90,
    },
    {
      name: "Attention to Detail",
      icon: Target,
      description: "Writing clean, maintainable, and efficient code",
      level: 85,
    },
  ];

  useEffect(() => {
    if (!hasEntered) return;

    const timer = setTimeout(() => {
      const progress: Record<string, number> = {};
      technicalSkills.forEach((category) => {
        category.skills.forEach((skill) => {
          progress[skill.name] = skill.level;
        });
      });
      setSkillProgress(progress);
    }, 300);

    return () => clearTimeout(timer);
  }, [hasEntered]);

  return (
    <section
      className="py-20 bg-gradient-to-br from-secondary/5 via-background to-primary/5 relative"
      ref={(el) => {
        if (!el || hasEntered) return;
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setHasEntered(true);
              observer.disconnect();
            }
          },
          { threshold: 0.3 }
        );
        observer.observe(el);
      }}
    >
      {/* Ambient visual (right side) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute right-[-15%] top-1/4 w-[500px] h-[500px] rounded-full 
bg-gradient-to-br from-primary/20 via-purple-500/10 to-transparent 
blur-[120px] animate-float-slow"
        />
      </div>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
              <Star className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">About Me</span>
            </div>
            <h2 className="text-3xl md:text-4xl mb-4">
              Passionate About{" "}
              <span className="text-primary">Code & Security</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A dedicated 3rd year BSIT student with a burning passion for web
              development and cybersecurity. Ready to bring fresh ideas to your
              next project! 🚀
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Education & Status */}
            <Card className="lg:col-span-1 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  My Journey
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen className="w-4 h-4 text-primary" />
                    <h4 className="font-semibold">Education</h4>
                  </div>
                  <h5 className="font-medium text-sm">
                    Bachelor of Science in Information Technology
                  </h5>
                  <p className="text-sm text-muted-foreground">
                    🛡️ Major: Information Security
                  </p>
                  <p className="text-sm text-muted-foreground">
                    📅 Currently 3rd Year
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 p-4 rounded-lg border border-green-200 dark:border-green-800">
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="w-4 h-4 text-green-600" />
                    <h4 className="font-semibold text-green-800 dark:text-green-200">
                      Freelance Status
                    </h4>
                  </div>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    ✨ Available for freelance projects
                    <br />
                    💼 Seeking exciting opportunities
                    <br />
                    🎯 Ready to learn and deliver
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground text-sm">
                      📍 Location
                    </span>
                    <span className="text-sm">Philippines</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground text-sm">
                      🎯 Focus
                    </span>
                    <span className="text-sm">Full Stack Development</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground text-sm">
                      🚀 Availability
                    </span>
                    <span className="text-sm text-green-600 font-medium">
                      Open to Work
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Technical Skills */}
            <Card className="lg:col-span-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-primary" />
                  Technical Arsenal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {technicalSkills.map((category) => (
                    <div key={category.category}>
                      <h4 className="font-semibold mb-4 flex items-center gap-2">
                        <Zap className="w-4 h-4 text-primary" />
                        {category.category}
                      </h4>
                      <div className="grid gap-3">
                        {category.skills.map((skill) => (
                          <div key={skill.name} className="space-y-1 group">
                            <div className="flex justify-between items-center">
                              <span className="text-sm font-medium group-hover:text-primary transition-colors">
                                {skill.name}
                              </span>

                              <span className="text-xs text-muted-foreground group-hover:hidden">
                                {skill.level}%
                              </span>

                              <span className="hidden group-hover:block text-xs text-muted-foreground">
                                Hands-on experience
                              </span>
                            </div>

                            <div className="relative bg-muted/30 h-2 rounded-full overflow-hidden">
                              <div
                                className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                                style={{
                                  width: `${skillProgress[skill.name] || 0}%`,
                                }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Soft Skills */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-2xl mb-2 flex items-center justify-center gap-2">
                <Heart className="w-6 h-6 text-primary" />
                Soft Skills & Strengths
              </h3>
              <p className="text-muted-foreground">
                The human side of development
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {softSkills.map((skill) => (
                <Card
                  key={skill.name}
                  className="text-center hover:scale-105 transition-transform group"
                >
                  <CardContent className="pt-6">
                    <div className="mb-4 group-hover:scale-110 transition-transform">
                      <skill.icon className="w-12 h-12 mx-auto text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">{skill.name}</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      {skill.description}
                    </p>
                    <div className="w-full bg-secondary rounded-full h-1">
                      <div
                        className="bg-primary h-1 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground mt-1 block">
                      {skill.level}%
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-2">
              Ready to collaborate? 🤝
            </h3>
            <p className="text-muted-foreground mb-4">
              I'm always excited to work on new projects and learn from
              experienced developers!
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                Quick Learner
              </Badge>
              <Badge
                variant="secondary"
                className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
              >
                Available Now
              </Badge>
              <Badge
                variant="secondary"
                className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
              >
                Fresh Perspective
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
