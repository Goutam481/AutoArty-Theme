
import React, { useState } from 'react';
import Logo from './Logo';

interface FooterProps {
  onNavigate: (path: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    await new Promise(r => setTimeout(r, 1000));
    setStatus('success');
    setEmail('');
  };

  const socialLinks = [
    { name: 'X', url: '#', icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
    { name: 'Instagram', url: '#', icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg> },
    { name: 'YouTube', url: '#', icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505a3.017 3.017 0 00-2.122 2.136C0 8.055 0 12 0 12s0 3.945.501 5.814a3.015 3.015 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.945 24 12 24 12s0-3.945-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> }
  ];

  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12 relative overflow-hidden border-t border-white/5">
      {/* Carbon Fiber Micro-Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff), linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff)', backgroundSize: '8px 8px', backgroundPosition: '0 0, 4px 4px' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">
          
          {/* BRAND COLUMN */}
          <div className="lg:col-span-4 space-y-8">
            <Logo variant="light" size="md" />
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm font-medium">
              AutoArty is the premier automotive authority providing lab-tested reviews, technical benchmarks, and industrial diagnostic utilities for the modern enthusiast.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name} 
                  href={social.url} 
                  className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-slate-400 hover:text-brand-accent hover:bg-white/10 transition-all shadow-lg"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* COMPANY COLUMN */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-accent">Corporate</h4>
            <ul className="text-[11px] font-black uppercase tracking-widest text-slate-400 space-y-4">
              <li><button onClick={() => onNavigate('about')} className="hover:text-white transition flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-slate-800"></span>
                About Us
              </button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-white transition flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-slate-800"></span>
                Contact
              </button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-white transition flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-slate-800"></span>
                Careers
              </button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-white transition flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-slate-800"></span>
                Partnerships
              </button></li>
            </ul>
          </div>

          {/* GOVERNANCE COLUMN */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-accent">Governance</h4>
            <ul className="text-[11px] font-black uppercase tracking-widest text-slate-400 space-y-4">
              <li><button onClick={() => onNavigate('privacy')} className="hover:text-white transition flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-slate-800"></span>
                Privacy Policy
              </button></li>
              <li><button onClick={() => onNavigate('terms')} className="hover:text-white transition flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-slate-800"></span>
                Terms of Use
              </button></li>
              <li><button onClick={() => onNavigate('disclosure')} className="hover:text-white transition flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-slate-800"></span>
                Affiliate Disclosure
              </button></li>
              <li><button onClick={() => onNavigate('disclosure')} className="hover:text-white transition flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-slate-800"></span>
                Editorial Policy
              </button></li>
            </ul>
          </div>

          {/* NEWSLETTER COLUMN */}
          <div className="lg:col-span-4 space-y-10">
            <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-md relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-racing/10 rounded-full blur-3xl -mr-12 -mt-12 group-hover:bg-brand-racing/20 transition-colors"></div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-racing mb-6">Join The Authority Feed</h4>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Engineering ID (Email)" 
                  className="w-full bg-slate-900 border border-white/10 rounded-xl py-4 px-5 text-sm text-white placeholder:text-slate-600 outline-none focus:ring-2 focus:ring-brand-racing/30 transition-all"
                  required 
                />
                <button className="w-full bg-brand-racing text-white py-4 rounded-xl text-[10px] font-black uppercase tracking-[0.3em] shadow-[0_10px_30px_rgba(225,29,72,0.3)] hover:bg-white hover:text-brand-racing transition-all active:scale-95">
                  {status === 'loading' ? 'Synchronizing...' : 'Execute Sync'}
                </button>
              </form>
              {status === 'success' && (
                <p className="mt-4 text-[9px] font-black text-emerald-400 uppercase tracking-widest animate-fade-in">Connection active. Check inbox.</p>
              )}
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/5 pt-12 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="space-y-1 text-center lg:text-left">
             <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-500">© 2025 AutoArty Technical Systems. All technical protocols active.</p>
             <p className="text-[8px] font-bold text-slate-600 uppercase tracking-widest">Global Headquarters: Detroit, MI</p>
          </div>
          
          <div className="flex items-center gap-6">
             <div className="h-10 w-px bg-white/5 hidden lg:block"></div>
             <p className="max-w-xs text-[9px] text-slate-500 font-medium italic text-center lg:text-right leading-relaxed">
               As an Amazon Associate, AutoArty earns from qualifying purchases. Our analysis remains independent and data-driven.
             </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
