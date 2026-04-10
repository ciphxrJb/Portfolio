import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Github, Linkedin, Twitter, MapPin, Send, Globe } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! Message received by system.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const socialLinks = [
    { name: "GitHub", icon: Github, value: "josebernardo" },
    { name: "LinkedIn", icon: Linkedin, value: "josebernardosantos" },
    { name: "Twitter", icon: Twitter, value: "@josebernardo" },
    { name: "Email", icon: Mail, value: "josebernardo@email.com" },
    { name: "Location", icon: MapPin, value: "Philippines" },
  ];

  return (
    <section className="pt-24 pb-32 relative overflow-hidden" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container mx-auto px-6">
        
        {/* 05 CONNECT HEADER */}
        <div style={{ position: 'relative', marginBottom: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#22c55e', letterSpacing: '0.1em' }}>05</span>
            <h2 className="text-2xl font-bold uppercase tracking-widest text-foreground">Connect</h2>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '8rem', alignItems: 'start' }}>
          
          {/* TERMINAL FORM */}
          <div style={{ position: 'relative', paddingLeft: '2rem', borderLeft: '2px solid rgba(255,255,255,0.1)' }}>
            <div style={{ position: 'absolute', top: 0, left: '-2px', height: '100%', width: '2px', backgroundColor: '#22c55e', transform: 'scaleY(0)', transition: 'transform 0.4s ease', transformOrigin: 'top' }} className="hover-trigger" />
            
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-2">
                  <label htmlFor="name" style={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--muted-foreground)', letterSpacing: '0.1em' }}>User_Name</label>
                  <Input
                    id="name"
                    placeholder="Enter full name"
                    className="bg-transparent border-t-0 border-x-0 border-b border-white/10 rounded-none focus-visible:ring-0 focus-visible:border-[#22c55e] transition-colors p-0 h-10"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" style={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--muted-foreground)', letterSpacing: '0.1em' }}>Return_Path</label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="email@example.com"
                    className="bg-transparent border-t-0 border-x-0 border-b border-white/10 rounded-none focus-visible:ring-0 focus-visible:border-[#22c55e] transition-colors p-0 h-10"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" style={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--muted-foreground)', letterSpacing: '0.1em' }}>Data_Subject</label>
                <Input
                  id="subject"
                  placeholder="Inquiry topic"
                  className="bg-transparent border-t-0 border-x-0 border-b border-white/10 rounded-none focus-visible:ring-0 focus-visible:border-[#22c55e] transition-colors p-0 h-10"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" style={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--muted-foreground)', letterSpacing: '0.1em' }}>Payload_Message</label>
                <Textarea
                  id="message"
                  placeholder="Transmission details..."
                  className="bg-transparent border-t-0 border-x-0 border-b border-white/10 rounded-none focus-visible:ring-0 focus-visible:border-[#22c55e] transition-colors p-0 min-h-[120px] resize-none"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <button 
                type="submit" 
                className="group relative flex items-center justify-center gap-3 w-full py-4 text-xs font-bold uppercase tracking-[0.2em] transition-all bg-white/5 hover:bg-[#22c55e]/10 border border-white/10 hover:border-[#22c55e]/30 overflow-hidden"
              >
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, transparent, rgba(34, 197, 94, 0.1), transparent)', transform: 'translateX(-100%)', transition: 'transform 0.6s' }} className="group-hover:translate-x-full" />
                <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                SYSTEM_SEND_MESSAGE
              </button>
            </form>
          </div>

          {/* SOCIAL DATA STREAM */}
          <div style={{ position: 'relative', paddingLeft: '2rem', borderLeft: '2px solid rgba(255,255,255,0.1)' }}>
            <div className="space-y-12">
              {socialLinks.map((link, index) => (
                <div key={index} className="group" style={{ position: 'relative' }}>
                  <div className="space-y-1">
                    <span style={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--muted-foreground)', letterSpacing: '0.15em' }}>
                      {link.name}
                    </span>
                    <div className="flex items-center gap-3">
                      <link.icon className="w-4 h-4 text-[#22c55e]" />
                      <p style={{ fontSize: '1.125rem', fontWeight: 500, color: 'var(--foreground)' }}>
                        {link.value}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="pt-8 border-t border-white/5">
                <a 
                  href="#" 
                  className="inline-flex items-center gap-3 px-6 py-3 border border-white/10 hover:border-[#22c55e] hover:bg-[#22c55e]/5 transition-all text-xs font-bold uppercase tracking-widest"
                >
                  <Globe className="w-4 h-4" />
                  Request_Full_Resume.PDF
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}