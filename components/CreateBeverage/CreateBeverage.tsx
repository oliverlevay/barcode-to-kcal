import { useState } from "react";
import BeverageContent from "./BeverageContent";

export default function CreateBeverage({
  onClose,
  barcode,
}: {
  onClose: () => void;
  barcode: string;
}) {
  const [name, setName] = useState("");
  return (
    <div
      id="outside"
      className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center"
      onClick={(e) => {
        if (e.target === document.getElementById("outside")) {
          onClose();
        }
      }}
    >
      <div className="p-5 rounded-lg shadow-lg relative max-h-screen overflow-y-scroll bg-base-300">
        <button
          className="absolute top-0 right-0 m-2"
          onClick={() => {
            onClose();
          }}
        >
          ✖
        </button>
        <div className="flex flex-col p-8 shadow-lg rounded-lg max-w-sm mx-auto">
          <BeverageContent barcode={barcode} onClose={onClose} />
        </div>
      </div>
    </div>
  );
}
