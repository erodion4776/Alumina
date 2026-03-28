import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, RotateCcw, Share2, MessageCircle } from 'lucide-react';
import { WhatsAppGateway } from './WhatsAppGateway';

interface TruthOrDareProps {
  onBack: () => void;
}

const TRUTHS = [
  "Who was your first crush in JSS1?",
  "What is the funniest nickname a teacher gave you?",
  "Did you ever dodge a labor assignment?",
  "Which classmate did you think would become a celebrity?"
];

const DARES = [
  "Sing the first line of the School Anthem right now!",
  "Post a 'Knowledge for Service' shoutout on your WhatsApp status",
  "Do a 30-second imitation of the strictest teacher you remember",
  "Send a heart emoji to the last classmate you chatted with."
];

export const TruthOrDare: React.FC<TruthOrDareProps> = ({ onBack }) => {
  const [currentPrompt, setCurrentPrompt] = useState<string | null>(null);
  const [type, setType] = useState<'truth' | 'dare' | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [hasAnnounced, setHasAnnounced] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleSelect = (selectedType: 'truth' | 'dare') => {
    const list = selectedType === 'truth' ? TRUTHS : DARES;
    const randomPrompt = list[Math.floor(Math.random() * list.length)];
    setCurrentPrompt(randomPrompt);
    setType(selectedType);
    setIsFlipped(true);
  };

  const nextRound = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentPrompt(null);
      setType(null);
    }, 300);
  };

  const shareOnWhatsApp = () => {
    if (!currentPrompt) return;
    const text = `I'm playing UDSS Truth or Dare on the UDOSA 04 Portal! I just got this prompt: "${currentPrompt}". Your turn! udosa04.com 🎮🔥`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 flex flex-col items-center min-h-[70vh] justify-center">
      {!hasAnnounced && (
        <div className="fixed inset-0 z-[100] bg-purple/95 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="bg-white rounded-[2.5rem] p-8 max-w-sm w-full text-center shadow-2xl border-4 border-gold">
            <h2 className="text-3xl font-serif font-black text-purple uppercase tracking-tighter mb-2">Truth or Dare</h2>
            <p className="text-pink font-serif italic mb-8">The Social Finale: Relive the memories and challenge your friends.</p>
            <WhatsAppGateway 
              gameName="Truth or Dare" 
              type="pre" 
              onComplete={() => setHasAnnounced(true)} 
            />
          </div>
        </div>
      )}
      <div className="w-full flex justify-start mb-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-purple font-bold hover:text-pink transition-colors"
        >
          <ChevronLeft className="w-5 h-5" /> Back to Hub
        </button>
      </div>

      <div className="relative w-full max-w-sm aspect-[3/4] perspective-1000">
        <AnimatePresence mode="wait">
          {!isFlipped ? (
            <motion.div
              key="front"
              initial={{ rotateY: -180, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: 180, opacity: 0 }}
              transition={{ duration: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
              className="absolute inset-0 bg-gradient-to-br from-purple via-[#3b0764] to-pink rounded-[2.5rem] shadow-2xl p-8 flex flex-col items-center justify-center text-center border-4 border-gold/20"
            >
              <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mb-8 border border-white/20">
                <MessageCircle className="w-12 h-12 text-gold" />
              </div>
              <h2 className="text-3xl font-serif font-black text-white uppercase tracking-tighter mb-4">Truth or Dare</h2>
              <p className="text-white/80 font-serif italic mb-12">The Social Finale: Relive the memories and challenge your friends.</p>
              
              <div className="grid grid-cols-1 gap-4 w-full">
                <button
                  onClick={() => handleSelect('truth')}
                  className="bg-purple text-white py-4 rounded-2xl font-bold uppercase tracking-widest text-sm shadow-xl hover:bg-white hover:text-purple transition-all transform hover:scale-105 active:scale-95 border-2 border-purple-400/30"
                >
                  Truth
                </button>
                <button
                  onClick={() => handleSelect('dare')}
                  className="bg-pink text-white py-4 rounded-2xl font-bold uppercase tracking-widest text-sm shadow-xl hover:bg-white hover:text-pink transition-all transform hover:scale-105 active:scale-95 border-2 border-pink-400/30"
                >
                  Dare
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="back"
              initial={{ rotateY: 180, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: -180, opacity: 0 }}
              transition={{ duration: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
              className="absolute inset-0 bg-white rounded-[2.5rem] shadow-2xl p-8 flex flex-col items-center justify-center text-center border-4 border-purple"
            >
              <div className={`text-[10px] font-bold uppercase tracking-[0.3em] mb-4 px-4 py-1 rounded-full ${type === 'truth' ? 'bg-purple/10 text-purple' : 'bg-pink/10 text-pink'}`}>
                {type}
              </div>
              
              <div className="flex-grow flex items-center justify-center">
                <p className="text-2xl md:text-3xl font-serif font-bold text-gold leading-tight italic">
                  "{currentPrompt}"
                </p>
              </div>

              <div className="w-full space-y-4 mt-8">
                {!hasSubmitted ? (
                  <WhatsAppGateway 
                    gameName="Truth or Dare" 
                    score={`Prompt: ${currentPrompt}`} 
                    type="post" 
                    onComplete={() => setHasSubmitted(true)} 
                  />
                ) : (
                  <>
                    <button
                      onClick={() => {
                        setHasSubmitted(false);
                        nextRound();
                      }}
                      className="w-full bg-purple text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-pink transition-colors"
                    >
                      <RotateCcw className="w-4 h-4" /> Next Round
                    </button>
                    <button
                      onClick={onBack}
                      className="w-full border-2 border-purple text-purple py-4 rounded-xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-purple hover:text-white transition-all"
                    >
                      Back to Hub
                    </button>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
