
import React from 'react';

interface AdSlotProps {
  className?: string;
  type?: 'banner' | 'square' | 'vertical';
}

const AdSlot: React.FC<AdSlotProps> = ({ className = '', type = 'banner' }) => {
  const dimensions = {
    banner: 'h-24 w-full',
    square: 'h-64 w-64',
    vertical: 'h-96 w-48'
  };

  return (
    <div className={`ad-placeholder flex items-center justify-center border-2 border-dashed border-gray-300 rounded text-gray-400 text-xs uppercase tracking-widest font-bold overflow-hidden ${dimensions[type]} ${className}`}>
      <div className="text-center">
        <span>Advertisement</span>
        <br />
        <span className="opacity-50">Google AdSense Space</span>
      </div>
    </div>
  );
};

export default AdSlot;
