import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function ChooseName({
  onFinish,
}: {
  onFinish: (name: string) => void;
}) {
  const [name, setName] = useState("");
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
          Namn
        </label>
        <input
          placeholder='Ex. "Coca Cola'
          type="text"
          id="name"
          className="input input-bordered w-full max-w-xs placeholder-gray-600"
          value={name}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              onFinish(name);
            }
          }}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>

      <button
        className={`btn btn-primary flex items-center justify-center ${
          name.length === 0 ? "btn-disabled" : ""
        }`}
        onClick={() => {
          onFinish(name);
        }}
        disabled={name.length === 0}
      >
        Fortsätt
        <ArrowRightCircleIcon className="h-5 w-5 mr-2" />
      </button>
    </>
  );
}
