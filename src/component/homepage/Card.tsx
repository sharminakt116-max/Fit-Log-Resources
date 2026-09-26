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

      {/* Workout Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardData.map((card:ICard) => (
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