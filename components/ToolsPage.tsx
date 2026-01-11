
import React from 'react';
import { TOOLS_LIST } from '../constants';

interface ToolsPageProps {
  onToolClick?: (tool: any) => void;
}

const ToolsPage: React.FC<ToolsPageProps> = ({ onToolClick }) => {
  const calculatorTools = TOOLS_LIST.filter(t => t.category === "Calculators");
  const templateTools = TOOLS_LIST.filter(t => t.category === "Templates");

  return (
    <div className="container mx-auto px-4 py-12 animate-fade-in">
      <div className="bg-slate-900 rounded-2xl p-12 text-white mb-16 relative overflow-hidden shadow-2xl">
        <div className="relative z-10 max-w-2xl">
          <span className="bg-amber-500 text-slate-950 px-3 py-1 rounded text-[10px] font-black uppercase tracking-widest mb-4 inline-block">Free Resources</span>
          <h1 className="text-5xl font-black font-oswald uppercase tracking-tight mb-6">AutoArty <span className="text-slate-400">Toolkit</span></h1>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed font-medium">Professional-grade utilities designed for enthusiasts and everyday drivers. No registration required.</p>
          <button className="bg-white text-slate-950 px-8 py-4 rounded font-black uppercase text-xs tracking-widest hover:bg-slate-100 transition shadow-xl">
            Download Toolkit (All Files)
          </button>
        </div>
        <div className="absolute right-0 top-0 h-full w-1/2 opacity-5 pointer-events-none">
           <img src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="" />
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold font-oswald uppercase mb-8 flex items-center gap-3 text-slate-900">
          <span className="w-6 h-1 bg-slate-900 rounded"></span> Calculators & Decoders
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {calculatorTools.map((tool, j) => (
            <div 
              key={j} 
              onClick={() => onToolClick?.(tool)}
              className="bg-white p-8 rounded border border-slate-100 shadow-sm hover:border-slate-900 transition-all cursor-pointer group"
            >
              <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition duration-300">{tool.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition">{tool.name}</h3>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">{tool.desc}</p>
              <div className="flex items-center gap-2 text-slate-900 font-bold text-[10px] uppercase tracking-widest">
                Execute Tool <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold font-oswald uppercase mb-8 flex items-center gap-3 text-slate-900">
          <span className="w-6 h-1 bg-slate-900 rounded"></span> Downloadable Templates
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {templateTools.map((tool, j) => (
            <div 
              key={j} 
              onClick={() => onToolClick?.(tool)}
              className="bg-white p-8 rounded border border-slate-100 shadow-sm hover:border-slate-900 transition-all cursor-pointer group"
            >
              <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition duration-300">{tool.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition">{tool.name}</h3>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">{tool.desc}</p>
              <div className="flex items-center gap-2 text-slate-900 font-bold text-[10px] uppercase tracking-widest">
                Execute Tool <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToolsPage;
