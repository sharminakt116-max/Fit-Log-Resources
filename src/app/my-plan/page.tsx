'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  LuClock,
  LuFlame,
  LuStar,
  LuX,
  LuCheck,
  LuChevronDown,
} from 'react-icons/lu';
import { toast } from 'react-toastify';
import { ICard } from '@/types/type';

const MyPlanPage = () => {
  const [activeTab, setActiveTab] = useState<'today' | 'saved'>('today');

  const [todayPlan, setTodayPlan] = useState<ICard[]>([]);
  const [savedWorkouts, setSavedWorkouts] = useState<ICard[]>([]);

  // Default sorting
  const [sortBy, setSortBy] = useState<
    'duration' | 'calories' | 'rating'
  >('duration');

  // Load data from localStorage
  useEffect(() => {
    const plan = localStorage.getItem('todayPlan');
    const saved = localStorage.getItem('savedWorkouts');

    if (plan) {
      setTodayPlan(JSON.parse(plan));
    }

    if (saved) {
      setSavedWorkouts(JSON.parse(saved));
    }
  }, []);

  // Current list
  const currentList =
    activeTab === 'today' ? todayPlan : savedWorkouts;

  // Sort current list
  const sortedList = [...currentList].sort((a, b) => {
    if (sortBy === 'duration') {
      return a.duration - b.duration;
    }

    if (sortBy === 'calories') {
      return a.caloriesBurned - b.caloriesBurned;
    }

    if (sortBy === 'rating') {
      return a.rating - b.rating;
    }

    return 0;
  });

  // Statistics
  const totalExercises = currentList.length;

  const totalMinutes = currentList.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const totalCalories = currentList.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

  // Mark as Done
  const handleMarkAsDone = (workoutName: string) => {
    toast.success(`${workoutName} marked as done!`);
  };

  // Remove workout
  const handleRemove = (id: number) => {
    if (activeTab === 'today') {
      const workout = todayPlan.find(
        (item) => item.id === id
      );

      const updated = todayPlan.filter(
        (item) => item.id !== id
      );

      setTodayPlan(updated);

      localStorage.setItem(
        'todayPlan',
        JSON.stringify(updated)
      );

      if (workout) {
        toast.success(
          `${workout.name} removed from today's plan`
        );
      }
    } else {
      const workout = savedWorkouts.find(
        (item) => item.id === id
      );

      const updated = savedWorkouts.filter(
        (item) => item.id !== id
      );

      setSavedWorkouts(updated);

      localStorage.setItem(
        'savedWorkouts',
        JSON.stringify(updated)
      );

      if (workout) {
        toast.success(
          `${workout.name} removed from saved workouts`
        );
      }
    }

    // Update Navbar count
    window.dispatchEvent(new Event('storageUpdate'));
  };

  return (
    <main className="min-h-screen bg-[#0d0f12] text-white px-6 sm:px-15 py-30">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-black">
            MY PLAN
          </h1>

          <p className="text-zinc-500 mt-2">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-3 bg-[#151922] border border-zinc-800 rounded-2xl overflow-hidden mb-8">

          {/* Exercises */}
          <div className="text-center py-6">
            <p className="text-zinc-500 text-sm">
              Exercises
            </p>

            <h2 className="text-3xl font-bold text-lime-400 mt-2">
              {totalExercises}
            </h2>
          </div>

          {/* Minutes */}
          <div className="text-center py-6 border-x border-zinc-800">
            <p className="text-zinc-500 text-sm">
              Minutes
            </p>

            <h2 className="text-3xl font-bold mt-2">
              {totalMinutes}
            </h2>
          </div>

          {/* Calories */}
          <div className="text-center py-6">
            <p className="text-zinc-500 text-sm">
              Calories
            </p>

            <h2 className="text-3xl font-bold mt-2">
              {totalCalories}
            </h2>
          </div>

        </div>

        {/* Tabs + Sort */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-6">

          {/* Tabs */}
          <div className="flex gap-2">

            <button
              onClick={() => setActiveTab('today')}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold ${
                activeTab === 'today'
                  ? 'bg-lime-400 text-black'
                  : 'bg-[#151922] text-zinc-400 border border-zinc-800'
              }`}
            >
              Today's Plan
            </button>

            <button
              onClick={() => setActiveTab('saved')}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold ${
                activeTab === 'saved'
                  ? 'bg-lime-400 text-black'
                  : 'bg-[#151922] text-zinc-400 border border-zinc-800'
              }`}
            >
              Saved
            </button>

          </div>

          {/* Sort By */}
          <div>
            <p className="text-sm text-zinc-400 mb-2">
              Sort By
            </p>

            <div className="relative">

              <select
                value={sortBy}
                onChange={(e) =>
                  setSortBy(
                    e.target.value as
                      | 'duration'
                      | 'calories'
                      | 'rating'
                  )
                }
                className="appearance-none bg-[#151922] border border-zinc-800 rounded-lg px-4 py-2.5 pr-10 text-sm text-white outline-none focus:border-lime-400"
              >
                <option value="duration">
                  Duration
                </option>

                <option value="calories">
                  Calories
                </option>

                <option value="rating">
                  Rating
                </option>
              </select>

              <LuChevronDown
                size={18}
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400"
              />

            </div>
          </div>

        </div>

        {/* Empty State */}
        {sortedList.length === 0 ? (

          <div className="border border-zinc-800 bg-[#151922] rounded-2xl py-20 text-center">

            <h2 className="text-xl font-bold">
              NOTHING HERE YET
            </h2>

            <p className="text-zinc-500 mt-3">
              Browse the library and add a lift to get today moving.
            </p>

            <Link
              href="/"
              className="inline-block mt-6 bg-lime-400 hover:bg-lime-300 text-black font-bold px-6 py-3 rounded-lg"
            >
              GO TO WORKOUTS
            </Link>

          </div>

        ) : (

          /* Workout List */
          <div className="space-y-4">

            {sortedList.map((workout) => (

              <div
                key={workout.id}
                className="bg-[#151922] border border-zinc-800 rounded-xl p-4"
              >

                <div className="flex flex-col sm:flex-row gap-5">

                  {/* Image */}
                  <Image
                    src={workout.image}
                    alt={workout.name}
                    width={180}
                    height={120}
                    className="w-full sm:w-44 h-28 object-cover rounded-lg"
                  />

                  {/* Workout Information */}
                  <div className="flex-1">

                    <h2 className="text-lg font-bold">
                      {workout.name}
                    </h2>

                    <p className="text-sm text-zinc-500 mt-1">
                      {workout.equipment}
                    </p>

                    {/* Workout Info */}
                    <div className="flex flex-wrap gap-4 mt-5 text-sm text-zinc-400">

                      <span className="flex items-center gap-1">
                        <LuClock size={16} />
                        {workout.duration} min
                      </span>

                      <span className="flex items-center gap-1">
                        <LuFlame size={16} />
                        {workout.caloriesBurned} kcal
                      </span>

                      <span className="flex items-center gap-1">
                        <LuStar
                          size={16}
                          className="text-yellow-400"
                        />
                        {workout.rating}
                      </span>

                    </div>

                  </div>

                  {/* Right Side Buttons */}
                  <div className="flex items-center justify-center gap-3 sm:ml-auto self-center">

                    {/* View Details */}
                    <Link
                      href={`/workout/${workout.id}`}
                      className="text-sm bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded-lg transition whitespace-nowrap"
                    >
                      View Details
                    </Link>

                    {/* Mark as Done */}
                    {activeTab === 'today' && (
                      <button
                        onClick={() =>
                          handleMarkAsDone(workout.name)
                        }
                        className="flex items-center gap-2 text-sm border border-lime-400 text-lime-400 px-4 py-2 rounded-lg hover:bg-lime-400 hover:text-black transition whitespace-nowrap"
                      >
                        <LuCheck size={16} />
                        Mark as Done
                      </button>
                    )}

                    {/* Remove */}
                    <button
                      onClick={() =>
                        handleRemove(workout.id)
                      }
                      className="flex items-center justify-center w-9 h-9 border border-zinc-700 rounded-lg text-zinc-400 hover:text-red-400 hover:border-red-400 transition"
                      aria-label="Remove workout"
                    >
                      <LuX size={18} />
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>
    </main>
  );
};

export default MyPlanPage;