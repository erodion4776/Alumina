/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Printer, Mail, Phone, Globe } from 'lucide-react';

const Page = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`page-a4 p-12 flex flex-col ${className}`}>
    {children}
  </div>
);

const GoldDivider = () => <div className="w-24 h-1 bg-gold my-6" />;

export default function App() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen py-10 print:py-0">
      {/* Cover Page */}
      <Page className="justify-center items-center text-center p-0">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523050335392-93851179ae22?auto=format&fit=crop&q=80&w=1000" 
            alt="University Campus" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center px-12">
          <h2 className="text-gold font-serif italic text-2xl mb-4">Class of 2024</h2>
          <h1 className="text-6xl font-serif font-bold text-charcoal leading-tight mb-8">
            St. Andrews University<br />Alumni E-Book
          </h1>
          <GoldDivider />
          <p className="text-xl tracking-[0.2em] uppercase font-light text-stone-500">
            Celebrating Decades of Excellence
          </p>
        </div>
        <div className="absolute bottom-12 left-0 right-0 text-center">
          <p className="text-sm font-medium text-stone-400 uppercase tracking-widest">Official Publication • Volume XII</p>
        </div>
      </Page>

      {/* Table of Contents */}
      <Page>
        <h2 className="text-4xl font-serif mb-12 border-b border-stone-100 pb-4">Table of Contents</h2>
        <div className="space-y-6">
          {[
            { title: "Message from the Chairman", page: "03" },
            { title: "Editor's Note", page: "04" },
            { title: "The Golden Era: A Retrospective", page: "05" },
            { title: "Alumni Spotlight: Global Impact", page: "07" },
            { title: "Campus Memories Gallery", page: "09" },
            { title: "Business Directory & Partners", page: "11" },
            { title: "Closing Remarks", page: "12" },
          ].map((item, i) => (
            <div key={i} className="flex items-baseline group cursor-default">
              <span className="text-gold font-serif italic text-xl mr-4">{item.page}</span>
              <span className="text-lg font-medium text-charcoal flex-grow border-b border-dotted border-stone-300 pb-1">
                {item.title}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-auto pt-12">
          <img 
            src="https://images.unsplash.com/photo-1541339907198-e08756edd811?auto=format&fit=crop&q=80&w=800" 
            alt="Library" 
            className="w-full h-64 object-cover grayscale opacity-50 rounded-sm"
            referrerPolicy="no-referrer"
          />
        </div>
      </Page>

      {/* Chairman Page */}
      <Page>
        <div className="grid grid-cols-12 gap-12 h-full">
          <div className="col-span-4">
            <div className="aspect-[3/4] bg-stone-100 overflow-hidden rounded-sm border-4 border-white shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600" 
                alt="Chairman" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-serif font-bold">Dr. Arthur Sterling</h3>
              <p className="text-gold text-sm uppercase tracking-wider">Chairman of the Board</p>
            </div>
          </div>
          <div className="col-span-8 flex flex-col">
            <h2 className="text-5xl font-serif italic mb-8">Message from the Chairman</h2>
            <GoldDivider />
            <div className="text-stone-600 leading-relaxed space-y-4 text-lg italic font-light">
              <p>
                "As we look back on the journey of our alumni, we see more than just professional success; we see a legacy of character and community. Our university has always been a crucible for leadership, and this E-Book serves as a testament to the enduring spirit of our graduates."
              </p>
              <p>
                "It is my honor to present this collection of stories, memories, and achievements. May it inspire the next generation to reach even higher."
              </p>
            </div>
            <div className="mt-auto">
              <p className="font-serif text-2xl">Arthur Sterling</p>
              <p className="text-stone-400 text-sm">March 2024</p>
            </div>
          </div>
        </div>
      </Page>

      {/* Editor Page */}
      <Page>
        <div className="grid grid-cols-12 gap-12 h-full">
          <div className="col-span-8 flex flex-col order-2 md:order-1">
            <h2 className="text-5xl font-serif italic mb-8">Editor's Note</h2>
            <GoldDivider />
            <div className="text-stone-600 leading-relaxed space-y-4">
              <p>
                Compiling this year's Alumni E-Book has been a labor of love. We reached out to graduates across six continents to capture the diverse paths our alumni have taken. From tech innovators in Silicon Valley to humanitarian workers in Sub-Saharan Africa, the breadth of impact is truly staggering.
              </p>
              <p>
                This publication isn't just a directory; it's a living history. We've included rare archival photos and personal essays that we hope will transport you back to your days on campus.
              </p>
              <p>
                Thank you to everyone who contributed their time and stories to make this edition possible.
              </p>
            </div>
            <div className="mt-auto">
              <p className="font-serif text-2xl">Eleanor Vance</p>
              <p className="text-stone-400 text-sm">Chief Editor, Class of '12</p>
            </div>
          </div>
          <div className="col-span-4 order-1 md:order-2">
            <div className="aspect-square bg-stone-100 overflow-hidden rounded-full border-8 border-stone-50 shadow-inner">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600" 
                alt="Editor" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </Page>

      {/* Article Layout */}
      <Page>
        <div className="mb-10">
          <p className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-2">Feature Article</p>
          <h2 className="text-5xl font-serif leading-tight">The Evolution of Our Campus Architecture</h2>
          <p className="text-stone-400 mt-2 italic">By Prof. Julian Thorne, Dept. of History</p>
        </div>
        <div className="grid grid-cols-2 gap-10 text-stone-700 leading-relaxed text-sm">
          <div className="space-y-4">
            <p className="first-letter:text-5xl first-letter:font-serif first-letter:float-left first-letter:mr-3 first-letter:text-gold">
              The stones of St. Andrews tell a story that spans over a century. From the neo-gothic spires of the original Founders Hall to the sleek, glass-and-steel curves of the new Innovation Hub, our campus has always reflected the zeitgeist of its era.
            </p>
            <p>
              Architectural historians often point to the 1950s expansion as a turning point. It was then that the university embraced modernism, signaling a shift towards a more progressive, science-oriented curriculum.
            </p>
            <div className="py-6 border-y border-stone-100 my-6">
              <blockquote className="text-2xl font-serif italic text-charcoal text-center leading-snug">
                "Architecture is the silent witness to our collective growth."
              </blockquote>
            </div>
            <p>
              Walking through the Quad today, one can see the seamless integration of these styles. The way the ivy climbs both the ancient brick and the modern concrete serves as a metaphor for our institution's ability to evolve while remaining rooted in tradition.
            </p>
          </div>
          <div className="space-y-4">
            <img 
              src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800" 
              alt="Architecture" 
              className="w-full h-48 object-cover rounded-sm mb-4"
              referrerPolicy="no-referrer"
            />
            <p>
              The preservation efforts led by the Alumni Association in the late 90s ensured that the 'Old Wing' didn't just survive but thrived. Today, it houses some of our most advanced research labs, proving that old spaces can indeed learn new tricks.
            </p>
            <p>
              As we look to the future, the planned 'Sustainability Plaza' promises to be the next landmark. It will feature vertical gardens and solar-integrated pathways, continuing our legacy of architectural innovation.
            </p>
            <p>
              In conclusion, the campus is not just a collection of buildings; it is a living organism that breathes with the energy of its students and the memories of its alumni.
            </p>
          </div>
        </div>
      </Page>

      {/* Photo Gallery */}
      <Page>
        <h2 className="text-4xl font-serif mb-8 text-center">Campus Memories</h2>
        <div className="grid grid-cols-3 gap-4 flex-grow">
          {[
            { src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94", cap: "The Annual Spring Gala" },
            { src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846", cap: "Late Night Study Sessions" },
            { src: "https://images.unsplash.com/photo-1525921429624-479b6a29d84c", cap: "Graduation Day 2023" },
            { src: "https://images.unsplash.com/photo-1529070538774-1843cb3265df", cap: "Inter-Collegiate Sports" },
            { src: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a", cap: "Founders Day Parade" },
            { src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18", cap: "Alumni Homecoming" },
          ].map((img, i) => (
            <div key={i} className="flex flex-col">
              <div className="aspect-square bg-stone-100 overflow-hidden rounded-sm">
                <img 
                  src={`${img.src}?auto=format&fit=crop&q=80&w=400`} 
                  alt={img.cap} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-[10px] uppercase tracking-widest text-stone-400 mt-2 text-center">{img.cap}</p>
            </div>
          ))}
        </div>
      </Page>

      {/* Business Advert Section */}
      <Page>
        <h2 className="text-4xl font-serif mb-2">Alumni Business Directory</h2>
        <p className="text-stone-400 mb-8 italic">Support our global network of entrepreneurs</p>
        <div className="grid grid-cols-2 gap-8">
          {[
            { name: "Vance & Co. Legal", owner: "Sarah Vance ('05)", desc: "Specializing in corporate law and intellectual property rights.", icon: <Globe className="w-4 h-4" /> },
            { name: "Green Horizon Tech", owner: "Mark Chen ('10)", desc: "Sustainable energy solutions for modern urban infrastructures.", icon: <Mail className="w-4 h-4" /> },
            { name: "The Artisan Bakery", owner: "Elena Rossi ('15)", desc: "Traditional sourdough and pastries delivered fresh daily.", icon: <Phone className="w-4 h-4" /> },
            { name: "Stellar Design Studio", owner: "James Miller ('18)", desc: "Award-winning branding and digital experience design.", icon: <Globe className="w-4 h-4" /> },
          ].map((ad, i) => (
            <div key={i} className="border border-stone-100 p-6 flex flex-col bg-stone-50/30 rounded-sm">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 bg-gold/10 rounded flex items-center justify-center text-gold">
                  {ad.icon}
                </div>
                <span className="text-[10px] font-bold text-gold uppercase tracking-tighter border border-gold px-2 py-0.5">Partner</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-charcoal">{ad.name}</h3>
              <p className="text-xs text-stone-400 uppercase tracking-widest mb-3">Founded by {ad.owner}</p>
              <p className="text-sm text-stone-600 mb-6 flex-grow">{ad.desc}</p>
              <div className="flex gap-4 mt-auto">
                <button className="text-[10px] uppercase tracking-widest font-bold text-gold hover:underline">Contact</button>
                <button className="text-[10px] uppercase tracking-widest font-bold text-gold hover:underline">Website</button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-auto pt-12 text-center border-t border-stone-100">
          <p className="text-xs text-stone-400 italic">Interested in advertising? Contact alumni-office@standrews.edu</p>
        </div>
      </Page>

      {/* Floating Action Button */}
      <button 
        onClick={handlePrint}
        className="no-print fixed bottom-8 right-8 bg-charcoal text-white p-4 rounded-full shadow-2xl hover:bg-gold transition-colors duration-300 flex items-center gap-2 group z-50"
        title="Print to PDF"
      >
        <Printer className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-medium">
          Print to PDF
        </span>
      </button>
    </div>
  );
}
