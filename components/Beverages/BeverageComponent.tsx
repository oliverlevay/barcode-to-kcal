/* eslint-disable @next/next/no-img-element */
import { Beverage, BeverageType } from "@prisma/client";

export default function BeverageComponent({
  drink,
  disableHover,
}: {
  drink: Beverage & { type: BeverageType };
  disableHover?: boolean;
}) {
  return (
    <div
      className={`card w-80 shadow-xl bg-base-200 p-2 ${
        !disableHover &&
        "hover:bg-base-300 selection:bg-base-300 hover:border-2"
      }`}
    >
      {drink.image && (
        <figure>
          <img className="h-24" src={drink.image} alt={drink.name} />
        </figure>
      )}
      {!drink.image && (
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
        <p>i lager: {drink.stock}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{drink.type.name}</div>
        </div>
        <p className="text-xs text-gray-500">{drink.EAN}</p>
      </div>
    </div>
  );
}
