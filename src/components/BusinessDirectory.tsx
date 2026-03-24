import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Briefcase, Globe, Phone, Mail, MapPin, ExternalLink, Filter } from 'lucide-react';

interface Business {
  id: string;
  name: string;
  owner: string;
  category: string;
  description: string;
  location: string;
  phone: string;
  email: string;
  website?: string;
  logo?: string;
}

const BUSINESSES: Business[] = [
  {
    id: '1',
    name: 'Ojo Strategic Consulting',
    owner: 'Owen Ojo',
    category: 'Consulting',
    description: 'Providing world-class strategic planning and business development services for global enterprises.',
    location: 'Lagos, Nigeria',
    phone: '+234 800 000 0001',
    email: 'owen@ojoconsulting.com',
    website: 'https://ojoconsulting.com',
    logo: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=200'
  },
  {
    id: '2',
    name: 'Azikiwe Media Group',
    owner: 'Ifeoma Azikiwe',
    category: 'Media & Arts',
    description: 'A full-service media house specializing in digital storytelling, publishing, and creative direction.',
    location: 'Abuja, Nigeria',
    phone: '+234 800 000 0002',
    email: 'ifeoma@azikiwemedia.com',
    website: 'https://azikiwemedia.com',
    logo: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=200'
  },
  {
    id: '3',
    name: 'Ogbeide Pharmaceuticals',
    owner: 'Irene Ogbeide',
    category: 'Healthcare',
    description: 'Dedicated to providing high-quality pharmaceutical products and healthcare consulting services.',
    location: 'Benin City, Nigeria',
    phone: '+234 800 000 0003',
    email: 'irene@ogbeidepharma.com',
    logo: 'https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?q=80&w=200'
  },
  {
    id: '4',
    name: 'Oziegbe Karate Academy',
    owner: 'Ehima Oziegbe',
    category: 'Sports & Fitness',
    description: 'Training the next generation of martial artists in the art of Shotokan Karate and discipline.',
    location: 'London, UK',
    phone: '+44 700 000 0004',
    email: 'ehima@oziegbekarate.com',
    website: 'https://oziegbekarate.com',
    logo: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=200'
  },
  {
    id: '5',
    name: 'Solidarity Logistics',
    owner: 'Cynthia Ero',
    category: 'Logistics',
    description: 'Efficient and reliable logistics and supply chain management solutions across West Africa.',
    location: 'Port Harcourt, Nigeria',
    phone: '+234 800 000 0005',
    email: 'cynthia@solidaritylogistics.com',
    logo: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=200'
  }
];

const CATEGORIES = ['All', 'Consulting', 'Media & Arts', 'Healthcare', 'Sports & Fitness', 'Logistics', 'Technology', 'Legal'];

export const BusinessDirectory: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredBusinesses = BUSINESSES.filter(business => {
    const matchesSearch = business.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         business.owner.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         business.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || business.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-stone-50 pb-20">
      {/* Header */}
      <div className="bg-purple py-16 px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10"
        >
          <h2 className="text-5xl font-serif font-black text-gold uppercase tracking-tighter mb-4">Alumni Business Directory</h2>
          <p className="text-white/80 font-serif italic text-xl max-w-2xl mx-auto">
            Supporting our own. Discover and connect with businesses owned and operated by UDOSA 04 alumni.
          </p>
        </motion.div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-8 -mt-8 relative z-20">
        <div className="bg-white rounded-3xl shadow-2xl p-6 border border-gold/20 flex flex-col md:flex-row gap-4">
          <div className="flex-grow relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by business name, owner, or service..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-purple transition-all"
            />
          </div>
          <div className="flex items-center gap-4">
            <Filter className="text-purple w-5 h-5" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-slate-50 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-purple transition-all text-purple font-bold"
            >
              {CATEGORIES.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Business Grid */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBusinesses.map((business, index) => (
            <motion.div
              key={business.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-[2rem] overflow-hidden shadow-xl border border-gold/10 hover:border-gold/50 transition-all duration-500 group"
            >
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={business.logo || 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000'} 
                  alt={business.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple/80 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <span className="bg-gold text-purple text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                    {business.category}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-serif font-black text-purple mb-1">{business.name}</h3>
                <p className="text-pink font-bold text-sm mb-4">Owned by {business.owner}</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3 italic">
                  "{business.description}"
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-slate-500 text-sm">
                    <MapPin className="w-4 h-4 text-gold" />
                    <span>{business.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-500 text-sm">
                    <Phone className="w-4 h-4 text-gold" />
                    <span>{business.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-500 text-sm">
                    <Mail className="w-4 h-4 text-gold" />
                    <span>{business.email}</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  {business.website && (
                    <a 
                      href={business.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-grow bg-purple text-white text-center py-3 rounded-xl font-bold text-sm hover:bg-pink transition-colors flex items-center justify-center gap-2"
                    >
                      Visit Website <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  <button className="p-3 rounded-xl border-2 border-purple text-purple hover:bg-purple hover:text-white transition-all">
                    <Mail className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredBusinesses.length === 0 && (
          <div className="text-center py-20">
            <Briefcase className="w-20 h-20 text-slate-200 mx-auto mb-4" />
            <h3 className="text-2xl font-serif font-bold text-slate-400">No businesses found matching your search.</h3>
            <p className="text-slate-400 mt-2">Try adjusting your filters or search terms.</p>
          </div>
        )}
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-8 pb-20">
        <div className="bg-gradient-to-r from-purple to-[#3b0764] rounded-[3rem] p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-pink/10 rounded-full -mr-32 -mt-32 blur-3xl" />
          <h3 className="text-3xl font-serif font-black text-white mb-4 relative z-10 uppercase tracking-tighter">List Your Business</h3>
          <p className="text-white/70 max-w-xl mx-auto mb-8 relative z-10">
            Are you a UDOSA 04 alumnus with a business? Join our directory and let your classmates support your growth.
          </p>
          <button className="bg-gold text-purple px-10 py-4 rounded-full font-black uppercase tracking-widest hover:bg-white hover:scale-105 transition-all shadow-xl relative z-10">
            Register Business
          </button>
        </div>
      </div>
    </div>
  );
};
