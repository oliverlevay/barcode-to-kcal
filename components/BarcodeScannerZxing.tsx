import React, { useState, useEffect, useCallback } from "react";
import Quagga, { QuaggaJSResultObject } from "@ericblade/quagga2";
import { Product, ProductData, ProductIAte } from "@/lib/types";
import { useZxing } from "react-zxing";

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

const BarcodeScannerZxing = ({
  setBarcode,
  onClose,
}: {
  setBarcode: React.Dispatch<React.SetStateAction<string>>;
  onClose: () => void;
}) => {
  const { ref } = useZxing({
    onDecodeResult(result) {
      setBarcode(result.getText());
      onClose();
    },
  });

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
        <div className="">
          <video
            ref={ref}
            /*           className="w-96 h-96"
            autoPlay
            playsInline
            muted
            style={{ objectFit: "contain" }} */
          />
        </div>
      </div>
    </div>
  );
};

export default BarcodeScannerZxing;
