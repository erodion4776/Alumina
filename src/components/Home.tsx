import React from 'react';
import { motion } from 'motion/react';
import { Newspaper, Construction, Droplets, Trophy, Users, Calendar, BookOpen } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 p-6 md:p-12 pb-32 md:pb-12">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Welcome Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl font-serif font-black text-purple uppercase tracking-tighter leading-none">
              Welcome Back, <span className="text-gold">Alumni</span>
            </h1>
            <p className="text-pink font-serif italic text-xl md:text-2xl">UDOSA Class of 2004 • Unity & Progress</p>
          </div>
          <div className="flex gap-4">
            <div className="bg-white p-4 rounded-2xl shadow-xl border border-gold/10 text-center min-w-[120px]">
              <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Active Members</p>
              <p className="text-3xl font-black text-purple">142</p>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-xl border border-gold/10 text-center min-w-[120px]">
              <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Projects Funded</p>
              <p className="text-3xl font-black text-gold">05</p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Latest News Section */}
          <section className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-purple rounded-xl text-gold shadow-lg">
                <Newspaper className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-purple">Latest News</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Annual Reunion 2026",
                  date: "Dec 15, 2026",
                  desc: "Mark your calendars for our biggest gathering yet in Benin City. Details coming soon!",
                  image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=600",
                  tag: "Event"
                },
                {
                  title: "Scholarship Fund Launch",
                  date: "Jan 10, 2026",
                  desc: "We've officially launched the UDOSA 04 Excellence Scholarship for current UDSS students.",
                  image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=600",
                  tag: "Impact"
                }
              ].map((news, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-xl border border-stone-100 group"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img src={news.image} alt={news.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                    <div className="absolute top-4 left-4 bg-purple/80 backdrop-blur-md text-gold px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                      {news.tag}
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                      <Calendar className="w-3 h-3" />
                      {news.date}
                    </div>
                    <h3 className="text-xl font-serif font-bold text-purple group-hover:text-pink transition-colors">{news.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed italic font-serif">{news.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Project Progress Section */}
          <section className="space-y-6">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-gold rounded-xl text-purple shadow-lg">
                <Construction className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-purple">Project Progress</h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  name: "Soccer Pitch Renovation",
                  progress: 75,
                  icon: <Trophy className="w-5 h-5" />,
                  color: "bg-purple",
                  desc: "New turf installation in progress."
                },
                {
                  name: "Solar Water Pump",
                  progress: 90,
                  icon: <Droplets className="w-5 h-5" />,
                  color: "bg-gold",
                  desc: "Final testing phase at UDSS."
                },
                {
                  name: "Library Digitalization",
                  progress: 40,
                  icon: <BookOpen className="w-5 h-5" />,
                  color: "bg-pink",
                  desc: "Procuring e-readers and tablets."
                }
              ].map((project, i) => (
                <div key={i} className="bg-white p-6 rounded-3xl shadow-lg border border-stone-100 space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${project.color} text-white`}>
                        {project.icon}
                      </div>
                      <h3 className="font-serif font-bold text-purple">{project.name}</h3>
                    </div>
                    <span className="text-xs font-black text-purple">{project.progress}%</span>
                  </div>
                  <div className="h-2 bg-stone-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${project.progress}%` }}
                      transition={{ duration: 1.5, delay: i * 0.2 }}
                      className={`h-full ${project.color}`}
                    />
                  </div>
                  <p className="text-[10px] text-slate-400 font-serif italic">{project.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-purple p-8 rounded-3xl shadow-2xl text-white relative overflow-hidden group">
              <div className="relative z-10 space-y-4">
                <h3 className="text-2xl font-serif font-bold text-gold">Support Our Projects</h3>
                <p className="text-sm text-white/80 leading-relaxed font-serif italic">Your contributions help us give back to our alma mater and support the next generation.</p>
                <button className="w-full bg-gold text-purple py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-pink hover:text-white transition-all">Donate Now</button>
              </div>
              <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:scale-110 transition-transform duration-700">
                <Users className="w-48 h-48" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
