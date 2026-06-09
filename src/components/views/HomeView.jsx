'use client';

import { useMemo, useState } from 'react';
import {
  Activity,
  ArrowRight,
  Award,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Quote,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
} from 'lucide-react';
import { BRAND_GREY, BRAND_TEAL } from '@/config/branding';
import {
  clinicIdentity,
  hairAndSkinClinicServices,
  locations,
  pmrClinicServices,
  team,
} from '@/data/clinicContent';

const heroSlides = [
  {
    id: 'integrated-care',
    eyebrow: 'Integrated Healthcare & Aesthetics',
    title: 'Medical care for movement, skin, hair and confidence.',
    body: 'Le Regain brings PMR, rehabilitation, dermatology, trichology and aesthetics into one coordinated Kochi clinic experience.',
    image:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1800&q=85',
    cta: 'Explore clinics',
  },
  {
    id: 'pmr-rehab',
    eyebrow: 'PMR & Rehabilitation',
    title: 'Function-first recovery without rushing to surgery.',
    body: 'A physiatry-led approach for pain, sports injuries, orthopaedic recovery and advanced rehabilitation.',
    image:
      'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1800&q=85',
    cta: 'View PMR care',
  },
  {
    id: 'skin-aesthetics',
    eyebrow: 'Hair, Skin & Aesthetics',
    title: 'Clinical dermatology with refined aesthetic precision.',
    body: "From acne and pigmentation to lasers, trichology and Kerala's first signature Cryo Facial.",
    image:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1800&q=85',
    cta: 'View skin clinic',
  },
];

const testimonials = [
  {
    id: 'rehab-recovery',
    name: 'Rehabilitation Patient',
    role: 'PMR Clinic',
    quote:
      'The team looked at pain, movement and daily function together. The plan felt structured, calm and practical.',
  },
  {
    id: 'skin-care',
    name: 'Skin Clinic Client',
    role: 'Hair & Skin Clinic',
    quote:
      'The treatment plan was explained clearly and the facial protocol felt premium without losing the medical focus.',
  },
  {
    id: 'sports-care',
    name: 'Sports Rehab Client',
    role: 'Sports Medicine',
    quote:
      'The return-to-activity program was measured step by step, with proper strengthening and confidence building.',
  },
];

const chooseUsItems = [
  {
    title: 'Multi-disciplinary panel',
    body: 'Dermatology, PMR, physiotherapy, rehabilitation and aesthetic medicine work as connected care streams.',
    icon: Users,
  },
  {
    title: 'Doctor-led protocols',
    body: 'Clinical assessment guides each plan before procedures, device treatments or rehabilitation sessions begin.',
    icon: Stethoscope,
  },
  {
    title: 'Two Kochi access points',
    body: 'The Vyttila hub is supported by the Le Regain Physiotherapy Centre in Edappally.',
    icon: ShieldCheck,
  },
  {
    title: 'Advanced treatment stack',
    body: 'Cryo Facial, medical facials, aesthetic lasers, ultrasound-guided PRP and specialized rehab programs.',
    icon: Award,
  },
];

