
import React from 'react';
import { TOOLS_LIST } from '../constants';

interface SectionToolsProps {
  onSeeAll: () => void;
}

const SectionTools: React.FC<SectionToolsProps> = ({ onSeeAll }) => {
  return (
    <section id="tools" className="relative">
      {/* Decorative Background Element */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 relative z-10">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-2 w-12 bg-emerald-600 rounded-full"></div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Owner Utility Suite</h4>
          </div>
          <h2 className="text-5xl font-black font-oswald text-brand-dark uppercase tracking-tighter leading-none mb-4">Precision Diagnostic Tools</h2>
          <p className="text-slate-500 font-medium leading-relaxed">
            Eliminate guesswork with our library of technical calculators and downloadable maintenance frameworks. 
            All tools are calibrated to 2025 industry standards.
          </p>
        </div>
        <button 
          onClick={onSeeAll}
          className="group flex items-center gap-4 bg-white border-2 border-slate-100 px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] text-slate-600 hover:border-emerald-600 hover:text-emerald-600 transition-all shadow-xl shadow-slate-200/50"
        >
          Explore Tool Hub
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {TOOLS_LIST.slice(0, 4).map((tool, idx) => (
          <div 
            key={idx} 
            onClick={onSeeAll}
            className="group relative bg-white border border-slate-100 p-8 rounded-[2.5rem] flex flex-col transition-all duration-500 cursor-pointer hover:shadow-[0_30px_60px_-15px_rgba(16,185,129,0.15)] hover:-translate-y-2 overflow-hidden"
          >
            {/* Hover Background Accent */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50 rounded-full -mr-12 -mt-12 transition-transform duration-700 group-hover:scale-[3] opacity-0 group-hover:opacity-100"></div>
            
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-8">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-4xl shadow-inner group-hover:bg-white group-hover:shadow-xl group-hover:scale-110 transition-all duration-500">
                  <span className="grayscale group-hover:grayscale-0 transition-all">{tool.icon}</span>
                </div>
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-300 group-hover:text-emerald-600 transition-colors">
                  v4.2.0
                </span>
              </div>
              
              <div className="mb-8">
                <span className="inline-block bg-slate-100 text-slate-500 text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-3 group-hover:bg-emerald-100 group-hover:text-emerald-700 transition-colors">
                  {tool.category || 'Utility'}
                </span>
                <h3 className="text-xl font-black font-oswald text-brand-dark uppercase tracking-tight group-hover:text-slate-950 transition-colors mb-2">
                  {tool.name}
                </h3>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider leading-relaxed">
                  {tool.desc}
                </p>
              </div>

              <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-50">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-dark group-hover:text-emerald-600 transition-colors">
                  Launch App
                </span>
                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Trust Indicator */}
      <div className="mt-16 flex flex-wrap justify-center gap-12 py-8 border-t border-slate-100 opacity-40">
        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
          Encrypted Calculation
        </div>
        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          Instant Deployment
        </div>
        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 00-2 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
          Zero User Data Logging
        </div>
      </div>
    </section>
  );
};

export default SectionTools;
