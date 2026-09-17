/**
 * Centralized Schedule Data
 * Data-driven 2-day timeline.
 * Future dates/times use [ADD ...] placeholders as required.
 */

export const SCHEDULE_DATA = [
  {
    day: 1,
    dayLabel: "Day 01",
    theme: "Disruptive Ideation & Venture Architecture",
    date: "[ADD EVENT DATE - DAY 1]",
    sessions: [
      {
        id: "d1-s1",
        time: "09:30 AM - 10:30 AM",
        title: "Registration Desk, Networking & Delegate Kit Handover",
        category: "Check-in",
        speaker: "Organizing Team",
        location: "Main Foyer, REC",
        description: "Collect your official Illuminate 2026 delegate badge, Founder Manual, and resource stationery."
      },
      {
        id: "d1-s2",
        time: "10:30 AM - 12:00 PM",
        title: "The Zero-to-One Founder Mindset & Uncovering Disruptive Ideas",
        category: "Keynote Masterclass",
        speaker: "[ADD SPEAKER]",
        location: "Seminar Hall",
        description: "Dissecting scalable problem-solution fits, market sizing heuristics, and identifying unfair advantages in technology."
      },
      {
        id: "d1-s3",
        time: "12:00 PM - 01:15 PM",
        title: "Interactive Workshop: Building the Lean Business Canvas",
        category: "Hands-on Workshop",
        speaker: "[ADD SPEAKER]",
        location: "Seminar Hall",
        description: "Hands-on drill: mapping value propositions, customer segments, channel architecture, and cost structures in small squads."
      },
      {
        id: "d1-s4",
        time: "01:15 PM - 02:00 PM",
        title: "Networking Lunch & Informal Peer Exchanges",
        category: "Break",
        speaker: "All Participants",
        location: "Dining Hall",
        description: "Connect with like-minded developers, aspiring co-founders, and student coordinators over lunch."
      },
      {
        id: "d1-s5",
        time: "02:00 PM - 04:00 PM",
        title: "Startup Unit Economics & Validating Market Demand",
        category: "Deep Dive",
        speaker: "[ADD SPEAKER]",
        location: "Seminar Hall",
        description: "Deconstructing CAC, LTV, pricing strategy, break-even analysis, and low-cost prototype validation."
      }
    ]
  },
  {
    day: 2,
    dayLabel: "Day 02",
    theme: "Fundraising Mechanics, Pitch Teardown & Live Simulation",
    date: "[ADD EVENT DATE - DAY 2]",
    sessions: [
      {
        id: "d2-s1",
        time: "09:30 AM - 11:00 AM",
        title: "Anatomy of a Winning Pitch Deck: Seed to Series A",
        category: "Masterclass",
        speaker: "[ADD SPEAKER]",
        location: "Seminar Hall",
        description: "Slide-by-slide analysis of decks that raised millions. Learning investor psychology and narrative storytelling."
      },
      {
        id: "d2-s2",
        time: "11:00 AM - 01:00 PM",
        title: "Live Squad Pitch Challenge & Mentor Teardown",
        category: "Simulation",
        speaker: "Mentor Panel",
        location: "Seminar Hall",
        description: "Teams formulate a 3-minute pitch deck on stage with live, unvarnished critiques from seasoned mentors."
      },
      {
        id: "d2-s3",
        time: "01:00 PM - 02:00 PM",
        title: "Founder Networking Lunch",
        category: "Break",
        speaker: "All Participants",
        location: "Dining Hall",
        description: "Cross-disciplinary founder matching and discussions on incubating campus ventures."
      },
      {
        id: "d2-s4",
        time: "02:00 PM - 03:30 PM",
        title: "Venture Capital, Term Sheets & Legal Essentials",
        category: "Fireside Talk",
        speaker: "[ADD SPEAKER]",
        location: "Seminar Hall",
        description: "Navigating equity dilution, convertible notes, intellectual property protection, and founder vesting."
      },
      {
        id: "d2-s5",
        time: "03:30 PM - 04:00 PM",
        title: "Valedictory Ceremony & Certificate Handover",
        category: "Awards & Close",
        speaker: "REC & IIT Bombay Leadership",
        location: "Main Stage",
        description: "Distribution of official co-certified credentials, honors for winning pitches, and closing remarks."
      }
    ]
  }
];

export default SCHEDULE_DATA;
