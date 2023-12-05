import React, { useState, useEffect } from 'react';
import Quagga from '@ericblade/quagga2';
import { Product, ProductData, ProductIAte } from '@/lib/types';

const BarcodeScanner = ({
  product,
  setProduct,
  setScanning,
}: {
  product: ProductIAte | null;
  setProduct: (product: ProductIAte | null) => void;
  setScanning: (scanning: boolean) => void;
}) => {
  const [barcode, setBarcode] = useState('');
  const [productData, setProductData] = useState<ProductData | null>(null);

  const fetchProductData = async (scannedBarcode: string) => {
    const response = await fetch(
      `https://world.openfoodfacts.org/api/v2/product/${scannedBarcode}.json`
    );
    if (!response.ok) {
      return null;
    }
    const data = (await response.json()) as ProductData;
    setProductData(data);
    return data;
  };

  useEffect(() => {
    if (barcode) {
      fetchProductData(barcode);
    }
  }, [barcode]);

  useEffect(() => {
    if (productData) {
      setProduct({
        product: productData.product,
        ateDate: new Date(),
      });
      Quagga.stop();
      setScanning(false);
    }
  }, [productData]);

  useEffect(() => {
    Quagga.init(
      {
        inputStream: {
          constraints: {
            facingMode: 'environment',
          },
          name: 'Live',
          type: 'LiveStream',
          target: document.querySelector('#scanner-container')!, // Or '#yourElement' (optional)
        },
        decoder: {
          readers: ['ean_reader'],
        },
      },
      function (err) {
        if (err) {
          console.error(err);
          return;
        }
        console.log('Initialization finished. Ready to start');
        Quagga.start();
      }
    );

    Quagga.onDetected((data) => {
      console.log({ data });
      const scannedBarcode = data.codeResult.code;
      console.log({ scannedBarcode, barcode });
      try {
        if (scannedBarcode) {
          setBarcode(scannedBarcode);
        }
      } catch {
        console.log('error', scannedBarcode);
      }
    });

    return () => {
      Quagga.stop();
    };
  }, []);

  console.log(barcode);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center">
      <div className="bg-white p-5 rounded-lg shadow-lg relative">
        <button
          className="absolute top-0 right-0 m-2"
          onClick={() => {
            Quagga.stop();
            setScanning(false);
          }}
        >
          ✖
        </button>
        <div id="scanner-container" className="h-64 overflow-hidden" />
        {barcode && (
          <div className="mt-4 text-lg">Scanned Barcode: {barcode}</div>
        )}
        {/* Eventuell produktdata här */}
      </div>
    </div>
  );
};

export default BarcodeScanner;
