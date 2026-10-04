import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background)]">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">

        {/* Logo and Brand */}
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="FitLog logo"
            width={36}
            height={36}
            className="h-9 w-9 object-contain"
          />

          <p className="text-xl font-bold tracking-tight">
            FITLOG
          </p>
        </div>

        {/* Tagline */}
        <p className="text-sm text-[var(--muted)]">
          Train with intent. Log every set.
        </p>

        {/* Copyright */}
        <p className="text-xs text-[var(--muted)]">
          © 2026 FitLog
        </p>

      </div>
    </footer>
  );
}