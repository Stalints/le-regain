import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-white px-4 text-center">
      <section>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
          Page not found
        </p>
        <h1 className="mt-3 text-4xl font-semibold text-slate-950">
          This Le Regain page is not available.
        </h1>
        <p className="mt-4 text-sm text-slate-600">
          Return to the main clinic experience.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-[#68a69e] px-6 text-sm font-semibold text-white"
        >
          Go home
        </Link>
      </section>
    </main>
  );
}
