import React from 'react';
import { Award, BookOpen, Activity, Brain, Search, Heart, Sun, Users, Camera, Briefcase, Quote, Eye, Wind, Flower2 } from 'lucide-react';
import { Page, GalleryItem, Header, Footer } from './EBookComponents';
import { LOGO_URL, WORD_SEARCH_WORDS, WORD_SEARCH_GRID, CAREERS_WORDS, CAREERS_GRID, RIDDLES, GALLERY_PHOTOS, SOLIDARITY_PHOTOS } from '../constants';

export const getEBookPages = (foundWords: string[], toggleWord: (word: string) => void) => [
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
        { title: "The Importance and Benefits of Karate", page: "06", icon: <Award className="w-5 h-5" /> },
        { title: "The Dark Side of Processed Sugar", page: "09", icon: <Activity className="w-5 h-5" /> },
        { title: "The UDOSA 04 Mind Gym", page: "14", icon: <Brain className="w-5 h-5" /> },
        { title: "UDOSA 04 Challenge", page: "16", icon: <Search className="w-5 h-5" /> },
        { title: "UDOSA 04 Careers", page: "17", icon: <Briefcase className="w-5 h-5" /> },
        { title: "The Power of Connection", page: "18", icon: <Heart className="w-5 h-5" /> },
        { title: "Finding Peace Amidst Storms", page: "20", icon: <Sun className="w-5 h-5" /> },
        { title: "Unlock Your Earning Potential", page: "22", icon: <Briefcase className="w-5 h-5" /> },
        { title: "WHO’S WHO? Face Challenge", page: "24", icon: <Camera className="w-5 h-5" /> },
        { title: "The Reveal: Answer Key", page: "27", icon: <Search className="w-5 h-5" /> },
        { title: "Two Decades: A Retrospective", page: "28", icon: <Users className="w-5 h-5" /> },
        { title: "Moments of Solidarity", page: "29", icon: <Heart className="w-5 h-5" /> },
        { title: "Class of 2004 Directory", page: "32", icon: <Users className="w-5 h-5" /> },
        { title: "Throwback Gallery", page: "33", icon: <Camera className="w-5 h-5" /> },
        { title: "Alumni Business Directory", page: "34", icon: <Briefcase className="w-5 h-5" /> },
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

  // 4. Editor's Note - Page 4
  <Page className="bg-white" showHeader={false}>
    <div className="flex flex-col h-full">
      <div className="bg-purple w-full py-6 flex justify-center mb-6 rounded-xl shadow-lg">
        <img src={LOGO_URL} alt="UDOSA Logo" className="h-16 object-contain" referrerPolicy="no-referrer" />
      </div>
      
      <div className="mb-6">
        <h2 className="text-3xl font-serif font-bold text-purple leading-tight">
          A Note from the <span className="text-gold italic">Editor-in-Chief</span>
        </h2>
        <div className="w-20 h-1 bg-gold mt-2" />
      </div>

      <div className="flex gap-8 mb-6">
        <div className="w-1/2">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gold rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white rounded-2xl p-1 border-[3px] border-gold shadow-2xl overflow-hidden aspect-[3/4]">
              <img 
                src="https://i.ibb.co/whnmmhpF/Screenshot-20250208-100512-Facebook.png" 
                alt="Cynthia Azor" 
                className="w-full h-full object-cover rounded-xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
        <div className="w-1/2 flex flex-col justify-center">
          <div className="space-y-3 text-slate-700 leading-relaxed font-serif text-justify text-[13px] md:text-[14px]">
            <p className="drop-cap">
              As the PRO Committee, we came together with a shared realization — that we were already working in sync, united by a common goal: to reconnect, build, and move UDOSA O4 forward with purpose.
            </p>
            <p>
              From this alignment, we formed a dedicated team to help generate ideas and bring structure to our vision. One of our first steps was creating a Facebook page, aimed at strengthening our connection, sharing our stories, and expanding our reach to classmates beyond our immediate platforms.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-3 text-slate-700 leading-relaxed font-serif text-justify text-[13px] md:text-[14px]">
        <p>
          From those conversations, a bigger idea was born — this Yearbook/Newsletter. This publication represents more than just pages of content; it reflects our shared history, values, and journey. It is a space where memories meet purpose — where we celebrate who we were, who we are, and who we are becoming.
        </p>
        <p>
          Personally, being part of the Conservation Club shaped my love for nature. Today, I find joy in planting and nurturing flowers around my home — a passion that started right here in UDSS. Many of us share similar stories — from Karate Club to Bible Club — each experience contributing to who we are today.
        </p>
        <p>
          This is our first edition, and while we made every effort to include as many people as possible, we acknowledge that not everyone was captured due to limited responses. We hope future editions will continue to expand and include even more voices and stories.
        </p>
        <p className="font-bold text-purple italic">
          Within these pages, you will find:
        </p>
        <ul className="grid grid-cols-2 gap-x-4 gap-y-1 ml-4 text-purple font-bold italic text-[12px]">
          <li>• Stories & reflections</li>
          <li>• Highlights of UDSS</li>
          <li>• Impact of clubs</li>
          <li>• Milestones & achievements</li>
        </ul>
      </div>
    </div>
  </Page>,

  // 5. Editor's Note - Page 5
  <Page className="bg-white relative overflow-hidden" showHeader={false}>
    {/* Floral Watermark */}
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center z-0">
      <Flower2 className="w-[500px] h-[500px] text-purple rotate-12" />
    </div>

    <div className="relative z-10 flex flex-col h-full">
      <div className="my-8 py-6 border-y-2 border-pink/20 bg-pink/5 text-center relative">
        <Quote className="w-10 h-10 text-pink mb-4 mx-auto opacity-30" />
        <p className="text-xl md:text-2xl font-serif italic text-pink leading-relaxed max-w-2xl mx-auto px-8">
          "Many of us share similar stories—from Karate Club to Bible Club—each experience contributing to who we are today."
        </p>
      </div>

      <div className="space-y-4 text-slate-700 leading-relaxed font-serif text-justify text-[13px] md:text-[14px]">
        <p>
          I would like to sincerely thank everyone who contributed, shared their information, and supported the realization of this vision. Your participation made this possible.
        </p>
        <p className="font-bold text-purple text-lg">
          This is just the beginning.
        </p>
        <p>
          Let us continue this journey together — building, reconnecting, and creating something even greater for the future.
        </p>
        <p className="font-serif italic text-purple text-lg">
          Thank you all.
        </p>
      </div>

      <div className="mt-6 mb-8 flex flex-col items-end">
        <p className="font-[var(--font-handwriting)] text-4xl text-purple mb-1">Cynthia Azor</p>
        <p className="text-[10px] font-serif font-bold text-gold uppercase tracking-widest">PRO (Diaspora) & Editor-in-Chief</p>
      </div>

      <div className="flex-grow" />

      {/* Compact Credits Box */}
      <div className="p-5 bg-purple text-white rounded-2xl shadow-xl border-2 border-gold/30">
        <h4 className="text-gold font-serif font-bold uppercase tracking-[0.2em] text-[10px] mb-3 border-b border-gold/20 pb-1">Editorial Team Credits</h4>
        <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-[10px] font-serif">
          <div className="space-y-2">
            <div className="flex flex-col border-b border-white/10 pb-1">
              <span className="text-gold font-bold">Osarenoma</span>
              <span className="italic opacity-70">Assistant PRO</span>
            </div>
            <div className="flex flex-col border-b border-white/10 pb-1">
              <span className="text-gold font-bold">Ochuko</span>
              <span className="italic opacity-70">PRO</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex flex-col border-b border-white/10 pb-1">
              <span className="text-gold font-bold">Irene</span>
              <span className="italic opacity-70">Editorial Team</span>
            </div>
            <div className="flex flex-col border-b border-white/10 pb-1">
              <span className="text-gold font-bold">Owen Ojo</span>
              <span className="italic opacity-70">Editorial Team</span>
            </div>
            <div className="flex flex-col border-b border-white/10 pb-1">
              <span className="text-gold font-bold">Ero</span>
              <span className="italic opacity-70">Editorial & Designer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Page>,

  // 5. Karate Article - Page 1
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
        <div className="columns-2 gap-8 text-slate-700 leading-relaxed text-[14px] font-serif text-justify">
          <p className="mb-4">
            <span className="text-6xl font-black text-purple float-left mr-3 leading-[0.8] mt-2">A</span>s a second-degree black belt with the Nigeria Karate Association (NKA) and Shotokan Karate International (SKI), I’ve spent years training in the art of karate, witnessing its transformative power firsthand. Karate is more than just a martial art—it’s a way of life that builds strength, sharpens the mind, and fosters a sense of community. Whether you’re a beginner stepping onto the dojo floor for the first time or a seasoned practitioner, the benefits of karate ripple through every aspect of your existence.
          </p>
          <p className="mb-4">
            Let me share why this ancient discipline remains so vital today. Physical Fitness and Self-Defence: Karate is a full-body workout that hones strength, flexibility, and endurance. Every punch, kick, and block engage your muscles, improves coordination, and boosts cardiovascular health. Training sessions often combine high-intensity drills with precise techniques, making it an excellent way to stay fit while learning practical skills.
          </p>
          <p className="mb-4">
            Beyond fitness, karate equips you with the ability to protect yourself. As someone who has spent countless hours perfecting katas and sparring, I can attest to the confidence that comes with knowing you can defend yourself if needed. Karate teaches you not just how to strike but how to stay aware, anticipate threats, and respond with control. This empowerment is invaluable in today’s world.
          </p>
        </div>
      </div>

      <div className="mt-auto py-8 border-y-2 border-pink/20 bg-pink/5 text-center relative">
        <Quote className="w-8 h-8 text-pink mb-3 mx-auto opacity-30" />
        <p className="text-2xl font-serif italic text-pink leading-relaxed max-w-2xl mx-auto">
          "Karate is more than just a martial art—it’s a way of life"
        </p>
      </div>
    </div>
  </Page>,

  // 6. Karate Article - Page 2
  <Page>
    <div className="flex flex-col h-full">
      <div className="mb-8">
        <h3 className="text-3xl font-serif font-bold text-purple mb-2">The Discipline of Karate (Continued)</h3>
        <div className="w-20 h-1 bg-gold" />
      </div>

      <div className="flex gap-8 mb-10">
        <div className="w-1/2 h-56 bg-slate-100 rounded-2xl overflow-hidden border-2 border-gold shadow-[0_0_20px_rgba(219,39,119,0.2)]">
          <img 
            src="https://i.ibb.co/BKcZxpf3/images-48.jpg" 
            alt="Karate Action 1" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="w-1/2 h-56 bg-slate-100 rounded-2xl overflow-hidden border-2 border-gold shadow-[0_0_20px_rgba(219,39,119,0.2)]">
          <img 
            src="https://i.ibb.co/Xq8FYw6/download-62.jpg" 
            alt="Karate Action 2" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      <div className="columns-2 gap-8 text-slate-700 leading-relaxed text-[14px] font-serif text-justify flex-grow">
        <p className="mb-6">
          <span className="font-bold text-purple uppercase tracking-wider block mb-2">Mental Discipline and Resilience:</span>
          Karate is as much a mental journey as it is a physical one. The dojo demands focus, patience, and perseverance. Learning complex techniques and memorizing katas sharpens your memory and concentration. As a black belt, I’ve learned that progress in karate comes through consistent effort and the humility to embrace mistakes as opportunities to grow.
        </p>
        <p className="mb-6">
          The discipline cultivated in karate extends far beyond the dojo. It helps you tackle challenges in everyday life—whether it’s staying calm under pressure at work or pushing through personal setbacks. Karate instills a mindset of resilience, teaching you to rise after every fall, both literally and figuratively.
        </p>
        <p className="mb-6">
          <span className="font-bold text-purple uppercase tracking-wider block mb-2">Emotional Balance and Confidence:</span>
          One of karate’s greatest gifts is emotional strength. Training provides a healthy outlet for stress, channeling energy into focused movement. The rhythmic flow of practicing techniques can feel meditative, helping you find balance in a hectic world. For me, stepping into the dojo is like hitting a reset button—it clears my mind and restores my sense of purpose.
        </p>
        <p className="mb-6">
          Karate also builds unshakable confidence. As you progress through belt ranks, you gain a sense of achievement that boosts self-esteem. This isn’t about arrogance but about knowing your worth and capabilities. I’ve seen shy beginners transform into poised, self-assured individuals, carrying themselves with quiet strength.
        </p>
      </div>
    </div>
  </Page>,

  // 7. Karate Article - Page 3
  <Page>
    <div className="flex flex-col h-full">
      <div className="columns-2 gap-8 text-slate-700 leading-relaxed text-[14px] font-serif text-justify flex-grow">
        <p className="mb-6">
          <span className="font-bold text-purple uppercase tracking-wider block mb-2">Community and Respect:</span>
          Karate fosters a deep sense of camaraderie. In the dojo, we train as a family, supporting each other’s growth. As an NKA and SKI practitioner, I’ve had the privilege of connecting with martial artists across Nigeria and beyond, united by a shared passion. This sense of belonging is especially meaningful in a world that can sometimes feel divided.
        </p>
        <p className="mb-6">
          Respect is at the core of karate’s philosophy. From bowing to your sensei to honouring your training partners, every interaction is steeped in mutual respect. These values shape you into a better person—someone who listens, empathizes, and uplifts others. For young people especially, karate provides a moral compass, guiding them toward integrity and compassion.
        </p>
        <p className="mb-6">
          <span className="font-bold text-purple uppercase tracking-wider block mb-2">A Lifelong Journey:</span>
          Karate is not just for the young or the athletic—it’s for everyone. Whether you’re a child learning discipline, an adult seeking balance, or a senior staying active, karate adapts to your needs. As a second-degree black belt, I’m still learning, still growing. Each training session brings new insights, reminding me that the path of karate is a lifelong journey of self-improvement.
        </p>
        <p className="mb-6">
          In a world that often feels chaotic, karate offers structure, purpose, and peace. It strengthens your body, sharpens your mind, and enriches your spirit. If you’re considering starting or continuing your karate journey, know this: the dojo is a place where you’ll discover not just the art of fighting, but the art of living. So, step onto the mat. Tie your belt. And begin. The benefits of karate are waiting for you.
        </p>
      </div>

      {/* Signature Space */}
      <div className="my-8 flex flex-col items-end">
        <div className="w-48 h-px bg-slate-200 mb-2" />
        <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Author's Signature</p>
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
  </Page>,

  // 8. Medical Feature - Page 1 (Intro)
  <Page footerText="UDOSA 04 | Health & Wellbeing Section">
    <div className="flex flex-col h-full">
      <div className="mb-6">
        <h1 className="text-5xl font-serif font-black text-purple leading-tight mb-4">
          The Dark Side of Overindulgence: <br />
          <span className="text-pink font-bold">Processed Sugar</span>
        </h1>
        <div className="bg-gold text-white px-6 py-3 inline-block rounded-r-full shadow-lg">
          <p className="text-sm font-bold tracking-widest uppercase">
            Dr. Irene Ogbeide, B. Pharm, PhD (University of Benin)
          </p>
        </div>
      </div>

      <div className="w-full h-72 bg-slate-100 rounded-[3rem] overflow-hidden mb-8 shadow-2xl relative">
        <img 
          src="https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=1000" 
          alt="Processed Sugar Hero" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-purple/40 to-transparent" />
      </div>

      <div className="text-slate-700 leading-relaxed text-[15px] font-serif text-justify space-y-4">
        <p className="first-letter:text-7xl first-letter:font-black first-letter:text-purple first-letter:float-left first-letter:mr-4 first-letter:leading-none">
          Food may be referred to as any substance or material consisting mainly of protein, carbohydrate, and fat which are ingested for nutritional support, energy, maintenance of life, or growth enhancement. It could be formulated, processed or eaten raw. There is a popular saying that "food is medicine". This is not only true because of the phytoconstituents contained in some foods which have medicinal properties but also true when the right types of food are combined in the right proportion in any diet.
        </p>
        <p>
          Otherwise, food can become poison instead of medicine. Remember the old saying that you are what you eat? This is true because the kind of food eaten can either make a person sick or healthy. An individual becomes sick when a large proportion of their diet contains processed sugars. Some food containing high levels of processed sugar include sugary drinks such as energy drinks, some carbonated drinks, cakes, pies (meat or chicken), biscuits, scones, doughnuts, sandwiches, sweets, chocolate bars, chocolate tea, sweetened teas, sweetened yogurt, sweetened popcorn, salad dressings, ketchup and so many others too numerous to mention.
        </p>
        <p>
          Recent trends have greatly influenced lifestyle and diet choices especially among children and young adults. The increasing rate of consumption of processed sugars is a serious public health issue because it has been linked to various disease conditions. The concern is no longer about brushing the teeth after eating food rich in processed sugar to avoid tooth decay and regular visits to the dentist but about the damage processed sugars are causing to internal body organs. Highlighted in this article are few of the effects of overindulgence in processed sugar on different organs of the body.
        </p>
      </div>
    </div>
  </Page>,

  // 9. Medical Feature - Page 2 (Brain & Eyes)
  <Page footerText="UDOSA 04 | Health & Wellbeing Section">
    <div className="flex flex-col h-full space-y-6">
      {/* Brain Section */}
      <div className="bg-purple/5 p-6 rounded-[2rem] border border-purple/10 relative">
        <div className="flex gap-6 items-start">
          <div className="w-16 h-16 bg-white rounded-full border-2 border-gold p-1 shrink-0 shadow-lg">
            <div className="w-full h-full rounded-full bg-purple/10 flex items-center justify-center overflow-hidden">
              <Brain className="w-8 h-8 text-purple" />
            </div>
          </div>
          <div className="flex-grow">
            <h3 className="text-xl font-serif font-bold text-pink mb-2 uppercase tracking-wider">The Brain</h3>
            <p className="text-[15px] text-slate-700 leading-relaxed font-serif text-justify">
              The brain is a complex organ which forms the centre part of the central nervous system in the body. It contains numerous nerves and is sometimes referred to as the seat of intelligence because it controls thought processes, movement, speech, memory, emotion, sensation, vision, behaviour, breathing, temperature regulation and all processes involved in the regulation of the body. Excessive consumption of processed sugars contained in many unhealthy foods and snacks can lead to sugar addiction due to overstimulation of dopamine neurotransmitter in the brain reward centre hence eliciting compulsive behaviours and cravings for more of the sweet stuff. The increased intake results in the release of free radicals which initiates inflammatory processes in the brain causing brain atrophy if not checked. These series of events can result in memory impairment and reduced cognitive functions. An individual who overindulges in diets containing high level of processed sugar is more susceptible to memory decline (as seen in cases of dementia and Alzheimer's disease), anxiety, depression, mood swings and emotional problems.
            </p>
          </div>
        </div>
      </div>

      {/* Eyes Section */}
      <div className="bg-purple/5 p-6 rounded-[2rem] border border-purple/10 relative">
        <div className="flex gap-6 items-start">
          <div className="w-16 h-16 bg-white rounded-full border-2 border-gold p-1 shrink-0 shadow-lg">
            <div className="w-full h-full rounded-full bg-purple/10 flex items-center justify-center overflow-hidden">
              <Eye className="w-8 h-8 text-purple" />
            </div>
          </div>
          <div className="flex-grow">
            <h3 className="text-xl font-serif font-bold text-pink mb-2 uppercase tracking-wider">The Eyes</h3>
            <p className="text-[15px] text-slate-700 leading-relaxed font-serif text-justify">
              The eye is a sensory organ located in the head which is responsible for visual perception. It consists of the cornea, iris, lens, retina, macula and optic nerves. The different parts of the eye work together to collect light from the environment, which is focused into an image by the cornea, lens, and retina. This image is then converted into electrochemical impulses by the retina's photoreceptors. These impulses are transmitted to the brain through the optic nerve, where they are processed in the visual cortex and other parts of the brain, enabling perception and interpretation of visual information. Excessive consumption of processed sugars can cause build-up of sugar in blood vessels of the retina leading to a disorder known as diabetic retinopathy which may lead to blindness without timely intervention. High level of sugar in the blood may also cause the lens of the eyes to become cloudy resulting in vision blur which may escalate into a condition known as cataract. Without timely intervention, the cataract may slowly progress into permanent loss of vision. High sugar levels in the blood have also been linked to cases of glaucoma and macular degeneration.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Page>,

  // 10. Medical Feature - Page 3 (Lungs & Liver)
  <Page footerText="UDOSA 04 | Health & Wellbeing Section">
    <div className="flex flex-col h-full space-y-6">
      {/* Lungs Section */}
      <div className="bg-purple/5 p-6 rounded-[2rem] border border-purple/10 relative">
        <div className="flex gap-6 items-start">
          <div className="w-16 h-16 bg-white rounded-full border-2 border-gold p-1 shrink-0 shadow-lg">
            <div className="w-full h-full rounded-full bg-purple/10 flex items-center justify-center overflow-hidden">
              <Wind className="w-8 h-8 text-purple" />
            </div>
          </div>
          <div className="flex-grow">
            <h3 className="text-xl font-serif font-bold text-pink mb-2 uppercase tracking-wider">The Lungs</h3>
            <p className="text-[15px] text-slate-700 leading-relaxed font-serif text-justify">
              The respiratory system's primary organs are the lungs, which are pyramid shaped and located in the thoracic cavity of humans. They are responsible for the intake of oxygen in the environment and the expulsion of carbon iv oxide from the body. The lungs' blood supply is crucial to the gaseous exchange process because deoxygenated blood from the pulmonary artery enters the lungs, where red blood cells collect oxygen and transfer it to the heart through the pulmonary veins. The heart in turn pumps the blood into tissues all over the body. Excessive consumption of diet rich in processed sugar may elicit the production of free radicals which react aggressively with lung tissues eventually leading to damage. Oxidative stress caused by these free radicals also increases the rate of chronic inflammation which in turn increases cases of chronic obstructive pulmonary diseases (COPD) and bronchitis. The oxidative stress also aggravates crisis in asthmatic patients. Excessive sugar in the blood also weakens the immune system causing the lungs to be more susceptible to infections.
            </p>
          </div>
        </div>
      </div>

      {/* Liver Section */}
      <div className="bg-purple/5 p-6 rounded-[2rem] border border-purple/10 relative">
        <div className="flex gap-6 items-start">
          <div className="w-16 h-16 bg-white rounded-full border-2 border-gold p-1 shrink-0 shadow-lg">
            <div className="w-full h-full rounded-full bg-purple/10 flex items-center justify-center overflow-hidden">
              <Activity className="w-8 h-8 text-purple" />
            </div>
          </div>
          <div className="flex-grow">
            <h3 className="text-xl font-serif font-bold text-pink mb-2 uppercase tracking-wider">The Liver</h3>
            <p className="text-[15px] text-slate-700 leading-relaxed font-serif text-justify">
              An essential organ in the body is the liver which is involved in digestion, metabolism, bile production, and detoxification. The liver converts excess sugar in the blood into glycogen or fats which can be stored in the liver. The fat produced by the liver can then be stored in adipose tissues leading to excessive weight gain which may proceed to obesity if left unchecked. Non-alcoholic fatty liver disease, which is triggered by accumulated lipids in the liver, may advance into Non-Alcoholic Steatohepatitis if treatment is not commenced immediately. Without timely intervention, these conditions can further lead to liver cirrhosis and progress further into cancer of the liver.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Page>,

  // 11. Medical Feature - Page 4 (Pancreas, Kidneys & Skin)
  <div className="bg-white h-[297mm] w-[210mm] p-10 overflow-hidden mx-auto shadow-2xl mb-10 flex flex-col print:m-0 print:shadow-none print:page-break-after-always">
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-serif font-bold text-purple mb-4">The Pancreas</h2>
        <p className="text-[14px] text-slate-700 leading-relaxed font-serif text-justify">
          The pancreas is an organ in the body that releases enzymes called pancreatic juice which aids digestion of food. The islet cells of the pancreas also secrete the hormone insulin responsible for the uptake of glucose into cells and tissues thereby controlling blood sugar levels. Overindulgence in diet containing processed sugar causes stress on the pancreas because the organ is forced to work excessively to generate more insulin to mop up the excess sugar load in the blood. This action eventually leads to reduced pancreatic efficiency. The pancreas is further overworked when insulin resistance develops in the cells (as observed in people who are overweight) making them less responsive to the insulin produced by the islet cells, the pancreas must produce more insulin to compensate. If the situation goes unchecked, the pancreas may become inflamed leading to a condition called pancreatitis which may eventually damage the pancreas. When the ability of the pancreas to produce insulin is eventually compromised, a condition referred to as diabetes ensues. This is a condition in which the body is unable to effectively regulate blood sugar.
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-serif font-bold text-purple mb-4">The Kidneys</h2>
        <p className="text-[14px] text-slate-700 leading-relaxed font-serif text-justify">
          The kidneys are organs responsible for filtering the blood, removing toxic waste and excess fluid in the body. They also help to maintain normal blood pressure and produce certain hormones called erythropoietin required for the formation of healthy red blood cells. Activation of vitamin D which is essential for bone health also takes place in the kidney. Excess sugar in the blood due to overindulgence in sugar rich foods causes damage to the tiny blood vessels in the kidneys referred to as glomeruli which are responsible for filtering toxic waste and removing excess fluid in the blood hence leading to build up of fluid and waste. This build-up may in turn lead to kidney failure if not resolved.
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-serif font-bold text-purple mb-4">The Skin</h2>
        <p className="text-[14px] text-slate-700 leading-relaxed font-serif text-justify">
          The skin is believed to be the largest organ in the body which serves as a protective barrier against external threats. It is involved in temperature regulation, vitamin D production and serves as a sensory as well as excretory organ for the body. Excess sugar in the blood can expediate the ageing process and make the skin appear dull, discoloured, and wrinkled. The presence of advanced glycation end products (AGEs) causes the adverse skin impact. The interaction between the reducing sugar’s carbonyl functional groups and the free amine functional groups in nucleic acids, lipids and proteins in the body results in AGEs. When AGEs accumulate in the skin, they cause formation of wrinkles by stiffening collagen and elastin which in turn results in decreased skin elasticity. Excess sugar in the blood may also cause slow wound healing processes and increase the skin’s susceptibility to infection as observed in diabetic patients.
        </p>
      </div>
    </div>
  </div>,

  // 12. Medical Feature - Page 5 (Reproductive, Conclusion, Bio)
  <div className="bg-white h-[297mm] w-[210mm] p-10 overflow-hidden mx-auto shadow-2xl mb-10 flex flex-col print:m-0 print:shadow-none print:page-break-after-always">
    <div className="space-y-8 flex-grow">
      <div>
        <h2 className="text-2xl font-serif font-bold text-purple mb-4">The Reproductive Organs</h2>
        <p className="text-[14px] text-slate-700 leading-relaxed font-serif text-justify">
          The reproductive organs are responsible for procreation in males and females. Overindulgence in processed sugar may cause blockade or damage to the nerves required for normal erectile functions in males typically leading to erectile dysfunction. Also, high levels of sugar in the blood have been linked to reduced sperm quality and motility hence leading to male infertility. In females, high blood sugar levels have been linked to abnormal levels of luteinizing hormone (LH), which play a role in egg maturation and ovulation. It has also been linked to irregular menstrual cycles and a condition known as polycystic ovarian syndrome, hence reducing fertility. Also, several studies have shown that females who overindulge in processed sugars have higher chances of giving birth to an autistic child than those who do not. This is because increased blood sugar levels during pregnancy may affect foetal brain development.
        </p>
      </div>

      <div className="bg-pink text-white p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-serif font-bold mb-2">Conclusion</h3>
        <p className="text-[14px] leading-relaxed font-serif italic text-justify">
          In conclusion, it is important to understand that as one gets older, diet choices need to be intentional. The next time one is tempted to overindulge in diets and snacks laden with processed sugars, it is essential to remember these dark sides and make healthy choices. Young children should be taught early about the importance of consuming healthy foods because overindulging in over processed sugars will not only cause addiction, affect normal growth and development but can also reduce brain activity and cognitive functions leading to poor academic performance.
        </p>
      </div>
    </div>

    <div className="p-8 bg-purple text-white rounded-2xl shadow-xl mt-auto">
      <div className="flex items-center gap-8">
        <div className="w-28 h-28 rounded-full border-4 border-gold p-1 shrink-0 shadow-lg">
          <div className="w-full h-full rounded-full bg-white overflow-hidden">
            <img 
              src="https://i.ibb.co/JWrZXgnp/IMG-20191120-072210-1-2.jpg" 
              alt="Dr. Irene Ogbeide" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
        <div>
          <h4 className="text-xs font-bold text-gold uppercase tracking-[0.3em] mb-2">About the Author</h4>
          <h3 className="text-2xl font-serif font-bold mb-2">Irene Ogbeide</h3>
          <p className="text-[13px] text-purple-100 leading-relaxed font-serif">
            B. Pharm, Pharm D, MSc, PhD. MPSN, MCPAN. <br />
            Dept of Pharmaceutical Chemistry, UNIBEN. <br />
            <span className="text-gold font-bold">Irene.oseghale@uniben.edu</span>
          </p>
        </div>
      </div>
    </div>
  </div>,

  // 13. Mind Gym - Page 6 (Riddles Part 1)
  <div className="page-a4 overflow-hidden flex flex-col mx-auto bg-white shadow-2xl print:m-0 print:shadow-none print:page-break-after-always">
    <div className="bg-purple w-full h-24 flex flex-col items-center justify-center px-8 shrink-0 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple via-purple/90 to-purple opacity-50" />
      <img src={LOGO_URL} alt="UDOSA Logo" className="h-10 object-contain mb-1 relative z-10" referrerPolicy="no-referrer" />
      <h2 className="text-2xl font-serif font-black tracking-[0.3em] relative z-10">
        <span className="text-pink">MIND</span> <span className="text-gold">GYM</span>
      </h2>
    </div>

    <div className="p-8 flex-grow overflow-hidden flex flex-col">
      <div className="mb-6 text-center">
        <h3 className="text-xl font-serif font-bold text-purple uppercase tracking-widest">The UDOSA 04 Mind Gym: Riddles & Brain Teasers</h3>
        <div className="w-20 h-1 bg-gold mx-auto mt-2" />
      </div>

      <div className="grid grid-cols-2 gap-3 flex-grow overflow-hidden">
        {RIDDLES.slice(0, 13).map((riddle, i) => (
          <div key={i} className="bg-pink/5 border border-purple/20 p-3 py-2 rounded-lg flex flex-col justify-between">
            <p className="text-[14px] font-bold text-purple leading-tight">
              {i + 1}. {riddle.q}
            </p>
            <p className="text-[12px] italic text-gold mt-2 self-end transform rotate-180 origin-center">
              Ans: {riddle.a}
            </p>
          </div>
        ))}
      </div>
    </div>

    <Footer text="UDOSA 04 | Mental Fitness & Fun" />
  </div>,

  // 14. Mind Gym - Page 7 (Riddles Part 2)
  <div className="page-a4 overflow-hidden flex flex-col mx-auto bg-white shadow-2xl print:m-0 print:shadow-none print:page-break-after-always">
    <div className="bg-purple w-full h-20 flex flex-col items-center justify-center px-8 shrink-0 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple via-purple/90 to-purple opacity-50" />
      <h2 className="text-xl font-serif font-black tracking-[0.3em] relative z-10 text-white">
        MIND GYM: <span className="text-gold">CONTINUED</span>
      </h2>
    </div>

    <div className="p-8 flex-grow overflow-hidden flex flex-col">
      <div className="grid grid-cols-2 gap-3 flex-grow overflow-hidden">
        {RIDDLES.slice(13).map((riddle, i) => (
          <div key={i + 13} className="bg-pink/5 border border-purple/20 p-3 py-2 rounded-lg flex flex-col justify-between">
            <p className="text-[14px] font-bold text-purple leading-tight">
              {i + 14}. {riddle.q}
            </p>
            <p className="text-[12px] italic text-gold mt-2 self-end transform rotate-180 origin-center">
              Ans: {riddle.a}
            </p>
          </div>
        ))}
      </div>
    </div>

    <Footer text="UDOSA 04 | Mental Fitness & Fun" />
  </div>,

  // 15. Word Search - Page 15
  <div className="page-a4 overflow-hidden flex flex-col mx-auto bg-white shadow-2xl print:m-0 print:shadow-none print:page-break-after-always">
    <div className="bg-purple w-full h-24 flex flex-col items-center justify-center px-8 shrink-0 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple via-purple/90 to-purple opacity-50" />
      <img src={LOGO_URL} alt="UDOSA Logo" className="h-10 object-contain mb-1 relative z-10" referrerPolicy="no-referrer" />
      <h2 className="text-2xl font-serif font-black tracking-[0.3em] relative z-10">
        <span className="text-pink">UDOSA 04</span> <span className="text-gold">CHALLENGE</span>
      </h2>
    </div>

    <div className="p-8 flex-grow overflow-hidden flex flex-col">
      <div className="mb-6 text-center">
        <h3 className="text-xl font-serif font-bold text-purple uppercase tracking-widest">Alumni Word Search: Back to School</h3>
        <div className="w-20 h-1 bg-gold mx-auto mt-2" />
      </div>

      <div className="flex flex-col items-center gap-8 flex-grow overflow-hidden">
        {/* Grid */}
        <div className="grid grid-cols-15 gap-1 bg-purple/10 p-2 rounded-lg shadow-inner">
          {WORD_SEARCH_GRID.map((row, rowIndex) => (
            row.map((letter, colIndex) => (
              <div 
                key={`${rowIndex}-${colIndex}`} 
                className="w-8 h-8 bg-white border border-purple/20 flex items-center justify-center text-[16px] font-bold text-purple rounded-sm shadow-sm"
              >
                {letter}
              </div>
            ))
          ))}
        </div>

        {/* Word List */}
        <div className="w-full bg-pink/5 p-6 rounded-2xl border border-purple/10">
          <p className="text-center text-xs font-bold text-purple uppercase tracking-widest mb-4">Words to Find</p>
          <div className="grid grid-cols-3 gap-x-4 gap-y-2">
            {WORD_SEARCH_WORDS.map((word, i) => (
              <button
                key={i}
                onClick={() => toggleWord(word)}
                className={`text-[11px] font-bold text-left transition-all duration-300 ${
                  foundWords.includes(word) 
                    ? "text-slate-300 line-through decoration-pink decoration-2" 
                    : "text-purple hover:text-pink"
                }`}
              >
                {word}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>

    <Footer text="UDOSA 04 | Secondary School Memories" />
  </div>,

  // 16. Word Search: Careers - Page 16
  <div className="page-a4 overflow-hidden flex flex-col mx-auto bg-white shadow-2xl print:m-0 print:shadow-none print:page-break-after-always">
    <div className="bg-purple w-full h-24 flex flex-col items-center justify-center px-8 shrink-0 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple via-purple/90 to-purple opacity-50" />
      <img src={LOGO_URL} alt="UDOSA Logo" className="h-10 object-contain mb-1 relative z-10" referrerPolicy="no-referrer" />
      <h2 className="text-2xl font-serif font-black tracking-[0.3em] relative z-10">
        <span className="text-pink">UDOSA 04</span> <span className="text-gold">CAREERS</span>
      </h2>
    </div>

    <div className="p-8 flex-grow overflow-hidden flex flex-col">
      <div className="mb-6 text-center">
        <h3 className="text-xl font-serif font-bold text-purple uppercase tracking-widest">Alumni Word Search: Our Professional Paths</h3>
        <p className="text-pink font-serif italic text-sm mt-1">Finding the leaders of today within our batch.</p>
        <div className="w-20 h-1 bg-gold mx-auto mt-2" />
      </div>

      <div className="flex flex-col items-center gap-8 flex-grow overflow-hidden">
        {/* Grid */}
        <div className="grid grid-cols-15 gap-1 bg-pink/10 p-2 rounded-lg shadow-inner">
          {CAREERS_GRID.map((row, rowIndex) => (
            row.map((letter, colIndex) => (
              <div 
                key={`${rowIndex}-${colIndex}`} 
                className="w-8 h-8 bg-white border border-pink/20 flex items-center justify-center text-[16px] font-bold text-purple rounded-sm shadow-sm"
              >
                {letter}
              </div>
            ))
          ))}
        </div>

        {/* Word List */}
        <div className="w-full bg-purple/5 p-6 rounded-2xl border border-pink/10">
          <p className="text-center text-xs font-bold text-purple uppercase tracking-widest mb-4">Occupations to Find</p>
          <div className="grid grid-cols-3 gap-x-4 gap-y-2">
            {CAREERS_WORDS.map((word, i) => (
              <button
                key={i}
                onClick={() => toggleWord(word)}
                className={`text-[11px] font-bold text-left transition-all duration-300 ${
                  foundWords.includes(word) 
                    ? "text-slate-300 line-through decoration-gold decoration-2" 
                    : "text-purple hover:text-pink"
                }`}
              >
                {word}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>

    <Footer text="UDOSA 04 | Celebrating Our Diverse Careers" />
  </div>,

  // 17. The Power of Connection - Page 17
  <div className="page-a4 overflow-hidden flex flex-col mx-auto bg-white shadow-2xl print:m-0 print:shadow-none print:page-break-after-always">
    <div className="bg-purple w-full h-24 flex items-center justify-center px-8 shrink-0 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple via-purple/90 to-purple opacity-50" />
      <img src={LOGO_URL} alt="UDOSA Logo" className="h-10 object-contain mr-6 relative z-10" referrerPolicy="no-referrer" />
      <h2 className="text-3xl font-serif font-black tracking-tight relative z-10 text-white">
        The Power of <span className="text-pink italic font-serif">Connection</span>
      </h2>
    </div>

    <div className="p-10 flex-grow overflow-hidden flex flex-col">
      {/* Hero Image */}
      <div className="w-full h-64 rounded-2xl overflow-hidden mb-8 shadow-xl border-4 border-white">
        <img 
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1000" 
          alt="Alumni Connection" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="grid grid-cols-1 gap-8">
        <div className="space-y-4">
          <h3 className="text-[18px] font-serif font-bold text-purple uppercase tracking-widest border-b-2 border-pink w-fit pb-1">The Importance of Social Life</h3>
          <p className="text-[15px] text-slate-700 leading-relaxed">
            <span className="text-5xl font-serif font-black text-purple float-left mr-3 mt-1 leading-[0.8]">I</span>n today's fast-paced world, maintaining a healthy social life is crucial for our emotional and mental well-being. Social connections play a significant role in shaping our identities, providing support networks, and enhancing our overall quality of life.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-[18px] font-serif font-bold text-purple uppercase tracking-widest border-b-2 border-pink w-fit pb-1">Benefits of Social Life</h3>
          <div className="grid grid-cols-3 gap-4">
            {[
              { title: "Reduced Stress", icon: <Wind className="w-6 h-6" />, desc: "Socializing can help alleviate stress and anxiety." },
              { title: "Improved Mental Health", icon: <Heart className="w-6 h-6" />, desc: "Strong connections reduce symptoms of depression." },
              { title: "Increased Opportunities", icon: <Briefcase className="w-6 h-6" />, desc: "Networks lead to career and personal growth." }
            ].map((benefit, i) => (
              <div key={i} className="flex flex-col items-center text-center p-4 bg-pink/5 rounded-2xl border border-pink/10">
                <div className="w-12 h-12 rounded-full bg-pink text-white flex items-center justify-center mb-3 shadow-lg shadow-pink/20">
                  {benefit.icon}
                </div>
                <h4 className="text-xs font-bold text-purple uppercase tracking-tighter mb-1">{benefit.title}</h4>
                <p className="text-[10px] text-slate-500 leading-tight">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border-2 border-gold/30 p-6 rounded-2xl shadow-inner relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-full -mr-12 -mt-12" />
          <h3 className="text-[18px] font-serif font-bold text-purple uppercase tracking-widest mb-4 relative z-10">Nurturing Social Connections</h3>
          <ul className="space-y-3 relative z-10">
            {[
              { t: "Join Clubs or Groups", d: "Engage in activities that align with your interests to meet like-minded people." },
              { t: "Volunteer", d: "Participate in community service to build connections while giving back." },
              { t: "Attend Events", d: "Expand your social circle by attending concerts, festivals, or networking events." }
            ].map((tip, i) => (
              <li key={i} className="flex gap-3">
                <div className="w-5 h-5 rounded-full bg-gold text-white flex items-center justify-center shrink-0 text-[10px] font-bold mt-1">{i+1}</div>
                <div>
                  <span className="text-[15px] font-bold text-purple">{tip.t}:</span>
                  <span className="text-[14px] text-slate-600 ml-1">{tip.d}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    <Footer text="UDOSA 04 | Lifestyle & Wellness" />
  </div>,

  // 18. Social Life vs. Socialization - Page 18
  <div className="page-a4 overflow-hidden flex flex-col mx-auto bg-white shadow-2xl print:m-0 print:shadow-none print:page-break-after-always">
    <div className="bg-purple w-full h-20 flex items-center justify-center px-8 shrink-0 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple via-purple/90 to-purple opacity-50" />
      <h2 className="text-xl font-serif font-black tracking-[0.3em] relative z-10 text-white uppercase">
        Social Life <span className="text-gold italic font-serif lowercase">vs.</span> Socialization
      </h2>
    </div>

    <div className="flex-grow flex flex-col overflow-hidden">
      <div className="flex flex-grow overflow-hidden">
        {/* Left Side: Social Life */}
        <div className="w-1/2 bg-pink/5 p-10 flex flex-col border-r border-gold/10">
          <div className="mb-8">
            <h3 className="text-4xl font-serif font-black text-pink uppercase tracking-tighter mb-2">Social Life</h3>
            <div className="w-12 h-1 bg-pink" />
          </div>
          
          <div className="space-y-8">
            <div>
              <p className="text-[12px] font-bold text-pink uppercase tracking-widest mb-2">Focus</p>
              <p className="text-[15px] text-slate-700 leading-relaxed">
                Refers to the overall pattern of social interactions, relationships, and activities that an individual engages in. It's the broader picture of how someone connects with others.
              </p>
            </div>
            
            <div>
              <p className="text-[12px] font-bold text-pink uppercase tracking-widest mb-2">Emphasis</p>
              <p className="text-[15px] text-slate-700 leading-relaxed font-bold italic">
                The experience and outcomes of being social.
              </p>
            </div>
            
            <div className="p-4 bg-white rounded-xl border border-pink/20 shadow-sm">
              <p className="text-[12px] font-bold text-pink uppercase tracking-widest mb-1 italic">Example</p>
              <p className="text-[14px] text-slate-600 italic">
                "She has a very active social life, with frequent gatherings and outings."
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Socialization */}
        <div className="w-1/2 bg-purple/[0.02] p-10 flex flex-col">
          <div className="mb-8 text-right">
            <h3 className="text-4xl font-serif font-black text-purple uppercase tracking-tighter mb-2">Socialization</h3>
            <div className="w-12 h-1 bg-purple ml-auto" />
          </div>
          
          <div className="space-y-8 text-right">
            <div>
              <p className="text-[12px] font-bold text-purple uppercase tracking-widest mb-2">Focus</p>
              <p className="text-[15px] text-slate-700 leading-relaxed">
                Refers to the process by which individuals learn and internalize the norms, values, beliefs, and behaviors of a society. It's the learning process that enables functioning.
              </p>
            </div>
            
            <div>
              <p className="text-[12px] font-bold text-purple uppercase tracking-widest mb-2">Emphasis</p>
              <p className="text-[15px] text-slate-700 leading-relaxed font-bold italic">
                The process of learning and adaptation.
              </p>
            </div>
            
            <div className="p-4 bg-white rounded-xl border border-purple/20 shadow-sm">
              <p className="text-[12px] font-bold text-purple uppercase tracking-widest mb-1 italic">Example</p>
              <p className="text-[14px] text-slate-600 italic">
                "Early childhood socialization plays a crucial role in shaping an individual's personality."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Center Pull Quote */}
      <div className="relative h-32 flex items-center justify-center px-12">
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <Quote className="w-48 h-48 text-gold" />
        </div>
        <p className="text-2xl font-serif italic text-gold text-center relative z-10 leading-tight">
          "You undergo socialization to have a social life."
        </p>
      </div>

      {/* Conclusion Box */}
      <div className="p-8 px-12">
        <div className="bg-gradient-to-r from-pink to-pink/80 p-6 rounded-2xl shadow-lg relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
          <h3 className="text-white font-serif font-bold text-lg uppercase tracking-widest mb-2 relative z-10">Conclusion</h3>
          <p className="text-white text-[15px] leading-relaxed relative z-10">
            Prioritizing social life can have a profound impact on our well-being and happiness. By nurturing our social connections, we can build stronger relationships, reduce stress, and enhance our overall quality of life.
          </p>
        </div>
      </div>
    </div>

    <Footer text="UDOSA 04 | Lifestyle & Wellness" />
  </div>,

  // 19. Finding Peace Amidst Life's Storms - Page 19
  <div className="page-a4 overflow-hidden flex flex-col mx-auto bg-white shadow-2xl print:m-0 print:shadow-none print:page-break-after-always">
    <div className="bg-purple w-full h-24 flex items-center justify-center px-8 shrink-0 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple via-purple/90 to-purple opacity-50" />
      <img src={LOGO_URL} alt="UDOSA Logo" className="h-10 object-contain mr-6 relative z-10" referrerPolicy="no-referrer" />
      <h2 className="text-2xl font-serif font-black tracking-[0.2em] relative z-10 text-white uppercase">
        Faith & <span className="text-gold italic">Inspiration</span>
      </h2>
    </div>

    <div className="p-10 flex-grow overflow-hidden flex flex-col">
      {/* Memory Verse Callout */}
      <div className="mb-8 flex justify-center">
        <div className="bg-white border-2 border-gold p-6 rounded-xl shadow-lg max-w-lg relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Memory Verse</div>
          <p className="text-xl font-serif italic text-purple text-center leading-relaxed">
            "Trust in the Lord with all your heart, and lean not on your own understanding; in all your ways acknowledge Him, and He shall direct your paths."
          </p>
          <p className="text-center text-gold font-bold mt-2 text-xs uppercase tracking-widest">— Proverbs 3:5-6 (NKJV)</p>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-5xl font-serif font-black leading-tight tracking-tighter text-center bg-gradient-to-r from-purple via-pink to-purple bg-clip-text text-transparent uppercase">
          Finding Peace <br />Amidst Life's Storms
        </h2>
        <p className="text-center text-gold font-serif italic text-lg mt-2">By Irene Ogbeide</p>
      </div>

      <div className="grid grid-cols-1 gap-8 flex-grow">
        <div className="space-y-6">
          <p className="text-[15px] text-slate-700 leading-relaxed first-letter:text-6xl first-letter:font-serif first-letter:font-black first-letter:text-purple first-letter:float-left first-letter:mr-3 first-letter:mt-1">
            Do you feel like the waves are crashing over you? Life has a way of throwing storms our way when we least expect them. Whether it's a career challenge, a personal loss, or the general uncertainty of the times we live in, it's easy to feel overwhelmed and adrift.
          </p>
          <p className="text-[15px] text-slate-700 leading-relaxed">
            But in the midst of the chaos, there is a peace that surpasses all understanding. This peace isn't the absence of trouble, but the presence of God. Understanding God's sovereignty is the first step toward true tranquility. It means recognizing that He is in control, even when things seem completely out of control.
          </p>
          <p className="text-[15px] text-slate-700 leading-relaxed">
            He is the anchor that holds us steady when the winds howl. When we stop trying to navigate the storm on our own and hand the wheel to the Creator of the seas, we find a rest that the world cannot give. His sovereignty is our security.
          </p>
        </div>

        <div className="w-full h-56 rounded-2xl overflow-hidden shadow-lg border-2 border-gold relative mx-auto">
          <img 
            src="https://i.ibb.co/fdGQJ2mh/images-49.jpg" 
            alt="Peaceful Light" 
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </div>

    <Footer text="UDOSA 04 | Faith & Inspiration" />
  </div>,

  // 20. Your Scriptural Anchor - Page 20
  <div className="page-a4 overflow-hidden flex flex-col mx-auto bg-white shadow-2xl print:m-0 print:shadow-none print:page-break-after-always">
    <div className="bg-purple w-full h-20 flex items-center justify-center px-8 shrink-0 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple via-purple/90 to-purple opacity-50" />
      <h2 className="text-xl font-serif font-black tracking-[0.2em] relative z-10 text-white uppercase">
        Your Scriptural <span className="text-gold italic">Anchor</span>
      </h2>
    </div>

    <div className="p-10 flex-grow overflow-hidden flex flex-col">
      <div className="mb-8 text-center">
        <h3 className="text-2xl font-serif font-bold text-purple uppercase tracking-widest">A Scriptural Lifeline</h3>
        <p className="text-pink font-serif italic text-base">20 Verses for Every Season</p>
        <div className="w-20 h-1 bg-gold mx-auto mt-2" />
      </div>

      <div className="grid grid-cols-2 gap-x-12 gap-y-3 flex-grow overflow-hidden">
        {[
          { c: "When afraid", r: "Isaiah 43:1-5" },
          { c: "When anxious", r: "Philippians 4:6-7" },
          { c: "When lonely", r: "Psalm 23" },
          { c: "When discouraged", r: "Joshua 1:9" },
          { c: "When weak", r: "2 Corinthians 12:9" },
          { c: "When needing peace", r: "John 14:27" },
          { c: "When grieving", r: "Matthew 5:4" },
          { c: "When tempted", r: "1 Corinthians 10:13" },
          { c: "When needing guidance", r: "Proverbs 3:5-6" },
          { c: "When tired", r: "Matthew 11:28-30" },
          { c: "When feeling guilty", r: "1 John 1:9" },
          { c: "When in trouble", r: "Psalm 46:1" },
          { c: "When facing doubt", r: "Hebrews 11:1" },
          { c: "When needing strength", r: "Philippians 4:13" },
          { c: "When feeling unloved", r: "Romans 8:38-39" },
          { c: "When worried about the future", r: "Jeremiah 29:11" },
          { c: "When angry", r: "Ephesians 4:26-27" },
          { c: "When needing wisdom", r: "James 1:5" },
          { c: "When feeling defeated", r: "Romans 8:37" },
          { c: "When needing hope", r: "Romans 15:13" }
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-3 border-b border-stone-100 pb-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
            <div className="text-[14px] flex flex-col">
              <span className="font-bold text-pink uppercase tracking-tight leading-tight">{item.c}</span>
              <span className="text-purple italic font-medium">{item.r}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 space-y-6">
        <div className="bg-pink/5 p-6 rounded-2xl border border-pink/10 shadow-inner">
          <p className="text-[14px] text-slate-700 leading-relaxed text-center italic">
            "Let these words be your anchor. No matter the height of the waves or the strength of the wind, the Word of God remains unshakable. Carry these promises in your heart, and you will find that the storm doesn't have the final say—He does."
          </p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-serif italic text-purple">
            Irene Ogbeide
          </p>
        </div>
      </div>
    </div>

    <Footer text="UDOSA 04 | Faith & Inspiration" />
  </div>,

  // 21. Unlock Your Earning Potential - Page 21
  <div className="page-a4 overflow-hidden flex flex-col mx-auto bg-white shadow-2xl print:m-0 print:shadow-none print:page-break-after-always">
    <div className="bg-purple w-full h-24 flex items-center justify-center px-8 shrink-0 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple via-purple/90 to-purple opacity-50" />
      <img src={LOGO_URL} alt="UDOSA Logo" className="h-10 object-contain mr-6 relative z-10" referrerPolicy="no-referrer" />
      <h2 className="text-2xl font-serif font-black tracking-[0.2em] relative z-10 text-white uppercase">
        Career & <span className="text-gold italic">Finance</span>
      </h2>
    </div>

    <div className="p-10 flex-grow overflow-hidden flex flex-col">
      <div className="mb-8">
        <h2 className="text-5xl font-serif font-black leading-tight tracking-tighter text-purple uppercase">
          Unlock Your <br /><span className="text-pink">Earning Potential</span>
        </h2>
        <p className="text-gold font-serif italic text-lg mt-2">By Ehima Oziegbe</p>
        <div className="w-20 h-1 bg-gold mt-4" />
      </div>

      <div className="grid grid-cols-1 gap-8 flex-grow">
        <div className="space-y-4 text-slate-700 leading-relaxed text-[15px] font-serif text-justify">
          <p className="first-letter:text-6xl first-letter:font-black first-letter:text-purple first-letter:float-left first-letter:mr-3 first-letter:mt-1">
            In today's dynamic job market, staying ahead of the curve is essential for career growth and financial stability. Whether you're a seasoned professional or just starting your journey, there are several strategies you can employ to maximize your earning potential and achieve your financial goals.
          </p>
          
          <div className="bg-purple/5 p-6 rounded-2xl border-l-4 border-purple shadow-sm">
            <h3 className="text-lg font-bold text-purple mb-3 uppercase tracking-wider">1. Continuous Learning and Upskilling</h3>
            <p>The world is evolving at an unprecedented pace, and so are the skills required for success. Invest in your professional development by attending workshops, taking online courses, or pursuing advanced certifications. Staying current with industry trends and acquiring new skills will make you a more valuable asset to your employer and open doors to higher-paying opportunities.</p>
          </div>

          <div className="bg-pink/5 p-6 rounded-2xl border-l-4 border-pink shadow-sm">
            <h3 className="text-lg font-bold text-pink mb-3 uppercase tracking-wider">2. Networking and Building Relationships</h3>
            <p>Your network is your net worth. Cultivate meaningful relationships with colleagues, industry peers, and mentors. Attend networking events, join professional organizations, and engage in online communities. A strong network can provide valuable insights, job leads, and opportunities for collaboration that can significantly impact your career trajectory.</p>
          </div>
        </div>
      </div>
    </div>

    <Footer text="UDOSA 04 | Career & Finance" />
  </div>,

  // 22. Maximize Your Growth - Page 22
  <div className="page-a4 overflow-hidden flex flex-col mx-auto bg-white shadow-2xl print:m-0 print:shadow-none print:page-break-after-always">
    <div className="bg-purple w-full h-20 flex items-center justify-center px-8 shrink-0 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple via-purple/90 to-purple opacity-50" />
      <h2 className="text-xl font-serif font-black tracking-[0.2em] relative z-10 text-white uppercase">
        Maximize Your <span className="text-gold italic">Growth</span>
      </h2>
    </div>

    <div className="p-10 flex-grow overflow-hidden flex flex-col">
      <div className="space-y-8 flex-grow">
        <div className="bg-gold/5 p-6 rounded-2xl border-l-4 border-gold shadow-sm">
          <h3 className="text-lg font-bold text-purple mb-3 uppercase tracking-wider">3. Performance and Results</h3>
          <p className="text-[15px] text-slate-700 leading-relaxed font-serif">Focus on delivering exceptional results and exceeding expectations in your current role. Consistently demonstrating your value through high-quality work, initiative, and a positive attitude will not only lead to recognition but also position you for promotions and salary increases. Don't be afraid to showcase your achievements and advocate for yourself during performance reviews.</p>
        </div>

        <div className="bg-purple/5 p-6 rounded-2xl border-l-4 border-purple shadow-sm">
          <h3 className="text-lg font-bold text-purple mb-3 uppercase tracking-wider">4. Financial Literacy and Management</h3>
          <p className="text-[15px] text-slate-700 leading-relaxed font-serif">Maximizing your earning potential is only half the battle; managing your finances effectively is equally important. Educate yourself on budgeting, saving, and investing. Set clear financial goals and develop a plan to achieve them. By being mindful of your spending habits and making informed financial decisions, you can build wealth and secure your financial future.</p>
        </div>

        <div className="bg-pink/5 p-6 rounded-2xl border-l-4 border-pink shadow-sm">
          <h3 className="text-lg font-bold text-pink mb-3 uppercase tracking-wider">5. Entrepreneurship and Side Hustles</h3>
          <p className="text-[15px] text-slate-700 leading-relaxed font-serif">Consider exploring entrepreneurial ventures or side hustles that align with your passions and skills. Whether it's starting a small business, freelancing, or investing in real estate, diversifying your income streams can provide additional financial security and accelerate your path to financial independence.</p>
        </div>
      </div>

      <div className="mt-8 p-8 bg-purple text-white rounded-[2.5rem] shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-pink/20 rounded-full -mr-16 -mt-16 blur-3xl" />
        <h3 className="text-2xl font-serif font-bold mb-4 relative z-10">Final Thoughts</h3>
        <p className="text-[16px] leading-relaxed font-serif italic relative z-10">
          "Unlocking your earning potential requires a combination of hard work, strategic planning, and a commitment to personal and professional growth. By implementing these strategies, you can take control of your career and financial future, and achieve the success you deserve."
        </p>
        <div className="mt-6 flex items-center gap-4 relative z-10">
          <div className="w-12 h-12 rounded-full border-2 border-gold p-0.5">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" 
              alt="Ehima Oziegbe" 
              className="w-full h-full object-cover rounded-full"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <p className="font-bold text-gold">Ehima Oziegbe</p>
            <p className="text-[10px] uppercase tracking-widest text-purple-200">Career Strategist</p>
          </div>
        </div>
      </div>
    </div>

    <Footer text="UDOSA 04 | Career & Finance" />
  </div>,

  // 23. WHO’S WHO? Face Challenge - Page 23
  <div className="page-a4 overflow-hidden flex flex-col mx-auto bg-white shadow-2xl print:m-0 print:shadow-none print:page-break-after-always">
    <div className="bg-purple w-full h-24 flex flex-col items-center justify-center px-8 shrink-0 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple via-purple/90 to-purple opacity-50" />
      <img src={LOGO_URL} alt="UDOSA Logo" className="h-10 object-contain mb-1 relative z-10" referrerPolicy="no-referrer" />
      <h2 className="text-2xl font-serif font-black tracking-[0.3em] relative z-10">
        <span className="text-pink">WHO'S</span> <span className="text-gold">WHO?</span>
      </h2>
    </div>

    <div className="p-8 flex-grow overflow-hidden flex flex-col">
      <div className="mb-6 text-center">
        <h3 className="text-xl font-serif font-bold text-purple uppercase tracking-widest">The UDOSA 04 Face Challenge</h3>
        <p className="text-pink font-serif italic text-sm mt-1">Can you recognize your classmates after 20 years? Click to reveal!</p>
        <div className="w-20 h-1 bg-gold mx-auto mt-2" />
      </div>

      <div className="grid grid-cols-3 gap-4 flex-grow overflow-hidden">
        {GALLERY_PHOTOS.slice(0, 6).map((photo, i) => (
          <GalleryItem key={i} src={photo.src} number={i + 1} name={photo.name} />
        ))}
      </div>
    </div>
    <Footer text="UDOSA 04 | 20 Years of Transformation" />
  </div>,

  // 24. WHO’S WHO? Face Challenge - Page 24
  <div className="page-a4 overflow-hidden flex flex-col mx-auto bg-white shadow-2xl print:m-0 print:shadow-none print:page-break-after-always">
    <div className="bg-purple w-full h-20 flex flex-col items-center justify-center px-8 shrink-0 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple via-purple/90 to-purple opacity-50" />
      <h2 className="text-xl font-serif font-black tracking-[0.3em] relative z-10 text-white">
        WHO'S WHO: <span className="text-gold uppercase">CONTINUED</span>
      </h2>
    </div>

    <div className="p-8 flex-grow overflow-hidden flex flex-col">
      <div className="grid grid-cols-3 gap-4 flex-grow overflow-hidden">
        {GALLERY_PHOTOS.slice(6, 12).map((photo, i) => (
          <GalleryItem key={i + 6} src={photo.src} number={i + 7} name={photo.name} />
        ))}
      </div>
    </div>
    <Footer text="UDOSA 04 | 20 Years of Transformation" />
  </div>,

  // 25. WHO’S WHO? Face Challenge - Page 25
  <div className="page-a4 overflow-hidden flex flex-col mx-auto bg-white shadow-2xl print:m-0 print:shadow-none print:page-break-after-always">
    <div className="bg-purple w-full h-20 flex flex-col items-center justify-center px-8 shrink-0 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple via-purple/90 to-purple opacity-50" />
      <h2 className="text-xl font-serif font-black tracking-[0.3em] relative z-10 text-white">
        WHO'S WHO: <span className="text-gold uppercase">FINAL ROUND</span>
      </h2>
    </div>

    <div className="p-8 flex-grow overflow-hidden flex flex-col">
      <div className="grid grid-cols-3 gap-4 flex-grow overflow-hidden">
        {GALLERY_PHOTOS.slice(12, 21).map((photo, i) => {
          const number = i + 13;
          let position = "object-top";
          if (number === 15) position = "object-center";
          if (number === 18) position = "object-bottom";
          return (
            <GalleryItem 
              key={i + 12} 
              src={photo.src} 
              number={number} 
              name={photo.name} 
              objectPosition={position}
            />
          );
        })}
      </div>
    </div>
    <Footer text="UDOSA 04 | 20 Years of Transformation" />
  </div>,

  // 26. WHO’S WHO? Face Challenge & Answer Key - Page 26
  <div className="page-a4 overflow-hidden flex flex-col mx-auto bg-white shadow-2xl print:m-0 print:shadow-none print:page-break-after-always">
    <div className="bg-purple w-full h-20 flex flex-col items-center justify-center px-8 shrink-0 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple via-purple/90 to-purple opacity-50" />
      <h2 className="text-xl font-serif font-black tracking-[0.3em] relative z-10 text-white">
        THE REVEAL: <span className="text-gold uppercase">ANSWER KEY</span>
      </h2>
    </div>

    <div className="p-10 flex-grow overflow-hidden flex flex-col">
      <div className="mb-8 text-center">
        <h3 className="text-2xl font-serif font-bold text-purple uppercase tracking-widest">How well do you know them?</h3>
        <p className="text-pink font-serif italic text-base">The official list of our featured alumni.</p>
        <div className="w-20 h-1 bg-gold mx-auto mt-2" />
      </div>

      <div className="grid grid-cols-2 gap-x-12 gap-y-4 flex-grow overflow-hidden">
        {GALLERY_PHOTOS.map((photo, i) => (
          <div key={i} className="flex items-center gap-4 border-b border-stone-100 pb-2">
            <div className="w-10 h-10 rounded-full bg-purple text-gold flex items-center justify-center font-black shrink-0 shadow-md">
              {i + 1}
            </div>
            <p className="text-lg font-serif font-bold text-slate-800">{photo.name}</p>
          </div>
        ))}
      </div>

      <div className="mt-auto p-8 bg-pink/5 rounded-3xl border-2 border-pink/10 text-center">
        <p className="text-xl font-serif italic text-purple leading-relaxed">
          "Time may change our faces, but it can never erase the memories we shared in those classrooms. Here's to twenty years of growth, success, and enduring friendship!"
        </p>
      </div>
    </div>
    <Footer text="UDOSA 04 | 20 Years of Transformation" />
  </div>,

  // 27. Feature Article (Two Decades of Impact)
  <div className="page-a4 overflow-hidden flex flex-col mx-auto bg-white shadow-2xl print:m-0 print:shadow-none print:page-break-after-always">
    <div className="bg-purple w-full h-24 flex items-center justify-center px-8 shrink-0 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple via-purple/90 to-purple opacity-50" />
      <img src={LOGO_URL} alt="UDOSA Logo" className="h-10 object-contain mr-6 relative z-10" referrerPolicy="no-referrer" />
      <h2 className="text-2xl font-serif font-black tracking-[0.2em] relative z-10 text-white uppercase">
        Special <span className="text-gold italic">Feature</span>
      </h2>
    </div>

    <div className="p-10 flex-grow overflow-hidden flex flex-col">
      <div className="mb-8">
        <h2 className="text-5xl font-serif font-black leading-tight tracking-tighter text-purple uppercase">
          Two Decades: <br /><span className="text-pink italic">A Retrospective</span>
        </h2>
        <p className="text-gold font-serif italic text-lg mt-2">By the Editorial Team</p>
        <div className="w-20 h-1 bg-gold mt-4" />
      </div>

      <div className="grid grid-cols-1 gap-8 flex-grow">
        <div className="space-y-6 text-slate-700 leading-relaxed text-[15px] font-serif text-justify">
          <p className="first-letter:text-7xl first-letter:font-black first-letter:text-purple first-letter:float-left first-letter:mr-3 first-letter:mt-1">
            Twenty years. It sounds like a lifetime, yet it feels like only yesterday we were navigating the corridors of UNIBEN Demonstration Secondary School. The Class of 2004 wasn't just another batch; we were a vibrant tapestry of dreamers, achievers, and friends.
          </p>
          <p>
            Looking back, the impact of our set is undeniable. From the medical doctors saving lives across the globe to the engineers building the infrastructure of the future, and the entrepreneurs creating jobs and innovation—our reach is truly global. But beyond the professional accolades, it's the spirit of solidarity that defines us.
          </p>
          <p>
            In the last two decades, we've celebrated weddings, welcomed new lives, and stood together in times of grief. We've proven that the bonds formed in adolescence can withstand the test of time and distance. Our recent initiatives to give back to our alma mater—the pitch renovation, the water project, the scholarships—are a testament to our gratitude for the foundation we received.
          </p>
          <p>
            As we flip through these pages, let's not just look at the photos; let's remember the laughter, the shared struggles, and the shared triumphs. Here's to the next twenty years. May we continue to lead, to serve, and to connect.
          </p>
        </div>

        <div className="w-full h-48 rounded-2xl overflow-hidden shadow-lg border-2 border-gold relative">
          <img 
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000" 
            alt="Graduation Memories" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-purple/20" />
        </div>
      </div>
    </div>
    <Footer text="UDOSA 04 | 20 Years of Excellence" />
  </div>,

  // 28. Moments of Solidarity - Page 1
  <div className="page-a4 overflow-hidden flex flex-col mx-auto bg-white shadow-2xl print:m-0 print:shadow-none print:page-break-after-always">
    <div className="bg-purple w-full h-24 flex items-center justify-center px-8 shrink-0 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple via-purple/90 to-purple opacity-50" />
      <img src={LOGO_URL} alt="UDOSA Logo" className="h-10 object-contain mr-6 relative z-10" referrerPolicy="no-referrer" />
      <h2 className="text-2xl font-serif font-black tracking-[0.2em] relative z-10 text-white uppercase">
        Moments of <span className="text-gold italic">Solidarity</span>
      </h2>
    </div>

    <div className="p-8 flex-grow overflow-hidden flex flex-col">
      <div className="mb-6 text-center">
        <h3 className="text-xl font-serif font-bold text-purple uppercase tracking-widest">Standing Together: A Photo Journal</h3>
        <p className="text-pink font-serif italic text-sm mt-1">Capturing the times we've come together to support our own and our alma mater.</p>
        <div className="w-20 h-1 bg-gold mx-auto mt-2" />
      </div>

      <div className="grid grid-cols-2 gap-4 flex-grow overflow-hidden">
        {SOLIDARITY_PHOTOS.slice(0, 4).map((photo, i) => (
          <div key={i} className="relative group overflow-hidden rounded-xl border-2 border-gold/30 shadow-lg h-[240px]">
            <img 
              src={photo.src} 
              alt={`Solidarity ${i + 1}`} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple/90 to-transparent p-4">
              <p className="text-white font-serif italic text-xs leading-tight">{photo.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer text="UDOSA 04 | Stronger Together" />
  </div>,

  // 29. Moments of Solidarity - Page 2
  <div className="page-a4 overflow-hidden flex flex-col mx-auto bg-white shadow-2xl print:m-0 print:shadow-none print:page-break-after-always">
    <div className="bg-purple w-full h-20 flex items-center justify-center px-8 shrink-0 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple via-purple/90 to-purple opacity-50" />
      <h2 className="text-xl font-serif font-black tracking-[0.2em] relative z-10 text-white uppercase">
        Solidarity: <span className="text-gold uppercase">CONTINUED</span>
      </h2>
    </div>

    <div className="p-8 flex-grow overflow-hidden flex flex-col">
      <div className="grid grid-cols-2 gap-4 flex-grow overflow-hidden">
        {SOLIDARITY_PHOTOS.slice(4, 8).map((photo, i) => (
          <div key={i + 4} className="relative group overflow-hidden rounded-xl border-2 border-gold/30 shadow-lg h-[240px]">
            <img 
              src={photo.src} 
              alt={`Solidarity ${i + 5}`} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple/90 to-transparent p-4">
              <p className="text-white font-serif italic text-xs leading-tight">{photo.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer text="UDOSA 04 | Stronger Together" />
  </div>,

  // 30. Moments of Solidarity - Page 3
  <div className="page-a4 overflow-hidden flex flex-col mx-auto bg-white shadow-2xl print:m-0 print:shadow-none print:page-break-after-always">
    <div className="bg-purple w-full h-20 flex items-center justify-center px-8 shrink-0 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple via-purple/90 to-purple opacity-50" />
      <h2 className="text-xl font-serif font-black tracking-[0.2em] relative z-10 text-white uppercase">
        Solidarity: <span className="text-gold uppercase">FINAL CHAPTER</span>
      </h2>
    </div>

    <div className="p-8 flex-grow overflow-hidden flex flex-col">
      <div className="grid grid-cols-2 gap-4 flex-grow overflow-hidden">
        {SOLIDARITY_PHOTOS.slice(8, 12).map((photo, i) => (
          <div key={i + 8} className="relative group overflow-hidden rounded-xl border-2 border-gold/30 shadow-lg h-[240px]">
            <img 
              src={photo.src} 
              alt={`Solidarity ${i + 9}`} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple/90 to-transparent p-4">
              <p className="text-white font-serif italic text-xs leading-tight">{photo.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer text="UDOSA 04 | Stronger Together" />
  </div>,

  // 31. Class Directory
  <div className="page-a4 overflow-hidden flex flex-col mx-auto bg-white shadow-2xl print:m-0 print:shadow-none print:page-break-after-always">
    <div className="bg-purple w-full h-24 flex items-center justify-center px-8 shrink-0 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple via-purple/90 to-purple opacity-50" />
      <img src={LOGO_URL} alt="UDOSA Logo" className="h-10 object-contain mr-6 relative z-10" referrerPolicy="no-referrer" />
      <h2 className="text-2xl font-serif font-black tracking-[0.2em] relative z-10 text-white uppercase">
        Class <span className="text-gold italic">Directory</span>
      </h2>
    </div>

    <div className="p-10 flex-grow overflow-hidden flex flex-col">
      <div className="mb-8 text-center">
        <h3 className="text-2xl font-serif font-bold text-purple uppercase tracking-widest">UDOSA 04 Alumni Network</h3>
        <p className="text-pink font-serif italic text-base">Connecting the Class of 2004 across the globe.</p>
        <div className="w-20 h-1 bg-gold mx-auto mt-2" />
      </div>

      <div className="grid grid-cols-3 gap-x-8 gap-y-4 flex-grow overflow-hidden">
        {[
          "Abudu, Osas", "Aghedo, Osas", "Aigbe, Osas", "Aikhionbare, Osas", "Akinyemi, Osas",
          "Alile, Osas", "Amadasun, Osas", "Anenih, Osas", "Arasomwan, Osas", "Asuen, Osas",
          "Atu, Osas", "Azikiwe, Ifeoma", "Bazuaye, Osas", "Eboigbe, Osas", "Edokpolo, Osas",
          "Eghobamien, Osas", "Eguakun, Osas", "Ehanire, Osas", "Ehiorobo, Osas", "Ekhator, Osas",
          "Ekhosuehi, Osas", "Ekwueme, Osas", "Enabulele, Osas", "Enahoro, Osas", "Erhabor, Osas",
          "Ewere, Osas", "Igbinedion, Osas", "Igbinoba, Osas", "Igbinosun, Osas", "Ighodaro, Osas",
          "Imasuen, Osas", "Iredia, Osas", "Irowa, Osas", "Isibor, Osas", "Itua, Osas",
          "Iyamu, Osas", "Izilein, Osas", "Obaseki, Osas", "Obasuyi, Osas", "Odia, Osas",
          "Ogbeide, Irene", "Ogbemudia, Osas", "Ogbemudia, Osas", "Ogiemwonyi, Osas", "Ogiso, Osas", "Ojo, Owen",
          "Okundaye, Osas", "Okungbowa, Osas", "Okunzuwa, Osas", "Olaye, Osas", "Omigie, Osas",
          "Omorogbe, Osas", "Omoruyi, Osas", "Onaiwu, Osas", "Osadolor, Osas", "Osaghae, Osas",
          "Osagie, Osas", "Osahon, Osas", "Osamwonyi, Osas", "Osarenkhoe, Osas", "Osayande, Osas",
          "Osemwengie, Osas", "Oviawe, Osas", "Oziegbe, Ehima", "Uwaifo, Osas", "Uwoghiren, Osas"
        ].map((name, i) => (
          <div key={i} className="flex items-center gap-2 border-b border-stone-100 pb-1">
            <div className="w-1.5 h-1.5 rounded-full bg-pink shrink-0" />
            <p className="text-[13px] font-serif font-bold text-slate-800 truncate">{name}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-purple/5 rounded-2xl border border-purple/10 text-center">
        <p className="text-sm font-serif italic text-purple">
          "This directory is a living document. To update your details or join the official UDOSA 04 platform, please contact the secretariat."
        </p>
      </div>
    </div>
    <Footer text="UDOSA 04 | Our Global Network" />
  </div>,

  // 32. Throwback Gallery
  <div className="page-a4 overflow-hidden flex flex-col mx-auto bg-white shadow-2xl print:m-0 print:shadow-none print:page-break-after-always">
    <div className="bg-purple w-full h-24 flex items-center justify-center px-8 shrink-0 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple via-purple/90 to-purple opacity-50" />
      <img src={LOGO_URL} alt="UDOSA Logo" className="h-10 object-contain mr-6 relative z-10" referrerPolicy="no-referrer" />
      <h2 className="text-2xl font-serif font-black tracking-[0.2em] relative z-10 text-white uppercase">
        Throwback <span className="text-gold italic">Gallery</span>
      </h2>
    </div>

    <div className="p-8 flex-grow overflow-hidden flex flex-col">
      <div className="mb-6 text-center">
        <h3 className="text-xl font-serif font-bold text-purple uppercase tracking-widest">A Trip Down Memory Lane</h3>
        <p className="text-pink font-serif italic text-sm mt-1">Reliving the moments that defined our secondary school years.</p>
        <div className="w-20 h-1 bg-gold mx-auto mt-2" />
      </div>

      <div className="grid grid-cols-3 gap-4 flex-grow overflow-hidden">
        {[
          "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=400",
          "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=400",
          "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=400",
          "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=400",
          "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=400",
          "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=400",
          "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=400",
          "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=400",
          "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=400"
        ].map((src, i) => (
          <div key={i} className="relative group overflow-hidden rounded-xl border-2 border-gold/30 shadow-lg h-[180px]">
            <img 
              src={src} 
              alt={`Throwback ${i + 1}`} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale hover:grayscale-0"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
      </div>
    </div>
    <Footer text="UDOSA 04 | Forever Young" />
  </div>,

  // 33. Business Showcase
  <div className="page-a4 overflow-hidden flex flex-col mx-auto bg-white shadow-2xl print:m-0 print:shadow-none print:page-break-after-always">
    <div className="bg-purple w-full h-24 flex items-center justify-center px-8 shrink-0 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple via-purple/90 to-purple opacity-50" />
      <img src={LOGO_URL} alt="UDOSA Logo" className="h-10 object-contain mr-6 relative z-10" referrerPolicy="no-referrer" />
      <h2 className="text-2xl font-serif font-black tracking-[0.2em] relative z-10 text-white uppercase">
        Business <span className="text-gold italic">Showcase</span>
      </h2>
    </div>

    <div className="p-10 flex-grow overflow-hidden flex flex-col">
      <div className="mb-8 text-center">
        <h3 className="text-2xl font-serif font-bold text-purple uppercase tracking-widest">Alumni Entrepreneurship</h3>
        <p className="text-pink font-serif italic text-base">Supporting the businesses of our fellow classmates.</p>
        <div className="w-20 h-1 bg-gold mx-auto mt-2" />
      </div>

      <div className="grid grid-cols-2 gap-6 flex-grow overflow-hidden">
        {[
          { n: "Luxe Events", o: "Ifeoma Azikiwe", d: "Premium event planning and management services.", c: "+234 801 234 5678" },
          { n: "TechNova Solutions", o: "Owen Ojo", d: "Innovative software development and IT consulting.", c: "info@technova.com" },
          { n: "Healthy Bites", o: "Irene Ogbeide", d: "Organic snacks and nutritional consulting.", c: "@healthybites_ng" },
          { n: "Zenith Law Firm", o: "Osas Ighodaro", d: "Comprehensive legal services for businesses and individuals.", c: "www.zenithlaw.com" },
          { n: "Apex Engineering", o: "Ehima Oziegbe", d: "Structural design and construction management.", c: "0802 345 6789" },
          { n: "Creative Minds Studio", o: "Osas Edokpolo", d: "Graphic design, branding, and digital marketing.", c: "@creativeminds_ng" }
        ].map((biz, i) => (
          <div key={i} className="bg-purple/5 p-6 rounded-2xl border-2 border-gold/20 flex flex-col justify-between shadow-sm hover:border-gold transition-colors">
            <div>
              <h4 className="text-xl font-serif font-bold text-purple mb-1">{biz.n}</h4>
              <p className="text-[10px] text-pink font-bold uppercase tracking-widest">Owner: {biz.o}</p>
              <p className="text-[13px] text-slate-600 leading-relaxed font-serif mb-4">{biz.d}</p>
            </div>
            <div className="pt-4 border-t border-gold/10">
              <p className="text-[11px] font-bold text-purple uppercase tracking-tighter">Contact: <span className="text-gold">{biz.c}</span></p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-pink/5 rounded-2xl border border-pink/10 text-center">
        <p className="text-[15px] font-serif italic text-purple">
          "Patronize your own. Let's build a thriving economic ecosystem within the UDOSA 04 family."
        </p>
      </div>
    </div>
    <Footer text="UDOSA 04 | Empowering Our Own" />
  </div>
];
