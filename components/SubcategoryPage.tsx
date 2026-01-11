
import React, { useState, useEffect } from 'react';
import { BLOG_POSTS, TOP_PICKS, SILO_CATEGORIES, CATEGORY_EXPERTS } from '../constants';
import { BlogPost } from '../types';
import AdSlot from './AdSlot';
import AISuggestionBox from './AISuggestionBox';
import SubItemIcon from './SubItemIcon';
import CategoryIcon from './CategoryIcon';

interface SubcategoryPageProps {
  categoryName: string;
  subcategoryName: string;
  onPostClick?: (post: BlogPost) => void;
}

const SubcategoryPage: React.FC<SubcategoryPageProps> = ({ categoryName, subcategoryName, onPostClick }) => {
  const [isScanning, setIsScanning] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsScanning(false), 800);
    return () => clearTimeout(timer);
  }, [subcategoryName]);

  const posts = BLOG_POSTS.filter(p => p.subcategory === subcategoryName);
  const parentCategory = SILO_CATEGORIES.find(c => c.title === categoryName);
  const expert = parentCategory ? CATEGORY_EXPERTS[parentCategory.id] : null;
  const relatedProducts = TOP_PICKS.filter(p => p.category === subcategoryName);

  return (
    <div className="animate-fade-in bg-white min-h-screen selection:bg-brand-accent selection:text-brand-dark">
      {/* SCANNING OVERLAY */}
      {isScanning && (
        <div className="fixed inset-0 z-[200] bg-slate-950 flex flex-col items-center justify-center">
           <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden mb-4">
              <div className="h-full bg-brand-accent animate-[loading_0.8s_ease-in-out]"></div>
           </div>
           <p className="text-[9px] font-black uppercase tracking-[0.5em] text-brand-accent animate-pulse">Initializing Sub-Silo 0x{subcategoryName.length.toString(16)}</p>
        </div>
      )}

      {/* TOP HUD NAV */}
      <div className="bg-slate-950 text-white border-b border-white/5 py-3 px-6 sticky top-0 z-[60] backdrop-blur-xl bg-opacity-90">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 text-[9px] font-black uppercase tracking-[0.3em] text-slate-500">
            <span className="hover:text-brand-accent cursor-pointer transition-colors">Verticals</span>
            <span className="text-white/10">/</span>
            <span className="hover:text-brand-accent cursor-pointer transition-colors">{categoryName}</span>
            <span className="text-white/10">/</span>
            <span className="text-white">{subcategoryName}</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-[9px] font-black uppercase tracking-widest">
             <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-racing animate-ping"></span>
                <span className="text-slate-400">Live Data Sync</span>
             </div>
          </div>
        </div>
      </div>

      {/* TECHNICAL HERO */}
      <section className="bg-slate-950 text-white pt-24 pb-32 relative overflow-hidden">
        {/* Technical Blueprint Elements */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-accent/[0.03] to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-2/3">
              <div className="flex items-center gap-6 mb-8">
                 <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-3xl">
                    <SubItemIcon name={subcategoryName} className="w-8 h-8 text-brand-accent" />
                 </div>
                 <div className="h-px w-24 bg-white/10"></div>
                 <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">Module Archive {subcategoryName.length}</span>
              </div>

              <h1 className="text-5xl md:text-8xl font-black font-oswald uppercase tracking-tighter leading-none mb-10">
                {subcategoryName}<span className="text-brand-accent">.</span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed max-w-2xl italic border-l-4 border-brand-accent/30 pl-8 mb-12">
                "Our 2025 engineering protocol for {subcategoryName.toLowerCase()} focuses on material degradation under high-thermal load and stress-cycle reliability benchmarks."
              </p>

              <div className="flex flex-wrap gap-8">
                 <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md">
                    <p className="text-[8px] font-black uppercase tracking-widest text-slate-500 mb-2">Technical Documents</p>
                    <p className="text-3xl font-black font-oswald uppercase">{posts.length} Reports</p>
                 </div>
                 <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md">
                    <p className="text-[8px] font-black uppercase tracking-widest text-slate-500 mb-2">Category Authority</p>
                    <p className="text-3xl font-black font-oswald uppercase text-brand-accent">9.8 / 10</p>
                 </div>
                 <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md">
                    <p className="text-[8px] font-black uppercase tracking-widest text-slate-500 mb-2">Market Volatility</p>
                    <p className="text-3xl font-black font-oswald uppercase text-emerald-500">Stable</p>
                 </div>
              </div>
            </div>

            {/* EXPERT SIDE-DASHBOARD */}
            {expert && (
              <div className="lg:w-1/3 w-full">
                <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 backdrop-blur-2xl relative overflow-hidden group">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-brand-accent/10 transition-colors"></div>
                   
                   <div className="flex items-center gap-6 mb-8">
                      <img src={expert.image} className="w-20 h-20 rounded-2xl object-cover border-2 border-brand-accent/20" alt={expert.name} />
                      <div>
                         <h4 className="font-oswald text-xl font-black uppercase text-white leading-none mb-1">{expert.name}</h4>
                         <p className="text-[9px] font-black uppercase tracking-widest text-brand-accent">{expert.role}</p>
                      </div>
                   </div>
                   
                   <p className="text-xs text-slate-400 leading-relaxed italic mb-8">
                      "Each technical manual in the {subcategoryName} silo is audited against my personal field datasets from 15+ years of industrial application."
                   </p>
                   
                   <button className="w-full bg-white/10 hover:bg-white/20 text-white py-4 rounded-xl text-[9px] font-black uppercase tracking-[0.2em] transition-all border border-white/5">
                      View Expert Methodology
                   </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* MAIN DATA FEED */}
      <div className="container mx-auto px-4 -mt-12 relative z-20">
        <div className="flex flex-col lg:flex-row gap-16">
          
          <main className="lg:w-3/4">
            {/* GRID OF ARTICLES */}
            <div className="mb-24">
               <div className="flex items-center justify-between mb-12">
                  <h2 className="text-3xl font-black font-oswald uppercase tracking-tight text-slate-900">Technical Reports Archive</h2>
                  <div className="flex items-center gap-4">
                     <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Sort By:</span>
                     <select className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-[9px] font-black uppercase tracking-widest outline-none">
                        <option>Newest Audit</option>
                        <option>Relevancy</option>
                        <option>Impact Score</option>
                     </select>
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {posts.map((post, i) => (
                    <article 
                      key={i} 
                      onClick={() => onPostClick?.(post)}
                      className="group bg-slate-50 border border-slate-100 rounded-[3rem] p-8 transition-all duration-500 hover:bg-white hover:shadow-3xl hover:-translate-y-2 cursor-pointer flex flex-col"
                    >
                       <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden mb-8 shadow-xl">
                          <img src={post.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" alt={post.title} />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20">
                             <p className="text-[8px] font-black uppercase tracking-widest text-slate-900">Report ID: 0{i+1}</p>
                          </div>
                       </div>

                       <div className="flex items-center gap-4 mb-4 text-[9px] font-black uppercase tracking-widest text-slate-400">
                          <span>{post.date}</span>
                          <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                          <span>400h Testing</span>
                       </div>

                       <h3 className="text-2xl font-black font-oswald uppercase tracking-tight text-slate-900 leading-none mb-6 group-hover:text-brand-racing transition-colors">
                          {post.title}
                       </h3>

                       <p className="text-slate-500 text-sm leading-relaxed mb-10 font-medium line-clamp-3">
                          {post.excerpt}
                       </p>

                       <div className="mt-auto pt-8 border-t border-slate-200 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                             <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                             <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Verified Payload</span>
                          </div>
                          <span className="text-[10px] font-black uppercase tracking-widest text-brand-dark group-hover:translate-x-1 transition-transform">Read Analysis →</span>
                       </div>
                    </article>
                  ))}
               </div>

               {posts.length === 0 && (
                 <div className="py-32 text-center bg-slate-50 rounded-[3rem] border-2 border-dashed border-slate-200">
                    <p className="text-slate-400 font-black uppercase tracking-[0.3em] text-sm mb-4">No active datasets for this sub-module</p>
                    <button className="text-brand-racing font-bold underline text-xs uppercase tracking-widest">Request Manual Audit</button>
                 </div>
               )}
            </div>

            {/* MID-FEED AD */}
            <AdSlot type="banner" className="rounded-[2.5rem] mb-24" />

            {/* RECOMMENDED HARDWARE (AFFILIATE) */}
            <section className="bg-slate-900 rounded-[4rem] p-16 text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/5 blur-[120px] rounded-full"></div>
               
               <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8 relative z-10">
                  <div className="max-w-xl">
                     <h2 className="text-4xl font-black font-oswald uppercase tracking-tight mb-4">Laboratory Recommendations</h2>
                     <p className="text-slate-400 font-medium italic">"These specific units passed our 4-stage durability and performance consistency tests with scores above 95%."</p>
                  </div>
                  <button className="text-[10px] font-black uppercase tracking-widest text-brand-accent border-b border-brand-accent pb-1 hover:text-white hover:border-white transition-all">View All Lab Picks →</button>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
                  {relatedProducts.map((product, idx) => (
                    <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-md group hover:bg-white/10 transition-all cursor-pointer">
                       <div className="aspect-square bg-white rounded-2xl mb-8 flex items-center justify-center p-6 overflow-hidden">
                          <img src={product.image} className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500" alt={product.title} />
                       </div>
                       <div className="flex items-center gap-1 text-brand-accent mb-4">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                          ))}
                       </div>
                       <h3 className="font-bold text-white mb-6 line-clamp-2 leading-tight">{product.title}</h3>
                       <div className="flex items-center justify-between mt-auto">
                          <span className="text-2xl font-black text-white">{product.price}</span>
                          <button className="bg-brand-accent text-brand-dark px-6 py-3 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-white transition-all">
                             Check Price
                          </button>
                       </div>
                    </div>
                  ))}
               </div>
            </section>
          </main>

          {/* SIDEBAR */}
          <aside className="lg:w-1/4 space-y-12">
            <div className="sticky top-[100px] space-y-12">
               
               {/* CATEGORY NAV */}
               <div className="bg-slate-50 border border-slate-200 rounded-[2rem] p-8">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6">Module Explorer</h4>
                  <div className="space-y-3">
                     {parentCategory?.items.map((item, i) => (
                       <button 
                        key={i}
                        className={`w-full text-left p-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center justify-between group ${item === subcategoryName ? 'bg-brand-dark text-white' : 'hover:bg-white hover:shadow-lg text-slate-500'}`}
                       >
                         {item}
                         <svg className={`w-3 h-3 group-hover:translate-x-1 transition-transform ${item === subcategoryName ? 'text-brand-accent' : 'text-slate-300'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
                       </button>
                     ))}
                  </div>
               </div>

               {/* DOWNLOADS */}
               <div className="bg-brand-racing text-white rounded-[2rem] p-10 relative overflow-hidden shadow-2xl shadow-brand-racing/20">
                  <div className="relative z-10">
                     <h4 className="text-[9px] font-black uppercase tracking-[0.3em] text-white/60 mb-4">Technical Resource</h4>
                     <h3 className="text-2xl font-black font-oswald uppercase leading-none mb-6">Free 2025 <br /> Checklist</h3>
                     <p className="text-xs text-white/80 leading-relaxed mb-10">Download the laboratory standard operating procedure for {subcategoryName.toLowerCase()} inspections.</p>
                     <button className="w-full bg-white text-brand-racing py-5 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl transform hover:scale-[1.02] transition">
                        Get PDF (2.4MB)
                     </button>
                  </div>
                  <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-white opacity-5 blur-3xl rounded-full"></div>
               </div>

               {/* AD SLOT */}
               <AdSlot type="vertical" className="rounded-[2.5rem]" />

            </div>
          </aside>
        </div>
      </div>

      <style>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default SubcategoryPage;
