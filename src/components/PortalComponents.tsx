import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AdComponent } from './AdComponent';
import { UDOSARacer } from './UDOSARacer';
import { TruthOrDare } from './TruthOrDare';
import { WhatsAppGateway } from './WhatsAppGateway';
import { TriviaMaster } from './TriviaMaster';
import { WallBreaker } from './WallBreaker';
import { Game2048 } from './Game2048';
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
  Share2,
  Puzzle,
  RotateCcw,
  Car,
  MessageCircle
} from 'lucide-react';
import { 
  LATEST_NEWS, 
  PROJECT_PROGRESS, 
  ALUMNI_DIRECTORY, 
  BUSINESS_MARKETPLACE, 
  AUDIO_LIBRARY,
  LOGO_URL,
  GALLERY_PHOTOS
} from '../constants';

// --- 3D Animated Yearbook Component ---
const YearbookAnimation = () => {
  const pages = [
    {
      type: 'cover',
      content: (
        <div className="page-content cover-content h-full flex flex-col items-center justify-center p-8 text-center">
          <img src="https://i.ibb.co/DHC0kvzR/1000773566-removebg-preview-1.png" alt="Logo" className="h-24 md:h-32 mb-6 object-contain drop-shadow-2xl" />
          <h2 className="text-4xl md:text-5xl font-serif font-black text-gold tracking-tighter leading-none mb-2">UDOSA 04</h2>
          <div className="w-16 h-1 bg-gold/50 my-4" />
          <p className="text-sm md:text-lg text-gold font-serif uppercase tracking-[0.3em] leading-tight font-bold">
            20th Anniversary Yearbook
          </p>
        </div>
      )
    },
    {
      title: "Chairman's Address",
      image: "https://i.ibb.co/JwwLbzy4/IMG-20250204-WA0000.jpg",
      text: "A message of legacy and excellence from our Chairman."
    },
    {
      title: "The Art of Karate",
      image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&q=80&w=1200",
      text: "Ehima Oziegbe on the discipline and benefits of Karate."
    },
    {
      title: "Solidarity",
      image: "https://i.ibb.co/dsXybKG4/IMG-20260323-WA0020.jpg",
      text: "Standing together as one family, through every season."
    },
    {
      title: "Memorial",
      image: "https://i.ibb.co/5X5B0rhc/IMG-20260323-WA0018.jpg",
      text: "Lighting a candle for those who live forever in our hearts."
    }
  ];

  return (
    <div className="book-container">
      <div className="book">
        <div className="book-spine"></div>
        <div className="book-shadow"></div>
        
        {/* Stack of static pages for depth */}
        <div className="pages">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="page-static"></div>
          ))}
        </div>

        {/* Flipping Pages with Bending Effect */}
        {pages.map((page, pageIdx) => (
          <div key={pageIdx} className={`flips flip-page-${pageIdx + 1}`}>
            <div className="flip flip1">
              <div className="flip flip2">
                <div className="flip flip3">
                  <div className="flip flip4">
                    <div className="flip flip5">
                      <div className="flip flip6">
                        <div className="flip flip7">
                          {page.type === 'cover' ? (
                            page.content
                          ) : (
                            <div className="page-content relative">
                              <img src={page.image} alt={page.title} className="page-image" referrerPolicy="no-referrer" />
                              <div className="page-overlay"></div>
                              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-purple/90 to-transparent text-white">
                                <h3 className="text-xl font-serif font-bold text-gold">{page.title}</h3>
                                <p className="text-[10px] uppercase tracking-widest opacity-80 mt-1">{page.text}</p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Home Section ---
export const Home = ({ onViewChange }: { onViewChange: (view: any, page?: number) => void }) => {
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

      {/* Yearbook CTA Section */}
      <section className="bg-white/40 backdrop-blur-md rounded-[2.5rem] p-8 md:p-12 border border-white/40 shadow-xl overflow-hidden relative group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full -mr-32 -mt-32 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink/5 rounded-full -ml-32 -mb-32 blur-3xl" />
        
        <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
          {/* 3D Animated Book */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <YearbookAnimation />
          </div>

          {/* Content */}
          <div className="w-full lg:w-2/3 text-center lg:text-left space-y-6">
            <div className="space-y-2">
              <p className="text-gold font-serif font-bold uppercase tracking-[0.3em] text-xs md:text-sm">Relive the Legacy</p>
              <h2 className="text-xl md:text-4xl font-serif font-black text-purple leading-tight">
                UDOSA 04: The 20th Anniversary Yearbook
              </h2>
            </div>
            <p className="text-sm md:text-lg text-slate-600 font-serif italic leading-relaxed max-w-2xl">
              "30 pages of memories, milestones, and the enduring spirit of the Class of 2004. From the familiar corridors of UDSS to our global impact today—this is our story."
            </p>
            
            <div className="pt-4">
              <motion.button 
                onClick={() => onViewChange('ebook')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative overflow-hidden bg-gold text-purple px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs md:text-sm shadow-[0_10px_30px_rgba(212,175,55,0.4)] group"
              >
                {/* Shimmer effect */}
                <motion.div 
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                />
                <span className="relative z-10">Open the Yearbook</span>
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      <AdComponent />

      <div className="space-y-16">
        {/* Latest News */}
        <div className="space-y-6 bg-white/40 backdrop-blur-md rounded-[2.5rem] p-8 md:p-12 border border-white/40 shadow-xl">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading ? (
              [1, 2, 3].map((i) => (
                <div key={i} className="bg-white p-4 rounded-2xl shadow-md animate-pulse flex gap-4">
                  <div className="w-16 h-16 bg-stone-200 rounded-xl shrink-0" />
                  <div className="flex-grow space-y-2">
                    <div className="h-4 bg-stone-200 rounded w-3/4" />
                    <div className="h-3 bg-stone-200 rounded w-1/2" />
                  </div>
                </div>
              ))
            ) : (
              displayNews.slice(0, 3).map((article, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-4 rounded-2xl shadow-sm border border-stone-100 hover:border-gold/50 flex flex-col gap-4 group cursor-pointer hover:shadow-md transition-all"
                >
                  <div className="w-full h-32 rounded-xl overflow-hidden shrink-0 border-2 border-gold shadow-sm">
                    <img 
                      src={article.thumbnail || "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=400"} 
                      alt="News Thumbnail" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex-grow min-w-0">
                    <p className="text-[10px] text-pink font-bold uppercase tracking-widest mb-1">
                      {new Date(article.pubDate).toLocaleDateString()}
                    </p>
                    <h3 className="text-sm font-serif font-bold text-purple leading-tight line-clamp-2 mb-3">
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

        {/* UDOSA 04 BY THE NUMBERS */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-xl md:text-3xl font-serif font-black text-purple uppercase tracking-widest">UDOSA 04 By The Numbers</h2>
            <div className="w-12 h-1 bg-gold mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { val: "22+", label: "Years of Legacy", sub: "Since 2004" },
              { val: "1", label: "Global Family", sub: "Members in 15+ Countries" },
              { val: "250+", label: "Legends", sub: "Our total batch strength" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center space-y-4"
              >
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-gold flex flex-col items-center justify-center bg-white shadow-xl relative group overflow-hidden">
                  <div className="absolute inset-0 bg-gold/5 group-hover:bg-gold/10 transition-colors" />
                  <span className="text-3xl md:text-4xl font-serif font-black text-gold relative z-10">{stat.val}</span>
                </div>
                <div className="space-y-1">
                  <p className="text-purple font-serif font-bold text-lg">{stat.label}</p>
                  <p className="text-slate-500 text-xs uppercase tracking-widest font-bold">{stat.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* THE LEGENDS OF '04 */}
        <section className="space-y-8 overflow-hidden">
          <div className="text-center space-y-2">
            <h2 className="text-lg md:text-3xl font-serif font-black text-gold uppercase tracking-widest">The Legends of '04</h2>
            <div className="w-12 h-1 bg-gold mx-auto" />
          </div>
          
          <div className="space-y-6">
            {/* Row 1: Left to Right */}
            <div className="flex overflow-hidden">
              <motion.div 
                animate={{ x: [0, -2000] }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="flex gap-4 md:gap-8 pr-4 md:pr-8"
              >
                {[...GALLERY_PHOTOS, ...GALLERY_PHOTOS].map((photo, i) => (
                  <motion.div
                    key={i}
                    onClick={() => onViewChange('ebook', 22)}
                    whileHover={{ scale: 1.1, rotateY: 10, z: 50 }}
                    className="relative w-28 h-36 md:w-40 md:h-52 rounded-xl border-2 border-gold/30 overflow-hidden cursor-pointer shadow-xl transition-all hover:border-gold hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] shrink-0"
                    style={{ perspective: '1000px' }}
                  >
                    <img 
                      src={photo.src} 
                      alt={photo.name} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-3">
                      <p className="text-[8px] md:text-[10px] text-white font-bold uppercase tracking-widest leading-tight">{photo.name}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Row 2: Right to Left */}
            <div className="flex overflow-hidden">
              <motion.div 
                animate={{ x: [-2000, 0] }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                className="flex gap-4 md:gap-8 pr-4 md:pr-8"
              >
                {[...GALLERY_PHOTOS.slice().reverse(), ...GALLERY_PHOTOS.slice().reverse()].map((photo, i) => (
                  <motion.div
                    key={i}
                    onClick={() => onViewChange('ebook', 22)}
                    whileHover={{ scale: 1.1, rotateY: -10, z: 50 }}
                    className="relative w-28 h-36 md:w-40 md:h-52 rounded-xl border-2 border-gold/30 overflow-hidden cursor-pointer shadow-xl transition-all hover:border-gold hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] shrink-0"
                    style={{ perspective: '1000px' }}
                  >
                    <img 
                      src={photo.src} 
                      alt={photo.name} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-3">
                      <p className="text-[8px] md:text-[10px] text-white font-bold uppercase tracking-widest leading-tight">{photo.name}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* JOIN THE INNER CIRCLE */}
        <section className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-purple" />
          {/* Sparkle effect overlay */}
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)', backgroundSize: '24px 24px' }} />
          <div className="absolute inset-0 bg-gradient-to-r from-purple via-transparent to-purple opacity-60" />
          
          <div className="relative z-10 px-8 py-12 md:py-20 text-center space-y-8">
            <div className="max-w-3xl mx-auto space-y-4">
              <h2 className="text-2xl md:text-5xl font-serif font-black text-gold leading-tight">Join The Inner Circle</h2>
              <p className="text-white/80 font-serif italic text-sm md:text-xl leading-relaxed">
                Are you in the loop? Join the official UDOSA 04 WhatsApp Community to stay connected in real-time.
              </p>
            </div>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-pink text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs md:text-sm shadow-[0_10px_30px_rgba(219,39,119,0.4)] hover:bg-white hover:text-pink transition-all"
            >
              Join WhatsApp Group
            </motion.button>
          </div>
        </section>
      </div>
    </div>
  );
};

// --- Solidarity Hub ---
export const SolidarityHub = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [password, setPassword] = useState("");
  
  // Dynamic State from LocalStorage
  const [liveStreamUrl, setLiveStreamUrl] = useState(() => localStorage.getItem('udosa04_live_url') || "");
  const [audioUrl, setAudioUrl] = useState(() => localStorage.getItem('udosa04_audio_url') || "");
  const [audioTitle, setAudioTitle] = useState(() => localStorage.getItem('udosa04_audio_title') || "UDSS School Anthem");
  const [audioArtist, setAudioArtist] = useState(() => localStorage.getItem('udosa04_audio_artist') || "Class of 2004");

  // Temp State for Admin Inputs
  const [tempLiveUrl, setTempLiveUrl] = useState(liveStreamUrl);
  const [tempAudioUrl, setTempAudioUrl] = useState(audioUrl);
  const [tempAudioTitle, setTempAudioTitle] = useState(audioTitle);
  const [tempAudioArtist, setTempAudioArtist] = useState(audioArtist);
  
  const [showToast, setShowToast] = useState(false);
  const [testVideoId, setTestVideoId] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

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
    setAudioTitle(tempAudioTitle);
    setAudioArtist(tempAudioArtist);
    
    localStorage.setItem('udosa04_live_url', tempLiveUrl);
    localStorage.setItem('udosa04_audio_url', tempAudioUrl);
    localStorage.setItem('udosa04_audio_title', tempAudioTitle);
    localStorage.setItem('udosa04_audio_artist', tempAudioArtist);
    
    setShowAdminPanel(false);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  // Smart URL Parser
  const getYouTubeId = (url: string) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const handleTestLink = () => {
    const id = getYouTubeId(tempLiveUrl);
    if (id) {
      setTestVideoId(id);
    } else {
      alert("Invalid YouTube URL. Please check the link.");
      setTestVideoId(null);
    }
  };

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
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

      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-[200] bg-green-500 text-white px-8 py-3 rounded-full font-bold shadow-2xl flex items-center gap-3"
          >
            <CheckCircle className="w-5 h-5" />
            <span>Stream Live!</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Admin Panel Modal */}
      <AnimatePresence>
        {showAdminPanel && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-purple/80 backdrop-blur-sm"
            onClick={() => setShowAdminPanel(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-lg w-full bg-white p-8 rounded-[2.5rem] shadow-2xl space-y-6 relative max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
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
                    className="w-full px-5 py-4 rounded-2xl border border-stone-200 focus:border-purple outline-none text-lg"
                  />
                  <button type="submit" className="w-full bg-purple text-white py-4 rounded-2xl font-bold uppercase tracking-widest text-sm hover:bg-pink transition-colors">
                    Login
                  </button>
                </form>
              ) : (
                <div className="space-y-8">
                  <h3 className="text-2xl font-serif font-bold text-purple border-b border-gold/20 pb-2">Solidarity Controller</h3>
                  
                  {/* Video Section */}
                  <div className="space-y-4">
                    <h4 className="text-pink font-bold text-xs uppercase tracking-[0.2em]">Video Section</h4>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Live Stream (YouTube Link)</label>
                      <div className="flex gap-2">
                        <input 
                          type="text" 
                          value={tempLiveUrl}
                          onChange={(e) => setTempLiveUrl(e.target.value)}
                          placeholder="Paste YouTube Link"
                          className="flex-grow px-4 py-4 rounded-xl border border-stone-200 focus:border-purple outline-none text-base"
                        />
                        <button 
                          onClick={handleTestLink}
                          className="bg-purple/10 text-purple px-6 py-4 rounded-xl font-bold text-xs hover:bg-purple/20 transition-colors"
                        >
                          Test
                        </button>
                      </div>
                      {testVideoId && (
                        <div className="mt-2 aspect-video rounded-2xl overflow-hidden border-2 border-green-500">
                          <iframe 
                            className="w-full h-full"
                            src={`https://www.youtube.com/embed/${testVideoId}`}
                            title="Test Preview"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Audio Section */}
                  <div className="space-y-4">
                    <h4 className="text-pink font-bold text-xs uppercase tracking-[0.2em]">Audio Section</h4>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Audio File URL (MP3/Link)</label>
                        <input 
                          type="text" 
                          value={tempAudioUrl}
                          onChange={(e) => setTempAudioUrl(e.target.value)}
                          placeholder="Paste Audio URL"
                          className="w-full px-4 py-4 rounded-xl border border-stone-200 focus:border-purple outline-none text-base"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Song Title</label>
                          <input 
                            type="text" 
                            value={tempAudioTitle}
                            onChange={(e) => setTempAudioTitle(e.target.value)}
                            placeholder="e.g. School Anthem"
                            className="w-full px-4 py-4 rounded-xl border border-stone-200 focus:border-purple outline-none text-base"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Artist/Source</label>
                          <input 
                            type="text" 
                            value={tempAudioArtist}
                            onChange={(e) => setTempAudioArtist(e.target.value)}
                            placeholder="e.g. Class of 2004"
                            className="w-full px-4 py-4 rounded-xl border border-stone-200 focus:border-purple outline-none text-base"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 flex gap-3">
                    <button 
                      onClick={handleUpdateLinks}
                      className="flex-grow bg-gold text-purple py-4 rounded-2xl font-bold uppercase tracking-widest text-sm hover:bg-purple hover:text-white transition-all shadow-lg"
                    >
                      Save & Update Portal
                    </button>
                    <button 
                      onClick={() => setIsAdmin(false)}
                      className="px-6 py-4 border border-stone-200 rounded-2xl text-slate-400 hover:text-red-500 transition-colors"
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
          <div className="w-full aspect-video bg-black rounded-[2rem] overflow-hidden shadow-2xl relative group border-4 border-purple/10">
            {youtubeId ? (
              <iframe 
                key={liveStreamUrl}
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
                title="Live Stream"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <div className="w-full h-full relative">
                <img 
                  src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000" 
                  alt="Live Stream Placeholder" 
                  className="w-full h-full object-cover opacity-40 grayscale"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center">
                  <div className="w-24 h-24 bg-gold/20 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl border-2 border-gold/50 mb-6">
                    <Play className="w-12 h-12 fill-gold text-gold ml-1" />
                  </div>
                  <h3 className="font-serif font-black text-2xl uppercase tracking-widest text-gold">No Active Stream</h3>
                  <p className="text-white/60 text-sm italic mt-2 max-w-xs">The admin has not started a live broadcast yet. Check back during scheduled events!</p>
                </div>
              </div>
            )}
            
            <div className={`absolute top-6 left-6 flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg z-10 ${youtubeId ? 'bg-red-600 text-white animate-pulse' : 'bg-stone-800 text-white/50'}`}>
              <div className={`w-2 h-2 rounded-full ${youtubeId ? 'bg-white' : 'bg-white/20'}`} />
              {youtubeId ? 'Live Now' : 'Offline'}
            </div>
          </div>
        </div>

        <AdComponent />

        {/* Audio Library */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <Music className="text-purple w-6 h-6" />
            <h2 className="text-2xl font-serif font-bold text-purple uppercase tracking-widest">Solidarity Audio</h2>
          </div>
          <div className="bg-white rounded-[2.5rem] shadow-2xl border border-stone-100 overflow-hidden">
            <div className="p-8 md:p-12 bg-gradient-to-br from-purple via-purple-900 to-purple-950 text-white relative overflow-hidden">
              {/* Decorative Background Record */}
              <div className={`absolute -right-12 -top-12 w-48 h-48 border-[12px] border-white/5 rounded-full ${isPlaying ? 'animate-[spin_4s_linear_infinite]' : ''}`} />
              
              <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                {/* Record Spinner */}
                <div className="relative shrink-0">
                  <motion.div 
                    animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
                    transition={isPlaying ? { repeat: Infinity, duration: 4, ease: "linear" } : { duration: 0.5 }}
                    className="w-32 h-32 md:w-40 md:h-40 bg-black rounded-full border-4 border-gold shadow-2xl flex items-center justify-center relative overflow-hidden"
                  >
                    {/* Vinyl Grooves */}
                    <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'repeating-radial-gradient(circle, transparent, transparent 2px, #333 3px, #333 4px)' }} />
                    <div className="w-12 h-12 bg-gold rounded-full border-4 border-purple flex items-center justify-center z-10">
                      <div className="w-2 h-2 bg-purple rounded-full" />
                    </div>
                  </motion.div>
                  {/* Needle */}
                  <div className={`absolute -top-4 -right-4 w-16 h-16 transition-transform duration-500 origin-top-right ${isPlaying ? 'rotate-12' : 'rotate-0'}`}>
                    <div className="w-1 h-20 bg-stone-400 rounded-full transform -rotate-45 shadow-lg" />
                  </div>
                </div>

                <div className="text-center md:text-left space-y-4 flex-grow">
                  <div className="space-y-1">
                    <p className="text-gold font-serif font-bold uppercase tracking-[0.3em] text-xs">Now Playing</p>
                    <h3 className="text-2xl md:text-4xl font-serif font-black text-white leading-tight">
                      {audioTitle}
                    </h3>
                    <p className="text-gold/80 font-serif italic text-lg">{audioArtist}</p>
                  </div>
                  
                  <div className="flex items-center justify-center md:justify-start gap-6">
                    <button 
                      onClick={toggleAudio}
                      className="w-16 h-16 bg-gold text-purple rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform active:scale-95"
                    >
                      {isPlaying ? <X className="w-8 h-8" /> : <Play className="w-8 h-8 fill-purple ml-1" />}
                    </button>
                    <div className="flex-grow max-w-xs hidden md:block">
                      <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                        <motion.div 
                          animate={isPlaying ? { width: '100%' } : { width: '0%' }}
                          transition={isPlaying ? { duration: 180, ease: "linear" } : { duration: 0 }}
                          className="h-full bg-gold"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hidden Native Audio Element */}
              <audio 
                ref={audioRef}
                src={audioUrl}
                onEnded={() => setIsPlaying(false)}
                className="hidden"
              />
            </div>

            {/* Track Info List (Single Dynamic Item) */}
            <div className="p-6 bg-stone-50 border-t border-stone-100">
              <div className="flex items-center justify-between p-4 rounded-2xl bg-white shadow-sm border border-gold/20">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${isPlaying ? 'bg-pink text-white animate-pulse' : 'bg-purple/10 text-purple'}`}>
                    {isPlaying ? <div className="flex gap-0.5 items-end h-4"><div className="w-1 bg-white animate-[bounce_0.6s_infinite]" /><div className="w-1 bg-white animate-[bounce_0.8s_infinite]" /><div className="w-1 bg-white animate-[bounce_0.7s_infinite]" /></div> : <Music className="w-5 h-5" />}
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-purple text-lg">{audioTitle}</h4>
                    <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">{audioArtist}</p>
                  </div>
                </div>
                <button 
                  onClick={toggleAudio}
                  className="text-gold hover:text-pink transition-colors"
                >
                  {isPlaying ? 'PAUSE' : 'PLAY'}
                </button>
              </div>
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

// --- Leadership Directory (EXCO) ---
export const LeadershipDirectory = () => {
  const EXCO_MEMBERS = [
    { 
      name: "OWEN OJO", 
      role: "President", 
      image: "https://i.ibb.co/JwwLbzy4/IMG-20250204-WA0000.jpg",
      level: "president"
    },
    { 
      name: "OSARIEMWEN AGBONWANEGBE", 
      role: "Vice President", 
      image: "https://i.ibb.co/9m7JjMsH/toige-37.jpg",
      level: "vp"
    },
    { 
      name: "CYNTHIA AZOR", 
      role: "PRO (Diaspora)", 
      image: "https://i.ibb.co/whnmmhpF/Screenshot-20250208-100512-Facebook.png",
      level: "member"
    },
    { 
      name: "OCHUKO EBIKEBINA NEE AKPOBASA", 
      role: "PRO", 
      image: "https://i.ibb.co/v4vZ7hDF/IMG-20250321-WA0074.jpg",
      level: "member"
    },
    { 
      name: "OGHALE OVUAKPORIE-UVO", 
      role: "Financial Secretary", 
      image: "https://i.ibb.co/5d1VcQh/IMG-20250306-WA0054-2.jpg",
      level: "member"
    },
    { 
      name: "OSAS AGBONLAHOR", 
      role: "Wellness & Welfare Officer", 
      image: "https://i.ibb.co/QtzyXF9/701-C2184-7-B61-4-C1-F-8936-61-A51-BF08405.jpg",
      level: "member"
    },
    { 
      name: "OSARENOMA AIGBANGBEE", 
      role: "Supporting Member", 
      image: "https://i.ibb.co/GQ0cBV8N/1716787836207.jpg",
      level: "member"
    },
    { 
      name: "UZOMA EDOZIE", 
      role: "Secretary General", 
      image: "https://i.ibb.co/33NZJxN/IMG-20260328-WA0007.jpg",
      gender: "male",
      level: "member"
    },
    { 
      name: "CHUKUNEDUM RAPHAEL EWULUJE", 
      role: "Treasurer", 
      image: "https://i.ibb.co/V0DRQSkk/IMG-20260328-232151.jpg",
      gender: "male",
      level: "member",
      objectPosition: "object-center"
    },
    { 
      name: "ISOKEN AIGBOMIAN", 
      role: "Assistant Wellness Officer", 
      image: null,
      gender: "female",
      level: "member"
    },
  ];

  const president = EXCO_MEMBERS.find(m => m.level === "president");
  const vp = EXCO_MEMBERS.find(m => m.level === "vp");
  const members = EXCO_MEMBERS.filter(m => m.level === "member");

  const MemberCard = ({ member, size = "md" }: { member: any, size?: "lg" | "md" | "sm" }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={`relative group ${size === "lg" ? "max-w-md mx-auto" : size === "md" ? "max-w-sm mx-auto" : ""}`}
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-gold via-pink to-purple rounded-[3rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
      <div className="relative bg-white/40 backdrop-blur-xl p-8 rounded-[3rem] border-2 border-gold/30 shadow-2xl flex flex-col items-center text-center space-y-6">
        <div className={`${size === "lg" ? "w-48 h-48" : size === "md" ? "w-40 h-40" : "w-32 h-32"} rounded-full border-4 border-gold p-1.5 shadow-2xl overflow-hidden bg-purple/5`}>
          {member.image ? (
            <img 
              src={member.image} 
              alt={member.name} 
              className={`w-full h-full rounded-full object-cover ${member.objectPosition || 'object-top'}`}
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="w-full h-full rounded-full bg-purple/10 flex items-center justify-center">
              <Users className={`${size === "lg" ? "w-20 h-20" : "w-16 h-16"} text-purple/20`} />
            </div>
          )}
        </div>
        <div className="space-y-2">
          <h3 className={`${size === "lg" ? "text-3xl" : "text-xl"} font-serif font-black text-purple tracking-tight uppercase`}>{member.name}</h3>
          <p className="text-pink font-bold italic uppercase tracking-[0.1em] text-sm">{member.role}</p>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-20">
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-7xl font-serif font-black text-purple uppercase tracking-tighter">
          Meet the <span className="text-gold">EXCO</span>
        </h2>
        <p className="text-slate-500 max-w-2xl mx-auto font-serif italic text-lg">
          The dedicated leadership team steering the UDOSA 04 legacy forward.
        </p>
        <div className="w-32 h-1.5 bg-gold mx-auto rounded-full" />
      </div>

      {/* President Row */}
      {president && <MemberCard member={president} size="lg" />}

      {/* VP Row */}
      {vp && <MemberCard member={vp} size="md" />}

      {/* Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {members.map((member, i) => (
          <div key={i}>
            <MemberCard member={member} size="sm" />
          </div>
        ))}
      </div>

      {/* Footer Note */}
      <div className="text-center pt-12">
        <div className="inline-block p-8 bg-purple text-white rounded-[3rem] shadow-2xl border-2 border-gold/30 max-w-2xl">
          <p className="font-serif italic text-xl leading-relaxed">
            "Committed to service, unity, and the progress of every UDOSA 04 member."
          </p>
          <div className="mt-6 flex items-center justify-center gap-2 text-gold font-bold uppercase tracking-widest text-xs">
            <ShieldCheck className="w-5 h-5" />
            <span>Official UDOSA 04 Executive Committee</span>
          </div>
        </div>
      </div>
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
  const [activeGame, setActiveGame] = useState<'hub' | 'snake' | 'puzzle' | 'racer' | 'truthordare' | 'trivia' | 'wallbreaker' | '2048'>('hub');

  if (activeGame === 'snake') {
    return <LegacySnake onBack={() => setActiveGame('hub')} />;
  }

  if (activeGame === 'puzzle') {
    return <LegendPuzzle onBack={() => setActiveGame('hub')} />;
  }

  if (activeGame === 'racer') {
    return <UDOSARacer onBack={() => setActiveGame('hub')} />;
  }

  if (activeGame === 'truthordare') {
    return <TruthOrDare onBack={() => setActiveGame('hub')} />;
  }

  if (activeGame === 'trivia') {
    return <TriviaMaster onBack={() => setActiveGame('hub')} />;
  }

  if (activeGame === 'wallbreaker') {
    return <WallBreaker onBack={() => setActiveGame('hub')} />;
  }

  if (activeGame === '2048') {
    return <Game2048 onBack={() => setActiveGame('hub')} />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-serif font-black text-purple uppercase tracking-widest">Games Hub</h1>
        <p className="text-lg md:text-xl text-pink font-serif italic">Relive the fun, build the legacy.</p>
        <div className="w-24 h-1 bg-gold mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Trivia Master Card */}
        <motion.div 
          whileHover={{ y: -10 }}
          onClick={() => setActiveGame('trivia')}
          className="bg-gradient-to-br from-purple to-gold rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden group cursor-pointer"
        >
          <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:scale-110 transition-transform duration-700">
            <Trophy className="w-48 h-48 text-white" />
          </div>
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
            <Trophy className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-serif font-bold text-white mb-2">Trivia Master</h3>
          <p className="text-white/80 font-serif italic text-sm mb-6">Test your knowledge of UDSS and the Class of 2004.</p>
          <button className="w-full py-3 bg-white text-purple rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-gold transition-colors">
            Play Now
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

        {/* Legend Puzzle Card */}
        <motion.div 
          whileHover={{ y: -10 }}
          onClick={() => setActiveGame('puzzle')}
          className="bg-gradient-to-br from-gold to-purple rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden group cursor-pointer"
        >
          <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:scale-110 transition-transform duration-700">
            <Puzzle className="w-48 h-48 text-white" />
          </div>
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
            <Puzzle className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-serif font-bold text-white mb-2">Legend Puzzle</h3>
          <p className="text-white/80 font-serif italic text-sm mb-6">Reconnect the legends of '04 in this sliding challenge.</p>
          <button className="w-full py-3 bg-pink text-white rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-pink transition-colors">
            Play Now
          </button>
        </motion.div>

        {/* UDOSA Racer Card */}
        <motion.div 
          whileHover={{ y: -10 }}
          onClick={() => setActiveGame('racer')}
          className="bg-gradient-to-br from-purple via-[#3b0764] to-gold rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden group cursor-pointer"
        >
          <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:scale-110 transition-transform duration-700">
            <Car className="w-48 h-48 text-white" />
          </div>
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
            <Car className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-serif font-bold text-white mb-2">UDOSA Racer</h3>
          <p className="text-white/80 font-serif italic text-sm mb-6">Conquer the hurdles on the great UDOSA 04 Highway.</p>
          <button className="w-full py-3 bg-white text-purple rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-gold transition-colors">
            Play Now
          </button>
        </motion.div>

        {/* Wall Breaker Card */}
        <motion.div 
          whileHover={{ y: -10 }}
          onClick={() => setActiveGame('wallbreaker')}
          className="bg-gradient-to-br from-pink to-purple rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden group cursor-pointer"
        >
          <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:scale-110 transition-transform duration-700">
            <ShieldCheck className="w-48 h-48 text-white" />
          </div>
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
            <ShieldCheck className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-serif font-bold text-white mb-2">Wall Breaker</h3>
          <p className="text-white/80 font-serif italic text-sm mb-6">Clear the hurdles of life in this brick-breaking classic.</p>
          <button className="w-full py-3 bg-gold text-purple rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-white transition-colors">
            Play Now
          </button>
        </motion.div>

        {/* 2048 Card */}
        <motion.div 
          whileHover={{ y: -10 }}
          onClick={() => setActiveGame('2048')}
          className="bg-gradient-to-br from-gold via-pink to-purple rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden group cursor-pointer"
        >
          <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:scale-110 transition-transform duration-700">
            <Trophy className="w-48 h-48 text-white" />
          </div>
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
            <Trophy className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-serif font-bold text-white mb-2">2048: Grad Rank</h3>
          <p className="text-white/80 font-serif italic text-sm mb-6">Merge your way to the top of the graduation rank.</p>
          <button className="w-full py-3 bg-white text-purple rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-gold transition-colors">
            Play Now
          </button>
        </motion.div>

        {/* Truth or Dare Card (Game 7) */}
        <motion.div 
          whileHover={{ y: -10 }}
          onClick={() => setActiveGame('truthordare')}
          className="bg-gradient-to-br from-purple via-pink to-gold rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden group cursor-pointer"
        >
          <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:scale-110 transition-transform duration-700">
            <MessageCircle className="w-48 h-48 text-white" />
          </div>
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-serif font-bold text-white mb-2">Truth or Dare</h3>
          <p className="text-white/80 font-serif italic text-sm mb-6">The Social Finale: Relive memories and challenge friends.</p>
          <button className="w-full py-3 bg-white text-pink rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-gold hover:text-purple transition-colors">
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
  const [hasAnnounced, setHasAnnounced] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

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
      {!hasAnnounced && (
        <div className="fixed inset-0 z-[100] bg-purple/95 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="bg-white rounded-[2.5rem] p-8 max-w-sm w-full text-center shadow-2xl border-4 border-gold">
            <h2 className="text-3xl font-serif font-black text-purple uppercase tracking-tighter mb-2">Legacy Snake</h2>
            <p className="text-pink font-serif italic mb-8">Grow the legacy as you collect 20-year badges.</p>
            <WhatsAppGateway 
              gameName="Legacy Snake" 
              type="pre" 
              onComplete={() => setHasAnnounced(true)} 
            />
          </div>
        </div>
      )}
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
          {isGameOver && !hasSubmitted && (
            <WhatsAppGateway 
              gameName="Legacy Snake" 
              score={`${score} Years of Growth`} 
              type="post" 
              onComplete={() => setHasSubmitted(true)} 
            />
          )}
          {isGameOver && hasSubmitted && (
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
                  onClick={onBack}
                  className="w-full bg-white text-purple py-3 rounded-xl font-bold uppercase tracking-widest text-xs shadow-lg flex items-center justify-center gap-2 hover:bg-gold transition-all"
                >
                  Back to Hub
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

      <AdComponent type="square" />
    </div>
  );
};

// --- Legend Puzzle Game ---
export const LegendPuzzle = ({ onBack }: { onBack: () => void }) => {
  const [level, setLevel] = useState(0);
  const [tiles, setTiles] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [isSolved, setIsSolved] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [hasAnnounced, setHasAnnounced] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const currentLegend = GALLERY_PHOTOS[level % GALLERY_PHOTOS.length];

  const getNeighbors = (idx: number) => {
    const neighbors = [];
    const r = Math.floor(idx / 3);
    const c = idx % 3;
    if (r > 0) neighbors.push(idx - 3);
    if (r < 2) neighbors.push(idx + 3);
    if (c > 0) neighbors.push(idx - 1);
    if (c < 2) neighbors.push(idx + 1);
    return neighbors;
  };

  const initPuzzle = useCallback(() => {
    const initialTiles = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    let shuffled = [...initialTiles];
    
    // Robust Shuffle: 20 Valid Moves to ensure solvability
    let emptyIdx = 8;
    for (let i = 0; i < 20; i++) {
      const neighbors = getNeighbors(emptyIdx);
      const randomNeighbor = neighbors[Math.floor(Math.random() * neighbors.length)];
      [shuffled[emptyIdx], shuffled[randomNeighbor]] = [shuffled[randomNeighbor], shuffled[emptyIdx]];
      emptyIdx = randomNeighbor;
    }
    
    setTiles(shuffled);
    setMoves(0);
    setIsSolved(false);
    setShowSuccess(false);
  }, []);

  useEffect(() => {
    initPuzzle();
  }, [level, initPuzzle]);

  const handleTileClick = (idx: number) => {
    if (isSolved) return;

    const emptyIdx = tiles.indexOf(8);
    const neighbors = getNeighbors(emptyIdx);

    if (neighbors.includes(idx)) {
      const newTiles = [...tiles];
      [newTiles[emptyIdx], newTiles[idx]] = [newTiles[idx], newTiles[emptyIdx]];
      setTiles(newTiles);
      setMoves(prev => prev + 1);

      // Check if solved
      if (newTiles.every((tile, i) => tile === i)) {
        setIsSolved(true);
        setTimeout(() => setShowSuccess(true), 600);
      }
    }
  };

  const shareResult = () => {
    const text = `I just reconnected ${currentLegend.name} in only ${moves} moves on the UDOSA 04 Puzzle! Can you solve Level ${level + 1}? 🧩🎓 #UDOSA04 #LegendPuzzle`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  const nextLevel = () => {
    setLevel(prev => (prev + 1) % GALLERY_PHOTOS.length);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8 flex flex-col items-center">
      {!hasAnnounced && (
        <div className="fixed inset-0 z-[100] bg-purple/95 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="bg-white rounded-[2.5rem] p-8 max-w-sm w-full text-center shadow-2xl border-4 border-gold">
            <h2 className="text-3xl font-serif font-black text-purple uppercase tracking-tighter mb-2">Legend Puzzle</h2>
            <p className="text-pink font-serif italic mb-8">Reconnect the legends of '04 in this sliding challenge.</p>
            <WhatsAppGateway 
              gameName="Legend Puzzle" 
              type="pre" 
              onComplete={() => setHasAnnounced(true)} 
            />
          </div>
        </div>
      )}
      {/* Header */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-purple font-bold uppercase tracking-widest text-xs hover:text-pink transition-colors"
        >
          <ChevronLeft className="w-4 h-4" /> Back to Hub
        </button>
        
        <div className="text-center">
          <h2 className="text-xl font-serif font-black text-purple uppercase tracking-tight">
            Level {level + 1}: <span className="text-pink">Reconnect the Legend</span>
          </h2>
          <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Legend: {currentLegend.name}</p>
        </div>

        <div className="flex gap-4">
          <div className="bg-purple text-white px-4 py-2 rounded-xl shadow-lg border border-gold/20">
            <p className="text-[8px] uppercase tracking-widest text-gold/60">Moves</p>
            <p className="text-xl font-black">{moves}</p>
          </div>
          <button 
            onClick={() => {
              if (level === 0) initPuzzle();
              else setLevel(0);
            }}
            className="bg-white border border-purple/10 px-4 py-2 rounded-xl shadow-lg hover:bg-gold transition-colors group"
            title="Restart to Level 1"
          >
            <RotateCcw className="w-5 h-5 text-purple group-hover:rotate-180 transition-transform duration-500" />
          </button>
        </div>
      </div>

      {/* Puzzle Board */}
      <div className="relative w-full max-w-[340px] aspect-square bg-white rounded-3xl p-3 shadow-[0_20px_60px_rgba(88,28,135,0.2)] border-[8px] border-gold overflow-hidden touch-none">
        <div className="grid grid-cols-3 grid-rows-3 w-full h-full gap-1 bg-purple/10">
          {tiles.map((tileValue, currentIndex) => {
            const isHole = tileValue === 8;
            const originalR = Math.floor(tileValue / 3);
            const originalC = tileValue % 3;

            return (
              <motion.div
                key={tileValue}
                layout
                onClick={() => handleTileClick(currentIndex)}
                className={`relative cursor-pointer rounded-lg overflow-hidden border border-purple/5 ${isHole && !isSolved ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                style={{
                  backgroundImage: `url(${currentLegend.src})`,
                  backgroundSize: '300% 300%',
                  backgroundPosition: `${(originalC / 2) * 100}% ${(originalR / 2) * 100}%`,
                }}
                whileHover={!isSolved && !isHole ? { scale: 0.98 } : {}}
                whileTap={!isSolved && !isHole ? { scale: 0.95 } : {}}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            );
          })}
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccess && !hasSubmitted && (
          <WhatsAppGateway 
            gameName="Legend Puzzle" 
            score={`${moves} Moves: Legend Reconnected`} 
            type="post" 
            onComplete={() => setHasSubmitted(true)} 
          />
        )}
        {showSuccess && hasSubmitted && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-[100] bg-purple/90 backdrop-blur-md flex items-center justify-center p-6"
          >
            <motion.div 
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-white rounded-[3rem] p-8 max-w-sm w-full text-center space-y-6 shadow-2xl border-4 border-gold"
            >
              <div className="relative w-48 h-48 mx-auto rounded-2xl overflow-hidden border-4 border-gold shadow-[0_0_30px_rgba(212,175,55,0.5)]">
                <img 
                  src={currentLegend.src} 
                  alt={currentLegend.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <motion.div 
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute inset-0 bg-gold/20"
                />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-3xl font-serif font-black text-purple uppercase tracking-tighter">Success!</h3>
                <p className="text-slate-600 font-serif italic">You reconnected {currentLegend.name} in {moves} moves.</p>
              </div>

              <div className="flex flex-col gap-3">
                <button 
                  onClick={() => {
                    setHasSubmitted(false);
                    setShowSuccess(false);
                    nextLevel();
                  }}
                  className="w-full bg-purple text-white py-4 rounded-2xl font-bold uppercase tracking-widest text-xs shadow-lg hover:bg-pink transition-all flex items-center justify-center gap-2"
                >
                  Next Level <ChevronRight className="w-4 h-4" />
                </button>
                <button 
                  onClick={onBack}
                  className="w-full bg-white border-2 border-purple text-purple py-4 rounded-2xl font-bold uppercase tracking-widest text-xs shadow-lg flex items-center justify-center gap-2 hover:bg-gold hover:border-gold transition-all"
                >
                  Back to Hub
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <p className="text-slate-400 text-[10px] font-serif italic text-center max-w-xs">
        Tap tiles adjacent to the empty space to slide them. Arrange the pieces to reveal the legend.
      </p>

      <AdComponent type="square" />
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