export default function HomeView({ onBookAppointment, setActiveView }) {
  const [activeHero, setActiveHero] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const slide = heroSlides[activeHero];
  const testimonial = testimonials[activeTestimonial];

  const divisionCards = useMemo(
    () => [
      {
        id: 'pmr',
        title: 'PMR Clinic',
        subtitle: 'Pain, mobility and rehabilitation medicine',
        body: `${pmrClinicServices.length} coordinated service groups, including interventional pain management and specialized rehabilitation.`,
        href: '#pmr-clinic',
        icon: Activity,
        services: pmrClinicServices.slice(0, 4).map((service) => service.title),
      },
      {
        id: 'skin',
        title: 'Hair & Skin Clinic',
        subtitle: 'Dermatology, trichology and aesthetics',
        body: `${hairAndSkinClinicServices.length} clinical service groups, including facials, lasers and Kerala's first signature Cryo Facial.`,
        href: '#hair-skin-clinic',
        icon: Sparkles,
        services: hairAndSkinClinicServices.map((service) => service.title),
      },
    ],
    [],
  );

  const goToDivision = (division) => {
    setActiveView?.(division.id);
  };

  return (
    <main id="home" className="bg-white">
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          {heroSlides.map((item, index) => (
            <img
              key={item.id}
              src={item.image}
              alt=""
              className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                index === activeHero ? 'scale-100 opacity-70' : 'scale-105 opacity-0'
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/78 to-slate-950/20" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
        </div>

        <div className="relative mx-auto grid min-h-[680px] max-w-7xl content-end px-4 pb-20 pt-28 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
              {slide.eyebrow}
            </p>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              {slide.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
              {slide.body}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={onBookAppointment}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                style={{ backgroundColor: BRAND_TEAL }}
              >
                <Calendar size={18} aria-hidden="true" />
                Book Appointment
              </button>
              <a
                href="#locations"
                onClick={() => setActiveView?.('locations')}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white/15"
              >
                {slide.cta}
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="mt-10 flex items-center gap-3">
            <button
              type="button"
              onClick={() => setActiveHero((current) => (current === 0 ? heroSlides.length - 1 : current - 1))}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition-all duration-300 hover:bg-white/20"
              aria-label="Previous hero slide"
            >
              <ChevronLeft size={20} aria-hidden="true" />
            </button>
            <div className="flex gap-2">
              {heroSlides.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveHero(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === activeHero ? 'w-8 bg-white' : 'w-2.5 bg-white/40'
                  }`}
                  aria-label={`Show ${item.eyebrow} slide`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => setActiveHero((current) => (current + 1) % heroSlides.length)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition-all duration-300 hover:bg-white/20"
              aria-label="Next hero slide"
            >
              <ChevronRight size={20} aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em]" style={{ color: BRAND_TEAL }}>
              Choose your care track
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">
              Two specialist divisions, one connected clinic.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {divisionCards.map((division) => {
              const Icon = division.icon;

              return (
                <a
                  key={division.id}
                  href={division.href}
                  onClick={() => goToDivision(division)}
                  className="group rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex items-start justify-between gap-5">
                    <span
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-white"
                      style={{ backgroundColor: BRAND_TEAL }}
                      aria-hidden="true"
                    >
                      <Icon size={26} />
                    </span>
                    <ArrowRight
                      size={22}
                      className="text-slate-400 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em]" style={{ color: BRAND_GREY }}>
                    {division.subtitle}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-slate-950">{division.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{division.body}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {division.services.map((service) => (
                      <span
                        key={service}
                        className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-600 ring-1 ring-slate-200"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-slate-50 to-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em]" style={{ color: BRAND_TEAL }}>
              Patient voices
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">
              Care that feels coordinated from first consult to follow-up.
            </h2>
            <div className="mt-6 flex gap-3">
              <button
                type="button"
                onClick={() =>
                  setActiveTestimonial((current) =>
                    current === 0 ? testimonials.length - 1 : current - 1,
                  )
                }
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition-all duration-300 hover:bg-slate-50"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => setActiveTestimonial((current) => (current + 1) % testimonials.length)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition-all duration-300 hover:bg-slate-50"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} aria-hidden="true" />
              </button>
            </div>
          </div>

          <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <Quote size={34} style={{ color: BRAND_TEAL }} aria-hidden="true" />
            <p className="mt-5 text-xl font-medium leading-8 text-slate-800">
              "{testimonial.quote}"
            </p>
            <div className="mt-6 flex items-center justify-between gap-4 border-t border-slate-100 pt-5">
              <div>
                <p className="font-semibold text-slate-950">{testimonial.name}</p>
                <p className="text-sm text-slate-500">{testimonial.role}</p>
              </div>
              <div className="flex gap-2">
                {testimonials.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveTestimonial(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      index === activeTestimonial ? 'w-8' : 'w-2.5 bg-slate-300'
                    }`}
                    style={{ backgroundColor: index === activeTestimonial ? BRAND_TEAL : undefined }}
                    aria-label={`Show testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em]" style={{ color: BRAND_TEAL }}>
                Why choose {clinicIdentity.name}
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">
                A panel built for complete recovery and visible results.
              </h2>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                {team.length} care roles across SKIN and PMR streams support medical assessment,
                treatment planning and long-term care.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {chooseUsItems.map((item) => {
                const Icon = item.icon;

                return (
                  <article key={item.title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                    <span
                      className="flex h-11 w-11 items-center justify-center rounded-2xl"
                      style={{ backgroundColor: 'rgba(104, 166, 158, 0.12)', color: BRAND_TEAL }}
                      aria-hidden="true"
                    >
                      <Icon size={21} />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold text-slate-950">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.body}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
