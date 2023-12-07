import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";

function displayBarcode(barcode: string) {
  // transforms 7350087523217 to 7 350087 523217
  try {
    return `${barcode.slice(0, 1)} ${barcode.slice(1, 7)} ${barcode.slice(
      7,
      13
    )}`;
  } catch {
    return barcode;
  }
}

export default function ConfirmBarcode({
  barcode,
  onClose,
  confirm,
}: {
  barcode: string;
  onClose: () => void;
  confirm: () => void;
}) {
  return (
    <div className="flex flex-col gap-2 items-center">
      <p>Ska ba dubbelkolla, blev det rätt barkod?</p>
      <p className="font-bold">{displayBarcode(barcode)}</p>
      <div className="flex">
        <button className="btn btn-primary" onClick={confirm}>
          Ja fortsätt <ArrowRightCircleIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
