import { useState } from "react";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";

export default function ChooseImage({
  onFinish,
}: {
  onFinish: (file: File) => void;
}) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    setSelectedFile(file);
  };

  return (
    <>
      <p className="text-lg font-semibold mb-4">Nu måste du välja en bild 📸</p>

      <div className="mb-4">
        <label
          htmlFor="file-upload"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Välj en bild
        </label>
        <input
          type="file"
          id="file-upload"
          className="input input-bordered w-full max-w-xs file:btn file:btn-primary"
          accept="image/*"
          onChange={handleFileChange}
        />
        {selectedFile && (
          <p className="mt-2 text-sm text-gray-600">{selectedFile.name}</p>
        )}
      </div>

      <button
        className={`btn btn-primary flex items-center justify-center ${
          !selectedFile ? "btn-disabled" : ""
        }`}
        onClick={() => {
          if (selectedFile) {
            onFinish(selectedFile);
          }
        }}
        disabled={!selectedFile}
      >
        Fortsätt
        <ArrowRightCircleIcon className="h-5 w-5 ml-2" />
      </button>
    </>
  );
}
