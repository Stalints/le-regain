'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  Activity,
  BookOpen,
  Building2,
  Calendar,
  ChevronDown,
  ChevronRight,
  Clock,
  Image as ImageIcon,
  Mail,
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
    <header className="fixed left-0 top-0 z-50 w-full">
      <div className="hidden h-10 items-center justify-between border-b border-white/10 bg-[#0a0f0e]/60 px-8 text-xs font-semibold tracking-wide text-white/90 backdrop-blur-xl md:flex">
        <div className="flex items-center gap-8">
          <a href="tel:+918139001122" className="flex items-center gap-2 transition-colors hover:text-[#68a69e]">
            <Phone size={14} aria-hidden="true" />
            +91 81390 01122
          </a>
          <a href="mailto:info@regainpmr.com" className="flex items-center gap-2 transition-colors hover:text-[#68a69e]">
            <Mail size={14} aria-hidden="true" />
            info@regainpmr.com
          </a>
        </div>
        <span className="flex items-center gap-2">
          <Clock size={14} aria-hidden="true" />
          Mon-Sat: 9AM - 8PM
        </span>
      </div>
      <nav
        className="mx-auto flex h-20 max-w-[96rem] items-center justify-between gap-4 bg-[#0a0f0e]/70 px-4 shadow-lg backdrop-blur-xl transition-all duration-500 sm:px-6 lg:px-8"
        aria-label="Primary navigation"
      >
        <button
          type="button"
          onClick={() => handleNavigation(navItems[0])}
          className="group flex w-[12.5rem] shrink-0 flex-col items-center justify-center rounded-b-[2rem] bg-white/10 py-3 backdrop-blur-md sm:w-[14.5rem]"
        >
          <div className="flex items-end gap-0.5">
            <div className="relative h-12 w-36 transition-transform duration-300 group-hover:scale-[1.02] xl:h-14 xl:w-40">
              <Image
                src="/logo-leregain.png"
                alt="Le Regain"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          <span className="mt-1 rounded-full border border-white/20 bg-white/20 px-3 py-1 shadow-sm">
            <span className="block text-[9px] font-bold uppercase leading-none tracking-[0.16em] text-white xl:text-[10px]">
              Hair & Skin Clinic
            </span>
          </span>
        </button>

        <div className="hidden min-w-0 flex-1 items-center justify-center gap-1.5 rounded-full border border-white/10 bg-[#0a0f0e]/20 px-4 py-2 backdrop-blur-xl 2xl:flex">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeView === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavigation(item)}
                className="group relative flex shrink-0 items-center gap-1.5 whitespace-nowrap px-3 py-2 text-sm font-bold uppercase tracking-wide text-white/80 transition-colors duration-300 hover:text-white"
                style={{ color: isActive ? '#ffffff' : undefined }}
              >
                <Icon
                  size={15}
                  className="shrink-0 text-white/70 transition-transform duration-300 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
                {item.label}
                {item.id === 'pmr' || item.id === 'skin' || item.id === 'team' ? (
                  <ChevronDown size={14} className="text-white/55" aria-hidden="true" />
                ) : null}
                <span
                  className={`absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 transition-all duration-300 ${
                    isActive ? 'w-1/2' : 'w-0 group-hover:w-1/2'
                  }`}
                  style={{ backgroundColor: '#ffffff' }}
                  aria-hidden="true"
                />
              </button>
            );
          })}
        </div>

        <div className="hidden shrink-0 items-center gap-5 2xl:flex">
          <a
            href="tel:+918139001122"
            className="inline-flex h-11 shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-white/20 bg-white/10 px-4 text-sm font-bold text-white shadow-sm backdrop-blur transition-all duration-300 hover:bg-white/20"
          >
            <Phone size={17} aria-hidden="true" />
            Call
          </a>
          <button
            type="button"
            onClick={handleBookingClick}
            className="inline-flex h-11 shrink-0 items-center gap-2 whitespace-nowrap rounded-full bg-white px-5 text-sm font-bold shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 2xl:h-12 2xl:px-6"
            style={{
              color: BRAND_TEAL,
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
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/20 text-white backdrop-blur transition-all duration-300 hover:bg-white/30 2xl:hidden"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-slate-200 bg-white shadow-2xl transition-all duration-300 ease-out 2xl:hidden ${
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
