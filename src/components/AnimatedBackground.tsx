import { useEffect, useState } from 'react';

export function AnimatedBackground() {
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, size: number, delay: number}>>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 1,
          delay: Math.random() * 20
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {/* Deep Gradient Background */}
      <div 
        className="absolute inset-0" 
        style={{ 
          background: `linear-gradient(to bottom right, var(--background, #020617), var(--background, #020617), color-mix(in srgb, var(--secondary, #1e293b) 20%, transparent))` 
        }} 
      />
      
      {/* Animated Particles */}
      {particles.slice(0, 20).map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full blur-[1px]"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: `color-mix(in srgb, var(--foreground, #fff) 30%, transparent)`,
            animation: `float-particle ${particle.delay + 10}s infinite linear`,
          }}
        />
      ))}
      
      {/* Ambient Glows - Monochrome version */}
      <div 
        className="absolute top-0 left-0 rounded-full blur-[120px] -translate-x-2/3 -translate-y-1/2" 
        style={{ 
          width: '600px', 
          height: '600px', 
          backgroundColor: `color-mix(in srgb, var(--foreground, #fff) 5%, transparent)` 
        }} 
      />
      <div 
        className="absolute bottom-0 right-0 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" 
        style={{ 
          width: '600px', 
          height: '600px', 
          backgroundColor: `color-mix(in srgb, var(--foreground, #fff) 5%, transparent)` 
        }} 
      />
    </div>
  );
}