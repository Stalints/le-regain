'use client';

import { ChevronRight, MapPin, Phone } from 'lucide-react';
import { BRAND_TEAL } from '@/data/premiumSite';
import Logo from './Logo';

export default function Footer() {
  return (
    <>
      <section className="relative z-30 mx-auto -mb-20 max-w-6xl px-4 sm:-mb-24 sm:px-6 lg:px-8">
        <div className="relative flex flex-col items-center justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#15201e]/95 p-6 shadow-2xl backdrop-blur-3xl sm:rounded-[2.5rem] sm:p-10 md:p-14 lg:flex-row">
          <div className="absolute inset-0 bg-gradient-to-br from-[#68a69e]/20 to-transparent opacity-50" />
          <div className="relative z-10 mb-6 max-w-2xl text-center lg:mb-0 lg:mr-8 lg:text-left">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Join the Le Regain Community
            </h2>
            <p className="text-sm leading-7 text-gray-400 sm:text-base md:text-lg">
              Subscribe for wellness tips, aesthetic trends, and priority booking notifications.
            </p>
          </div>
          <div className="relative z-10 flex w-full flex-col gap-3 sm:flex-row lg:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-4 font-medium text-white outline-none transition-all placeholder:text-gray-500 focus:ring-2 focus:ring-[#68a69e] sm:w-72"
            />
            <button className="w-full shrink-0 rounded-2xl bg-[#68a69e] px-8 py-4 font-bold text-white shadow-lg transition-colors hover:bg-white hover:text-[#0a0f0e] sm:w-auto">
              Subscribe
            </button>
          </div>
        </div>
      </section>
      <footer className="relative overflow-hidden bg-[#0a0f0e] pb-10 pt-32 text-white sm:pb-12 sm:pt-36">
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-serif text-[20vw] font-black leading-none text-white/[0.02]">
          LE REGAIN
        </div>
        <div className="pointer-events-none absolute right-0 top-0 h-[32rem] w-[32rem] translate-x-1/3 -translate-y-1/2 rounded-full bg-[#68a69e]/10 blur-[110px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-[28rem] w-[28rem] -translate-x-1/4 translate-y-1/3 rounded-full bg-[#68a69e]/10 blur-[110px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
            <div className="sm:col-span-2 lg:col-span-4">
              <div className="mb-8 inline-block rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-md">
                <Logo isLight />
              </div>
              <p className="max-w-md text-sm font-light leading-7 text-gray-400 sm:text-base">
                A premier destination for restorative physical medicine and advanced aesthetic treatments.
              </p>
            </div>
            <div className="lg:col-span-2">
              <h3 className="mb-7 text-lg font-bold uppercase tracking-wide text-white">Explore</h3>
              <ul className="space-y-4">
                {['Home', 'About Us', 'Our Team', 'Technologies', 'Gallery'].map((link) => (
                  <li key={link}>
                    <a href="#home" className="group flex items-center text-sm font-medium text-gray-400 transition-colors hover:text-[#68a69e] sm:text-base">
                      <ChevronRight className="mr-2 h-4 w-4 text-[#68a69e]/50 transition-colors group-hover:text-[#68a69e]" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-3">
              <h3 className="mb-7 text-lg font-bold uppercase tracking-wide text-white">Departments</h3>
              <ul className="space-y-6">
                <li>
                  <a href="#pmr" className="group block text-left">
                    <strong className="mb-1 block text-sm font-semibold text-gray-200 transition-colors group-hover:text-[#68a69e] sm:text-base">
                      Physical Medicine & Rehab
                    </strong>
                    <span className="block text-xs leading-tight text-gray-500 sm:text-sm">Sports medicine, pain management.</span>
                  </a>
                </li>
                <li>
                  <a href="#skin" className="group block text-left">
                    <strong className="mb-1 block text-sm font-semibold text-gray-200 transition-colors group-hover:text-[#68a69e] sm:text-base">
                      Hair & Skin Clinic
                    </strong>
                    <span className="block text-xs leading-tight text-gray-500 sm:text-sm">Advanced dermatology, aesthetics.</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="sm:col-span-2 lg:col-span-3">
              <h3 className="mb-7 text-lg font-bold uppercase tracking-wide text-white">Contact Us</h3>
              <ul className="space-y-5">
                <li className="flex items-start">
                  <span className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#68a69e]">
                    <MapPin size={18} />
                  </span>
                  <span className="mt-1 text-sm leading-relaxed text-gray-400">
                    123 Wellness Avenue,
                    <br />
                    Health District, NY 10001
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#68a69e]">
                    <Phone size={18} />
                  </span>
                  <span className="text-sm text-gray-400">+1 (555) 123-4567</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center text-sm text-gray-500 md:flex-row md:text-left">
            <p>&copy; {new Date().getFullYear()} Le Regain Clinics. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-5 sm:gap-8">
              <a href="#" className="transition-colors hover:text-[#68a69e]">Privacy Policy</a>
              <a href="#" className="transition-colors hover:text-[#68a69e]">Terms of Service</a>
              <a href="#" className="font-bold transition-colors hover:text-white" style={{ color: BRAND_TEAL }}>Admin Login</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
