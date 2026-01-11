
import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SiloGrid from './components/SiloGrid';
import SectionBlog from './components/SectionBlog';
import SectionTools from './components/SectionTools';
import Footer from './components/Footer';
import CategoryPage from './components/CategoryPage';
import BlogPage from './components/BlogPage';
import ToolsPage from './components/ToolsPage';
import ToolDetailPage from './components/ToolDetailPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import PrivacyPage from './components/PrivacyPage';
import TermsPage from './components/TermsPage';
import DisclosurePage from './components/DisclosurePage';
import BrandsPage from './components/BrandsPage';
import BrandDetailPage from './components/BrandDetailPage';
import SubcategoryPage from './components/SubcategoryPage';
import PostDetailPage from './components/PostDetailPage';
import { BlogPost } from './types';
import { USA_CAR_BRANDS, BLOG_POSTS, TOOLS_LIST, SILO_CATEGORIES } from './constants';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState('home');
  const [categoryData, setCategoryData] = useState<any>(null);
  const [subcategoryData, setSubcategoryData] = useState<any>(null);
  const [toolData, setToolData] = useState<any>(null);
  const [brandData, setBrandData] = useState<any>(null);
  const [postData, setPostData] = useState<BlogPost | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [activeDriverProfile, setActiveDriverProfile] = useState<string | null>(null);

  // Navigation logic
  const navigate = (path: string, data?: any) => {
    window.scrollTo(0, 0);
    setCurrentPath(path);
    setShowSearchResults(false);
    setSearchQuery('');
    if (path.startsWith('category')) setCategoryData(data);
    if (path.startsWith('subcategory')) setSubcategoryData(data);
    if (path.startsWith('tool/')) setToolData(data);
    if (path.startsWith('post/')) setPostData(data);
    if (path.startsWith('brand/')) setBrandData(data);
  };

  // Search Logic
  const searchResults = useMemo(() => {
    if (!searchQuery || searchQuery.length < 2) return null;
    const query = searchQuery.toLowerCase();

    const brands = USA_CAR_BRANDS.filter(b => b.name.toLowerCase().includes(query) || b.focus.toLowerCase().includes(query));
    const posts = BLOG_POSTS.filter(p => p.title.toLowerCase().includes(query) || p.excerpt?.toLowerCase().includes(query));
    const tools = TOOLS_LIST.filter(t => t.name.toLowerCase().includes(query) || t.desc.toLowerCase().includes(query));
    const categories = SILO_CATEGORIES.filter(c => c.title.toLowerCase().includes(query) || c.items.some(i => i.toLowerCase().includes(query)));

    return { brands, posts, tools, categories };
  }, [searchQuery]);

  const hasAnyResults = searchResults && (
    searchResults.brands.length > 0 || 
    searchResults.posts.length > 0 || 
    searchResults.tools.length > 0 || 
    searchResults.categories.length > 0
  );

  const trendingTags = [
    { name: 'EV Charging Guides', path: 'subcategory/EV (Electric Vehicles)/Level 1 & 2 EV Chargers', data: { categoryName: 'EV (Electric Vehicles)', subcategoryName: 'Level 1 & 2 EV Chargers' } },
    { name: 'DIY Maintenance', path: 'category/maintenance', data: SILO_CATEGORIES.find(c => c.id === 'maintenance') },
    { name: 'Top Winter Tires', path: 'subcategory/Wheels & Tires/Snow & Winter Tires', data: { categoryName: 'Wheels & Tires', subcategoryName: 'Snow & Winter Tires' } }
  ];

  const driverProfiles = ['Enthusiast', 'Daily Driver', 'Safety First', 'Future Tech'];

  const renderContent = () => {
    if (currentPath.startsWith('post/') && postData) {
      return <PostDetailPage post={postData} onNavigate={navigate} />;
    }

    if (currentPath.startsWith('subcategory') && subcategoryData) {
      return <SubcategoryPage categoryName={subcategoryData.categoryName} subcategoryName={subcategoryData.subcategoryName} onPostClick={(post) => navigate(`post/${post.title}`, post)} />;
    }

    if (currentPath.startsWith('category') && categoryData) {
      return <CategoryPage category={categoryData} onSubcategoryClick={(sub) => navigate('subcategory', { categoryName: categoryData.title, subcategoryName: sub })} />;
    }

    if (currentPath.startsWith('tool/') && toolData) {
      return <ToolDetailPage tool={toolData} />;
    }

    if (currentPath.startsWith('brand/') && brandData) {
      return <BrandDetailPage brand={brandData} />;
    }

    switch (currentPath) {
      case 'blog':
        return <BlogPage onPostClick={(post) => navigate(`post/${post.title}`, post)} />;
      case 'brands':
        return <BrandsPage onBrandClick={(brand) => navigate(`brand/${brand.id}`, brand)} />;
      case 'tools':
        return <ToolsPage onToolClick={(tool) => navigate(`tool/${tool.id}`, tool)} />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'privacy':
        return <PrivacyPage />;
      case 'terms':
        return <TermsPage />;
      case 'disclosure':
        return <DisclosurePage />;
      case 'home':
      default:
        return (
          <>
            <Hero navigate={navigate} />
            
            <section className="bg-slate-50 py-24 relative overflow-hidden border-b border-slate-100">
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
              
              <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-5xl mx-auto">
                  
                  <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-1.5 rounded-full mb-6">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse"></div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Neural Database Uplink</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-slate-900 mb-6">
                      Technical <span className="text-brand-racing italic">Intelligence</span> Search
                    </h2>
                    <p className="text-slate-600 font-medium text-lg md:text-xl max-w-2xl mx-auto">
                      Query our repository of 14,000+ bench-tested components and engineering protocols.
                    </p>
                  </div>

                  <div className="relative group max-w-4xl mx-auto">
                    <div className="absolute -inset-4 bg-slate-900/5 rounded-[3rem] blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative flex flex-col md:flex-row items-stretch bg-white border-2 border-slate-200 rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-500 group-focus-within:border-brand-dark group-focus-within:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)]">
                      <div className="flex-grow relative">
                        <input 
                          type="text"
                          value={searchQuery}
                          onFocus={() => setShowSearchResults(true)}
                          onChange={(e) => {
                            setSearchQuery(e.target.value);
                            setShowSearchResults(true);
                          }}
                          placeholder="Search manufacturers, diagnostic tools, or guides..."
                          className="w-full bg-transparent py-8 pl-14 pr-10 text-slate-900 text-xl font-bold placeholder:text-slate-300 outline-none"
                        />
                        <svg 
                          className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-300 group-focus-within:text-brand-dark transition-colors" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                      <button className="bg-brand-dark text-white px-12 py-6 md:py-0 font-bold uppercase text-xs tracking-[0.3em] hover:bg-brand-racing transition-all flex items-center justify-center gap-3">
                        Execute Scan
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                      </button>
                    </div>

                    {/* SEARCH RESULTS OVERLAY */}
                    {showSearchResults && searchQuery.length >= 2 && (
                      <div className="absolute top-full mt-4 left-0 w-full z-50 bg-slate-900 border border-white/10 rounded-[2rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden animate-fade-in backdrop-blur-2xl">
                        <div className="p-4 border-b border-white/5 flex justify-between items-center bg-slate-950/50">
                          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Scan Results for: <span className="text-brand-accent">"{searchQuery}"</span></span>
                          <button onClick={() => setShowSearchResults(false)} className="text-slate-400 hover:text-white transition">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
                          </button>
                        </div>
                        
                        <div className="max-h-[500px] overflow-y-auto custom-scrollbar p-6">
                          {!hasAnyResults ? (
                            <div className="py-20 text-center">
                              <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">No Internal Matches Found</p>
                              <p className="text-[10px] text-slate-600 mt-2">Try searching for 'Ford', 'EV', 'Brakes', or 'VIN'</p>
                            </div>
                          ) : (
                            <div className="space-y-10">
                              {/* Brands */}
                              {searchResults?.brands.length! > 0 && (
                                <div>
                                  <h4 className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-600 mb-4 flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-accent"></div> Manufacturer Registry
                                  </h4>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {searchResults?.brands.map(brand => (
                                      <button 
                                        key={brand.id}
                                        onClick={() => navigate(`brand/${brand.id}`, brand)}
                                        className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 border border-white/5 rounded-2xl transition-all text-left group"
                                      >
                                        <img src={brand.logo} className="w-8 h-8 object-contain grayscale group-hover:grayscale-0" alt="" />
                                        <div>
                                          <p className="text-sm font-bold text-white uppercase">{brand.name}</p>
                                          <p className="text-[9px] text-slate-500 uppercase tracking-widest">{brand.focus}</p>
                                        </div>
                                      </button>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {/* Posts */}
                              {searchResults?.posts.length! > 0 && (
                                <div>
                                  <h4 className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-600 mb-4 flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-racing"></div> Intelligence Reports
                                  </h4>
                                  <div className="space-y-2">
                                    {searchResults?.posts.map((post, i) => (
                                      <button 
                                        key={i}
                                        onClick={() => navigate(`post/${post.title}`, post)}
                                        className="w-full flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 border border-white/5 rounded-2xl transition-all text-left"
                                      >
                                        <div className="flex items-center gap-4">
                                          <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
                                            <img src={post.image} className="w-full h-full object-cover" alt="" />
                                          </div>
                                          <p className="text-xs font-bold text-white uppercase leading-tight line-clamp-1">{post.title}</p>
                                        </div>
                                        <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest whitespace-nowrap ml-4">Read Dossier →</span>
                                      </button>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {/* Tools */}
                              {searchResults?.tools.length! > 0 && (
                                <div>
                                  <h4 className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-600 mb-4 flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Technical Utilities
                                  </h4>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {searchResults?.tools.map(tool => (
                                      <button 
                                        key={tool.id}
                                        onClick={() => navigate(`tool/${tool.id}`, tool)}
                                        className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 border border-white/5 rounded-2xl transition-all text-left"
                                      >
                                        <span className="text-2xl">{tool.icon}</span>
                                        <div>
                                          <p className="text-sm font-bold text-white uppercase">{tool.name}</p>
                                          <p className="text-[9px] text-slate-500 uppercase tracking-widest">{tool.category}</p>
                                        </div>
                                      </button>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                        <div className="p-6 bg-slate-950/80 border-t border-white/5 text-center">
                           <p className="text-[8px] font-black uppercase tracking-[0.5em] text-slate-600">Secure Internal Scan Protocols Active (v4.2.5)</p>
                        </div>
                      </div>
                    )}

                    <div className="mt-8 flex flex-wrap justify-between items-center gap-6 px-8">
                       <div className="flex items-center gap-8">
                          {trendingTags.map((tag) => (
                            <button 
                              key={tag.name}
                              onClick={() => navigate(tag.path, tag.data)}
                              className="text-[11px] font-bold uppercase tracking-widest text-slate-500 hover:text-brand-racing transition-colors flex items-center gap-2"
                            >
                              <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                              {tag.name}
                            </button>
                          ))}
                       </div>
                       <div className="hidden md:flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                          <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> System Status: Nominal</span>
                          <span className="text-slate-200">|</span>
                          <span>Latency: 14ms</span>
                       </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20">
                    {[
                      { label: 'Products Tested', val: '12k+', color: 'text-brand-dark', bg: 'bg-white' },
                      { label: 'Expert Manuals', val: '400+', color: 'text-white', bg: 'bg-brand-racing' },
                      { label: 'Live Telemetry', val: 'Active', color: 'text-white', bg: 'bg-brand-dark' },
                      { label: 'Independent', val: '100%', color: 'text-brand-dark', bg: 'bg-brand-accent' }
                    ].map((stat, i) => (
                      <div key={i} className={`${stat.bg} ${stat.color} p-8 rounded-[2rem] border border-slate-100 shadow-xl transition-transform hover:-translate-y-1`}>
                        <p className="text-4xl font-black uppercase leading-none mb-2">{stat.val}</p>
                        <p className="text-[11px] font-bold uppercase tracking-widest opacity-60">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="relative py-32 overflow-hidden bg-slate-900">
              <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                 <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(15,23,42,0)_0%,rgba(2,6,23,1)_100%)]"></div>
                 <div className="absolute inset-0 opacity-[0.03]">
                    <svg width="100%" height="100%">
                       <pattern id="circuit" width="200" height="200" patternUnits="userSpaceOnUse">
                          <path d="M0 100h50l10-10h40l10 10h50v40h-50l-10 10h-40l-10-10h-50z" fill="none" stroke="white" strokeWidth="2" />
                       </pattern>
                       <rect width="100%" height="100%" fill="url(#circuit)" />
                    </svg>
                 </div>
              </div>
              
              <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-7xl mx-auto">
                  <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
                    <div className="max-w-2xl">
                      <div className="inline-block bg-brand-accent text-brand-dark px-4 py-1 rounded text-[10px] font-bold uppercase tracking-[0.4em] mb-6">Autonomous Directory</div>
                      <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-8 leading-[0.9]">Technical Command <span className="text-brand-accent italic">Center.</span></h2>
                      <p className="text-slate-400 text-xl font-medium leading-relaxed">
                        Toggle your operational profile below to prioritize specific resource silos and technical intelligence feeds.
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-3 bg-white/5 p-3 rounded-[2rem] border border-white/10 backdrop-blur-md">
                       <span className="w-full text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2 ml-4">Select Operations Mode:</span>
                       {driverProfiles.map((profile) => (
                         <button 
                          key={profile}
                          onClick={() => setActiveDriverProfile(activeDriverProfile === profile ? null : profile)}
                          className={`px-6 py-3 rounded-2xl text-[11px] font-bold uppercase tracking-widest transition-all ${activeDriverProfile === profile ? 'bg-brand-accent text-brand-dark shadow-xl shadow-brand-accent/20' : 'text-white/60 hover:text-white hover:bg-white/5'}`}
                         >
                           {profile}
                         </button>
                       ))}
                       {activeDriverProfile && (
                         <button 
                          onClick={() => setActiveDriverProfile(null)}
                          className="px-4 py-3 rounded-2xl text-[11px] font-bold uppercase tracking-widest text-brand-racing hover:bg-brand-racing/10 transition-colors"
                         >
                           Reset
                         </button>
                       )}
                    </div>
                  </div>

                  <SiloGrid 
                    onCategoryClick={(silo) => navigate(`category/${silo.id}`, silo)} 
                    activeFilter={activeDriverProfile || undefined}
                  />

                  <div className="mt-24 bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-wrap justify-center gap-10 md:gap-20">
                     {[
                       { label: 'Database Status', val: 'Synchronized', color: 'text-emerald-500' },
                       { label: 'Verified Benchmarks', val: '14,203 Items', color: 'text-white' },
                       { label: 'Last System Audit', val: '04:00 GMT', color: 'text-slate-500' },
                       { label: 'Affiliate Transparency', val: 'Compliant', color: 'text-brand-accent' }
                     ].map((tick, i) => (
                       <div key={i} className="flex flex-col items-center text-center">
                          <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-500 mb-1">{tick.label}</span>
                          <span className={`text-[11px] font-bold uppercase tracking-widest ${tick.color}`}>{tick.val}</span>
                       </div>
                     ))}
                  </div>
                </div>
              </div>
            </section>

            <div className="bg-brand-surface py-24">
              <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto space-y-24">
                  <SectionBlog onSeeAll={() => navigate('blog')} onPostClick={(post) => navigate(`post/${post.title}`, post)} />
                  <div className="h-px bg-slate-200 w-full"></div>
                  <SectionTools onSeeAll={() => navigate('tools')} />
                </div>
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-surface">
      <Header onNavigate={navigate} currentPath={currentPath} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
};

export default App;
