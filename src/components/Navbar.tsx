import React from 'react';
import { motion } from 'motion/react';
import { Home, Heart, Users, BookOpen, Briefcase, Flower2, Gamepad2 } from 'lucide-react';

const LOGO_URL = "https://i.ibb.co/DHC0kvzR/1000773566-removebg-preview-1.png";

type View = 'home' | 'solidarity' | 'directory' | 'ebook' | 'business' | 'memorial' | 'games';

interface NavbarProps {
  activeView: View;
  onViewChange: (view: View) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeView, onViewChange }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: <Home className="w-5 h-5" /> },
    { id: 'solidarity', label: 'Solidarity Hub', icon: <Heart className="w-5 h-5" /> },
    { id: 'directory', label: 'Directory', icon: <Users className="w-5 h-5" /> },
    { id: 'ebook', label: 'E-Book', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'business', label: 'Business', icon: <Briefcase className="w-5 h-5" /> },
    { id: 'memorial', label: 'Memorial', icon: <Flower2 className="w-5 h-5" /> },
    { id: 'games', label: 'Games', icon: <Gamepad2 className="w-5 h-5" /> },
  ];

  return (
    <>
      {/* Desktop Top Navbar */}
      <nav className="hidden md:flex sticky top-0 z-[100] bg-purple w-full h-20 items-center justify-between px-8 shadow-xl border-b border-gold/20">
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => onViewChange('home')}>
          <img src={LOGO_URL} alt="UDOSA Logo" className="h-12 object-contain" referrerPolicy="no-referrer" />
          <div className="hidden lg:block">
            <h1 className="text-gold font-serif font-bold text-xl tracking-tighter">UDOSA 04</h1>
            <p className="text-white/60 text-[10px] uppercase tracking-widest leading-none">Alumni Portal</p>
          </div>
        </div>

        <div className="flex items-center gap-1 lg:gap-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id as View)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                activeView === item.id
                  ? 'bg-gold text-purple shadow-lg scale-105'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              {item.icon}
              <span className="hidden xl:inline">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile Top Branding (Centered Logo) */}
      <div className="md:hidden sticky top-0 z-[100] bg-purple w-full h-16 flex items-center justify-center shadow-lg border-b border-gold/20">
        <img 
          src={LOGO_URL} 
          alt="UDOSA Logo" 
          className="h-10 object-contain cursor-pointer" 
          referrerPolicy="no-referrer" 
          onClick={() => onViewChange('home')}
        />
      </div>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-[100] bg-purple border-t border-gold/20 px-2 pt-2 pb-[calc(8px+env(safe-area-inset-bottom))] flex justify-around items-center shadow-[0_-10px_30px_rgba(0,0,0,0.3)]">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onViewChange(item.id as View)}
            className={`flex flex-col items-center gap-0.5 transition-all duration-300 ${
              activeView === item.id ? 'text-gold scale-105' : 'text-white/60'
            }`}
          >
            <div className="p-1">
              {React.cloneElement(item.icon as React.ReactElement, { className: "w-4 h-4" })}
            </div>
            <span className="text-[9px] font-bold uppercase tracking-tighter">{item.label.split(' ')[0]}</span>
            {activeView === item.id && (
              <motion.div
                layoutId="activeTab"
                className="w-1 h-1 bg-gold rounded-full mt-0.5"
              />
            )}
          </button>
        ))}
      </nav>
    </>
  );
};
