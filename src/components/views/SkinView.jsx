'use client';

import {
  ArrowRight,
  CircleDot,
  Droplets,
  Gem,
  ScanFace,
  ShieldCheck,
  Snowflake,
  Sparkles,
  Wand2,
} from 'lucide-react';
import { BRAND_GREY, BRAND_TEAL } from '@/config/branding';
import { hairAndSkinClinicServices, team } from '@/data/clinicContent';

const skinDoctors = team.filter((doctor) => doctor.division === 'SKIN');
const cryoService = hairAndSkinClinicServices.find((service) =>
  service.treatments.some((treatment) => treatment.includes('Cryo Facial')),
);

export default function SkinView({ onBookAppointment }) {
  return (
    <main id="hair-skin-clinic" className="bg-[#fafafa]">
      <section className="relative overflow-hidden bg-[#0a0f0e] px-4 pb-20 pt-36 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=1920&q=85"
            alt=""
            className="h-full w-full object-cover opacity-42"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f0e] via-[#0a0f0e]/82 to-[#0a0f0e]/20" />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
              Hair & Skin Clinic
            </p>
            <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-6xl">
              Clinical dermatology, refined aesthetics and next-generation skin rituals.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-200">
              Le Regain combines dermatologist-led skin care, trichology, medical facials and
              aesthetic lasers with an emphasis on precise assessment and visible outcomes.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={onBookAppointment}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                style={{ backgroundColor: BRAND_TEAL }}
              >
                Book Skin Consultation
                <ArrowRight size={18} aria-hidden="true" />
              </button>
              <a
                href="#cryo-facial"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white/15"
              >
                Kerala's first Cryo Facial
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {skinDoctors.map((doctor) => (
              <article key={doctor.id} className="rounded-[2rem] border border-white/10 bg-white/90 p-5 shadow-2xl backdrop-blur">
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-2xl"
                  style={{ backgroundColor: 'rgba(104, 166, 158, 0.12)', color: BRAND_TEAL }}
                  aria-hidden="true"
                >
                  <ScanFace size={21} />
                </span>
                <h2 className="mt-5 text-lg font-semibold text-slate-950">{doctor.name}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{doctor.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-[#fafafa]">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em]" style={{ color: BRAND_TEAL }}>
              Dermatology and aesthetic care
            </p>
            <h2 className="mt-3 text-3xl font-bold text-gray-950 sm:text-5xl">
              Advanced services organized around diagnosis, skin health and finish.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {hairAndSkinClinicServices.map((service, index) => {
              const icons = [ShieldCheck, Droplets, Sparkles, Wand2];
              const Icon = icons[index % icons.length];

              return (
                <article
                  key={service.id}
                  className="rounded-[2rem] border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex items-start gap-4">
                    <span
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl"
                      style={{ backgroundColor: 'rgba(104, 166, 158, 0.12)', color: BRAND_TEAL }}
                      aria-hidden="true"
                    >
                      <Icon size={23} />
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-950">{service.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{service.summary}</p>
                    </div>
                  </div>
                  <div className="mt-5 grid gap-2 sm:grid-cols-2">
                    {service.treatments.map((treatment) => (
                      <p key={treatment} className="flex gap-2 text-sm text-slate-700">
                        <CircleDot size={14} className="mt-1 shrink-0" style={{ color: BRAND_TEAL }} aria-hidden="true" />
                        {treatment}
                      </p>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="cryo-facial" className="relative overflow-hidden bg-[#1a2b29] px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1920&q=85"
            alt=""
            className="h-full w-full object-cover mix-blend-overlay"
          />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em]" style={{ color: BRAND_TEAL }}>
              Flagship treatment
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Kerala's first signature Cryo Facial at Le Regain.
            </h2>
            <p className="mt-4 text-sm leading-6 text-slate-300">
              A premium cold-therapy facial experience positioned inside a dermatologist-guided
              skin clinic, built for freshness, glow, comfort and a polished skin finish.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                title: 'Cooling lift',
                body: 'A refined cold-therapy experience designed for a fresh, firm skin feel.',
                icon: Snowflake,
              },
              {
                title: 'Glow protocol',
                body: 'Pairs beautifully with hydration, brightening and event-ready skin plans.',
                icon: Sparkles,
              },
              {
                title: 'Clinic-led care',
                body: `Part of ${cryoService?.title || 'advanced medical facials'} at Le Regain.`,
                icon: Gem,
              },
            ].map((panel) => {
              const Icon = panel.icon;

              return (
                <article key={panel.title} className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-2xl"
                    style={{ backgroundColor: BRAND_TEAL }}
                    aria-hidden="true"
                  >
                    <Icon size={21} />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold">{panel.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{panel.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-shell bg-white">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-gray-100 bg-[#f8fbfa] p-6 shadow-sm sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em]" style={{ color: BRAND_GREY }}>
            Trichology emphasis
          </p>
          <div className="mt-4 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <h2 className="text-3xl font-semibold text-slate-950">
              Hair and scalp care begins with medical evaluation.
            </h2>
            <p className="text-sm leading-6 text-slate-600">
              The trichology stream covers hair fall evaluation, scalp inflammation, pattern hair
              loss, density planning and medical hair growth support as part of the clinic's
              wider dermatology service model.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
