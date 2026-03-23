/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Download, Mail, Phone, Globe, Award, Users, BookOpen, Camera, Briefcase, Quote } from 'lucide-react';

const LOGO_URL = "https://i.ibb.co/DHC0kvzR/1000773566-removebg-preview-1.png";

const Header = () => (
  <div className="bg-purple w-full h-20 flex items-center justify-center px-8 shrink-0">
    <img src={LOGO_URL} alt="UDOSA Logo" className="h-14 object-contain" referrerPolicy="no-referrer" />
  </div>
);

const Footer = () => (
  <div className="mt-auto py-4 px-8 border-t border-stone-100 flex justify-center shrink-0">
    <p className="text-[10px] font-serif tracking-[0.3em] text-gold uppercase font-bold">
      UDOSA 04 | Celebrating 20 Years
    </p>
  </div>
);

const Page = ({ children, className = "", showHeader = true, showFooter = true }: { children: React.ReactNode; className?: string; showHeader?: boolean; showFooter?: boolean }) => (
  <div className="page-a4">
    {showHeader && <Header />}
    <div className={`flex-grow flex flex-col p-12 ${className}`}>
      {children}
    </div>
    {showFooter && <Footer />}
  </div>
);

export default function App() {
  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="min-h-screen py-10 print:py-0 bg-stone-200 print:bg-white">
      {/* 1. Cover Page */}
      <div className="page-a4 relative">
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
      </div>

      {/* 2. Table of Contents */}
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
            { title: "Two Decades: A Retrospective", page: "08", icon: <Users className="w-5 h-5" /> },
            { title: "Class of 2004 Directory", page: "09", icon: <Users className="w-5 h-5" /> },
            { title: "Throwback Gallery", page: "10", icon: <Camera className="w-5 h-5" /> },
            { title: "Alumni Business Directory", page: "11", icon: <Briefcase className="w-5 h-5" /> },
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
      </Page>

      {/* 3. Chairman's Speech */}
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
      </Page>

      {/* 4. Editor's Note */}
      <Page className="bg-slate-50">
        <div className="max-w-3xl mx-auto flex flex-col h-full">
          <div className="text-center mb-16">
            <p className="text-gold font-serif tracking-[0.3em] uppercase text-xs mb-4">Editorial Board</p>
            <h2 className="text-7xl font-serif font-black text-purple">
              Editor's <span className="text-pink italic">Note</span>
            </h2>
            <div className="w-24 h-1 bg-pink mx-auto mt-6" />
          </div>
          <div className="grid grid-cols-1 gap-10 text-slate-700 leading-[2] text-xl text-justify font-serif">
            <p className="first-letter:text-7xl first-letter:font-black first-letter:text-purple first-letter:float-left first-letter:mr-4 first-letter:leading-none">
              Compiling this anniversary edition has been a journey through time. Sifting through old photographs, reading through shared memories, and witnessing the incredible professional trajectories of our classmates has been nothing short of inspiring.
            </p>
            <p>
              This magazine is designed to be a keepsake—a digital artifact that captures the essence of who we were and who we have become. From the feature articles reflecting on our school days to the business directory showcasing our entrepreneurial spirit, every page is a celebration of "Set 04".
            </p>
            <p>
              Thank you to everyone who contributed their stories and photos. This is our legacy. We hope these pages bring a smile to your face and a warmth to your heart as we look back on twenty years of excellence.
            </p>
          </div>
          <div className="mt-auto pt-20 flex flex-col items-center">
            <div className="relative">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Signature_of_John_Hancock.png" alt="Signature" className="h-20 opacity-60 grayscale invert" />
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-pink/10 rounded-full blur-xl" />
            </div>
            <div className="w-48 h-px bg-gold/30 my-6" />
            <p className="font-serif font-bold text-purple text-2xl">Ifeoma Azikiwe</p>
            <p className="text-xs text-pink font-bold uppercase tracking-[0.3em] mt-2">Chief Editor, UDOSA 04</p>
          </div>
        </div>
      </Page>

      {/* 5. Karate Article - Page 1 */}
      <Page>
        <div className="flex flex-col h-full">
          <div className="w-full h-64 bg-slate-100 rounded-3xl overflow-hidden mb-6 shadow-2xl relative">
            <img 
              src="https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&q=80&w=1200" 
              alt="Karate Hero" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple/60 to-transparent" />
            <div className="absolute bottom-6 left-8">
              <p className="text-gold font-serif italic text-lg mb-1">Feature Article</p>
              <h2 className="text-4xl font-serif font-black text-white uppercase tracking-tighter">The Art of <span className="text-pink italic">Discipline</span></h2>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-5xl font-serif font-black text-purple leading-tight">
              The Importance and <br />Benefits of <span className="text-pink italic">Karate</span>
            </h2>
            <p className="text-gold font-bold uppercase tracking-[0.3em] mt-2 text-xs">By Ehima Oziegbe, Second-Degree Black Belt, NKA, SKI</p>
          </div>

          <div className="flex-grow">
            <div className="columns-3 gap-8 text-slate-700 leading-relaxed text-[14px] font-serif text-justify">
              <p className="mb-4">
                <span className="text-6xl font-black text-purple float-left mr-3 leading-[0.8] mt-2">A</span>s a second-degree black belt with the Nigeria Karate Association (NKA) and Shotokan Karate International (SKI), I’ve spent years training in the art of karate, witnessing its transformative power firsthand. Karate is more than just a martial art—it’s a way of life that builds strength, sharpens the mind, and fosters a sense of community. Whether you’re a beginner stepping onto the dojo floor for the first time or a seasoned practitioner, the benefits of karate ripple through every aspect of your existence.
              </p>

              <div className="[column-span:all] my-8 py-8 border-y-2 border-pink/20 bg-pink/5 text-center relative">
                <Quote className="w-8 h-8 text-pink mb-3 mx-auto opacity-30" />
                <p className="text-3xl font-serif italic text-pink leading-relaxed max-w-2xl mx-auto">
                  "Karate is more than just a martial art—it’s a way of life"
                </p>
              </div>

              <p className="mb-4">
                Let me share why this ancient discipline remains so vital today. Physical Fitness and Self-Defence: Karate is a full-body workout that hones strength, flexibility, and endurance. Every punch, kick, and block engage your muscles, improves coordination, and boosts cardiovascular health. Training sessions often combine high-intensity drills with precise techniques, making it an excellent way to stay fit while learning practical skills.
              </p>
              <p className="mb-4">
                Beyond fitness, karate equips you with the ability to protect yourself. As someone who has spent countless hours perfecting katas and sparring, I can attest to the confidence that comes with knowing you can defend yourself if needed. Karate teaches you not just how to strike but how to stay aware, anticipate threats, and respond with control. This empowerment is invaluable in today’s world.
              </p>
            </div>
          </div>
        </div>
      </Page>

      {/* 6. Karate Article - Page 2 */}
      <Page>
        <div className="flex flex-col h-full">
          <div className="flex gap-8 mb-8">
            <div className="w-1/2 h-40 bg-slate-100 rounded-2xl overflow-hidden shadow-xl transform -rotate-1 border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?auto=format&fit=crop&q=80&w=600" 
                alt="Karate Action 1" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="w-1/2 h-40 bg-slate-100 rounded-2xl overflow-hidden shadow-xl transform rotate-1 border-4 border-white mt-4">
              <img 
                src="https://images.unsplash.com/photo-1509564324749-4739763d000c?auto=format&fit=crop&q=80&w=600" 
                alt="Karate Action 2" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="columns-3 gap-8 text-slate-700 leading-relaxed text-[14px] font-serif text-justify flex-grow">
            <p className="mb-4">
              Mental Discipline and Resilience: Karate is as much a mental journey as it is a physical one. The dojo demands focus, patience, and perseverance. Learning complex techniques and memorizing katas sharpens your memory and concentration. As a black belt, I’ve learned that progress in karate comes through consistent effort and the humility to embrace mistakes as opportunities to grow.
            </p>
            <p className="mb-4">
              The discipline cultivated in karate extends far beyond the dojo. It helps you tackle challenges in everyday life—whether it’s staying calm under pressure at work or pushing through personal setbacks. Karate instills a mindset of resilience, teaching you to rise after every fall, both literally and figuratively.
            </p>
            <p className="mb-4">
              Emotional Balance and Confidence: One of karate’s greatest gifts is emotional strength. Training provides a healthy outlet for stress, channeling energy into focused movement. The rhythmic flow of practicing techniques can feel meditative, helping you find balance in a hectic world. For me, stepping into the dojo is like hitting a reset button—it clears my mind and restores my sense of purpose.
            </p>
            <p className="mb-4">
              Karate also builds unshakable confidence. As you progress through belt ranks, you gain a sense of achievement that boosts self-esteem. This isn’t about arrogance but about knowing your worth and capabilities. I’ve seen shy beginners transform into poised, self-assured individuals, carrying themselves with quiet strength.
            </p>
            <p className="mb-4">
              Community and Respect: Karate fosters a deep sense of camaraderie. In the dojo, we train as a family, supporting each other’s growth. As an NKA and SKI practitioner, I’ve had the privilege of connecting with martial artists across Nigeria and beyond, united by a shared passion. This sense of belonging is especially meaningful in a world that can sometimes feel divided.
            </p>
          </div>
        </div>
      </Page>

      {/* 7. Karate Article - Page 3 */}
      <Page>
        <div className="flex flex-col h-full">
          <div className="columns-3 gap-8 text-slate-700 leading-relaxed text-[14px] font-serif text-justify flex-grow">
            <p className="mb-4">
              Respect is at the core of karate’s philosophy. From bowing to your sensei to honouring your training partners, every interaction is steeped in mutual respect. These values shape you into a better person—someone who listens, empathizes, and uplifts others. For young people especially, karate provides a moral compass, guiding them toward integrity and compassion.
            </p>
            <p className="mb-4">
              A Lifelong Journey: Karate is not just for the young or the athletic—it’s for everyone. Whether you’re a child learning discipline, an adult seeking balance, or a senior staying active, karate adapts to your needs. As a second-degree black belt, I’m still learning, still growing. Each training session brings new insights, reminding me that the path of karate is a lifelong journey of self-improvement.
            </p>
            <p className="mb-4">
              In a world that often feels chaotic, karate offers structure, purpose, and peace. It strengthens your body, sharpens your mind, and enriches your spirit. If you’re considering starting or continuing your karate journey, know this: the dojo is a place where you’ll discover not just the art of fighting, but the art of living. So, step onto the mat. Tie your belt. And begin. The benefits of karate are waiting for you.
            </p>
          </div>

          {/* Meet the Author Box */}
          <div className="mt-auto p-6 bg-purple/5 rounded-3xl border-2 border-purple/10 flex items-center gap-6">
            <div className="w-20 h-20 rounded-full border-2 border-gold p-1 shrink-0">
              <div className="w-full h-full rounded-full bg-slate-200 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" 
                  alt="Ehima Oziegbe" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-serif font-bold text-purple mb-1">Meet the Author</h3>
              <p className="text-[13px] text-slate-600 leading-relaxed font-serif italic">
                Ehima Oziegbe is a second-degree black belt with the Nigeria Karate Association (NKA) and Shotokan Karate International (SKI). Passionate about sharing the transformative power of karate, Ehima continues to train, teach, and inspire others through this timeless martial art.
              </p>
            </div>
          </div>
        </div>
      </Page>

      {/* 8. Feature Article */}
      <Page>
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-grow bg-gold/30" />
            <p className="text-pink font-serif italic text-2xl shrink-0">Special Anniversary Feature</p>
            <div className="h-px flex-grow bg-gold/30" />
          </div>
          <h2 className="text-8xl font-serif font-black text-purple leading-[0.85] uppercase tracking-tighter text-center">
            Two Decades <br /><span className="text-pink">of Impact</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-16 text-slate-600 leading-relaxed text-base">
          <div className="space-y-8">
            <p className="drop-cap text-lg">
              It has been exactly twenty years since the Class of 2004 bid farewell to the familiar corridors of University of Benin Demonstration Secondary School. The world we entered then was vastly different from the one we inhabit today, yet the values instilled in us remain our North Star.
            </p>
            <p>
              The journey from the classrooms of Benin to the various global stages we now occupy has been marked by resilience and innovation. Our set has produced leaders in medicine, technology, law, and the arts, each carrying the UDOSA torch with distinction.
            </p>
            <div className="py-12 px-10 bg-gradient-to-br from-purple to-[#3b0764] rounded-3xl my-12 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink/10 rounded-full -mr-16 -mt-16 blur-3xl" />
              <Quote className="w-12 h-12 text-gold mb-6 opacity-30" />
              <p className="text-2xl font-serif italic text-white leading-relaxed relative z-10">
                "We didn't just graduate; we launched a movement of excellence that continues to ripple across the globe."
              </p>
              <p className="text-gold font-bold text-xs uppercase tracking-widest mt-6">— Class of 2004 Mantra</p>
            </div>
            <p>
              Reflecting on our time at UBDS, it wasn't just the academic rigor that shaped us, but the community. The friendships formed during those formative years have proven to be unbreakable, surviving the tests of time and distance.
            </p>
          </div>
          <div className="space-y-8">
            <div className="aspect-[3/4] bg-slate-100 rounded-2xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border-8 border-white mb-10 transform rotate-2">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800" 
                alt="Alumni" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="font-serif text-lg italic text-purple">
              "As we look to the next twenty years, the challenge remains the same: to lead with integrity and to lift as we climb."
            </p>
            <p>
              The UDOSA 04 network is more than just a social group; it is a powerful ecosystem of support and collaboration. This milestone is not just a look back, but a call to action. How will we continue to define excellence in the decades to come?
            </p>
            <p>
              The answer lies in the same spirit that defined us in 2004—a spirit of curiosity, ambition, and unwavering camaraderie. The legacy of Set 04 is still being written, and if the first two decades are any indication, the best is yet to come.
            </p>
          </div>
        </div>
      </Page>

      {/* 9. Class Directory */}
      <Page className="bg-purple text-white">
        <div className="mb-12 flex justify-between items-start">
          <div>
            <h2 className="text-6xl font-serif font-black text-gold uppercase tracking-tighter">Class Directory</h2>
            <p className="text-pink font-serif italic text-xl">The Legends of 2004</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl text-right">
            <p className="text-[10px] text-gold font-bold uppercase tracking-widest">Total Alumni</p>
            <p className="text-3xl font-black text-white">142</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-x-12 gap-y-4 text-[11px] font-medium tracking-wide">
          {Array.from({ length: 45 }).map((_, i) => (
            <div key={i} className="flex justify-between border-b border-white/10 pb-1 group hover:bg-white/5 px-2 transition-colors">
              <span className="text-gold/60 mr-2">{String(i + 1).padStart(3, '0')}</span>
              <span className="flex-grow uppercase">Alumnus Name Placeholder</span>
              <span className="text-pink font-bold italic">★</span>
            </div>
          ))}
        </div>
        <div className="mt-auto pt-12 text-center border-t border-white/10">
          <p className="text-[10px] text-gold/50 uppercase tracking-[0.4em]">Names listed in alphabetical order • UDOSA 04 Official Records</p>
        </div>
      </Page>

      {/* 10. Throwback Gallery */}
      <Page>
        <div className="mb-12 flex justify-between items-end border-b-4 border-purple pb-6">
          <div>
            <h2 className="text-6xl font-serif font-black text-purple uppercase tracking-tighter">Throwback</h2>
            <p className="text-pink font-serif italic text-2xl">Moments in Time</p>
          </div>
          <div className="text-right">
            <div className="flex gap-2 justify-end mb-2">
              <div className="w-3 h-3 rounded-full bg-gold" />
              <div className="w-3 h-3 rounded-full bg-pink" />
              <div className="w-3 h-3 rounded-full bg-purple" />
            </div>
            <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Curated by the Social Committee</p>
          </div>
        </div>
        <div className="grid grid-cols-4 grid-rows-4 gap-6 flex-grow">
          <div className="col-span-2 row-span-2 border-4 border-gold p-2 shadow-2xl transform -rotate-1">
            <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=600" alt="T1" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="col-span-2 row-span-1 border-4 border-pink p-2 shadow-xl transform rotate-1">
            <img src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&q=80&w=600" alt="T2" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="col-span-1 row-span-1 border-4 border-purple p-2 shadow-lg">
            <img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=600" alt="T3" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="col-span-1 row-span-2 border-4 border-gold p-2 shadow-2xl transform rotate-2">
            <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=600" alt="T4" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="col-span-2 row-span-2 border-4 border-pink p-2 shadow-2xl transform -rotate-2">
            <img src="https://images.unsplash.com/photo-1525921429624-479b6a29d84c?auto=format&fit=crop&q=80&w=600" alt="T5" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="col-span-1 row-span-1 border-4 border-purple p-2 shadow-lg transform rotate-3">
            <img src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80&w=600" alt="T6" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
        </div>
      </Page>

      {/* 11. Business Showcase */}
      <Page>
        <div className="mb-16 text-center">
          <h2 className="text-6xl font-serif font-black text-purple mb-4">Business Directory</h2>
          <div className="flex items-center justify-center gap-6">
            <div className="w-20 h-1 bg-gold" />
            <p className="text-pink font-serif italic text-2xl">Supporting Our Own</p>
            <div className="w-20 h-1 bg-gold" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10">
          {[
            { name: "Okoro Medical Center", owner: "Dr. Emeka Okoro", desc: "Premium healthcare services with a focus on family wellness and advanced diagnostics.", icon: <Award className="w-6 h-6" /> },
            { name: "Azikiwe Creative Agency", owner: "Ifeoma Azikiwe", desc: "Full-service digital marketing, brand storytelling, and high-end visual production.", icon: <BookOpen className="w-6 h-6" /> },
            { name: "Benin Tech Hub", owner: "Tunde Williams", desc: "Empowering the next generation of African developers through training and incubation.", icon: <Globe className="w-6 h-6" /> },
            { name: "Rose Garden Events", owner: "Blessing Adebayo", desc: "Exquisite event planning, luxury floral designs, and bespoke celebratory experiences.", icon: <Camera className="w-6 h-6" /> },
          ].map((biz, i) => (
            <div key={i} className="pink-glow p-10 rounded-[2rem] border-2 border-pink/10 bg-white flex flex-col shadow-2xl hover:scale-[1.02] transition-transform duration-500">
              <div className="flex justify-between items-start mb-8">
                <div className="w-16 h-16 rounded-2xl bg-purple text-gold flex items-center justify-center shadow-lg shadow-purple/30">
                  {biz.icon}
                </div>
                <div className="text-[10px] font-bold text-gold border-2 border-gold px-4 py-1 rounded-full uppercase tracking-widest bg-purple">Verified Alumnus</div>
              </div>
              <h3 className="text-3xl font-serif font-bold text-purple mb-2">{biz.name}</h3>
              <p className="text-xs text-pink font-bold uppercase tracking-[0.2em] mb-6">{biz.owner}</p>
              <p className="text-base text-slate-500 leading-relaxed mb-10 flex-grow font-serif italic">{biz.desc}</p>
              <div className="flex gap-6 mt-auto">
                <button className="flex-grow bg-purple text-white py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-pink transition-colors">Connect</button>
                <button className="flex-grow border-2 border-purple text-purple py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-purple hover:text-white transition-all">Website</button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-auto pt-16 text-center">
          <div className="inline-block px-8 py-3 bg-slate-50 rounded-full border border-slate-100">
            <p className="text-xs text-slate-400 font-serif italic">For directory listings, visit <span className="text-purple font-bold not-italic">udosa04.org/directory</span></p>
          </div>
        </div>
      </Page>

      {/* Floating Action Button */}
      <button 
        onClick={handleDownload}
        className="no-print fixed bottom-10 right-10 bg-purple text-white px-8 py-5 rounded-full shadow-[0_20px_50px_rgba(88,28,135,0.5)] hover:bg-pink hover:scale-110 transition-all duration-500 flex items-center gap-4 group z-50 border-2 border-white/20"
      >
        <Download className="w-7 h-7 animate-bounce group-hover:animate-none" />
        <span className="font-serif font-bold tracking-[0.2em] text-sm uppercase">
          Download E-Book (PDF)
        </span>
      </button>
    </div>
  );
}
