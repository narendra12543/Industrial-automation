"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

interface ProductImage {
  id: string;
  imageUrl: string;
  isPrimary: boolean;
  altText: string | null;
}

interface ProductCategory {
  id: string;
  name: string;
}

interface Product {
  id: string;
  name: string;
  slug: string;
  shortDescription: string | null;
  featured: boolean;
  category: ProductCategory | null;
  images: ProductImage[];
}

interface PublicProductsCatalogProps {
  products: Product[];
}

export default function PublicProductsCatalog({
  products,
}: PublicProductsCatalogProps) {
  const [search, setSearch] =
    useState("");

  const [category, setCategory] =
    useState("all");

  const categories = useMemo(() => {
    return Array.from(
      new Map(
        products
          .filter(
            (product) =>
              product.category
          )
          .map((product) => [
            product.category!.id,
            product.category,
          ])
      ).values()
    );
  }, [products]);

  const filteredProducts =
    useMemo(() => {
      return products.filter(
        (product) => {
          const matchesSearch =
            product.name
              .toLowerCase()
              .includes(
                search.toLowerCase()
              ) ||
            product.slug
              .toLowerCase()
              .includes(
                search.toLowerCase()
              );

          const matchesCategory =
            category === "all" ||
            product.category?.id ===
              category;

          return (
            matchesSearch &&
            matchesCategory
          );
        }
      );
    }, [
      products,
      search,
      category,
    ]);

  const featuredProducts =
    filteredProducts.filter(
      (product) => product.featured
    );

  const regularProducts =
    filteredProducts.filter(
      (product) =>
        !product.featured
    );

  const renderCard = (
    product: Product
  ) => {
    const primaryImage =
      product.images.find(
        (image) =>
          image.isPrimary
      ) ??
      product.images[0];

    return (
      <div
        key={product.id}
        className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
      >
        <div className="relative h-56 w-full bg-slate-100">
          {primaryImage && (
            <Image
              src={
                primaryImage.imageUrl
              }
              alt={
                primaryImage.altText ??
                product.name
              }
              fill
              className="object-cover"
            />
          )}
        </div>

        <div className="p-5">
          <h3 className="font-bold text-[#0F2747]">
            {product.name}
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            {
              product.category
                ?.name
            }
          </p>

          <p className="mt-3 text-sm text-slate-600">
            {
              product.shortDescription
            }
          </p>

          <Link
            href={`/products/${product.slug}`}
            className="mt-4 inline-flex rounded-lg bg-[#0F2747] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#18385F]"
          >
            View Details
          </Link>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Search + Filter */}
      <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="grid gap-4 md:grid-cols-2">
          <input
            type="text"
            placeholder="Search by product name or slug..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-[#0F2747] outline-none focus:border-[#0F2747]"
          />

          <select
            value={category}
            onChange={(e) =>
              setCategory(
                e.target.value
              )
            }
            className="rounded-lg border border-slate-300 px-4 py-3 text-[#0F2747] outline-none focus:border-[#0F2747]"
          >
            <option value="all">
              All Categories
            </option>

            {categories.map(
              (cat) => (
                <option
                  key={cat?.id}
                  value={cat?.id}
                >
                  {cat?.name}
                </option>
              )
            )}
          </select>
        </div>
      </div>

      {/* Featured */}
      {featuredProducts.length >
        0 && (
        <>
          <h2 className="mb-6 text-2xl font-bold text-[#0F2747]">
            Featured Products
          </h2>

          <div className="mb-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredProducts.map(
              renderCard
            )}
          </div>
        </>
      )}

      {/* Products */}
      <h2 className="mb-6 text-2xl font-bold text-[#0F2747]">
        Products Catalog
      </h2>

      {filteredProducts.length ===
      0 ? (
        <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center shadow-sm">
          <h3 className="text-xl font-semibold text-[#0F2747]">
            No Products Found
          </h3>

          <p className="mt-2 text-slate-600">
            Try changing your
            search or category
            filter.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {regularProducts.map(
            renderCard
          )}
        </div>
      )}
    </>
  );
}