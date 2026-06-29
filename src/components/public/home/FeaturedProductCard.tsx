"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

interface FeaturedProductCardProps {
  product: {
    id: string;
    name: string;
    slug: string;
    shortDescription: string | null;
    featured: boolean;
    category: {
      name: string;
    } | null;
    images: {
      imageUrl: string;
      altText: string | null;
      isPrimary: boolean;
    }[];
  };
}

export default function FeaturedProductCard({
  product,
}: FeaturedProductCardProps) {
  const primaryImage =
    product.images.find(
      (image) => image.isPrimary
    ) ?? product.images[0];

  return (
    <Link
      href={`/products/${product.slug}`}
      className="
        group
        block
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        shadow-sm
        max-w-[280px]
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-orange-300
        hover:shadow-2xl
      "
    >
      {/* Image */}

      <div
        className="
          relative
          aspect-[4/3]
          overflow-hidden
          rounded-t-3xl
          bg-white
          flex
          items-center
          justify-center
        "
      >
        <Image
          src={
            primaryImage?.imageUrl ??
            "/placeholder-product.jpg"
          }
          alt={
            primaryImage?.altText ??
            product.name
          }
          fill
          className="
            object-contain
            p-4
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          {/* {product.featured && (
            <div
              className="
                absolute
                left-1
                top-2
                flex
                items-center
                gap-1
                rounded-full
                bg-gray-500
                px-3
                py-1
                text-xs
                font-semibold
                text-white
                shadow-lg
              "
            >
              <Star size={12} fill="white" />
              Featured
            </div>
          )} */}

        
      </div>

      {/* Content */}
        {/* {product.category && (
          <div
            className="
              absolute
              rounded-full
              border-amber-500
              bg-white/90
              px-3
              py-1
              text-xs
              font-medium
              text-[#0F2747]
              backdrop-blur
            "
          >
            {product.category.name}
          </div>
        )} */}
      <div className="p-6">
        <h3
          className="
            line-clamp-2
            text-xl
            font-bold
            text-[#0F2747]
            transition-colors
          "
        >
          {product.name}
        </h3>
      </div>
    </Link>
  );
}