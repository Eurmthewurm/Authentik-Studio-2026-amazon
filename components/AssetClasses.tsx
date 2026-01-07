import React from 'react';

const AssetClasses: React.FC = () => {
  return (
    <section className="bg-brand-black text-white py-24 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
            <span className="text-brand-gold font-mono font-bold tracking-widest uppercase text-xs mb-2 block">// The Armory</span>
            <h2 className="font-serif text-4xl md:text-5xl text-white">Assets That Lower CAC</h2>
            <p className="mt-4 text-gray-400 max-w-2xl font-sans leading-relaxed">
                We don't do "creative for creative's sake." We build three specific assets designed to lower your acquisition costs and defend your margins.
            </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
            {/* Asset 1 */}
            <div className="bg-neutral-900 border border-white/10 p-8 hover:border-brand-green/50 transition-colors group">
                <div className="flex justify-between items-start mb-6">
                    <h3 className="font-serif text-2xl text-white">The Search Intercept</h3>
                    <span className="font-mono text-[10px] text-brand-green border border-brand-green px-2 py-1 uppercase rounded-sm">Traffic</span>
                </div>
                <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                    Designed for <strong>TikTok SEO & YouTube Shorts</strong>. We identify the exact question customers type before buying ("Is [Product] worth it?") and answer it with authority, directing traffic to your listing.
                </p>
                <div className="border-t border-white/5 pt-4">
                    <div className="flex justify-between text-xs font-mono text-gray-500 uppercase">
                        <span>Format</span>
                        <span className="text-white">9:16 Vertical</span>
                    </div>
                </div>
            </div>

            {/* Asset 2 */}
            <div className="bg-neutral-900 border border-white/10 p-8 hover:border-brand-gold/50 transition-colors group">
                 <div className="flex justify-between items-start mb-6">
                    <h3 className="font-serif text-2xl text-white">The Objection Crusher</h3>
                    <span className="font-mono text-[10px] text-brand-gold border border-brand-gold px-2 py-1 uppercase rounded-sm">Conversion</span>
                </div>
                <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                    Deployed on <strong>IG/FB Reels & Amazon Video</strong>. We take the top 3 negative reviews of your competitors and visually prove why your product solves that specific pain point.
                </p>
                <div className="border-t border-white/5 pt-4">
                    <div className="flex justify-between text-xs font-mono text-gray-500 uppercase">
                        <span>Format</span>
                        <span className="text-white">Silent/Visual</span>
                    </div>
                </div>
            </div>

            {/* Asset 3 - REFRAMED FOR PERFORMANCE */}
            <div className="bg-brand-cream text-brand-black border border-white/10 p-8 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-4 opacity-5">
                    <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.75l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"/></svg>
                 </div>
                 <div className="flex justify-between items-start mb-6 relative z-10">
                    <h3 className="font-serif text-2xl">The Trust Asset</h3>
                    <span className="font-mono text-[10px] text-brand-black border border-brand-black px-2 py-1 uppercase rounded-sm">Retention</span>
                </div>
                <p className="text-gray-600 text-sm mb-8 leading-relaxed relative z-10">
                    <strong>The Anti-Commodity Filter.</strong> Lower your CAC by increasing trust. We produce a "Founder Story" that kills skepticism. Customers stop comparing prices when they buy into the mission.
                </p>
                <div className="border-t border-brand-black/10 pt-4 relative z-10">
                    <div className="flex justify-between text-xs font-mono text-gray-500 uppercase">
                        <span>Format</span>
                        <span className="text-brand-black font-bold">Premium A+ Content</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default AssetClasses;