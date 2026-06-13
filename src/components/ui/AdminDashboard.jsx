'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  Activity,
  CheckCircle2,
  FileText,
  Image as ImageIcon,
  LogOut,
  Plus,
  Sparkles,
  Trash2,
  UserRound,
} from 'lucide-react';
import { BRAND_GREY, BRAND_TEAL } from '@/config/branding';
import { hairAndSkinClinicServices, pmrClinicServices, team } from '@/data/clinicContent';

const ADMIN_API_KEY = process.env.NEXT_PUBLIC_ADMIN_API_KEY || '';

function authHeaders() {
  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${ADMIN_API_KEY}`,
  };
}

const initialGalleryQueue = [
  {
    id: 'gallery-vyttila-room',
    title: 'Vyttila consultation room',
    category: 'Facility',
    status: 'Pending',
  },
  {
    id: 'gallery-therapy-session',
    title: 'Therapy session review',
    category: 'Therapy',
    status: 'Pending',
  },
  {
    id: 'gallery-facial-suite',
    title: 'Medical facial suite',
    category: 'Aesthetics',
    status: 'Approved',
  },
];

export default function AdminDashboard({ adminUser, onLogout }) {
  const [posts, setPosts] = useState([]);
  const [isLoadingBlogs, setIsLoadingBlogs] = useState(true);
  const [blogError, setBlogError] = useState('');
  const [teamRecords, setTeamRecords] = useState(
    team.map((doctor) => ({
      ...doctor,
      isActive: true,
    })),
  );
  const [galleryQueue, setGalleryQueue] = useState(initialGalleryQueue);
  const [newPost, setNewPost] = useState({
    title: '',
    category: 'PMR',
    excerpt: '',
    content: '',
  });

  const serviceCount = pmrClinicServices.length + hairAndSkinClinicServices.length;

  useEffect(() => {
    loadBlogs();
  }, []);

  const loadBlogs = async () => {
    try {
      setIsLoadingBlogs(true);
      setBlogError('');

      const response = await fetch('/api/admin/blogs', {
        cache: 'no-store',
      });
      const payload = await response.json();

      if (!response.ok || !payload.success) {
        throw new Error(payload.error || 'Unable to fetch blog posts.');
      }

      setPosts(payload.blogPosts || []);
    } catch (error) {
      setBlogError(error.message || 'Unable to fetch blog posts.');
    } finally {
      setIsLoadingBlogs(false);
    }
  };

  const dashboardStats = useMemo(
    () => [
      {
        label: 'Service groups',
        value: serviceCount,
        icon: Activity,
      },
      {
        label: 'Active team records',
        value: teamRecords.filter((record) => record.isActive).length,
        icon: UserRound,
      },
      {
        label: 'Blog posts',
        value: posts.length,
        icon: FileText,
      },
      {
        label: 'Gallery queue',
        value: galleryQueue.filter((item) => item.status === 'Pending').length,
        icon: ImageIcon,
      },
    ],
    [galleryQueue, posts, serviceCount, teamRecords],
  );

  const handleAddPost = async (event) => {
    event.preventDefault();

    if (!newPost.title.trim() || !newPost.excerpt.trim() || !newPost.content.trim()) {
      setBlogError('Title, excerpt and full content are required.');
      return;
    }

    try {
      setBlogError('');

      const response = await fetch('/api/admin/blogs', {
        method: 'POST',
        headers: authHeaders(),
        body: JSON.stringify(newPost),
      });

      const payload = await response.json();

      if (!response.ok || !payload.success) {
        throw new Error(payload.error || 'Unable to publish blog post.');
      }

      setPosts((current) => [payload.blogPost, ...current]);

      setNewPost({
        title: '',
        category: 'PMR',
        excerpt: '',
        content: '',
      });
    } catch (error) {
      setBlogError(error.message || 'Unable to publish blog post.');
    }
  };

  const deletePost = async (postId) => {
    // Optimistic update — remove immediately, restore on error
    const previous = posts;
    setPosts((current) => current.filter((post) => post.id !== postId));

    try {
      const response = await fetch(`/api/admin/blogs?id=${postId}`, {
        method: 'DELETE',
        headers: authHeaders(),
      });

      const payload = await response.json();

      if (!response.ok || !payload.success) {
        throw new Error(payload.error || 'Unable to delete blog post.');
      }
    } catch (error) {
      // Restore previous state on failure
      setPosts(previous);
      setBlogError(error.message || 'Unable to delete blog post.');
    }
  };

  const toggleTeamRecord = (doctorId) => {
    setTeamRecords((current) =>
      current.map((doctor) =>
        doctor.id === doctorId
          ? {
              ...doctor,
              isActive: !doctor.isActive,
            }
          : doctor,
      ),
    );
  };

  const updateGalleryStatus = (itemId, status) => {
    setGalleryQueue((current) =>
      current.map((item) =>
        item.id === itemId
          ? {
              ...item,
              status,
            }
          : item,
      ),
    );
  };

  return (
    <main id="admin" className="bg-gradient-to-b from-slate-50 to-white px-4 py-12 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em]" style={{ color: BRAND_TEAL }}>
              Operations Dashboard
            </p>
            <h1 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">
              Welcome, {adminUser?.name || adminUser?.email || 'Le Regain Admin'}.
            </h1>
            <p className="mt-2 text-sm" style={{ color: BRAND_GREY }}>
              Manage blog articles, doctors and gallery intake.
            </p>
          </div>
          <button
            type="button"
            onClick={onLogout}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 transition-all duration-300 hover:bg-slate-50"
          >
            <LogOut size={17} aria-hidden="true" />
            Sign out
          </button>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {dashboardStats.map((stat) => {
            const Icon = stat.icon;

            return (
              <article key={stat.label} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-2xl"
                  style={{ backgroundColor: 'rgba(104, 166, 158, 0.12)', color: BRAND_TEAL }}
                  aria-hidden="true"
                >
                  <Icon size={21} />
                </span>
                <p className="mt-5 text-3xl font-semibold text-slate-950">{stat.value}</p>
                <p className="mt-1 text-sm font-medium text-slate-500">{stat.label}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-8 grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <FileText size={22} style={{ color: BRAND_TEAL }} aria-hidden="true" />
              <h2 className="text-xl font-semibold text-slate-950">Blog management</h2>
            </div>

            <form onSubmit={handleAddPost} className="mt-5 grid gap-3">
              <input
                type="text"
                value={newPost.title}
                onChange={(event) =>
                  setNewPost((current) => ({
                    ...current,
                    title: event.target.value,
                  }))
                }
                placeholder="Article title"
                className="h-11 rounded-2xl border border-slate-200 px-4 text-sm font-medium text-slate-700 outline-none transition-all duration-300 focus:border-transparent focus:ring-2"
                style={{ '--tw-ring-color': BRAND_TEAL }}
              />
              <select
                value={newPost.category}
                onChange={(event) =>
                  setNewPost((current) => ({
                    ...current,
                    category: event.target.value,
                  }))
                }
                className="h-11 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 outline-none transition-all duration-300 focus:border-transparent focus:ring-2"
                style={{ '--tw-ring-color': BRAND_TEAL }}
              >
                <option value="PMR">PMR</option>
                <option value="Skin">Skin</option>
                <option value="Aesthetics">Aesthetics</option>
                <option value="Rehabilitation">Rehabilitation</option>
                <option value="Trichology">Trichology</option>
              </select>
              <textarea
                value={newPost.excerpt}
                onChange={(event) =>
                  setNewPost((current) => ({
                    ...current,
                    excerpt: event.target.value,
                  }))
                }
                placeholder="Short excerpt"
                rows={3}
                className="resize-none rounded-2xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 outline-none transition-all duration-300 focus:border-transparent focus:ring-2"
                style={{ '--tw-ring-color': BRAND_TEAL }}
              />
              <textarea
                value={newPost.content}
                onChange={(event) =>
                  setNewPost((current) => ({
                    ...current,
                    content: event.target.value,
                  }))
                }
                placeholder="Full article content"
                rows={7}
                className="resize-none rounded-2xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 outline-none transition-all duration-300 focus:border-transparent focus:ring-2"
                style={{ '--tw-ring-color': BRAND_TEAL }}
              />
              {blogError && (
                <p className="rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                  {blogError}
                </p>
              )}
              <button
                type="submit"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full px-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
                style={{ backgroundColor: BRAND_TEAL }}
              >
                <Plus size={17} aria-hidden="true" />
                Publish
              </button>
            </form>

            <div className="mt-5 grid gap-3">
              {isLoadingBlogs ? (
                <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-8 text-center text-sm font-semibold text-slate-500">
                  Loading blog posts…
                </div>
              ) : posts.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-8 text-center text-sm font-semibold text-slate-500">
                  No blog posts published yet.
                </div>
              ) : posts.map((post) => (
                <article key={post.id} className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="font-semibold text-slate-950">{post.title}</h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-600 ring-1 ring-slate-200">
                        {post.category || post.tag}
                      </span>
                      <span
                        className="rounded-full px-3 py-1 text-xs font-semibold"
                        style={{
                          backgroundColor: 'rgba(104, 166, 158, 0.14)',
                          color: BRAND_TEAL,
                        }}
                      >
                        Published
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => deletePost(post.id)}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-red-100 bg-white text-red-600 transition-all duration-300 hover:bg-red-50"
                      aria-label={`Delete ${post.title}`}
                    >
                      <Trash2 size={16} aria-hidden="true" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <UserRound size={22} style={{ color: BRAND_TEAL }} aria-hidden="true" />
              <h2 className="text-xl font-semibold text-slate-950">Team records</h2>
            </div>

            <div className="mt-5 grid gap-3">
              {teamRecords.map((doctor) => (
                <article key={doctor.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-semibold text-slate-950">{doctor.name}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{doctor.role}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => toggleTeamRecord(doctor.id)}
                      className="shrink-0 rounded-full px-3 py-1 text-xs font-semibold"
                      style={{
                        backgroundColor: doctor.isActive ? 'rgba(104, 166, 158, 0.14)' : '#e2e8f0',
                        color: doctor.isActive ? BRAND_TEAL : BRAND_GREY,
                      }}
                    >
                      {doctor.isActive ? 'Active' : 'Hidden'}
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>

        <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <ImageIcon size={22} style={{ color: BRAND_TEAL }} aria-hidden="true" />
            <h2 className="text-xl font-semibold text-slate-950">Incoming gallery images</h2>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {galleryQueue.map((item) => (
              <article key={item.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <span
                  className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
                  style={{ backgroundColor: 'rgba(104, 166, 158, 0.12)', color: BRAND_TEAL }}
                >
                  <Sparkles size={14} aria-hidden="true" />
                  {item.category}
                </span>
                <h3 className="mt-4 font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-1 text-sm text-slate-500">Status: {item.status}</p>
                <div className="mt-4 flex gap-2">
                  <button
                    type="button"
                    onClick={() => updateGalleryStatus(item.id, 'Approved')}
                    className="h-10 rounded-full px-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
                    style={{ backgroundColor: BRAND_TEAL }}
                  >
                    Approve
                  </button>
                  <button
                    type="button"
                    onClick={() => updateGalleryStatus(item.id, 'Rejected')}
                    className="h-10 rounded-full border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 transition-all duration-300 hover:bg-slate-50"
                  >
                    Reject
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
