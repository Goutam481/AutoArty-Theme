
import React from 'react';

interface SubItemIconProps {
  name: string;
  className?: string;
  themeColor?: string;
}

const SubItemIcon: React.FC<SubItemIconProps> = ({ name, className = "w-6 h-6", themeColor = "currentColor" }) => {
  const strokeWidth = 1.5;

  const icons: Record<string, React.ReactNode> = {
    'OBD2 Diagnostic Scanners': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <rect x="8" y="6" width="8" height="6" rx="1" fill={themeColor} fillOpacity="0.1" />
        <path d="M9 16h6M9 19h3" opacity="0.5" />
        <path d="M12 2v1M12 21v1" stroke={themeColor} />
      </svg>
    ),
    'Jump Starters & Battery Testers': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect x="4" y="6" width="16" height="12" rx="2" />
        <path d="M9 6V4M15 6V4" />
        <path d="M7 12h2M15 12h2" stroke={themeColor} strokeWidth="2" />
        <path d="M12 9v6" stroke={themeColor} strokeWidth="1" opacity="0.3" />
        <circle cx="12" cy="12" r="1" fill={themeColor} />
      </svg>
    ),
    'Tire Repair Tools & Patches': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="12" r="9" strokeOpacity="0.3" />
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3" opacity="0.5" />
        <path d="M9 9l6 6M15 9l-6 6" stroke={themeColor} strokeWidth="2" />
      </svg>
    ),
    'Socket Sets & Wrenches': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a2 2 0 0 1-2.83-2.83l-3.94 3.6z" />
        <circle cx="8" cy="16" r="3" stroke={themeColor} />
        <path d="M10 14l5-5" stroke={themeColor} opacity="0.5" />
      </svg>
    ),
    // Fallback for other silos
    'default': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  };

  return <>{icons[name] || icons['default']}</>;
};

export default SubItemIcon;
