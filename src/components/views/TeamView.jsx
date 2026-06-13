import { Activity, Mail, Sparkles, Stethoscope } from 'lucide-react';
import { BRAND_GREY, BRAND_TEAL } from '@/config/branding';
import { team } from '@/data/clinicContent';

export default function TeamView() {
  return (
    <main id="team" className="bg-[#fafafa] px-4 pb-16 pt-28 sm:px-6 sm:pt-36 lg:px-8">
      <section className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em]" style={{ color: BRAND_TEAL }}>
            Doctors
          </p>
          <h1 className="mt-3 text-3xl font-bold text-slate-950 sm:text-5xl">
            Meet the clinical panel at Le Regain.
          </h1>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            A multi-disciplinary team across SKIN and PMR streams supporting assessment,
            treatment planning, aesthetics, pain care and rehabilitation.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((doctor) => {
            const Icon = doctor.division === 'SKIN' ? Sparkles : Activity;

            return (
              <article
                key={doctor.id}
                className="rounded-[2rem] border border-gray-100 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl"
                  style={{ backgroundColor: 'rgba(104, 166, 158, 0.12)', color: BRAND_TEAL }}
                  aria-hidden="true"
                >
                  <Icon size={28} />
                </div>
                <span
                  className="mt-5 inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.14em]"
                  style={{
                    backgroundColor: doctor.division === 'SKIN' ? 'rgba(104, 166, 158, 0.12)' : '#f1f5f9',
                    color: doctor.division === 'SKIN' ? BRAND_TEAL : BRAND_GREY,
                  }}
                >
                  {doctor.division}
                </span>
                <h2 className="mt-4 text-xl font-semibold text-slate-950">{doctor.name}</h2>
                <p className="mt-2 text-sm font-medium leading-6 text-slate-600">{doctor.role}</p>

                <div className="mt-5 grid gap-2 text-left">
                  {doctor.focusAreas.slice(0, 4).map((area) => (
                    <p key={area} className="flex gap-2 text-sm text-slate-600">
                      <Stethoscope size={15} className="mt-1 shrink-0" style={{ color: BRAND_TEAL }} aria-hidden="true" />
                      {area}
                    </p>
                  ))}
                </div>

                <a
                  href="mailto:info@regainpmr.com"
                  className="mt-6 inline-flex h-10 items-center justify-center gap-2 rounded-full border border-slate-200 px-4 text-sm font-semibold text-slate-700 transition-all duration-300 hover:bg-slate-50"
                >
                  <Mail size={16} aria-hidden="true" />
                  Contact
                </a>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
