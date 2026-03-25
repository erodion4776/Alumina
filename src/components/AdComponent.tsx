import React, { useState, useEffect } from 'react';

const AD_HTML_SQUARE = `<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet"><style>body, html { margin: 0; padding: 0; overflow: hidden; font-family: 'Inter', sans-serif; }.banner { width: 300px; height: 250px; background: #0F172A; position: relative; overflow: hidden; cursor: pointer; text-decoration: none; display: block; box-sizing: border-box; border: 1px solid rgba(197, 160, 89, 0.2); }.gold-text { color: #C5A059; }.white-text { color: #FFFFFF; }.slate-text { color: #94A3B8; }.font-serif { font-family: 'Playfair Display', serif; }.cta-button { background: #C5A059; color: #0F172A; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; border: none; border-radius: 4px; display: inline-flex; align-items: center; justify-content: center; transition: all 0.3s ease; }.cta-button:hover { background: #FFFFFF; }.disclaimer { position: absolute; bottom: 4px; right: 8px; font-size: 8px; color: #94A3B8; opacity: 0.7; text-transform: uppercase; letter-spacing: 0.5px; }@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }.animate { animation: fadeIn 0.8s ease forwards; opacity: 0; }.delay-1 { animation-delay: 0.2s; }.delay-2 { animation-delay: 0.4s; }.delay-3 { animation-delay: 0.6s; }</style></head><body><a href="https://cyvisahelp.com/shop?category=VAWA%20Protection" target="_blank" class="banner"><div style="display: flex; flex-direction: column; height: 100%; padding: 24px; text-align: center; align-items: center; justify-content: space-between;"><div class="font-serif gold-text animate delay-1" style="font-size: 20px; font-weight: bold; line-height: 1.2;">VAWA Interview <br> Preparation Guide</div><div class="animate delay-2" style="width: 80px; height: 110px; border: 1px solid rgba(255,255,255,0.1); border-radius: 2px; overflow: hidden;"><img src="https://i.ibb.co/HD5bfwNM/Screenshot-20260313-080952.jpg" style="width: 100%; height: 100%; object-fit: cover;"></div><div class="animate delay-3" style="width: 100%;"><div class="slate-text" style="font-size: 9px; text-transform: uppercase; tracking-widest: 0.1em; margin-bottom: 12px;">100 Expert-Vetted Questions <br> & Strategy Guidance</div><div class="cta-button" style="width: 100%; py: 12px; font-size: 10px; padding: 10px 0;">Access Strategic Blueprint</div></div></div><div class="disclaimer">Educational Content Only</div></a></body></html>`;

const AD_HTML_MOBILE = `<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet"><style>body, html { margin: 0; padding: 0; overflow: hidden; font-family: 'Inter', sans-serif; }.banner { width: 320px; height: 50px; background: #0F172A; position: relative; overflow: hidden; cursor: pointer; text-decoration: none; display: block; border: 1px solid rgba(197, 160, 89, 0.2); }.gold-text { color: #C5A059; }.font-serif { font-family: 'Playfair Display', serif; }@keyframes fadeIn { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }.animate { animation: fadeIn 0.8s ease forwards; opacity: 0; }.delay-1 { animation-delay: 0.2s; }.delay-2 { animation-delay: 0.4s; }</style></head><body><a href="https://cyvisahelp.com/shop?category=VAWA%20Protection" target="_blank" class="banner"><div style="display: flex; align-items: center; height: 100%; padding: 0 12px; gap: 12px;"><div class="animate delay-1" style="width: 24px; height: 32px; border: 1px solid rgba(255,255,255,0.1);"><img src="https://i.ibb.co/HD5bfwNM/Screenshot-20260313-080952.jpg" style="width: 100%; height: 100%; object-fit: cover;"></div><div style="flex-grow: 1;"><div class="font-serif gold-text animate delay-2" style="font-size: 10px; font-weight: bold;">VAWA Interview Guide</div><div style="color: #94A3B8; font-size: 7px; text-transform: uppercase;">100 Expert-Vetted Questions</div></div><div class="animate delay-2" style="background: #C5A059; color: #0F172A; font-size: 8px; font-weight: bold; padding: 6px 10px; border-radius: 2px;">Access Now</div></div></body></html>`;

const AD_HTML_LEADERBOARD = `<!DOCTYPE html><html><head><meta charset="UTF-8"><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet"><style>body, html { margin: 0; padding: 0; overflow: hidden; font-family: 'Inter', sans-serif; }.banner { width: 728px; height: 90px; background: #0F172A; position: relative; border: 1px solid rgba(197, 160, 89, 0.2); display: block; text-decoration: none; }.gold-text { color: #C5A059; }.font-serif { font-family: 'Playfair Display', serif; }</style></head><body><a href="https://cyvisahelp.com/shop?category=VAWA%20Protection" target="_blank" class="banner"><div style="display: flex; align-items: center; h: 100%; padding: 0 24px; gap: 24px; height: 90px;"><img src="https://i.ibb.co/HD5bfwNM/Screenshot-20260313-080952.jpg" style="width: 48px; height: 64px; object-fit: cover; border: 1px solid rgba(255,255,255,0.1);"><div style="flex-grow: 1;"><div class="font-serif gold-text" style="font-size: 18px; font-weight: bold;">VAWA Interview Preparation Guide</div><div style="color: #94A3B8; font-size: 10px; text-transform: uppercase; margin-top: 4px;">100 Expert-Vetted Questions & Strategy Guidance</div></div><div style="background: #C5A059; color: #0F172A; font-size: 10px; font-weight: bold; padding: 12px 24px; text-transform: uppercase; border-radius: 2px;">Access Strategic Blueprint</div></div></body></html>`;

interface AdComponentProps {
  type?: 'responsive' | 'square';
  className?: string;
}

export const AdComponent: React.FC<AdComponentProps> = ({ type = 'responsive', className = '' }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  let adHtml = '';
  let width = 0;
  let height = 0;

  if (type === 'square') {
    adHtml = AD_HTML_SQUARE;
    width = 300;
    height = 250;
  } else {
    if (isMobile) {
      adHtml = AD_HTML_MOBILE;
      width = 320;
      height = 50;
    } else {
      adHtml = AD_HTML_LEADERBOARD;
      width = 728;
      height = 90;
    }
  }

  return (
    <div className={`flex flex-col items-center justify-center py-4 ${className}`}>
      <span className="text-[8px] font-bold text-[#94A3B8] uppercase tracking-widest mb-1">Advertisement</span>
      <div 
        style={{ width: `${width}px`, height: `${height}px` }}
        className="overflow-hidden rounded shadow-lg border border-white/10"
      >
        <iframe
          srcDoc={adHtml}
          width={width}
          height={height}
          frameBorder="0"
          scrolling="no"
          title="Advertisement"
        />
      </div>
    </div>
  );
};
