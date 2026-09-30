import Link from "next/link";

export default function Hero() {
  return (
    <section className="border-b border-[var(--border)]">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
        
        {/* Text */}
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[var(--accent)]">
            Workout Library
          </p>

          <h1 className="display-font max-w-3xl text-5xl font-bold uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            Train with intent. Log every set.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-[var(--muted)] md:text-lg">
            FitLog is a dark, no-nonsense gym companion: pick a lift,
            lock it into today&apos;s plan, and watch the week&apos;s work
            add up.
          </p>

          <Link
            href="#library"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-bold uppercase tracking-wide text-black transition hover:scale-105"
          >
            Browse Workouts
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="flex aspect-square w-full max-w-md items-center justify-center rounded-2xl bg-[var(--surface)]">
            <p className="text-sm uppercase tracking-widest text-[var(--muted)]">
              Hero Image
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}