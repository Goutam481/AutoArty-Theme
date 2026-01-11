
import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className = '', variant = 'dark', size = 'md' }) => {
  const sizes = {
    sm: 'h-6',
    md: 'h-10',
    lg: 'h-16'
  };

  const colors = {
    dark: {
      text: 'text-brand-dark',
      iconBg: 'bg-brand-dark',
      iconStroke: 'white',
      accent: 'text-brand-accent'
    },
    light: {
      text: 'text-white',
      iconBg: 'bg-white',
      iconStroke: '#020617', // brand-dark
      accent: 'text-brand-accent'
    }
  };

  const currentColors = colors[variant];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <div className={`${sizes[size]} aspect-square ${currentColors.iconBg} rounded-xl shadow-lg flex items-center justify-center transform transition-all hover:scale-105 hover:rotate-2 duration-300 overflow-hidden relative group`}>
        <svg 
          viewBox="0 0 100 100" 
          className="w-4/5 h-4/5" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M50 15L15 85H35L50 50L65 85H85L50 15Z" 
            fill={currentColors.iconStroke} 
            className="group-hover:opacity-90 transition-opacity"
          />
          <rect 
            x="42" 
            y="65" 
            width="16" 
            height="4" 
            fill="#f59e0b" 
            className="animate-pulse"
          />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>
      </div>
      
      <div className="flex flex-col leading-none">
        <h1 className={`font-oswald ${size === 'lg' ? 'text-4xl' : size === 'sm' ? 'text-xl' : 'text-2xl'} font-black tracking-tighter ${currentColors.text}`}>
          AUTO<span className={currentColors.accent}>ARTY</span>
        </h1>
        <span className={`text-[9px] uppercase tracking-[0.3em] font-bold ${variant === 'dark' ? 'text-slate-400' : 'text-white/60'}`}>
          The Driving Authority
        </span>
      </div>
    </div>
  );
};

export default Logo;
