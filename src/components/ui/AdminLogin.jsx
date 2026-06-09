'use client';

import { useState } from 'react';
import { LockKeyhole, LogIn, Mail, ShieldCheck } from 'lucide-react';
import { BRAND_GREY, BRAND_TEAL } from '@/config/branding';
import { clinicIdentity } from '@/data/clinicContent';

const ADMIN_CREDENTIALS = {
  email: 'admin@leregain.com',
  password: 'regain-admin',
};

export default function AdminLogin({ onLogin }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const updateField = (field, value) => {
    setCredentials((current) => ({
      ...current,
      [field]: value,
    }));
    setError('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isValid =
      credentials.email.trim().toLowerCase() === ADMIN_CREDENTIALS.email &&
      credentials.password === ADMIN_CREDENTIALS.password;

    if (!isValid) {
      setError('Use admin@leregain.com and regain-admin to enter the demo dashboard.');
      return;
    }

    onLogin?.({
      name: 'Le Regain Admin',
      email: ADMIN_CREDENTIALS.email,
      role: 'Operations Manager',
    });
  };

  return (
    <main id="admin" className="min-h-[calc(100vh-5rem)] bg-gradient-to-br from-slate-50 via-white to-teal-50 px-4 py-16 sm:px-6 lg:px-8">
      <section className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="inline-flex rounded-full border border-teal-100 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: BRAND_TEAL }}>
            Admin Portal
          </p>
          <h1 className="mt-6 text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
            Manage {clinicIdentity.name} content and operational queues.
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-6 text-slate-600">
            Sign in to update team records, publish education articles and review gallery intake
            before public content goes live.
          </p>
          <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-start gap-3">
              <span
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl"
                style={{ backgroundColor: 'rgba(104, 166, 158, 0.12)', color: BRAND_TEAL }}
                aria-hidden="true"
              >
                <ShieldCheck size={22} />
              </span>
              <div>
                <p className="font-semibold text-slate-950">Demo credentials</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Email: admin@leregain.com<br />
                  Password: regain-admin
                </p>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8">
          <div className="flex items-center gap-3">
            <span
              className="flex h-12 w-12 items-center justify-center rounded-2xl text-white"
              style={{ backgroundColor: BRAND_TEAL }}
              aria-hidden="true"
            >
              <LockKeyhole size={24} />
            </span>
            <div>
              <h2 className="text-2xl font-semibold text-slate-950">Secure sign in</h2>
              <p className="text-sm" style={{ color: BRAND_GREY }}>
                Controlled access for clinic operations.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-5">
            <label className="grid gap-2 text-sm font-semibold text-slate-950">
              Email address
              <span className="relative">
                <Mail
                  size={18}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  aria-hidden="true"
                />
                <input
                  required
                  type="email"
                  value={credentials.email}
                  onChange={(event) => updateField('email', event.target.value)}
                  className="h-12 w-full rounded-2xl border border-slate-200 pl-12 pr-4 text-sm font-medium text-slate-700 outline-none transition-all duration-300 focus:border-transparent focus:ring-2"
                  style={{ '--tw-ring-color': BRAND_TEAL }}
                  autoComplete="email"
                />
              </span>
            </label>

            <label className="grid gap-2 text-sm font-semibold text-slate-950">
              Password
              <span className="relative">
                <LockKeyhole
                  size={18}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  aria-hidden="true"
                />
                <input
                  required
                  type="password"
                  value={credentials.password}
                  onChange={(event) => updateField('password', event.target.value)}
                  className="h-12 w-full rounded-2xl border border-slate-200 pl-12 pr-4 text-sm font-medium text-slate-700 outline-none transition-all duration-300 focus:border-transparent focus:ring-2"
                  style={{ '--tw-ring-color': BRAND_TEAL }}
                  autoComplete="current-password"
                />
              </span>
            </label>
          </div>

          {error && (
            <p className="mt-5 rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="mt-7 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            style={{ backgroundColor: BRAND_TEAL }}
          >
            <LogIn size={18} aria-hidden="true" />
            Enter Dashboard
          </button>
        </form>
      </section>
    </main>
  );
}
