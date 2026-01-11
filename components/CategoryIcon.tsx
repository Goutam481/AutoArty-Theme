
import React from 'react';

interface CategoryIconProps {
  id: string;
  className?: string;
  themeColor?: string;
}

const CategoryIcon: React.FC<CategoryIconProps> = ({ id, className = "w-8 h-8", themeColor = "currentColor" }) => {
  const strokeWidth = 1.5;

  const icons: Record<string, React.ReactNode> = {
    'car-care': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M7 11V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6" />
        <path d="M5 11h14v7a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-7z" />
        <path d="M9 11v10M15 11v10" />
        <path d="M19 7l2 2-2 2" stroke={themeColor} />
        <circle cx="19" cy="7" r="1" fill={themeColor} stroke="none" />
      </svg>
    ),
    'tools-equipment': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a2 2 0 0 1-2.83-2.83l-3.94 3.6z" />
        <path d="M10.8 4.8c2.2-2.2 5.5-2.2 7.7 0" stroke={themeColor} />
        <path d="M3.6 14.7a2 2 0 0 0 0 2.83l3.77 3.77a1 1 0 0 0 1.4 0l1.6-1.6a1 1 0 0 0 0-1.4l-3.6-3.94z" />
        <path d="M2 2l20 20" />
        <path d="M20 4L4 20" stroke={themeColor} opacity="0.5" />
      </svg>
    ),
    'accessories': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2v4M12 18v4" />
        <path d="M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83" />
        <path d="M2 12h4M18 12h4" />
        <path d="M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        <path d="M12 12L16 10" stroke={themeColor} strokeWidth="2" />
        <circle cx="12" cy="12" r="2" fill={themeColor} stroke="none" />
      </svg>
    ),
    'wheels-tires': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="3" stroke={themeColor} />
        <path d="M12 2v7M12 15v7" />
        <path d="M21.3 9l-6.3 3M9 12l-6.3 3" />
        <path d="M17.7 20l-5.7-8M12 12l-5.7-8" />
      </svg>
    ),
    'ev': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" stroke={themeColor} />
        <path d="M13 7l-5 7h6l-5 7" fill={themeColor} stroke="none" />
        <path d="M13 7l-5 7h6l-5 7" />
      </svg>
    ),
    'insurance': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M7 14h10l-1-3H8l-1 3z" stroke={themeColor} />
        <rect x="7" y="14" width="10" height="3" rx="1" />
      </svg>
    ),
    'rental': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect x="7" y="2" width="10" height="14" rx="2" />
        <circle cx="12" cy="6" r="1.5" fill={themeColor} stroke="none" />
        <path d="M10 10h4M10 13h4" opacity="0.5" />
        <path d="M12 16v4M10 22h4M7 20h10" stroke={themeColor} />
      </svg>
    ),
    'safety': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke={themeColor} />
        <circle cx="12" cy="11" r="3" />
        <path d="M9 17h6M12 14v6" />
        <path d="M12 8v3" />
      </svg>
    ),
    'maintenance': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M3 10v4h4l4 4V6L7 10H3z" />
        <path d="M14 8c1.3 1.3 1.3 3.4 0 4.7" stroke={themeColor} />
        <path d="M17 5c3.3 3.3 3.3 8.7 0 12" opacity="0.5" />
        <path d="M20 2c5 5 5 15 0 20" stroke={themeColor} opacity="0.3" />
      </svg>
    )
  };

  return <>{icons[id] || icons['tools-equipment']}</>;
};

export default CategoryIcon;
