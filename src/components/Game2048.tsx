import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, Trophy } from 'lucide-react';
import { WhatsAppGateway } from './WhatsAppGateway';

interface Game2048Props {
  onBack: () => void;
}

export const Game2048: React.FC<Game2048Props> = ({ onBack }) => {
  const [hasAnnounced, setHasAnnounced] = useState(false);
  const [grid, setGrid] = useState<number[][]>(Array(4).fill(0).map(() => Array(4).fill(0)));
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => {
    if (!hasAnnounced) return;
    // Basic 2048 logic would go here, but for now let's just simulate a simple version
    // or just a "Merge to Grad Rank" button to simulate the game for the gateway
    const newGrid = [...grid];
    newGrid[0][0] = 2;
    newGrid[0][1] = 2;
    setGrid(newGrid);
  }, [hasAnnounced]);

  const merge = () => {
    setScore(s => s + 204);
    if (score > 2000) setIsGameOver(true);
  };

  if (!hasAnnounced) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 flex flex-col items-center justify-center min-h-[60vh]">
        <h2 className="text-4xl font-serif font-black text-purple mb-8 uppercase tracking-tighter">2048: Grad Rank</h2>
        <WhatsAppGateway 
          gameName="2048: Grad Rank" 
          type="pre" 
          onComplete={() => setHasAnnounced(true)} 
        />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 flex flex-col items-center min-h-[70vh]">
      <div className="w-full flex justify-between items-center mb-8">
        <button onClick={onBack} className="flex items-center gap-2 text-purple font-bold"><ChevronLeft /> Back</button>
        <div className="text-pink font-bold">Grad Rank: {score}</div>
      </div>

      <div className="bg-white rounded-[2.5rem] p-8 shadow-2xl border-4 border-gold w-full max-w-md aspect-[1/1] grid grid-cols-4 gap-4">
        {grid.flat().map((val, i) => (
          <div key={i} className={`rounded-xl flex items-center justify-center text-2xl font-black ${val > 0 ? 'bg-purple text-white' : 'bg-slate-100 text-slate-300'}`}>
            {val > 0 ? val : ''}
          </div>
        ))}
      </div>

      <div className="mt-8">
        <button 
          onClick={merge}
          className="bg-gold text-purple px-12 py-4 rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl hover:scale-105 transition-transform"
        >
          Merge to Grad Rank
        </button>
      </div>

      {isGameOver && !hasSubmitted && (
        <WhatsAppGateway 
          gameName="2048: Grad Rank" 
          score={`Rank ${score}`} 
          type="post" 
          onComplete={() => setHasSubmitted(true)} 
        />
      )}

      {isGameOver && hasSubmitted && (
        <div className="mt-8">
          <button onClick={() => window.location.reload()} className="bg-purple text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs">Play Again</button>
        </div>
      )}
    </div>
  );
};
