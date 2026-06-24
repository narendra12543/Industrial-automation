"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { deleteCategory } from "@/actions/categories";

interface DeleteCategoryButtonProps {
  categoryId: string;
}

export default function DeleteCategoryButton({
  categoryId,
}: DeleteCategoryButtonProps) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [showConfirm, setShowConfirm] =
    useState(false);

  const handleDelete = async () => {
    try {
      setLoading(true);

      const response =
        await deleteCategory(categoryId);

      if (!response.success) {
        alert(response.message);
        return;
      }

      alert(response.message);

      router.refresh();
    } catch {
      alert(
        "Failed to delete category. Please try again."
      );
    } finally {
      setLoading(false);
      setShowConfirm(false);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setShowConfirm(true)}
        disabled={loading}
        className="rounded-lg border border-red-300 px-3 py-1.5 text-sm text-red-600 transition hover:bg-red-50 disabled:opacity-60"
      >
        {loading ? "Deleting..." : "Delete"}
      </button>

      {showConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
            <h3 className="text-lg font-semibold text-slate-900">
              Delete Category
            </h3>

            <p className="mt-3 text-slate-600">
              Are you sure you want to delete
              this category?
            </p>

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() =>
                  setShowConfirm(false)
                }
                disabled={loading}
                className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleDelete}
                disabled={loading}
                className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 disabled:opacity-60"
              >
                {loading
                  ? "Deleting..."
                  : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}