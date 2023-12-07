import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { useBeverages } from "../providers/BeverageProvider";
import { BeverageType } from "@prisma/client";

export default function ChooseName({
  onFinish,
}: {
  onFinish: (beverageType: BeverageType) => void;
}) {
  const { beverageTypes } = useBeverages();
  const [beverageType, setBeverageType] = useState<BeverageType | null>(null);
  return (
    <>
      <p className="text-lg font-semibold mb-4">
        Oj! Du har hittat en ny dryck, du är jättesnäll om du lägger in den i
        systemet ❤️
      </p>

      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Vad är det för typ av dryck?
        </label>
      </div>

      <button
        className={`btn btn-primary flex items-center justify-center ${
          beverageType === null ? "btn-disabled" : ""
        }`}
        onClick={() => {
          onFinish(beverageType!);
        }}
        disabled={beverageType === null}
      >
        Fortsätt
        <ArrowRightCircleIcon className="h-5 w-5 mr-2" />
      </button>
    </>
  );
}
