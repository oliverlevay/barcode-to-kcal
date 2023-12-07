import { SystembolagetDrink } from "@/pages/api/systembolaget/search";
import SystembolagetDrinkComponent, {
  drinkName,
} from "./SystembolagetDrinkComponent";
import { PlusCircleIcon } from "@heroicons/react/24/solid";

export default function Complete({
  drink,
  barcode,
  onSubmit,
  error,
}: {
  drink: SystembolagetDrink;
  barcode: string;
  onSubmit: () => void;
  error: string | null;
}) {
  return (
    <>
      <p>
        Bra jobbat! Kontroller att allting stämmer innan du lägger till{" "}
        {drinkName(drink)}
      </p>
      <p className="block text-gray-500 text-lg font-bold mb-2 mt-2">
        Barkod: <span className="text-gray-400">{barcode}</span>
      </p>
      <SystembolagetDrinkComponent drink={drink} disableHover />
      {error && <p className="text-red-500 mt-5 mb-3">{error}</p>}
      <button className="btn btn-primary mt-4" onClick={onSubmit}>
        <PlusCircleIcon className="h-5 w-5 mr-2" />
        Lägg till
      </button>
    </>
  );
}
