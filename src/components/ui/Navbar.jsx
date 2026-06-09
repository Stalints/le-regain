'use client';

import { useState } from 'react';
import {
  Activity,
  BookOpen,
  Building2,
  Calendar,
  ChevronRight,
  Image as ImageIcon,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react';
import { BRAND_GREY, BRAND_TEAL } from '@/config/branding';

const navItems = [
  {
    id: 'home',
    label: 'Home',
    icon: Activity,
  },
  {
    id: 'pmr',
    label: 'PMR Clinic',
    icon: Activity,
  },
  {
    id: 'skin',
    label: 'Hair & Skin',
    icon: Sparkles,
  },
  {
    id: 'team',
    label: 'Teams',
    icon: Building2,
  },
  {
    id: 'gallery',
    label: 'Gallery',
    icon: ImageIcon,
  },
  {
    id: 'blog',
    label: 'Blog',
    icon: BookOpen,
  },
  {
    id: 'contact',
    label: 'Contact',
    icon: Phone,
  },
  {
    id: 'admin',
    label: 'Admin',
    icon: ShieldCheck,
  },
];

const routedViewIds = new Set(['home', 'pmr', 'skin', 'team', 'locations', 'gallery', 'blog', 'admin']);

const hashTargets = {
  home: '#home',
  pmr: '#pmr-clinic',
  skin: '#hair-skin-clinic',
  gallery: '#gallery',
  blog: '#blog',
  contact: '#contact',
  admin: '#admin',
};

export default function Navbar({
  activeView = 'home',
  setActiveView,
  onBookAppointment,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (item) => {
    if (routedViewIds.has(item.id)) {
      setActiveView?.(item.id);
    } else if (item.id === 'contact') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }

    setIsMenuOpen(false);
  };

  const handleBookingClick = () => {
    onBookAppointment?.();
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-xl">
      <nav
        className="mx-auto flex h-20 max-w-[96rem] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8"
        aria-label="Primary navigation"
      >
        <button
          type="button"
          onClick={() => handleNavigation(navItems[0])}
          className="group flex shrink-0 flex-col items-center justify-center w-[13rem] xl:w-[14.5rem]"
        >
          <span className="flex items-baseline leading-[0.9]">
            <span
              className="mr-1 font-serif text-xl italic transition-colors group-hover:text-slate-950 xl:text-2xl"
              style={{ color: BRAND_GREY }}
            >
              Le
            </span>
            <span
              className="font-serif text-[2.45rem] font-bold italic leading-[0.9] transition-transform duration-300 group-hover:scale-[1.03] xl:text-[2.85rem]"
              style={{ color: BRAND_TEAL }}
            >
              Regain
            </span>
          </span>
          <span className="mt-0.5 rounded-full bg-white px-3 py-0.5 shadow-sm">
            <span
              className="block rounded-full px-3 py-1 text-[9px] font-bold uppercase leading-none tracking-[0.16em] text-white xl:px-4 xl:text-[10px]"
              style={{ backgroundColor: BRAND_GREY }}
            >
              Hair & Skin Clinic
            </span>
          </span>
        </button>

        <div className="hidden min-w-0 flex-1 items-center justify-center gap-1.5 pr-7 2xl:flex">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeView === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavigation(item)}
                className="group relative flex shrink-0 items-center gap-2 whitespace-nowrap px-3 py-2 text-sm font-bold uppercase tracking-wide transition-colors duration-300"
                style={{ color: isActive ? BRAND_TEAL : '#4b5563' }}
              >
                <Icon
                  size={16}
                  className="shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
                {item.label}
                <span
                  className={`absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 transition-all duration-300 ${
                    isActive ? 'w-1/2' : 'w-0 group-hover:w-1/2'
                  }`}
                  style={{ backgroundColor: BRAND_TEAL }}
                  aria-hidden="true"
                />
              </button>
            );
          })}
        </div>

        <div className="hidden shrink-0 items-center gap-5 2xl:flex">
          <a
            href="tel:+918139001122"
            className="inline-flex h-11 shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-slate-200 px-4 text-sm font-bold text-slate-700 shadow-sm transition-all duration-300 hover:border-slate-300 hover:bg-slate-50"
          >
            <Phone size={17} aria-hidden="true" />
            Call
          </a>
          <button
            type="button"
            onClick={handleBookingClick}
            className="inline-flex h-11 shrink-0 items-center gap-2 whitespace-nowrap rounded-full px-5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 2xl:h-12 2xl:px-6"
            style={{
              backgroundColor: BRAND_TEAL,
              '--tw-ring-color': BRAND_TEAL,
            }}
          >
            <Calendar size={17} aria-hidden="true" />
            Book Appointment
            <ChevronRight size={16} aria-hidden="true" />
          </button>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-slate-50 text-slate-700 transition-all duration-300 hover:bg-teal-50 hover:text-[#68a69e] 2xl:hidden"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-slate-100 bg-white transition-all duration-300 ease-out 2xl:hidden ${
          isMenuOpen ? 'max-h-[38rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
          <div className="grid gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeView === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavigation(item)}
                  className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-bold uppercase tracking-wide transition-all duration-300"
                  style={{
                    color: isActive ? BRAND_TEAL : '#374151',
                    backgroundColor: isActive ? 'rgba(104, 166, 158, 0.12)' : '#f8fafc',
                  }}
                >
                  <span className="flex items-center gap-3">
                    <Icon size={18} aria-hidden="true" />
                    {item.label}
                  </span>
                  <ChevronRight size={17} aria-hidden="true" />
                </button>
              );
            })}
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <a
              href="tel:+918139001122"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-slate-200 px-4 text-sm font-bold text-slate-700 transition-all duration-300 hover:bg-slate-50"
            >
              <Phone size={17} aria-hidden="true" />
              Call Le Regain
            </a>
            <button
              type="button"
              onClick={handleBookingClick}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-bold text-white shadow-sm transition-all duration-300 hover:shadow-md"
              style={{ backgroundColor: BRAND_TEAL }}
            >
              <Calendar size={17} aria-hidden="true" />
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
