import { Sparkles, ArrowRight } from "lucide-react";

export function ContactSection({ onContactClick }: { onContactClick?: () => void }) {

  return (
    <section className="relative overflow-hidden flex flex-col justify-center pb-24" style={{ minHeight: '70vh', marginTop: '4rem' }}>
      <div className="container mx-auto px-6 max-w-4xl text-center">
        
        {/* SMALL CTA BANNER */}
        <div 
          style={{ 
            backgroundColor: 'rgba(255,255,255,0.02)', 
            border: '1px solid rgba(255,255,255,0.05)', 
            borderRadius: '24px', 
            padding: '4rem 2rem', 
            backdropFilter: 'blur(10px)',
            position: 'relative'
          }}
        >
          {/* Edge glows */}
          <div className="absolute top-0 right-1/4 w-32 h-32 bg-[#22c55e]/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-[#22c55e]/10 blur-3xl pointer-events-none" />

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', padding: '0.5rem 1.5rem', backgroundColor: 'rgba(34, 197, 94, 0.05)', borderRadius: '999px', border: '1px solid rgba(34, 197, 94, 0.2)', marginBottom: '1.5rem' }}>
            <Sparkles className="w-4 h-4 text-[#22c55e]" />
            <h2 className="text-sm font-bold uppercase tracking-widest text-[#22c55e]">Ready to Start?</h2>
          </div>
          
          <h3 className="text-4xl font-bold text-foreground tracking-tight mb-4">Let's build something beautiful.</h3>
          <p className="text-muted-foreground max-w-lg mx-auto text-base mb-8">
            Whether you need a full-stack web application, a visually stunning portfolio, or technical consulting, my inbox is always open.
          </p>

          <button
            onClick={onContactClick}
            style={{
              padding: '1rem 2.5rem',
              borderRadius: '999px',
              backgroundColor: '#22c55e',
              color: '#000000',
              fontWeight: 700,
              fontSize: '0.95rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              transition: 'all 0.3s ease',
            }}
            className="hover:bg-white hover:scale-105"
          >
            Start a Conversation <ArrowRight className="w-4 h-4" />
          </button>
        </div>



      </div>
    </section>
  );
}