
import React, { useState, useEffect } from 'react';
import { SiloCategory } from '../types';
import AISuggestionBox from './AISuggestionBox';
import SocialShare from './SocialShare';
import CategoryIcon from './CategoryIcon';
import SubItemIcon from './SubItemIcon';
import AdSlot from './AdSlot';
import { CATEGORY_EXPERTS } from '../constants';

interface CategoryPageProps {
  category: SiloCategory;
  onSubcategoryClick?: (subcategory: string) => void;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ category, onSubcategoryClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const expert = CATEGORY_EXPERTS[category.id];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const colorMap: Record<string, { primary: string, light: string, text: string, bg: string, border: string, gradient: string, glow: string, accentHex: string }> = {
    cyan: { primary: 'bg-cyan-600', light: 'bg-cyan-50', text: 'text-cyan-400', bg: 'bg-slate-950', border: 'border-cyan-500/30', gradient: 'from-cyan-500 to-cyan-700', glow: 'shadow-cyan-500/20', accentHex: '#06b6d4' },
    indigo: { primary: 'bg-indigo-600', light: 'bg-indigo-50', text: 'text-indigo-400', bg: 'bg-slate-950', border: 'border-indigo-500/30', gradient: 'from-indigo-500 to-indigo-700', glow: 'shadow-indigo-500/20', accentHex: '#6366f1' },
    amber: { primary: 'bg-brand-accent', light: 'bg-amber-50', text: 'text-brand-accent', bg: 'bg-slate-950', border: 'border-amber-500/30', gradient: 'from-amber-400 to-amber-600', glow: 'shadow-amber-500/20', accentHex: '#f59e0b' },
    slate: { primary: 'bg-brand-dark', light: 'bg-slate-50', text: 'text-slate-400', bg: 'bg-slate-950', border: 'border-slate-500/30', gradient: 'from-slate-500 to-slate-700', glow: 'shadow-slate-500/20', accentHex: '#64748b' },
    emerald: { primary: 'bg-emerald-600', light: 'bg-emerald-50', text: 'text-emerald-400', bg: 'bg-slate-950', border: 'border-emerald-500/30', gradient: 'from-emerald-500 to-emerald-700', glow: 'shadow-emerald-500/20', accentHex: '#10b981' },
    blue: { primary: 'bg-blue-600', light: 'bg-blue-50', text: 'text-blue-400', bg: 'bg-slate-950', border: 'border-blue-500/30', gradient: 'from-blue-500 to-blue-700', glow: 'shadow-blue-500/20', accentHex: '#3b82f6' },
    violet: { primary: 'bg-violet-600', light: 'bg-violet-50', text: 'text-violet-400', bg: 'bg-slate-950', border: 'border-violet-500/30', gradient: 'from-violet-500 to-violet-700', glow: 'shadow-violet-500/20', accentHex: '#8b5cf6' },
    rose: { primary: 'bg-brand-racing', light: 'bg-rose-50', text: 'text-brand-racing', bg: 'bg-slate-950', border: 'border-rose-500/30', gradient: 'from-rose-500 to-rose-700', glow: 'shadow-rose-500/20', accentHex: '#e11d48' },
    orange: { primary: 'bg-orange-600', light: 'bg-orange-50', text: 'text-orange-400', bg: 'bg-slate-950', border: 'border-orange-500/30', gradient: 'from-orange-500 to-orange-700', glow: 'shadow-orange-500/20', accentHex: '#f97316' },
  };

  const theme = colorMap[category.color] || colorMap.blue;

