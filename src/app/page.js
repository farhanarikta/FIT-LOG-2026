import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="flex min-h-[80vh] items-center justify-center">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold tracking-[0.25em] text-[var(--accent)]">
            WORKOUT LIBRARY
          </p>

          <h1 className="display-font text-5xl font-bold uppercase md:text-7xl">
            Train with intent.
          </h1>

          <p className="mt-4 text-lg text-[var(--muted)]">
            Log every set.
          </p>
        </div>
      </section>
    </main>
  );
}