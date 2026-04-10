import { ExternalLink, Github, Rocket } from "lucide-react";

const projects = [
  {
    title: "Finance Tracker Web App",
    description:
      "A high-performance personal finance dashboard focused on real-time state management, secure data handling, and direct API-driven architecture for complex financial analysis.",
    stack: ["React", "Next.js", "TypeScript", "Supabase"],
    status: "Deployed",
    live: "https://balancxe.vercel.app/",
    source: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A premium, architectural portfolio designed with a 'Structural Schematic' aesthetic. Focuses on performance, elite accessibility, and high-end visual storytelling.",
    stack: ["React", "Vite", "TypeScript", "Tailwind"],
    status: "Live",
    live: "#",
  },
  {
    title: "Authentication System",
    description: "Secure full-stack authentication flow featuring robust input validation, backend session management, and encrypted data storage.",
    stack: ["PHP", "SQL", "HTML", "CSS"],
    status: "Completed",
    source: "#",
  },
];

export function ProjectsSection2() {
  return (
    <section className="relative overflow-hidden" style={{ paddingTop: '3rem', paddingBottom: '6rem' }}>
      <div className="container mx-auto px-6">
        
        {/* COMPACT HEADER */}
        <div style={{ position: 'relative', marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#22c55e', letterSpacing: '0.1em' }}>04</span>
            <h2 className="text-2xl font-bold uppercase tracking-widest text-foreground">Featured Work</h2>
          </div>
        </div>

        {/* PROJECTS GRID */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem 10rem', alignItems: 'start' }}>
          {projects.map((project, index) => (
            <div key={index} className="group" style={{ position: 'relative', paddingLeft: '2rem', borderLeft: '2px solid rgba(255,255,255,0.1)', transition: 'border-color 0.3s ease' }}>
              {/* Dynamic Guide Line Focus (on hover) */}
              <div style={{ position: 'absolute', top: 0, left: '-2px', height: '100%', width: '2px', backgroundColor: '#22c55e', transform: 'scaleY(0)', transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)', transformOrigin: 'top' }} className="group-hover:scale-y-100" />

              <div className="space-y-6">
                {/* Meta Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ 
                    width: '8px', 
                    height: '8px', 
                    borderRadius: '9999px', 
                    backgroundColor: project.status === 'Deployed' || project.status === 'Live' ? '#22c55e' : 'rgba(255,255,255,0.2)',
                    boxShadow: project.status === 'Deployed' || project.status === 'Live' ? '0 0 10px #22c55e' : 'none'
                  }} />
                  <span style={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--muted-foreground)', letterSpacing: '0.2em' }}>
                    Status: {project.status}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="space-y-3">
                  <h3 style={{ fontSize: '1.75rem', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--foreground)' }}>
                    {project.title}
                  </h3>
                  <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--muted-foreground)', fontWeight: 300 }}>
                    {project.description}
                  </p>
                </div>

                {/* Technical Stack Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.stack.map(tech => (
                    <span key={tech} style={{ 
                      padding: '0.35rem 0.75rem', 
                      backgroundColor: 'rgba(255,255,255,0.02)', 
                      border: '1px solid rgba(255,255,255,0.08)', 
                      borderRadius: '4px', 
                      fontSize: '0.7rem', 
                      fontWeight: 600,
                      color: 'var(--foreground)',
                      letterSpacing: '0.05em'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 pt-6 mt-4 border-t border-white/5">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 px-4 py-2 font-semibold text-xs uppercase tracking-wider transition-all duration-200 hover:gap-3"
                      style={{
                        backgroundColor: 'var(--foreground)',
                        color: 'var(--background)',
                        borderRadius: '4px',
                        letterSpacing: '0.1em'
                      }}
                    >
                      <Rocket className="w-3.5 h-3.5" />
                      View Live
                      <ExternalLink className="w-3 h-3 opacity-70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  )}
                  {project.source && project.source !== '#' && (
                    <a
                      href={project.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 px-4 py-2 font-semibold text-xs uppercase tracking-wider transition-all duration-200 hover:bg-white/10 hover:gap-3"
                      style={{
                        border: '1px solid rgba(255,255,255,0.15)',
                        color: 'var(--foreground)',
                        borderRadius: '4px',
                        letterSpacing: '0.1em'
                      }}
                    >
                      <Github className="w-3.5 h-3.5" />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
