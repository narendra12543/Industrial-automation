"use client";

import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";

interface ProductMegaMenuProps {
  categories: {
    id: string;
    name: string;
    products: {
      id: string;
      name: string;
      slug: string;
    }[];
  }[];

  open: boolean;
  setOpen: React.Dispatch<
    React.SetStateAction<boolean>
  >;
}

export default function ProductMegaMenu({
  categories,
  open,
  setOpen,
}: ProductMegaMenuProps) {

  return (
    <div
      className="relative "
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Trigger */}

      <Link
        href="/products"
        className="
          flex
          items-center
          gap-1
          font-medium
          text-slate-700
          transition
          hover:text-[#0F2747]
        "
      >
        Products

        
      </Link>

      {/* Mega Menu */}

          
      <div
        className={`
        absolute
        top-full
        left-1/2
        -translate-x-[56%]
        mt-5
        w-[1150px]
        rounded-b-2xl
        border
        border-slate-200
        bg-white
        shadow-2xl
        z-[60]
        transition-all
        duration-300
        ${
        open
            ? "visible opacity-100 translate-y-0"
            : "invisible opacity-0 -translate-y-3"
        }
        `}
      >
        {/* Header */}

        <div className="flex items-center justify-between border-b border-slate-200 px-4 py-2">
          <div>
            <h3 className="text-2xl font-bold text-[#0F2747]">
              Product Categories
            </h3>
          </div>
        </div>

        {/* Categories */}

        <div className="grid grid-cols-4 gap-x-10 gap-y-4 p-4 pt-2">
          {categories.map((category) => (
            <div key={category.id}>
              {/* Category */}

              <Link
                href={`/products?category=${encodeURIComponent(
                    category.name
                )}`}
                className="
                    group
                    mb-4
                    inline-block
                "
                >
                <h3
                    className="
                    text-xl
                    font-semibold
                    text-[#0F2747]
                    transition-colors
                    duration-300
                    "
                >
                    {category.name}
                </h3>

                <div
                    className="
                    mt-2
                    h-[1px]
                    w-0
                    bg-slate-700
                    transition-all
                    duration-300
                    group-hover:w-full
                    "
                />
                </Link>

              {/* Products */}

              <div>
                {category.products.map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.slug}`}
                    className="
                        flex
                        items-center
                        gap-3
                        border-b
                        border-slate-200
                        py-2
                        text-sm
                        text-slate-700
                        transition-all
                        duration-200
                        hover:text-[#0F2747]
                    "
                    >
                    <span className="text-slate-500">•</span>

                    <span className="hover:underline underline-offset-4">
                        {product.name}
                    </span>
                    </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}