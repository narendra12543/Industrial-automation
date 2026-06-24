"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

import { createCategory } from "@/actions/categories";
import { createCategorySchema } from "@/validations/category";

export default function CreateCategoryPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [isActive, setIsActive] = useState(true);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setError("");
    setSuccess("");

    const validationResult =
      createCategorySchema.safeParse({
        name,
        slug,
        description,
        isActive,
      });

    if (!validationResult.success) {
      setError(
        validationResult.error.issues[0]?.message ??
          "Invalid form data."
      );
      return;
    }

    try {
      setLoading(true);

      const response = await createCategory({
        name,
        slug,
        description,
        isActive,
      });

      if (!response.success) {
        setError(response.message);
        return;
      }

      setSuccess(response.message);

      setTimeout(() => {
        router.push("/admin/categories");
        router.refresh();
      }, 1000);
    } catch {
      setError(
        "Failed to create category. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-4 flex items-center gap-2 text-sm text-slate-500">
          <span>Admin</span>
          <span>/</span>
          <span>Categories</span>
          <span>/</span>
          <span className="font-medium text-slate-900">
            Create
          </span>
        </div>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            Create Category
          </h1>

          <p className="mt-2 text-slate-600">
            Create a new product category for organizing
            products.
          </p>
        </div>

        {/* Form Card */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 bg-[#0F2747] px-6 py-4">
            <h2 className="text-lg font-semibold text-white">
              Category Information
            </h2>
          </div>

          <div className="p-6">
            {error && (
              <div className="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                {error}
              </div>
            )}

            {success && (
              <div className="mb-6 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
                {success}
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Category Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-[#0F2747]"
                >
                  Category Name *
                </label>

                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(event) =>
                    setName(event.target.value)
                  }
                  placeholder="Enter category name"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-[#0F2747] focus:ring-1 focus:ring-[#0F2747]"
                />

                <p className="mt-2 text-sm text-slate-500">
                  Category name is required.
                </p>
              </div>

              {/* Slug */}
              <div>
                <label
                  htmlFor="slug"
                  className="mb-2 block text-sm font-medium text-[#0F2747]"
                >
                  Slug *
                </label>

                <input
                  id="slug"
                  type="text"
                  value={slug}
                  onChange={(event) =>
                    setSlug(event.target.value)
                  }
                  placeholder="industrial-automation"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-[#0F2747] focus:ring-1 focus:ring-[#0F2747]"
                />

                <p className="mt-2 text-sm text-slate-500">
                  Slug is required and should be unique.
                </p>
              </div>

              {/* Description */}
              <div>
                <label
                  htmlFor="description"
                  className="mb-2 block text-sm font-medium text-[#0F2747]"
                >
                  Description
                </label>

                <textarea
                  id="description"
                  rows={5}
                  value={description}
                  onChange={(event) =>
                    setDescription(event.target.value)
                  }
                  placeholder="Enter category description"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-[#0F2747] focus:ring-1 focus:ring-[#0F2747]"
                />

                <p className="mt-2 text-sm text-slate-500">
                  Optional description for category details.
                </p>
              </div>

              {/* Active Status */}
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={isActive}
                    onChange={(event) =>
                      setIsActive(event.target.checked)
                    }
                    className="h-4 w-4 rounded border-slate-300 text-[#0F2747] focus:ring-[#0F2747]"
                  />

                  <span className="font-medium text-slate-700">
                    Active Status
                  </span>
                </label>

                <p className="mt-2 text-sm text-slate-500">
                  Active categories will be available for
                  product assignment and filtering.
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center rounded-lg bg-[#0F2747] px-6 py-3 font-medium text-white transition hover:bg-[#18385F] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {loading
                    ? "Creating..."
                    : "Create Category"}
                </button>

                <Link
                  href="/admin/categories"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}