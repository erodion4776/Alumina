import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, ShieldCheck, X, Phone, Users } from 'lucide-react';
import { VERIFIED_ALUMNI_NUMBERS } from '../constants';

interface WhatsAppGatewayProps {
  gameName: string;
  score?: number | string;
  type: 'pre' | 'post';
  onComplete: () => void;
}

const COUNTRY_CODES = [
  { code: '+234', country: 'Nigeria' },
  { code: '+44', country: 'UK' },
  { code: '+1', country: 'USA/Canada' },
  { code: '+61', country: 'Australia' },
];

export const WhatsAppGateway: React.FC<WhatsAppGatewayProps> = ({ gameName, score, type, onComplete }) => {
  const [showVerification, setShowVerification] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+234');
  const [userName, setUserName] = useState(() => {
    return sessionStorage.getItem('udosa04_user_name') || '';
  });
  const [error, setError] = useState('');
  const [isVerified, setIsVerified] = useState(() => {
    return sessionStorage.getItem('udosa04_verified') === 'true';
  });

  const verifyMember = (input: string) => {
    // Strip all non-digits
    const digits = input.replace(/\D/g, '');
    return VERIFIED_ALUMNI_NUMBERS.includes(digits);
  };

  const handleShare = () => {
    if (type === 'post' && !isVerified) {
      setShowVerification(true);
      return;
    }

    let message = "";
    if (type === 'pre') {
      message = `Hey UDOSA 04! I'm about to take on the ${gameName} challenge on our portal. Get ready for my score! 🎮🔥 udosa04.com`;
    } else {
      const displayName = userName || "An Alumnus";
      message = `MISSION COMPLETE! ${displayName} (Verified Legend) just scored ${score} on ${gameName}! udosa04.com`;
    }
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
    onComplete();
  };

  const handleVerify = () => {
    if (!userName.trim()) {
      setError('Please enter your name.');
      return;
    }
    const fullNumber = countryCode + phoneNumber;
    if (verifyMember(fullNumber)) {
      setIsVerified(true);
      sessionStorage.setItem('udosa04_verified', 'true');
      sessionStorage.setItem('udosa04_user_name', userName.trim());
      setShowVerification(false);
      setError('');
      
      // Proceed to share after verification
      const message = `MISSION COMPLETE! ${userName.trim()} (Verified Legend) just scored ${score} on ${gameName}! udosa04.com`;
      window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
      onComplete();
    } else {
      setError('Access Denied: This number is not on the verified UDOSA 04 list. Please contact the EXCO for verification.');
    }
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
    <>
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
              {isVerified ? (
                <span className="text-green-600 flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> Verified Alumni Status Active
                </span>
              ) : (
                "Carrying everyone along: Share to sync your progress with the house."
              )}
            </p>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {showVerification && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-xl p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-[3rem] p-8 md:p-12 max-w-md w-full shadow-2xl border-2 border-gold relative"
            >
              <button 
                onClick={() => setShowVerification(false)}
                className="absolute top-6 right-6 text-slate-400 hover:text-purple transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-gold/10 rounded-3xl flex items-center justify-center mx-auto border border-gold/30">
                  <ShieldCheck className="w-10 h-10 text-gold" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-2xl font-serif font-black text-purple uppercase tracking-widest">Alumni Verification</h3>
                  <p className="text-slate-500 text-sm font-serif italic">
                    To maintain the integrity of our portal, only verified Class of 2004 alumni can share scores to the official group.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="relative">
                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input 
                      type="text"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      placeholder="Your Full Name"
                      className="w-full bg-stone-100 border-2 border-stone-200 rounded-xl pl-12 pr-4 py-4 text-lg font-bold text-purple outline-none focus:border-purple transition-colors"
                    />
                  </div>

                  <div className="flex gap-2">
                    <select 
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      className="bg-stone-100 border-2 border-stone-200 rounded-xl px-3 py-4 text-sm font-bold text-purple outline-none focus:border-purple transition-colors"
                    >
                      {COUNTRY_CODES.map(c => (
                        <option key={c.code} value={c.code}>{c.code} ({c.country})</option>
                      ))}
                    </select>
                    <div className="relative flex-grow">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input 
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="Phone Number"
                        className="w-full bg-stone-100 border-2 border-stone-200 rounded-xl pl-12 pr-4 py-4 text-lg font-bold text-purple outline-none focus:border-purple transition-colors"
                      />
                    </div>
                  </div>

                  {error && (
                    <motion.p 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="text-pink text-xs font-bold leading-relaxed"
                    >
                      {error}
                    </motion.p>
                  )}

                  <button
                    onClick={handleVerify}
                    className="w-full bg-purple text-white py-5 rounded-2xl font-bold uppercase tracking-widest text-xs shadow-xl hover:bg-pink transition-all flex items-center justify-center gap-3"
                  >
                    <ShieldCheck className="w-5 h-5" />
                    Verify & Share Result
                  </button>
                </div>

                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">
                  Verification is required only once per session.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
