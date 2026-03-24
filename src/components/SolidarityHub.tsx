import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Music, Video, Radio, Mic2, Disc, Users } from 'lucide-react';

export const SolidarityHub: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);

  const playlist = [
    { title: "UDSS School Anthem", artist: "UDOSA 04 Choir", duration: "2:45", type: "Anthem" },
    { title: "Class of 2004 Throwback Mix", artist: "DJ Alumni", duration: "45:00", type: "Mix" },
    { title: "Alumni Podcast Ep. 1", artist: "Dr. Irene Ogbeide", duration: "15:20", type: "Podcast" },
    { title: "Solidarity Message", artist: "Chairman Ehima", duration: "5:10", type: "Speech" },
  ];

  return (
    <div className="min-h-screen bg-stone-50 p-6 md:p-12 pb-32 md:pb-12">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b-4 border-purple pb-8">
          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl font-serif font-black text-purple uppercase tracking-tighter leading-none">
              Solidarity <span className="text-gold">Hub</span>
            </h1>
            <p className="text-pink font-serif italic text-xl md:text-2xl">Live Broadcasts & Audio Library</p>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest animate-pulse">
              <Radio className="w-4 h-4" />
              Live Now
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Video Player Section */}
          <section className="lg:col-span-2 space-y-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple rounded-xl text-gold shadow-lg">
                <Video className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-purple">Live Stream</h2>
            </div>

            <div className="aspect-video bg-black rounded-[2rem] overflow-hidden shadow-2xl relative group border-4 border-gold/20">
              <img 
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1200" 
                alt="Live Stream Placeholder" 
                className="w-full h-full object-cover opacity-60"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-24 h-24 bg-gold rounded-full flex items-center justify-center text-purple shadow-2xl shadow-gold/50"
                >
                  <Play className="w-10 h-10 fill-current ml-2" />
                </motion.button>
              </div>
              <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                <div className="space-y-1">
                  <p className="text-gold text-xs font-black uppercase tracking-widest">Currently Streaming</p>
                  <h3 className="text-white text-2xl font-serif font-bold">Burial Ceremony of Late Parent (Live)</h3>
                </div>
                <div className="flex items-center gap-4 text-white/60 text-xs font-bold uppercase tracking-widest">
                  <Users className="w-4 h-4" />
                  42 Viewers
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-video bg-white rounded-2xl overflow-hidden shadow-lg border border-stone-100 relative group cursor-pointer">
                  <img 
                    src={`https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=400&sig=${i}`} 
                    alt="Past Stream" 
                    className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-purple/20 group-hover:bg-purple/0 transition-colors" />
                  <div className="absolute bottom-3 left-3">
                    <p className="text-white text-[10px] font-bold uppercase tracking-widest">Past Stream {i}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Audio Library Section */}
          <section className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gold rounded-xl text-purple shadow-lg">
                <Music className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-purple">Audio Library</h2>
            </div>

            {/* Music Player UI */}
            <div className="bg-purple p-8 rounded-[2.5rem] shadow-2xl text-white space-y-8 relative overflow-hidden">
              <div className="absolute -right-20 -top-20 opacity-10">
                <Disc className="w-64 h-64 animate-spin-slow" />
              </div>

              <div className="relative z-10 space-y-6">
                <div className="aspect-square bg-white/10 rounded-3xl flex items-center justify-center border border-white/20 shadow-inner overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=400" 
                    alt="Album Art" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="text-center space-y-1">
                  <h3 className="text-2xl font-serif font-bold text-gold">{playlist[currentTrack].title}</h3>
                  <p className="text-white/60 text-sm font-serif italic">{playlist[currentTrack].artist}</p>
                </div>

                <div className="space-y-2">
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: isPlaying ? '45%' : '0%' }}
                      className="h-full bg-gold"
                    />
                  </div>
                  <div className="flex justify-between text-[10px] font-bold text-white/40 uppercase tracking-widest">
                    <span>1:12</span>
                    <span>{playlist[currentTrack].duration}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center px-4">
                  <button className="text-white/60 hover:text-gold transition-colors">
                    <SkipBack className="w-6 h-6 fill-current" />
                  </button>
                  <button 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-16 h-16 bg-gold rounded-full flex items-center justify-center text-purple shadow-xl shadow-gold/20 hover:scale-110 transition-transform"
                  >
                    {isPlaying ? <Pause className="w-8 h-8 fill-current" /> : <Play className="w-8 h-8 fill-current ml-1" />}
                  </button>
                  <button className="text-white/60 hover:text-gold transition-colors">
                    <SkipForward className="w-6 h-6 fill-current" />
                  </button>
                </div>
              </div>
            </div>

            {/* Playlist */}
            <div className="space-y-3">
              {playlist.map((track, i) => (
                <button 
                  key={i}
                  onClick={() => {
                    setCurrentTrack(i);
                    setIsPlaying(true);
                  }}
                  className={`w-full p-4 rounded-2xl flex items-center gap-4 transition-all duration-300 border ${
                    currentTrack === i 
                      ? 'bg-white shadow-xl border-gold/20' 
                      : 'bg-white/50 border-transparent hover:bg-white hover:shadow-lg'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    currentTrack === i ? 'bg-purple text-gold' : 'bg-stone-100 text-slate-400'
                  }`}>
                    {track.type === 'Podcast' ? <Mic2 className="w-5 h-5" /> : <Music className="w-5 h-5" />}
                  </div>
                  <div className="flex-grow text-left">
                    <h4 className={`text-sm font-serif font-bold ${currentTrack === i ? 'text-purple' : 'text-slate-600'}`}>
                      {track.title}
                    </h4>
                    <p className="text-[10px] text-slate-400 font-serif italic">{track.artist}</p>
                  </div>
                  <span className="text-[10px] font-bold text-slate-300">{track.duration}</span>
                </button>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
