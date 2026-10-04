import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-5">
      <div className="text-center">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-[var(--accent)]">
          404
        </p>

        <h1 className="display-font mt-4 text-5xl font-bold uppercase sm:text-6xl">
          Workout not found.
        </h1>

        <p className="mt-4 text-[var(--muted)]">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-bold uppercase tracking-wide text-black"
        >
          Back to Workouts
        </Link>
      </div>
    </main>
  );
}