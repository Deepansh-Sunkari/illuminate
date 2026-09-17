import React from 'react';
import { Phone, Mail, MessageSquare, Headphones } from 'lucide-react';
import CONTACT_DATA from '../../data/contact';
import ScrollReveal from '../ui/ScrollReveal';

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10"
    >
      <ScrollReveal>
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/70 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Headphones className="w-3.5 h-3.5 text-purple-400" />
            <span>{CONTACT_DATA.subtitle}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {CONTACT_DATA.sectionTitle}
          </h2>
          <p className="text-slate-300 text-xs sm:text-base mt-2 max-w-xl mx-auto">
            Reach out to our campus liaisons, student operations team, and coordinator desk for any assistance.
          </p>
        </div>
      </ScrollReveal>

      {/* Coordinator Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {CONTACT_DATA.coordinators.map((coord, index) => (
          <ScrollReveal key={coord.id} delay={index * 0.08}>
            <div
              className="cut-corner-card glass-panel glass-panel-interactive p-6 sm:p-7 border-purple-500/30 rounded-2xl flex flex-col justify-between h-full text-center"
            >
            <div>
              {/* Badge Icon */}
              <div className="w-16 h-16 mx-auto rounded-2xl bg-purple-950 border border-purple-500/50 flex items-center justify-center mb-4 text-purple-200 font-extrabold text-lg shadow-glow-sm">
                {coord.roleBadge}
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-base sm:text-lg font-bold text-white">
                {coord.title}
              </h3>
              <p className="text-xs text-purple-300 uppercase tracking-wider font-semibold mt-0.5">
                {coord.subtitle}
              </p>
              <p className="text-xs text-slate-400 mt-2">
                {coord.designation}
              </p>
            </div>

            {/* Action Links */}
            <div className="mt-6 pt-4 border-t border-purple-900/40 flex flex-col items-center gap-2">
              {coord.email && (
                <a
                  href={`mailto:${coord.email}`}
                  className="w-full min-h-[44px] py-2 px-4 rounded-xl bg-purple-950/60 hover:bg-purple-900/50 border border-purple-500/30 text-purple-300 hover:text-white text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>{coord.email}</span>
                </a>
              )}

              {coord.phone && (
                <a
                  href={`tel:${coord.phoneRaw}`}
                  className="w-full min-h-[44px] py-2 px-4 rounded-xl bg-purple-950/60 hover:bg-purple-900/50 border border-purple-500/30 text-purple-300 hover:text-white text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>{coord.phone}</span>
                </a>
              )}

              {coord.phones &&
                coord.phones.map((p) => (
                  <a
                    key={p.raw}
                    href={`tel:${p.raw}`}
                    className="w-full min-h-[44px] py-2 px-4 rounded-xl bg-purple-950/60 hover:bg-purple-900/50 border border-purple-500/30 text-purple-300 hover:text-white text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-emerald-400" />
                    <span>{p.label}</span>
                  </a>
                ))}
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  </section>
);
};

export default ContactSection;
