
import React from 'react';
import { USA_CAR_BRANDS } from '../constants';

interface BrandsPageProps {
  onBrandClick: (brand: any) => void;
}

const BrandsPage: React.FC<BrandsPageProps> = ({ onBrandClick }) => {
  return (
    <div className="animate-fade-in bg-brand-surface min-h-screen pb-24">
      {/* Page Header */}
      <section className="bg-brand-dark text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="grid grid-cols-6 gap-4 transform -rotate-12 scale-150">
             {USA_CAR_BRANDS.slice(0, 18).map((b, i) => (
               <img key={i} src={b.logo} className="w-full grayscale invert opacity-40" alt="" />
             ))}
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-block bg-brand-accent text-brand-dark px-4 py-1 rounded text-[10px] font-black uppercase tracking-[0.4em] mb-4">Manufacturer Directory</div>
          <h1 className="text-5xl md:text-7xl font-black font-oswald uppercase tracking-tight mb-6">American Automotive <span className="text-brand-accent">Legacies</span></h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-medium">
            Deep-dive technical profiles of the heavyweights shaping the domestic market. From Detroit's iron to Silicon Valley's code.
          </p>
        </div>
      </section>

      {/* Brand Grid */}
      <div className="container mx-auto px-4 -mt-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {USA_CAR_BRANDS.map((brand) => (
            <div key={brand.id} className="bg-white rounded-[2rem] border border-slate-100 p-8 shadow-2xl shadow-slate-900/5 hover:-translate-y-2 transition-all duration-500 group flex flex-col cursor-pointer" onClick={() => onBrandClick(brand)}>
              <div className="h-24 mb-10 flex items-center justify-center p-4">
                <img src={brand.logo} alt={brand.name} className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
              
              <div className="mb-8">
                 <h2 className="text-2xl font-black font-oswald uppercase tracking-tight text-slate-900 mb-1 group-hover:text-brand-racing transition-colors">{brand.name}</h2>
                 <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">{brand.focus}</p>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                 <div className="flex justify-between items-center py-2 border-b border-slate-50">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">HQ Location</span>
                    <span className="text-[10px] font-black text-slate-700 uppercase">{brand.origin}</span>
                 </div>
                 <div className="flex justify-between items-center py-2 border-b border-slate-50">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Reliability Score</span>
                    <span className="text-[10px] font-black text-brand-accent uppercase">{brand.reliabilityScore}/10</span>
                 </div>
                 <div className="flex justify-between items-center py-2 border-b border-slate-50">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Market Status</span>
                    <span className="flex items-center gap-1.5">
                       <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                       <span className="text-[9px] font-black text-emerald-600 uppercase">Operational</span>
                    </span>
                 </div>
              </div>

              <button className="w-full bg-slate-900 text-white py-4 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-brand-racing transition-all shadow-lg active:scale-95">
                 Open Corporate Dossier
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Ad Section */}
      <div className="container mx-auto px-4 mt-24">
         <div className="bg-slate-100 border-2 border-dashed border-slate-200 rounded-3xl p-12 text-center text-slate-400 uppercase text-[10px] font-black tracking-widest">
            AdSense Responsive Placement - [Automotive Contextual]
         </div>
      </div>
    </div>
  );
};

export default BrandsPage;
