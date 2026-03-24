import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, MapPin, Briefcase, Mail, Phone, ExternalLink, Users, Star } from 'lucide-react';

export const Directory: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [professionFilter, setProfessionFilter] = useState('All');
  const [cityFilter, setCityFilter] = useState('All');

  const alumni = [
    { name: "Dr. Emeka Okoro", profession: "Medical Doctor", city: "Lagos", email: "e.okoro@example.com", phone: "+234 801 234 5678", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400" },
    { name: "Ifeoma Azikiwe", profession: "Creative Director", city: "Benin City", email: "i.azikiwe@example.com", phone: "+234 802 345 6789", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
    { name: "Tunde Williams", profession: "Software Engineer", city: "London", email: "t.williams@example.com", phone: "+44 7700 900123", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400" },
    { name: "Blessing Adebayo", profession: "Event Planner", city: "Abuja", email: "b.adebayo@example.com", phone: "+234 803 456 7890", image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=400" },
    { name: "Chidi Okafor", profession: "Legal Counsel", city: "New York", email: "c.okafor@example.com", phone: "+1 212 555 0199", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" },
    { name: "Zainab Yusuf", profession: "Architect", city: "Dubai", email: "z.yusuf@example.com", phone: "+971 50 123 4567", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400" },
  ];

  const professions = ['All', ...new Set(alumni.map(a => a.profession))];
  const cities = ['All', ...new Set(alumni.map(a => a.city))];

  const filteredAlumni = alumni.filter(a => {
    const matchesSearch = a.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          a.profession.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          a.city.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesProfession = professionFilter === 'All' || a.profession === professionFilter;
    const matchesCity = cityFilter === 'All' || a.city === cityFilter;
    return matchesSearch && matchesProfession && matchesCity;
  });

  return (
    <div className="min-h-screen bg-stone-50 p-6 md:p-12 pb-32 md:pb-12">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b-4 border-purple pb-8">
          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl font-serif font-black text-purple uppercase tracking-tighter leading-none">
              Alumni <span className="text-gold">Directory</span>
            </h1>
            <p className="text-pink font-serif italic text-xl md:text-2xl">Connect with the Legends of 2004</p>
          </div>
          <div className="flex gap-4">
            <div className="bg-white p-4 rounded-2xl shadow-xl border border-gold/10 text-center min-w-[120px]">
              <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Total Listed</p>
              <p className="text-3xl font-black text-purple">{alumni.length}</p>
            </div>
          </div>
        </header>

        {/* Search & Filters */}
        <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl border border-stone-100 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-focus-within:text-purple transition-colors" />
              <input 
                type="text" 
                placeholder="Search by name, profession, or city..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-6 py-4 bg-stone-50 rounded-2xl border-2 border-transparent focus:border-purple/20 focus:bg-white outline-none transition-all font-serif italic"
              />
            </div>

            <div className="relative group">
              <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-focus-within:text-purple transition-colors" />
              <select 
                value={professionFilter}
                onChange={(e) => setProfessionFilter(e.target.value)}
                className="w-full pl-12 pr-6 py-4 bg-stone-50 rounded-2xl border-2 border-transparent focus:border-purple/20 focus:bg-white outline-none transition-all font-serif italic appearance-none"
              >
                {professions.map(p => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>

            <div className="relative group">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-focus-within:text-purple transition-colors" />
              <select 
                value={cityFilter}
                onChange={(e) => setCityFilter(e.target.value)}
                className="w-full pl-12 pr-6 py-4 bg-stone-50 rounded-2xl border-2 border-transparent focus:border-purple/20 focus:bg-white outline-none transition-all font-serif italic appearance-none"
              >
                {cities.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
          </div>
        </div>

        {/* Alumni Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredAlumni.map((person, i) => (
              <motion.div 
                key={person.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-stone-100 group hover:shadow-2xl hover:shadow-purple/10 transition-all duration-500"
              >
                <div className="h-48 overflow-hidden relative">
                  <img src={person.image} alt={person.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 right-4 bg-gold text-purple p-2 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                </div>
                <div className="p-8 space-y-6">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-serif font-bold text-purple">{person.name}</h3>
                    <div className="flex items-center gap-2 text-pink font-serif italic">
                      <Briefcase className="w-4 h-4" />
                      {person.profession}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm text-slate-500 font-serif italic">
                      <MapPin className="w-4 h-4 text-gold" />
                      {person.city}
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-500 font-serif italic">
                      <Mail className="w-4 h-4 text-gold" />
                      {person.email}
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-500 font-serif italic">
                      <Phone className="w-4 h-4 text-gold" />
                      {person.phone}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-stone-100 flex gap-4">
                    <button className="flex-grow bg-purple text-white py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-pink transition-colors flex items-center justify-center gap-2">
                      <Mail className="w-4 h-4" />
                      Message
                    </button>
                    <button className="p-3 bg-stone-50 text-purple rounded-xl hover:bg-gold hover:text-white transition-all">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredAlumni.length === 0 && (
          <div className="text-center py-24 space-y-6">
            <div className="w-24 h-24 bg-stone-100 rounded-full flex items-center justify-center mx-auto text-slate-300">
              <Users className="w-12 h-12" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-serif font-bold text-purple">No Alumni Found</h3>
              <p className="text-slate-400 font-serif italic">Try adjusting your search or filters to find your classmates.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
