'use client';

import { useEffect, useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, BookOpen, CalendarDays, Sparkles } from 'lucide-react';
import { BRAND_GREY, BRAND_TEAL } from '@/config/branding';
import { hairAndSkinClinicServices, pmrClinicServices, rehabilitationTracks } from '@/data/clinicContent';

const fallbackArticles = [
  {
    id: 'non-surgical-pain-care',
    title: 'How PMR approaches pain without starting with surgery',
    category: 'PMR',
    excerpt:
      'A look at diagnosis-led pain management, ultrasound-guided procedures and rehab planning.',
    content:
      'Physical Medicine and Rehabilitation begins with a functional diagnosis. At Le Regain, pain is reviewed in the context of movement, strength, daily activity, posture, sport demands and recovery goals. This allows the team to plan non-surgical care first, including physiotherapy, interventional pain procedures, ergonomic correction, regenerative options when appropriate and progressive rehabilitation.',
    date: 'Clinical Guide',
    tags: ['PMR', 'Pain Management', pmrClinicServices[0]?.title],
  },
  {
    id: 'cryo-facial-kochi',
    title: "What makes Kerala's first signature Cryo Facial different",
    category: 'Skin',
    excerpt:
      'Cold-therapy facial care, glow preparation and how medical facial protocols sit inside dermatology.',
    content:
      "Le Regain's signature Cryo Facial is positioned as a premium clinical skin experience, not a generic salon facial. The treatment focuses on cooling comfort, freshness, visible glow and a polished finish while remaining part of a dermatologist-guided skin program. It can sit alongside hydration, brightening, acne care and event-ready skin preparation depending on skin needs.",
    date: 'Aesthetics',
    tags: ['Skin', 'Cryo Facial', hairAndSkinClinicServices[1]?.title],
  },
  {
    id: 'rehab-tracks',
    title: 'Choosing the right rehabilitation track after injury or illness',
    category: 'Rehabilitation',
    excerpt:
      'From neurorehabilitation to sports rehab, the right track depends on function, goals and clinical findings.',
    content:
      'Rehabilitation works best when the care track matches the clinical problem. Neurorehabilitation, sports injury rehabilitation, post-operative recovery, spine care, pediatric rehab, hand rehab and balance training all require different assessment markers and progression plans. Le Regain structures rehabilitation around measurable function so patients can move from pain control toward strength, confidence and independence.',
    date: 'Rehabilitation',
    tags: ['PMR', `${rehabilitationTracks.length} Tracks`, 'Physiotherapy'],
  },
  {
    id: 'hair-fall-evaluation',
    title: 'Why hair fall needs scalp and medical evaluation',
    category: 'Trichology',
    excerpt:
      'Trichology connects scalp health, pattern hair loss, nutrition and clinical treatment planning.',
    content:
      'Hair fall is not a single diagnosis. Scalp inflammation, dandruff, pattern hair loss, nutritional issues, stress, illness and hormonal factors can all contribute. A trichology-led evaluation helps identify the pattern, treat scalp health, decide on medical hair growth support and build a longer-term care plan instead of relying on trial-and-error products.',
    date: 'Hair Care',
    tags: ['Trichology', 'Skin'],
  },
];

function normalizeApiPost(post) {
  return {
    id: post.id,
    title: post.title,
    category: post.category,
    excerpt: post.excerpt,
    content: post.content,
    date: post.date,
    tags: [post.category].filter(Boolean),
  };
}

function formatDate(value) {
  if (!value || Number.isNaN(new Date(value).getTime())) {
    return value || 'Recent';
  }

  return new Intl.DateTimeFormat('en-IN', {
    dateStyle: 'medium',
  }).format(new Date(value));
}

