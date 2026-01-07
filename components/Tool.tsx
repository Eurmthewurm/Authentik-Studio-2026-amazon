import React, { useState, useEffect } from 'react';
import { generateAudit } from '../services/geminiService';
import { GenerationState } from '../types';

const Tool: React.FC = () => {
  const [inputs, setInputs] = useState({
    name: '',
    category: '',
    revenue: ''
  });

  const [state, setState] = useState<GenerationState>({
    isLoading: false,
    error: null,
    result: null
  });

  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setCursorVisible(v => !v), 500);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputs.name || !inputs.category) return;

    setState({ isLoading: true, error: null, result: null });

    try {
      const data = await generateAudit(inputs.name, inputs.category, inputs.revenue);
      setState({ isLoading: false, error: null, result: data });
    } catch (err) {
      setState({ 
        isLoading: false, 
        error: "Connection Refused. API Error.", 
        result: null 
      });
    }
  };

  return (
    <section className="py-32 bg-brand-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
        
        {/* Left: Input Terminal */}
        <div className="flex flex-col justify-center">
            <div className="mb-12">
                <span className="text-brand-black font-mono font-bold tracking-widest uppercase text-xs mb-4 block border-l-2 border-brand-black pl-3">Phase 1: Diagnosis</span>
                <h2 className="font-serif text-5xl text-brand-black mb-6">Run "Visual Gap" Protocol.</h2>
                <p className="font-sans text-gray-600 text-lg">
                    Enter your product data to simulate the customer journey across TikTok, Reels, and YouTube Shorts to calculate estimated revenue leakage.
                </p>
            </div>

            <div className="bg-brand-black rounded-lg p-6 shadow-2xl border border-gray-800 font-mono text-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-8 bg-[#1F1F1F] flex items-center px-4 gap-2 border-b border-gray-700">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <div className="ml-4 text-xs text-gray-500">audit_terminal — -zsh</div>
                </div>

                <form onSubmit={handleSubmit} className="mt-8 space-y-4 text-green-500">
                    <div className="flex flex-col gap-1">
                        <label className="text-gray-500 select-none">$ enter_product_name</label>
                        <div className="flex">
                            <span className="mr-2 text-white">{">"}</span>
                            <input 
                                type="text"
                                value={inputs.name}
                                onChange={(e) => setInputs({...inputs, name: e.target.value})}
                                className="bg-transparent border-none focus:ring-0 p-0 text-white w-full font-mono placeholder-gray-700"
                                placeholder="e.g. Vitamin C Serum"
                                required
                            />
                        </div>
                    </div>
                    
                    <div className="flex flex-col gap-1">
                        <label className="text-gray-500 select-none">$ enter_category</label>
                        <div className="flex">
                            <span className="mr-2 text-white">{">"}</span>
                            <input 
                                type="text"
                                value={inputs.category}
                                onChange={(e) => setInputs({...inputs, category: e.target.value})}
                                className="bg-transparent border-none focus:ring-0 p-0 text-white w-full font-mono placeholder-gray-700"
                                placeholder="e.g. Skincare"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-1">
                         <label className="text-gray-500 select-none">$ est_monthly_revenue</label>
                         <div className="flex">
                            <span className="mr-2 text-white">{">"}</span>
                            <input 
                                type="text"
                                value={inputs.revenue}
                                onChange={(e) => setInputs({...inputs, revenue: e.target.value})}
                                className="bg-transparent border-none focus:ring-0 p-0 text-white w-full font-mono placeholder-gray-700"
                                placeholder="e.g. $50,000"
                            />
                         </div>
                    </div>

                    <div className="pt-6">
                        <button 
                            type="submit"
                            disabled={state.isLoading}
                            className={`px-4 py-2 border border-green-500 text-green-500 hover:bg-green-500 hover:text-black transition-colors uppercase tracking-widest text-xs font-bold ${state.isLoading ? 'opacity-50 cursor-wait' : ''}`}
                        >
                            {state.isLoading ? "[ EXECUTING SCRIPT... ]" : "[ RUN AUDIT ]"}
                        </button>
                    </div>
                </form>
            </div>
        </div>

        {/* Right: Output Paper */}
        <div className="relative">
            {!state.result && !state.isLoading && (
                 <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                    <div className="border-4 border-brand-black p-12 transform rotate-12">
                        <span className="font-mono text-4xl font-bold uppercase text-brand-black">Confidential</span>
                    </div>
                 </div>
            )}

            {state.result && (
                <div className="bg-[#FDFDFD] p-8 md:p-12 shadow-2xl border border-gray-200 min-h-[600px] relative animate-fade-in rotate-1">
                     {/* Paper Texture Overlay */}
                     <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-50 pointer-events-none"></div>
                     
                     {/* Header */}
                     <div className="flex justify-between items-start border-b-2 border-brand-black pb-6 mb-8">
                        <div>
                            <h3 className="font-serif text-3xl text-brand-black">Audit Report</h3>
                            <p className="font-mono text-xs text-gray-500 mt-1 uppercase">Generated by Authentik AI Core</p>
                        </div>
                        <div className="text-right">
                             <div className="text-xs font-mono text-brand-red font-bold uppercase border border-brand-red px-2 py-1 inline-block mb-1">Action Required</div>
                             <div className="text-xs text-gray-400">{new Date().toLocaleDateString()}</div>
                        </div>
                     </div>

                     {/* Content */}
                     <div className="space-y-10 relative z-10">
                        
                        {/* Financial Impact */}
                        <div className="bg-gray-50 p-6 border-l-4 border-brand-red">
                            <p className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-2">Estimated Revenue Leakage</p>
                            <p className="font-serif text-4xl text-brand-red">{state.result.estimatedLostRevenue} <span className="text-lg text-gray-400 font-sans font-normal">/ month</span></p>
                            <p className="text-xs text-gray-500 mt-2 italic">*Based on 15% off-platform search attrition</p>
                        </div>

                        {/* Search Leaks */}
                        <div>
                            <h4 className="font-sans font-bold text-sm uppercase tracking-widest border-b border-gray-200 pb-2 mb-4">Detected Search Patterns</h4>
                            <ul className="font-mono text-sm space-y-2">
                                {state.result.searchLeakage.map((leak, i) => (
                                    <li key={i} className="flex justify-between">
                                        <span>{leak}</span>
                                        <span className="text-brand-red">[LEAKING]</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Video Hooks (New) */}
                        <div>
                           <h4 className="font-sans font-bold text-sm uppercase tracking-widest border-b border-gray-200 pb-2 mb-4">Content Production Plan</h4>
                           <div className="space-y-4">
                              <div>
                                <p className="font-mono text-xs text-brand-green uppercase mb-1">Search Intercept Hooks</p>
                                <ul className="list-disc list-inside text-sm text-gray-600 font-medium">
                                  {state.result.searchInterceptHooks.map((hook, i) => (
                                    <li key={i}>"{hook}"</li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <p className="font-mono text-xs text-brand-gold uppercase mb-1">Objection Crushers</p>
                                <ul className="list-disc list-inside text-sm text-gray-600">
                                  {state.result.objectionCrushers.map((objection, i) => (
                                    <li key={i}>{objection}</li>
                                  ))}
                                </ul>
                              </div>
                           </div>
                        </div>

                        {/* Founder Story Script (Script Format) */}
                        <div className="bg-white border border-gray-200 p-6 shadow-sm">
                            <div className="flex justify-between items-end border-b border-gray-200 pb-2 mb-4">
                                <h4 className="font-mono font-bold text-sm uppercase tracking-widest">Founder_Origin_Script.pdf</h4>
                                <span className="font-mono text-[10px] bg-brand-black text-white px-2 py-0.5 rounded-sm">FINAL DRAFT</span>
                            </div>
                            
                            <div className="space-y-6 font-mono text-sm text-brand-black leading-relaxed">
                                <div>
                                    <p className="font-bold underline mb-1 uppercase">01. INT. THE HOOK - DAY</p>
                                    <p className="pl-4 border-l-2 border-gray-200 text-gray-600">"{state.result.founderStory.hook}"</p>
                                </div>
                                <div>
                                    <p className="font-bold underline mb-1 uppercase">02. THE CONFLICT</p>
                                    <p className="pl-4 border-l-2 border-gray-200 text-gray-600">{state.result.founderStory.conflict}</p>
                                </div>
                                <div>
                                    <p className="font-bold underline mb-1 uppercase">03. THE RESOLUTION (AHA MOMENT)</p>
                                    <p className="pl-4 border-l-2 border-gray-200 text-gray-600">{state.result.founderStory.resolution}</p>
                                </div>
                            </div>
                        </div>

                     </div>

                     {/* Stamp */}
                     <div className="absolute bottom-12 right-12 transform -rotate-12 opacity-80 pointer-events-none">
                        <div className="border-4 border-brand-green p-2 text-brand-green font-mono font-bold text-xl uppercase tracking-widest">
                            Strategy<br/>Verified
                        </div>
                     </div>
                </div>
            )}
        </div>

      </div>
    </section>
  );
};

export default Tool;