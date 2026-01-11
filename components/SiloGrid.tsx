
import React from 'react';
import { SILO_CATEGORIES } from '../constants';
import { SiloCategory } from '../types';
import CategoryIcon from './CategoryIcon';

interface SiloGridProps {
  onCategoryClick: (silo: SiloCategory) => void;
  activeFilter?: string;
}

const SiloGrid: React.FC<SiloGridProps> = ({ onCategoryClick, activeFilter }) => {
  const colorSchemes: Record<string, { gradient: string, glow: string, accent: string, text: string }> = {
    cyan: { gradient: 'from-cyan-500 to-cyan-700', glow: 'shadow-cyan-500/20', accent: '#06b6d4', text: 'text-cyan-400' },
    indigo: { gradient: 'from-indigo-500 to-indigo-700', glow: 'shadow-indigo-500/20', accent: '#6366f1', text: 'text-indigo-400' },
    amber: { gradient: 'from-amber-400 to-amber-600', glow: 'shadow-amber-500/20', accent: '#f59e0b', text: 'text-amber-400' },
    slate: { gradient: 'from-slate-500 to-slate-700', glow: 'shadow-slate-500/20', accent: '#64748b', text: 'text-slate-400' },
    emerald: { gradient: 'from-emerald-500 to-emerald-700', glow: 'shadow-emerald-500/20', accent: '#10b981', text: 'text-emerald-400' },
    blue: { gradient: 'from-blue-500 to-blue-700', glow: 'shadow-blue-500/20', accent: '#3b82f6', text: 'text-blue-400' },
    violet: { gradient: 'from-violet-500 to-violet-700', glow: 'shadow-violet-500/20', accent: '#8b5cf6', text: 'text-violet-400' },
    rose: { gradient: 'from-rose-500 to-rose-700', glow: 'shadow-rose-500/20', accent: '#e11d48', text: 'text-rose-400' },
    orange: { gradient: 'from-orange-500 to-orange-700', glow: 'shadow-orange-500/20', accent: '#f97316', text: 'text-orange-400' },
  };

  // Logic to simulate "Technical Relevancy" based on filters
  const getRelevancy = (siloId: string) => {
    if (!activeFilter) return null;
    const relevanceMap: Record<string, string[]> = {
      'Enthusiast': ['wheels-tires', 'tools-equipment', 'maintenance'],
      'Daily Driver': ['car-care', 'insurance', 'accessories'],
      'Safety First': ['safety', 'insurance', 'maintenance'],
      'Future Tech': ['ev', 'tools-equipment', 'accessories']
    };
    return relevanceMap[activeFilter]?.includes(siloId) ? 'High Relevancy' : 'Standard';
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {SILO_CATEGORIES.map((silo) => {
        const theme = colorSchemes[silo.color] || colorSchemes.blue;
        const relevancy = getRelevancy(silo.id);
        const isMuted = activeFilter && relevancy !== 'High Relevancy';

        return (
          <div 
            key={silo.id} 
            onClick={() => onCategoryClick(silo)}
            className={`relative group bg-slate-900/40 border border-white/5 rounded-[2.5rem] overflow-hidden cursor-pointer flex flex-col transition-all duration-700 hover:-translate-y-3 hover:border-white/20 shadow-2xl backdrop-blur-xl ${isMuted ? 'opacity-40 grayscale' : 'opacity-100'} ${theme.glow}`}
          >
            {/* Background SVG Grid Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id={`grid-${silo.id}`} width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill={`url(#grid-${silo.id})`} />
              </svg>
            </div>

            {/* Relevancy Tag */}
            {relevancy === 'High Relevancy' && (
              <div className="absolute top-6 right-8 z-20">
                <div className="bg-brand-accent text-brand-dark px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest shadow-lg animate-pulse">
                  Target Priority
                </div>
              </div>
            )}
            
            <div className="p-10 relative z-10 flex flex-col h-full">
              {/* Module Header */}
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-5">
                   <div className={`w-16 h-16 bg-white/5 backdrop-blur-2xl rounded-2xl flex items-center justify-center shadow-inner border border-white/10 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-700`}>
                      <CategoryIcon id={silo.id} className="w-8 h-8 text-white" themeColor={theme.accent} />
                   </div>
                   <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/40">Verified Feed</span>
                      </div>
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-500">ID: HUB-0{silo.id.length}</h4>
                   </div>
                </div>
              </div>
              
              <h3 className="text-3xl font-black font-oswald uppercase tracking-tight text-white mb-6 leading-none group-hover:text-brand-accent transition-colors">
                {silo.title}
              </h3>
              
              {/* Simulated Data Sparkline */}
              <div className="h-12 w-full mb-8 flex items-end gap-1 opacity-20 group-hover:opacity-40 transition-opacity">
                 {[...Array(12)].map((_, i) => (
                   <div 
                    key={i} 
                    className={`flex-grow bg-white rounded-t-sm`} 
                    style={{ height: `${20 + Math.random() * 80}%`, transitionDelay: `${i * 50}ms` }}
                   ></div>
                 ))}
              </div>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {silo.items.slice(0, 4).map((item, idx) => (
                  <li key={idx} className="text-slate-400 text-[11px] font-bold uppercase tracking-wider flex items-center justify-between group-hover:text-slate-200 transition-colors">
                    <div className="flex items-center gap-3">
                      <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${theme.gradient} shadow-lg shadow-white/10`}></span>
                      {item}
                    </div>
                    <span className="text-[8px] opacity-30 group-hover:opacity-100 transition-opacity">0{idx+1}</span>
                  </li>
                ))}
              </ul>
              
              {/* Module Footer Dashboard */}
              <div className="flex items-center justify-between mt-auto pt-8 border-t border-white/5">
                <div className="space-y-1">
                  <p className="text-[8px] font-black uppercase tracking-[0.2em] text-slate-500">Benchmark Rating</p>
                  <p className={`text-[10px] font-black uppercase tracking-[0.2em] ${theme.text}`}>9.4 / 10.0</p>
                </div>
                <div className={`w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-white bg-white/5 group-hover:bg-gradient-to-br ${theme.gradient} transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </div>
              </div>
            </div>
            
            {/* Card Glare Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          </div>
        );
      })}
    </div>
  );
};

export default SiloGrid;
