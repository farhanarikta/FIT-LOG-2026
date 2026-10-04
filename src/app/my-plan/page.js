"use client";

import { useState } from "react";
import { usePlan } from "@/context/PlanContext";

export default function MyPlan() {
  const {
    plan,
    saved,
    removeFromPlan,
    removeFromSaved,
    toggleDone,
  } = usePlan();

  const [activeTab, setActiveTab] = useState("plan");

  const currentList = activeTab === "plan" ? plan : saved;

  const totalMinutes = plan.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const totalCalories = plan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">

        {/* Header */}
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[var(--accent)]">
            My Plan
          </p>

          <h1 className="display-font text-5xl font-bold uppercase">
            Your training.
          </h1>

          <p className="mt-4 max-w-2xl text-[var(--muted)]">
            Keep track of today&apos;s workouts and save exercises
            you want to try later.
          </p>
        </div>

        {/* Metrics */}
        <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-6">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
            <p className="text-sm text-[var(--muted)]">Exercises</p>
            <p className="mt-2 text-3xl font-bold">{plan.length}</p>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
            <p className="text-sm text-[var(--muted)]">Minutes</p>
            <p className="mt-2 text-3xl font-bold">{totalMinutes}</p>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
            <p className="text-sm text-[var(--muted)]">Calories</p>
            <p className="mt-2 text-3xl font-bold">{totalCalories}</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-12 flex gap-6 border-b border-[var(--border)]">
          <button
            onClick={() => setActiveTab("plan")}
            className={`pb-4 text-sm font-bold uppercase tracking-wide ${
              activeTab === "plan"
                ? "border-b-2 border-[var(--accent)] text-[var(--accent)]"
                : "text-[var(--muted)]"
            }`}
          >
            Today&apos;s Plan
          </button>

          <button
            onClick={() => setActiveTab("saved")}
            className={`pb-4 text-sm font-bold uppercase tracking-wide ${
              activeTab === "saved"
                ? "border-b-2 border-[var(--accent)] text-[var(--accent)]"
                : "text-[var(--muted)]"
            }`}
          >
            Saved
          </button>
        </div>

        {/* Empty State */}
        {currentList.length === 0 && (
          <div className="mt-10 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-10 text-center">
            <h2 className="display-font text-3xl font-bold uppercase">
              Nothing here yet.
            </h2>

            <p className="mt-3 text-[var(--muted)]">
              Add workouts from the library to see them here.
            </p>
          </div>
        )}

        {/* Workout Cards */}
        {currentList.length > 0 && (
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {currentList.map((workout) => (
              <div
                key={workout.id}
                className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5"
              >
                <span className="rounded-full bg-[var(--accent)] px-3 py-1 text-xs font-bold uppercase text-black">
                  {workout.difficulty}
                </span>

                <h2 className="display-font mt-4 text-2xl font-bold uppercase">
                  {workout.name}
                </h2>

                <p className="mt-2 text-sm text-[var(--muted)]">
                  {workout.equipment}
                </p>

                <div className="mt-5 grid grid-cols-2 gap-4 border-t border-[var(--border)] pt-4">
                  <div>
                    <p className="text-sm text-[var(--muted)]">
                      Duration
                    </p>
                    <p className="mt-1 font-semibold">
                      {workout.duration} min
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-[var(--muted)]">
                      Calories
                    </p>
                    <p className="mt-1 font-semibold">
                      {workout.caloriesBurned}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  {activeTab === "plan" && (
                    <button
                      onClick={() => toggleDone(workout.id)}
                      className="rounded-full bg-[var(--accent)] px-4 py-2 text-xs font-bold uppercase text-black"
                    >
                      {workout.completed ? "Completed" : "Mark Done"}
                    </button>
                  )}

                  <button
                    onClick={() =>
                      activeTab === "plan"
                        ? removeFromPlan(workout.id)
                        : removeFromSaved(workout.id)
                    }
                    className="rounded-full border border-[var(--border)] px-4 py-2 text-xs font-bold uppercase text-white"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </main>
  );
}