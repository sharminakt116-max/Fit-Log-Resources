import Image from 'next/image';
import Link from 'next/link';
import {
  LuArrowLeft,
  LuStar,
  LuPlus,
  LuBookmark,
} from 'react-icons/lu';

const getWorkout = async (id: string) => {
  const response = await fetch(
    `https://api.abcz.workers.dev/api/fitlog/${id}`
  );

  const data = await response.json();

  return data;
};

const WorkoutDetails = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const workout = await getWorkout(id);

  return (
    <section className="px-6 lg:px-14 py-12">
      {/* Two Column */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">

        {/* Left Side */}
        <div className="h-full">
          <Image
            src={workout.image}
            alt={workout.name}
            width={800}
            height={600}
            className="w-full h-full min-h-[500px] object-cover rounded-xl"
          />
        </div>

        {/* Right Side */}
        <div>
          {/* Title */}
          <h1 className="text-4xl font-black text-white">
            {workout.name.toUpperCase()}
          </h1>

          {/* Description */}
          <p className="text-zinc-400 mt-5 leading-7">
            {workout.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-6">
            {workout.muscleGroups.map((muscle: string) => (
              <span
                key={muscle}
                className="text-sm text-lime-400 border border-lime-400/30 px-3 py-1 rounded-full"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Key Specs */}
          <div className="mt-8 border border-zinc-800 rounded-xl overflow-hidden">
            <div className="flex justify-between px-5 py-4 border-b border-zinc-800">
              <span className="text-zinc-400">EQUIPMENT</span>
              <span className="text-white">{workout.equipment}</span>
            </div>

            <div className="flex justify-between px-5 py-4 border-b border-zinc-800">
              <span className="text-zinc-400">DIFFICULTY</span>
              <span className="text-white">{workout.difficulty}</span>
            </div>

            <div className="flex justify-between px-5 py-4 border-b border-zinc-800">
              <span className="text-zinc-400">SETS</span>
              <span className="text-white">{workout.sets}</span>
            </div>

            <div className="flex justify-between px-5 py-4 border-b border-zinc-800">
              <span className="text-zinc-400">REPS</span>
              <span className="text-white">{workout.reps}</span>
            </div>

            <div className="flex justify-between px-5 py-4 border-b border-zinc-800">
              <span className="text-zinc-400">DURATION</span>
              <span className="text-white">
                {workout.duration} min
              </span>
            </div>

            <div className="flex justify-between px-5 py-4 border-b border-zinc-800">
              <span className="text-zinc-400">CALORIES</span>
              <span className="text-white">
                {workout.caloriesBurned} kcal
              </span>
            </div>

            <div className="flex justify-between px-5 py-4">
              <span className="text-zinc-400">RATING</span>

              <span className="text-white flex items-center gap-1">
                <LuStar size={16} />
                {workout.rating}
              </span>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-white">
              INSTRUCTIONS
            </h2>

            <ol className="mt-4 space-y-4">
              {workout.instructions.map(
                (instruction: string, index: number) => (
                  <li
                    key={index}
                    className="flex gap-4 text-zinc-400"
                  >
                    <span className="text-lime-400 font-bold">
                      {index + 1}.
                    </span>

                    <span>{instruction}</span>
                  </li>
                )
              )}
            </ol>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">
            <button className="btn bg-lime-400 text-black border-none">
              <LuPlus />
              Add to today's plan
            </button>

            <button className="btn bg-transparent text-white border-zinc-700">
              <LuBookmark />
              Save for later
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutDetails;