'use client';

import {
  Activity,
  ArrowRight,
  Bone,
  CircleDot,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
  Target,
  Zap,
} from 'lucide-react';
import { BRAND_GREY, BRAND_TEAL } from '@/config/branding';
import { locations, pmrClinicServices, rehabilitationTracks, team } from '@/data/clinicContent';

const approachItems = [
  {
    title: 'Non-surgical first assessment',
    body: 'The PMR model starts with function, pain source, mobility and recovery goals before moving toward procedures.',
    icon: Stethoscope,
  },
  {
    title: 'Interventional pain precision',
    body: 'Procedure planning can include ultrasound-guided injections, trigger point work and structured follow-up rehab.',
    icon: Target,
  },
  {
    title: 'Rehab that follows the diagnosis',
    body: 'Physiotherapy, strengthening, gait work, occupational therapy and speech therapy are coordinated around the clinical plan.',
    icon: HeartPulse,
  },
];

export default function PmrView({ onBookAppointment }) {
  const pmrDoctor = team.find((doctor) => doctor.division === 'PMR');

  return (
    <main id="pmr-clinic" className="bg-[#fafafa]">
      <section className="relative overflow-hidden bg-[#0a0f0e] px-4 pb-20 pt-36 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=1920&q=85"
            alt=""
            className="h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f0e] via-[#0a0f0e]/85 to-[#0a0f0e]/35" />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em]">
              PMR Clinic
            </p>
            <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-6xl">
              Le Regain PMR Clinic
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-200">
              A multidisciplinary center dedicated to Physical Medicine and Rehabilitation. We specialize in non-surgical interventional pain management, sports medicine, and comprehensive physical therapy — led by Dr. K M Mathew, Dr. Sidharth Unnithan, Dr. Tisha Ann Babu, and Dr. Babu Joseph.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={onBookAppointment}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                style={{ backgroundColor: BRAND_TEAL }}
              >
                Book PMR Appointment
                <ArrowRight size={18} aria-hidden="true" />
              </button>
              <a
                href="#pmr-rehab-tracks"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/15"
              >
                View 16 rehab tracks
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
            <div className="flex items-start gap-4">
              <span
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl"
                style={{ backgroundColor: BRAND_TEAL }}
                aria-hidden="true"
              >
                <Activity size={28} />
              </span>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
                  Clinical lead
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  {pmrDoctor?.name ?? 'PMR Specialist'}
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-200">
                  {pmrDoctor?.role ?? 'Consultant Physiatrist & Rehabilitation Medicine'}
                </p>
              </div>
            </div>
            {pmrDoctor?.focusAreas?.length > 0 && (
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {pmrDoctor.focusAreas.map((area) => (
                  <div key={area} className="rounded-2xl bg-white/10 p-3 text-sm font-medium text-slate-100">
                    {area}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="section-shell bg-[#fafafa]">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em]" style={{ color: BRAND_TEAL }}>
              Non-surgical interventional approach
            </p>
            <h2 className="mt-3 text-3xl font-bold text-gray-950 sm:text-5xl">
              Treatment decisions are built around pain source, movement and measurable recovery.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {approachItems.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.title} className="rounded-[2rem] border border-gray-100 bg-white p-6 shadow-sm">
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-2xl"
                    style={{ backgroundColor: 'rgba(104, 166, 158, 0.12)', color: BRAND_TEAL }}
                    aria-hidden="true"
                  >
                    <Icon size={23} />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-shell bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em]" style={{ color: BRAND_TEAL }}>
              Rehabilitation & Pain Management Solutions
            </p>
            <h2 className="mt-3 text-3xl font-bold text-gray-950 sm:text-5xl">
              Non-surgical interventional care to restore strength, mobility, and independence.
            </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-slate-600">
              Available through {locations.primaryHub.address}, with physiotherapy support at{' '}
              {locations.edappallyPhysiotherapyCentre.label}.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {pmrClinicServices.map((service, index) => {
              const icons = [Zap, Bone, Activity, ShieldCheck, HeartPulse];
              const Icon = icons[index % icons.length];

              return (
                <article key={service.id} className="rounded-[2rem] border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
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

      <section id="pmr-rehab-tracks" className="section-shell bg-[#fafafa]">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em]" style={{ color: BRAND_TEAL }}>
              16 physical therapy sub-tracks
            </p>
            <h2 className="mt-3 text-3xl font-bold text-gray-950 sm:text-5xl">
              Specialized rehabilitation tracks for distinct functional needs.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {rehabilitationTracks.map((track, index) => (
              <article
                key={track.id}
                className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <span
                  className="inline-flex h-9 min-w-9 items-center justify-center rounded-full px-3 text-sm font-semibold text-white"
                  style={{ backgroundColor: index % 2 === 0 ? BRAND_TEAL : BRAND_GREY }}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-slate-950">{track.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{track.focus}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
