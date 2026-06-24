import ProductCard from "@/components/public/products/ProductCard";
import { ProductType } from "@/types/product";

interface Props {
  products: ProductType[];
}

export default function RelatedProductsSection({
  products,
}: Props) {
  if (!products.length) return null;

  return (
    <section className="mt-16">
      <h2 className="mb-6 text-2xl font-bold text-[#0F2747]">
        Related Products
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}