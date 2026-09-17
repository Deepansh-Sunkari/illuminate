import React, { useState, useEffect } from 'react';
import { Menu, ArrowRight } from 'lucide-react';
import SITE_DATA from '../../data/site';
import EVENT_DATA from '../../data/event';
import MobileMenu from './MobileMenu';
import IlluminateLogo from '../ui/IlluminateLogo';

export const Navbar = ({ onRegisterClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-[#070314]/85 backdrop-blur-xl border-b border-purple-500/20 shadow-lg shadow-black/40'
            : 'py-4 sm:py-5 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Group (Logos) */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Raghu Engg College Logo */}
            <a
              href="https://raghuenggcollege.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/95 px-2 py-1 sm:px-2.5 sm:py-1 rounded-lg border border-purple-300/40 hover:border-purple-300 hover:shadow-glow-sm transition-all flex items-center justify-center flex-shrink-0"
              title="Raghu Engineering College (Autonomous)"
            >
              <img
                src="/assets/logos/rec-logo.png"
                alt="Raghu Engineering College"
                className="h-5 sm:h-6 w-auto object-contain"
              />
            </a>

            {/* Divider */}
            <span className="text-purple-500/40 font-mono text-xs hidden xs:inline select-none">
              ×
            </span>

            {/* E-Cell IIT Bombay Logo */}
            <a
              href="https://www.ecell.in"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/95 px-2 py-1 rounded-lg border border-purple-300/40 hover:border-purple-300 hover:shadow-glow-sm transition-all flex items-center justify-center flex-shrink-0"
              title="E-Cell, IIT Bombay"
            >
              <img
                src="/assets/logos/ecell-logo.jpeg"
                alt="E-Cell IIT Bombay"
                className="h-5 sm:h-6 w-auto object-contain"
              />
            </a>

            {/* Divider */}
            <span className="text-purple-500/40 font-mono text-xs hidden sm:inline select-none">
              |
            </span>

            {/* Illuminate Plain Brand Link with Animated Flame 'i' */}
            <a
              href="#hero"
              onClick={(e) => handleScrollTo(e, '#hero')}
              className="flex items-center focus:outline-none group transition-transform hover:scale-105"
              title="Illuminate 2026 Home"
            >
              <IlluminateLogo size="nav" />
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {SITE_DATA.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-xs font-semibold tracking-wide uppercase text-slate-300 hover:text-white transition-colors relative py-1 focus:outline-none"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Register CTA & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                if (onRegisterClick) {
                  onRegisterClick();
                } else {
                  const el = document.querySelector('#register');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="hidden sm:inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 border border-purple-400/40 shadow-glow-sm hover:shadow-glow-md transition-all active:scale-[0.98]"
            >
              <span>Register</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2.5 rounded-xl bg-purple-950/60 border border-purple-500/30 text-slate-200 hover:text-white hover:border-purple-400 min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none active:scale-95 transition-all"
              aria-label="Open Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="w-5 h-5 text-purple-300" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onRegisterClick={onRegisterClick}
      />
    </>
  );
};

export default Navbar;
