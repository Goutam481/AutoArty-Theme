
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
    <section id="blog">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div className="max-w-xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-2 w-12 bg-brand-racing rounded"></div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Technical Analysis</h4>
          </div>
          <h2 className="text-5xl font-black font-oswald text-brand-dark uppercase tracking-tighter leading-none mb-4">The Editorial Journal</h2>
          <p className="text-slate-500 font-medium leading-relaxed">
            Direct access to our latest investigative reports conducted across all {SILO_CATEGORIES.length} active automotive intelligence silos.
          </p>
        </div>
        <button 
          onClick={onSeeAll}
          className="bg-brand-dark text-white px-8 py-4 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-brand-racing transition-all self-start md:self-auto shadow-xl"
        >
          Access Full Library →
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {filteredPosts.map((post, idx) => (
          <article 
            key={idx} 
            onClick={() => onPostClick?.(post)}
            className="group cursor-pointer flex flex-col h-full bg-white rounded-[2.5rem] border border-slate-100 p-6 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200 hover:-translate-y-2"
          >
            <div className="relative overflow-hidden rounded-[2rem] mb-8 aspect-[16/10] bg-slate-100">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent"></div>
              <div className="absolute top-4 left-4">
                <span className="bg-white/95 backdrop-blur-md text-brand-dark text-[9px] font-black uppercase tracking-widest px-4 py-2 rounded-xl shadow-lg border border-slate-100">
                  {post.category}
                </span>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                 <p className="text-white text-[10px] font-black uppercase tracking-widest opacity-80 mb-1">{post.date}</p>
                 <div className="h-0.5 w-8 bg-brand-accent rounded"></div>
              </div>
            </div>
            
            <h3 className="text-xl font-black font-oswald text-brand-dark leading-tight group-hover:text-brand-racing transition-colors mb-4 line-clamp-2">
              {post.title}
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 font-medium mb-6">
              {post.excerpt}
            </p>
            <div className="mt-auto flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-brand-dark group-hover:gap-4 transition-all group-hover:text-brand-racing">
               Review Dossier <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default SectionBlog;