  return (
    <div className="animate-fade-in bg-white min-h-screen font-sans selection:bg-brand-accent selection:text-brand-dark">
      
      {/* HUD HEADER & BREADCRUMBS */}
      <nav aria-label="Breadcrumb" className="bg-slate-950 text-white border-b border-white/5 py-4 px-4 sticky top-0 z-[60] backdrop-blur-xl bg-opacity-90">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 text-[9px] font-black uppercase tracking-[0.3em] text-slate-500">
            <span className="hover:text-brand-accent cursor-pointer transition-colors">Directory</span>
            <span className="text-white/10">/</span>
            <span className="text-white">{category.title} Hub</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
             <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-[9px] font-black uppercase tracking-widest text-emerald-500">System Link Active</span>
             </div>
             <div className="h-4 w-px bg-white/10"></div>
             <span className="text-[9px] font-black uppercase tracking-widest text-slate-500">Auth: Level 4 Engineering</span>
          </div>
        </div>
      </nav>

      {/* TECHNICAL HERO */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src={category.heroImage} 
            className="w-full h-full object-cover opacity-20 scale-110 blur-sm" 
            alt={`${category.title} Background`} 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"></div>
          {/* Blueprint Grid Overlay */}
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl">
            <div className="flex items-center gap-6 mb-12">
               <div className={`w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-2xl shadow-2xl ${theme.glow}`}>
                  <CategoryIcon id={category.id} className="w-10 h-10 text-white" themeColor={theme.accentHex} />
               </div>
               <div>
                  <p className={`text-[11px] font-black uppercase tracking-[0.5em] ${theme.text} mb-2`}>Vertical Analysis Hub</p>
                  <div className="h-1 w-20 bg-white/10 rounded-full">
                     <div className={`h-full bg-gradient-to-r ${theme.gradient} rounded-full`} style={{ width: '65%' }}></div>
                  </div>
               </div>
            </div>

            <h1 className="text-6xl md:text-[8rem] lg:text-[10rem] font-black font-oswald uppercase tracking-tighter leading-[0.85] mb-12">
              {category.title}<span className={theme.text}>.</span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
               <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-medium border-l-4 border-white/5 pl-8 italic">
                "Our laboratory benchmarks for {category.title.toLowerCase()} systems leverage 400+ hours of operational testing to ensure component integrity and consumer safety thresholds."
               </p>
               <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-8 bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md">
                     <div className="space-y-1">
                        <p className="text-[9px] font-black uppercase tracking-widest text-slate-500">Live Authority Index</p>
                        <p className="text-3xl font-black font-oswald text-white uppercase">98.4 / <span className="text-slate-600">100</span></p>
                     </div>
                     <div className="h-10 w-px bg-white/10"></div>
                     <div className="space-y-1">
                        <p className="text-[9px] font-black uppercase tracking-widest text-slate-500">Verified Assets</p>
                        <p className="text-3xl font-black font-oswald text-white uppercase">1,204+</p>
                     </div>
                  </div>
                  <div className="flex gap-4">
                    <button className={`flex-grow bg-gradient-to-r ${theme.gradient} text-white py-5 rounded-2xl font-black uppercase text-xs tracking-widest shadow-2xl hover:scale-[1.02] transition active:scale-95`}>
                      Access Hub Directory
                    </button>
                    <SocialShare 
                      url={window.location.href} 
                      title={`AutoArty Hub: ${category.title}`} 
                      className="bg-white/5 text-white p-5 rounded-2xl border border-white/10 hover:bg-white/10 transition"
                    />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* STICKY SUB-NAV */}
      <div className={`bg-white border-b border-slate-100 sticky top-[53px] z-[55] transition-all duration-300 ${scrolled ? 'py-4 shadow-xl' : 'py-6'}`}>
         <div className="container mx-auto px-4 flex items-center justify-between">
            <div className="flex items-center gap-8">
               {['Overview', 'Technical Modules', 'Expert Analysis', 'Lab Data'].map((item) => (
                 <button key={item} className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-brand-dark transition-colors relative group">
                   {item}
                   <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-brand-dark group-hover:w-full transition-all duration-300"></span>
                 </button>
               ))}
            </div>
            <div className="hidden lg:flex items-center gap-4">
               <span className="text-[9px] font-black uppercase tracking-widest text-slate-300 italic">2025 Resource Cycle</span>
               <div className="h-4 w-px bg-slate-200"></div>
               <button className="bg-brand-dark text-white px-5 py-2 rounded-lg text-[9px] font-black uppercase tracking-widest hover:bg-brand-racing transition-all">
                 Request Specific Audit
               </button>
            </div>
         </div>
      </div>

      <div className="container mx-auto px-4 py-24">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* MAIN CONTENT Dossier */}
          <main className="lg:w-3/4">
            <div className="mb-20">
               <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white text-xl">🔬</div>
                  <h2 className="text-3xl md:text-4xl font-black font-oswald uppercase tracking-tight text-slate-900">Technical Modules</h2>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {category.items.map((item, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => onSubcategoryClick?.(item)}
                      className="group relative bg-slate-50 rounded-[2.5rem] border border-slate-200 p-8 md:p-10 cursor-pointer overflow-hidden transition-all duration-500 hover:bg-white hover:shadow-3xl hover:shadow-slate-200 hover:-translate-y-2"
                    >
                      {/* Technical Blueprint Overlay on Hover */}
                      <div className="absolute top-0 right-0 w-48 h-48 bg-slate-100 rounded-full -mr-24 -mt-24 transition-transform duration-700 group-hover:scale-[3] opacity-30 group-hover:opacity-100 group-hover:bg-brand-surface"></div>
                      
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-12">
                           <div className={`w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center group-hover:bg-gradient-to-br ${theme.gradient} transition-all duration-700`}>
                              <SubItemIcon name={item} className="w-8 h-8 text-slate-400 group-hover:text-white transition-colors" themeColor={theme.accentHex} />
                           </div>
                           <div className="text-right">
                              <p className="text-[8px] font-black uppercase tracking-widest text-slate-400 mb-1">Dossier ID</p>
                              <p className="text-[10px] font-black text-slate-900 font-mono">00{idx+1}-{category.id.toUpperCase()}</p>
                           </div>
                        </div>

                        <h3 className="text-xl md:text-2xl font-black font-oswald uppercase text-slate-900 mb-4 group-hover:text-brand-racing transition-colors">
                          {item}
                        </h3>
                        <p className="text-slate-500 text-sm leading-relaxed mb-10 font-medium">
                          Comprehensive benchmarking of material durability, heat-sync performance, and manufacturing tolerances for {item.toLowerCase()} equipment.
                        </p>

                        <div className="flex items-center justify-between pt-8 border-t border-slate-200">
                           <div className="flex items-center gap-3">
                              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                              <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Lab Validated</span>
                           </div>
                           <button className="text-[10px] font-black uppercase tracking-widest text-brand-dark group-hover:text-brand-racing transition-colors">
                             Open Database →
                           </button>
                        </div>
                      </div>
                    </div>
                  ))}
               </div>
            </div>

            {/* AD PLACEMENT */}
            <div className="my-20">
               <AdSlot type="banner" className="rounded-[2.5rem] shadow-sm" />
            </div>

            {/* LAB STATS COMPONENT */}
            <div className="bg-slate-900 rounded-[3rem] p-12 md:p-16 text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 blur-3xl rounded-full"></div>
               <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 text-center md:text-left">
                  {[
                    { label: "Market Volatility", val: "High", icon: "📉", desc: "Pricing shifts of 14% recorded in Q2." },
                    { label: "Safety Redundancy", val: "99.2%", icon: "🛡️", desc: "Top components passed 4-stage fail-safe tests." },
                    { label: "Ownership Yield", val: "Optimal", icon: "💰", desc: "Cost-per-mile efficiency rated A+." }
                  ].map((stat, i) => (
                    <div key={i} className="space-y-4">
                       <div className="text-3xl">{stat.icon}</div>
                       <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">{stat.label}</h4>
                       <p className="text-3xl font-black font-oswald uppercase tracking-tight">{stat.val}</p>
                       <p className="text-sm text-slate-400 leading-relaxed">{stat.desc}</p>
                    </div>
                  ))}
               </div>
            </div>
          </main>

          {/* SIDEBAR DOSSIER */}
          <aside className="lg:w-1/4 space-y-12">
            <div className="sticky top-[150px] space-y-12">
               
               {/* AI MODULE RESTORED */}
               <AISuggestionBox 
                  context={`${category.title} technical analysis and SEO trends`} 
                  type="blog-ideas" 
                  className="bg-white text-slate-900 rounded-[2rem] shadow-xl"
               />

               {/* CATEGORY EXPERT PROFILE */}
               {expert && (
                 <section aria-label="Expert Reviewer" className="bg-slate-900 rounded-[2.5rem] p-8 text-white border border-white/10 relative overflow-hidden shadow-2xl group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-50"></div>
                    <div className="flex flex-col items-center text-center">
                       <div className="relative mb-6">
                          <img 
                            src={expert.image} 
                            alt={`Portrait of ${expert.name}`} 
                            className="w-24 h-24 rounded-full object-cover border-4 border-white/10 shadow-xl group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute -bottom-1 -right-1 bg-brand-accent text-brand-dark rounded-full p-1.5 shadow-lg border-2 border-slate-900">
                             <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.64.304 1.24.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l5-5z" clipRule="evenodd" /></svg>
                          </div>
                       </div>
                       <h3 className="font-oswald text-xl font-black uppercase tracking-tight text-white mb-1">{expert.name}</h3>
                       <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-accent mb-6">{expert.role}</p>
                       <p className="text-xs text-slate-400 leading-relaxed mb-8 italic">
                         "{expert.bio}"
                       </p>
                       <div className="w-full space-y-3">
                          <p className="text-[8px] font-black uppercase tracking-widest text-slate-500">Core Specialties</p>
                          <div className="flex flex-wrap justify-center gap-2">
                             {expert.specialties.map((s, i) => (
                               <span key={i} className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[8px] font-bold text-slate-300 uppercase tracking-widest">
                                 {s}
                               </span>
                             ))}
                          </div>
                       </div>
                    </div>
                 </section>
               )}
               
               <div className="bg-slate-50 rounded-[2.5rem] p-8 border border-slate-200">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-8 text-center">Vertical Whitepaper</h4>
                  <div className="aspect-[3/4] bg-slate-200 rounded-xl mb-8 relative overflow-hidden shadow-inner group cursor-pointer">
                     <img 
                        src={category.heroImage} 
                        className="w-full h-full object-cover grayscale opacity-50 group-hover:scale-110 transition duration-700" 
                        alt={`${category.title} Manual Cover`} 
                     />
                     <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center p-8 text-center">
                        <p className="text-white text-lg font-black font-oswald uppercase leading-none shadow-xl">
                           The {category.title} <br /> 2025 Audit Manual
                        </p>
                     </div>
                  </div>
                  <button className={`w-full bg-slate-900 text-white py-4 rounded-xl font-black uppercase text-[10px] tracking-widest shadow-xl hover:bg-brand-racing transition-all`}>
                     Download (14MB PDF)
                  </button>
                  <p className="mt-4 text-[8px] font-bold text-slate-400 text-center uppercase tracking-widest">
                     Includes 40+ Component Schematics
                  </p>
               </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
