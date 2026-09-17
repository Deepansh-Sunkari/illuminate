import React from 'react';
import { CheckCircle2, Award, Zap, Compass } from 'lucide-react';
import EVENT_DATA from '../../data/event';
import StatsCounter from './StatsCounter';
import ScrollReveal from '../ui/ScrollReveal';

export const EventIntro = () => {
  return (
    <section
      id="about"
      className="relative py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10"
    >
      <ScrollReveal>
        {/* Outer Obsidian Frame */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 lg:p-14 border-purple-500/30 shadow-glow-md relative overflow-hidden">
        {/* Subtle Ambient Corner Glow */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Narrative & Pillars (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/70 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5 text-purple-400" />
              <span>National Flagship Initiative</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              What is the <span className="gradient-text-electric">Illuminate Workshop</span>?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              <strong className="text-white font-semibold">Illuminate</strong> is E-Cell IIT Bombay's premier national entrepreneurship workshop series designed to demystify startup building, venture strategy, business model architecture, and fundraising mechanics for ambitious engineering students. Hosted directly on-campus at{' '}
              <span className="text-purple-300 font-semibold">Raghu Engineering College</span>, it delivers real-world founder frameworks, live pitch breakdowns, and nationwide credentials directly to you.
            </p>

            {/* Value Pillar Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-purple-950/40 border border-purple-800/30 hover:border-purple-600/50 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-white mb-0.5">
                    Learn from IIT Bombay Mentors
                  </h3>
                  <p className="text-xs text-slate-300 leading-snug">
                    Gain first-hand exposure to the methodologies that powered unicorn founders and high-growth ventures.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-purple-950/40 border border-purple-800/30 hover:border-purple-600/50 transition-colors">
                <Zap className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-white mb-0.5">
                    Zero to Launch Blueprint
                  </h3>
                  <p className="text-xs text-slate-300 leading-snug">
                    Walk out with a validated Lean Business Canvas, unit economics roadmap, and actionable pitch deck.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Confirmed Stats (5 cols) */}
          <div className="lg:col-span-5 w-full flex flex-col items-center justify-center">
            <StatsCounter stats={EVENT_DATA.stats} />
          </div>
        </div>
      </div>
    </ScrollReveal>
  </section>
  );
};

export default EventIntro;
