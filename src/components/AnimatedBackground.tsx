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
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/10 dark:from-primary/10 dark:via-background dark:to-secondary/20" />
      
      {/* Animated Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-primary/20 dark:bg-primary/30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
      
      {/* Floating Geometric Shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-primary/20 dark:border-primary/40 rounded-lg rotate-45 animate-float" />
      <div className="absolute top-40 right-20 w-16 h-16 bg-secondary/20 dark:bg-secondary/30 rounded-full animate-float-delayed" />
      <div className="absolute bottom-40 left-20 w-12 h-12 border-2 border-accent/30 dark:border-accent/40 rotate-12 animate-float-slow" />
      <div className="absolute bottom-20 right-40 w-24 h-24 border border-muted/30 dark:border-muted/40 rounded-full animate-float" />
      
      {/* Mesh Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent dark:via-primary/10 animate-pulse" />
      
      <style jsx>{`
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float 8s ease-in-out infinite 2s;
        }
        
        .animate-float-slow {
          animation: float 10s ease-in-out infinite 1s;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        
        .bg-primary\\/20 {
          animation: particle-float 15s linear infinite;
        }
        
        @keyframes particle-float {
          0% {
            transform: translateY(100vh) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) translateX(100px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}