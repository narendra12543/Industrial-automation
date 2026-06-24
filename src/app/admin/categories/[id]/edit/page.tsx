"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ChangeEvent,
  FormEvent,
  useEffect,
  useState,
} from "react";

import {
  getCategories,
  updateCategory,
} from "@/actions/categories";

interface EditCategoryPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function EditCategoryPage({
  params,
}: EditCategoryPageProps) {
  const router = useRouter();

  const [categoryId, setCategoryId] = useState("");

  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [isActive, setIsActive] = useState(true);

  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [slugManuallyEdited, setSlugManuallyEdited] =
    useState(false);

  const generateSlug = (value: string): string => {
    return value
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  };

  useEffect(() => {
    const loadCategory = async () => {
      try {
        const resolvedParams = await params;

        setCategoryId(resolvedParams.id);

        const categories = await getCategories();

        const category = categories.find(
          (item) => item.id === resolvedParams.id
        );

        if (!category) {
          setError("Category not found.");
          return;
        }

        setName(category.name);
        setSlug(category.slug);
        setDescription(category.description ?? "");
        setIsActive(category.isActive);
      } catch {
        setError("Failed to load category.");
      } finally {
        setPageLoading(false);
      }
    };

    loadCategory();
  }, [params]);

  const handleNameChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;

    setName(value);

    if (!slugManuallyEdited) {
      setSlug(generateSlug(value));
    }
  };

  const handleSlugChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setSlugManuallyEdited(true);
    setSlug(event.target.value);
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setError("");
    setSuccess("");

    try {
      setLoading(true);

      const response = await updateCategory({
        id: categoryId,
        name,
        slug,
        description,
        isActive,
      });

      if (!response.success) {
        setError(response.message);
        return;
      }

      setSuccess("Category updated successfully.");

      setTimeout(() => {
        router.push("/admin/categories");
        router.refresh();
      }, 1000);
    } catch {
      setError(
        "Failed to update category. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  if (pageLoading) {
    return (
      <div className="min-h-screen bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 py-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
            <p className="text-slate-600">
              Loading category...
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (error === "Category not found.") {
    return (
      <div className="min-h-screen bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 py-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
            <h1 className="text-2xl font-bold text-slate-900">
              Category not found.
            </h1>

            <p className="mt-3 text-slate-600">
              The requested category could not be found.
            </p>

            <Link
              href="/admin/categories"
              className="mt-6 inline-flex rounded-lg bg-[#0F2747] px-5 py-3 text-white"
            >
              Back to Categories
            </Link>
          </div>
        </div>
      </div>
    );
  }

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
            Edit
          </span>
        </div>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            Edit Category
          </h1>

          <p className="mt-2 text-slate-600">
            Update category information and settings.
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
            {error && error !== "Category not found." && (
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
                  onChange={handleNameChange}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-[#0F2747] focus:ring-1 focus:ring-[#0F2747]"
                />
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
                  onChange={handleSlugChange}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-[#0F2747] focus:ring-1 focus:ring-[#0F2747]"
                />
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
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-[#0F2747] focus:ring-1 focus:ring-[#0F2747]"
                />
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

                  <span className="font-medium text-[#0F2747]">
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
                    ? "Updating..."
                    : "Update Category"}
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