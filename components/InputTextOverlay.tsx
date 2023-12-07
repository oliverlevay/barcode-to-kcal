import { useState } from "react";

export default function InputTextOverlay({
  onClose,
  onFinish,
}: {
  onClose: () => void;
  onFinish: (text: string) => void;
}) {
  const [text, setText] = useState("");
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center">
      <div className="shadow-lg p-8 rounded-lg bg-base-300">
        <input
          type="text"
          className="input"
          placeholder="Skriv in streckkod"
          onChange={(e) => {
            setText(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onFinish(text);
            }
          }}
        />
        <div className="flex flex-row gap-4 mt-4">
          <button
            className="btn btn-primary"
            onClick={() => {
              onFinish(text);
            }}
          >
            Lägg till
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => {
              onClose();
            }}
          >
            Avbryt
          </button>
        </div>
      </div>
    </div>
  );
}
