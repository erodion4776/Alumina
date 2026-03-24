/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Download } from 'lucide-react';
import { getEBookPages } from './components/EBookPages';

export default function App() {
  const [foundWords, setFoundWords] = useState<string[]>([]);

  const toggleWord = (word: string) => {
    setFoundWords(prev => 
      prev.includes(word) ? prev.filter(w => w !== word) : [...prev, word]
    );
  };

  const handleDownload = () => {
    window.print();
  };

  const pages = getEBookPages(foundWords, toggleWord);

  return (
    <div className="min-h-screen py-10 print:py-0 bg-stone-200 print:bg-white flex flex-col items-center gap-10">
      {pages.map((page, index) => (
        <React.Fragment key={index}>
          {page}
        </React.Fragment>
      ))}

      {/* Floating Action Button */}
      <button 
        onClick={handleDownload}
        className="no-print fixed bottom-10 right-10 bg-purple text-white px-8 py-5 rounded-full shadow-[0_20px_50px_rgba(88,28,135,0.5)] hover:bg-pink hover:scale-110 transition-all duration-500 flex items-center gap-4 group z-50 border-2 border-white/20"
      >
        <Download className="w-7 h-7 animate-bounce group-hover:animate-none" />
        <span className="font-serif font-bold tracking-[0.2em] text-sm uppercase">
          Download E-Book (PDF)
        </span>
      </button>
    </div>
  );
}
