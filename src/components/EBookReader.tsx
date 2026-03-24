import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, ChevronLeft, ChevronRight, Award, BookOpen, Activity, Brain, Search, Heart, Sun, Users, Camera, Briefcase, Quote, Mail, Phone, Globe, Eye, Wind, Droplets, Thermometer, Anchor } from 'lucide-react';

const LOGO_URL = "https://i.ibb.co/DHC0kvzR/1000773566-removebg-preview-1.png";

const WORD_SEARCH_WORDS = [
  "AGRICULTURE", "ASSIGNMENT", "BOARD", "CLASSROOM", "DESKS", 
  "EXAMINATION", "HOME ECONOMICS", "HOMEWORK", "MATHEMATICS", 
  "PROJECT", "SCHOOL", "SCHOOLSHOE", "STAFFROOM", "STOCKINGS", 
  "TEACHER", "TIMETABLE", "UNIFORM"
];

const WORD_SEARCH_GRID = [
  ['H', 'O', 'M', 'E', 'E', 'C', 'O', 'N', 'O', 'M', 'I', 'C', 'S', 'X', 'Y'],
  ['A', 'G', 'R', 'I', 'C', 'U', 'L', 'T', 'U', 'R', 'E', 'Z', 'A', 'B', 'C'],
  ['E', 'X', 'A', 'M', 'I', 'N', 'A', 'T', 'I', 'O', 'N', 'D', 'E', 'F', 'G'],
  ['M', 'A', 'T', 'H', 'E', 'M', 'A', 'T', 'I', 'C', 'S', 'H', 'I', 'J', 'K'],
  ['A', 'S', 'S', 'I', 'G', 'N', 'M', 'E', 'N', 'T', 'L', 'M', 'N', 'O', 'P'],
  ['S', 'T', 'A', 'F', 'F', 'R', 'O', 'O', 'M', 'Q', 'R', 'S', 'T', 'U', 'V'],
  ['S', 'C', 'H', 'O', 'O', 'L', 'S', 'H', 'O', 'E', 'W', 'X', 'Y', 'Z', 'A'],
  ['T', 'I', 'M', 'E', 'T', 'A', 'B', 'L', 'E', 'B', 'O', 'A', 'R', 'D', 'B'],
  ['S', 'T', 'O', 'C', 'K', 'I', 'N', 'G', 'S', 'D', 'E', 'S', 'K', 'S', 'X'],
  ['C', 'L', 'A', 'S', 'S', 'R', 'O', 'O', 'M', 'E', 'F', 'G', 'H', 'I', 'J'],
  ['H', 'O', 'M', 'E', 'W', 'O', 'R', 'K', 'K', 'L', 'M', 'N', 'O', 'P', 'Q'],
  ['T', 'E', 'A', 'C', 'H', 'E', 'R', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y'],
  ['P', 'R', 'O', 'J', 'E', 'C', 'T', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G'],
  ['U', 'N', 'I', 'F', 'O', 'R', 'M', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O'],
  ['S', 'C', 'H', 'O', 'O', 'L', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X']
];

const CAREERS_WORDS = [
  "ACTOR", "ARCHITECT", "ARTIST", "CHEF", "COACH", "DOCTOR", "ENGINEER", 
  "EVENT PLANNER", "FASHION DESIGNER", "FREELANCER", "INFLUENCER", "LAWYER", 
  "NURSE", "PHARMACIST", "POLICE", "SOLDIER", "TEACHER", "TRANSPORTER", "WRITER"
];

const CAREERS_GRID = [
  ['F', 'A', 'S', 'H', 'I', 'O', 'N', 'D', 'E', 'S', 'I', 'G', 'N', 'E', 'R'],
  ['R', 'E', 'V', 'E', 'N', 'T', 'P', 'L', 'A', 'N', 'N', 'E', 'R', 'A', 'B'],
  ['E', 'P', 'H', 'A', 'R', 'M', 'A', 'C', 'I', 'S', 'T', 'C', 'D', 'E', 'F'],
  ['E', 'I', 'N', 'F', 'L', 'U', 'E', 'N', 'C', 'E', 'R', 'G', 'H', 'I', 'J'],
  ['L', 'T', 'R', 'A', 'N', 'S', 'P', 'O', 'R', 'T', 'E', 'R', 'K', 'L', 'M'],
  ['A', 'R', 'C', 'H', 'I', 'T', 'E', 'C', 'T', 'N', 'O', 'P', 'Q', 'R', 'S'],
  ['N', 'U', 'R', 'S', 'E', 'T', 'E', 'A', 'C', 'H', 'E', 'R', 'T', 'U', 'V'],
  ['C', 'O', 'A', 'C', 'H', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F'],
  ['E', 'N', 'G', 'I', 'N', 'E', 'E', 'R', 'G', 'H', 'I', 'J', 'K', 'L', 'M'],
  ['R', 'A', 'R', 'T', 'I', 'S', 'T', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U'],
  ['D', 'O', 'C', 'T', 'O', 'R', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D'],
  ['L', 'A', 'W', 'Y', 'E', 'R', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'],
  ['P', 'O', 'L', 'I', 'C', 'E', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V'],
  ['S', 'O', 'L', 'D', 'I', 'E', 'R', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D'],
  ['A', 'C', 'T', 'O', 'R', 'W', 'R', 'I', 'T', 'E', 'R', 'E', 'F', 'G', 'H']
];

const RIDDLES = [
  { q: "What has keys but can't open locks?", a: "A piano" },
  { q: "What has to be broken before you can use it?", a: "An egg" },
  { q: "I’m tall when I’m young, and I’m short when I’m old. What am I?", a: "A candle" },
  { q: "What month of the year has 28 days?", a: "All of them" },
  { q: "What is full of holes but still holds water?", a: "A sponge" },
  { q: "What question can you never answer yes to?", a: "Are you asleep yet?" },
  { q: "What is always in front of you but can’t be seen?", a: "The future" },
  { q: "What color are the stairs in a yellow one-story house?", a: "There aren't any" },
  { q: "What can you break, even if you never pick it up or touch it?", a: "A promise" },
  { q: "What goes up but never comes down?", a: "Your age" },
  { q: "A man dies of old age on his 25th birthday. How?", a: "Born on Feb 29" },
  { q: "I have branches, but no fruit, trunk, or leaves. What am I?", a: "A bank" },
  { q: "What can’t talk but will reply when spoken to?", a: "An echo" },
  { q: "The more of this there is, the less you see. What is it?", a: "Darkness" },
  { q: "I follow you all day, but at night I’m gone. What am I?", a: "Your shadow" },
  { q: "What has a neck but no head?", a: "A bottle" },
  { q: "What has a thumb and four fingers, but is not a hand?", a: "A glove" },
  { q: "What has many teeth, but cannot bite?", a: "A comb" },
  { q: "What goes where you go, but stays where it is?", a: "A road" },
  { q: "What has one eye, but can’t see?", a: "A needle" },
  { q: "What has a head and a tail but no body?", a: "A coin" },
  { q: "What building has the most stories?", a: "The library" },
  { q: "What can travel the world without leaving its corner?", a: "A stamp" },
  { q: "What has hands, but can’t clap?", a: "A clock" },
  { q: "What has words, but never speaks?", a: "A book" }
];

const GALLERY_PHOTOS = [
  "https://i.ibb.co/GQ0cBV8N/1716787836207.jpg",
  "https://i.ibb.co/v4vZ7hDF/IMG-20250321-WA0074.jpg",
  "https://i.ibb.co/9m7JjMsH/toige-37.jpg",
  "https://i.ibb.co/5d1VcQh/IMG-20250306-WA0054-2.jpg",
  "https://i.ibb.co/gqBw69p/Screenshot-20250208-100512-Facebook.png",
  "https://i.ibb.co/TBx5vcyv/IMG-20230527-152546-192.jpg",
  "https://i.ibb.co/5ZG9PtR/FB-IMG-1708102178590.jpg",
  "https://i.ibb.co/v6BYYQH3/7d381bd4-25ed-4c06-85d2-e54306f300c4.jpg",
  "https://i.ibb.co/tfXKqkF/wx6n89.jpg",
  "https://i.ibb.co/kgYSVC0z/IMG20241205102822.jpg",
  "https://i.ibb.co/r2MTTqvL/IMG-1821-1.jpg",
  "https://i.ibb.co/JWrZXgnp/IMG-20191120-072210-1-2.jpg",
  "https://i.ibb.co/8n8zT5kR/IMG-20240521-080543-420.jpg",
  "https://i.ibb.co/0pDgpLy9/IMG-9094-1.jpg",
  "https://i.ibb.co/350S09WN/285318-AF-100-F-487-C-824-E-50-DC5314-B7-FA.jpg",
  "https://i.ibb.co/Dfn2SbBx/IMG-20250308-101418-4.jpg",
  "https://i.ibb.co/QtzyXF9/701-C2184-7-B61-4-C1-F-8936-61-A51-BF08405.jpg",
  "https://i.ibb.co/TMYDCZTD/IMG-20250409-WA0011-1.jpg",
  "https://i.ibb.co/0j1G5Hgx/IMG-0280-1.jpg",
  "https://i.ibb.co/0RxB0Br7/IMG-20241228-181727-517.jpg",
  "https://i.ibb.co/rGp6Y1Q9/20231230-145841-3.jpg"
];

const SOLIDARITY_PHOTOS = [
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

const GalleryItem = ({ src, number, name }: { src: string; number: number; name: string }) => {
  const [revealed, setRevealed] = useState(false);
  return (
    <div 
      className="relative group cursor-pointer overflow-hidden rounded-xl border-2 border-gold/30 shadow-lg transition-all duration-500 hover:scale-[1.02] hover:border-gold h-[240px]"
      onClick={() => setRevealed(!revealed)}
    >
      <img 
        src={src} 
        alt={`UDOSA Face ${number}`} 
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="absolute top-2 left-2 bg-gold text-purple w-8 h-8 rounded-full flex items-center justify-center font-black text-sm shadow-md z-10">
        {number}
      </div>
      
      <div className={`absolute inset-0 bg-purple/80 backdrop-blur-sm flex flex-col items-center justify-center p-4 transition-opacity duration-300 ${revealed ? 'opacity-100' : 'opacity-0 group-hover:opacity-40'}`}>
        <p className="text-gold text-[10px] uppercase tracking-widest font-bold mb-2">
          {revealed ? 'Revealed' : 'Click to Reveal'}
        </p>
        {revealed && (
          <p className="text-white font-serif font-bold text-lg text-center leading-tight">
            {name}
          </p>
        )}
      </div>
    </div>
  );
};

const Header = () => (
  <div className="bg-purple w-full h-20 flex items-center justify-center px-8 shrink-0">
    <img src={LOGO_URL} alt="UDOSA Logo" className="h-14 object-contain" referrerPolicy="no-referrer" />
  </div>
);

const Footer = ({ text = "UDOSA 04 | Celebrating 20 Years" }: { text?: string }) => (
  <div className="mt-auto py-4 px-8 border-t border-stone-100 flex justify-center shrink-0">
    <p className="text-[10px] font-serif tracking-[0.3em] text-gold uppercase font-bold">
      {text}
    </p>
  </div>
);

const Page = ({ children, className = "", showHeader = true, showFooter = true, footerText }: { children: React.ReactNode; className?: string; showHeader?: boolean; showFooter?: boolean; footerText?: string }) => (
  <div className="page-a4 overflow-hidden flex flex-col mx-auto bg-white shadow-2xl">
    {showHeader && <Header />}
    <div className={`flex-grow flex flex-col p-12 overflow-hidden ${className}`}>
      {children}
    </div>
    {showFooter && <Footer text={footerText} />}
  </div>
);

export const EBookReader: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [foundWords, setFoundWords] = useState<string[]>([]);

  const toggleWord = (word: string) => {
    setFoundWords(prev => 
      prev.includes(word) ? prev.filter(w => w !== word) : [...prev, word]
    );
  };

  const handleDownload = () => {
    window.print();
  };

  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, 32));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 0));

  const pages = [
    // 1. Cover Page
    <div className="page-a4 relative mx-auto shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-br from-purple via-[#3b0764] to-pink opacity-95 z-0" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-12">
        <div className="mb-12">
          <img src={LOGO_URL} alt="UDOSA Logo" className="h-48 object-contain mx-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]" referrerPolicy="no-referrer" />
        </div>
        <div className="space-y-2 mb-8">
          <h3 className="text-gold font-serif tracking-[0.4em] text-sm uppercase">University of Benin Demonstration Secondary School</h3>
          <div className="w-12 h-px bg-gold/30 mx-auto" />
        </div>
        <h1 className="text-9xl font-serif font-black text-gold mb-4 tracking-tighter drop-shadow-2xl">
          UDOSA 04
        </h1>
        <div className="w-32 h-1 bg-gold mb-10 mx-auto shadow-lg" />
        <h2 className="text-2xl font-serif italic text-white tracking-[0.2em] uppercase font-light leading-relaxed">
          CLASS OF 2004:<br />
          <span className="font-bold text-pink drop-shadow-sm">TWO DECADES OF EXCELLENCE</span>
        </h2>
        <div className="absolute bottom-24 left-0 right-0">
          <p className="text-gold/80 font-serif tracking-[0.5em] text-xs uppercase">20th Anniversary Commemorative Edition</p>
        </div>
      </div>
      <Footer />
    </div>,

    // 2. Table of Contents
    <Page className="bg-gradient-to-b from-pink/5 to-white">
      <div className="mb-16">
        <p className="text-pink font-serif italic text-xl mb-1">Inside this Edition</p>
        <h2 className="text-7xl font-serif font-black text-purple mb-4 tracking-tight">Contents</h2>
        <div className="w-24 h-2 bg-gold" />
      </div>
      <div className="space-y-10">
        {[
          { title: "The Chairman's Address", page: "03", icon: <Award className="w-5 h-5" /> },
          { title: "Editor's Perspective", page: "04", icon: <BookOpen className="w-5 h-5" /> },
          { title: "The Importance and Benefits of Karate", page: "05", icon: <Award className="w-5 h-5" /> },
          { title: "The Dark Side of Processed Sugar", page: "08", icon: <Activity className="w-5 h-5" /> },
          { title: "The UDOSA 04 Mind Gym", page: "13", icon: <Brain className="w-5 h-5" /> },
          { title: "UDOSA 04 Challenge", page: "15", icon: <Search className="w-5 h-5" /> },
          { title: "UDOSA 04 Careers", page: "16", icon: <Briefcase className="w-5 h-5" /> },
          { title: "The Power of Connection", page: "17", icon: <Heart className="w-5 h-5" /> },
          { title: "Finding Peace Amidst Storms", page: "19", icon: <Sun className="w-5 h-5" /> },
          { title: "Unlock Your Earning Potential", page: "21", icon: <Briefcase className="w-5 h-5" /> },
          { title: "WHO’S WHO? Face Challenge", page: "23", icon: <Camera className="w-5 h-5" /> },
          { title: "The Reveal: Answer Key", page: "26", icon: <Search className="w-5 h-5" /> },
          { title: "Two Decades: A Retrospective", page: "27", icon: <Users className="w-5 h-5" /> },
          { title: "Moments of Solidarity", page: "28", icon: <Heart className="w-5 h-5" /> },
          { title: "Class of 2004 Directory", page: "31", icon: <Users className="w-5 h-5" /> },
          { title: "Throwback Gallery", page: "32", icon: <Camera className="w-5 h-5" /> },
          { title: "Alumni Business Directory", page: "33", icon: <Briefcase className="w-5 h-5" /> },
        ].map((item, i) => (
          <div key={i} className="flex items-center group cursor-default">
            <div className="w-14 h-14 rounded-full bg-purple text-white flex items-center justify-center mr-8 shadow-lg shadow-purple/20">
              {item.icon}
            </div>
            <span className="text-2xl font-serif font-bold text-slate-800 flex-grow border-b-2 border-slate-100 pb-3 group-hover:border-pink transition-colors">
              {item.title}
            </span>
            <span className="text-3xl font-serif font-black text-pink ml-6">{item.page}</span>
          </div>
        ))}
      </div>
      <div className="mt-auto">
        <div className="p-10 bg-purple text-white rounded-3xl shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-pink/20 rounded-full -mr-16 -mt-16 blur-3xl" />
          <Quote className="w-10 h-10 text-gold mb-6 opacity-50" />
          <p className="text-lg italic font-serif leading-relaxed relative z-10">
            "Celebrating the bonds that were formed in the halls of University of Benin Demonstration Secondary School, and the excellence that followed."
          </p>
        </div>
      </div>
    </Page>,

    // 3. Chairman's Speech
    <Page>
      <div className="flex h-full gap-16">
        <div className="w-1/3 flex flex-col items-center">
          <div className="relative">
            <div className="w-56 h-56 rounded-2xl border-2 border-gold p-1 overflow-hidden shadow-2xl bg-white">
              <img 
                src="https://i.ibb.co/JwwLbzy4/IMG-20250204-WA0000.jpg" 
                alt="Chairman Owen Ojo" 
                className="w-full h-full object-cover rounded-xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-purple text-gold border-2 border-gold px-6 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] shadow-xl">
              Chairman
            </div>
          </div>
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-serif font-bold text-purple">Owen Ojo</h3>
            <p className="text-sm text-pink font-bold uppercase tracking-widest mt-2">Set of 2004</p>
            <div className="mt-8 space-y-2 text-slate-400 text-[10px] uppercase tracking-widest">
              <p>Leadership & Strategy</p>
              <p>Philanthropist</p>
              <p>UDOSA 04 Chairman</p>
            </div>
          </div>
        </div>
        <div className="w-2/3 flex flex-col">
          <div className="mb-4">
            <h2 className="text-5xl font-serif font-black text-purple leading-tight">
              A Message from <br />the <span className="text-pink italic">Chairman</span>
            </h2>
            <div className="w-20 h-1 bg-gold mt-2" />
          </div>
          <div className="space-y-3 text-slate-700 leading-relaxed text-[15px] font-serif">
            <p className="font-bold text-purple italic">Dear Fellow Alumni,</p>
            <p>
              It is with immense pride and a deep sense of gratitude that I address you all. Our time at the University of Benin Demonstration Secondary School was more than just an academic journey; it was the crucible that forged a lifelong community—a family that continues to stand strong two decades later.
            </p>
            <p>
              This past year has been a testament to our collective strength. From heartfelt reunions to impactful charitable contributions, your dedication to the UDOSA 04 platform has yielded tangible results. I am particularly moved by our scholarship program, which is already changing the lives of deserving students. 
            </p>
            <p>
              Furthermore, our recent contributions—including the installation of the water pump, the provision of first-aid kits, the complete renovation of the school’s football pitch, and the donation of soccer jerseys—have left an indelible mark on our alma mater.
            </p>
            <p>
              Looking ahead, we are committed to expanding our reach, hosting more inclusive reunions, and upholding the values we all cherish. I invite each of you to remain engaged—whether by volunteering your time, attending our events, or simply reaching out to reconnect with an old classmate.
            </p>
            <p>
              Together, let us keep the UDOSA 04 legacy burning bright.
            </p>
          </div>
          <div className="mt-auto pt-4 flex items-end justify-between">
            <div>
              <p className="font-serif italic text-slate-500 mb-1 text-sm">Warm regards,</p>
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Jon_Kirsch%27s_Signature.png" alt="Signature" className="h-10 opacity-60 grayscale invert mb-1" />
              <p className="font-serif font-bold text-purple text-lg">Owen Ojo</p>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest">Chairman, UDOSA 04</p>
            </div>
            <div className="w-16 h-16 border-2 border-gold/20 rounded-full flex items-center justify-center">
              <Award className="w-6 h-6 text-gold/30" />
            </div>
          </div>
        </div>
      </div>
    </Page>,
    // ... (Adding all other pages here)
  ];

  return (
    <div className="min-h-screen bg-stone-200 flex flex-col items-center justify-center p-4 md:p-12 pb-32 md:pb-12 overflow-hidden">
      {/* Page Indicator */}
      <div className="mb-8 flex items-center gap-6 bg-white px-8 py-3 rounded-full shadow-xl border border-gold/20">
        <p className="text-purple font-serif font-bold text-lg">
          Page <span className="text-pink">{currentPage + 1}</span> of <span className="text-gold">33</span>
        </p>
      </div>

      {/* Slide Viewer */}
      <div className="relative w-full max-w-[210mm] aspect-[210/297] flex items-center justify-center">
        {/* Previous Arrow */}
        <button 
          onClick={prevPage}
          disabled={currentPage === 0}
          className={`absolute -left-20 top-1/2 -translate-y-1/2 p-4 bg-white rounded-full shadow-2xl border-2 border-gold text-gold hover:bg-gold hover:text-white transition-all duration-300 z-50 disabled:opacity-30 disabled:cursor-not-allowed hidden xl:block`}
        >
          <ChevronLeft className="w-8 h-8" />
        </button>

        {/* Next Arrow */}
        <button 
          onClick={nextPage}
          disabled={currentPage === 32}
          className={`absolute -right-20 top-1/2 -translate-y-1/2 p-4 bg-white rounded-full shadow-2xl border-2 border-gold text-gold hover:bg-gold hover:text-white transition-all duration-300 z-50 disabled:opacity-30 disabled:cursor-not-allowed hidden xl:block`}
        >
          <ChevronRight className="w-8 h-8" />
        </button>

        {/* Mobile Controls */}
        <div className="xl:hidden absolute -bottom-16 left-0 right-0 flex justify-center gap-8 z-50">
          <button onClick={prevPage} disabled={currentPage === 0} className="p-4 bg-white rounded-full shadow-lg border border-gold text-gold disabled:opacity-30">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={nextPage} disabled={currentPage === 32} className="p-4 bg-white rounded-full shadow-lg border border-gold text-gold disabled:opacity-30">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="w-full h-full"
          >
            {/* Render the current page - I'll need to pass the full list of pages */}
            {/* For brevity in this thought, I'll implement the full list in the actual file */}
            <div className="w-full h-full">
               {/* Page content will be here */}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Floating Download Button */}
      <button 
        onClick={handleDownload}
        className="no-print fixed bottom-10 right-10 bg-purple text-white px-8 py-5 rounded-full shadow-[0_20px_50px_rgba(88,28,135,0.5)] hover:bg-pink hover:scale-110 transition-all duration-500 flex items-center gap-4 group z-[100] border-2 border-white/20"
      >
        <Download className="w-7 h-7 animate-bounce group-hover:animate-none" />
        <span className="font-serif font-bold tracking-[0.2em] text-sm uppercase">
          Download Full PDF
        </span>
      </button>

      {/* Hidden Print Container */}
      <div className="hidden print:block">
        {/* All pages rendered here for printing */}
      </div>
    </div>
  );
};
