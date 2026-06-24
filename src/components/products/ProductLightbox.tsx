"use client";

import Image from "next/image";
import { useEffect } from "react";

interface ProductImage {
  id: string;
  imageUrl: string;
  altText: string | null;
}

interface ProductLightboxProps {
  images: ProductImage[];
  currentIndex: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

export default function ProductLightbox({
  images,
  currentIndex,
  onClose,
  onPrevious,
  onNext,
}: ProductLightboxProps) {
  useEffect(() => {
    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowLeft") {
        onPrevious();
      }

      if (event.key === "ArrowRight") {
        onNext();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [onClose, onPrevious, onNext]);

  const image =
    images[currentIndex];

  if (!image) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
      <button
        onClick={onClose}
        className="absolute right-6 top-6 text-4xl text-white"
      >
        ×
      </button>

      <button
        onClick={onPrevious}
        className="absolute left-4 text-4xl text-white"
      >
        ‹
      </button>

      <div className="relative h-[80vh] w-full max-w-6xl">
        <Image
          src={image.imageUrl}
          alt={
            image.altText ??
            "Product Image"
          }
          fill
          className="object-contain"
        />
      </div>

      <button
        onClick={onNext}
        className="absolute right-4 text-4xl text-white"
      >
        ›
      </button>
    </div>
  );
}