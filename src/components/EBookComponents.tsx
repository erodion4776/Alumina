import React, { useState } from 'react';
import { Award } from 'lucide-react';
import { LOGO_URL } from '../constants';

export const GalleryItem: React.FC<{ src: string; number: number; name: string; objectPosition?: string }> = ({ src, number, name, objectPosition = "object-top" }) => {
  const [revealed, setRevealed] = useState(false);
  return (
    <div 
      className="relative group cursor-pointer overflow-hidden rounded-xl border-2 border-gold/30 shadow-lg transition-all duration-500 hover:scale-[1.02] hover:border-gold aspect-square"
      onClick={() => setRevealed(!revealed)}
    >
      <img 
        src={src} 
        alt={`UDOSA Face ${number}`} 
        className={`w-full h-full object-cover ${objectPosition}`}
        referrerPolicy="no-referrer"
      />
      <div className="absolute bottom-2 right-2 bg-gold text-purple w-8 h-8 rounded-full flex items-center justify-center font-black text-sm shadow-md z-10 border border-purple/20">
        {number}
      </div>
      
      {/* Reveal Overlay */}
      <div className={`absolute inset-0 bg-purple/80 backdrop-blur-sm flex flex-col items-center justify-center p-4 transition-opacity duration-300 ${revealed ? 'opacity-100' : 'opacity-0 group-hover:opacity-40'}`}>
        <p className="text-gold text-[10px] uppercase tracking-widest font-bold mb-2">
          {revealed ? 'Revealed' : 'Click to Reveal'}
        </p>
        {revealed && (
          <p className="text-white font-serif font-bold text-lg text-center leading-tight">
            {name}
          </p>
        )}
      </div>
    </div>
  );
};

export const Header = () => (
  <div className="bg-purple w-full h-20 flex items-center justify-center px-8 shrink-0">
    <img src={LOGO_URL} alt="UDOSA Logo" className="h-14 object-contain" referrerPolicy="no-referrer" />
  </div>
);

export const Footer = ({ text = "UDOSA 04 | Celebrating 20 Years" }: { text?: string }) => (
  <div className="mt-auto py-4 px-8 border-t border-stone-100 flex justify-center shrink-0">
    <p className="text-[10px] font-serif tracking-[0.3em] text-gold uppercase font-bold">
      {text}
    </p>
  </div>
);

export const Page = ({ children, className = "", showHeader = true, showFooter = true, footerText }: { children: React.ReactNode; className?: string; showHeader?: boolean; showFooter?: boolean; footerText?: string }) => (
  <div className="page-a4 overflow-hidden flex flex-col bg-white shadow-2xl mx-auto">
    {showHeader && <Header />}
    <div className={`flex-grow flex flex-col p-12 overflow-hidden ${className}`}>
      {children}
    </div>
    {showFooter && <Footer text={footerText} />}
  </div>
);
