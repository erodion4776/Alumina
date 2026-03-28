import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, Trophy } from 'lucide-react';
import { WhatsAppGateway } from './WhatsAppGateway';

interface TriviaMasterProps {
  onBack: () => void;
}

const QUESTIONS = [
  { q: "What year did UDSS Class of 2004 graduate?", a: "2004" },
  { q: "What is the school motto?", a: "Knowledge for Service" },
  { q: "Who was the principal in 2004?", a: "The Legend" },
  { q: "What are the school colors?", a: "Purple and White" }
];

export const TriviaMaster: React.FC<TriviaMasterProps> = ({ onBack }) => {
  const [hasAnnounced, setHasAnnounced] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleAnswer = (ans: string) => {
    if (ans === QUESTIONS[currentIdx].a) setScore(s => s + 1);
    if (currentIdx < QUESTIONS.length - 1) {
      setCurrentIdx(i => i + 1);
    } else {
      setIsGameOver(true);
    }
  };

  if (!hasAnnounced) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 flex flex-col items-center justify-center min-h-[60vh]">
        <h2 className="text-4xl font-serif font-black text-purple mb-8 uppercase tracking-tighter">Trivia Master</h2>
        <WhatsAppGateway 
          gameName="Trivia Master" 
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
        <div className="text-pink font-bold">Score: {score}</div>
      </div>

      <div className="bg-white rounded-[2.5rem] p-12 shadow-2xl border-4 border-gold w-full max-w-2xl text-center">
        <h3 className="text-2xl font-serif font-bold text-purple mb-8">{QUESTIONS[currentIdx].q}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[QUESTIONS[currentIdx].a, "Wrong Answer", "Another One", "Maybe This"].sort().map(opt => (
            <button 
              key={opt}
              onClick={() => handleAnswer(opt)}
              className="py-4 bg-purple/5 border-2 border-purple/20 rounded-xl hover:bg-purple hover:text-white transition-all font-bold"
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      {isGameOver && !hasSubmitted && (
        <WhatsAppGateway 
          gameName="Trivia Master" 
          score={`${score}/${QUESTIONS.length}`} 
          type="post" 
          onComplete={() => setHasSubmitted(true)} 
        />
      )}

      {isGameOver && hasSubmitted && (
        <div className="mt-8">
          <button onClick={onBack} className="bg-purple text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs">Play Again</button>
        </div>
      )}
    </div>
  );
};
