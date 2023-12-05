import { Product, ProductIAte } from '@/lib/types';

export default function ProductComponent({
  product,
  removeProduct,
}: {
  product: ProductIAte;
  removeProduct: (product: ProductIAte) => void;
}) {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <button
        className="absolute top-0 right-0 m-2"
        onClick={() => {
          removeProduct(product);
        }}
      >
        ✖
      </button>
      <figure>
        {product.product.image_url ? (
          <img
            src={product.product.image_url}
            alt={product.product.product_name}
            className="object-contain h-48 w-full"
          />
        ) : (
          <div className="flex justify-center items-center h-48 w-full bg-base-300">
            <span>No Image Available</span>
          </div>
        )}
      </figure>
      <div className="card-body items-center">
        <h2 className="card-title">{product.product.product_name}</h2>
        <p>
          energi per 100g: {product.product.nutriments['energy-kcal_100g']}{' '}
          {product.product.nutriments['energy-kcal_unit']}
        </p>
        <p>
          energi per portion:{' '}
          {product.product.nutriments['energy-kcal_serving']}{' '}
          {product.product.nutriments['energy-kcal_unit']}
        </p>
        {/* Lägg till fler detaljer om produkten här om så önskas */}
        {/*
        {product.ingredients_text && (
          <p>Ingredients: {product.ingredients_text}</p>
        )}
        {product.nutriments && (
          <div>
            <h3>Nutritional Information:</h3>
          </div>
        )}
        */}
        {/* Lägg till andra relevanta detaljer */}
        <p>
          Du åt denna produkt: {new Date(product.ateDate).toLocaleString()}{' '}
        </p>
      </div>
    </div>
  );
}
