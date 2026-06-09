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
    <footer id="contact" className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.8fr_1.25fr]">
          <section>
            <div className="flex items-center gap-3">
              <span
                className="flex h-12 w-12 items-center justify-center rounded-full text-white"
                style={{ backgroundColor: BRAND_TEAL }}
                aria-hidden="true"
              >
                <Sparkles size={22} strokeWidth={2.2} />
              </span>
              <div>
                <p className="text-xl font-semibold">{clinicIdentity.name}</p>
                <p className="text-sm font-medium text-slate-300">{clinicIdentity.tagline}</p>
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
          style={{ color: BRAND_GREY }}
        >
          <p>&copy; {new Date().getFullYear()} {clinicIdentity.fullName}. All rights reserved.</p>
          <p>Vyttila Hub | Edappally Physiotherapy Centre | Kochi, Kerala</p>
        </div>
      </div>
    </footer>
  );
}
