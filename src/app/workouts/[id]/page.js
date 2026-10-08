"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { usePlan } from "@/context/PlanContext";
import Footer from "@/components/Footer";

export default function WorkoutDetails() {
  const { addToPlan, saveWorkout } = usePlan();

  const { id } = useParams();

  const [workout, setWorkout] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setWorkout(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to load workout:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <main className="min-h-screen px-5 py-20 text-center">
        <p className="text-[var(--muted)]">Loading workout...</p>
      </main>
    );
  }

  if (!workout) {
    return (
      <main className="min-h-screen px-5 py-20 text-center">
        <p className="text-[var(--muted)]">Workout not found.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:py-16 lg:px-8 lg:py-20">

        {/* Main Two Column Layout */}
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">

          {/* LEFT: IMAGE */}
          <div className="relative w-full overflow-hidden rounded-2xl aspect-[4/5]">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* RIGHT: CONTENT */}
          <div className="self-start">

            {/* Difficulty */}
            <span className="inline-block rounded-full bg-[var(--accent)] px-3 py-1 text-xs font-bold uppercase tracking-wide text-black">
              {workout.difficulty}
            </span>

            {/* Title */}
            <h1 className="display-font mt-5 text-4xl font-bold uppercase leading-none sm:text-5xl lg:text-6xl">
              {workout.name}
            </h1>

            {/* Description */}
            <p className="mt-5 text-base leading-7 text-[var(--muted)]">
              {workout.description}
            </p>

            {/* Muscle Groups */}
            <div className="mt-6 flex flex-wrap gap-2">
              {workout.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="rounded-full border border-[var(--border)] px-3 py-1 text-sm text-[var(--muted)]"
                >
                  {muscle}
                </span>
              ))}
            </div>

            {/* Workout Stats */}
            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
              <div>
                <p className="text-sm text-[var(--muted)]">
                  Duration
                </p>
                <p className="mt-1 font-bold">
                  {workout.duration} min
                </p>
              </div>

              <div>
                <p className="text-sm text-[var(--muted)]">
                  Calories
                </p>
                <p className="mt-1 font-bold">
                  {workout.caloriesBurned}
                </p>
              </div>

              <div>
                <p className="text-sm text-[var(--muted)]">
                  Sets
                </p>
                <p className="mt-1 font-bold">
                  {workout.sets}
                </p>
              </div>

              <div>
                <p className="text-sm text-[var(--muted)]">
                  Reps
                </p>
                <p className="mt-1 font-bold">
                  {workout.reps}
                </p>
              </div>
            </div>

            {/* Equipment */}
            <div className="mt-7">
              <p className="text-sm text-[var(--muted)]">
                Equipment
              </p>

              <p className="mt-1 font-semibold">
                {workout.equipment}
              </p>
            </div>

            {/* Instructions */}
            <section className="mt-9 border-t border-[var(--border)] pt-8">
              <h2 className="display-font text-3xl font-bold uppercase sm:text-4xl">
                Instructions
              </h2>

              <ol className="mt-6 space-y-5">
                {workout.instructions.map((instruction, index) => (
                  <li
                    key={instruction}
                    className="flex gap-4 text-[var(--muted)]"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-sm font-bold text-black">
                      {index + 1}
                    </span>

                    <span className="leading-7">
                      {instruction}
                    </span>
                  </li>
                ))}
              </ol>
            </section>

            {/* Buttons AFTER Instructions */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => addToPlan(workout)}
                className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-bold uppercase tracking-wide text-black"
              >
                Add to Today&apos;s Plan
              </button>

              <button
                onClick={() => saveWorkout(workout)}
                className="rounded-full border border-[var(--border)] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white"
              >
                Save for Later
              </button>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}