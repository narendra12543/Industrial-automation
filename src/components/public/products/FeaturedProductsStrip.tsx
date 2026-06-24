import Link from "next/link";
import Image from "next/image";
import { ProductType } from "@/types/product";

interface Props {
  products: ProductType[];
}

export default function FeaturedProductsStrip({
  products,
}: Props) {
  if (!products.length) return null;

  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-6 text-2xl font-bold text-[#0F2747]">
          Featured Products
        </h2>

        <div
          className="
            flex
            gap-5
            overflow-x-auto
            pb-2
          "
        >
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="
                min-w-[300px]
                overflow-hidden
                rounded-2xl
                border
                bg-white
                shadow-sm
              "
            >
              <div className="relative h-44">
                <Image
                  src={
                    product.images?.[0]
                      ?.imageUrl ||
                    "/placeholder-product.jpg"
                  }
                  alt={product.name}
                  fill
                  sizes="300px"
                  className="object-cover"
                />
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-[#0F2747]">
                  {product.name}
                </h3>

                <p className="mt-2 text-sm text-slate-600">
                  {product.category?.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}