'use client';

import {
  Activity,
  BookOpen,
  Building2,
  Calendar,
  Clock,
  Image as ImageIcon,
  LockKeyhole,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from 'lucide-react';
import { BRAND_GREY, BRAND_TEAL } from '@/config/branding';
import {
  clinicIdentity,
  hairAndSkinClinicServices,
  locations,
  pmrClinicServices,
} from '@/data/clinicContent';

const contactDetails = {
  pmr: {
    label: 'PMR Clinic',
    phone: '+91 81390 01122',
    phoneHref: 'tel:+918139001122',
    email: 'info@regainpmr.com',
    emailHref: 'mailto:info@regainpmr.com',
  },
  skin: {
    label: 'Hair & Skin Clinic',
    phone: '+91 90741 12231',
    phoneHref: 'tel:+919074112231',
    email: 'info@regainbeauty.com',
    emailHref: 'mailto:info@regainbeauty.com',
  },
};

const deepLinks = [
  {
    id: 'skin',
    label: 'Hair & Skin Clinic',
    href: '#hair-skin-clinic',
    icon: Sparkles,
  },
  {
    id: 'pmr',
    label: 'PMR Clinic',
    href: '#pmr-clinic',
    icon: Activity,
  },
  {
    id: 'team',
    label: 'Doctors',
    href: '#team',
    icon: Building2,
  },
  {
    id: 'locations',
    label: 'Locations',
    href: '#locations',
    icon: MapPin,
  },
  {
    id: 'gallery',
    label: 'Gallery',
    href: '#gallery',
    icon: ImageIcon,
  },
  {
    id: 'blog',
    label: 'Blog',
    href: '#blog',
    icon: BookOpen,
  },
  {
    id: 'appointment',
    label: 'Book Appointment',
    href: '#appointment',
    icon: Calendar,
  },
  {
    id: 'admin',
    label: 'Admin Portal',
    href: '#admin',
    icon: LockKeyhole,
  },
];

const routedViewIds = new Set(['home', 'pmr', 'skin', 'team', 'locations', 'gallery', 'blog', 'admin']);

const branchWidgets = [
  {
    id: 'vyttila-hub',
    title: 'Vyttila Hub',
    location: locations.primaryHub,
    contact: contactDetails.pmr,
    hours: 'PMR enquiries and clinic appointments',
  },
  {
    id: 'edappally-physiotherapy-centre',
    title: 'Edappally Physiotherapy Centre',
    location: locations.edappallyPhysiotherapyCentre,
    contact: contactDetails.pmr,
    hours: 'Physiotherapy and rehabilitation appointments',
  },
];

export default function Footer({ activeView = 'home', setActiveView, onBookAppointment }) {
  const handleDeepLinkClick = (event, link) => {
    if (link.id === 'appointment') {
      event.preventDefault();
      onBookAppointment?.();
      return;
    }

    if (routedViewIds.has(link.id)) {
      setActiveView?.(link.id);
    }
  };

  return (
    <>
      {/* Newsletter CTA — sits above the footer with breathing room */}
      <section className="relative z-20 mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#15201e]/95 p-7 shadow-2xl backdrop-blur-3xl sm:p-10 md:p-14">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#68a69e]/20 to-transparent opacity-60" />
          <div className="relative z-10 flex flex-col items-stretch gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex-1 text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Join the Le Regain Community
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-gray-400 sm:text-base">
                Subscribe for wellness tips, skin-care updates and priority booking notifications.
              </p>
            </div>
            <form
              onSubmit={(event) => event.preventDefault()}
              className="flex w-full shrink-0 flex-col gap-3 sm:flex-row sm:items-center lg:w-auto"
              role="form"
            >
              <label htmlFor="community-email" className="sr-only">
                Email address
              </label>
              <input
                id="community-email"
                type="email"
                placeholder="Enter your email"
                className="h-12 w-full rounded-2xl border border-white/10 bg-white/5 px-5 text-sm font-medium text-white outline-none transition-all placeholder:text-gray-500 focus:border-transparent focus:ring-2 focus:ring-[#68a69e] sm:w-72"
              />
              <button
                type="submit"
                className="inline-flex h-12 shrink-0 items-center justify-center rounded-2xl px-7 text-sm font-bold text-white shadow-lg transition-all hover:bg-white hover:text-[#0a0f0e]"
                style={{ backgroundColor: BRAND_TEAL }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer id="contact" className="relative overflow-hidden bg-[#0a0f0e] pt-16 text-white">
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-serif text-[20vw] font-black leading-none text-white/[0.025]">
          LE REGAIN
        </div>
        <div className="pointer-events-none absolute right-0 top-0 h-[32rem] w-[32rem] translate-x-1/3 -translate-y-1/2 rounded-full bg-[#68a69e]/10 blur-[110px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-[28rem] w-[28rem] -translate-x-1/4 translate-y-1/3 rounded-full bg-[#68a69e]/10 blur-[110px]" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.8fr_1.25fr]">
          <section>
            <div className="inline-block rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-md">
              <div className="flex flex-col items-center">
                <div className="flex items-end gap-0.5">
                  <span className="leregain-logo mb-[0.42rem] text-2xl italic text-white">Le</span>
                  <span className="leregain-logo text-5xl font-bold italic leading-none" style={{ color: BRAND_TEAL }}>
                    Regain
                  </span>
                </div>
                <div className="mt-1 ml-12 rounded-full border border-[#68a69e]/30 bg-[#68a69e]/20 px-4 py-1">
                  <span className="leregain-logo text-xs uppercase tracking-widest text-white">Hair & Skin Clinic</span>
                </div>
              </div>
            </div>

            <p className="mt-5 max-w-md text-sm leading-6 text-slate-300">
              Integrated dermatology, aesthetics, PMR, physiotherapy and rehabilitation care
              across Le Regain&apos;s Kochi clinics.
            </p>

            <div className="mt-6 grid gap-3">
              <a
                href={contactDetails.pmr.phoneHref}
                className="flex items-center gap-3 text-sm font-semibold text-slate-100 transition-colors duration-300 hover:text-white"
              >
                <Phone size={18} style={{ color: BRAND_TEAL }} aria-hidden="true" />
                {contactDetails.pmr.phone}
              </a>
              <a
                href={contactDetails.skin.phoneHref}
                className="flex items-center gap-3 text-sm font-semibold text-slate-100 transition-colors duration-300 hover:text-white"
              >
                <Phone size={18} style={{ color: BRAND_TEAL }} aria-hidden="true" />
                {contactDetails.skin.phone}
              </a>
              <a
                href={contactDetails.pmr.emailHref}
                className="flex items-center gap-3 text-sm font-semibold text-slate-100 transition-colors duration-300 hover:text-white"
              >
                <Mail size={18} style={{ color: BRAND_TEAL }} aria-hidden="true" />
                {contactDetails.pmr.email}
              </a>
              <a
                href={contactDetails.skin.emailHref}
                className="flex items-center gap-3 text-sm font-semibold text-slate-100 transition-colors duration-300 hover:text-white"
              >
                <Mail size={18} style={{ color: BRAND_TEAL }} aria-hidden="true" />
                {contactDetails.skin.email}
              </a>
            </div>
          </section>

          <section>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
              Deep Links
            </h2>
            <div className="mt-5 grid gap-2">
              {deepLinks.map((link) => {
                const Icon = link.icon;
                const isActive = activeView === link.id;

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(event) => handleDeepLinkClick(event, link)}
                    className="group flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-semibold text-slate-200 transition-all duration-300 hover:bg-white/10 hover:text-white"
                    style={{
                      backgroundColor: isActive ? 'rgba(104, 166, 158, 0.14)' : 'transparent',
                      color: isActive ? '#ffffff' : undefined,
                    }}
                  >
                    <Icon
                      size={17}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5"
                      style={{ color: BRAND_TEAL }}
                      aria-hidden="true"
                    />
                    {link.label}
                  </a>
                );
              })}
            </div>

            <div className="mt-8">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                Clinics
              </h2>
              <div className="mt-4 grid gap-3 text-sm text-slate-300">
                <p>{hairAndSkinClinicServices.length} Hair & Skin service groups</p>
                <p>{pmrClinicServices.length} PMR service groups</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
              Kochi Branches
            </h2>
            <div className="mt-5 grid gap-4">
              {branchWidgets.map((branch) => (
                <article
                  key={branch.id}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                >
                  <div className="flex items-start gap-3">
                    <span
                      className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                      style={{ backgroundColor: 'rgba(104, 166, 158, 0.16)', color: BRAND_TEAL }}
                      aria-hidden="true"
                    >
                      <MapPin size={19} />
                    </span>
                    <div>
                      <h3 className="font-semibold text-white">{branch.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-300">
                        {branch.location.address}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 grid gap-2 text-sm text-slate-300">
                    <a
                      href={branch.contact.phoneHref}
                      className="flex items-center gap-3 transition-colors duration-300 hover:text-white"
                    >
                      <Phone size={16} style={{ color: BRAND_TEAL }} aria-hidden="true" />
                      {branch.contact.phone}
                    </a>
                    <a
                      href={branch.contact.emailHref}
                      className="flex items-center gap-3 transition-colors duration-300 hover:text-white"
                    >
                      <Mail size={16} style={{ color: BRAND_TEAL }} aria-hidden="true" />
                      {branch.contact.email}
                    </a>
                    <p className="flex items-center gap-3">
                      <Clock size={16} style={{ color: BRAND_TEAL }} aria-hidden="true" />
                      {branch.hours}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>

        <div
          className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between"
        >
          <p>&copy; {new Date().getFullYear()} {clinicIdentity.fullName}. All rights reserved.</p>
          <p>Vyttila Hub | Edappally Physiotherapy Centre | Kochi, Kerala</p>
        </div>
      </div>
      </footer>
    </>
  );
}

