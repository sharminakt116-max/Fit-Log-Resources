import WorkoutsCard from '@/component/shared/WorkoutsCard';
import { ICard } from '@/types/type';

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
    <section
      id="library"
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16"
    >
      {/* Heading */}
      <div className="mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">
          THE LIBRARY
        </h2>

        <p className="text-zinc-400 mt-2 text-sm sm:text-base">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      {/* Workout Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
        {cardData.map((card: ICard) => (
          <WorkoutsCard
            key={card.id}
            card={card}
          />
        ))}
      </div>
    </section>
  );
};

export default Card;