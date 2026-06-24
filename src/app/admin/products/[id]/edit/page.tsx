import Link from "next/link";

import {
  getProductById,
  getActiveCategories,
} from "@/actions/products";
import EditProductForm from "./EditProductForm";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditProductPage({
  params,
}: PageProps) {
  const { id } = await params;

  const [product, categories] = await Promise.all([
    getProductById(id),
    getActiveCategories(),
  ]);

  if (!product) {
    return (
      <div className="min-h-screen bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm">
            <h1 className="text-3xl font-bold text-[#0F2747]">
              Product Not Found
            </h1>

            <p className="mt-4 text-slate-600">
              The requested product could not be found.
            </p>

            <Link
              href="/admin/products"
              className="mt-6 inline-flex items-center justify-center rounded-lg bg-[#0F2747] px-6 py-3 font-medium text-white transition hover:bg-[#18385F]"
            >
              Back to Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <EditProductForm
      product={{
        id: product.id,
        categoryId: product.categoryId,
        name: product.name,
        slug: product.slug,
        shortDescription:
          product.shortDescription ?? "",
        description: product.description ?? "",
        specifications:
          typeof product.specifications === "string"
            ? product.specifications
            : JSON.stringify(
                product.specifications ?? ""
              ),
        features:
          typeof product.features === "string"
            ? product.features
            : JSON.stringify(product.features ?? ""),
        applications:
          typeof product.applications === "string"
            ? product.applications
            : JSON.stringify(
                product.applications ?? ""
              ),
        brochureUrl: product.brochureUrl ?? "",
        datasheetUrl: product.datasheetUrl ?? "",
        featured: product.featured,
        isActive: product.isActive,
      }}
      categories={categories}
    />
  );
}