import React from 'react';
import { Award, Package, Flame, TrendingUp, Users, Sparkles, ShieldCheck } from 'lucide-react';
import BENEFITS_DATA from '../../data/benefits';
import ScrollReveal from '../ui/ScrollReveal';

// Dynamic icon mapping
const iconMap = {
  Award,
  Package,
  Flame,
  TrendingUp,
  Users,
  Sparkles,
};

export const BenefitsSection = () => {
  return (
    <section
      id="benefits"
      className="relative py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10"
    >
      <ScrollReveal>
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/70 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>Exclusive Privileges</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Why Attend <span className="gradient-text-electric">Illuminate 2026</span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-base mt-2 max-w-xl mx-auto">
            High-value credentials, practical founder toolkits, and direct ecosystem access designed for ambitious students.
          </p>
        </div>
      </ScrollReveal>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {BENEFITS_DATA.map((benefit, index) => {
          const IconComponent = iconMap[benefit.icon] || Sparkles;

          return (
            <ScrollReveal key={benefit.id} delay={index * 0.08}>
              <div
                className="glass-panel glass-panel-interactive p-6 sm:p-7 rounded-2xl border-purple-500/20 text-left flex flex-col justify-between h-full group"
              >
              <div>
                {/* Card Top: Icon & Category Tag */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-xl bg-purple-950/80 border border-purple-500/40 text-electric-neon shadow-glow-sm group-hover:scale-110 group-hover:border-purple-300 transition-all duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-purple-900/40 text-purple-300 border border-purple-700/40 font-medium">
                    {benefit.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-purple-200 transition-colors mb-2">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              {/* Bottom Category Indicator */}
              <div className="mt-5 pt-3 border-t border-purple-900/40 flex items-center justify-between text-[11px] text-purple-400 font-mono">
                <span>{benefit.category}</span>
                <span className="text-emerald-400 font-bold">Verified</span>
              </div>
            </div>
          </ScrollReveal>
        );
      })}
    </div>
  </section>
);
};

export default BenefitsSection;
