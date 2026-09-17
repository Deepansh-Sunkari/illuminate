import React, { useState } from 'react';
import { Calendar, Clock, MapPin, User, Tag } from 'lucide-react';
import SCHEDULE_DATA from '../../data/schedule';
import ScrollReveal from '../ui/ScrollReveal';

export const EventSchedule = () => {
  const [selectedDay, setSelectedDay] = useState(1);

  const currentDayData = SCHEDULE_DATA.find((d) => d.day === selectedDay) || SCHEDULE_DATA[0];

  return (
    <section
      id="schedule"
      className="relative py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10"
    >
      <ScrollReveal>
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/70 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Calendar className="w-3.5 h-3.5 text-purple-400" />
            <span>Interactive Itinerary</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Two-Day <span className="gradient-text-electric">Event Schedule</span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-base mt-2 max-w-xl mx-auto">
            An immersive journey from ideation to live investor pitching across two high-impact days.
          </p>

          {/* Day Selector Tabs */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-[#0b061d] border border-purple-500/30 shadow-inner">
            {SCHEDULE_DATA.map((day) => (
              <button
                key={day.day}
                type="button"
                onClick={() => setSelectedDay(day.day)}
                className={`px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm tracking-wide transition-all duration-300 flex items-center gap-2 min-h-[44px] ${
                  selectedDay === day.day
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-glow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-purple-900/20'
                }`}
              >
                <span>{day.dayLabel}</span>
              </button>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Active Day Theme Banner */}
      <div className="glass-panel p-4 sm:p-5 rounded-2xl border-purple-500/30 mb-8 sm:mb-12 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-widest text-amber-300 font-semibold">
            {currentDayData.dayLabel} Focus
          </span>
          <h3 className="text-base sm:text-lg font-bold text-white mt-0.5">
            {currentDayData.theme}
          </h3>
        </div>
        <div className="text-xs font-mono text-purple-300 bg-purple-950/60 px-3 py-1.5 rounded-lg border border-purple-800/40">
          {currentDayData.date}
        </div>
      </div>

      {/* Timeline (Mobile Vertical & Desktop Responsive) */}
      <div className="relative max-w-4xl mx-auto">
        {/* Continuous Center/Left Line */}
        <div className="absolute top-4 bottom-4 left-4 sm:left-6 md:left-8 w-0.5 bg-gradient-to-b from-purple-500 via-indigo-500 to-transparent" />

        <div className="space-y-6 sm:space-y-8">
          {currentDayData.sessions.map((session, index) => (
            <ScrollReveal key={session.id} delay={index * 0.07}>
              <div className="relative pl-12 sm:pl-16 md:pl-20 group">
                {/* Glowing Node Dot */}
                <div className="absolute left-2 sm:left-4 md:left-6 top-5 -translate-x-1/2 w-4 h-4 rounded-full bg-[#070314] border-2 border-purple-400 shadow-glow-sm group-hover:scale-125 group-hover:border-amber-400 transition-all" />

                {/* Session Card */}
                <div className="glass-panel glass-panel-interactive p-5 sm:p-6 rounded-2xl border-purple-500/20 text-left">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    {/* Time Chip */}
                    <div className="inline-flex items-center gap-1.5 text-xs font-mono text-purple-300 bg-purple-950/70 px-2.5 py-1 rounded-lg border border-purple-800/50 font-medium">
                      <Clock className="w-3.5 h-3.5 text-purple-400" />
                      <span>{session.time}</span>
                    </div>

                    {/* Category Pill */}
                    <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-purple-900/30 text-purple-300 border border-purple-700/40">
                      {session.category}
                    </span>
                  </div>

                  {/* Session Title */}
                  <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-purple-200 transition-colors mb-2">
                    {session.title}
                  </h4>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {session.description}
                  </p>

                  {/* Metadata Footer: Speaker & Venue */}
                  <div className="flex flex-wrap items-center gap-4 pt-3 border-t border-purple-900/40 text-xs text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-purple-400" />
                      <span className="text-slate-200 font-medium">{session.speaker}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-purple-400" />
                      <span>{session.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventSchedule;
