import { searchSystembolaget } from "@/lib/api/systembolaget/api";
import { SystembolagetDrink } from "@/pages/api/systembolaget/search";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import SystembolagetDrinkComponent from "./components/SystembolagetDrinkComponent";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";

export default function ChooseFromSystembolaget({
  name,
  onFinish,
  onBack,
}: {
  name: string;
  onFinish: (drink: SystembolagetDrink) => void;
  onBack: () => void;
}) {
  const [products, setProducts] = useState<SystembolagetDrink[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    searchSystembolaget(name)
      .then(({ data }) => {
        if (data) setProducts(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [name]);
  return (
    <>
      <p className="text-lg font-semibold mb-4">
        Nu måste du välja din product från systembolagets sortiment 🍹
      </p>

      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Produkt(er) från systembolaget
        </label>
      </div>

      {loading && (
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900" />
          hämtar data från systembolaget...
        </div>
      )}

      {!loading && products.length === 0 && (
        <div className="flex justify-center items-center">
          <p className="text-lg font-semibold mb-4">
            Inga produkter hittades 😢
          </p>
        </div>
      )}

      {products.length > 0 && (
        <button
          className={`btn btn-primary flex items-center justify-center mb-4`}
          onClick={() => {
            onBack();
          }}
        >
          <ArrowLeftCircleIcon className="h-5 w-5 mr-2" />
          Tillbaka
        </button>
      )}

      <div className="flex flex-col gap-4">
        {products.map((product) => (
          <div
            className="cursor-pointer"
            onClick={() => {
              onFinish(product);
            }}
            key={product.thinName}
          >
            <SystembolagetDrinkComponent drink={product} />
          </div>
        ))}
      </div>

      <button
        className={`btn btn-primary flex items-center justify-center mt-4`}
        onClick={() => {
          onBack();
        }}
      >
        <ArrowLeftCircleIcon className="h-5 w-5 mr-2" />
        Tillbaka
      </button>
    </>
  );
}
