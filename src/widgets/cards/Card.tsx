import { Card as CardModel } from "../../shared/models";

type Props = {
  card: CardModel;
};

export function Card({ card }: Props) {
  return (
    <div className="bg-gray-800 w-fit border border-gray-700 rounded-lg shadow-md p-4 flex flex-col items-center text-center">
      <img
        src={card.imageUrl}
        alt={card.title}
        className="w-64 h-64 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg text-gray-100 font-bold">{card.title}</h3>
      <p className="text-blue-400 font-semibold">Power: {card.power}</p>
    </div>
  );
}
