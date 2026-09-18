import React from 'react';
import { Sparkles, CalendarCheck, BellRing } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';

export const SpeakerSection = () => {
  return (
    <section id="speaker" className="relative py-20 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 flex-1">
      <ScrollReveal>
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Masterclass <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Speakers</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Learn directly from industry leaders. Our keynote speakers bring years of hands-on experience in scaling startups and disruptive innovation.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        {/* CSS Grid for Dual Speaker Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative max-w-5xl mx-auto">
          
          {/* Decorative Background Glows */}
          <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl -z-10" />
          <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl -z-10" />

          {/* Card 1: To Be Announced */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-indigo-600/30 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative glass-panel p-8 sm:p-10 rounded-[2rem] border border-purple-500/20 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_60px_rgba(168,85,247,0.3)] hover:-translate-y-3 transition-all duration-500 flex flex-col items-center text-center overflow-hidden h-full">
              
              {/* Profile Image Container */}
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 mb-8 shrink-0">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-indigo-500 rounded-full blur-md opacity-30 group-hover:opacity-80 transition-opacity duration-700 animate-pulse" />
                <div className="relative w-full h-full rounded-full bg-[#0d0724] border-2 border-purple-500/40 flex flex-col items-center justify-center shadow-2xl transition-transform duration-700 group-hover:scale-110 z-10">
                  <CalendarCheck className="w-10 h-10 text-purple-400/60 mb-2 group-hover:text-purple-300 transition-colors" />
                  <span className="font-mono text-xs sm:text-sm font-bold tracking-widest text-purple-300 uppercase leading-snug">
                    To Be<br />Announced
                  </span>
                </div>
              </div>

              {/* Card 1 Text Content */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4 group-hover:border-purple-400/50 transition-colors">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Special Guest</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Industry Expert
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                We are currently finalizing an incredible speaker from the startup ecosystem. This session will dive deep into real-world challenges, fundraising, and product-market fit.
              </p>
            </div>
          </div>

          {/* Card 2: Stay Updated */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/30 to-purple-600/30 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative glass-panel p-8 sm:p-10 rounded-[2rem] border border-indigo-500/20 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_60px_rgba(99,102,241,0.3)] hover:-translate-y-3 transition-all duration-500 flex flex-col items-center text-center overflow-hidden h-full">
              
              {/* Profile Image Container */}
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 mb-8 shrink-0">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full blur-md opacity-30 group-hover:opacity-80 transition-opacity duration-700 animate-pulse" style={{ animationDelay: '500ms' }} />
                <div className="relative w-full h-full rounded-full bg-[#0d0724] border-2 border-indigo-500/40 flex flex-col items-center justify-center shadow-2xl transition-transform duration-700 group-hover:scale-110 z-10">
                  <BellRing className="w-10 h-10 text-indigo-400/60 mb-2 group-hover:text-indigo-300 transition-colors" />
                  <span className="font-mono text-xs sm:text-sm font-bold tracking-widest text-indigo-300 uppercase leading-snug">
                    Stay<br />Updated
                  </span>
                </div>
              </div>

              {/* Card 2 Text Content */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4 group-hover:border-indigo-400/50 transition-colors">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Surprise Guest</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Mystery Founder
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                A highly successful founder will join us to share their zero-to-one journey. The official reveal will be updated here shortly. Follow our socials for the announcement!
              </p>
            </div>
          </div>

        </div>
      </ScrollReveal>
    </section>
  );
};

export default SpeakerSection;
