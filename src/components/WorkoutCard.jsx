import Image from "next/image";
import Link from "next/link";

export default function WorkoutCard({ workout }) {
  return (
   
      <Link
  href={`/workouts/${workout.id}`}
  className="block overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] transition hover:-translate-y-1 hover:border-[var(--accent)]"
>
    


      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5">

        {/* Difficulty */}
        <span className="inline-block rounded-full bg-[var(--accent)] px-3 py-1 text-xs font-bold uppercase tracking-wide text-black">
          {workout.difficulty}
        </span>

        {/* Name */}
        <h3 className="display-font mt-4 text-2xl font-semibold uppercase leading-tight">
          {workout.name}
        </h3>
        <p className="mt-2 text-sm text-[var(--muted)]">
          {workout.equipment}
        </p>

        {/* Muscle Groups */}
        <div className="mt-3 flex flex-wrap gap-2">
          {workout.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted)]"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Workout Info */}
        <div className="mt-5 grid grid-cols-3 gap-2 border-t border-[var(--border)] pt-4 text-sm">
          <div>
            <p className="text-[var(--muted)]">Time</p>
            <p className="mt-1 font-semibold">
              {workout.duration} min
            </p>
          </div>

          <div>
            <p className="text-[var(--muted)]">Calories</p>
            <p className="mt-1 font-semibold">
              {workout.caloriesBurned}
            </p>
          </div>

          <div>
            <p className="text-[var(--muted)]">Rating</p>
            <p className="mt-1 font-semibold">
              ★ {workout.rating}
            </p>
          </div>
        </div>

      </div>
    </Link>
  );
}