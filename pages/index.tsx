import Image from 'next/image';
import { Inter } from 'next/font/google';
import BarcodeScanner from '../components/BarcodeScanner';
import { useEffect, useState } from 'react';
import { Product, ProductIAte } from '@/lib/types';
import ProductComponent from '@/components/Product';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [scanning, setScanning] = useState(false);
  const [product, setProduct] = useState<ProductIAte | null>(null);
  const [products, setProducts] = useState<ProductIAte[]>([]);
  useEffect(() => {
    const savedProducts = localStorage.getItem('products');
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    }
  }, []);

  function removeProduct(product: ProductIAte) {
    const newProducts = products.filter(
      (savedProduct) =>
        savedProduct.product.id !== product.product.id ||
        new Date(savedProduct.ateDate).getTime() !==
          new Date(product.ateDate).getTime()
    );
    setProducts(newProducts);
    localStorage.setItem('products', JSON.stringify(newProducts));
  }

  useEffect(() => {
    if (product) {
      const newProducts = [product, ...products];
      setProducts(newProducts);
      localStorage.setItem('products', JSON.stringify(newProducts));
      setProduct(null);
    }
  }, [product]);
  return (
    <main className="p-8">
      <button
        className="btn btn-primary"
        onClick={() => {
          setScanning(true);
        }}
      >
        Scan new product
      </button>
      <p className="text-2xl m-4">
        Totalt kalori-intag:{' '}
        <b>
          {products.reduce((acc, product) => {
            if (!product.product.nutriments['energy-kcal_serving']) return acc;
            return acc + product.product.nutriments['energy-kcal_serving'];
          }, 0)}{' '}
        </b>
        kcal
      </p>
      {scanning && (
        <BarcodeScanner
          product={product}
          setProduct={setProduct}
          setScanning={setScanning}
        />
      )}
      <div className="flex flex-wrap gap-4">
        {products.map((product) => (
          <ProductComponent
            key={product.product.id + product.ateDate}
            product={product}
            removeProduct={removeProduct}
          />
        ))}
      </div>
    </main>
  );
}
