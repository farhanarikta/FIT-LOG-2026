import Image from "next/image";

export default function Hero() {
  return (
    <section className="border-b border-[var(--border)]">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:py-16 md:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">

        {/* Hero Text */}
        <div className="text-center lg:text-left">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[var(--accent)]">
            Workout Library
          </p>

          <h1 className="display-font text-5xl font-bold uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            Train with intent.
            <br />
            Log every set.
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-[var(--muted)] md:text-lg lg:mx-0">
            FitLog is a dark, no-nonsense gym companion: pick a lift,
            lock it into today&apos;s plan, and watch the week&apos;s work
            add up.
          </p>

          <a
            href="#library"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-bold uppercase tracking-wide text-black transition hover:scale-105"
          >
            Browse Workouts
            <span aria-hidden="true">→</span>
          </a>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-lg overflow-hidden rounded-2xl">
            <Image
              src="/images/banner.png"
              alt="FitLog workout"
              width={900}
              height={700}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}