
import React from 'react';
import { AUTHORITY_BRANDS } from '../constants';

const BrandBar: React.FC = () => {
  return (
    <div className="bg-white py-8 border-b border-slate-100">
      <div className="container mx-auto px-4">
        <p className="text-center text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-6">
          Independent Reviews Recommended By Industry Leaders
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
          {AUTHORITY_BRANDS.map((brand) => (
            <div key={brand.name} className="h-6 md:h-8">
              <span className="font-oswald text-xl font-bold tracking-tighter text-slate-900">{brand.name.toUpperCase()}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandBar;
