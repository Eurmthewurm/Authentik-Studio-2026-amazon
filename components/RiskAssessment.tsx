import React from 'react';

const RiskAssessment: React.FC = () => {
  return (
    <section className="bg-[#F8F8F6] py-24 border-t border-brand-black/5">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12 border-b-2 border-brand-black pb-6 flex flex-col md:flex-row justify-between items-end gap-4">
           <div>
               <h2 className="font-serif text-3xl md:text-4xl text-brand-black mb-2">Operational Protocol</h2>
               <p className="font-mono text-xs text-gray-500 uppercase tracking-widest">Risk Assessment & Logistics</p>
           </div>
           <div className="text-right hidden md:block">
               <div className="font-mono text-xs text-brand-black border border-brand-black px-3 py-1 inline-block uppercase">Disclosure v1.0</div>
           </div>
        </div>

        <div className="grid gap-px bg-brand-black/10 border border-brand-black/10">
            {/* Item 1 */}
            <div className="bg-white p-8 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                        <span className="font-mono text-xs text-gray-400 uppercase tracking-widest block mb-2">Article 1.0</span>
                        <h3 className="font-serif text-lg font-bold text-brand-black">Inventory Requirements</h3>
                    </div>
                    <div className="md:w-2/3">
                        <p className="font-sans text-gray-600 leading-relaxed text-sm">
                            <strong className="text-brand-black block mb-1">No physical inventory required for Phase 1.</strong>
                            We bypass shipping delays by utilizing your existing Digital Asset Library (previous shoots, supplier footage, UGC) to construct the initial "Search Intercept" assets. Physical product is only required for Phase 2 (Conversion Moat).
                        </p>
                    </div>
                </div>
            </div>

             {/* Item 2 */}
             <div className="bg-white p-8 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                        <span className="font-mono text-xs text-gray-400 uppercase tracking-widest block mb-2">Article 2.0</span>
                        <h3 className="font-serif text-lg font-bold text-brand-black">Platform Coverage</h3>
                    </div>
                    <div className="md:w-2/3">
                        <p className="font-sans text-gray-600 leading-relaxed text-sm">
                            <strong className="text-brand-black block mb-1">Omni-Channel Search Defense.</strong>
                            We do not rely solely on TikTok. Our "Search Intercept" videos are formatted for and deployed across TikTok, Instagram Reels, Facebook Reels (35+ Demographic), and YouTube Shorts.
                        </p>
                    </div>
                </div>
            </div>

            {/* Item 3 */}
             <div className="bg-white p-8 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                        <span className="font-mono text-xs text-gray-400 uppercase tracking-widest block mb-2">Article 3.0</span>
                        <h3 className="font-serif text-lg font-bold text-brand-black">Turnaround Time</h3>
                    </div>
                    <div className="md:w-2/3">
                        <p className="font-sans text-gray-600 leading-relaxed text-sm">
                            <strong className="text-brand-black block mb-1">T+7 Business Days.</strong>
                            From the moment the "Visual Gap" Strategy is approved, our editors deliver the initial Phase 1 asset suite within 7 business days. Speed is our primary hedge against margin erosion.
                        </p>
                    </div>
                </div>
            </div>

             {/* Item 4 */}
             <div className="bg-white p-8 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                        <span className="font-mono text-xs text-gray-400 uppercase tracking-widest block mb-2">Article 4.0</span>
                        <h3 className="font-serif text-lg font-bold text-brand-black">Asset Rights</h3>
                    </div>
                    <div className="md:w-2/3">
                        <p className="font-sans text-gray-600 leading-relaxed text-sm">
                            <strong className="text-brand-black block mb-1">100% Client Ownership.</strong>
                            Unlike traditional influencer agencies, you own the raw files, the project files, and the final exports in perpetuity. You are free to run them as ads on any platform without usage fees.
                        </p>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default RiskAssessment;