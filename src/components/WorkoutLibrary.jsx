"use client";

import { useEffect, useState } from "react";
import WorkoutCard from "./WorkoutCard";

export default function WorkoutLibrary() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("default");

  useEffect(() => {
    fetch("https://api.abcz.workers.dev/api/fitlog")
      .then((response) => response.json())
      .then((data) => {
        setWorkouts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to load workouts:", error);
        setLoading(false);
      });
  }, []);

  const sortedWorkouts = [...workouts].sort((a, b) => {
    if (sortBy === "duration") {
      return a.duration - b.duration;
    }

    if (sortBy === "calories") {
      return b.caloriesBurned - a.caloriesBurned;
    }

    if (sortBy === "rating") {
      return b.rating - a.rating;
    }

    return 0;
  });

  return (
    <section id="library" className="border-b border-[var(--border)]">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">

        <div className="mb-10">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[var(--accent)]">
            Library
          </p>

          <h2 className="display-font text-4xl font-bold uppercase sm:text-5xl">
            Choose your workout.
          </h2>

          <p className="mt-4 max-w-2xl text-[var(--muted)]">
            Explore workouts by muscle group, difficulty, equipment,
            and training style.
          </p>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="mt-6 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm text-white"
          >
            <option value="default">Sort by</option>
            <option value="duration">Shortest Duration</option>
            <option value="calories">Highest Calories</option>
            <option value="rating">Highest Rating</option>
          </select>
        </div>

        {loading && (
          <p className="text-[var(--muted)]">
            Loading workouts...
          </p>
        )}

        {!loading && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sortedWorkouts.map((workout) => (
              <WorkoutCard
                key={workout.id}
                workout={workout}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}