import React, { useState, useEffect } from 'react';
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
  Clock,
  MapPin,
  Mail
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
export const Home = () => {
  const [news, setNews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

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
              <button className="w-full md:w-auto bg-pink text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest text-xs md:text-sm hover:bg-white hover:text-pink transition-all shadow-lg transform hover:scale-105">
                Reconnect With Us
              </button>
              <button className="w-full md:w-auto bg-transparent text-gold border-2 border-gold px-8 py-3 rounded-full font-bold uppercase tracking-widest text-xs md:text-sm hover:bg-gold hover:text-purple transition-all transform hover:scale-105">
                Explore Our Story
              </button>
            </div>
          </motion.div>
        </div>
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

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
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
            <img 
              src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000" 
              alt="Live Stream Placeholder" 
              className="w-full h-full object-cover opacity-60"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform">
                <Play className="w-10 h-10 fill-purple text-purple ml-1" />
              </div>
              <p className="mt-6 font-serif font-bold text-lg uppercase tracking-widest">No Active Stream</p>
              <p className="text-white/60 text-sm italic">Next event: 20th Anniversary Gala (Dec 2026)</p>
            </div>
            <div className="absolute top-6 left-6 flex items-center gap-2 bg-red-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest animate-pulse">
              <div className="w-2 h-2 bg-white rounded-full" />
              Offline
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
                  <p className="text-white/60 italic">Select a track to begin listening</p>
                </div>
              </div>
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
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredAlumni = ALUMNI_DIRECTORY.filter(person => {
    const matchesSearch = person.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          person.profession.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          person.city.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === "All" || person.profession === filter;
    return matchesSearch && matchesFilter;
  });

  const professions = ["All", ...new Set(ALUMNI_DIRECTORY.map(p => p.profession))];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-b-4 border-purple pb-8">
        <div>
          <h1 className="text-4xl md:text-6xl font-serif font-black text-purple uppercase tracking-widest">Alumni Directory</h1>
          <p className="text-pink font-serif italic text-lg md:text-xl">Reconnecting the Set of 2004</p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search by name, profession, or city..."
              className="w-full md:w-80 pl-12 pr-4 py-3 rounded-xl border-2 border-stone-100 focus:border-gold outline-none transition-all font-serif"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <select 
              className="w-full md:w-48 pl-12 pr-4 py-3 rounded-xl border-2 border-stone-100 focus:border-gold outline-none appearance-none transition-all font-serif cursor-pointer"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              {professions.map(p => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredAlumni.map((person) => (
            <motion.div 
              key={person.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white p-8 rounded-3xl shadow-xl border border-stone-100 hover:border-gold transition-all group"
            >
              <div className="flex items-center gap-6 mb-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple to-pink flex items-center justify-center text-white text-3xl font-serif font-black shadow-lg">
                  {person.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold text-purple">{person.name}</h3>
                  <p className="text-pink font-bold text-xs uppercase tracking-widest">{person.profession}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-500">
                  <MapPin className="w-4 h-4 text-gold" />
                  <span className="text-sm font-serif">{person.city}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-500">
                  <Mail className="w-4 h-4 text-gold" />
                  <span className="text-sm font-serif">{person.email}</span>
                </div>
              </div>
              <button className="w-full mt-8 bg-purple text-white py-3 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-pink transition-colors opacity-0 group-hover:opacity-100 transition-opacity">
                View Profile
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

// --- Business Marketplace ---
export const BusinessMarketplace = () => (
  <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
    <div className="text-center space-y-4">
      <h1 className="text-4xl md:text-6xl font-serif font-black text-purple uppercase tracking-widest">Business Marketplace</h1>
      <p className="text-lg md:text-xl text-pink font-serif italic">Supporting alumni-owned ventures worldwide.</p>
      <div className="w-24 h-1 bg-gold mx-auto" />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {BUSINESS_MARKETPLACE.map((biz) => (
        <div key={biz.id} className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-stone-100 flex flex-col md:flex-row h-full hover:scale-[1.02] transition-transform duration-500">
          <div className="md:w-1/3 bg-purple p-10 flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-20 h-20 bg-gold rounded-3xl flex items-center justify-center shadow-xl">
              <Briefcase className="w-10 h-10 text-purple" />
            </div>
            <span className="text-[10px] bg-white/10 text-gold px-4 py-1 rounded-full font-bold uppercase tracking-widest border border-white/20">
              {biz.category}
            </span>
          </div>
          <div className="md:w-2/3 p-10 flex flex-col">
            <h3 className="text-3xl font-serif font-bold text-purple mb-2">{biz.name}</h3>
            <p className="text-pink font-bold text-xs uppercase tracking-widest mb-6">Owner: {biz.owner}</p>
            <p className="text-slate-600 font-serif italic leading-relaxed mb-8 flex-grow">{biz.description}</p>
            <div className="flex gap-4">
              <button className="flex-grow bg-purple text-white py-3 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-pink transition-colors">
                Contact
              </button>
              <button className="p-3 border-2 border-purple text-purple rounded-xl hover:bg-purple hover:text-white transition-all">
                <ExternalLink className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// --- Memorial Section ---
export const Memorial = () => (
  <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
    <div className="text-center space-y-4">
      <h1 className="text-4xl md:text-6xl font-serif font-black text-purple uppercase tracking-widest">In Loving Memory</h1>
      <p className="text-lg md:text-xl text-pink font-serif italic">Honoring the parents and loved ones who guided our path.</p>
      <div className="w-24 h-1 bg-gold mx-auto" />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      {[
        { name: "Cynthia's Late Parent", date: "2024", icon: <Heart className="w-8 h-8" /> },
        { name: "Osayowanbo's Late Parent", date: "2025", icon: <Heart className="w-8 h-8" /> },
        { name: "Owen's Late Parent", date: "2025", icon: <Heart className="w-8 h-8" /> },
        { name: "Ehis's Late Parent", date: "2026", icon: <Heart className="w-8 h-8" /> },
        { name: "Ero's Late Parent", date: "2026", icon: <Heart className="w-8 h-8" /> }
      ].map((item, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="bg-white p-10 rounded-[2rem] shadow-xl border-b-8 border-gold text-center space-y-6"
        >
          <div className="w-20 h-20 bg-purple/5 text-pink rounded-full flex items-center justify-center mx-auto border-2 border-pink/10">
            {item.icon}
          </div>
          <div>
            <h3 className="text-2xl font-serif font-bold text-purple">{item.name}</h3>
            <p className="text-gold font-bold text-xs uppercase tracking-widest mt-2">Remembrance {item.date}</p>
          </div>
          <p className="text-slate-500 font-serif italic text-sm leading-relaxed">
            "Your legacy lives on through the excellence and kindness of the children you raised."
          </p>
        </motion.div>
      ))}
    </div>

    <div className="bg-purple p-12 rounded-[3rem] text-center space-y-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-pink/10 rounded-full -ml-32 -mt-32 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold/10 rounded-full -mr-32 -mb-32 blur-3xl" />
      <h2 className="text-4xl font-serif font-bold text-gold relative z-10">A Moment of Silence</h2>
      <p className="text-white/80 font-serif italic text-xl max-w-2xl mx-auto relative z-10 leading-relaxed">
        "Those we love don't go away, they walk beside us every day. Unseen, unheard, but always near, so loved, so missed, so very dear."
      </p>
      <div className="flex justify-center gap-4 relative z-10">
        <div className="w-3 h-3 rounded-full bg-gold animate-pulse" />
        <div className="w-3 h-3 rounded-full bg-gold animate-pulse delay-75" />
        <div className="w-3 h-3 rounded-full bg-gold animate-pulse delay-150" />
      </div>
    </div>
  </div>
);
