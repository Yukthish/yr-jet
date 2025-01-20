// import React from 'react';
import { features } from '../data/features';

const Features = () => {
  return (
    <section id="technology" className="py-24 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl gradient-text mb-6">
            Cutting-Edge Technology
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Our aircraft integrate revolutionary technologies that push the boundaries of what's possible in military aviation.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature) => (
            <div key={feature.title} className="tech-card group hover:border-cyan-400/30 transition-colors duration-300">
              <feature.icon className="w-12 h-12 text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-display text-xl mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;