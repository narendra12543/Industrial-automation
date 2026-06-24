"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { deleteProduct } from "@/actions/products";

interface DeleteProductButtonProps {
  productId: string;
}

export default function DeleteProductButton({
  productId,
}: DeleteProductButtonProps) {
  const router = useRouter();

  const [isDeleting, setIsDeleting] =
    useState(false);

  const handleDelete = async () => {
    const confirmed = window.confirm(
      "Delete Product\n\nAre you sure you want to delete this product?\nThis action cannot be undone."
    );

    if (!confirmed) {
      return;
    }

    try {
      setIsDeleting(true);

      const result =
        await deleteProduct(productId);

      if (!result.success) {
        alert(result.message);
        return;
      }

      alert(
        "Product deleted successfully."
      );

      router.refresh();
    } catch {
      alert(
        "Failed to delete product."
      );
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleDelete}
      disabled={isDeleting}
      className="rounded-lg border border-red-500 px-3 py-1.5 text-sm text-red-600 transition hover:bg-red-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-70"
    >
      {isDeleting
        ? "Deleting..."
        : "Delete"}
    </button>
  );
}