import { MapPin, Mail, Github, FileText } from "lucide-react";
import profilePhoto from "../images/temp-photo.jpg";

export function ProfileHeader() {
  return (
    <header className="relative z-10 min-h-[60vh] flex items-center">
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1.5rem 5rem 1.5rem' }}>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'row', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          gap: '3rem',
          flexWrap: 'wrap-reverse'
        }}>
          
          {/* Identity */}
          <div style={{ flex: '1 1 60%', textAlign: 'left', minWidth: '320px' }}>
            <div style={{ marginBottom: '2rem' }}>
              <h2 style={{ color: 'var(--foreground)', letterSpacing: '0.2em', fontWeight: 600, textTransform: 'uppercase', fontSize: '0.75rem', marginBottom: '0.75rem', opacity: 0.6 }}>Portfolio</h2>
              <h1 style={{ fontSize: 'clamp(2.5rem, 7vw, 4.2rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.1, color: 'var(--foreground)' }}>
                Santos,
                <span style={{ 
                  display: 'block',
                  color: 'var(--foreground)',
                  opacity: 0.9,
                  fontSize: '0.9em',
                  fontWeight: 700
                }}>
                  Jose Bernardo
                </span>
              </h1>
            </div>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl font-light">
              Full Stack Web Developer crafting <span className="text-foreground font-medium">exceptional digital experiences</span> with modern technologies.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem', marginTop: '1.5rem', marginBottom: '2.5rem' }}>
              <span style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.5rem', 
                padding: '0.4rem 1rem', 
                borderRadius: '9999px', 
                backgroundColor: 'rgba(255, 255, 255, 0.03)', 
                border: '1px solid rgba(255, 255, 255, 0.08)',
                fontSize: '0.875rem',
                color: 'var(--muted-foreground)'
              }}>
                <MapPin className="w-4 h-4" style={{ color: 'var(--foreground)' }} />
                Philippines
              </span>

              <span style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.5rem', 
                padding: '0.4rem 1rem', 
                borderRadius: '9999px', 
                backgroundColor: 'rgba(34, 197, 94, 0.05)', 
                border: '1px solid rgba(34, 197, 94, 0.2)', 
                color: '#22c55e', 
                fontSize: '0.875rem',
                fontWeight: 500 
              }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '9999px', backgroundColor: '#22c55e' }} className="animate-pulse" />
                Open to Work
              </span>
            </div>

            {/* Actions / System Nodes */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', paddingTop: '1rem' }}>
              <a
                href="/resume.pdf"
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '0.5rem', 
                  padding: '0.6rem 1.25rem', 
                  borderRadius: '4px', 
                  backgroundColor: 'var(--foreground)', 
                  color: 'var(--background)', 
                  fontSize: '0.75rem',
                  fontWeight: 700, 
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  transition: 'all 0.3s'
                }}
                className="hover:opacity-90"
              >
                <FileText className="w-4 h-4" />
                Resume.PDF
              </a>

              {[
                { name: "GitHub", icon: <Github className="w-4 h-4" />, url: "https://github.com/ciphxrJb" },
                { name: "Email", icon: <Mail className="w-4 h-4" />, url: "mailto:josebernardo@email.com" }
              ].map(link => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '0.5rem', 
                    padding: '0.6rem 1.25rem', 
                    borderRadius: '4px', 
                    border: '1px solid rgba(255, 255, 255, 0.08)', 
                    backgroundColor: 'rgba(255, 255, 255, 0.02)', 
                    color: 'var(--foreground)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    transition: 'all 0.3s'
                  }}
                  className="hover:bg-white/5 hover:border-white/20"
                >
                  {link.icon}
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Profile Photo */}
          <div style={{ flex: '0 0 35%', position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <div style={{ 
              position: 'absolute', 
              inset: 0, 
              background: 'linear-gradient(to top right, var(--primary), var(--accent))', 
              borderRadius: '9999px', 
              filter: 'blur(40px)', 
              opacity: 0.2 
            }} />
            <div style={{ 
              position: 'relative', 
              width: 'clamp(12rem, 30vw, 16rem)', 
              height: 'clamp(12rem, 30vw, 16rem)', 
              borderRadius: '9999px', 
              padding: '4px', 
              background: 'linear-gradient(to top right, color-mix(in srgb, var(--primary) 20%, transparent), color-mix(in srgb, var(--accent) 20%, transparent))',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
            }}>
              <img
                src={profilePhoto}
                alt="Santos, Jose Bernardo"
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover', 
                  borderRadius: '9999px',
                  transition: 'transform 0.7s ease'
                }}
              />
            </div>
          </div>
          
        </div>
      </div>
    </header>
  );
}
