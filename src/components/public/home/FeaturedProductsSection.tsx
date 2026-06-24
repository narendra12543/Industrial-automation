import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

import ProductsGrid from "@/components/public/products/ProductsGrid";
import { prisma } from "@/lib/prisma";

export default async function FeaturedProductsSection() {
  const products =
    await prisma.product.findMany({
      where: {
        featured: true,
        isActive: true,
      },

      include: {
        category: true,
        images: true,
      },

      take: 5,

      orderBy: {
        createdAt: "desc",
      },
    });

  if (!products.length) {
    return null;
  }

  return (
    <section className="relative overflow-hidden bg-slate-50 py-2">
      {/* Background */}

      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="
            h-full
            w-full
            bg-[size:60px_60px]
          "
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4">

        {/* Header */}

        <div className="mb-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

          <div>

            <div
              className="
                inline-flex
                items-center
                rounded-full
                bg-orange-50
                px-4
                py-2
                text-sm
                font-medium
                text-orange-700
              "
            >
              <Star
                size={14}
                className="mr-2"
              />
              Featured Products
            </div>

            <h2
              className="
                mt-4
                text-4xl
                font-bold
                text-[#0F2747]
              "
            >
              Our Most Popular Solutions
            </h2>

            <p className="mt-4 max-w-2xl text-slate-600">
              Explore industrial automation
              products trusted across
              manufacturing, logistics,
              commercial and infrastructure
              projects.
            </p>

          </div>

          <Link
            href="/products"
            className="
              inline-flex
              items-center
              rounded-xl
              px-6
              py-3
              font-semibold
              text-[#0F2747]
              transition
              border
              border-[#0F2747]
             
             
            "
          >
            View All Products

            <ArrowRight
              size={18}
              className="ml-2"
            />
          </Link>

        </div>

        {/* Products */}

        <ProductsGrid
          products={products}
        />

      </div>
    </section>
  );
}