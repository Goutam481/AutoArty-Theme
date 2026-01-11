
import React from 'react';
import { TOP_PICKS } from '../constants';

interface SectionTopPicksProps {
  onSeeAll: () => void;
}

const SectionTopPicks: React.FC<SectionTopPicksProps> = ({ onSeeAll }) => {
  return (
    <section className="bg-white rounded-2xl px-10 py-20 shadow-sm border border-slate-100">
      <div className="max-w-4xl mx-auto text-center mb-20">
        <div className="flex justify-center items-center gap-3 mb-6">
           <svg className="w-5 h-5 text-amber-500 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
           <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Curated Intelligence</h4>
        </div>
        <h2 className="text-4xl md:text-5xl font-black font-oswald text-slate-900 uppercase mb-6 tracking-tight">
          Current Expert <span className="text-slate-400">Benchmarks</span>
        </h2>
        <p className="text-slate-500 font-medium text-lg leading-relaxed max-w-2xl mx-auto italic">
          "Our testing protocol involves 40+ hours of lab and field stress tests for every single category we review."
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {TOP_PICKS.map((pick, idx) => (
          <div key={idx} className="flex flex-col group cursor-pointer border-r border-slate-50 last:border-0 pr-0 md:pr-12 last:pr-0">
            <div className="relative mb-8 overflow-hidden rounded-xl aspect-[4/5] bg-slate-50">
              <img src={pick.image} alt={pick.title} className="w-full h-full object-cover transition duration-700 group-hover:scale-105 mix-blend-multiply" />
              <div className="absolute top-4 left-4 bg-slate-900 text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded">
                Choice #{idx + 1}
              </div>
            </div>
            <div className="flex items-center gap-1 text-amber-500 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className={`h-4 w-4 fill-current ${i < Math.floor(pick.rating) ? '' : 'text-slate-200'}`} viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-slate-400 text-xs font-bold ml-2">{pick.rating} / 5.0</span>
            </div>
            <h3 className="font-bold text-slate-900 text-xl mb-6 line-clamp-2 leading-tight">{pick.title}</h3>
            <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-50">
              <span className="text-2xl font-black text-slate-900 tracking-tighter">{pick.price}</span>
              <button className="text-slate-900 font-black text-[10px] uppercase tracking-widest border-b-2 border-slate-900 hover:text-amber-600 hover:border-amber-600 transition pb-1">
                View On Amazon
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-24 text-center">
        <button 
          onClick={onSeeAll}
          className="bg-slate-900 text-white px-12 py-5 rounded font-black uppercase text-xs tracking-[0.2em] hover:bg-slate-800 transition shadow-2xl"
        >
          Explore All Recommendations
        </button>
      </div>
    </section>
  );
};

export default SectionTopPicks;
