// import React from 'react';
import JetCard from './JetCard';
import { jets } from '../data/jets';

const JetsSection = () => {
  return (
    <section id="jets" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl gradient-text mb-6">Advanced Aircraft Fleet</h2>
          <p className="text-gray-400 leading-relaxed">
            Discover our next-generation military aircraft, engineered for unmatched performance and tactical superiority.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {jets.map((jet) => (
            <div key={jet.name}>
              <JetCard jet={jet} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JetsSection;