
import React from 'react';
import { BLOG_POSTS } from '../constants';
import { BlogPost } from '../types';
import SocialShare from './SocialShare';

interface BlogPageProps {
  onPostClick?: (post: BlogPost) => void;
}

const BlogPage: React.FC<BlogPageProps> = ({ onPostClick }) => {
  return (
    <div className="container mx-auto px-4 py-12 animate-fade-in">
      <div className="flex items-center gap-4 mb-12">
        <div className="h-12 w-3 bg-brand-racing rounded"></div>
        <div>
          <h1 className="text-4xl font-black font-oswald uppercase tracking-tight text-slate-800">AutoArty <span className="text-brand-racing">Journal</span></h1>
          <p className="text-gray-500 uppercase tracking-widest font-bold text-xs">Technical Analysis Hub</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Featured Large Post */}
        <div 
          onClick={() => onPostClick?.(BLOG_POSTS[0])}
          className="md:col-span-2 lg:col-span-2 group cursor-pointer"
        >
          <div className="relative h-96 overflow-hidden rounded-[3rem] mb-6 shadow-2xl">
            <img src={BLOG_POSTS[0].image} className="w-full h-full object-cover group-hover:scale-105 transition duration-1000" alt={BLOG_POSTS[0].title} />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <span className="bg-brand-racing px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 inline-block">Chief Investigator's Pick</span>
              <h2 className="text-4xl font-black font-oswald uppercase tracking-tight max-w-2xl leading-none">{BLOG_POSTS[0].title}</h2>
              <div className="mt-6 flex items-center justify-between">
                <p className="text-gray-300 text-sm font-medium line-clamp-1 max-w-md">{BLOG_POSTS[0].excerpt}</p>
                <div className="text-[10px] font-black uppercase tracking-widest text-brand-accent">Open Analysis →</div>
              </div>
            </div>
          </div>
        </div>

        {/* Regular Posts */}
        {BLOG_POSTS.slice(1).map((post, idx) => (
          <article 
            key={idx} 
            onClick={() => onPostClick?.(post)}
            className="group flex flex-col h-full bg-white border border-slate-100 p-6 rounded-[2.5rem] transition-all hover:shadow-2xl hover:-translate-y-1 cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[16/10]">
              <img src={post.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-transform duration-700 group-hover:scale-110" alt={post.title} />
              <div className="absolute top-4 left-4">
                <span className="bg-brand-dark text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                  {post.category}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-gray-400 text-[9px] font-black uppercase tracking-widest">
                <span>{post.date}</span>
                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                <span>Audit Level 4</span>
              </div>
            </div>
            <h3 className="text-xl font-black font-oswald uppercase text-slate-800 leading-tight group-hover:text-brand-racing transition-colors mb-4 line-clamp-2">
              {post.title}
            </h3>
            <p className="text-slate-500 text-sm font-medium line-clamp-3 mb-8">
              {post.excerpt}
            </p>
            <div className="mt-auto text-[9px] font-black uppercase tracking-widest text-brand-dark group-hover:translate-x-1 transition-transform">
               Read Technical Dossier →
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
