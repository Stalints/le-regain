'use client';

import { useMemo, useState } from 'react';
import { Activity, Image as ImageIcon, Sparkles, Stethoscope } from 'lucide-react';
import { BRAND_GREY, BRAND_TEAL } from '@/config/branding';

const tabs = [
  { id: 'facility', label: 'Facility', icon: Stethoscope },
  { id: 'therapy', label: 'Therapy', icon: Activity },
  { id: 'aesthetics', label: 'Aesthetics', icon: Sparkles },
];

const galleryItems = [
  {
    id: 'vyttila-reception',
    category: 'facility',
    title: 'Vyttila consultation lounge',
    image:
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'clinical-room',
    category: 'facility',
    title: 'Clinical assessment room',
    image:
      'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'physio-session',
    category: 'therapy',
    title: 'Guided physiotherapy session',
    image:
      'https://images.unsplash.com/photo-1571019613576-2b22c76fd955?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'rehab-training',
    category: 'therapy',
    title: 'Strength and mobility training',
    image:
      'https://images.unsplash.com/photo-1598971639058-fab3c3109a00?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'skin-procedure',
    category: 'aesthetics',
    title: 'Dermatology procedure care',
    image:
      'https://images.unsplash.com/photo-1616391182219-e080b4d1043a?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'facial-care',
    category: 'aesthetics',
    title: 'Medical facial experience',
    image:
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=85',
  },
];

export default function GalleryView() {
  const [activeTab, setActiveTab] = useState('facility');

  const filteredItems = useMemo(
    () => galleryItems.filter((item) => item.category === activeTab),
    [activeTab],
  );

  return (
    <main id="gallery" className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em]" style={{ color: BRAND_TEAL }}>
              Gallery
            </p>
            <h1 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">
              A visual look at care environments across Le Regain.
            </h1>
          </div>

          <div className="flex rounded-full border border-slate-200 bg-slate-50 p-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className="inline-flex h-11 items-center gap-2 rounded-full px-4 text-sm font-semibold transition-all duration-300"
                  style={{
                    backgroundColor: isActive ? BRAND_TEAL : 'transparent',
                    color: isActive ? '#ffffff' : BRAND_GREY,
                  }}
                >
                  <Icon size={17} aria-hidden="true" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <article key={item.id} className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span
                  className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold backdrop-blur"
                  style={{ color: BRAND_TEAL }}
                >
                  <ImageIcon size={14} aria-hidden="true" />
                  {tabs.find((tab) => tab.id === item.category)?.label}
                </span>
              </div>
              <div className="p-5">
                <h2 className="text-lg font-semibold text-slate-950">{item.title}</h2>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
