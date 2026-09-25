import Link from 'next/link';
import { LuClock, LuFlame, LuStar } from 'react-icons/lu';

const getCard = async () => {
  const response = await fetch(
    'https://api.abcz.workers.dev/api/fitlog'
  );

  const data = await response.json();

  return data;
};

const Card = async () => {
  const cardData = await getCard();

  return (
    <section id="library" className="px-6 lg:px-14 py-12">

      {/* Heading */}
      <div className="mb-8">
        <h2 className="text-3xl font-black text-white">
          THE LIBRARY
        </h2>

        <p className="text-zinc-400 mt-2">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {cardData.map((card) => (

          <Link
            href={`/workout/${card.id}`}
            key={card.id}
            className="bg-[#151922] border border-zinc-800 rounded-xl overflow-hidden hover:border-lime-400 transition"
          >

            {/* Image */}
            <img
              src={card.image}
              alt={card.name}
              className="w-full h-56 object-cover"
            />

            {/* Content */}
            <div className="p-5">

              {/* Category Tags */}
              <div className="flex flex-wrap gap-2 mb-3">
                {card.muscleGroups.map((muscle) => (
                  <span
                    key={muscle}
                    className="text-xs font-semibold text-lime-400 border border-lime-400/30 px-2 py-1 rounded-full"
                  >
                    {muscle.toUpperCase()}
                  </span>
                ))}
              </div>

              {/* Workout Name */}
              <h3 className="text-xl font-bold text-white">
                {card.name.toUpperCase()}
              </h3>

              {/* Equipment */}
              <p className="text-zinc-400 text-sm mt-2">
                {card.equipment}
              </p>

              {/* Stats */}
              <div className="flex items-center gap-4 mt-5 text-sm text-zinc-300">

                <span className="flex items-center gap-1">
                  <LuClock size={16} />
                  {card.duration} min
                </span>

                <span className="flex items-center gap-1">
                  <LuFlame size={16} />
                  {card.caloriesBurned} kcal
                </span>

                <span className="flex items-center gap-1">
                  <LuStar size={16} />
                  {card.rating}
                </span>

              </div>

            </div>

          </Link>

        ))}

      </div>

    </section>
  );
};

export default Card;