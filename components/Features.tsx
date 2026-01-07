import React from 'react';

const Features: React.FC = () => {
  return (
    <section className="py-32 bg-brand-black text-brand-cream">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-24 grid md:grid-cols-2 gap-12 border-b border-white/10 pb-12">
            <div>
                <span className="text-brand-gold font-mono font-bold tracking-widest uppercase text-xs mb-4 block">// The Leakage Report</span>
                <h2 className="font-serif text-5xl md:text-6xl mb-6 leading-none">
                The "Visual Gap" <br/>is costing you millions.
                </h2>
            </div>
            <div className="flex items-end">
                <p className="font-sans text-gray-400 text-lg leading-relaxed max-w-md">
                    Shoppers don't trust Amazon reviews anymore. They leave your listing to find "real" proof on TikTok, Reels (Facebook & Instagram), and Shorts. If you aren't there to intercept them, you lose the sale to a competitor who is.
                </p>
            </div>
        </div>

        {/* Visualization */}
        <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Step 1: Amazon */}
            <div className="relative group">
                <div className="absolute top-0 right-0 -mr-4 -mt-4 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center font-mono font-bold text-white z-20">1</div>
                <div className="bg-neutral-900 border border-white/10 p-6 h-full transition-colors hover:border-brand-gold/50">
                    <div className="h-48 bg-white/5 mb-6 flex items-center justify-center relative overflow-hidden">
                        {/* Abstract UI for Amazon */}
                        <div className="w-3/4 space-y-2">
                            <div className="h-2 w-1/3 bg-white/20 rounded"></div>
                            <div className="h-8 w-full bg-white/10 rounded"></div>
                            <div className="flex gap-2 mt-4">
                                <div className="h-16 w-16 bg-white/10 rounded"></div>
                                <div className="flex-1 space-y-2">
                                    <div className="h-2 w-full bg-white/10 rounded"></div>
                                    <div className="h-2 w-2/3 bg-white/10 rounded"></div>
                                </div>
                            </div>
                        </div>
                        {/* Arrow */}
                        <div className="absolute right-4 top-1/2 -translate-y-1/2">
                             <svg className="w-6 h-6 text-brand-red animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </div>
                    </div>
                    <h3 className="font-serif text-2xl mb-2 text-white">The Exit</h3>
                    <p className="font-mono text-xs text-brand-red uppercase tracking-widest mb-4">Risk: High</p>
                    <p className="text-gray-400 text-sm">Customer has "Review Doubt." They like the specs but don't trust the photos. They copy your product name.</p>
                </div>
            </div>

            {/* Step 2: The Search */}
            <div className="relative group">
                <div className="absolute top-0 right-0 -mr-4 -mt-4 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center font-mono font-bold text-white z-20">2</div>
                <div className="bg-neutral-900 border border-white/10 p-6 h-full transition-colors hover:border-brand-gold/50">
                    <div className="h-48 bg-black mb-6 flex flex-col items-center justify-center border border-white/5 relative">
                         {/* Social Icons BG */}
                         <div className="absolute inset-0 flex items-center justify-center gap-8 opacity-20">
                            <div className="w-8 h-8 rounded-full bg-white/10"></div>
                            <div className="w-8 h-8 rounded-full bg-white/10"></div>
                            <div className="w-8 h-8 rounded-full bg-white/10"></div>
                         </div>
                         {/* Abstract UI for Social Search */}
                         <div className="w-48 border border-white/20 p-2 rounded-full flex items-center justify-between px-4 z-10 bg-black">
                            <span className="text-xs text-white">product name review</span>
                            <svg className="w-3 h-3 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                         </div>
                    </div>
                    <h3 className="font-serif text-2xl mb-2 text-white">The Social Search</h3>
                    <p className="font-mono text-xs text-brand-gold uppercase tracking-widest mb-4">Opportunity: Massive</p>
                    <p className="text-gray-400 text-sm">They search TikTok, FB Reels, or YouTube. Currently, they find your competitor's "Best of" list or a generic unboxing.</p>
                </div>
            </div>

             {/* Step 3: The Intercept */}
             <div className="relative group">
                <div className="absolute top-0 right-0 -mr-4 -mt-4 w-12 h-12 bg-brand-green text-white rounded-full flex items-center justify-center font-mono font-bold z-20">3</div>
                <div className="bg-brand-green/10 border border-brand-green p-6 h-full relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-brand-green"></div>
                    <div className="h-48 bg-black/20 mb-6 flex items-center justify-center relative">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                         <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded border border-white/20">
                            <p className="font-serif italic text-white text-lg">"Here is why I returned the other one..."</p>
                         </div>
                    </div>
                    <h3 className="font-serif text-2xl mb-2 text-white">The Intercept</h3>
                    <p className="font-mono text-xs text-brand-green uppercase tracking-widest mb-4">Result: Conversion</p>
                    <p className="text-gray-400 text-sm">We place a "Truth" video right at the top of search results. It answers their specific doubt and sends them back to buy.</p>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Features;