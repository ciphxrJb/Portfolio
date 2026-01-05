import { useEffect, useState } from 'react';

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollTop = window.scrollY;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', updateScrollProgress);
    updateScrollProgress(); // Initialize

    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <>
      {/* Top Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-transparent z-40">
        <div 
          className="h-full bg-gradient-to-r from-primary via-primary/90 to-primary transition-all duration-200 ease-out shadow-sm"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Side Progress Indicator */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="relative">
          {/* Background track */}
          <div className="w-1 h-32 bg-muted/30 rounded-full" />
          
          {/* Progress fill */}
          <div 
            className="absolute top-0 left-0 w-1 bg-gradient-to-b from-primary to-primary/60 rounded-full transition-all duration-200 ease-out"
            style={{ height: `${(scrollProgress / 100) * 128}px` }}
          />
          
          {/* Animated dot */}
          <div 
            className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-primary rounded-full shadow-lg transition-all duration-200 ease-out"
            style={{ 
              top: `${(scrollProgress / 100) * 120}px`,
              boxShadow: '0 0 10px rgba(var(--primary), 0.5)'
            }}
          />
        </div>
        
        {/* Progress percentage */}
        <div className="absolute -left-12 top-1/2 transform -translate-y-1/2">
          <div className="bg-card/80 backdrop-blur-sm border border-border rounded-md px-2 py-1">
            <span className="text-xs font-medium">{Math.round(scrollProgress)}%</span>
          </div>
        </div>
      </div>
    </>
  );
}