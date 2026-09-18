import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import SITE_DATA from '../../data/site';

const ROUTES_ORDER = [
  { label: 'Home', href: '/' },
  ...SITE_DATA.navLinks
];

export const PageNavigator = () => {
  const location = useLocation();
  const currentIndex = ROUTES_ORDER.findIndex(r => r.href === location.pathname);

  // If route not found (or somehow invalid), don't show navigator
  if (currentIndex === -1) return null;

  const prevRoute = currentIndex > 0 ? ROUTES_ORDER[currentIndex - 1] : null;
  const nextRoute = currentIndex < ROUTES_ORDER.length - 1 ? ROUTES_ORDER[currentIndex + 1] : null;

  // Don't show on Home page since Hero has its own CTAs
  if (location.pathname === '/') return null;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex items-center justify-between mt-auto border-t border-purple-500/10">
      <div>
        {prevRoute && (
          <Link
            to={prevRoute.href}
            className="group flex items-center gap-2 text-sm sm:text-base font-semibold text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="hidden xs:inline">Back to</span> {prevRoute.label}
          </Link>
        )}
      </div>

      <div>
        {nextRoute && (
          <Link
            to={nextRoute.href}
            className="group flex items-center gap-2 text-sm sm:text-base font-semibold text-purple-400 hover:text-purple-300 transition-colors"
          >
            <span className="hidden xs:inline">Continue to</span> {nextRoute.label}
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default PageNavigator;
