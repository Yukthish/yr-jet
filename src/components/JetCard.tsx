// import React from 'react';
import { JetType } from '../types';
import { Shield, Zap, Brain } from 'lucide-react';

const JetCard = ({ jet }: { jet: JetType }) => {
  return (
    <div className="tech-card group">
      <div className="relative h-48 mb-8 overflow-hidden rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
        <div className={`absolute inset-0 bg-gradient-to-tr ${jet.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
        <h3 className="font-display text-4xl gradient-text relative z-10">{jet.name}</h3>
      </div>
      <div className="space-y-6">
        <p className="text-gray-300 leading-relaxed">{jet.description}</p>
        <div className="grid grid-cols-1 gap-4">
          {jet.specs.map((spec, index) => (
            <div key={spec} className="flex items-center gap-3 bg-gray-800/50 p-4 rounded-lg border border-cyan-500/10">
              {index === 0 && <Zap className="w-5 h-5 text-cyan-400" />}
              {index === 1 && <Brain className="w-5 h-5 text-cyan-400" />}
              {index === 2 && <Shield className="w-5 h-5 text-cyan-400" />}
              <span className="text-gray-200">{spec}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JetCard;