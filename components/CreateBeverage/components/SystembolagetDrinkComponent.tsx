/* eslint-disable @next/next/no-img-element */
import { SystembolagetDrink } from "@/pages/api/systembolaget/search";

export function drinkName(drink: SystembolagetDrink) {
  return `${drink.boldName} ${drink.thinName ? drink.thinName : ""}`;
}

export default function SystembolagetDrinkComponent({
  drink,
  disableHover,
}: {
  drink: SystembolagetDrink;
  disableHover?: boolean;
}) {
  const name = drinkName(drink);
  return (
    <div
      className={`card shadow-xl bg-base-100 p-2 ${
        !disableHover &&
        "hover:bg-base-200 selection:bg-base-200 hover:border-2"
      }`}
    >
      {drink.imageUrl && (
        <figure>
          <img className="max-h-24" src={drink.imageUrl} alt={name} />
        </figure>
      )}
      {!drink.imageUrl && (
        <div className="flex justify-center items-center h-24">
          <p className="text-lg font-semibold mb-4">Ingen bild hittades 😢</p>
        </div>
      )}
      <div className="card-body">
        <h2 className="card-title">{drink.boldName}</h2>
        <p>{drink.thinName}</p>
        <p>{drink.alcoholRate}% alkohol</p>
        <p>{drink.volumeText}</p>
        <p>Inköpspris: {drink.price}kr</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{drink.category}</div>
        </div>
      </div>
    </div>
  );
}
