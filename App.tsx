import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Ticker from './components/Ticker';
import Hero from './components/Hero';
import ResultsLedger from './components/ResultsLedger';
import Features from './components/Features';
import AssetClasses from './components/AssetClasses';
import Process from './components/Process';
import Tool from './components/Tool';
import Contact from './components/Contact';
import RiskAssessment from './components/RiskAssessment';
import { Section } from './types';

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<Section>(Section.HOME);

  const renderSection = () => {
    switch (currentSection) {
      case Section.HOME:
        return (
          <>
            <Hero setSection={setCurrentSection} />
            <ResultsLedger />
            <Features />
            <AssetClasses />
            <Process />
            <RiskAssessment />
            <Contact />
          </>
        );
      case Section.LOGIC:
        return (
           <>
            <Features />
            <AssetClasses />
            <ResultsLedger />
            <RiskAssessment />
            <Contact />
           </>
        );
      case Section.PROCESS:
        return (
          <>
             <Process />
             <AssetClasses />
             <RiskAssessment />
             <Contact />
          </>
        );
      case Section.TOOL:
        return <Tool />;
      case Section.CONTACT:
        return <Contact />;
      default:
        return <Hero setSection={setCurrentSection} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-brand-black selection:bg-brand-black selection:text-white">
      <Ticker />
      <Navbar currentSection={currentSection} setSection={setCurrentSection} />
      <main className="flex-grow">
        {renderSection()}
      </main>
    </div>
  );
};

export default App;