import React from 'react';
import AdSlot from './AdSlot';
import { CarBrand } from '../types';

interface BrandDetailPageProps {
  brand: CarBrand;
}

const BrandDetailPage: React.FC<BrandDetailPageProps> = ({ brand }) => {
  return (
    <div className="animate-fade-in bg-slate-950 min-h-screen text-white font-sans selection:bg-brand-accent selection:text-brand-dark pb-24">
      
      {/* Technical Dossier Header */}
      <section className="relative pt-24 pb-32 overflow-hidden border-b border-white/5">
        {/* Engineering Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="brandGridPattern" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#brandGridPattern)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-16 items-start">
              <div className="w-full lg:w-1/3">
                <div className="bg-white rounded-[2.5rem] p-12 shadow-2xl shadow-brand-accent/10 border border-white/10 relative group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <img src={brand.logo} alt={brand.name} className="max-h-32 w-full object-contain transition-transform duration-700 group-hover:scale-110" />
                </div>
                
                <div className="mt-10 grid grid-cols-2 gap-4">
                  <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                    <p className="text-[8px] font-black uppercase tracking-widest text-slate-500 mb-1">Dossier ID</p>
                    <p className="text-xs font-black font-mono uppercase text-brand-accent">0x{brand.id.toUpperCase()}</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                    <p className="text-[8px] font-black uppercase tracking-widest text-slate-500 mb-1">Status</p>
                    <p className="text-xs font-black uppercase text-emerald-500">Active Fleet</p>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-2/3">
                <div className="flex items-center gap-4 mb-6">
                   <div className="h-0.5 w-12 bg-brand-accent rounded-full"></div>
                   <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">Automotive Intelligence Protocol</h4>
                </div>
                <h1 className="text-6xl md:text-8xl font-black font-oswald uppercase tracking-tighter leading-none mb-8">
                  {brand.name}<span className="text-brand-accent">.</span>
                </h1>
                <p className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed max-w-3xl border-l-4 border-brand-accent/30 pl-8 mb-12 italic">
                  "{brand.history}"
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { label: 'Founded', val: brand.founded },
                    { label: 'Headquarters', val: brand.origin },
                    { label: 'Strategic Focus', val: brand.focus },
                    { label: 'Reliability Index', val: `${brand.reliabilityScore}/10` }
                  ].map((stat, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md">
                       <p className="text-[8px] font-black uppercase tracking-widest text-slate-500 mb-2">{stat.label}</p>
                       <p className="text-sm font-black font-oswald uppercase text-white truncate">{stat.val}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Intelligence Grid */}
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-8 space-y-24">
            
            {/* 2025 MANUFACTURING FLEET */}
            <section>
              <div className="flex items-center gap-4 mb-12 border-b border-white/5 pb-4">
                 <div className="h-8 w-1 bg-brand-accent rounded-full"></div>
                 <h2 className="text-3xl font-black font-oswald uppercase tracking-tight text-white">2025 Manufacturing Fleet</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {brand.currentModels.map((model, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all group border-b-4 hover:border-brand-accent/50 border-b-transparent">
                     <p className="text-[8px] font-black uppercase tracking-widest text-slate-500 mb-2">Model 0{idx+1}</p>
                     <h4 className="text-lg font-black font-oswald uppercase text-white group-hover:text-brand-accent transition-colors leading-tight">{model}</h4>
                     <div className="mt-4 flex items-center justify-between">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        <span className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">Active</span>
                     </div>
                  </div>
                ))}
              </div>
            </section>

            {/* TECHNICAL READOUTS */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <div className="bg-slate-900 border border-white/10 p-12 rounded-[3rem] relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-racing/5 blur-3xl -mr-16 -mt-16"></div>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-brand-racing/10 flex items-center justify-center text-2xl">🔧</div>
                    <h3 className="text-2xl font-black font-oswald uppercase text-white">Parts Strategy</h3>
                  </div>
                  <p className="text-slate-400 text-base leading-relaxed mb-10 font-medium">
                    {brand.partsNote}
                  </p>
                  <a href={brand.partsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 bg-brand-racing/20 text-brand-racing border border-brand-racing/30 px-8 py-4 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-brand-racing hover:text-white transition-all shadow-xl shadow-brand-racing/10">
                     Open Parts Portal <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </a>
               </div>

               <div className="bg-slate-900 border border-white/10 p-12 rounded-[3rem] relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 blur-3xl -mr-16 -mt-16"></div>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-brand-accent/10 flex items-center justify-center text-2xl">🛡️</div>
                    <h3 className="text-2xl font-black font-oswald uppercase text-white">Maintenance Hub</h3>
                  </div>
                  <p className="text-slate-400 text-base leading-relaxed mb-10 font-medium">
                    {brand.warrantyInfo}
                  </p>
                  <a href={brand.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 bg-brand-accent/20 text-brand-accent border border-brand-accent/30 px-8 py-4 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-brand-accent hover:text-brand-dark transition-all shadow-xl shadow-brand-accent/10">
                     Warranty Database <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </a>
               </div>
            </section>

            {/* AD PLACEMENT */}
            <div className="relative group">
               <div className="absolute -inset-1 bg-gradient-to-r from-brand-accent to-brand-racing rounded-[2.6rem] blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
               <AdSlot type="banner" className="bg-slate-900 border-white/10 rounded-[2.5rem] relative" />
            </div>
          </div>

          {/* SIDEBAR INTELLIGENCE */}
          <div className="lg:col-span-4 space-y-12">
             <div className="sticky top-32 space-y-12">
                
                {/* TECHNICAL TOOLS WIDGET */}
                <div className="bg-slate-900 border border-white/10 rounded-[2.5rem] p-10 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-racing/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 mb-6">Diagnostic Hub</h4>
                  <h3 className="text-3xl font-black font-oswald uppercase leading-[0.9] mb-6">{brand.name} VIN <br /> Decoder Unit</h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-10 font-medium">Verify chassis authenticity and cross-reference against global recall databases for {brand.name} vehicles.</p>
                  <button className="w-full bg-brand-racing text-white py-6 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white hover:text-brand-racing transition-all shadow-[0_20px_40px_-15px_rgba(225,29,72,0.4)] active:scale-95">
                     Initialize Technical Scan
                  </button>
                </div>

                {/* CORPORATE QUICK-LINKS */}
                <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 backdrop-blur-md">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 mb-10 text-center">Manufacturer Network</h4>
                  <ul className="space-y-6">
                    <li className="flex justify-between items-center py-4 border-b border-white/5">
                       <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">Service Line</span>
                       <span className="text-[11px] font-black uppercase text-white">Active</span>
                    </li>
                    <li className="flex justify-between items-center py-4 border-b border-white/5">
                       <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">Recall Database</span>
                       <span className="text-[11px] font-black uppercase text-brand-accent">Live Link</span>
                    </li>
                    <li className="flex justify-between items-center py-4">
                       <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">Niche Segment</span>
                       <span className="text-[11px] font-black uppercase text-white text-right max-w-[150px] truncate">{brand.focus}</span>
                    </li>
                  </ul>
                  <div className="mt-8 pt-8 border-t border-white/5 flex justify-center gap-2">
                     {[1,2,3,4,5].map(i => <div key={i} className="w-1 h-1 rounded-full bg-slate-800"></div>)}
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandDetailPage;