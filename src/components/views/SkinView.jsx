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
    <main id="hair-skin-clinic" className="bg-white">
      <section className="overflow-hidden bg-gradient-to-br from-white via-slate-50 to-teal-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-teal-100 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: BRAND_TEAL }}>
              Hair & Skin Clinic
            </p>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
              Clinical dermatology, refined aesthetics and next-generation skin rituals.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
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
                className="inline-flex h-12 items-center justify-center rounded-full border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-700 transition-all duration-300 hover:bg-slate-50"
              >
                Kerala's first Cryo Facial
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {skinDoctors.map((doctor) => (
              <article key={doctor.id} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
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

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em]" style={{ color: BRAND_TEAL }}>
              Dermatology and aesthetic care
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">
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
                  className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm"
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

      <section id="cryo-facial" className="bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
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

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 sm:p-8">
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
