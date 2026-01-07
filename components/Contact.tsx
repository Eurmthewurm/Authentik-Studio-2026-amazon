import React, { useEffect } from 'react';

const Contact: React.FC = () => {
  useEffect(() => {
    const scriptSrc = "https://assets.calendly.com/assets/external/widget.js";
    let timer: number | undefined;
    let timeout: number | undefined;
    
    const initCalendly = () => {
      // Ensure widget container exists and Calendly is loaded before attempting init
      // @ts-ignore
      if (window.Calendly && document.querySelector('.calendly-inline-widget')) {
         // @ts-ignore
        window.Calendly.initInlineWidget();
      }
    };

    if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
        const head = document.querySelector('head');
        const script = document.createElement('script');
        script.setAttribute('src',  scriptSrc);
        script.setAttribute('async', 'true');
        script.onload = initCalendly;
        script.onerror = () => console.warn("Calendly script failed to load"); // Prevent crash on ad-blocker
        head?.appendChild(script);
    } else {
        // Script exists. Check if loaded, otherwise poll for it.
        // @ts-ignore
        if (window.Calendly) {
            initCalendly();
        } else {
            timer = window.setInterval(() => {
                // @ts-ignore
                if (window.Calendly) {
                    initCalendly();
                    if (timer) clearInterval(timer);
                }
            }, 200);
            
            // Safety timeout to stop polling after 5 seconds
            timeout = window.setTimeout(() => {
                if (timer) clearInterval(timer);
            }, 5000);
        }
    }

    // CLEANUP: Stop all timers if user navigates away to prevent "Script error"
    return () => {
        if (timer) clearInterval(timer);
        if (timeout) clearTimeout(timeout);
    };
  }, []);

  return (
    <section className="bg-brand-cream py-24 border-t border-brand-black/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="inline-block mb-6 px-3 py-1 border border-brand-black/10 rounded-full bg-white">
            <span className="font-mono text-[10px] text-brand-green uppercase tracking-widest font-bold">● Capacity: 2 Spots Remaining for November</span>
        </div>
        <h2 className="font-serif text-5xl md:text-6xl text-brand-black mb-6">Burn The Boats.</h2>
        <p className="font-sans text-lg text-gray-600 mb-12 max-w-xl mx-auto leading-relaxed">
          We are not a generalist agency. We partner with 5 active Amazon brands per month who are ready to deploy the Founder Story and defend their margins at all costs.
        </p>
        
        <div className="bg-white p-4 shadow-2xl border border-brand-black/5 relative min-h-[700px]">
            <div className="absolute top-0 left-0 w-full h-1 bg-brand-black z-10"></div>
            {/* Calendly Inline Widget */}
            <div 
              className="calendly-inline-widget w-full h-full" 
              data-url="https://calendly.com/ermo/discoverycall?hide_gdpr_banner=1&primary_color=1a4d2e" 
              style={{ minWidth: '320px', height: '700px' }} 
            />
        </div>

        <p className="mt-16 text-xs text-gray-300 font-sans">
          Authentik Studio &copy; {new Date().getFullYear()} • Profit Defense Protocol
        </p>
      </div>
    </section>
  );
};

export default Contact;