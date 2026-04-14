import { useEffect, useRef } from 'react';

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let trailX = 0;
    let trailY = 0;
    
    let isHovering = false;
    let isClicking = false;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Check if hovering over something clickable to add a glow effect
      const target = e.target as HTMLElement;
      if (
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button'
      ) {
        isHovering = true;
      } else {
        isHovering = false;
      }

      // Update primary dot immediately for zero latency
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) scale(${isClicking ? 0.7 : 1})`;
      }
    };

    const onMouseDown = () => {
      isClicking = true;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) scale(0.7)`;
      }
    };

    const onMouseUp = () => {
      isClicking = false;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) scale(1)`;
      }
    };

    // Smooth trailing animation loop using requestAnimationFrame
    const animate = () => {
      trailX += (mouseX - trailX) * 0.15; // Smooth interpolation factor
      trailY += (mouseY - trailY) * 0.15;
      
      if (trailRef.current) {
        const scale = isClicking ? 0.9 : isHovering ? 1.5 : 1;
        const bg = isHovering ? 'rgba(34, 197, 94, 0.1)' : 'transparent';
        const border = isHovering ? 'rgba(34, 197, 94, 0.8)' : 'rgba(34, 197, 94, 0.4)';
        
        trailRef.current.style.transform = `translate3d(${trailX}px, ${trailY}px, 0) scale(${scale})`;
        trailRef.current.style.backgroundColor = bg;
        trailRef.current.style.borderColor = border;
      }
      
      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    const rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <style>{`
        /* Completely hides the default Windows/Mac cursor everywhere */
        * {
          cursor: none !important;
        }
      `}</style>
      
      {/* Primary Dot - Instant tracking */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: -4, /* Center the 8px dot */
          left: -4,
          width: '8px',
          height: '8px',
          backgroundColor: '#22c55e',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99999,
          mixBlendMode: 'difference',
          transition: 'transform 0.1s ease-out', /* Only transition scale, not position */
        }}
      />
      
      {/* Trailing Ring - Adds fluid movement effect */}
      <div
        ref={trailRef}
        style={{
          position: 'fixed',
          top: -16, /* Center the 32px ring */
          left: -16,
          width: '32px',
          height: '32px',
          border: '1px solid rgba(34, 197, 94, 0.4)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99998,
          transition: 'background-color 0.2s ease, border-color 0.2s ease', 
          /* Position & scale are updated via DOM in the RAF loop */
        }}
      />
    </>
  );
}
