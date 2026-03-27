import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Download, BookOpen } from 'lucide-react';
import { getEBookPages } from './EBookPages';

interface EBookReaderProps {
  foundWords: string[];
  toggleWord: (word: string) => void;
  handleDownload: () => void;
  initialPage?: number;
}

export const EBookReader: React.FC<EBookReaderProps> = ({ foundWords, toggleWord, handleDownload, initialPage = 0 }) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [scale, setScale] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<HTMLDivElement>(null);
  
  const pages = getEBookPages(foundWords, toggleWord);
  const totalPages = pages.length;

  const updateScale = useCallback(() => {
    if (!viewerRef.current) return;
    
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    // Header is ~64px-80px, Bottom Nav is ~70px-80px, Pagination UI is ~60px
    // We want to fit the A4 (210x297 ratio) into the remaining space
    const reservedHeight = viewportWidth < 768 ? 220 : 250; 
    const availableWidth = viewportWidth - 40; // 20px padding each side
    const availableHeight = viewportHeight - reservedHeight;
    
    // A4 Aspect Ratio: 210 / 297 = 0.707
    const a4Width = 794; // approx px at 96dpi
    const a4Height = 1123; // approx px at 96dpi
    
    let scaleX = availableWidth / a4Width;
    let scaleY = availableHeight / a4Height;
    
    let newScale = Math.min(scaleX, scaleY, 1);
    
    // Apply extra scaling factor on small mobile screens to ensure full height visibility
    if (viewportWidth < 768) {
      newScale = newScale * 0.92;
    }
    
    setScale(newScale);
  }, []);

  useEffect(() => {
    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, [updateScale]);

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
    <div ref={viewerRef} className="relative min-h-[calc(100vh-144px)] md:min-h-[calc(100vh-80px)] bg-[#0f0714] flex flex-col items-center py-4 md:py-8 px-2 md:px-4 pb-32 md:pb-12 overflow-hidden">
      {/* Page Indicator */}
      <div className="mb-4 md:mb-8 flex flex-col items-center gap-2 w-full max-w-[200px] md:max-w-xs z-20">
        <div className="flex items-center gap-2 md:gap-3 bg-purple/80 backdrop-blur-md text-gold px-4 md:px-6 py-1.5 md:py-2 rounded-full shadow-lg border border-gold/30">
          <BookOpen className="w-3 h-3 md:w-4 md:h-4" />
          <span className="font-serif font-bold tracking-[0.1em] md:tracking-[0.2em] text-[9px] md:text-xs uppercase">
            Page {currentPage + 1} of {totalPages}
          </span>
        </div>
        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${((currentPage + 1) / totalPages) * 100}%` }}
            className="h-full bg-pink shadow-[0_0_10px_rgba(219,39,119,0.5)]"
          />
        </div>
      </div>

      {/* Slide Viewer */}
      <div className="relative w-full flex-grow flex items-center justify-center overflow-visible">
        {/* Navigation Arrows - Edge positioned for mobile */}
        <button 
          onClick={prevPage}
          disabled={currentPage === 0}
          className="absolute left-0 md:-left-16 lg:-left-24 z-30 p-3 md:p-4 rounded-r-2xl md:rounded-full bg-white/10 md:bg-white backdrop-blur-md md:backdrop-blur-none shadow-xl border-y border-r md:border-2 border-gold/30 md:border-gold text-gold md:text-purple transition-all hover:scale-110 active:scale-95 disabled:opacity-0 disabled:pointer-events-none"
        >
          <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
        </button>

        <div className="w-full h-full flex items-center justify-center overflow-visible">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, scale: scale * 0.9, x: 20 }}
              animate={{ opacity: 1, scale: scale, x: 0 }}
              exit={{ opacity: 0, scale: scale * 0.9, x: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="shadow-[0_30px_100px_rgba(0,0,0,0.5)] rounded-sm overflow-hidden origin-center no-print"
              style={{ 
                width: '210mm', 
                height: '297mm',
                transform: `scale(${scale})`,
                flexShrink: 0
              }}
            >
              {pages[currentPage]}
            </motion.div>
          </AnimatePresence>
        </div>

        <button 
          onClick={nextPage}
          disabled={currentPage === totalPages - 1}
          className="absolute right-0 md:-right-16 lg:-right-24 z-30 p-3 md:p-4 rounded-l-2xl md:rounded-full bg-white/10 md:bg-white backdrop-blur-md md:backdrop-blur-none shadow-xl border-y border-l md:border-2 border-gold/30 md:border-gold text-gold md:text-purple transition-all hover:scale-110 active:scale-95 disabled:opacity-0 disabled:pointer-events-none"
        >
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
        </button>
      </div>

      {/* Floating Action Button - Responsive */}
      <button 
        onClick={handleDownload}
        className="no-print fixed bottom-24 right-6 md:bottom-10 md:right-10 bg-purple text-white p-4 md:px-8 md:py-5 rounded-full shadow-[0_20px_50px_rgba(88,28,135,0.5)] hover:bg-pink hover:scale-110 transition-all duration-500 flex items-center gap-4 group z-50 border-2 border-white/20"
        title="Download Full PDF"
      >
        <Download className="w-6 h-6 md:w-7 md:h-7 animate-bounce group-hover:animate-none" />
        <span className="hidden md:inline font-serif font-bold tracking-[0.2em] text-sm uppercase">
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
