"use client";

import Link from "next/link";

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
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ProductMegaMenu({
  categories,
  open,
  setOpen,
}: ProductMegaMenuProps) {
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Trigger */}

      <Link
        href="/products"
        onClick={() => setOpen(false)}
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
          -translate-x-[49%]
          mt-5
          w-[1150px]
          overflow-hidden
          rounded-b-2xl
          border
          border-slate-200/70
          bg-gradient-to-br
          from-white
          via-slate-50
          to-white
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
        {/* Background Effects */}

        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-orange-200/60 blur-[120px]" />

        <div className="absolute -top-20 right-0 h-80 w-80 rounded-full bg-blue-200/60 blur-[120px]" />

        <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-slate-100/60 blur-[120px]" />

        <div className="absolute bottom-10 right-1/4 h-60 w-60 rounded-full bg-cyan-100/40 blur-[100px]" />

        <div className="absolute top-1/2 left-1/4 h-52 w-52 rounded-full bg-orange-100/40 blur-[90px]" />

        {/* Content */}

        <div className="relative z-10">
          {/* Categories */}

          <div className="grid grid-cols-4 gap-x-10 gap-y-4 p-5">
            {categories.map((category) => (
              <div key={category.id}>
                {/* Category */}

                <Link
                  href={`/products?category=${encodeURIComponent(
                    category.name
                  )}`}
                  onClick={() => setOpen(false)}
                  className="group mb-4 inline-block"
                >
                  <h3
                    className="
                      text-lg
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
                      w-0
                      bg-[#0F2747]
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
                      onClick={() => setOpen(false)}
                      className="
                        flex
                        items-center
                        gap-3
                        border-b
                        border-slate-200/70
                        py-1
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
    </div>
  );
}