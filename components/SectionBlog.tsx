
import React from 'react';
import { BLOG_POSTS, SILO_CATEGORIES } from '../constants';
import { BlogPost } from '../types';

interface SectionBlogProps {
  onSeeAll: () => void;
  onPostClick?: (post: BlogPost) => void;
}

const SectionBlog: React.FC<SectionBlogProps> = ({ onSeeAll, onPostClick }) => {
  // Logic: Get exactly one (the latest) post for every category defined in SILO_CATEGORIES
  const filteredPosts = SILO_CATEGORIES.map(category => {
    return BLOG_POSTS.find(post => post.category === category.title);
  }).filter((post): post is BlogPost => post !== undefined);

  return (
    <section id="blog" className="relative">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-2 w-12 bg-brand-racing rounded-full"></div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400">The Editorial Journal</h4>
          </div>
          <h2 className="text-5xl md:text-6xl font-black font-oswald text-brand-dark uppercase tracking-tighter leading-none mb-6">
            Technical <span className="text-brand-racing italic">Intelligence</span> Silos
          </h2>
          <p className="text-slate-500 font-medium text-lg leading-relaxed border-l-4 border-slate-100 pl-8">
            Access direct reporting from all {SILO_CATEGORIES.length} active investigative silos. One comprehensive benchmark report per sector, updated in real-time.
          </p>
        </div>
        <button 
          onClick={onSeeAll}
          className="group relative bg-brand-dark text-white px-10 py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] hover:bg-brand-racing transition-all self-start lg:self-auto shadow-2xl flex items-center gap-4 overflow-hidden"
        >
          <span className="relative z-10">Access Full Repository</span>
          <svg className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {filteredPosts.map((post, idx) => (
          <article 
            key={idx} 
            onClick={() => onPostClick?.(post)}
            className="group cursor-pointer flex flex-col h-full bg-white rounded-[3rem] border border-slate-100 p-8 transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] hover:-translate-y-3"
          >
            <div className="relative overflow-hidden rounded-[2.5rem] mb-10 aspect-[16/11] bg-slate-50 shadow-inner">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="absolute top-5 left-5">
                <div className="bg-brand-dark/90 backdrop-blur-xl text-white text-[9px] font-black uppercase tracking-[0.2em] px-5 py-2.5 rounded-2xl shadow-2xl border border-white/10">
                  {post.category}
                </div>
              </div>
              
              <div className="absolute bottom-6 left-6 right-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                 <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></div>
                    <p className="text-white text-[9px] font-black uppercase tracking-widest">Active Investigation</p>
                 </div>
              </div>
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{post.date}</span>
              <div className="h-1 w-1 rounded-full bg-slate-200"></div>
              <span className="text-[10px] font-black uppercase tracking-widest text-brand-racing">Audit Lvl 4</span>
            </div>

            <h3 className="text-2xl font-black font-oswald text-brand-dark leading-[1.1] group-hover:text-brand-racing transition-colors mb-6 line-clamp-2 uppercase tracking-tight">
              {post.title}
            </h3>
            
            <p className="text-slate-500 text-base leading-relaxed line-clamp-3 font-medium mb-10 border-l-2 border-slate-50 pl-6">
              {post.excerpt}
            </p>

            <div className="mt-auto flex items-center justify-between pt-8 border-t border-slate-50">
               <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-brand-dark group-hover:text-brand-racing transition-colors">
                  Review Analysis <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
               </div>
               <div className="text-[10px] font-bold text-slate-300 font-mono tracking-tighter">
                  0x{idx + post.category.length}
               </div>
            </div>
          </article>
        ))}
      </div>
      
      {/* Decorative Grid Pattern for Background */}
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-brand-racing/5 blur-3xl rounded-full pointer-events-none"></div>
    </section>
  );
};

export default SectionBlog;
