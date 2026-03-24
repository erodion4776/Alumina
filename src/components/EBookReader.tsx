import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Download, BookOpen } from 'lucide-react';
import { getEBookPages } from './EBookPages';

interface EBookReaderProps {
  foundWords: string[];
  toggleWord: (word: string) => void;
  handleDownload: () => void;
}

export const EBookReader: React.FC<EBookReaderProps> = ({ foundWords, toggleWord, handleDownload }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const pages = getEBookPages(foundWords, toggleWord);
  const totalPages = pages.length;

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextPage();
      if (e.key === 'ArrowLeft') prevPage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage]);

  return (
    <div className="relative min-h-[calc(100vh-144px)] md:min-h-[calc(100vh-80px)] bg-stone-100 flex flex-col items-center py-8 md:py-12 px-4 pb-32 md:pb-12 overflow-x-hidden">
      {/* Page Indicator */}
      <div className="mb-6 md:mb-8 flex flex-col items-center gap-2 w-full max-w-xs">
        <div className="flex items-center gap-3 bg-purple text-gold px-6 py-2 rounded-full shadow-lg border border-gold/30">
          <BookOpen className="w-4 h-4" />
          <span className="font-serif font-bold tracking-[0.2em] text-[10px] md:text-xs uppercase">
            Page {currentPage + 1} of {totalPages}
          </span>
        </div>
        <div className="w-full h-1 bg-stone-200 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${((currentPage + 1) / totalPages) * 100}%` }}
            className="h-full bg-pink"
          />
        </div>
      </div>

      {/* Slide Viewer */}
      <div className="relative w-full max-w-5xl flex items-center justify-center">
        {/* Desktop Navigation Arrows */}
        <button 
          onClick={prevPage}
          disabled={currentPage === 0}
          className="absolute -left-16 lg:-left-24 z-10 p-4 rounded-full bg-white shadow-xl border-2 border-gold text-purple transition-all hover:scale-110 active:scale-95 disabled:opacity-30 disabled:hover:scale-100 hidden md:block"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>

        <div className="w-full flex justify-center overflow-hidden px-2 md:px-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="shadow-[0_20px_60px_rgba(0,0,0,0.15)] rounded-xl overflow-hidden scale-[0.85] sm:scale-90 md:scale-100 origin-top"
            >
              {pages[currentPage]}
            </motion.div>
          </AnimatePresence>
        </div>

        <button 
          onClick={nextPage}
          disabled={currentPage === totalPages - 1}
          className="absolute -right-16 lg:-right-24 z-10 p-4 rounded-full bg-white shadow-xl border-2 border-gold text-purple transition-all hover:scale-110 active:scale-95 disabled:opacity-30 disabled:hover:scale-100 hidden md:block"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      </div>

      {/* Mobile Controls - Enhanced for touch */}
      <div className="flex md:hidden gap-12 mt-4 items-center">
        <button 
          onClick={prevPage}
          disabled={currentPage === 0}
          className="w-16 h-16 flex items-center justify-center rounded-full bg-purple text-gold shadow-2xl border-2 border-gold/50 active:scale-90 transition-transform disabled:opacity-20"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        <button 
          onClick={nextPage}
          disabled={currentPage === totalPages - 1}
          className="w-16 h-16 flex items-center justify-center rounded-full bg-purple text-gold shadow-2xl border-2 border-gold/50 active:scale-90 transition-transform disabled:opacity-20"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      </div>

      {/* Floating Action Button - Only for E-Book Reader */}
      <button 
        onClick={handleDownload}
        className="no-print fixed bottom-24 right-10 md:bottom-10 bg-purple text-white px-8 py-5 rounded-full shadow-[0_20px_50px_rgba(88,28,135,0.5)] hover:bg-pink hover:scale-110 transition-all duration-500 flex items-center gap-4 group z-50 border-2 border-white/20"
      >
        <Download className="w-7 h-7 animate-bounce group-hover:animate-none" />
        <span className="font-serif font-bold tracking-[0.2em] text-sm uppercase">
          Download Full PDF
        </span>
      </button>

      {/* Hidden Print Container - Ensures all pages are printed */}
      <div className="hidden print:block">
        {pages.map((page, index) => (
          <div key={index} className="page-break-after-always">
            {page}
          </div>
        ))}
      </div>
    </div>
  );
};
