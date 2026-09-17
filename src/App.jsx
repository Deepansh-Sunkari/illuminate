import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import CinematicPreloader from './components/Preloader/CinematicPreloader';
import AnimatedBackground from './components/ui/AnimatedBackground';
import CustomCursor from './components/ui/CustomCursor';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import EventIntro from './components/EventIntro/EventIntro';
import RegistrationWizard from './components/Registration/RegistrationWizard';
import FAQSection from './components/FAQ/FAQSection';
import ContactSection from './components/Contact/ContactSection';
import Footer from './components/Footer/Footer';

export function App() {
  const [showPreloader, setShowPreloader] = useState(true);

  const handleRegisterClick = () => {
    const el = document.querySelector('#register');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#05020c] text-slate-100 selection:bg-purple-600 selection:text-white relative flex flex-col justify-between">
      {/* Interactive Custom Mouse Cursor for Desktop */}
      <CustomCursor />

      {/* Global Animated Cosmic Background */}
      <AnimatedBackground />

      <AnimatePresence mode="wait">
        {showPreloader && (
          <CinematicPreloader onComplete={() => setShowPreloader(false)} />
        )}
      </AnimatePresence>

      {/* Floating Global Navbar */}
      <Navbar onRegisterClick={handleRegisterClick} />

      {/* Main Page Content */}
      <main className="relative z-10 flex-1">
        <Hero onRegisterClick={handleRegisterClick} />
        <EventIntro />
        <RegistrationWizard />
        <FAQSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
