import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Home, Heart, Users, BookOpen, Briefcase, Flower2, Gamepad2, Menu, X } from 'lucide-react';

const LOGO_URL = "https://i.ibb.co/DHC0kvzR/1000773566-removebg-preview-1.png";

type View = 'home' | 'solidarity' | 'directory' | 'ebook' | 'business' | 'memorial' | 'games' | 'exco';

interface NavbarProps {
  activeView: View;
  onViewChange: (view: View) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeView, onViewChange }) => {
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);

  const primaryNavItems = [
    { id: 'home', label: 'Home', icon: <Home className="w-6 h-6" /> },
    { id: 'ebook', label: 'Yearbook', icon: <BookOpen className="w-6 h-6" /> },
    { id: 'solidarity', label: 'Solidarity', icon: <Heart className="w-6 h-6" /> },
    { id: 'games', label: 'Games', icon: <Gamepad2 className="w-6 h-6" /> },
  ];

  const secondaryNavItems = [
    { id: 'exco', label: 'Leadership', icon: <Users className="w-8 h-8" />, description: 'EXCO Members' },
    { id: 'directory', label: 'Directory', icon: <Users className="w-8 h-8" />, description: 'Alumni Network' },
    { id: 'business', label: 'Business', icon: <Briefcase className="w-8 h-8" />, description: 'Marketplace' },
    { id: 'memorial', label: 'Memorial', icon: <Flower2 className="w-8 h-8" />, description: 'In Loving Memory' },
  ];

  const allNavItems = [
    ...primaryNavItems,
    ...secondaryNavItems
  ];

  const handleSecondaryClick = (view: View) => {
    onViewChange(view);
    setIsMoreMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Top Navbar (Keep as is for desktop) */}
      <nav className="hidden md:flex sticky top-0 z-[100] bg-purple w-full h-20 items-center justify-between px-8 shadow-xl border-b border-gold/20">
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => onViewChange('home')}>
          <img src={LOGO_URL} alt="UDOSA Logo" className="h-12 object-contain" referrerPolicy="no-referrer" />
          <div className="hidden lg:block">
            <h1 className="text-gold font-serif font-bold text-xl tracking-tighter">UDOSA 04 Connect</h1>
            <p className="text-white/60 text-[10px] uppercase tracking-widest leading-none">Alumni Portal</p>
          </div>
        </div>

        <div className="flex items-center gap-1 lg:gap-4">
          {allNavItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id as View)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                activeView === item.id
                  ? 'bg-gold text-purple shadow-lg scale-105'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              {React.cloneElement(item.icon as React.ReactElement, { className: "w-4 h-4" })}
              <span className="hidden xl:inline">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile Top Branding */}
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
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-[100] bg-purple-900/90 backdrop-blur-md border-t border-gold/30 px-4 pt-3 pb-8 flex justify-around items-center shadow-[0_-10px_30px_rgba(0,0,0,0.3)]">
        {primaryNavItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onViewChange(item.id as View)}
            className={`flex flex-col items-center gap-1 transition-all duration-300 ${
              activeView === item.id ? 'text-gold scale-110' : 'text-white/60'
            }`}
          >
            <div className={`p-1.5 rounded-xl transition-colors ${activeView === item.id ? 'bg-gold/10' : ''}`}>
              {React.cloneElement(item.icon as React.ReactElement, { className: "w-5 h-5" })}
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest">{item.label}</span>
            {activeView === item.id && (
              <motion.div
                layoutId="activeTab"
                className="w-1.5 h-1.5 bg-pink rounded-full mt-0.5 shadow-[0_0_8px_rgba(255,105,180,0.8)]"
              />
            )}
          </button>
        ))}
        
        {/* MORE Button */}
        <button
          onClick={() => setIsMoreMenuOpen(true)}
          className={`flex flex-col items-center gap-1 transition-all duration-300 ${
            isMoreMenuOpen ? 'text-gold scale-110' : 'text-white/60'
          }`}
        >
          <div className="p-1.5 rounded-xl">
            <Menu className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest">More</span>
        </button>
      </nav>

      {/* More Menu Overlay */}
      <AnimatePresence>
        {isMoreMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[200] bg-purple-950/95 backdrop-blur-2xl flex flex-col p-8 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-8 shrink-0">
              <div>
                <h2 className="text-gold font-serif font-bold text-3xl">Explore</h2>
                <p className="text-white/60 text-sm font-serif italic">UDOSA 04 Alumni Portal</p>
              </div>
              <button 
                onClick={() => setIsMoreMenuOpen(false)}
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-6 mb-12">
              {secondaryNavItems.map((item) => (
                <motion.button
                  key={item.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleSecondaryClick(item.id as View)}
                  className="flex flex-col items-center p-4 md:p-6 rounded-3xl bg-white/5 border border-gold/20 hover:bg-white/10 transition-colors group"
                >
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-gold flex items-center justify-center mb-3 md:mb-4 group-hover:bg-gold group-hover:text-purple transition-all duration-300">
                    {React.cloneElement(item.icon as React.ReactElement, { className: "w-6 h-6 md:w-8 md:h-8 text-gold group-hover:text-purple" })}
                  </div>
                  <span className="text-white font-serif font-bold text-xs md:text-sm uppercase tracking-widest mb-1">{item.label}</span>
                  <span className="text-white/40 text-[8px] md:text-[10px] uppercase tracking-tighter">{item.description}</span>
                </motion.button>
              ))}
            </div>

            <div className="mt-auto text-center pb-12 shrink-0">
              <img src={LOGO_URL} alt="UDOSA Logo" className="h-12 md:h-16 mx-auto mb-4 opacity-50 grayscale" referrerPolicy="no-referrer" />
              <p className="text-white/20 text-[10px] uppercase tracking-[0.3em]">Unity and Progress</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
