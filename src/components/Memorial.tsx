import React from 'react';
import { motion } from 'motion/react';
import { Flower2, Heart, Quote, Star, Calendar, MapPin } from 'lucide-react';

interface MemorialEntry {
  id: string;
  name: string;
  years: string;
  quote: string;
  description: string;
  image: string;
}

const MEMORIALS: MemorialEntry[] = [
  {
    id: '1',
    name: 'Cynthia Ero\'s Father',
    years: '1945 - 2024',
    quote: "A legacy of love and strength that continues to inspire.",
    description: "A pillar of the community and a devoted father whose wisdom and kindness touched many lives. His memory lives on through his children and the values he instilled in them.",
    image: 'https://images.unsplash.com/photo-1544161515-436cefd1f16d?q=80&w=400'
  },
  {
    id: '2',
    name: 'Osayowanbo\'s Mother',
    years: '1950 - 2023',
    quote: "A gentle soul whose light will never fade.",
    description: "A nurturing mother and educator who dedicated her life to the growth and well-being of others. Her grace and compassion remain a guiding light for all who knew her.",
    image: 'https://images.unsplash.com/photo-1518893063132-36e46dbe2428?q=80&w=400'
  },
  {
    id: '3',
    name: 'Owen Ojo\'s Parent',
    years: '1948 - 2024',
    quote: "Strength, integrity, and a life well-lived.",
    description: "A visionary leader and mentor whose contributions to the family and community were immeasurable. A life defined by hard work, faith, and unwavering support.",
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=400'
  }
];

export const Memorial: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#1a0b2e] pb-32">
      {/* Hero Header */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516589174184-c685266d430c?q=80&w=2000')] bg-cover bg-center opacity-20 grayscale" />
        <div className="absolute inset-0 bg-gradient-to-b from-purple/80 via-purple/90 to-[#1a0b2e]" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center px-8"
        >
          <Flower2 className="w-20 h-20 text-gold mx-auto mb-8 opacity-50" />
          <h2 className="text-7xl font-serif font-black text-white uppercase tracking-tighter mb-4">In Loving Memory</h2>
          <p className="text-gold font-serif italic text-2xl max-w-3xl mx-auto">
            Honoring the lives and legacies of our departed loved ones. Their impact remains etched in our hearts forever.
          </p>
          <div className="w-24 h-1 bg-pink mx-auto mt-8" />
        </motion.div>
      </div>

      {/* Memorial Cards */}
      <div className="max-w-7xl mx-auto px-8 -mt-20 relative z-20">
        <div className="grid grid-cols-1 gap-16">
          {MEMORIALS.map((memorial, index) => (
            <motion.div
              key={memorial.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              {/* Image Section */}
              <div className="w-full lg:w-1/2">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gold/20 rounded-[3rem] blur-3xl group-hover:bg-pink/20 transition-all duration-700" />
                  <div className="relative aspect-square rounded-[3rem] overflow-hidden border-4 border-white/10 shadow-2xl">
                    <img 
                      src={memorial.image} 
                      alt={memorial.name} 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a0b2e] via-transparent to-transparent opacity-60" />
                  </div>
                </div>
              </div>

              {/* Text Section */}
              <div className="w-full lg:w-1/2 space-y-8">
                <div className="space-y-2">
                  <p className="text-gold font-serif italic text-xl">{memorial.years}</p>
                  <h3 className="text-5xl font-serif font-black text-white uppercase tracking-tighter">{memorial.name}</h3>
                </div>

                <div className="relative p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl">
                  <Quote className="absolute -top-4 -left-4 w-12 h-12 text-gold opacity-30" />
                  <p className="text-2xl font-serif italic text-white/90 leading-relaxed relative z-10">
                    "{memorial.quote}"
                  </p>
                </div>

                <p className="text-white/60 text-lg leading-relaxed font-serif text-justify">
                  {memorial.description}
                </p>

                <div className="flex gap-6">
                  <button className="flex items-center gap-3 bg-white/5 hover:bg-white/10 text-gold px-8 py-4 rounded-full border border-gold/30 transition-all font-bold uppercase tracking-widest text-sm">
                    <Heart className="w-5 h-5" /> Leave a Tribute
                  </button>
                  <button className="flex items-center gap-3 bg-white/5 hover:bg-white/10 text-white/60 px-8 py-4 rounded-full border border-white/10 transition-all font-bold uppercase tracking-widest text-sm">
                    <Star className="w-5 h-5" /> Light a Candle
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Solidarity Quote */}
      <div className="max-w-4xl mx-auto px-8 mt-32 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="space-y-8"
        >
          <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto">
            <Flower2 className="w-8 h-8 text-gold" />
          </div>
          <p className="text-3xl font-serif italic text-white/80 leading-relaxed">
            "The dead never truly leave us. They live on in the stories we tell, the values we uphold, and the love we continue to share as a community."
          </p>
          <div className="flex items-center justify-center gap-4 text-gold/40">
            <div className="h-px w-12 bg-gold/20" />
            <span className="text-xs uppercase tracking-[0.5em] font-bold">UDOSA 04 Solidarity</span>
            <div className="h-px w-12 bg-gold/20" />
          </div>
        </motion.div>
      </div>

      {/* Memorial Service Info */}
      <div className="max-w-7xl mx-auto px-8 mt-32">
        <div className="bg-gradient-to-br from-purple/50 to-pink/20 rounded-[4rem] p-16 border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full -mr-48 -mt-48 blur-3xl" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-4xl font-serif font-black text-white mb-6 uppercase tracking-tighter">Memorial Services & Support</h3>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                We stand together in times of grief. If you would like to contribute to the memorial funds or offer support to the bereaved families, please find the details below.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-gold">
                  <Calendar className="w-6 h-6" />
                  <span className="font-bold uppercase tracking-widest text-sm">Upcoming Services: Check Solidarity Hub</span>
                </div>
                <div className="flex items-center gap-4 text-gold">
                  <MapPin className="w-6 h-6" />
                  <span className="font-bold uppercase tracking-widest text-sm">Locations: Shared via Alumni WhatsApp</span>
                </div>
              </div>
            </div>
            
            <div className="bg-[#1a0b2e]/50 backdrop-blur-2xl p-10 rounded-[3rem] border border-white/10 shadow-inner">
              <h4 className="text-xl font-serif font-bold text-gold mb-6 text-center">Solidarity Contribution</h4>
              <div className="space-y-6">
                <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                  <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Account Name</p>
                  <p className="text-white font-bold text-lg">UDOSA 04 Welfare Fund</p>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                  <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Bank Name</p>
                  <p className="text-white font-bold text-lg">Zenith Bank PLC</p>
                </div>
                <button className="w-full bg-gold text-purple py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white transition-all shadow-xl">
                  Donate to Welfare Fund
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
