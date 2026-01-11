import React from 'react';
import { BlogPost, ExpertProfile } from '../types';
import { CATEGORY_EXPERTS, TOP_PICKS, BLOG_POSTS } from '../constants';
import AISuggestionBox from './AISuggestionBox';
import SocialShare from './SocialShare';
import AdSlot from './AdSlot';

interface PostDetailPageProps {
  post: BlogPost;
  onNavigate: (path: string, data?: any) => void;
}

const PostDetailPage: React.FC<PostDetailPageProps> = ({ post, onNavigate }) => {
  const expert = CATEGORY_EXPERTS[post.category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')] || CATEGORY_EXPERTS['car-care'];
  const relatedProducts = TOP_PICKS.filter(p => p.category === post.subcategory).slice(0, 2);
  
  // Get 5 latest posts excluding current one if possible, or just the top 5
  const latestPosts = BLOG_POSTS.filter(p => p.title !== post.title).slice(0, 5);

  return (
    <div className="animate-fade-in bg-white min-h-screen selection:bg-brand-accent selection:text-brand-dark">
      {/* TECHNICAL HUD HEADER */}
      <nav aria-label="Breadcrumb" className="bg-slate-950 text-white border-b border-white/5 py-3 px-6 sticky top-0 z-[60] backdrop-blur-xl bg-opacity-90">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 text-[9px] font-black uppercase tracking-[0.3em] text-slate-500">
            <span className="hover:text-brand-accent cursor-pointer transition-colors" onClick={() => onNavigate('home')}>Intelligence Hub</span>
            <span className="text-white/10">/</span>
            <span className="hover:text-brand-accent cursor-pointer transition-colors" onClick={() => onNavigate('blog')}>Reports</span>
            <span className="text-white/10">/</span>
            <span className="text-white truncate max-w-[200px]">{post.title}</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
             <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-[9px] font-black uppercase tracking-widest text-emerald-500">Peer Reviewed</span>
             </div>
             <div className="h-4 w-px bg-white/10"></div>
             <SocialShare url={window.location.href} title={post.title} className="text-white/60" />
          </div>
        </div>
      </nav>

      {/* ARTICLE HERO */}
      <header className="relative pt-24 pb-32 overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src={post.image} 
            className="w-full h-full object-cover opacity-30 scale-105 blur-[2px]" 
            alt={`Hero image for ${post.title}`} 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-8 backdrop-blur-md">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-accent">{post.category}</span>
              <span className="text-white/20">|</span>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">{post.date}</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-oswald uppercase tracking-tighter leading-[1.1] mb-10 drop-shadow-2xl">
              {post.title}<span className="text-brand-accent">.</span>
            </h1>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
               <div className="flex items-center gap-4 bg-white/5 p-3 pr-6 rounded-2xl border border-white/10 backdrop-blur-md">
                  <img src={expert.image} className="w-12 h-12 rounded-xl object-cover" alt={expert.name} />
                  <div className="text-left">
                     <p className="text-[8px] font-black uppercase tracking-widest text-slate-500">Chief Investigator</p>
                     <p className="text-[11px] font-black uppercase text-white">{expert.name}</p>
                  </div>
               </div>
               <div className="h-8 w-px bg-white/10 hidden md:block"></div>
               <div className="flex items-center gap-6">
                  <div className="text-center">
                     <p className="text-[8px] font-black uppercase tracking-widest text-slate-500 mb-1">Reading Time</p>
                     <p className="text-sm font-black text-white">12 MIN</p>
                  </div>
                  <div className="text-center">
                     <p className="text-[8px] font-black uppercase tracking-widest text-slate-500 mb-1">Impact Factor</p>
                     <p className="text-sm font-black text-brand-racing">HIGH</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </header>

      {/* ARTICLE BODY & SIDEBAR */}
      <div className="container mx-auto px-4 -mt-12 relative z-20">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* MAIN COLUMN */}
          <main className="lg:w-2/3 bg-white rounded-[3rem] shadow-2xl p-8 md:p-16 border border-slate-100">
            {/* TOP AD SLOT */}
            <AdSlot type="banner" className="mb-16 rounded-2xl bg-slate-50 border-slate-200" />

            <div className="prose prose-slate max-w-none 
              prose-headings:font-oswald prose-headings:uppercase prose-headings:tracking-tight prose-headings:font-black
              prose-h2:text-3xl prose-h2:text-slate-900 prose-h2:mt-16 prose-h2:mb-8
              prose-p:text-slate-600 prose-p:text-lg prose-p:leading-relaxed prose-p:font-medium
              prose-strong:text-slate-900 prose-strong:font-black
              prose-blockquote:border-brand-racing prose-blockquote:bg-slate-50 prose-blockquote:p-8 prose-blockquote:rounded-3xl prose-blockquote:not-italic prose-blockquote:text-slate-800 prose-blockquote:font-bold
              ">
              
              <p className="text-xl md:text-2xl text-slate-400 font-medium italic border-l-4 border-slate-100 pl-8 mb-12">
                {post.excerpt}
              </p>

              <h2>Technical Analysis Methodology</h2>
              <p>
                Our assessment of {post.subcategory || post.category} systems involves a multi-layered diagnostic approach. 
                We leverage real-time telemetry data combined with destructive stress-testing to determine the absolute failure points of automotive components.
              </p>
              
              {/* MID-ARTICLE AFFILIATE MODULE */}
              {relatedProducts.length > 0 && (
                <section aria-label="Expert Recommendations" className="my-16 bg-slate-900 rounded-[2.5rem] p-10 text-white not-prose relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl"></div>
                   <div className="flex items-center gap-3 mb-8">
                      <div className="w-1.5 h-6 bg-brand-accent rounded-full"></div>
                      <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Lab-Certified Selection</h4>
                   </div>
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {relatedProducts.map((product, i) => (
                        <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all flex flex-col">
                           <div className="h-40 bg-white rounded-2xl mb-6 flex items-center justify-center p-4">
                              <img src={product.image} className="max-h-full object-contain" alt={product.title} />
                           </div>
                           <h5 className="font-bold text-sm mb-4 line-clamp-2">{product.title}</h5>
                           <div className="flex items-center justify-between mt-auto">
                              <span className="text-xl font-black text-brand-accent">{product.price}</span>
                              <button className="bg-brand-accent text-brand-dark px-4 py-2 rounded-lg text-[9px] font-black uppercase tracking-widest hover:bg-white transition-all">
                                 Buy on Amazon
                              </button>
                           </div>
                        </div>
                      ))}
                   </div>
                </section>
              )}

              <h2>Market Context & Future Trajectory</h2>
              <p>
                As we approach the 2026 manufacturing cycle, we observe a significant shift in component modularity. 
                Specifically, {post.subcategory || post.category} hardware is seeing increased integration with vehicle telematics. 
                This results in higher diagnostic precision but also introduces new failure vectors.
              </p>

              <blockquote>
                "Data suggests that owners who follow our 2025 optimization manual for {post.category.toLowerCase()} experience a 14% reduction in long-term maintenance overhead."
              </blockquote>

              <p>
                In conclusion, whether you are a high-performance enthusiast or a daily commuter, the telemetry provided in this report should serve as your primary decision-making framework.
              </p>
            </div>

            {/* END ARTICLE AD SLOT */}
            <div className="mt-20 pt-16 border-t border-slate-100 text-center">
               <AdSlot type="banner" className="bg-slate-50 border-slate-200" />
            </div>

            {/* POST FOOTER AUTHORS */}
            <section aria-label="Author Information" className="mt-20 bg-slate-50 rounded-[2.5rem] p-12 flex flex-col md:flex-row items-center gap-10">
               <img src={expert.image} className="w-32 h-32 rounded-[2rem] object-cover shadow-2xl" alt={`Headshot of ${expert.name}`} />
               <div>
                  <h4 className="font-oswald text-2xl font-black uppercase text-slate-900 mb-2">Authored by {expert.name}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {expert.name} is the primary lead for our {post.category} vertical. With a background in {expert.specialties.join(' and ')}, they ensure every report meets industrial engineering standards.
                  </p>
                  <div className="flex gap-4">
                     <button className="text-[10px] font-black uppercase tracking-widest text-brand-racing border-b-2 border-brand-racing pb-1">Follow Analysis Feed</button>
                     <button className="text-[10px] font-black uppercase tracking-widest text-slate-400">View All {expert.name.split(' ')[0]}'s Reports</button>
                  </div>
               </div>
            </section>
          </main>

          {/* SIDEBAR */}
          <aside className="lg:w-1/3 space-y-12">
            <div className="sticky top-[100px] space-y-12">
               
               {/* LATEST RESEARCH REPORTS */}
               <section aria-label="Latest Research Reports" className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-2xl overflow-hidden relative">
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-brand-dark"></div>
                  <div className="flex items-center gap-3 mb-10">
                    <div className="w-1 h-6 bg-brand-racing rounded-full"></div>
                    <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-900">Latest Research Reports</h4>
                  </div>
                  
                  <div className="space-y-8">
                    {latestPosts.map((latestPost, idx) => (
                      <div 
                        key={idx} 
                        onClick={() => onNavigate('post/', latestPost)}
                        className="group cursor-pointer flex gap-5 border-b border-slate-50 last:border-0 pb-6 last:pb-0 items-start"
                      >
                        <div className="w-20 h-20 flex-shrink-0 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                          <img 
                            src={latestPost.image} 
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110" 
                            alt={latestPost.title} 
                          />
                        </div>
                        <div className="flex-grow">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-[8px] font-black uppercase tracking-widest text-brand-racing bg-brand-racing/5 px-2 py-0.5 rounded">
                              {latestPost.category}
                            </span>
                            <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">
                              {latestPost.date}
                            </span>
                          </div>
                          <h5 className="text-[13px] font-black uppercase leading-tight text-slate-900 group-hover:text-brand-racing transition-colors line-clamp-2">
                            {latestPost.title}
                          </h5>
                          <div className="mt-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                             <span className="text-[8px] font-black uppercase tracking-widest text-slate-400">Review Dossier</span>
                             <div className="h-px flex-grow bg-slate-100"></div>
                             <svg className="w-3 h-3 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={() => onNavigate('blog')}
                    className="w-full mt-10 bg-slate-900 text-white py-4 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-brand-racing transition-all"
                  >
                    All Research Silos
                  </button>
               </section>

               {/* TECHNICAL STATS WIDGET */}
               <section aria-label="Asset Statistics" className="bg-slate-950 rounded-[2.5rem] p-10 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-racing/10 rounded-full blur-3xl"></div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 mb-8">Asset Reliability HUD</h4>
                  <div className="space-y-8">
                     {[
                       { label: 'Thermal Resistance', val: 94, color: 'bg-emerald-500' },
                       { label: 'Material Yield', val: 88, color: 'bg-brand-accent' },
                       { label: 'Market Longevity', val: 72, color: 'bg-brand-racing' }
                     ].map((s, i) => (
                       <div key={i}>
                          <div className="flex justify-between text-[9px] font-black uppercase tracking-widest mb-2">
                             <span>{s.label}</span>
                             <span>{s.val}%</span>
                          </div>
                          <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                             <div className={`h-full ${s.color}`} style={{ width: `${s.val}%` }}></div>
                          </div>
                       </div>
                     ))}
                  </div>
               </section>

               {/* NEWSLETTER STICKY */}
               <section aria-label="Newsletter Subscription" className="bg-brand-accent rounded-[2.5rem] p-10 text-brand-dark shadow-2xl shadow-brand-accent/20">
                  <h3 className="text-2xl font-black font-oswald uppercase leading-none mb-4">Join The <br /> Authority Feed.</h3>
                  <p className="text-xs font-bold uppercase tracking-wider mb-8 opacity-70">Weekly technical briefings on automotive integrity and market shifts.</p>
                  <form className="relative">
                     <label htmlFor="engineering-id" className="sr-only">Engineering ID (Email)</label>
                     <input 
                      id="engineering-id"
                      type="email" 
                      placeholder="Enter Engineering ID (Email)" 
                      className="w-full bg-white/30 border border-brand-dark/10 rounded-xl py-4 px-5 text-sm placeholder:text-brand-dark/40 outline-none focus:bg-white transition-all"
                     />
                     <button type="submit" className="w-full mt-4 bg-brand-dark text-white py-4 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-brand-racing transition-colors">
                        Synchronize
                     </button>
                  </form>
               </section>

               <AdSlot type="vertical" className="rounded-[2.5rem] mx-auto" />

            </div>
          </aside>
        </div>
      </div>

      {/* RELATED REPORTS SECTION */}
      <section aria-label="Related Reports" className="bg-slate-50 py-24 mt-24">
         <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-16">
               <h2 className="text-3xl md:text-4xl font-black font-oswald uppercase tracking-tight text-slate-900">Synchronized Reports</h2>
               <button onClick={() => onNavigate('blog')} className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-brand-dark transition-colors">View All Reports →</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               {/* Simulating related posts */}
               {[0, 1, 2].map((i) => (
                 <div key={i} className="bg-white rounded-[2rem] p-6 border border-slate-100 shadow-xl hover:-translate-y-2 transition-all cursor-pointer group">
                    <div className="aspect-video bg-slate-100 rounded-2xl mb-6 overflow-hidden">
                       <img src={`https://picsum.photos/seed/${i + 10}/600/400`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={`Thumbnail for post ${i}`} />
                    </div>
                    <h4 className="text-lg font-black font-oswald uppercase text-slate-900 group-hover:text-brand-racing transition-colors leading-tight mb-4">The Next Generation of {post.category} Benchmarks</h4>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Read Article →</p>
                 </div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
};

export default PostDetailPage;