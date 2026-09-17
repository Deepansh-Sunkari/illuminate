import React from 'react';
import { Users } from 'lucide-react';
import SPEAKERS_DATA from '../../data/speakers';
import SpeakerCard from './SpeakerCard';
import ScrollReveal from '../ui/ScrollReveal';

export const SpeakersSection = () => {
  return (
    <section
      id="speakers"
      className="relative py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10"
    >
      <ScrollReveal>
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/70 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5 text-purple-400" />
            <span>Ecosystem Mentors</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="gradient-text-electric">Speakers & Mentors</span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-base mt-2 max-w-xl mx-auto">
            Learn directly from seasoned venture architects, angel investors, and IIT Bombay entrepreneurship leads.
          </p>
        </div>
      </ScrollReveal>

      {/* Speakers Grid with Staggered ScrollReveal */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {SPEAKERS_DATA.map((speaker, index) => (
          <ScrollReveal key={speaker.id} delay={index * 0.08}>
            <SpeakerCard speaker={speaker} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default SpeakersSection;
