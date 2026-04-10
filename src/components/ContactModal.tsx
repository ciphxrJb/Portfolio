import { useState, useEffect } from "react";
import { X, Send, Mail, MapPin, Github, Twitter } from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Lock scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! Transmission received by system.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  return (
    <>
      {/* Full-screen backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 99,
          backgroundColor: 'rgba(2, 6, 23, 0.88)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
        }}
      />

      {/* Modal panel */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem',
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '56rem',
            backgroundColor: '#0d0d0d',
            border: '1px solid rgba(255,255,255,0.10)',
            borderRadius: '8px',
            boxShadow: '0 25px 60px rgba(0,0,0,0.7)',
            overflow: 'hidden',
            pointerEvents: 'all',
          }}
        >
          {/* Decorative dot grid */}
          <div style={{ position: 'absolute', inset: 0, opacity: 0.03, pointerEvents: 'none', backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#22c55e', letterSpacing: '0.2em' }}>05</span>
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-foreground">Connect_Process</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="grid md:grid-cols-[1.2fr,0.8fr]">
          {/* Form Side */}
          <div className="p-8 md:p-10 border-r border-white/10">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">User_Identity</label>
                  <Input
                    id="name"
                    placeholder="FULL NAME"
                    className="bg-transparent border-t-0 border-x-0 border-b border-white/10 rounded-none focus-visible:ring-0 focus-visible:border-[#22c55e] transition-colors p-0 h-10 text-sm"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">Return_Vector</label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="EMAIL@EXAMPLE.COM"
                    className="bg-transparent border-t-0 border-x-0 border-b border-white/10 rounded-none focus-visible:ring-0 focus-visible:border-[#22c55e] transition-colors p-0 h-10 text-sm"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">Process_Subject</label>
                <Input
                  id="subject"
                  placeholder="INQUIRY TOPIC"
                  className="bg-transparent border-t-0 border-x-0 border-b border-white/10 rounded-none focus-visible:ring-0 focus-visible:border-[#22c55e] transition-colors p-0 h-10 text-sm"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">Transmission_Payload</label>
                <Textarea
                  id="message"
                  placeholder="DETAILS..."
                  className="bg-transparent border-t-0 border-x-0 border-b border-white/10 rounded-none focus-visible:ring-0 focus-visible:border-[#22c55e] transition-colors p-0 min-h-[120px] resize-none text-sm"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <button 
                type="submit" 
                className="group relative flex items-center justify-center gap-3 w-full py-4 text-[10px] font-bold uppercase tracking-[0.3em] transition-all bg-white/5 hover:bg-[#22c55e]/10 border border-white/10 hover:border-[#22c55e]/30"
              >
                <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                Initiate_System_Send
              </button>
            </form>
          </div>

          {/* Info Side */}
          <div className="p-8 md:p-10 bg-white/[0.01] flex flex-col justify-between">
            <div className="space-y-8">
              <div>
                <h3 className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground mb-4">System_Nodes</h3>
                <div className="space-y-6">
                  {[
                    { icon: Mail, label: 'Email', value: 'josebernardo@email.com' },
                    { icon: MapPin, label: 'Origin', value: 'Philippines' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <item.icon className="w-4 h-4 text-[#22c55e] mt-1" />
                      <div>
                        <p className="text-[9px] uppercase font-bold text-muted-foreground tracking-tighter">{item.label}</p>
                        <p className="text-sm font-medium text-foreground">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground mb-4">Data_Ports</h3>
                <div className="flex gap-4">
                  {[Github, Twitter].map((Icon, idx) => (
                    <a key={idx} href="#" className="p-2 border border-white/10 hover:border-[#22c55e] hover:bg-[#22c55e]/5 transition-all">
                      <Icon className="w-4 h-4 text-foreground" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/5 italic opacity-40 text-[10px]">
              Secure transmission encrypted via end-to-end protocols.
            </div>
          </div>
        </div>
      </div>
    </div>
   </>
  );
}
