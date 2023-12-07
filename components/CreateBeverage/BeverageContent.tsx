import { useState } from "react";
import ChooseName from "./ChooseName";
import ChooseImage from "./ChooseImage";
import ChooseFromSystembolaget from "./ChooseFromSystembolaget";
import { SystembolagetDrink } from "@/pages/api/systembolaget/search";
import { createBeverage } from "@/lib/api/beverage";
import { drinkName } from "./components/SystembolagetDrinkComponent";
import { useBeverages } from "../providers/BeverageProvider";
import Complete from "./components/Complete";

export default function BeverageContent({
  barcode,
  onClose,
}: {
  barcode: string;
  onClose: () => void;
}) {
  const [name, setName] = useState<string>("");
  const [systembolagetBeverage, setSystembolagetBeverage] =
    useState<SystembolagetDrink>();
  const [error, setError] = useState<string | null>(null);

  const { beverageTypes, refetchBeverages } = useBeverages();

  const onSubmit = async () => {
    if (!systembolagetBeverage)
      return console.error("No systembolaget beverage");
    const beverageType = beverageTypes.find(
      (type) => type.name === systembolagetBeverage.category
    );
    const { error } = await createBeverage({
      name: drinkName(systembolagetBeverage),
      EAN: barcode,
      image: systembolagetBeverage.imageUrl ?? null,
      price: systembolagetBeverage.price,
      typeId: beverageType?.id!,
      stock: 0,
      deletedAt: null,
      description: "",
      volume: systembolagetBeverage.volume,
      volumeText: systembolagetBeverage.volumeText,
      alcoholRate: systembolagetBeverage.alcoholRate,
      boldName: systembolagetBeverage.boldName,
      thinName: systembolagetBeverage.thinName,
    });
    if (error) {
      setError(error);
    } else {
      await refetchBeverages();
      onClose();
    }
  };
  if (!name) {
    return <ChooseName onFinish={(name) => setName(name)} />;
  }

  if (!systembolagetBeverage) {
    return (
      <ChooseFromSystembolaget
        name={name}
        onFinish={(product) => setSystembolagetBeverage(product)}
        onBack={() => setName("")}
      />
    );
  }
  return (
    <Complete
      drink={systembolagetBeverage}
      barcode={barcode}
      onSubmit={onSubmit}
      error={error}
    />
  );
}
