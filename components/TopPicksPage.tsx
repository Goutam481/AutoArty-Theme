
import React from 'react';
import { TOP_PICKS } from '../constants';
import AISuggestionBox from './AISuggestionBox';
import SocialShare from './SocialShare';

const TopPicksPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16 animate-fade-in max-w-6xl">
      <div className="max-w-3xl mb-20">
        <h1 className="text-5xl font-black font-oswald uppercase tracking-tight text-slate-900 mb-6">
          The Best <span className="text-slate-400">Automotive Gear</span> of 2025
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed font-medium">
          Our team rigorously tests products across thousands of miles. We only recommend gear that meets our strict durability and value standards.
        </p>
      </div>

      <div className="space-y-12">
        {TOP_PICKS.map((pick, idx) => (
          <div key={idx} className="bg-white border border-slate-100 rounded-lg overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-all">
            {/* Image Section */}
            <div className="md:w-1/3 relative">
              <img src={`${pick.image}?sig=${idx}`} className="w-full h-full object-cover min-h-[300px]" alt={pick.title} />
              <div className="absolute top-4 left-4 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded">
                #{idx + 1} Best Choice
              </div>
            </div>

            {/* Content Section */}
            <div className="md:w-2/3 p-8 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-black font-oswald uppercase text-slate-900 mb-2">{pick.title}</h3>
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`h-4 w-4 fill-current ${i < Math.floor(pick.rating) ? '' : 'text-slate-200'}`} viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-xs font-bold text-slate-400 ml-2">{pick.rating}/5 Rating</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Current Price</p>
                  <p className="text-2xl font-black text-slate-900">{pick.price}</p>
                </div>
              </div>

              <p className="text-slate-600 mb-6 leading-relaxed">
                Chosen for its exceptional performance and reliability. This product consistently outperforms competitors in independent testing.
              </p>

              <AISuggestionBox 
                context={pick.title} 
                type="product-insight" 
                className="mb-8 border-slate-200 bg-slate-50"
              />

              <div className="mt-auto flex items-center justify-between">
                <div className="flex gap-4 flex-grow">
                  <button className="flex-grow btn-amazon text-slate-950 py-4 rounded font-black text-xs uppercase tracking-widest shadow-lg transition-transform hover:-translate-y-0.5">
                    Check Amazon Price
                  </button>
                  <button className="bg-slate-100 text-slate-900 px-6 py-4 rounded font-bold text-xs uppercase tracking-widest hover:bg-slate-200 transition">
                    Full Review
                  </button>
                </div>
                <SocialShare url={window.location.href} title={`Expert Pick: ${pick.title}`} className="ml-6" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPicksPage;
