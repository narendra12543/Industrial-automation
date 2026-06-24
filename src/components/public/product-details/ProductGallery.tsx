"use client";

import { useState } from "react";
import Image from "next/image";

import ProductLightbox from "./ProductLightbox";

interface Props {
  images: {
    imageUrl: string;
  }[];
}

export default function ProductGallery({
  images,
}: Props) {
  const [selectedImage, setSelectedImage] =
    useState(0);

  const [lightboxOpen, setLightboxOpen] =
    useState(false);

  if (!images?.length) {
    return (
      <div
        className="
          flex
          h-[420px]
          items-center
          justify-center
          rounded-3xl
          border
          border-slate-200
          bg-slate-50
          text-slate-500
        "
      >
        No Image Available
      </div>
    );
  }

  return (
    <>
      <div
        className="
          overflow-hidden
          rounded-3xl
          border
          border-slate-200
          bg-white
          shadow-sm
        "
      >
        {/* Main Image */}

        <div
          onClick={() =>
            setLightboxOpen(true)
          }
          className="
            relative
            h-[420px]
            cursor-zoom-in
            overflow-hidden
            bg-gradient-to-br
            from-slate-50
            to-white
          "
        >
          <Image
            src={
              images[selectedImage]
                .imageUrl
            }
            alt="Product"
            fill
            priority
            sizes="(max-width:768px) 100vw, 50vw"
            className="
              object-contain
              p-6
              transition-transform
              duration-500
              hover:scale-105
            "
          />

          <div
            className="
              absolute
              bottom-4
              right-4
              rounded-full
              bg-black/70
              px-3
              py-1
              text-xs
              text-white
            "
          >
            {selectedImage + 1}/
            {images.length}
          </div>
        </div>

        {/* Thumbnails */}

        {images.length > 1 && (
          <div className="border-t p-4">
            <div className="flex gap-3 overflow-x-auto">
              {images.map(
                (
                  image,
                  index
                ) => (
                  <button
                    key={index}
                    onClick={() =>
                      setSelectedImage(
                        index
                      )
                    }
                    className={`
                      relative
                      h-20
                      w-20
                      flex-shrink-0
                      overflow-hidden
                      rounded-xl
                      border-2
                      transition-all
                      ${
                        selectedImage ===
                        index
                          ? "border-[#0F2747] shadow-md"
                          : "border-slate-200 hover:border-slate-300"
                      }
                    `}
                  >
                    <Image
                      src={
                        image.imageUrl
                      }
                      alt={`Product ${
                        index + 1
                      }`}
                      fill
                      sizes="80px"
                      className="
                        object-cover
                      "
                    />
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </div>

      <ProductLightbox
        open={lightboxOpen}
        onClose={() =>
          setLightboxOpen(false)
        }
        images={images}
        currentIndex={
          selectedImage
        }
      />
    </>
  );
}