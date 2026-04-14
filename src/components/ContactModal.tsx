import { Mail, Github, Linkedin, Twitter, MapPin, Send, Globe, CheckCircle2, Loader2, Sparkles, Clock, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [selectedSubject, setSelectedSubject] = useState('Web Development');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const subjects = ['Web Development', 'UI/UX Design', 'Consulting', 'Saying Hi'];

  // Lock scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      // Reset form status when closed so it's fresh next time
      setTimeout(() => setStatus('idle'), 300);
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate network request for the animation
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => {
        onClose();
      }, 2000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const socialLinks = [
    { name: "GitHub", icon: Github, url: "#" },
    { name: "LinkedIn", icon: Linkedin, url: "#" },
    { name: "Twitter", icon: Twitter, url: "#" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 backdrop-blur-sm"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', zIndex: 9998 }}
          />

          {/* Modal Container */}
          <div className="fixed inset-0 flex items-center justify-center p-4 pointer-events-none" style={{ zIndex: 9999 }}>
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative w-[90vw] md:w-[80vw] lg:w-[75vw] max-w-5xl pointer-events-auto shadow-2xl overflow-y-auto max-h-[90vh] rounded-[24px]"
              style={{ backgroundColor: 'rgba(10, 10, 10, 0.95)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(20px)' }}
            >
              
              {/* Close Button */}
              <button 
                onClick={onClose}
                style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', zIndex: 10 }}
                className="p-2 rounded-full hover:bg-white/10 text-white/50 hover:text-white transition-colors"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8 md:p-10 flex flex-col justify-center">
                
                <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', padding: '0.5rem 1.25rem', backgroundColor: 'rgba(34, 197, 94, 0.05)', borderRadius: '999px', border: '1px solid rgba(34, 197, 94, 0.2)' }}>
                    <Sparkles className="w-4 h-4 text-[#22c55e]" />
                    <h2 className="text-xs font-bold uppercase tracking-widest text-[#22c55e]">Let&apos;s Work Together</h2>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mt-5 text-foreground tracking-tight">Got a project in mind?</h3>
                </div>

                <div className="grid md:grid-cols-5 gap-8 items-start">
                  
                  {/* Left Form Area spans 3 columns */}
                  <div className="md:col-span-3">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      
                      {/* Quick Select Chips */}
                      <div className="space-y-3">
                        <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--foreground)' }}>What are you interested in?</label>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                          {subjects.map((subject) => (
                            <button
                              key={subject}
                              type="button"
                              onClick={() => setSelectedSubject(subject)}
                              style={{
                                padding: '0.5rem 1rem',
                                borderRadius: '999px',
                                fontSize: '0.8rem',
                                fontWeight: 500,
                                transition: 'all 0.3s ease',
                                border: selectedSubject === subject ? '1px solid #22c55e' : '1px solid rgba(255,255,255,0.1)',
                                backgroundColor: selectedSubject === subject ? 'rgba(34, 197, 94, 0.1)' : 'transparent',
                                color: selectedSubject === subject ? '#22c55e' : 'var(--muted-foreground)',
                              }}
                              className="hover:border-[#22c55e]/50 hover:text-foreground"
                            >
                              {subject}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Personal Details Row */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2 relative group">
                          <label htmlFor="name" style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--foreground)' }}>Your Name</label>
                          <input
                            id="name"
                            placeholder="John Doe"
                            className="w-full bg-[rgba(0,0,0,0.3)] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e] transition-all"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="space-y-2 relative group">
                          <label htmlFor="email" style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--foreground)' }}>Email Address</label>
                          <input
                            id="email"
                            type="email"
                            placeholder="john@example.com"
                            className="w-full bg-[rgba(0,0,0,0.3)] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e] transition-all"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      
                      {/* Message Block */}
                      <div className="space-y-2 relative group">
                        <label htmlFor="message" style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--foreground)' }}>Project Details</label>
                        <textarea
                          id="message"
                          placeholder="Tell me about your project, timeline, and goals..."
                          className="w-full bg-[rgba(0,0,0,0.3)] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e] transition-all min-h-[120px] resize-none"
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      {/* Submit Button */}
                      <button 
                        type="submit" 
                        disabled={status !== 'idle'}
                        style={{
                          width: '100%',
                          padding: '1rem',
                          borderRadius: '12px',
                          backgroundColor: status === 'success' ? '#22c55e' : '#ffffff',
                          color: status === 'success' ? '#ffffff' : '#000000',
                          fontWeight: 600,
                          fontSize: '0.9rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '0.75rem',
                          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                          cursor: status !== 'idle' ? 'default' : 'pointer',
                          transform: status === 'submitting' ? 'scale(0.98)' : 'scale(1)',
                        }}
                        className={status === 'idle' ? "hover:bg-[#22c55e] hover:text-white" : ""}
                      >
                        {status === 'idle' && (
                          <>
                            Send Message <Send className="w-4 h-4 ml-1" />
                          </>
                        )}
                        {status === 'submitting' && (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" /> Sending...
                          </>
                        )}
                        {status === 'success' && (
                          <>
                            <CheckCircle2 className="w-5 h-5 animate-bounce" /> Message Sent Successfully!
                          </>
                        )}
                      </button>
                    </form>
                  </div>

                  {/* Right Social/Info Area spans 2 columns */}
                  <div className="md:col-span-2 space-y-6 pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-white/10 md:pl-8">
                    
                    <div style={{ padding: '1.5rem', borderRadius: '16px', backgroundColor: 'rgba(34, 197, 94, 0.03)', border: '1px solid rgba(34, 197, 94, 0.15)' }}>
                      <div className="flex items-center gap-3 mb-3">
                        <div style={{ backgroundColor: '#22c55e', padding: '0.5rem', borderRadius: '8px', color: '#000' }}>
                          <Clock className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--foreground)' }}>Fast Response</h4>
                          <p style={{ fontSize: '0.8rem', color: 'var(--muted-foreground)' }}>Replies within 24hrs.</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.1)' }}>
                          <Mail className="w-4 h-4" />
                        </div>
                        <div>
                          <p style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--muted-foreground)', fontWeight: 600 }}>Email</p>
                          <p style={{ fontSize: '0.9rem', color: 'var(--foreground)' }}>josebernardo@email.com</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.1)' }}>
                          <MapPin className="w-4 h-4" />
                        </div>
                        <div>
                          <p style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--muted-foreground)', fontWeight: 600 }}>Location</p>
                          <p style={{ fontSize: '0.9rem', color: 'var(--foreground)' }}>Philippines (Remote)</p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/5">
                      <p style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--muted-foreground)', fontWeight: 600, marginBottom: '0.75rem' }}>Socials</p>
                      <div className="flex gap-3">
                        {socialLinks.map((link, idx) => (
                          <a
                            key={idx}
                            href={link.url}
                            style={{
                              width: '32px',
                              height: '32px',
                              borderRadius: '6px',
                              backgroundColor: 'rgba(255,255,255,0.03)',
                              border: '1px solid rgba(255,255,255,0.05)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: 'var(--foreground)',
                              transition: 'all 0.2s ease'
                            }}
                            className="hover:bg-[#22c55e] hover:text-black hover:border-transparent"
                            title={link.name}
                          >
                            <link.icon className="w-3.5 h-3.5" />
                          </a>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
