"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { usePlan } from "@/context/PlanContext";
import { useState } from "react";

export default function Navbar() {
  const { plan, saved } = usePlan();
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-[var(--border)] bg-[var(--background)]">
      <nav className="mx-auto max-w-7xl px-5 py-5 lg:px-8">

        {/* Top Row */}
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold tracking-tight"
            onClick={() => setMenuOpen(false)}
          >
            FITLOG
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">

            <Link
              href="/"
              className="text-sm font-semibold uppercase tracking-wide"
              style={{
                color:
                  pathname === "/"
                    ? "var(--accent)"
                    : "var(--muted)",
              }}
            >
              Workout
            </Link>

            <Link
              href="/my-plan"
              className="text-sm font-semibold uppercase tracking-wide"
              style={{
                color:
                  pathname === "/my-plan"
                    ? "var(--accent)"
                    : "var(--muted)",
              }}
            >
              My Plan
            </Link>

          </div>

          {/* Counters + Mobile Menu Button */}
          <div className="flex items-center gap-2">

            <Link
              href="/my-plan"
              className="rounded-full bg-[var(--accent)] px-4 py-2 text-xs font-bold uppercase tracking-wide text-black"
            >
              Plan {plan.length}
            </Link>

            <Link
              href="/my-plan"
              className="rounded-full border border-[var(--border)] px-4 py-2 text-xs font-bold uppercase tracking-wide text-white"
            >
              Saved {saved.length}
            </Link>

            {/* Mobile / Tablet Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="ml-1 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-lg text-white lg:hidden"
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? "×" : "☰"}
            </button>

          </div>
        </div>

        {/* Mobile + Tablet Dropdown */}
        {menuOpen && (
          <div className="mt-4 border-t border-[var(--border)] pt-4 lg:hidden">

            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="block rounded-lg px-4 py-3 text-sm font-semibold uppercase tracking-wide"
              style={{
                color:
                  pathname === "/"
                    ? "var(--accent)"
                    : "var(--muted)",
              }}
            >
              Workout
            </Link>

            <Link
              href="/my-plan"
              onClick={() => setMenuOpen(false)}
              className="mt-1 block rounded-lg px-4 py-3 text-sm font-semibold uppercase tracking-wide"
              style={{
                color:
                  pathname === "/my-plan"
                    ? "var(--accent)"
                    : "var(--muted)",
              }}
            >
              My Plan
            </Link>

          </div>
        )}

      </nav>
    </header>
  );
}