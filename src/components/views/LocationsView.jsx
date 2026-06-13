import { Building2, Clock, Mail, MapPin, Phone } from 'lucide-react';
import { BRAND_GREY, BRAND_TEAL } from '@/config/branding';
import { locations } from '@/data/clinicContent';

const locationCards = [
  {
    id: 'primaryHub',
    title: 'Vyttila Hub',
    subtitle: 'Primary integrated healthcare and aesthetics hub',
    contactPhone: '+91 81390 01122',
    contactHref: 'tel:+918139001122',
    email: 'info@regainpmr.com',
    emailHref: 'mailto:info@regainpmr.com',
    hours: 'PMR, skin, hair, aesthetics and rehabilitation appointments',
  },
  {
    id: 'edappallyPhysiotherapyCentre',
    title: 'Edappally Physiotherapy Centre',
    subtitle: 'Physiotherapy and rehabilitation access point',
    contactPhone: '+91 81390 01122',
    contactHref: 'tel:+918139001122',
    email: 'info@regainpmr.com',
    emailHref: 'mailto:info@regainpmr.com',
    hours: 'Physiotherapy, rehabilitation and follow-up sessions',
  },
];

export default function LocationsView() {
  return (
    <main id="locations" className="bg-[#fafafa] px-4 pb-16 pt-28 sm:px-6 sm:pt-36 lg:px-8">
      <section className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em]" style={{ color: BRAND_TEAL }}>
            Locations
          </p>
          <h1 className="mt-3 text-3xl font-bold text-slate-950 sm:text-5xl">
            Two Kochi branches for integrated care and rehabilitation.
          </h1>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            Visit the primary hub at Vyttila or the Le Regain Physiotherapy Centre in Edappally.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {locationCards.map((card) => {
            const location = locations[card.id];

            return (
              <article key={card.id} className="rounded-[2rem] border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-start gap-4">
                  <span
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-white"
                    style={{ backgroundColor: BRAND_TEAL }}
                    aria-hidden="true"
                  >
                    <Building2 size={26} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND_GREY }}>
                      {card.subtitle}
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-slate-950">{card.title}</h2>
                    <p className="mt-2 flex gap-2 text-sm leading-6 text-slate-600">
                      <MapPin size={17} className="mt-1 shrink-0" style={{ color: BRAND_TEAL }} aria-hidden="true" />
                      {location.address}
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid gap-3 text-sm font-medium text-slate-700">
                  <a href={card.contactHref} className="flex items-center gap-3 transition-colors duration-300 hover:text-slate-950">
                    <Phone size={17} style={{ color: BRAND_TEAL }} aria-hidden="true" />
                    {card.contactPhone}
                  </a>
                  <a href={card.emailHref} className="flex items-center gap-3 transition-colors duration-300 hover:text-slate-950">
                    <Mail size={17} style={{ color: BRAND_TEAL }} aria-hidden="true" />
                    {card.email}
                  </a>
                  <p className="flex items-center gap-3">
                    <Clock size={17} style={{ color: BRAND_TEAL }} aria-hidden="true" />
                    {card.hours}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
