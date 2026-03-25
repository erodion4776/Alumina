import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  RotateCw,
  Newspaper, 
  CheckCircle2, 
  Play, 
  Music, 
  Search, 
  Filter, 
  Briefcase, 
  Heart, 
  Users, 
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  ChevronUp,
  ChevronDown,
  Clock,
  MapPin,
  Mail,
  Settings,
  X,
  Flame,
  ShieldCheck,
  CheckCircle,
  Gamepad2,
  Trophy,
  Share2
} from 'lucide-react';
import { 
  LATEST_NEWS, 
  PROJECT_PROGRESS, 
  ALUMNI_DIRECTORY, 
  BUSINESS_MARKETPLACE, 
  AUDIO_LIBRARY,
  LOGO_URL
} from '../constants';

// --- Home Section ---
export const Home = ({ onViewChange }: { onViewChange: (view: any) => void }) => {
  const [news, setNews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showReconnectModal, setShowReconnectModal] = useState(false);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    setLoading(true);
    const rssUrl = "http://feeds.bbci.co.uk/news/world/africa/rss.xml";
    const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;
    
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      
      if (data.status === 'ok' && data.items && data.items.length > 0) {
        setNews(data.items.slice(0, 5));
        console.log("News successfully fetched via RSS-to-JSON");
      }
    } catch (error) {
      console.warn("RSS fetch failed, using fallback content:", error);
    } finally {
      setLoading(false);
    }
  };

  const fallbackNews = [
    { title: "UDOSA 04 Scholarship Fund Reaches Milestone", pubDate: new Date().toISOString(), link: "#", thumbnail: "https://images.unsplash.com/photo-1523240693567-579cde089127?q=80&w=200" },
    { title: "Global Reunion Planning Commences for 2026", pubDate: new Date().toISOString(), link: "#", thumbnail: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=200" },
    { title: "New Member Spotlight: Dr. Irene Ogbeide's Health Feature", pubDate: new Date().toISOString(), link: "#", thumbnail: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=200" },
  ];

  const displayNews = news.length > 0 ? news : (loading ? [] : fallbackNews);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
      {/* Hero Section */}
      <section className="relative h-[55vh] md:h-[80vh] rounded-3xl overflow-hidden shadow-2xl">
        <img 
          src="https://i.ibb.co/9HHvtSD0/IMG-20260325-152719.png" 
          alt="UDOSA 04 Legacy" 
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/80 to-black/40 flex flex-col justify-center md:justify-end p-6 md:p-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-center md:text-left mx-auto md:mx-0"
          >
            <h1 className="font-serif font-black text-white mb-4 leading-tight">
              <span className="text-2xl md:text-5xl block">UDOSA 04:</span>
              <span className="text-2xl md:text-5xl text-gold font-serif font-bold block">The Great Reconnection</span>
            </h1>
            <p className="text-xs md:text-xl text-white/90 font-serif italic mb-8 px-8 md:px-0 max-w-2xl mx-auto md:mx-0 leading-relaxed">
              Bridging decades with peace, unity, and a shared commitment to our legacy. Rediscovering our roots, building our future together.
            </p>
            <div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
              <button 
                onClick={() => setShowReconnectModal(true)}
                className="w-full md:w-auto bg-pink text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest text-xs md:text-sm hover:bg-white hover:text-pink transition-all shadow-lg transform hover:scale-105"
              >
                Reconnect With Us
              </button>
              <button 
                onClick={() => onViewChange('story')}
                className="w-full md:w-auto bg-transparent text-gold border-2 border-gold px-8 py-3 rounded-full font-bold uppercase tracking-widest text-xs md:text-sm hover:bg-gold hover:text-purple transition-all transform hover:scale-105"
              >
                Explore Our Story
              </button>
            </div>
          </motion.div>
        </div>

        {/* Reconnect Modal */}
        <AnimatePresence>
          {showReconnectModal && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-purple/80 backdrop-blur-sm"
              onClick={() => setShowReconnectModal(false)}
            >
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="max-w-md w-full bg-gradient-to-br from-pink to-purple p-8 rounded-[2rem] shadow-2xl text-center space-y-6 relative overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl" />
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-white">The Great Reconnection is brewing...</h3>
                <p className="text-white/90 font-serif italic">
                  Our global directory and networking portal is coming soon. Stay tuned!
                </p>
                <button 
                  onClick={() => setShowReconnectModal(false)}
                  className="bg-white text-purple px-8 py-2 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-gold transition-colors"
                >
                  Got it
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
        {/* Latest News */}
        <div className="lg:col-span-2 space-y-6 bg-white/50 rounded-3xl px-4 py-8 md:p-0 md:bg-transparent">
          <div className="flex items-center justify-between border-b-2 border-gold pb-3">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Newspaper className="text-purple w-6 h-6" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              </div>
              <h2 className="text-xl font-serif font-black text-purple uppercase tracking-widest">Latest News</h2>
            </div>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => fetchNews()}
                className="p-2 hover:bg-gold/10 rounded-full transition-colors text-purple"
                title="Refresh News"
              >
                <RotateCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              </button>
              <div className="flex items-center gap-2 bg-red-50 px-3 py-1 rounded-full border border-red-100">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                <span className="text-[10px] font-bold text-red-600 uppercase tracking-widest">Live News</span>
              </div>
            </div>
          </div>
          <div className="grid gap-4">
            {loading ? (
              [1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="bg-white p-4 rounded-2xl shadow-md animate-pulse flex gap-4">
                  <div className="w-16 h-16 bg-stone-200 rounded-xl shrink-0" />
                  <div className="flex-grow space-y-2">
                    <div className="h-4 bg-stone-200 rounded w-3/4" />
                    <div className="h-3 bg-stone-200 rounded w-1/2" />
                  </div>
                </div>
              ))
            ) : (
              displayNews.map((article, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-3 md:p-4 rounded-2xl shadow-sm border border-stone-100 hover:border-gold/50 flex gap-4 items-center group cursor-pointer hover:shadow-md transition-all"
                >
                  <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border-2 border-gold shadow-sm">
                    <img 
                      src={article.thumbnail || "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=200"} 
                      alt="News Thumbnail" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex-grow min-w-0">
                    <div className="flex justify-between items-start gap-2 mb-1">
                      <p className="text-[11px] text-pink font-bold uppercase tracking-widest truncate">
                        BBC Africa • {new Date(article.pubDate).toLocaleDateString()}
                      </p>
                    </div>
                    <h3 className="text-sm md:text-base font-serif font-bold text-purple leading-tight line-clamp-2 mb-2">
                      {article.title}
                    </h3>
                    <a 
                      href={article.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gold font-bold text-[10px] uppercase tracking-widest hover:text-pink transition-colors"
                    >
                      Read More <ChevronRight className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </div>

        {/* Project Progress */}
        <div className="space-y-6">
          <div className="flex items-center gap-4 border-b-2 border-gold pb-3">
            <CheckCircle2 className="text-purple w-6 h-6" />
            <h2 className="text-xl font-serif font-black text-purple uppercase tracking-widest">Project Progress</h2>
          </div>
          <div className="space-y-6">
            {PROJECT_PROGRESS.map((project) => (
              <div key={project.id} className="bg-purple text-white p-6 rounded-2xl shadow-xl space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="font-serif font-bold text-lg leading-tight">{project.name}</h3>
                  <span className="text-[10px] bg-gold text-purple px-2 py-1 rounded-full font-bold uppercase">{project.status}</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold text-gold/80 uppercase">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${project.progress}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-gold shadow-[0_0_10px_rgba(251,191,36,0.5)]"
                    />
                  </div>
                </div>
                <p className="text-xs text-white/70 italic">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Solidarity Hub ---
export const SolidarityHub = () => {
  const [activeAudio, setActiveAudio] = useState<number | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [password, setPassword] = useState("");
  const [liveStreamUrl, setLiveStreamUrl] = useState(() => localStorage.getItem('udosa04_live_url') || "");
  const [audioUrl, setAudioUrl] = useState(() => localStorage.getItem('udosa04_audio_url') || "");
  const [tempLiveUrl, setTempLiveUrl] = useState(liveStreamUrl);
  const [tempAudioUrl, setTempAudioUrl] = useState(audioUrl);

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "udosa04") {
      setIsAdmin(true);
      setPassword("");
    } else {
      alert("Incorrect Password");
    }
  };

  const handleUpdateLinks = () => {
    setLiveStreamUrl(tempLiveUrl);
    setAudioUrl(tempAudioUrl);
    localStorage.setItem('udosa04_live_url', tempLiveUrl);
    localStorage.setItem('udosa04_audio_url', tempAudioUrl);
    setShowAdminPanel(false);
    alert("Links updated successfully!");
  };

  // Helper to extract YouTube ID
  const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const youtubeId = getYouTubeId(liveStreamUrl);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16 relative">
      {/* Admin Toggle */}
      <button 
        onClick={() => setShowAdminPanel(true)}
        className="absolute top-4 right-4 p-2 text-purple/20 hover:text-purple transition-colors z-50"
        title="Admin Settings"
      >
        <Settings className="w-5 h-5" />
      </button>

      {/* Admin Panel Modal */}
      <AnimatePresence>
        {showAdminPanel && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-purple/80 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-md w-full bg-white p-8 rounded-[2rem] shadow-2xl space-y-6 relative"
            >
              <button 
                onClick={() => setShowAdminPanel(false)}
                className="absolute top-6 right-6 text-slate-400 hover:text-purple"
              >
                <X className="w-6 h-6" />
              </button>

              {!isAdmin ? (
                <form onSubmit={handleAdminLogin} className="space-y-4">
                  <h3 className="text-2xl font-serif font-bold text-purple">Admin Access</h3>
                  <p className="text-slate-500 text-sm">Enter password to manage links.</p>
                  <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Password"
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-purple outline-none"
                  />
                  <button type="submit" className="w-full bg-purple text-white py-3 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-pink transition-colors">
                    Login
                  </button>
                </form>
              ) : (
                <div className="space-y-6">
                  <h3 className="text-2xl font-serif font-bold text-purple">Link Controller</h3>
                  
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Live Stream (YouTube Link)</label>
                    <input 
                      type="text" 
                      value={tempLiveUrl}
                      onChange={(e) => setTempLiveUrl(e.target.value)}
                      placeholder="Paste YouTube Link"
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-purple outline-none text-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Audio URL (Anthem/Podcast)</label>
                    <input 
                      type="text" 
                      value={tempAudioUrl}
                      onChange={(e) => setTempAudioUrl(e.target.value)}
                      placeholder="Paste Audio File Link"
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-purple outline-none text-sm"
                    />
                  </div>

                  <div className="pt-4 flex gap-3">
                    <button 
                      onClick={handleUpdateLinks}
                      className="flex-grow bg-gold text-purple py-3 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-purple hover:text-white transition-all"
                    >
                      Update Links
                    </button>
                    <button 
                      onClick={() => setIsAdmin(false)}
                      className="px-4 py-3 border border-stone-200 rounded-xl text-slate-400 hover:text-red-500 transition-colors"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-serif font-black text-purple uppercase tracking-tighter">Solidarity Hub</h1>
        <p className="text-lg md:text-xl text-pink font-serif italic">Connecting hearts, voices, and memories.</p>
        <div className="w-24 h-1 bg-gold mx-auto" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Live Stream Player */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <Play className="text-purple w-6 h-6 fill-purple" />
            <h2 className="text-2xl font-serif font-bold text-purple uppercase tracking-widest">Live Stream</h2>
          </div>
          <div className="aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl relative group">
            {youtubeId ? (
              <iframe 
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
                title="Live Stream"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <>
                <img 
                  src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000" 
                  alt="Live Stream Placeholder" 
                  className="w-full h-full object-cover opacity-60"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center shadow-2xl">
                    <Play className="w-10 h-10 fill-purple text-purple ml-1" />
                  </div>
                  <p className="mt-6 font-serif font-bold text-lg uppercase tracking-widest">No Active Stream</p>
                  <p className="text-white/60 text-sm italic">Next event: 20th Anniversary Gala (Dec 2026)</p>
                </div>
              </>
            )}
            
            <div className={`absolute top-6 left-6 flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${youtubeId ? 'bg-red-600 animate-pulse' : 'bg-stone-600'}`}>
              <div className="w-2 h-2 bg-white rounded-full" />
              {youtubeId ? 'Live Now' : 'Offline'}
            </div>
          </div>
        </div>

        {/* Audio Library */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <Music className="text-purple w-6 h-6" />
            <h2 className="text-2xl font-serif font-bold text-purple uppercase tracking-widest">Audio Library</h2>
          </div>
          <div className="bg-white rounded-3xl shadow-xl border border-stone-100 overflow-hidden">
            <div className="p-8 bg-purple text-white">
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 bg-gold rounded-2xl flex items-center justify-center shadow-lg">
                  <Music className="w-12 h-12 text-purple" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold text-gold">Now Playing</h3>
                  <p className="text-white/60 italic">
                    {activeAudio ? AUDIO_LIBRARY.find(t => t.id === activeAudio)?.title : 'Select a track to begin listening'}
                  </p>
                </div>
              </div>
              {activeAudio && (
                <div className="mt-6">
                  <audio 
                    controls 
                    autoPlay 
                    className="w-full h-8 accent-gold"
                    src={activeAudio === 1 && audioUrl ? audioUrl : AUDIO_LIBRARY.find(t => t.id === activeAudio)?.url}
                  />
                </div>
              )}
            </div>
            <div className="divide-y divide-stone-100">
              {AUDIO_LIBRARY.map((track) => (
                <div 
                  key={track.id}
                  onClick={() => setActiveAudio(track.id)}
                  className={`p-6 flex items-center justify-between hover:bg-pink/5 cursor-pointer transition-colors ${activeAudio === track.id ? 'bg-pink/10' : ''}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${activeAudio === track.id ? 'bg-pink text-white' : 'bg-purple/10 text-purple'}`}>
                      {activeAudio === track.id ? <Play className="w-4 h-4 fill-white" /> : <Music className="w-4 h-4" />}
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-purple">{track.title}</h4>
                      <p className="text-xs text-slate-400 uppercase tracking-widest">{track.artist}</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-slate-400">{track.duration}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Alumni Directory ---
export const Directory = () => {
  const [notified, setNotified] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 min-h-[70vh] flex flex-col items-center justify-center space-y-12 bg-gradient-to-b from-purple/5 to-pink/5 rounded-[3rem]">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-serif font-black text-purple uppercase tracking-widest">Alumni Directory</h1>
        <div className="w-24 h-1 bg-gold mx-auto" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl w-full bg-purple/10 backdrop-blur-xl border border-white/20 p-12 rounded-[3rem] shadow-2xl text-center space-y-8 relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-pink/10 rounded-full -ml-16 -mt-16 blur-2xl" />
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gold/10 rounded-full -mr-16 -mb-16 blur-2xl" />

        <div className="relative z-10">
          <div className="w-20 h-20 bg-gold/20 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-gold/30">
            <ShieldCheck className="w-10 h-10 text-gold" />
          </div>

          <h2 className="text-3xl md:text-4xl font-serif font-bold bg-gradient-to-r from-purple to-pink bg-clip-text text-transparent mb-4">
            Securing the Network. Coming Soon.
          </h2>
          
          <p className="text-slate-600 font-serif italic text-lg leading-relaxed">
            "We are currently verifying alumni records to ensure a safe, private, and exclusive networking experience for the Set of 2004. Your privacy is our priority."
          </p>

          <div className="pt-8">
            {!notified ? (
              <button 
                onClick={() => setNotified(true)}
                className="bg-pink text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-purple transition-all shadow-lg hover:scale-105 active:scale-95"
              >
                Notify Me
              </button>
            ) : (
              <motion.p 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-purple font-bold italic"
              >
                Thank you for your interest!
              </motion.p>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// --- Business Marketplace ---
export const BusinessMarketplace = () => (
  <div className="max-w-7xl mx-auto px-4 py-12 min-h-[70vh] flex flex-col items-center justify-center space-y-12">
    <div className="text-center space-y-4">
      <h1 className="text-4xl md:text-6xl font-serif font-black text-purple uppercase tracking-widest">Business Marketplace</h1>
      <div className="w-24 h-1 bg-gold mx-auto" />
    </div>

    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-3xl w-full bg-white/40 backdrop-blur-2xl border border-white/40 p-12 rounded-[3rem] shadow-2xl text-center space-y-8 relative overflow-hidden"
    >
      {/* Watermark/Decorative */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none flex items-center justify-center">
        <img src={LOGO_URL} alt="" className="w-96 h-96 grayscale" referrerPolicy="no-referrer" />
      </div>

      <div className="relative z-10">
        <div className="relative w-24 h-24 mx-auto mb-8">
          <div className="w-24 h-24 bg-gold/20 rounded-3xl flex items-center justify-center border border-gold/30">
            <Briefcase className="w-12 h-12 text-gold" />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow-lg">
            <CheckCircle className="w-8 h-8 text-gold fill-gold/10" />
          </div>
        </div>

        <h2 className="text-3xl md:text-5xl font-serif font-bold bg-gradient-to-r from-purple to-pink bg-clip-text text-transparent mb-6">
          Launching Soon: The UDOSA 04 Business Hub.
        </h2>
        
        <p className="text-slate-600 font-serif italic text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          "We are building a premium platform to showcase our entrepreneurial strength and support our own global community."
        </p>

        <div className="bg-pink/5 border border-pink/10 p-6 rounded-2xl my-8">
          <p className="text-pink font-bold text-sm md:text-base tracking-wide">
            "Contact the Exco to include your business. A small verification token applies to ensure authenticity and premium placement."
          </p>
        </div>

        <div className="pt-4">
          <a 
            href="https://wa.me/2348000000000" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-pink text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-purple transition-all shadow-xl hover:scale-105 active:scale-95"
          >
            Contact Exco on WhatsApp
          </a>
        </div>
      </div>
    </motion.div>
  </div>
);

// --- Memorial Section ---
export const Memorial = () => {
  const [candleCount, setCandleCount] = useState(() => Number(localStorage.getItem('udosa04_candles') || 0));
  const [showTributeModal, setShowTributeModal] = useState(false);
  const [tributes, setTributes] = useState<any[]>(() => JSON.parse(localStorage.getItem('udosa04_tributes') || '[]'));
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isLighting, setIsLighting] = useState(false);

  const burialImages = [
    "https://i.ibb.co/dsXybKG4/IMG-20260323-WA0020.jpg",
    "https://i.ibb.co/5X5B0rhc/IMG-20260323-WA0018.jpg",
    "https://i.ibb.co/WvcD4D5C/IMG-20260323-WA0016.jpg",
    "https://i.ibb.co/GvbwNMbW/IMG-20260323-WA0015.jpg",
    "https://i.ibb.co/WN98sZcf/IMG-20260323-WA0012.jpg",
    "https://i.ibb.co/zH4x0JSd/IMG-20260323-WA0010.jpg",
    "https://i.ibb.co/CpzVJKsp/IMG-20260323-WA0009.jpg",
    "https://i.ibb.co/2Yj8H5B8/IMG-20260323-WA0006.jpg",
    "https://i.ibb.co/5W0cfthc/IMG-20260323-WA0004.jpg"
  ];

  const handleLightCandle = () => {
    setIsLighting(true);
    const newCount = candleCount + 1;
    setCandleCount(newCount);
    localStorage.setItem('udosa04_candles', String(newCount));
    
    setTimeout(() => {
      setIsLighting(false);
      setShowTributeModal(true);
    }, 1200);
  };

  const handleSubmitTribute = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) return;
    
    const newTribute = { name, message, date: new Date().toISOString() };
    const newTributes = [newTribute, ...tributes].slice(0, 10);
    setTributes(newTributes);
    localStorage.setItem('udosa04_tributes', JSON.stringify(newTributes));
    
    setName("");
    setMessage("");
    setShowTributeModal(false);
  };

  const recentTributes = tributes.slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-serif font-black text-purple uppercase tracking-widest">IN LOVING MEMORY</h1>
        <p className="text-lg md:text-xl text-pink font-serif italic max-w-3xl mx-auto">
          "Honoring the parents of Cynthia, Osayowanbo, Owen, Ehis, and Ero. Their legacy lives on through us."
        </p>
        <div className="w-24 h-1 bg-gold mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {burialImages.map((src, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col items-center space-y-6"
          >
            <div className="relative group w-full">
              <div className="absolute -inset-2 bg-gold/30 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative border-[12px] border-gold rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(212,175,55,0.3)] bg-white">
                <img 
                  src={src} 
                  alt={`Tribute ${i + 1}`} 
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <p className="text-pink font-bold text-xs uppercase tracking-widest italic">
              UDOSA 04 standing in honor.
            </p>
          </motion.div>
        ))}
      </div>

      <div className="flex flex-col items-center gap-8 pt-12">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
        
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="relative">
            <AnimatePresence>
              {isLighting && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0, y: 0 }}
                  animate={{ opacity: 1, scale: 1.5, y: -40 }}
                  exit={{ opacity: 0, scale: 2, y: -80 }}
                  className="absolute left-1/2 -translate-x-1/2 z-20"
                >
                  <Flame className="w-12 h-12 text-gold fill-gold drop-shadow-[0_0_15px_rgba(212,175,55,0.8)]" />
                </motion.div>
              )}
            </AnimatePresence>
            
            <button 
              onClick={handleLightCandle}
              disabled={isLighting}
              className="flex items-center gap-4 bg-gradient-to-r from-purple to-pink text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm shadow-[0_10px_30px_rgba(157,23,77,0.4)] hover:scale-105 transition-all active:scale-95 group disabled:opacity-50"
            >
              <Flame className="w-6 h-6 text-gold animate-pulse group-hover:scale-125 transition-transform" />
              Light a Candle
            </button>
          </div>

          <div className="bg-white/50 backdrop-blur-sm border border-gold/20 px-6 py-4 rounded-2xl flex flex-col items-center md:items-start">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Digital Counter</span>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-mono font-black text-purple">{candleCount}</span>
              <span className="text-sm font-serif text-pink italic">Candles Lit for our Loved Ones</span>
            </div>
          </div>
        </div>

        {/* Tributes Ticker */}
        {tributes.length > 0 && (
          <div className="w-full max-w-4xl bg-purple/5 py-4 overflow-hidden border-y border-gold/20 relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
            <motion.div 
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="flex gap-16 whitespace-nowrap"
            >
              {[...recentTributes, ...recentTributes].map((t, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-gold font-bold uppercase tracking-widest text-[10px]">{t.name}:</span>
                  <span className="text-purple font-serif italic text-sm">"{t.message}"</span>
                </div>
              ))}
            </motion.div>
          </div>
        )}

        <p className="text-slate-400 font-serif italic text-sm">"May their souls rest in perfect peace."</p>
      </div>

      {/* Tribute Modal */}
      <AnimatePresence>
        {showTributeModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-purple/80 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="max-w-md w-full bg-white/90 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-2xl space-y-6 relative overflow-hidden"
            >
              {/* Logo Watermark */}
              <img 
                src={LOGO_URL} 
                alt="Watermark" 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-[0.03] pointer-events-none"
              />

              <button 
                onClick={() => setShowTributeModal(false)}
                className="absolute top-6 right-6 text-slate-400 hover:text-purple z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="text-center space-y-2 relative z-10">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Flame className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-3xl font-serif font-bold text-purple uppercase tracking-tighter">Leave a Tribute</h3>
                <p className="text-pink text-sm font-serif italic">Share a word of comfort or memory.</p>
              </div>

              <form onSubmit={handleSubmitTribute} className="space-y-4 relative z-10">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-2">Your Name</label>
                  <input 
                    type="text" 
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-5 py-3 rounded-2xl border border-stone-200 focus:border-purple outline-none text-sm bg-white/50"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-2">Tribute Message</label>
                  <textarea 
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Rest in peace..."
                    rows={3}
                    className="w-full px-5 py-3 rounded-2xl border border-stone-200 focus:border-purple outline-none text-sm bg-white/50 resize-none"
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-purple text-white py-4 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-pink transition-all shadow-lg active:scale-95"
                >
                  Post Tribute
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Our Story Section ---
// --- Games Hub Section ---
export const GamesHub = () => {
  const [activeGame, setActiveGame] = useState<'hub' | 'snake'>('hub');

  if (activeGame === 'snake') {
    return <LegacySnake onBack={() => setActiveGame('hub')} />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-serif font-black text-purple uppercase tracking-widest">Games Hub</h1>
        <p className="text-lg md:text-xl text-pink font-serif italic">Relive the fun, build the legacy.</p>
        <div className="w-24 h-1 bg-gold mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Trivia Master Card */}
        <motion.div 
          whileHover={{ y: -10 }}
          className="bg-white/40 backdrop-blur-xl border border-white/40 rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden group opacity-80"
        >
          <div className="absolute top-0 right-0 p-4">
            <span className="bg-purple/10 text-purple text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Coming Soon</span>
          </div>
          <div className="w-16 h-16 bg-purple/10 rounded-2xl flex items-center justify-center mb-6">
            <Trophy className="w-8 h-8 text-purple" />
          </div>
          <h3 className="text-2xl font-serif font-bold text-purple mb-2">Trivia Master</h3>
          <p className="text-slate-500 font-serif italic text-sm mb-6">Test your knowledge of UDSS and the Class of 2004.</p>
          <button disabled className="w-full py-3 rounded-xl border-2 border-purple/20 text-purple/40 font-bold uppercase tracking-widest text-xs">
            Locked
          </button>
        </motion.div>

        {/* Legacy Snake Card */}
        <motion.div 
          whileHover={{ y: -10 }}
          onClick={() => setActiveGame('snake')}
          className="bg-gradient-to-br from-purple to-pink rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden group cursor-pointer"
        >
          <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:scale-110 transition-transform duration-700">
            <Gamepad2 className="w-48 h-48 text-white" />
          </div>
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
            <Gamepad2 className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-serif font-bold text-white mb-2">Legacy Snake</h3>
          <p className="text-white/80 font-serif italic text-sm mb-6">Grow the legacy as you collect 20-year badges.</p>
          <button className="w-full py-3 bg-gold text-purple rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-white transition-colors">
            Play Now
          </button>
        </motion.div>
      </div>
    </div>
  );
};

// --- Legacy Snake Game ---
const GRID_SIZE = 20;
const INITIAL_SPEED = 150;

export const LegacySnake = ({ onBack }: { onBack: () => void }) => {
  const [snake, setSnake] = useState([{ x: 10, y: 10 }, { x: 10, y: 11 }, { x: 10, y: 12 }]);
  const [food, setFood] = useState({ x: 5, y: 5 });
  const [direction, setDirection] = useState('UP');
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() => Number(localStorage.getItem('udosa04_snake_highscore') || 0));
  const [isPaused, setIsPaused] = useState(true);
  const [speed, setSpeed] = useState(INITIAL_SPEED);

  const gameLoop = useRef<NodeJS.Timeout | null>(null);

  const generateFood = useCallback(() => {
    let newFood;
    while (true) {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
      };
      // Check if food is on snake
      const onSnake = snake.some(segment => segment.x === newFood.x && segment.y === newFood.y);
      if (!onSnake) break;
    }
    setFood(newFood);
  }, [snake]);

  const moveSnake = useCallback(() => {
    if (isGameOver || isPaused) return;

    const head = { ...snake[0] };
    switch (direction) {
      case 'UP': head.y -= 1; break;
      case 'DOWN': head.y += 1; break;
      case 'LEFT': head.x -= 1; break;
      case 'RIGHT': head.x += 1; break;
    }

    // Collision detection (walls)
    if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
      handleGameOver();
      return;
    }

    // Collision detection (self)
    if (snake.some(segment => segment.x === head.x && segment.y === head.y)) {
      handleGameOver();
      return;
    }

    const newSnake = [head, ...snake];

    // Check if food eaten
    if (head.x === food.x && head.y === food.y) {
      const newScore = score + 10;
      setScore(newScore);
      if (newScore > highScore) {
        setHighScore(newScore);
        localStorage.setItem('udosa04_snake_highscore', String(newScore));
      }
      
      // Speed increase every 5 badges
      if (newScore % 50 === 0) {
        setSpeed(prev => Math.max(prev - 10, 60));
      }
      
      generateFood();
    } else {
      newSnake.pop();
    }

    setSnake(newSnake);
  }, [snake, direction, food, isGameOver, isPaused, score, highScore, generateFood]);

  const handleGameOver = () => {
    setIsGameOver(true);
    setIsPaused(true);
    if (gameLoop.current) clearInterval(gameLoop.current);
  };

  const resetGame = () => {
    setSnake([{ x: 10, y: 10 }, { x: 10, y: 11 }, { x: 10, y: 12 }]);
    setDirection('UP');
    setScore(0);
    setIsGameOver(false);
    setIsPaused(false);
    setSpeed(INITIAL_SPEED);
    generateFood();
  };

  useEffect(() => {
    if (!isPaused && !isGameOver) {
      gameLoop.current = setInterval(moveSnake, speed);
    } else {
      if (gameLoop.current) clearInterval(gameLoop.current);
    }
    return () => {
      if (gameLoop.current) clearInterval(gameLoop.current);
    };
  }, [moveSnake, isPaused, isGameOver, speed]);

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowUp': if (direction !== 'DOWN') setDirection('UP'); break;
        case 'ArrowDown': if (direction !== 'UP') setDirection('DOWN'); break;
        case 'ArrowLeft': if (direction !== 'RIGHT') setDirection('LEFT'); break;
        case 'ArrowRight': if (direction !== 'LEFT') setDirection('RIGHT'); break;
        case ' ': setIsPaused(prev => !prev); break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [direction]);

  const shareScore = () => {
    const text = `I just scored ${score} points in the UDOSA 04 Legacy Snake game! Can you beat my high score of ${highScore}? 🐍🏆 #UDOSA04 #20YearLegacy`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8 flex flex-col items-center">
      {/* Header */}
      <div className="w-full flex justify-between items-center">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-purple font-bold uppercase tracking-widest text-xs hover:text-pink transition-colors"
        >
          <ChevronLeft className="w-4 h-4" /> Back to Hub
        </button>
        <div className="flex gap-4">
          <div className="bg-purple text-white px-4 py-2 rounded-xl shadow-lg border border-gold/20">
            <p className="text-[8px] uppercase tracking-widest text-gold/60">Score</p>
            <p className="text-xl font-black">{score}</p>
          </div>
          <div className="bg-white border border-purple/10 px-4 py-2 rounded-xl shadow-lg">
            <p className="text-[8px] uppercase tracking-widest text-purple/40">High Score</p>
            <p className="text-xl font-black text-purple">{highScore}</p>
          </div>
        </div>
      </div>

      {/* Game Board */}
      <div className="relative bg-[#581c87] rounded-3xl p-2 shadow-[0_20px_60px_rgba(88,28,135,0.4)] border-4 border-gold/30 w-full aspect-square max-w-[500px] overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 grid grid-cols-20 grid-rows-20 opacity-5">
          {Array.from({ length: 400 }).map((_, i) => (
            <div key={i} className="border-[0.5px] border-white" />
          ))}
        </div>

        {/* Snake */}
        {snake.map((segment, i) => (
          <div 
            key={i}
            className={`absolute rounded-sm transition-all duration-150 ${i === 0 ? 'z-10' : 'z-0'}`}
            style={{
              width: `${100 / GRID_SIZE}%`,
              height: `${100 / GRID_SIZE}%`,
              left: `${(segment.x / GRID_SIZE) * 100}%`,
              top: `${(segment.y / GRID_SIZE) * 100}%`,
              backgroundColor: i === 0 ? 'transparent' : '#f472b6',
              boxShadow: i === 0 ? 'none' : '0 0 10px rgba(212,175,55,0.5)',
              border: i === 0 ? 'none' : '1px solid rgba(212,175,55,0.3)'
            }}
          >
            {i === 0 && (
              <img 
                src={LOGO_URL} 
                className="w-full h-full object-contain drop-shadow-[0_0_5px_rgba(212,175,55,0.8)]" 
                alt="Head"
                referrerPolicy="no-referrer"
              />
            )}
          </div>
        ))}

        {/* Food */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 1 }}
          className="absolute flex items-center justify-center"
          style={{
            width: `${100 / GRID_SIZE}%`,
            height: `${100 / GRID_SIZE}%`,
            left: `${(food.x / GRID_SIZE) * 100}%`,
            top: `${(food.y / GRID_SIZE) * 100}%`,
          }}
        >
          <div className="w-full h-full bg-gold rounded-full shadow-[0_0_15px_rgba(212,175,55,0.8)] flex items-center justify-center text-[8px] font-black text-purple">
            20
          </div>
        </motion.div>

        {/* Pause Overlay */}
        {isPaused && !isGameOver && (
          <div className="absolute inset-0 bg-purple/60 backdrop-blur-sm flex flex-col items-center justify-center z-20">
            <button 
              onClick={() => setIsPaused(false)}
              className="bg-gold text-purple px-8 py-3 rounded-full font-bold uppercase tracking-widest text-sm shadow-2xl hover:scale-110 transition-transform"
            >
              Start Game
            </button>
            <p className="mt-4 text-white/60 text-xs font-serif italic">Use Arrows or D-Pad to move</p>
          </div>
        )}

        {/* Game Over Overlay */}
        <AnimatePresence>
          {isGameOver && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 bg-purple/90 backdrop-blur-md flex flex-col items-center justify-center z-30 p-8 text-center"
            >
              <Trophy className="w-16 h-16 text-gold mb-4 animate-bounce" />
              <h2 className="text-4xl font-serif font-black text-white uppercase tracking-tighter mb-2">Game Over</h2>
              <p className="text-gold font-serif italic text-xl mb-6">Final Score: {score}</p>
              
              <div className="flex flex-col gap-3 w-full max-w-xs">
                <button 
                  onClick={resetGame}
                  className="w-full bg-pink text-white py-3 rounded-xl font-bold uppercase tracking-widest text-xs shadow-lg hover:bg-white hover:text-pink transition-all"
                >
                  Try Again
                </button>
                <button 
                  onClick={shareScore}
                  className="w-full bg-white text-purple py-3 rounded-xl font-bold uppercase tracking-widest text-xs shadow-lg flex items-center justify-center gap-2 hover:bg-gold transition-all"
                >
                  <Share2 className="w-4 h-4" /> Brag to the Group
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Controls */}
      <div className="grid grid-cols-3 gap-4 md:hidden">
        <div />
        <button 
          onClick={() => direction !== 'DOWN' && setDirection('UP')}
          className="w-16 h-16 bg-purple/10 rounded-2xl flex items-center justify-center text-purple active:bg-purple active:text-white transition-colors border border-purple/20"
        >
          <ChevronUp className="w-8 h-8" />
        </button>
        <div />
        <button 
          onClick={() => direction !== 'RIGHT' && setDirection('LEFT')}
          className="w-16 h-16 bg-purple/10 rounded-2xl flex items-center justify-center text-purple active:bg-purple active:text-white transition-colors border border-purple/20"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        <button 
          onClick={() => setIsPaused(prev => !prev)}
          className="w-16 h-16 bg-gold/20 rounded-2xl flex items-center justify-center text-purple active:bg-gold active:text-purple transition-colors border border-gold/30"
        >
          {isPaused ? <Play className="w-6 h-6 fill-purple" /> : <div className="w-6 h-6 border-x-4 border-purple" />}
        </button>
        <button 
          onClick={() => direction !== 'LEFT' && setDirection('RIGHT')}
          className="w-16 h-16 bg-purple/10 rounded-2xl flex items-center justify-center text-purple active:bg-purple active:text-white transition-colors border border-purple/20"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
        <div />
        <button 
          onClick={() => direction !== 'UP' && setDirection('DOWN')}
          className="w-16 h-16 bg-purple/10 rounded-2xl flex items-center justify-center text-purple active:bg-purple active:text-white transition-colors border border-purple/20"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
        <div />
      </div>

      <p className="hidden md:block text-slate-400 text-xs font-serif italic">
        Tip: Use Arrow keys to move and Space to pause.
      </p>
    </div>
  );
};

export const OurStory = () => (
  <div className="min-h-screen bg-purple text-white overflow-hidden pb-24">
    {/* Parallax Hero */}
    <section className="relative h-[70vh] flex items-center justify-center text-center px-4">
      <div 
        className="absolute inset-0 z-0 opacity-40 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1920")' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-purple/20 via-purple/60 to-purple z-1" />
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 space-y-4"
      >
        <h1 className="text-4xl md:text-7xl font-serif font-black uppercase tracking-tighter leading-none">
          The Hustle, <br />
          <span className="text-gold">The Hurdles,</span> <br />
          The Triumph
        </h1>
        <div className="w-24 h-1 bg-pink mx-auto" />
      </motion.div>
    </section>

    {/* Story Content */}
    <div className="max-w-4xl mx-auto px-6 py-24 space-y-32">
      {/* The Beginning */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-gold italic">The Beginning</h2>
        <p className="text-lg md:text-2xl font-serif leading-relaxed text-white/80 italic">
          "In 2004, we walked out of the UDSS gates with dreams as big as the Benin sky. We were young, fueled by innocence and the 'Knowledge for Service' mantra. But the world outside those walls had its own lessons to teach."
        </p>
      </motion.section>

      {/* The Hurdles */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-6 text-right"
      >
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-pink italic">The Hurdles</h2>
        <p className="text-lg md:text-2xl font-serif leading-relaxed text-white/80 italic">
          "The years that followed were the 'Hustle' years. We faced the grinding pressure of universities, the cold silence of the job market, and the heavy weight of expectations. We felt the sting of failure, the heartbreak of loss, and the silent storms of life that no textbook prepared us for."
        </p>
      </motion.section>

      {/* The Resilience */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-gold italic">The Resilience</h2>
        <p className="text-lg md:text-2xl font-serif leading-relaxed text-white/80 italic">
          "But look at us now. Every hurdle was a stepping stone. Every challenge was the fire that forged our character. We didn't just survive those storms; we learned to navigate them together. Today, we are doctors, engineers, parents, and leaders—not in spite of our struggles, but because of them."
        </p>
      </motion.section>

      {/* The Reunion */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center space-y-8 py-12 border-y border-white/10"
      >
        <h2 className="text-4xl md:text-6xl font-serif font-black text-white uppercase tracking-widest">The Reunion</h2>
        <p className="text-xl md:text-3xl font-serif leading-relaxed text-gold italic">
          "This is more than a reunion; it is a homecoming for our souls. We are the '04 Set—scarred by our challenges, but shining with the light of our shared victory."
        </p>
        <div className="pt-8">
          <div className="flex justify-center gap-4">
            <div className="w-2 h-2 rounded-full bg-pink animate-pulse" />
            <div className="w-2 h-2 rounded-full bg-gold animate-pulse delay-75" />
            <div className="w-2 h-2 rounded-full bg-pink animate-pulse delay-150" />
          </div>
        </div>
      </motion.section>
    </div>
  </div>
);
