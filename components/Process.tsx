import React from 'react';

const Process: React.FC = () => {
  return (
    <section className="py-24 bg-brand-cream border-b border-brand-black/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-green font-mono font-bold tracking-widest uppercase text-xs mb-2 block">// The Execution Roadmap</span>
          <h2 className="font-serif text-4xl md:text-5xl text-brand-black">How we burn the boats.</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Phase 1 */}
          <div className="p-10 bg-white border border-brand-black/10 hover:border-brand-green transition-all duration-300 relative overflow-hidden group shadow-sm hover:shadow-xl">
            <div className="absolute top-0 left-0 bg-brand-black text-white px-4 py-1 font-mono text-xs font-bold uppercase tracking-widest">Phase 1</div>
            <div className="absolute top-0 right-0 p-4 opacity-10 font-serif text-8xl leading-none text-brand-black pointer-events-none">01</div>
            
            <h3 className="text-3xl font-serif font-bold mt-4 mb-2 text-brand-black">The Cash Flow Injection</h3>
            <p className="text-brand-green font-mono text-xs uppercase tracking-wider mb-6 font-bold">Objective: Traffic Recovery</p>
            
            <p className="text-gray-600 leading-relaxed mb-8 text-sm">
              We stop the immediate bleeding. We take your existing assets and create "Search Intercept" videos to hijack the traffic currently flowing to your competitors on TikTok and Reels.
            </p>
            
            <div className="bg-brand-cream p-4 border border-brand-black/5 rounded-sm">
                <p className="font-mono text-xs text-gray-500 uppercase mb-2">Deliverables (T+7 Days)</p>
                <ul className="space-y-2 font-sans text-sm font-medium text-brand-black">
                   <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      3x Viral Search Intercepts (Traffic)
                   </li>
                   <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      3x Objection Crushers (Conversion)
                   </li>
                   <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      Visual Gap Audit Report
                   </li>
                </ul>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="p-10 bg-brand-black text-white border border-brand-black relative overflow-hidden group shadow-2xl">
             <div className="absolute top-0 left-0 bg-brand-gold text-brand-black px-4 py-1 font-mono text-xs font-bold uppercase tracking-widest">Phase 2</div>
             <div className="absolute top-0 right-0 p-4 opacity-10 font-serif text-8xl leading-none text-white pointer-events-none">02</div>

            <h3 className="text-3xl font-serif font-bold mt-4 mb-2 text-white">The Profit Moat</h3>
            <p className="text-brand-gold font-mono text-xs uppercase tracking-wider mb-6 font-bold">Objective: Pricing Power</p>
            
            <p className="text-gray-400 leading-relaxed mb-8 text-sm">
              Once traffic is stabilized, we deploy the "Founder Story." This is the only asset that allows you to raise prices while competitors lower theirs. It creates a brand monopoly.
            </p>
            
             <div className="bg-white/5 p-4 border border-white/10 rounded-sm">
                <p className="font-mono text-xs text-gray-500 uppercase mb-2">Deliverables (T+30 Days)</p>
                <ul className="space-y-2 font-sans text-sm font-medium text-white">
                   <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      Cinema-Grade Founder Mini-Doc
                   </li>
                   <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      Amazon Premium A+ Video Module
                   </li>
                   <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      "Why We Exist" Social Ads
                   </li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;