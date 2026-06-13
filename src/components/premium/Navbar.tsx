'use client';

import { useEffect, useState } from 'react';
import { Activity, ArrowRight, ChevronDown, Clock, Mail, Menu, Phone, Sparkles, X } from 'lucide-react';
import { BRAND_TEAL, departments, navItems } from '@/data/premiumSite';
import Logo from './Logo';

type NavbarProps = {
  onBook: () => void;
};

export default function Navbar({ onBook }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isLight = !scrolled;

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <div
        className={`hidden h-10 items-center justify-between overflow-hidden px-8 text-xs font-medium tracking-wide text-white transition-all duration-500 md:flex ${
          scrolled ? 'h-0 border-transparent py-0 opacity-0' : 'border-b border-white/10 bg-white/10 py-2.5 opacity-100 backdrop-blur-md'
        }`}
      >
        <div className="flex items-center gap-8">
          <a href="tel:+15551234567" className="flex items-center gap-2 transition-colors hover:text-[#68a69e]">
            <Phone size={14} aria-hidden="true" />
            +1 (555) 123-4567
          </a>
          <a href="mailto:info@leregain.com" className="flex items-center gap-2 transition-colors hover:text-[#68a69e]">
            <Mail size={14} aria-hidden="true" />
            info@leregain.com
          </a>
        </div>
        <span className="flex items-center gap-2">
          <Clock size={14} aria-hidden="true" />
          Mon-Sat: 9AM - 8PM
        </span>
      </div>

      <div className={`transition-all duration-500 ${scrolled ? 'px-3 pt-3 sm:px-6 lg:px-8' : 'px-0'}`}>
        <nav
          className={`mx-auto transition-all duration-500 ${
            scrolled
              ? 'max-w-[92rem] rounded-full border border-gray-100 bg-white/95 px-4 py-2 shadow-2xl shadow-[#68a69e]/10 backdrop-blur-xl lg:px-5'
              : 'w-full bg-transparent px-4 py-4 sm:px-6 sm:py-5 lg:px-8'
          }`}
          aria-label="Primary navigation"
        >
          <div className="flex items-center justify-between gap-4">
            <Logo isLight={isLight} onClick={() => goTo('home')} />

            <div className="hidden min-w-0 items-center justify-end gap-0 xl:flex">
              {navItems.map((item) =>
                item.id === 'services' ? (
                  <div key={item.id} className="group relative px-2 py-2 2xl:px-3">
                    <button
                      type="button"
                      onClick={() => goTo('services')}
                      className={`relative flex items-center text-[11px] font-bold uppercase transition-colors 2xl:text-[13px] ${
                        isLight ? 'text-white/85 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      Services
                      <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                      <span className={`absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 transition-all duration-300 group-hover:w-1/2 ${isLight ? 'bg-white' : 'bg-[#68a69e]'}`} />
                    </button>
                    <div className="invisible absolute left-1/2 top-full mt-4 flex w-[42rem] -translate-x-1/2 translate-y-4 overflow-hidden rounded-3xl border border-gray-100 bg-white/95 opacity-0 shadow-[0_20px_50px_rgba(0,0,0,0.1)] backdrop-blur-xl transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                      {departments.map((department, index) => {
                        const Icon = department.id === 'pmr' ? Activity : Sparkles;
                        return (
                          <div key={department.id} className={`flex-1 p-6 ${index === 0 ? 'border-r border-gray-100 bg-gray-50/50' : ''}`}>
                            <button
                              type="button"
                              onClick={() => goTo(department.id)}
                              className="mb-4 flex w-full items-center text-left text-xs font-black uppercase tracking-widest text-[#68a69e] transition-colors hover:text-gray-900"
                            >
                              <Icon className="mr-2 h-4 w-4" />
                              {department.kicker}
                            </button>
                            <ul className="space-y-1">
                              {department.items.map((service) => (
                                <li key={service}>
                                  <button
                                    type="button"
                                    onClick={() => goTo(department.id)}
                                    className="flex w-full items-center py-1.5 text-left text-sm font-semibold text-gray-700 transition-all hover:translate-x-1 hover:text-[#68a69e]"
                                  >
                                    {service}
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => goTo(item.id)}
                    className={`relative px-2 py-2 text-[11px] font-bold uppercase transition-colors 2xl:px-3 2xl:text-[13px] ${
                      isLight ? 'text-white/85 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {item.label === 'Contact' ? 'Contact' : item.label}
                    <span className={`absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 transition-all duration-300 hover:w-1/2 ${isLight ? 'bg-white' : 'bg-[#68a69e]'}`} />
                  </button>
                ),
              )}

              <button
                type="button"
                onClick={onBook}
                className={`group relative ml-2 flex shrink-0 items-center overflow-hidden rounded-full px-4 py-2.5 text-[11px] font-bold shadow-lg transition-all hover:-translate-y-1 2xl:ml-3 2xl:px-5 2xl:py-3 2xl:text-[13px] ${
                  isLight ? 'bg-white text-[#68a69e]' : 'bg-[#68a69e] text-white'
                }`}
              >
                <span className="relative flex items-center">
                  Book Appointment
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
            </div>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className={`inline-flex h-11 w-11 items-center justify-center rounded-xl transition-colors xl:hidden ${
                isLight ? 'bg-white/20 text-white backdrop-blur hover:bg-white/30' : 'bg-gray-50 text-gray-700 hover:bg-teal-50 hover:text-[#68a69e]'
              }`}
              aria-label="Open navigation"
            >
              <Menu size={24} />
            </button>
          </div>
        </nav>
      </div>

      <div
        className={`fixed inset-0 z-[60] bg-gray-900/60 backdrop-blur-sm transition-opacity duration-300 xl:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setOpen(false)}
      />
      <aside
        className={`fixed right-0 top-0 z-[70] flex h-full w-[86%] max-w-sm flex-col bg-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] xl:hidden ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-gray-100 p-5">
          <Logo compact onClick={() => goTo('home')} />
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="rounded-full bg-gray-50 p-2 text-gray-500 transition-colors hover:bg-red-50 hover:text-red-500"
            aria-label="Close navigation"
          >
            <X size={24} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-4 py-5">
          <div className="grid gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => goTo(item.id)}
                className="rounded-2xl px-5 py-4 text-left text-sm font-bold uppercase tracking-wide text-gray-700 transition-colors hover:bg-teal-50 hover:text-[#68a69e]"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
        <div className="border-t border-gray-100 bg-gray-50 p-5">
          <button
            type="button"
            onClick={() => {
              onBook();
              setOpen(false);
            }}
            className="block w-full rounded-2xl px-4 py-4 text-center font-bold text-white shadow-lg"
            style={{ backgroundColor: BRAND_TEAL }}
          >
            Book Appointment
          </button>
        </div>
      </aside>
    </header>
  );
}
