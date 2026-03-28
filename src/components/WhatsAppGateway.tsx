import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppGatewayProps {
  gameName: string;
  score?: number | string;
  type: 'pre' | 'post';
  onComplete: () => void;
}

export const WhatsAppGateway: React.FC<WhatsAppGatewayProps> = ({ gameName, score, type, onComplete }) => {
  const handleShare = () => {
    let message = "";
    if (type === 'pre') {
      message = `Hey UDOSA 04! I'm about to take on the ${gameName} challenge on our portal. Get ready for my score! 🎮🔥 udosa04.com`;
    } else {
      message = `MISSION COMPLETE! I just scored ${score} on the ${gameName}. Who in this group can beat me? 🏆💪 Check it out at udosa04.com`;
    }
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
    onComplete();
  };

  if (type === 'pre') {
    return (
      <div className="flex flex-col items-center gap-4">
        <button
          onClick={handleShare}
          className="flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-widest text-sm shadow-xl hover:scale-105 transition-transform"
        >
          <MessageCircle className="w-6 h-6" />
          Announce to the House
        </button>
        <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">
          Carrying everyone along: Share to sync your progress with the house.
        </p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-purple/90 backdrop-blur-md p-4"
    >
      <div className="bg-white rounded-[2.5rem] p-8 max-w-sm w-full text-center shadow-2xl border-4 border-gold">
        <h2 className="text-3xl font-serif font-black text-purple uppercase tracking-tighter mb-2">Mission Complete!</h2>
        <p className="text-pink font-serif italic mb-8">Your result: <span className="text-gold font-bold">{score}</span></p>
        
        <div className="flex flex-col items-center gap-4">
          <button
            onClick={handleShare}
            className="w-full flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-widest text-sm shadow-xl hover:scale-105 transition-transform"
          >
            <MessageCircle className="w-6 h-6" />
            Submit Result to WhatsApp
          </button>
          <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">
            Carrying everyone along: Share to sync your progress with the house.
          </p>
        </div>
      </div>
    </motion.div>
  );
};