export default function BlogView() {
  const [apiArticles, setApiArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadBlogs() {
      try {
        setIsLoading(true);
        setError('');

        const response = await fetch('/api/admin/blogs', {
          cache: 'no-store',
        });
        const payload = await response.json();

        if (!response.ok || !payload.success) {
          throw new Error(payload.error || 'Unable to load blog articles.');
        }

        setApiArticles((payload.blogPosts || []).map(normalizeApiPost));
      } catch (loadError) {
        setError(loadError.message || 'Unable to load blog articles.');
      } finally {
        setIsLoading(false);
      }
    }

    loadBlogs();
  }, []);

  const articles = useMemo(
    () => [...apiArticles, ...fallbackArticles],
    [apiArticles],
  );

  if (selectedArticle) {
    const hasSkinTag = selectedArticle.tags?.some((tag) =>
      tag?.toLowerCase().includes('skin') || tag?.toLowerCase().includes('cryo'),
    );

    return (
      <main id="blog" className="bg-gradient-to-b from-slate-50 to-white px-4 py-16 sm:px-6 lg:px-8">
        <article className="mx-auto max-w-4xl">
          <button
            type="button"
            onClick={() => setSelectedArticle(null)}
            className="inline-flex h-11 items-center gap-2 rounded-full border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 transition-all duration-300 hover:bg-slate-50"
          >
            <ArrowLeft size={17} aria-hidden="true" />
            Back to articles
          </button>

          <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em]"
              style={{
                backgroundColor: hasSkinTag ? 'rgba(104, 166, 158, 0.12)' : '#f1f5f9',
                color: hasSkinTag ? BRAND_TEAL : BRAND_GREY,
              }}
            >
              <CalendarDays size={14} aria-hidden="true" />
              {formatDate(selectedArticle.date)}
            </span>
            <h1 className="mt-6 text-3xl font-semibold leading-tight text-slate-950 sm:text-5xl">
              {selectedArticle.title}
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">{selectedArticle.excerpt}</p>
            <div className="mt-8 border-t border-slate-100 pt-8">
              {selectedArticle.content.split('\n').filter(Boolean).map((paragraph) => (
                <p key={paragraph} className="mb-5 text-base leading-8 text-slate-700">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </article>
      </main>
    );
  }

  return (
    <main id="blog" className="bg-gradient-to-b from-slate-50 to-white px-4 py-16 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em]" style={{ color: BRAND_TEAL }}>
              Blog
            </p>
            <h1 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">
              Clear clinical articles across PMR, rehabilitation, skin and aesthetics.
            </h1>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold" style={{ color: BRAND_GREY }}>
            <BookOpen size={17} aria-hidden="true" />
            {articles.length} articles
          </div>
        </div>

        {error && (
          <p className="mt-6 rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
            {error}
          </p>
        )}

        {isLoading && (
          <div className="mt-10 rounded-3xl border border-dashed border-slate-200 bg-white p-8 text-center text-sm font-semibold text-slate-500">
            Loading articles...
          </div>
        )}

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {articles.map((article) => {
            const hasSkinTag = article.tags?.some((tag) => tag?.toLowerCase().includes('skin') || tag?.toLowerCase().includes('cryo'));
            const Icon = hasSkinTag ? Sparkles : BookOpen;

            return (
              <article key={article.id} className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-start justify-between gap-5">
                  <span
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl"
                    style={{ backgroundColor: 'rgba(104, 166, 158, 0.12)', color: BRAND_TEAL }}
                    aria-hidden="true"
                  >
                    <Icon size={22} />
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-600 ring-1 ring-slate-200">
                    <CalendarDays size={14} aria-hidden="true" />
                    {formatDate(article.date)}
                  </span>
                </div>
                <h2 className="mt-6 text-2xl font-semibold leading-tight text-slate-950">
                  {article.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{article.excerpt}</p>

                {article.tags?.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {article.tags.filter(Boolean).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full px-3 py-1 text-xs font-semibold"
                        style={{
                          backgroundColor: hasSkinTag ? 'rgba(104, 166, 158, 0.12)' : '#f1f5f9',
                          color: hasSkinTag ? BRAND_TEAL : BRAND_GREY,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => setSelectedArticle(article)}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-300"
                  style={{ color: BRAND_TEAL }}
                >
                  Read article
                  <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </button>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
