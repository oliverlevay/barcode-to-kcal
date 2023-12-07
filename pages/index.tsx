import { Inter } from "next/font/google";
import BarcodeScanner from "../components/BarcodeScanner";
import { useEffect, useState } from "react";
import { getBeverage } from "@/lib/api/beverage";
import { useBeverages } from "@/components/providers/BeverageProvider";
import CreateBeverage from "@/components/CreateBeverage/CreateBeverage";
import InputTextOverlay from "@/components/InputTextOverlay";
import BeverageComponent from "@/components/Beverages/BeverageComponent";
import BarcodeScannerZxing from "@/components/BarcodeScannerZxing";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [scanning, setScanning] = useState(false);
  const [barcode, setBarcode] = useState("");
  const [createBeverage, setCreateBeverage] = useState(false);
  const [addingManually, setAddingManually] = useState(false);
  const { beverages } = useBeverages();
  useEffect(() => {
    if (barcode.length > 0) {
      getBeverage(barcode).then(({ status }) => {
        if (status === 404) {
          setCreateBeverage(true);
        }
      });
    }
  }, [barcode]);

  return (
    <main className="p-8">
      <div className="flex flex-row gap-4">
        <button
          className="btn btn-primary"
          onClick={() => {
            setBarcode("");
            setScanning(true);
          }}
        >
          Scanna alkohol
        </button>
        <button
          className="btn"
          onClick={() => {
            setBarcode("");
            setAddingManually(true);
          }}
        >
          Lägg till manuellt
        </button>
      </div>
      {beverages.length === 0 && (
        <p className="text-lg font-semibold mt-8">
          Inga drycker hittades i lagret
        </p>
      )}
      <div className="flex flex-wrap gap-4 mt-4">
        {beverages.length > 0 &&
          beverages.map((beverage) => (
            <BeverageComponent
              key={beverage.EAN}
              drink={beverage}
              disableHover
            />
          ))}
      </div>
      {scanning && (
        <BarcodeScannerZxing
          onClose={() => {
            setScanning(false);
          }}
          setBarcode={setBarcode}
        />
      )}
      {createBeverage && (
        <CreateBeverage
          barcode={barcode}
          onClose={() => {
            setCreateBeverage(false);
          }}
        />
      )}
      {addingManually && (
        <InputTextOverlay
          onClose={() => {
            setAddingManually(false);
          }}
          onFinish={(text) => {
            setBarcode(text);
            setAddingManually(false);
          }}
        />
      )}
    </main>
  );
}
