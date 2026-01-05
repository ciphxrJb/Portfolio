import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function MainProfile() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {/* LEFT COLUMN */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <Card>
                  <CardContent className="p-8">
                    <AboutBlock />
                  </CardContent>
                </Card>
              </div>

              <div className="mt-6">
                <Card>
                  <CardContent className="p-8">
                    <TechStackBlock />
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="lg:col-span-1 lg:mt-10 h-full flex flex-col">
              <Card className="h-full flex flex-col">
                <CardContent className="p-8 flex-1 flex flex-col justify-between">
                  <ExperienceBlock />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutBlock() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">About</h2>

      <p className="text-base leading-relaxed text-foreground">
        I’m a web developer focused on building modern, maintainable, and
        security-aware web applications. I care about clean architecture,
        performance, and writing code that’s easy to reason about.
      </p>

      <p className="text-muted-foreground leading-relaxed max-w-xl">
        I learn best by building real projects and iterating on them — turning
        ideas into working systems while continuously improving my backend and
        data-handling skills.
      </p>
    </div>
  );
}

function TechStackBlock() {
  return (
    <div className="space-y-8 text-sm">
      <h2 className="text-xl font-semibold flex items-center gap-2">
        <span>Tech Stack</span>
        {/* Example icon: <RocketIcon className="w-5 h-5" /> */}
      </h2>

      {/* Frontend */}
      <div className="mb-5">
        <p className="font-semibold mb-2 text-foreground">Frontend</p>
        <div className="flex flex-wrap gap-3">
          <span className="px-3 py-1 bg-muted rounded-md">HTML</span>
          <span className="px-3 py-1 bg-muted rounded-md">CSS</span>
          <span className="px-3 py-1 bg-muted rounded-md">JavaScript</span>
          <span className="px-3 py-1 bg-muted rounded-md">TypeScript</span>
          <span className="px-3 py-1 bg-muted rounded-md">React</span>
          <span className="px-3 py-1 bg-muted rounded-md">Next.js</span>
        </div>
      </div>
      {/* Backend & Data */}
      <div className="mb-5">
        <p className="font-semibold mb-2 text-foreground">Backend &amp; Data</p>
        <div className="flex flex-wrap gap-3">
          <span className="px-3 py-1 bg-muted rounded-md">Supabase</span>
          <span className="px-3 py-1 bg-muted rounded-md">REST APIs</span>
        </div>
      </div>
      {/* Tools */}
      <div className="mb-2">
        <p className="font-semibold mb-2 text-foreground">Tools</p>
        <div className="flex flex-wrap gap-3">
          <span className="px-3 py-1 bg-muted rounded-md">Git</span>
          <span className="px-3 py-1 bg-muted rounded-md">GitHub</span>
          <span className="px-3 py-1 bg-muted rounded-md">Vercel</span>
          <span className="px-3 py-1 bg-muted rounded-md">VS Code</span>
          <span className="px-3 py-1 bg-muted rounded-md">Cursor</span>
          <span className="px-3 py-1 bg-muted rounded-md">ChatGPT</span>
          <span className="px-3 py-1 bg-muted rounded-md">Figma</span>
        </div>
      </div>
    </div>
  );
}

function ExperienceBlock() {
  return (
    <div className="space-y-12">
      <h2 className="text-xl font-semibold">Experience</h2>

      <div className="space-y-8 text-sm">
        <div>
          <p className="font-medium">
            Finance Tracker{" "}
            <span className="text-muted-foreground">(Deployed)</span>
          </p>
          <p className="text-muted-foreground mt-1">
            React, Next.js, TypeScript, Supabase, APIs · Live on Vercel
          </p>
        </div>

        <div>
          <p className="font-medium">
            Portfolio Rebuild{" "}
            <span className="text-muted-foreground">(Current)</span>
          </p>
          <p className="text-muted-foreground mt-1">
            Design-focused rebuild with performance and accessibility in mind
          </p>
        </div>

        <div>
          <p className="font-medium">
            Client Portfolio Project{" "}
            <span className="text-muted-foreground">(In progress)</span>
          </p>
          <p className="text-muted-foreground mt-1">
            Vanilla HTML, CSS, and JavaScript
          </p>
        </div>

        <div>
          <p className="font-medium">Certifications & Self-Study</p>
          <p className="text-muted-foreground mt-1">
            Continuous learning through courses and hands-on implementation
          </p>
        </div>
      </div>
    </div>
  );
}
