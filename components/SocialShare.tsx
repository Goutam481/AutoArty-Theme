
import React from 'react';

interface SocialShareProps {
  url: string;
  title: string;
  className?: string;
}

const SocialShare: React.FC<SocialShareProps> = ({ url, title, className = "" }) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = [
    {
      name: 'Facebook',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z"/></svg>
      ),
      color: 'hover:text-blue-600'
    },
    {
      name: 'Twitter',
      url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
      ),
      color: 'hover:text-sky-500'
    },
    {
      name: 'Pinterest',
      url: `https://pinterest.com/pin/create/button/?url=${encodedUrl}&description=${encodedTitle}`,
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.27 2.71 7.91 6.51 9.24-.11-.79-.21-2.01.04-2.88.23-.78 1.48-6.41 1.48-6.41s-.38-.76-.38-1.87c0-1.75 1.01-3.06 2.28-3.06 1.07 0 1.59.81 1.59 1.77 0 1.08-.69 2.69-1.04 4.19-.3 1.25.62 2.27 1.85 2.27 2.22 0 3.93-2.34 3.93-5.71 0-2.99-2.15-5.08-5.21-5.08-3.55 0-5.64 2.66-5.64 5.42 0 1.07.41 2.22.92 2.84.1.12.12.23.09.35-.1.41-.32 1.3-.36 1.48-.05.21-.16.26-.37.16-1.39-.65-2.26-2.68-2.26-4.32 0-3.52 2.56-6.75 7.37-6.75 3.87 0 6.88 2.76 6.88 6.44 0 3.85-2.43 6.94-5.8 6.94-1.13 0-2.2-.59-2.56-1.28l-.7 2.65c-.25.96-.94 2.16-1.4 2.91 1.03.31 2.11.48 3.23.48 5.52 0 10-4.48 10-10S17.52 2 12 2z"/></svg>
      ),
      color: 'hover:text-red-600'
    }
  ];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Share:</span>
      <div className="flex gap-2.5">
        {shareLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-slate-400 transition-colors ${link.color}`}
            title={`Share on ${link.name}`}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialShare;
