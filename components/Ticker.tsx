import React from 'react';

const Ticker: React.FC = () => {
  return (
    <div className="bg-brand-black text-white overflow-hidden py-2 border-b border-white/10 relative z-50">
      <div className="flex animate-ticker whitespace-nowrap gap-12 font-mono text-xs font-medium uppercase tracking-widest opacity-80">
        <span className="text-brand-green">CLIENTS: BLACKMAGIC DESIGN • PUPFLASK • HARTSPAN</span>
        <span className="text-gray-400">MARGIN IMPACT: -4.2%</span>
        <span className="text-brand-green">SOCIAL SEARCH (TT/IG/FB/YT): +140% YOY</span>
        <span className="text-brand-red">Avg CAC: +12%</span>
        <span className="text-white">OMNI-CHANNEL DEFENSE: ACTIVE</span>
        <span className="text-brand-green">CLIENTS: BLACKMAGIC DESIGN • PUPFLASK • HARTSPAN</span>
        <span className="text-gray-400">MARGIN IMPACT: -4.2%</span>
        <span className="text-brand-green">FB REELS DEMAND: +85% YOY</span>
        <span className="text-brand-red">Avg CAC: +12%</span>
        <span className="text-white">OMNI-CHANNEL DEFENSE: ACTIVE</span>
      </div>
    </div>
  );
};

export default Ticker;