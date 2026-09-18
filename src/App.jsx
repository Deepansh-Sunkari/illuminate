import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import CinematicPreloader from './components/Preloader/CinematicPreloader';
import AnimatedBackground from './components/ui/AnimatedBackground';
import ScrollToTop from './components/ui/ScrollToTop';
import PageNavigator from './components/ui/PageNavigator';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import ScrollMarquee from './components/ui/ScrollMarquee';
import EventIntro from './components/EventIntro/EventIntro';
import SpeakerSection from './components/Speaker/SpeakerSection';
import RegistrationWizard from './components/Registration/RegistrationWizard';
import FAQSection from './components/FAQ/FAQSection';
import ContactSection from './components/Contact/ContactSection';
import Footer from './components/Footer/Footer';

export function App() {
  const [showPreloader, setShowPreloader] = useState(true);
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <div className="min-h-screen bg-[#05020c] text-slate-100 selection:bg-purple-600 selection:text-white relative flex flex-col justify-between overflow-x-hidden">
      <ScrollToTop />
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
      <main className="relative z-10 flex-1 flex flex-col pt-24 sm:pt-32">
        <Routes>
          <Route path="/" element={
            <>
              <Hero onRegisterClick={handleRegisterClick} isReady={!showPreloader} />
              <ScrollMarquee />
            </>
          } />
          <Route path="/about" element={<EventIntro />} />
          <Route path="/speaker" element={<SpeakerSection />} />
          <Route path="/register" element={<RegistrationWizard />} />
          <Route path="/faq" element={<FAQSection />} />
          <Route path="/contact" element={<ContactSection />} />
        </Routes>
        
        {/* Pagination across routes */}
        <PageNavigator />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
