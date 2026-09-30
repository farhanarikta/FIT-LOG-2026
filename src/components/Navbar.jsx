import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-[var(--border)] bg-[var(--background)]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent)]">
            <span className="text-sm font-black text-black">F</span>
          </div>

          <span className="text-xl font-bold tracking-tight">
            FITLOG
          </span>
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-semibold uppercase tracking-wide text-[var(--accent)]"
          >
            Workout
          </Link>

          <Link
            href="/my-plan"
            className="text-sm font-semibold uppercase tracking-wide text-[var(--muted)] transition hover:text-white"
          >
            My Plan
          </Link>
        </div>

        {/* Counters */}
        <div className="flex items-center gap-2">
          <Link
            href="/my-plan"
            className="rounded-full bg-[var(--accent)] px-4 py-2 text-xs font-bold uppercase tracking-wide text-black"
          >
            Plan 0
          </Link>

          <Link
            href="/my-plan"
            className="rounded-full border border-[var(--border)] px-4 py-2 text-xs font-bold uppercase tracking-wide text-white"
          >
            Saved 0
          </Link>
        </div>
      </nav>
    </header>
  );
}