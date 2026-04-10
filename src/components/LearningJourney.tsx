import React from "react";
import { Monitor, Braces, Puzzle, ShieldAlert } from "lucide-react";

const certifications = [
  {
    title: "Responsive Web Design",
    provider: "freeCodeCamp",
    icon: Monitor,
    progress: 90,
    status: "In Progress",
    highlight: "Core UI Architecture & accessibility standards",
  },
  {
    title: "JavaScript Algorithms & Data Structures",
    provider: "freeCodeCamp",
    icon: Braces,
    progress: 65,
    status: "In Progress",
    highlight: "Complex logic and algorithmic efficiency",
  },
  {
    title: "Front-end Development Libraries",
    provider: "freeCodeCamp",
    icon: Puzzle,
    progress: 55,
    status: "In Progress",
    highlight: "Component integration and state management",
  },
  {
    title: "Introduction to Cybersecurity",
    provider: "Cisco",
    icon: ShieldAlert,
    progress: 50,
    status: "In Progress",
    highlight: "Defensive architecture and threat analysis",
  },
];

export function LearningJourney() {
  return (
    <section className="relative overflow-hidden" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      <div className="container mx-auto px-6">
        
        {/* COMPACT HEADER */}
        <div style={{ position: 'relative', marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#22c55e', letterSpacing: '0.1em' }}>05</span>
            <h2 className="text-2xl font-bold uppercase tracking-widest text-foreground">Certifications</h2>
          </div>
        </div>

        {/* REGISTRY GRID - MATCHING PROJECTS SECTION STRUCTURE */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem 10rem', alignItems: 'start' }}>
          {certifications.map((cert, index) => (
            <div key={index} className="group" style={{ position: 'relative', paddingLeft: '2rem', borderLeft: '2px solid rgba(255,255,255,0.1)', transition: 'border-color 0.3s ease' }}>
              {/* Dynamic Guide Line Focus (on hover) */}
              <div style={{ position: 'absolute', top: 0, left: '-2px', height: '100%', width: '2px', backgroundColor: '#22c55e', transform: 'scaleY(0)', transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)', transformOrigin: 'top' }} className="group-hover:scale-y-100" />

              <div className="space-y-6">
                {/* Meta Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <cert.icon className="w-5 h-5 text-[#22c55e] opacity-80" />
                  <span style={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--muted-foreground)', letterSpacing: '0.2em' }}>
                    Status: {cert.status}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="space-y-3">
                  <h3 style={{ fontSize: '1.75rem', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--foreground)' }}>
                    {cert.title}
                  </h3>
                  <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--muted-foreground)', fontWeight: 300 }}>
                    {cert.highlight}
                  </p>
                </div>

                {/* Progress Bar / Provider */}
                <div className="pt-2">
                  <div className="flex justify-between items-center mb-3">
                    <span style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--foreground)', letterSpacing: '0.05em', padding: '0.35rem 0.75rem', backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '4px' }}>
                      {cert.provider}
                    </span>
                    <span className="font-mono text-[10px] text-muted-foreground">{cert.progress}%</span>
                  </div>
                  <div className="h-1 w-full bg-white/10 overflow-hidden" style={{ borderRadius: '2px' }}>
                    <div 
                      className="h-full bg-[#22c55e] transition-all duration-1000 ease-out relative" 
                      style={{ width: `${cert.progress}%` }} 
                    >
                      <div className="absolute right-0 top-0 bottom-0 w-4 bg-white/30 animate-pulse" />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
