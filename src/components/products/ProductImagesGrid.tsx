"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useEffect } from "react";
import ProductImageCard from "./ProductImageCard";
import {
  DndContext,
  closestCenter,
  DragEndEvent,
} from "@dnd-kit/core";

import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";

import { CSS } from "@dnd-kit/utilities";

import {
  updateImageSortOrder,
} from "@/actions/products";

import DeleteImageButton from "./DeleteImageButton";

interface ProductImage {
  id: string;
  imageUrl: string;
  sortOrder: number;
  isPrimary: boolean;
  altText: string | null;
}

interface ProductImagesGridProps {
  images: ProductImage[];
}

function SortableImage({
  image,
}: {
  image: ProductImage;
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: image.id,
  });

  const style = {
    transform: CSS.Transform.toString(
      transform
    ),
    transition,
  };
  

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`overflow-hidden rounded-2xl border bg-white shadow-sm ${
        isDragging
          ? "border-[#0F2747] opacity-60"
          : "border-slate-200"
      }`}
    >
      <div
        {...attributes}
        {...listeners}
        className="cursor-move bg-[#0F2747] px-4 py-2 text-sm font-medium text-white"
      >
        ☰ Drag Image
      </div>

      <div className="relative h-56 w-full bg-slate-100">
        <Image
          src={image.imageUrl}
          alt="Product Image"
          fill
          className="object-cover"
        />
      </div>

      <div className="p-4">
        <p className="mb-2 text-xs font-medium text-slate-500">
          Image URL
        </p>

        <p className="truncate text-sm text-[#0F2747]">
          {image.imageUrl}
        </p>

        <div className="mt-4">
          <p className="text-xs font-medium text-slate-500">
            Sort Order
          </p>

          <p className="mt-1 font-semibold text-[#0F2747]">
            {image.sortOrder}
          </p>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          <DeleteImageButton
            imageId={image.id}
          />

          <button
            disabled
            className="rounded-lg border border-[#0F2747] px-3 py-1.5 text-sm text-[#0F2747] opacity-60"
          >
            Set Primary
          </button>

          <span className="rounded-full bg-orange-50 px-2 py-1 text-xs font-medium text-orange-600">
            Coming Soon
          </span>
        </div>
      </div>
    </div>
  );
}

export default function ProductImagesGrid({
  images,
}: ProductImagesGridProps) {
    
  const router = useRouter();

  const [items, setItems] =
    useState(images);

  const [saving, setSaving] =
    useState(false);

  const handleDragEnd = (
    event: DragEndEvent
  ) => {
    const {
      active,
      over,
    } = event;

    if (!over) return;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex =
          items.findIndex(
            (item) =>
              item.id === active.id
          );

        const newIndex =
          items.findIndex(
            (item) =>
              item.id === over.id
          );

        return arrayMove(
          items,
          oldIndex,
          newIndex
        );
      });
    }
  };

  const handleSave = async () => {
    try {
      setSaving(true);

      const payload = items.map(
        (image, index) => ({
          id: image.id,
          sortOrder: index,
        })
      );

      const result =
        await updateImageSortOrder(
          payload
        );

      if (!result.success) {
        alert(result.message);
        return;
      }

      alert(
        "Image order updated successfully."
      );

      router.refresh();
    } catch {
      alert(
        "Failed to update image order."
      );
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      <div className="mb-6 flex justify-end">
        <button
          onClick={handleSave}
          disabled={saving}
          className="rounded-lg bg-[#0F2747] px-5 py-3 font-medium text-white transition hover:bg-[#18385F] disabled:opacity-60"
        >
          {saving
            ? "Saving..."
            : "Save Order"}
        </button>
      </div>

      <DndContext
        collisionDetection={
          closestCenter
        }
        onDragEnd={
          handleDragEnd
        }
      >
        <SortableContext
          items={items.map(
            (item) => item.id
          )}
          strategy={
            verticalListSortingStrategy
          }
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {items.map((image) => (
              <ProductImageCard
                key={image.id}
                image={image}
                />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </>
  );
}