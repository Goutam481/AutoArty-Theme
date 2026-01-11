
import React, { useState } from 'react';
import Logo from './Logo';
import { AUTHORITY_BRANDS, USA_CAR_BRANDS, TOOLS_LIST, SILO_CATEGORIES } from '../constants';
import CategoryIcon from './CategoryIcon';

interface HeaderProps {
  onNavigate: (path: string, data?: any) => void;
  currentPath: string;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentPath }) => {
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

  const navItems = [
    { name: 'Home', path: 'home', hasMenu: false },
    { name: 'Categories', path: 'home', hasMenu: true },
    { name: 'Guides', path: 'blog', hasMenu: false },
    { name: 'Tools', path: 'tools', hasMenu: true },
    { name: 'Brands', path: 'brands', hasMenu: true }
  ];

  const colorMap: Record<string, string> = {
    cyan: 'text-cyan-400',
    indigo: 'text-indigo-400',
    amber: 'text-brand-accent',
    slate: 'text-slate-400',
    emerald: 'text-emerald-400',
    blue: 'text-blue-400',
    violet: 'text-violet-400',
    rose: 'text-rose-400',
    orange: 'text-orange-400',
  };

  return (
    <header className="w-full bg-slate-950/90 backdrop-blur-xl border-b border-white/5 sticky top-0 z-[100]" onMouseLeave={() => setActiveMegaMenu(null)}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="cursor-pointer" onClick={() => onNavigate('home')}>
            <Logo size="md" variant="light" />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
              {navItems.map((item) => (
                <li 
                  key={item.name} 
                  onClick={() => onNavigate(item.path)}
                  onMouseEnter={() => item.hasMenu ? setActiveMegaMenu(item.name) : setActiveMegaMenu(null)}
                  className={`hover:text-white cursor-pointer transition-all relative py-2 group flex items-center gap-1.5 ${
                    currentPath === item.path && !item.hasMenu ? 'text-white' : ''
                  }`}
                >
                  {item.name}
                  {item.hasMenu && (
                    <svg className={`h-3 w-3 transition-transform duration-300 ${activeMegaMenu === item.name ? 'rotate-180 text-brand-accent' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                  {/* Glowing Underline Indicator */}
                  {currentPath === item.path && !item.hasMenu && (
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-brand-racing shadow-[0_0_10px_#e11d48]"></div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Search & Action */}
          <div className="flex items-center gap-6">
            <div className="hidden xl:flex relative group">
              <input 
                type="text" 
                placeholder="Query Database..." 
                className="bg-white/5 border border-white/10 rounded-xl py-2 px-4 text-[10px] font-bold text-white placeholder:text-slate-600 focus:ring-2 focus:ring-brand-accent/20 focus:bg-white/10 focus:border-white/20 outline-none w-48 transition-all"
              />
              <svg className="h-3 w-3 absolute right-3 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <button 
              onClick={() => onNavigate('tools')}
              className="bg-brand-racing text-white text-[9px] font-black uppercase tracking-[0.2em] px-5 py-2.5 rounded-lg shadow-[0_0_20px_rgba(225,29,72,0.2)] hover:bg-white hover:text-brand-racing transition-all active:scale-95 border border-brand-racing"
            >
              Diagnostic Mode
            </button>
          </div>
        </div>
      </div>

      {/* Mega Menus Container */}
      <div className={`absolute top-full left-0 w-full bg-slate-900 border-b border-white/5 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.5)] transition-all duration-300 transform origin-top ${activeMegaMenu ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'}`}>
        <div className="container mx-auto px-4 py-12">
          
          {/* CATEGORIES MEGA MENU */}
          {activeMegaMenu === 'Categories' && (
            <div className="animate-fade-in">
              <div className="flex items-center justify-between mb-10">
                <div>
                   <h3 className="font-oswald text-2xl font-black uppercase tracking-tight text-white leading-none mb-1">Intelligence Hubs</h3>
                   <p className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-500">Live technical feeds & component silos</p>
                </div>
                <button 
                  onClick={() => { setActiveMegaMenu(null); onNavigate('home'); }}
                  className="text-[9px] font-black uppercase tracking-widest text-brand-accent hover:text-white"
                >
                  System Directory →
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-12">
                {SILO_CATEGORIES.map((category) => (
                  <div 
                    key={category.id} 
                    className="group flex gap-5 items-start"
                  >
                    <div 
                      onClick={() => { onNavigate(`category/${category.id}`, category); setActiveMegaMenu(null); }}
                      className={`w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-accent group-hover:border-transparent cursor-pointer`}
                    >
                      <CategoryIcon id={category.id} className={`w-6 h-6 transition-colors ${activeMegaMenu === 'Categories' ? 'text-white' : colorMap[category.color]}`} />
                    </div>
                    <div>
                      <h4 
                        onClick={() => { onNavigate(`category/${category.id}`, category); setActiveMegaMenu(null); }}
                        className="font-oswald text-base font-black uppercase tracking-tight text-white group-hover:text-brand-accent transition-colors mb-1.5 cursor-pointer"
                      >
                        {category.title}
                      </h4>
                      <ul className="space-y-1">
                        {category.items.slice(0, 2).map((item, i) => (
                          <li 
                            key={i} 
                            onClick={() => { onNavigate('subcategory', { categoryName: category.title, subcategoryName: item }); setActiveMegaMenu(null); }}
                            className="text-[9px] font-bold text-slate-500 uppercase tracking-widest leading-none line-clamp-1 hover:text-white cursor-pointer transition-colors"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* BRANDS MEGA MENU */}
          {activeMegaMenu === 'Brands' && (
            <div className="animate-fade-in">
              <div className="flex items-center justify-between mb-10">
                <div>
                   <h3 className="font-oswald text-2xl font-black uppercase tracking-tight text-white leading-none mb-1">Manufacturer Registry</h3>
                   <p className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-500">Tier-1 engineering profiles</p>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
                {USA_CAR_BRANDS.slice(0, 6).map((brand) => (
                  <div 
                    key={brand.name} 
                    onClick={() => { onNavigate('brands'); setActiveMegaMenu(null); }}
                    className="group cursor-pointer flex flex-col items-center p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all"
                  >
                    <div className="w-12 h-12 mb-3 flex items-center justify-center grayscale invert opacity-50 group-hover:opacity-100 transition-all">
                       <img src={brand.logo} alt={brand.name} className="max-h-full max-w-full object-contain" />
                    </div>
                    <h4 className="font-bold text-white uppercase text-[9px] tracking-widest text-center group-hover:text-brand-accent transition-colors">
                      {brand.name}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TOOLS MEGA MENU */}
          {activeMegaMenu === 'Tools' && (
            <div className="animate-fade-in">
              <div className="flex items-center justify-between mb-10">
                <div>
                   <h3 className="font-oswald text-2xl font-black uppercase tracking-tight text-white leading-none mb-1">Diagnostic Utilities</h3>
                   <p className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-500">Encrypted logic tools & templates</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="grid grid-cols-1 gap-3">
                  {TOOLS_LIST.slice(0, 3).map((tool) => (
                    <div 
                      key={tool.name} 
                      onClick={() => { onNavigate(`tool/${tool.id}`, tool); setActiveMegaMenu(null); }}
                      className="flex items-center gap-5 p-4 rounded-xl hover:bg-white/5 transition-all border border-transparent hover:border-white/10 group cursor-pointer"
                    >
                      <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-xl group-hover:bg-brand-accent transition-colors">
                        {tool.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-xs group-hover:text-brand-accent transition mb-0.5">{tool.name}</h4>
                        <p className="text-slate-500 text-[8px] font-black uppercase tracking-widest">{tool.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-brand-racing/10 border border-brand-racing/20 rounded-2xl p-6 flex flex-col justify-center">
                   <h4 className="font-oswald text-lg font-black text-white uppercase mb-2">Technical Core Active</h4>
                   <p className="text-[10px] text-slate-400 uppercase tracking-widest leading-relaxed">System performing at peak efficiency. All diagnostic modules synchronized with 2025 datasets.</p>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </header>
  );
};

export default Header;
