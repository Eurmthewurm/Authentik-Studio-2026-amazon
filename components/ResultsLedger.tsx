import React from 'react';

const ResultsLedger: React.FC = () => {
  const trades = [
    { id: 'CLT: BLACKMAGIC', cat: 'Cinema Tech', platform: 'YouTube Search', metric: 'Technical Trust', result: 'Authority Captured' },
    { id: 'CLT: PUPFLASK', cat: 'Pet Utility', platform: 'Reels / TikTok', metric: 'Viral CTR', result: '+320% Lift' },
    { id: 'CLT: HARTSPAN', cat: 'Health & Bio', platform: 'Founder Story', metric: 'Retention (LTV)', result: 'Churn -18%' },
    { id: 'IDX: AGGREGATE', cat: 'Portfolio Avg', platform: 'Omni-Channel', metric: 'RoAS', result: '4.2x' },
  ];

  return (
    <section className="bg-brand-black py-20 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 pb-4 border-b border-white/10">
            <div>
                <h3 className="text-white font-serif text-3xl">Performance Index</h3>
                <p className="text-gray-500 font-mono text-xs uppercase tracking-widest mt-2">Verified Client Data (Anonymized Metrics)</p>
            </div>
             <div className="hidden md:block">
                <span className="text-brand-green font-mono text-xs animate-pulse">● LIVE DATA FEED</span>
            </div>
        </div>

        <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="text-gray-500 font-mono text-xs uppercase tracking-widest border-b border-white/5">
                        <th className="pb-4 pl-4">Client ID</th>
                        <th className="pb-4">Category</th>
                        <th className="pb-4">Defense Strategy</th>
                        <th className="pb-4">Key Metric</th>
                        <th className="pb-4 text-right pr-4">Result</th>
                    </tr>
                </thead>
                <tbody className="font-mono text-sm">
                    {trades.map((trade, index) => (
                        <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                            <td className="py-6 pl-4 text-brand-gold font-bold group-hover:text-white transition-colors">{trade.id}</td>
                            <td className="py-6 text-white">{trade.cat}</td>
                            <td className="py-6 text-gray-300">{trade.platform}</td>
                            <td className="py-6 text-gray-300">{trade.metric}</td>
                            <td className="py-6 text-right pr-4 text-brand-green font-bold bg-brand-green/0 group-hover:bg-brand-green/10 transition-colors">
                                {trade.result}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        
        <div className="mt-8 flex justify-between items-center text-[10px] font-mono text-gray-600 uppercase">
            <span>* Deploying strategies validated by Blackmagic Design, PupFlask & Hartspan.</span>
            <span>Index: #00921-A</span>
        </div>
      </div>
    </section>
  );
};

export default ResultsLedger;