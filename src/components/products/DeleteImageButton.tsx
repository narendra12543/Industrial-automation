"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { deleteProductImage } from "@/actions/products";

interface DeleteImageButtonProps {
  imageId: string;
}

export default function DeleteImageButton({
  imageId,
}: DeleteImageButtonProps) {
  const router = useRouter();

  const [loading, setLoading] =
    useState(false);

  const handleDelete = async () => {
    const confirmed = window.confirm(
      "Delete Image\n\nAre you sure you want to delete this image?\nThis action cannot be undone."
    );

    if (!confirmed) {
      return;
    }

    try {
      setLoading(true);

      const result =
        await deleteProductImage(
          imageId
        );

      if (!result.success) {
        alert(result.message);
        return;
      }

      alert(
        "Image deleted successfully."
      );

      router.refresh();
    } catch {
      alert(
        "Failed to delete image."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleDelete}
      disabled={loading}
      className="rounded-lg border border-red-500 px-3 py-1.5 text-sm text-red-600 transition hover:bg-red-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
    >
      {loading
        ? "Deleting..."
        : "Delete"}
    </button>
  );
}