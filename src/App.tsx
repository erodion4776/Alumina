/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Printer, Mail, Phone, Globe, Award, Users, BookOpen, Camera, Briefcase } from 'lucide-react';

const Page = ({ children, pageNumber, className = "", noSidebar = false }: { children: React.ReactNode; pageNumber: number; className?: string; noSidebar?: boolean }) => (
  <div className="page-a4">
    {!noSidebar && (
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-royal-purple flex flex-col items-center py-8 z-20">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-auto shadow-lg">
          <span className="text-royal-purple font-serif font-bold text-xs">UDOSA</span>
        </div>
        <div className="rotate-[-90deg] whitespace-nowrap text-white/40 text-[10px] tracking-[0.4em] uppercase font-serif mb-12">
          University of Benin Demonstration Secondary School
        </div>
      </div>
    )}
    <div className={`flex-grow flex flex-col ${noSidebar ? '' : 'ml-16'} ${className}`}>
      {children}
    </div>
    <div className="absolute bottom-6 right-8 text-[10px] font-serif tracking-widest text-slate-400 z-20">
      UDOSA 04 | PAGE {pageNumber}
    </div>
  </div>
);

const SectionDivider = () => <div className="w-full h-px bg-rose-pink/30 my-6" />;

export default function App() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen py-12 print:py-0">
      {/* Cover Page */}
      <div className="page-a4 no-sidebar">
        <div className="absolute inset-0 bg-gradient-to-br from-royal-purple via-[#2a004a] to-black z-0" />
        <div className="absolute inset-0 opacity-20 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541339907198-e08756edd811?auto=format&fit=crop&q=80&w=1200" 
            alt="University" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-16 text-center">
          <div className="w-24 h-24 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 flex items-center justify-center mb-12 shadow-2xl">
            <Award className="w-12 h-12 text-gold" />
          </div>
          <h2 className="text-rose-pink font-serif font-bold text-3xl tracking-[0.2em] mb-4 drop-shadow-lg">UDOSA 04</h2>
          <h1 className="text-5xl font-serif font-black text-white leading-tight mb-6 uppercase tracking-tight">
            University of Benin<br />
            <span className="text-gold">Demonstration</span><br />
            Secondary School
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-rose-pink to-gold mb-8" />
          <p className="text-2xl font-serif italic text-white/80 tracking-wide">
            Celebrating 20 Years of Excellence
          </p>
          <div className="absolute bottom-16 left-0 right-0 flex flex-col items-center">
            <p className="text-xs text-gold uppercase tracking-[0.5em] font-bold">Class of 2004 • Anniversary Edition</p>
          </div>
        </div>
      </div>

      {/* Table of Contents */}
      <Page pageNumber={2} className="p-16 bg-stone-50">
        <div className="mb-16">
          <h2 className="text-6xl font-serif font-bold text-royal-purple mb-2">Contents</h2>
          <div className="w-20 h-2 bg-rose-pink" />
        </div>
        <div className="grid grid-cols-1 gap-8">
          {[
            { title: "The Chairman's Address", page: "03", icon: <Award className="w-5 h-5" /> },
            { title: "From the Editor's Desk", page: "04", icon: <BookOpen className="w-5 h-5" /> },
            { title: "Two Decades of Impact", page: "05", icon: <Users className="w-5 h-5" /> },
            { title: "Memories in Motion", page: "08", icon: <Camera className="w-5 h-5" /> },
            { title: "Alumni Business Directory", page: "10", icon: <Briefcase className="w-5 h-5" /> },
          ].map((item, i) => (
            <div key={i} className="flex items-center group cursor-default">
              <div className="w-12 h-12 rounded-full bg-rose-pink/10 flex items-center justify-center text-rose-pink mr-6 group-hover:bg-rose-pink group-hover:text-white transition-all">
                {item.icon}
              </div>
              <span className="text-xl font-serif font-bold text-slate-800 flex-grow border-b border-slate-200 pb-2">
                {item.title}
              </span>
              <span className="text-2xl font-serif font-black text-gold ml-4">{item.page}</span>
            </div>
          ))}
        </div>
        <div className="mt-auto glass p-8 rounded-2xl flex items-center gap-6">
          <div className="flex-1">
            <h4 className="font-serif font-bold text-royal-purple">UDOSA 04 Legacy</h4>
            <p className="text-xs text-slate-500 leading-relaxed">A journey through time, celebrating the achievements and bonds of the Class of 2004.</p>
          </div>
          <div className="w-24 h-24 rounded-xl overflow-hidden shadow-lg">
            <img src="https://images.unsplash.com/photo-1523050335392-93851179ae22?auto=format&fit=crop&q=80&w=300" alt="Campus" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
        </div>
      </Page>

      {/* Chairman Page */}
      <Page pageNumber={3} className="p-0">
        <div className="flex h-full">
          <div className="w-2/5 bg-royal-purple relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            <div className="relative z-10 p-8">
              <div className="aspect-[3/4] w-full bg-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-4 border-white/20 rounded-sm overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
                  alt="Chairman" 
                  className="w-full h-full object-cover grayscale"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mt-8 text-center">
                <h3 className="text-white font-serif text-2xl font-bold">Dr. Emmanuel Okoro</h3>
                <p className="text-gold text-xs uppercase tracking-[0.3em] mt-2">National Chairman, UDOSA 04</p>
              </div>
            </div>
          </div>
          <div className="w-3/5 bg-rose-pink/5 p-16 flex flex-col justify-center">
            <h2 className="text-5xl font-serif font-black text-royal-purple mb-8 leading-tight">
              Message from the <span className="text-rose-pink">Chairman</span>
            </h2>
            <div className="w-16 h-1 bg-gold mb-12" />
            <div className="space-y-6 text-slate-700 leading-relaxed font-light text-lg italic">
              <p>
                "Twenty years ago, we walked out of the gates of UBDS with dreams in our eyes and fire in our hearts. Today, seeing the heights each of you has attained fills me with immense pride."
              </p>
              <p>
                "This E-Book is more than a collection of pages; it is a bridge connecting our shared past to our brilliant future. Let us continue to uphold the excellence that UDOSA 04 represents."
              </p>
            </div>
            <div className="mt-16">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Jon_Kirsch%27s_Signature.png" alt="Signature" className="h-12 opacity-60 grayscale invert" />
              <p className="font-serif font-bold text-royal-purple mt-4">Emmanuel Okoro, Ph.D.</p>
            </div>
          </div>
        </div>
      </Page>

      {/* Editor Page */}
      <Page pageNumber={4} className="p-0">
        <div className="flex h-full flex-row-reverse">
          <div className="w-2/5 bg-royal-purple relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
            <div className="relative z-10 p-8">
              <div className="aspect-[3/4] w-full bg-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-4 border-white/20 rounded-sm overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
                  alt="Editor" 
                  className="w-full h-full object-cover grayscale"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mt-8 text-center">
                <h3 className="text-white font-serif text-2xl font-bold">Mrs. Ifeoma Azikiwe</h3>
                <p className="text-gold text-xs uppercase tracking-[0.3em] mt-2">Chief Editor, UDOSA 04</p>
              </div>
            </div>
          </div>
          <div className="w-3/5 bg-rose-pink/5 p-16 flex flex-col justify-center">
            <h2 className="text-5xl font-serif font-black text-royal-purple mb-8 leading-tight">
              Editor's <span className="text-rose-pink">Perspective</span>
            </h2>
            <div className="w-16 h-1 bg-gold mb-12" />
            <div className="space-y-6 text-slate-700 leading-relaxed">
              <p>
                Crafting this anniversary edition has been an emotional journey. We sifted through hundreds of photos and stories, each one a thread in the rich tapestry of our set's history.
              </p>
              <p>
                From the classrooms of Benin to the boardrooms of the world, the UDOSA 04 spirit remains unbroken. We hope these pages evoke the laughter, the struggles, and the triumphs that defined our formative years.
              </p>
              <p>
                Thank you for being part of this legacy.
              </p>
            </div>
            <div className="mt-16">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Signature_of_John_Hancock.png" alt="Signature" className="h-12 opacity-60 grayscale invert" />
              <p className="font-serif font-bold text-royal-purple mt-4">Ifeoma Azikiwe</p>
            </div>
          </div>
        </div>
      </Page>

      {/* Article Section */}
      <Page pageNumber={5} className="p-16 bg-white">
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-grow bg-rose-pink" />
            <span className="text-rose-pink font-serif font-bold tracking-[0.4em] text-xs uppercase">Vogue Feature</span>
            <div className="h-px flex-grow bg-rose-pink" />
          </div>
          <h2 className="text-7xl font-serif font-black text-royal-purple text-center leading-none mb-6">
            THE LEGACY<br /><span className="text-rose-pink italic">OF SET 04</span>
          </h2>
          <p className="text-center text-slate-400 font-serif italic text-lg">By Chidi Nwosu, Class of '04</p>
        </div>
        
        <div className="grid grid-cols-2 gap-12 text-slate-600 leading-relaxed text-sm">
          <div className="space-y-6">
            <p className="drop-cap">
              It has been exactly two decades since we tossed our caps into the bright Benin sky. The world we entered then was vastly different from the one we inhabit today, yet the values instilled in us at University of Benin Demonstration Secondary School remain our North Star.
            </p>
            <p>
              The Class of 2004 was always special. We were the bridge between the analog past and the digital future. We remember the sound of the school bell as clearly as we remember the first time we accessed the internet in the computer lab.
            </p>
            <div className="p-8 glass rounded-3xl border-rose-pink/20 my-8">
              <p className="text-xl font-serif italic text-royal-purple text-center leading-relaxed">
                "We didn't just graduate; we launched a movement of excellence that continues to ripple across the globe."
              </p>
            </div>
            <p>
              Our set has produced doctors, engineers, artists, and leaders who are making significant contributions in their respective fields. But more than professional success, it is the bond of brotherhood and sisterhood that defines us.
            </p>
          </div>
          <div className="space-y-6">
            <div className="aspect-[4/5] bg-slate-100 rounded-sm overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800" 
                alt="Alumni Gathering" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <p>
              As we celebrate this milestone, we look back not with regret, but with gratitude. The friendships formed in those corridors have stood the test of time, distance, and the complexities of adult life.
            </p>
            <p>
              The UDOSA 04 legacy is not just about what we have achieved, but about who we have become. We are a set that cares, a set that gives back, and a set that continues to demonstrate the excellence of our alma mater.
            </p>
            <div className="flex justify-end pt-8">
              <div className="w-24 h-px bg-rose-pink" />
            </div>
          </div>
        </div>
      </Page>

      {/* Photo Gallery */}
      <Page pageNumber={8} className="p-16 bg-slate-50">
        <div className="mb-12 flex justify-between items-end">
          <div>
            <h2 className="text-5xl font-serif font-black text-royal-purple">GALLERY</h2>
            <p className="text-rose-pink font-serif italic">Moments Frozen in Time</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-slate-400 uppercase tracking-widest">Curated by the Social Committee</p>
          </div>
        </div>

        <div className="grid grid-cols-4 grid-rows-4 gap-4 h-[70%]">
          <div className="col-span-2 row-span-2 border border-gold p-1">
            <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=600" alt="G1" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="col-span-2 row-span-1 border border-gold p-1">
            <img src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&q=80&w=600" alt="G2" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="col-span-1 row-span-1 border border-gold p-1">
            <img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=600" alt="G3" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="col-span-1 row-span-2 border border-gold p-1">
            <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=600" alt="G4" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="col-span-2 row-span-2 border border-gold p-1">
            <img src="https://images.unsplash.com/photo-1525921429624-479b6a29d84c?auto=format&fit=crop&q=80&w=600" alt="G5" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="col-span-1 row-span-1 border border-gold p-1">
            <img src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80&w=600" alt="G6" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
        </div>
        
        <div className="mt-12 glass p-6 rounded-2xl flex justify-around items-center">
          <div className="text-center">
            <p className="text-2xl font-serif font-bold text-royal-purple">500+</p>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest">Photos Shared</p>
          </div>
          <div className="w-px h-10 bg-slate-200" />
          <div className="text-center">
            <p className="text-2xl font-serif font-bold text-royal-purple">20</p>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest">Years of Memories</p>
          </div>
          <div className="w-px h-10 bg-slate-200" />
          <div className="text-center">
            <p className="text-2xl font-serif font-bold text-royal-purple">1</p>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest">Unbreakable Bond</p>
          </div>
        </div>
      </Page>

      {/* Business Directory */}
      <Page pageNumber={10} className="p-16 bg-white">
        <div className="mb-12">
          <h2 className="text-5xl font-serif font-black text-royal-purple mb-2">DIRECTORY</h2>
          <div className="flex items-center gap-4">
            <div className="w-12 h-1 bg-rose-pink" />
            <p className="text-slate-400 font-serif italic">Supporting Our Own</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {[
            { name: "Okoro Medical Center", owner: "Dr. Emeka Okoro", desc: "Premium healthcare services with a focus on family wellness.", icon: <Award className="w-5 h-5" /> },
            { name: "Azikiwe Creative Agency", owner: "Ifeoma Azikiwe", desc: "Full-service digital marketing and brand storytelling.", icon: <BookOpen className="w-5 h-5" /> },
            { name: "Benin Tech Hub", owner: "Tunde Williams", desc: "Empowering the next generation of African developers.", icon: <Globe className="w-5 h-5" /> },
            { name: "Rose Garden Events", owner: "Blessing Adebayo", desc: "Exquisite event planning and luxury floral designs.", icon: <Camera className="w-5 h-5" /> },
            { name: "Legacy Legal Firm", owner: "Barr. Chidi Eze", desc: "Expert legal counsel for corporate and individual needs.", icon: <Users className="w-5 h-5" /> },
            { name: "Swift Logistics", owner: "Segun Arinze", desc: "Reliable global shipping and supply chain management.", icon: <Briefcase className="w-5 h-5" /> },
          ].map((biz, i) => (
            <div key={i} className="group relative p-6 rounded-2xl border border-rose-pink/10 bg-white hover:border-rose-pink hover:shadow-[0_0_20px_rgba(255,20,147,0.15)] transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-xl bg-royal-purple/5 flex items-center justify-center text-royal-purple group-hover:bg-royal-purple group-hover:text-white transition-all">
                  {biz.icon}
                </div>
                <div className="text-[8px] font-bold text-gold border border-gold px-2 py-0.5 rounded-full uppercase tracking-widest">Verified Alumnus</div>
              </div>
              <h3 className="text-lg font-serif font-bold text-royal-purple mb-1">{biz.name}</h3>
              <p className="text-[10px] text-rose-pink font-bold uppercase tracking-widest mb-3">{biz.owner}</p>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">{biz.desc}</p>
              <div className="flex gap-4">
                <button className="text-[9px] font-bold text-royal-purple hover:text-rose-pink transition-colors uppercase tracking-widest">Connect</button>
                <button className="text-[9px] font-bold text-royal-purple hover:text-rose-pink transition-colors uppercase tracking-widest">Website</button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-auto pt-12 text-center">
          <p className="text-[10px] text-slate-400 font-serif italic">For directory listings, visit udosa04.org/directory</p>
        </div>
      </Page>

      {/* Floating Action Button */}
      <button 
        onClick={handlePrint}
        className="no-print fixed bottom-8 right-8 bg-royal-purple text-white p-4 rounded-full shadow-[0_10px_30px_rgba(75,0,130,0.4)] hover:bg-rose-pink transition-all duration-500 flex items-center gap-3 group z-50 border border-white/20"
        title="Export E-Book to PDF"
      >
        <Printer className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-serif font-bold tracking-widest text-xs">
          EXPORT PDF
        </span>
      </button>
    </div>
  );
}
