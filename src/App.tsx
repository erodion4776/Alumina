/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Home } from './components/PortalComponents';
import { SolidarityHub } from './components/PortalComponents';
import { Directory } from './components/PortalComponents';
import { EBookReader } from './components/EBookReader';
import { BusinessMarketplace } from './components/PortalComponents';
import { Memorial, OurStory, GamesHub } from './components/PortalComponents';

type View = 'home' | 'solidarity' | 'directory' | 'ebook' | 'business' | 'memorial' | 'story' | 'games';

export default function App() {
  const [activeView, setActiveView] = useState<View>('home');
  const [foundWords, setFoundWords] = useState<string[]>([]);

  const toggleWord = (word: string) => {
    setFoundWords(prev => 
      prev.includes(word) ? prev.filter(w => w !== word) : [...prev, word]
    );
  };

  const handleDownload = () => {
    window.print();
  };

  const renderView = () => {
    switch (activeView) {
      case 'home':
        return <Home onViewChange={setActiveView} />;
      case 'story':
        return <OurStory />;
      case 'solidarity':
        return <SolidarityHub />;
      case 'directory':
        return <Directory />;
      case 'ebook':
        return <EBookReader foundWords={foundWords} toggleWord={toggleWord} handleDownload={handleDownload} />;
      case 'business':
        return <BusinessMarketplace />;
      case 'memorial':
        return <Memorial />;
      case 'games':
        return <GamesHub />;
      default:
        return <Home onViewChange={setActiveView} />;
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      <Navbar activeView={activeView} onViewChange={setActiveView} />
      
      <main className="flex-grow">
        {renderView()}
      </main>

      {/* Footer for the entire portal */}
      <footer className="bg-purple text-white py-12 px-8 mt-auto no-print">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-gold font-serif font-bold text-xl">UDOSA 04 Connect</h3>
            <p className="text-white/60 text-sm font-serif italic">
              "Unity and Progress: Celebrating 20 years of excellence and brotherhood."
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-gold font-serif font-bold uppercase tracking-widest text-xs">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2 text-sm text-white/60">
              <button onClick={() => setActiveView('home')} className="hover:text-gold text-left">Home</button>
              <button onClick={() => setActiveView('ebook')} className="hover:text-gold text-left">E-Book</button>
              <button onClick={() => setActiveView('directory')} className="hover:text-gold text-left">Directory</button>
              <button onClick={() => setActiveView('solidarity')} className="hover:text-gold text-left">Solidarity</button>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-gold font-serif font-bold uppercase tracking-widest text-xs">Contact Us</h4>
            <p className="text-sm text-white/60">Email: info@udosa04.org</p>
            <p className="text-sm text-white/60">Benin City, Edo State, Nigeria</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-white/10 mt-12 pt-8 text-center text-[10px] text-white/40 uppercase tracking-widest">
          © 2026 UDOSA Class of 2004. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
