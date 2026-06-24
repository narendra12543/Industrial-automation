"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
  images: {
    imageUrl: string;
  }[];
  currentIndex: number;
}

export default function ProductLightbox({
  open,
  onClose,
  images,
  currentIndex,
}: Props) {
  const [index, setIndex] =
  useState(currentIndex);

  const previousImage = () => {
    setIndex((prev) =>
      prev === 0
        ? images.length - 1
        : prev - 1
    );
  };

  const nextImage = () => {
    setIndex((prev) =>
      prev === images.length - 1
        ? 0
        : prev + 1
    );
  };

  

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      switch (event.key) {
        case "Escape":
          onClose();
          break;

        case "ArrowLeft":
          previousImage();
          break;

        case "ArrowRight":
          nextImage();
          break;
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
  }, [open, onClose, images.length]);

  if (
    !open ||
    !images ||
    images.length === 0
  ) {
    return null;
  }

  return (
    <div
      className="
        fixed
        inset-0
        z-[100]
        flex
        items-center
        justify-center
        bg-black/90
      "
    >
      {/* Close */}

      <button
        onClick={onClose}
        className="
          absolute
          right-6
          top-6
          z-10
          text-white
          transition
          hover:opacity-80
        "
      >
        <X size={32} />
      </button>

      {/* Previous */}

      <button
        onClick={previousImage}
        className="
          absolute
          left-4
          z-10
          rounded-full
          bg-white/10
          p-3
          text-white
          backdrop-blur
          transition
          hover:bg-white/20
        "
      >
        <ChevronLeft size={36} />
      </button>

      {/* Main Image */}

      <div
        className="
          relative
          h-[80vh]
          w-[90vw]
          max-w-6xl
        "
      >
        <Image
          src={
            images[index].imageUrl
          }
          alt="Product Image"
          fill
          priority
          className="object-contain"
        />
      </div>

      {/* Next */}

      <button
        onClick={nextImage}
        className="
          absolute
          right-4
          z-10
          rounded-full
          bg-white/10
          p-3
          text-white
          backdrop-blur
          transition
          hover:bg-white/20
        "
      >
        <ChevronRight size={36} />
      </button>

      {/* Counter */}

      <div
        className="
          absolute
          bottom-6
          rounded-full
          bg-white/10
          px-4
          py-2
          text-sm
          text-white
          backdrop-blur
        "
      >
        {index + 1} / {images.length}
      </div>
    </div>
  );
}