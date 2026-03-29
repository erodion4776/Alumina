import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, ChevronDown, Shield, Scale, Users, Gavel, Landmark, ScrollText, Heart } from 'lucide-react';

const LOGO_URL = "https://i.ibb.co/DHC0kvzR/1000773566-removebg-preview-1.png";

interface ArticleProps {
  title: string;
  content: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  icon: React.ReactNode;
}

const Article: React.FC<ArticleProps> = ({ title, content, isOpen, onToggle, icon }) => {
  return (
    <div className="border-b border-gold/20 last:border-0">
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-center justify-between text-left group hover:bg-purple/5 transition-colors px-4 rounded-xl"
      >
        <div className="flex items-center gap-4">
          <div className={`p-3 rounded-xl transition-colors ${isOpen ? 'bg-gold text-purple' : 'bg-purple/10 text-purple group-hover:bg-pink group-hover:text-white'}`}>
            {icon}
          </div>
          <h3 className={`font-serif font-bold text-lg md:text-xl tracking-tight transition-colors ${isOpen ? 'text-purple' : 'text-slate-700 group-hover:text-purple'}`}>
            {title}
          </h3>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="text-gold"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pb-8 px-6 md:px-20 text-slate-600 font-serif leading-relaxed text-sm md:text-base space-y-4 border-l-4 border-gold/30 ml-8 md:ml-12">
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Constitution: React.FC = () => {
  const [openArticle, setOpenArticle] = useState<number | null>(1);

  const articles = [
    {
      id: 1,
      title: "ARTICLE 1: NAME AND SUPREMACY",
      icon: <Landmark className="w-6 h-6" />,
      content: (
        <>
          <p><strong>1.1 Name:</strong> The Association shall be known, called and addressed as UNIVERSITY OF BENIN DEMONSTRATION SECONDARY SCHOOL OLD STUDENTS ASSOCIATION, CLASS OF 2004 (hereinafter referred to as "UDOSA 04").</p>
          <p><strong>1.2 Supremacy:</strong> This Constitution is supreme and its provisions shall have binding force on all members of the Association. Any action or decision taken by any member or group of members which is inconsistent with the provisions of this Constitution shall, to the extent of such inconsistency, be null and void.</p>
        </>
      )
    },
    {
      id: 2,
      title: "ARTICLE 2: AIMS AND OBJECTIVES",
      icon: <Shield className="w-6 h-6" />,
      content: (
        <>
          <p>The primary objectives of UDOSA 04 shall include:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>To foster unity, progress, and a spirit of brotherhood among all members of the Class of 2004.</li>
            <li>To provide a platform for social interaction, networking, and professional growth.</li>
            <li>To promote the welfare of members through mutual support and solidarity.</li>
            <li>To contribute to the development and prestige of our alma mater, UDSS.</li>
            <li>To undertake charitable projects and community service initiatives as decided by the House.</li>
          </ul>
        </>
      )
    },
    {
      id: 3,
      title: "ARTICLE 3: MEMBERSHIP",
      icon: <Users className="w-6 h-6" />,
      content: (
        <>
          <p><strong>3.1 Eligibility:</strong> Membership is open to all students who were part of the 2004 graduating set of the University of Benin Demonstration Secondary School (UDSS), regardless of whether they completed the full six years or left before graduation.</p>
          <p><strong>3.2 Rights and Privileges:</strong> Every financial member shall have the right to vote and be voted for, participate in all Association activities, and benefit from the welfare schemes of the Association.</p>
          <p><strong>3.3 Financial Member:</strong> A financial member is one who has paid all prescribed dues, levies, and contributions as authorized by the House.</p>
        </>
      )
    },
    {
      id: 4,
      title: "ARTICLE 4: THE EXECUTIVE COMMITTEE (EXCO)",
      icon: <Scale className="w-6 h-6" />,
      content: (
        <>
          <p>The Association shall be administered by an Executive Committee comprising:</p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>President</li>
            <li>Vice President</li>
            <li>Secretary General</li>
            <li>Assistant Secretary General</li>
            <li>Financial Secretary</li>
            <li>Treasurer</li>
            <li>Public Relations Officer (PRO)</li>
            <li>Welfare Officer</li>
            <li>Provost</li>
          </ol>
        </>
      )
    },
    {
      id: 5,
      title: "ARTICLE 5: FUNCTIONS OF OFFICERS & TENURE",
      icon: <ScrollText className="w-6 h-6" />,
      content: (
        <>
          <div className="space-y-4">
            <p><strong>5.1 President:</strong> Shall be the head of the Association, preside over all meetings, and provide strategic leadership.</p>
            <p><strong>5.2 Secretary General:</strong> Shall handle all correspondence, keep minutes of meetings, and maintain the Association's records.</p>
            <p><strong>5.3 Financial Secretary:</strong> Shall keep records of all financial transactions, prepare financial reports, and issue receipts.</p>
            <p><strong>5.4 Treasurer:</strong> Shall be the custodian of the Association's funds, manage bank accounts, and disburse funds as approved.</p>
            <p><strong>5.5 PRO:</strong> Shall be responsible for the Association's image, publicity, and communication with members and external bodies.</p>
            <p><strong>5.6 Tenure:</strong> Executive officers shall serve a term of two (2) years and may be eligible for re-election for one additional term only.</p>
          </div>
        </>
      )
    },
    {
      id: 6,
      title: "ARTICLE 6: FINANCE",
      icon: <Landmark className="w-6 h-6" />,
      content: (
        <>
          <p><strong>6.1 Sources of Income:</strong> The Association's funds shall be derived from monthly dues, special levies, donations, and proceeds from investments or events.</p>
          <p><strong>6.2 Bank Account:</strong> The Association shall maintain a bank account with the President, Secretary, and Treasurer as signatories. Any two of the three (one must be the Treasurer) shall be required for withdrawals.</p>
        </>
      )
    },
    {
      id: 7,
      title: "ARTICLE 7: WELFARE",
      icon: <Heart className="w-6 h-6" />,
      content: (
        <>
          <p>The Association shall maintain a Welfare Scheme to support members during significant life events, including but not limited to:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Bereavement (loss of immediate family members).</li>
            <li>Weddings and Childbirth.</li>
            <li>Critical health challenges.</li>
          </ul>
          <p>The specific benefits and conditions for welfare support shall be defined in the Association's Welfare Policy document.</p>
        </>
      )
    },
    {
      id: 8,
      title: "ARTICLE 8: DISCIPLINE",
      icon: <Gavel className="w-6 h-6" />,
      content: (
        <>
          <p>Any member who brings the Association into disrepute, violates the Constitution, or engages in financial impropriety shall be subject to disciplinary action, which may include fines, suspension, or expulsion, as recommended by a Disciplinary Committee and approved by the House.</p>
        </>
      )
    },
    {
      id: 9,
      title: "ARTICLE 9: MEETINGS",
      icon: <Users className="w-6 h-6" />,
      content: (
        <>
          <p><strong>9.1 General Meetings:</strong> Shall be held periodically (monthly or quarterly) as decided by the EXCO.</p>
          <p><strong>9.2 Emergency Meetings:</strong> May be convened by the President or upon a written request by at least one-third of financial members.</p>
          <p><strong>9.3 Quorum:</strong> A quorum for any general meeting shall be at least 15 financial members.</p>
        </>
      )
    },
    {
      id: 10,
      title: "ARTICLE 10: AMENDMENT",
      icon: <FileText className="w-6 h-6" />,
      content: (
        <>
          <p>This Constitution may be amended by a two-thirds majority vote of financial members present at a General Meeting, provided that notice of the proposed amendment has been circulated at least 30 days prior to the meeting.</p>
        </>
      )
    },
    {
      id: 11,
      title: "ARTICLE 11: DISSOLUTION",
      icon: <Shield className="w-6 h-6" />,
      content: (
        <>
          <p>In the event of dissolution, the assets of the Association, after settlement of all liabilities, shall be donated to UDSS or a charitable organization as decided by the House.</p>
        </>
      )
    },
    {
      id: 12,
      title: "ARTICLE 12: MISCELLANEOUS",
      icon: <ScrollText className="w-6 h-6" />,
      content: (
        <>
          <p>Matters not specifically covered by this Constitution shall be decided by the House in accordance with the spirit of unity and progress.</p>
        </>
      )
    },
    {
      id: 13,
      title: "ARTICLE 13: ADOPTION",
      icon: <Landmark className="w-6 h-6" />,
      content: (
        <>
          <p>This Constitution was formally adopted by the General House of UDOSA Class of 2004 on this day, marking the official commencement of its governance structure.</p>
        </>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50 pb-20">
      {/* Hero Header */}
      <div className="bg-purple py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={LOGO_URL} alt="" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-gold/20 text-gold px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 border border-gold/30"
          >
            <FileText className="w-4 h-4" />
            Official Document
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif font-black text-white mb-6 tracking-tight"
          >
            Bye-Laws & <span className="text-gold italic">Constitution</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/70 font-serif italic text-lg max-w-2xl mx-auto"
          >
            "The legal framework governing the unity, progress, and welfare of the UDSS Class of 2004 Alumni Association."
          </motion.p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 -mt-10 relative z-20">
        <div className="bg-white rounded-3xl shadow-2xl border border-gold/20 overflow-hidden">
          {/* Preamble */}
          <div className="p-8 md:p-12 bg-purple/5 border-b border-gold/10">
            <h2 className="text-purple font-serif font-bold text-2xl uppercase tracking-widest mb-4 flex items-center gap-3">
              <ScrollText className="w-6 h-6 text-gold" />
              Preamble
            </h2>
            <p className="text-slate-700 font-serif italic leading-relaxed text-lg">
              "We, the members of the UDSS Class of 2004, mindful of our shared history and committed to our collective future, do hereby ordain and establish this Constitution to guide our association in the pursuit of excellence, unity, and mutual support."
            </p>
          </div>

          {/* Articles Accordion */}
          <div className="p-4 md:p-8">
            {articles.map((article) => (
              <Article
                key={article.id}
                title={article.title}
                icon={article.icon}
                content={article.content}
                isOpen={openArticle === article.id}
                onToggle={() => setOpenArticle(openArticle === article.id ? null : article.id)}
              />
            ))}
          </div>

          {/* Sign-off Section */}
          <div className="p-8 md:p-12 bg-stone-50 border-t border-gold/20">
            <div className="max-w-md mx-auto p-8 border-2 border-dashed border-gold/30 rounded-2xl bg-white text-center">
              <h4 className="text-purple font-serif font-bold uppercase tracking-widest text-sm mb-6">Certification of Document</h4>
              <div className="space-y-4">
                <div className="border-b border-slate-200 pb-2">
                  <p className="text-slate-400 text-[10px] uppercase tracking-widest mb-1">Prepared By:</p>
                  <p className="text-purple font-serif font-bold text-lg">Cynthia Uzoma Edozie</p>
                </div>
                <div className="pt-4">
                  <div className="w-48 h-px bg-slate-300 mx-auto mb-2" />
                  <p className="text-slate-400 text-[10px] uppercase tracking-widest">Legal Committee / Secretariat</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-slate-400 font-serif italic text-sm">
            Last Updated: March 2026 • UDOSA 04 Official Documentation
          </p>
        </div>
      </div>
    </div>
  );
};
