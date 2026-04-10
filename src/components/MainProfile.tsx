import { Monitor, Database, Terminal, Cpu, Zap, Layout } from "lucide-react";

export function MainProfile() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }}>
          
          {/* 01 STORY SECTION */}
          <div style={{ position: 'relative' }}>
            {/* COMPACT HEADER AT ROOT ALIGNMENT */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#22c55e', letterSpacing: '0.1em' }}>01</span>
              <h2 className="text-2xl font-bold uppercase tracking-widest text-foreground">Background</h2>
            </div>
            
            <div style={{ position: 'relative', zIndex: 1, paddingLeft: '2rem', borderLeft: '2px solid rgba(255,255,255,0.1)' }}>
              <AboutBlock />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '4rem', alignItems: 'start' }}>
            {/* 02 BLUEPRINT SECTION (Stack) */}
            <div style={{ position: 'relative' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#22c55e', letterSpacing: '0.1em' }}>02</span>
                <h2 className="text-2xl font-bold uppercase tracking-widest text-foreground">Techstack</h2>
              </div>
              <div style={{ position: 'relative', zIndex: 1, paddingLeft: '2rem', borderLeft: '2px solid rgba(255,255,255,0.1)' }}>
                <TechStackBlock />
              </div>
            </div>

            {/* 03 PULSE SECTION (Experience) */}
            <div style={{ position: 'relative' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#22c55e', letterSpacing: '0.1em' }}>03</span>
                <h2 className="text-2xl font-bold uppercase tracking-widest text-foreground">Experience</h2>
              </div>
              <div style={{ position: 'relative', zIndex: 1, paddingLeft: '2rem', borderLeft: '2px solid rgba(255,255,255,0.1)' }}>
                <ExperienceBlock />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function AboutBlock() {
  return (
    <div className="space-y-6 max-w-4xl">
      <p style={{ fontSize: '1.25rem', lineHeight: 1.6, color: 'var(--foreground)', fontWeight: 400 }}>
        I’m a web developer focused on building modern, maintainable, and
        security-aware web applications. I care about clean architecture,
        performance, and writing code that’s easy to reason about.
      </p>

      <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--muted-foreground)', fontWeight: 300 }}>
        I learn best by building real projects and iterating on them — turning
        ideas into working systems while continuously improving my backend and
        data-handling skills.
      </p>
    </div>
  );
}

function TechStackBlock() {
  const categories = [
    {
      name: "Frontend",
      icon: <Monitor className="w-5 h-5" />,
      skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Bootstrap", "Shadcn"]
    },
    {
      name: "Backend",
      icon: <Database className="w-5 h-5" />,
      skills: ["Supabase", "Node.js", "PHP", "PostgreSQL", "SQL", "XAMPP"]
    },
    {
      name: "Tools",
      icon: <Terminal className="w-5 h-5" />,
      skills: ["Git", "GitHub", "Vite", "VS Code", "Cursor", "Antigravity", "ChatGPT", "Vercel"]
    },
    {
      name: "Design & Hardware",
      icon: <Cpu className="w-5 h-5" />,
      skills: ["Figma", "UI/UX Components", "Icon Libraries", "ESP32 Projects", "Circuit Wiring", "Soldering"]
    }
  ];

  return (
    <div className="space-y-1">
      {categories.map((cat, index) => (
        <div key={cat.name} style={{ 
          paddingBottom: index === categories.length - 1 ? 0 : '2rem',
          position: 'relative' 
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <span style={{ color: 'var(--foreground)', opacity: 0.8 }}>{cat.icon}</span>
            <h3 style={{ fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', opacity: 0.9 }}>{cat.name}</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {cat.skills.map(skill => (
              <span key={skill} style={{ 
                padding: '0.4rem 0.8rem', 
                backgroundColor: skill.includes("ESP32") || skill.includes("Circuit") || skill.includes("Soldering") ? 'rgba(34, 197, 94, 0.05)' : 'rgba(255,255,255,0.02)', 
                border: skill.includes("ESP32") || skill.includes("Circuit") || skill.includes("Soldering") ? '1px solid rgba(34, 197, 94, 0.2)' : '1px solid rgba(255,255,255,0.08)', 
                borderRadius: '4px', 
                fontSize: '0.75rem', 
                fontWeight: 500,
                color: skill.includes("ESP32") || skill.includes("Circuit") || skill.includes("Soldering") ? '#22c55e' : 'var(--foreground)',
                opacity: skill.includes("ESP32") ? 1 : 0.9
              }}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function ExperienceBlock() {
  const experiences = [
    {
      title: "Finance Tracker",
      subtitle: "React, Next.js, TypeScript, Supabase",
      tag: "Deployed"
    },
    {
      title: "Portfolio Rebuild",
      subtitle: "Performance & Accessibility focus",
      tag: "Current"
    },
    {
      title: "Client Portfolio Project",
      subtitle: "Vanilla HTML, CSS, JavaScript",
      tag: "In Progress"
    },
    {
      title: "Certifications",
      subtitle: "Continuous hands-on learning",
      tag: "Ongoing"
    }
  ];

  return (
    <div className="space-y-1 relative">
      {/* The Pulse Line */}
      <div style={{ position: 'absolute', top: '0.5rem', left: '-2.03rem', bottom: '1.5rem', width: '1px', backgroundColor: 'rgba(255,255,255,0.1)' }} />
      
      {experiences.map((exp, index) => (
        <div key={index} style={{ 
          position: 'relative',
          paddingBottom: index === experiences.length - 1 ? 0 : '1rem' 
        }}>
          {/* Node */}
          <div style={{ 
            position: 'absolute', 
            top: '0.5rem', 
            left: '-2.3rem', 
            width: '10px', 
            height: '10px', 
            borderRadius: '9999px', 
            backgroundColor: index === 0 ? '#22c55e' : 'var(--foreground)',
            boxShadow: index === 0 ? '0 0 10px #22c55e' : 'none',
            zIndex: 2 
          }} />
          
          <div className="space-y-1">
            <span style={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', color: index === 0 ? '#22c55e' : 'var(--muted-foreground)', letterSpacing: '0.1em' }}>
              {exp.tag}
            </span>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 600 }}>{exp.title}</h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)' }}>{exp.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
