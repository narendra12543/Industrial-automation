"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import {
  setPrimaryImage,
  updateImageAltText,
} from "@/actions/products";

import DeleteImageButton from "./DeleteImageButton";

interface ProductImageCardProps {
  image: {
    id: string;
    imageUrl: string;
    sortOrder: number;
    isPrimary: boolean;
    altText: string | null;
  };
}

export default function ProductImageCard({
  image,
}: ProductImageCardProps) {
  const router = useRouter();

  const [altText, setAltText] =
    useState(image.altText ?? "");

  const [savingAlt, setSavingAlt] =
    useState(false);

  const [settingPrimary, setSettingPrimary] =
    useState(false);

  const handleSaveAltText = async () => {
    try {
      setSavingAlt(true);

      const result =
        await updateImageAltText(
          image.id,
          altText
        );

      if (!result.success) {
        alert(result.message);
        return;
      }

      alert(
        "Alt text updated successfully."
      );

      router.refresh();
    } catch {
      alert(
        "Failed to update alt text."
      );
    } finally {
      setSavingAlt(false);
    }
  };

  const handleSetPrimary = async () => {
    try {
      setSettingPrimary(true);

      const result =
        await setPrimaryImage(
          image.id
        );

      if (!result.success) {
        alert(result.message);
        return;
      }

      alert(
        "Primary image updated successfully."
      );

      router.refresh();
    } catch {
      alert(
        "Failed to update primary image."
      );
    } finally {
      setSettingPrimary(false);
    }
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="relative h-56 w-full bg-slate-100">
        <Image
          src={image.imageUrl}
          alt={
            image.altText ||
            "Product Image"
          }
          fill
          className="object-cover"
        />
      </div>

      <div className="p-4">
        {image.isPrimary && (
          <div className="mb-3">
            <span className="inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
              PRIMARY IMAGE
            </span>
          </div>
        )}

        <p className="text-xs font-medium text-slate-500">
          Image URL
        </p>

        <p className="mt-1 truncate text-sm text-[#0F2747]">
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

        <div className="mt-4">
          <label className="mb-2 block text-xs font-medium text-slate-500">
            Alt Text (SEO)
          </label>

          <input
            type="text"
            maxLength={255}
            value={altText}
            onChange={(e) =>
              setAltText(
                e.target.value
              )
            }
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-[#0F2747] outline-none focus:border-[#0F2747]"
            placeholder="Enter image alt text"
          />
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={
              handleSaveAltText
            }
            disabled={savingAlt}
            className="rounded-lg border border-[#0F2747] px-3 py-1.5 text-sm text-[#0F2747] transition hover:bg-[#0F2747] hover:text-white"
          >
            {savingAlt
              ? "Saving..."
              : "Save Alt"}
          </button>

          {!image.isPrimary && (
            <button
              type="button"
              onClick={
                handleSetPrimary
              }
              disabled={
                settingPrimary
              }
              className="rounded-lg border border-[#0F2747] px-3 py-1.5 text-sm text-[#0F2747] transition hover:bg-[#0F2747] hover:text-white"
            >
              {settingPrimary
                ? "Updating..."
                : "Set Primary"}
            </button>
          )}

          <DeleteImageButton
            imageId={image.id}
          />
        </div>
      </div>
    </div>
  );
}