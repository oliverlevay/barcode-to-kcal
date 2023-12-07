import React, { useState, useEffect, useCallback } from "react";
import Quagga, { QuaggaJSResultObject } from "@ericblade/quagga2";
import { Product, ProductData, ProductIAte } from "@/lib/types";

function getMedian(arr: any[]) {
  const newArr = [...arr]; // copy the array before sorting, otherwise it mutates the array passed in, which is generally undesireable
  newArr.sort((a, b) => a - b);
  const half = Math.floor(newArr.length / 2);
  if (newArr.length % 2 === 1) {
    return newArr[half];
  }
  return (newArr[half - 1] + newArr[half]) / 2;
}

function getMedianOfCodeErrors(
  decodedCodes: QuaggaJSResultObject["codeResult"]["decodedCodes"]
) {
  const errors = decodedCodes.flatMap((x) => x.error);
  const medianOfErrors = getMedian(errors);
  return medianOfErrors;
}

const BarcodeScanner = ({
  setBarcode,
  onClose,
}: {
  setBarcode: React.Dispatch<React.SetStateAction<string>>;
  onClose: () => void;
}) => {
  const [scannedBarcode, setScannedBarcode] = useState<string>("");
  const [certainty, setCertainty] = useState<number>(0);
  const onDetected = useCallback(
    (result: QuaggaJSResultObject) => {
      const err = getMedianOfCodeErrors(result.codeResult.decodedCodes);
      const certainty = 1 - err;
      setScannedBarcode(result.codeResult.code!);
      setCertainty(certainty);
      // if Quagga is at least 94% certain that it read correctly, then accept the code.
      if (certainty >= 0.9) {
        setBarcode(result.codeResult.code!);
        Quagga.stop();
        onClose();
      }
    },
    [onClose, setBarcode]
  );

  useEffect(() => {
    Quagga.init(
      {
        inputStream: {
          constraints: {
            facingMode: "environment",
          },
          name: "Live",
          type: "LiveStream",
          target: document.querySelector("#scanner-container")!, // Or '#yourElement' (optional)
        },
        decoder: {
          readers: ["ean_reader"],
        },
      },
      function (err) {
        if (err) {
          console.error(err);
          return;
        }
        console.log("Initialization finished. Ready to start");
        Quagga.start();
      }
    );

    Quagga.onDetected(onDetected);

    return () => {
      Quagga.stop();
    };
  }, [onDetected]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center">
      <div className="p-5 rounded-lg shadow-lg relative">
        <button
          className="absolute top-0 right-0 m-2"
          onClick={() => {
            onClose();
            Quagga.stop();
          }}
        >
          ✖
        </button>
        <div
          id="scanner-container"
          className="overflow-hidden max-w-xs md:max-w-none h-64"
        />
        <p>streckkod: {scannedBarcode}</p>
        <p>säkerhet: {certainty}</p>
      </div>
    </div>
  );
};

export default BarcodeScanner;
