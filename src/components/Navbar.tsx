import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Home, Heart, Users, BookOpen, Briefcase, Flower2, Gamepad2, Menu, X, ChevronRight, FileText } from 'lucide-react';

const LOGO_URL = "https://i.ibb.co/DHC0kvzR/1000773566-removebg-preview-1.png";

type View = 'home' | 'solidarity' | 'directory' | 'ebook' | 'business' | 'memorial' | 'games' | 'exco' | 'story' | 'constitution';

interface NavbarProps {
  activeView: View;
  onViewChange: (view: View) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeView, onViewChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const desktopNavItems = [
    { id: 'home', label: 'Home', icon: <Home className="w-4 h-4" /> },
    { id: 'ebook', label: 'Yearbook', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'solidarity', label: 'Solidarity', icon: <Heart className="w-4 h-4" /> },
    { id: 'games', label: 'Games', icon: <Gamepad2 className="w-4 h-4" /> },
    { id: 'constitution', label: 'Constitution', icon: <FileText className="w-4 h-4" /> },
  ];

  const mobileNavItems = [
    { id: 'home', label: 'Home', icon: <Home className="w-5 h-5" /> },
    { id: 'ebook', label: 'Digital Yearbook (E-Book)', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'solidarity', label: 'Solidarity Hub (Live/Audio)', icon: <Heart className="w-5 h-5" /> },
    { id: 'games', label: 'Game Center (All 7 Games)', icon: <Gamepad2 className="w-5 h-5" /> },
    { id: 'constitution', label: 'Bye-Laws & Constitution', icon: <FileText className="w-5 h-5" /> },
    { id: 'exco', label: 'Leadership (EXCO)', icon: <Users className="w-5 h-5" /> },
    { id: 'directory', label: 'Alumni Directory', icon: <Users className="w-5 h-5" /> },
    { id: 'business', label: 'Business Marketplace', icon: <Briefcase className="w-5 h-5" /> },
    { id: 'memorial', label: 'In Loving Memory (Memorial)', icon: <Flower2 className="w-5 h-5" /> },
  ];

  const handleNavClick = (view: View) => {
    onViewChange(view);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Sticky Top Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-purple h-20 flex items-center justify-between px-6 md:px-12 shadow-2xl border-b border-gold/20">
        {/* Left Side: Logo and Title */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavClick('home')}>
          <img src={LOGO_URL} alt="UDOSA Logo" className="h-10 md:h-12 object-contain" referrerPolicy="no-referrer" />
          <h1 className="text-gold font-serif font-bold text-lg md:text-2xl tracking-tight">UDOSA 04</h1>
        </div>

        {/* Right Side: Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {desktopNavItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id as View)}
              className={`text-sm font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-2 px-3 py-2 rounded-lg ${
                activeView === item.id
                  ? 'text-gold bg-white/10'
                  : 'text-white/70 hover:text-pink hover:bg-white/5'
              }`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </div>

        {/* Right Side: Mobile Hamburger */}
        <button 
          className="md:hidden text-gold p-2 hover:bg-white/10 rounded-full transition-colors"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu className="w-8 h-8" />
        </button>
      </nav>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-[150] bg-black/60 backdrop-blur-sm md:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-[200] w-[85%] max-w-sm bg-purple shadow-2xl md:hidden flex flex-col"
            >
              {/* Drawer Header */}
              <div className="p-6 border-b border-gold/20 flex justify-between items-center bg-purple-900/50">
                <div className="flex items-center gap-2">
                  <img src={LOGO_URL} alt="UDOSA Logo" className="h-8 object-contain" referrerPolicy="no-referrer" />
                  <span className="text-gold font-serif font-bold text-xl">Menu</span>
                </div>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-gold hover:bg-white/10 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Drawer Links */}
              <div className="flex-grow overflow-y-auto py-4">
                {mobileNavItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id as View)}
                    className={`w-full flex items-center justify-between px-6 py-4 transition-all duration-300 group ${
                      activeView === item.id 
                        ? 'bg-gold/10 text-gold' 
                        : 'text-white/80 hover:text-pink hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-2 rounded-lg ${activeView === item.id ? 'bg-gold text-purple' : 'bg-white/5 text-gold group-hover:bg-pink group-hover:text-white transition-colors'}`}>
                        {item.icon}
                      </div>
                      <span className="font-bold uppercase tracking-widest text-sm">{item.label}</span>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform ${activeView === item.id ? 'translate-x-1' : 'opacity-0 group-hover:opacity-100 group-hover:translate-x-1'}`} />
                  </button>
                ))}
              </div>

              {/* Drawer Footer */}
              <div className="p-8 border-t border-gold/20 text-center bg-purple-900/30">
                <p className="text-white/30 text-[10px] uppercase tracking-[0.3em] mb-2">Unity and Progress</p>
                <p className="text-gold/40 text-[8px] uppercase tracking-widest">UDOSA Class of 2004</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
