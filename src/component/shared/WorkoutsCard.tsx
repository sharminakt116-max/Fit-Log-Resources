import { ICard } from '@/types/type';
import Image from 'next/image';
import Link from 'next/link';
import { LuClock, LuFlame, LuStar } from 'react-icons/lu';
interface ICardProps{
    card: ICard;
}

const WorkoutsCard = ({ card }: ICardProps) => {
  return (
    <Link
      href={`/workout/${card.id}`}
      className="bg-[#222630] border border-zinc-800 rounded-xl overflow-hidden hover:border-lime-400 transition"
    >

      {/* Image */}
      <Image
        src={card.image}
        alt={card.name}
        width={500}
        height={300}
        className="w-full h-56 object-cover"
      />

      {/* Content */}
      <div className="p-5">

        {/* Category Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {card.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="text-xs font-semibold bg-lime-400 text-black border border-lime-400/30 px-2 py-1 rounded-full"
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
  );
};

export default WorkoutsCard;
