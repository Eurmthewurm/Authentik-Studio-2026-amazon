import React from 'react';
import { Section } from '../types';

interface HeroProps {
  setSection: (s: Section) => void;
}

const Hero: React.FC<HeroProps> = ({ setSection }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-brand-cream">
      {/* Financial Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center z-10 pt-10">
        
        <div className="lg:col-span-7 text-left">
            <div className="inline-flex items-center gap-2 mb-8 px-3 py-1 border border-brand-black/10 bg-white rounded-full text-[10px] font-mono font-bold tracking-widest uppercase text-gray-500">
                <span className="w-1.5 h-1.5 bg-brand-green rounded-full animate-pulse"></span>
                Amazon Brands Active: Blackmagic • PupFlask • Hartspan
            </div>
            
            <h1 className="font-serif text-6xl md:text-7xl font-medium leading-[0.95] mb-8 text-brand-black tracking-tight">
            Your product is a <br/> commodity. <br />
            <span className="italic text-brand-green">Your story is the monopoly.</span>
            </h1>
            
            <p className="font-sans text-xl text-gray-600 mb-10 max-w-xl leading-relaxed">
            Best-selling Amazon brands are losing 15% of traffic to generic copycats. We stop the bleeding by deploying <strong>Search Intercept Content</strong> (Phase 1) and cinema-grade <strong>Founder Origin Films</strong> (Phase 2).
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 items-start">
            <button 
                onClick={() => setSection(Section.TOOL)}
                className="group relative px-8 py-4 bg-brand-black text-white text-xs font-mono font-bold tracking-widest uppercase overflow-hidden transition-all hover:bg-brand-green"
            >
                <span className="relative z-10">Calculate Lost Revenue</span>
            </button>
            <button 
                onClick={() => setSection(Section.PROCESS)}
                className="px-8 py-4 border-b border-brand-black text-brand-black text-xs font-mono font-bold tracking-widest uppercase hover:text-brand-green hover:border-brand-green transition-colors"
            >
                See The Founder Protocol
            </button>
            </div>
        </div>

        {/* The 'Numbers' Card - Proving the ROI of the Story */}
        <div className="lg:col-span-5 hidden lg:block">
            <div className="bg-white p-8 border border-brand-black/5 shadow-2xl relative">
                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 bg-brand-black text-white px-4 py-2 font-mono text-xs font-bold uppercase tracking-widest rotate-3 shadow-lg">
                    Market Analysis
                </div>

                <div className="flex justify-between border-b border-gray-100 pb-4 mb-6">
                    <div className="text-xs font-mono text-gray-400 uppercase">Unit Economics Simulation</div>
                    <div className="text-xs font-mono text-brand-red font-bold uppercase animate-pulse">Live Scenario</div>
                </div>

                <div className="space-y-6">
                    {/* Scenario A: Commodity */}
                    <div className="opacity-50">
                        <div className="flex justify-between items-center mb-1">
                            <span className="font-serif text-lg text-gray-600">Scenario A: Commodity</span>
                            <span className="font-mono text-xs text-brand-red bg-brand-red/10 px-2 py-1 rounded">High Risk</span>
                        </div>
                        <div className="flex justify-between text-sm font-mono text-gray-500 mb-2">
                            <span>Strategy: Feature/Price War</span>
                            <span>Result: Margin Compression</span>
                        </div>
                        <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                            <div className="bg-brand-red w-[12%] h-full"></div>
                        </div>
                        <div className="text-right mt-1 font-mono text-xs text-brand-red">Net Margin: 12%</div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-gray-100 relative flex items-center justify-center">
                        <span className="bg-white px-2 text-[10px] font-mono text-gray-400 uppercase">The "Founder Story" Delta</span>
                    </div>

                    {/* Scenario B: Brand */}
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <span className="font-serif text-xl text-brand-black">Scenario B: Authority Brand</span>
                            <span className="font-mono text-xs text-brand-green bg-brand-green/10 px-2 py-1 rounded">Optimized</span>
                        </div>
                        <div className="flex justify-between text-sm font-mono text-gray-500 mb-2">
                            <span>Strategy: Founder Story Moat</span>
                            <span>Result: Premium Pricing</span>
                        </div>
                        <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                            <div className="bg-brand-green w-[28%] h-full"></div>
                        </div>
                         <div className="text-right mt-1 font-mono text-xs text-brand-green font-bold">Net Margin: 28%</div>
                    </div>

                    <div className="p-4 bg-brand-black text-white mt-4 rounded-sm border-l-4 border-brand-gold">
                        <p className="font-mono text-[10px] text-brand-gold uppercase mb-1">Authentik Insight</p>
                        <p className="font-serif italic text-sm leading-tight">"Consumers will pay a 40% premium for a product with a Founder Story they trust. It is the only legal monopoly on Amazon."</p>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;