
import React from 'react';
import BrandBar from './BrandBar';

interface HeroProps {
  navigate: (path: string) => void;
}

const Hero: React.FC<HeroProps> = ({ navigate }) => {
  return (
    <>
      <section className="bg-brand-dark text-white relative overflow-hidden pt-32 pb-24">
        {/* Symmetrical Background Image & Glows */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          <img 
            src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=1600" 
            className="w-full h-full object-cover opacity-20" 
            alt="Performance Car on Scenic Road" 
          />
          {/* Gradient Overlay to fade the image into the dark background */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/30 via-brand-dark/80 to-brand-dark"></div>
          
          {/* Dashboard HUD Glow effects */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-brand-racing/5 blur-[150px] rounded-full opacity-30"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-accent/5 blur-[120px] rounded-full opacity-40"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-2 rounded-full mb-10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Industry Standard Intelligence</p>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-black font-oswald uppercase leading-[0.9] tracking-tighter mb-12 drop-shadow-2xl">
              DRIVEN BY <br />
              <span className="text-brand-accent italic">PRECISION.</span><br />
              <span className="text-white">GUIDED BY DATA.</span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-slate-300 mb-16 leading-relaxed max-w-3xl mx-auto font-medium">
              We dismantle, test, and torture-test automotive gear so you don't have to. 
              The most trusted technical analysis in the industry, powered by 2025 lab benchmarks.
            </p>
            
            <div className="flex flex-col items-center gap-10">
              <div className="flex flex-wrap justify-center gap-6 items-center">
                <button 
                  onClick={() => navigate('tools')}
                  className="bg-brand-accent text-brand-dark px-12 md:px-16 py-6 md:py-7 rounded-2xl font-black uppercase text-xs tracking-[0.3em] hover:bg-white transition-all shadow-[0_30px_60px_-15px_rgba(245,158,11,0.5)] transform hover:-translate-y-1 active:scale-95 border border-brand-accent/20"
                >
                  Access Diagnostic Tools
                </button>
                <button 
                  onClick={() => navigate('blog')}
                  className="bg-white/5 backdrop-blur-md text-white border border-white/10 px-12 md:px-16 py-6 md:py-7 rounded-2xl font-black uppercase text-xs tracking-[0.3em] hover:bg-white/10 transition-all transform hover:-translate-y-1 active:scale-95"
                >
                  Explore Reports
                </button>
              </div>

              <div className="flex flex-col items-center gap-4">
                <div className="flex -space-x-4">
                  {[1,2,3,4,5].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/100?img=${i+20}`} className="w-14 h-14 rounded-full border-4 border-brand-dark shadow-2xl" alt="Expert Analyst" />
                  ))}
                  <div className="w-14 h-14 rounded-full border-4 border-brand-dark bg-slate-800 flex items-center justify-center text-[11px] font-black text-white shadow-2xl">
                    +24
                  </div>
                </div>
                <p className="text-slate-400 font-black text-[10px] uppercase tracking-[0.3em]">
                  Validated by <span className="text-white">2.4M</span> Monthly Engineering Enthusiasts
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BrandBar />
    </>
  );
};

export default Hero;
