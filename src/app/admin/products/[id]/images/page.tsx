import Image from "next/image";
import Link from "next/link";
import ProductImagesUploader from "@/components/products/ProductImagesUploader";
import DeleteImageButton from "@/components/products/DeleteImageButton";
import {
  getProductById,
  getProductImages,
} from "@/actions/products";
import ProductImagesGrid from "@/components/products/ProductImagesGrid";

interface ProductImagesPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductImagesPage({
  params,
}: ProductImagesPageProps) {
  const { id } = await params;

  const product = await getProductById(id);

  if (!product) {
    return (
      <div className="min-h-screen bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 py-10">
          <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm">
            <h1 className="text-3xl font-bold text-[#0F2747]">
              Product Not Found
            </h1>

            <p className="mt-3 text-slate-600">
              The requested product does not exist.
            </p>

            <Link
              href="/admin/products"
              className="mt-6 inline-flex rounded-lg bg-[#0F2747] px-5 py-3 font-medium text-white transition hover:bg-[#18385F]"
            >
              Back to Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const images = await getProductImages(id);
  const primaryImage = images.find(
    (image) => image.isPrimary
    );

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <Link
                href="/admin/products"
                className="text-sm font-medium text-[#0F2747] hover:underline"
              >
                ← Back to Products
              </Link>

              <h1 className="mt-3 text-3xl font-bold text-[#0F2747]">
                Product Images
              </h1>

              <p className="mt-2 text-slate-600">
                Manage images for this product.
              </p>
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="mb-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 bg-[#0F2747] px-6 py-4">
            <h2 className="text-lg font-semibold text-white">
              Product Information
            </h2>
          </div>

          <div className="grid gap-6 p-6 md:grid-cols-3">
            <div>
              <p className="text-sm font-medium text-slate-500">
                Product Name
              </p>

              <p className="mt-1 font-semibold text-[#0F2747]">
                {product.name}
              </p>
            </div>

            <div>
              <p className="text-sm font-medium text-slate-500">
                Category
              </p>

              <p className="mt-1 font-semibold text-[#0F2747]">
                {product.category?.name}
              </p>
            </div>

            <div>
              <p className="text-sm font-medium text-slate-500">
                Status
              </p>

              {product.isActive ? (
                <span className="mt-1 inline-flex rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                  Active
                </span>
              ) : (
                <span className="mt-1 inline-flex rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-600">
                  Inactive
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="mb-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-slate-500">
              Total Images
            </p>

            <p className="mt-3 text-3xl font-bold text-[#0F2747]">
              {images.length}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-slate-500">
                Primary Image
            </p>

            <p className="mt-3 text-3xl font-bold text-[#0F2747]">
                {primaryImage ? "1" : "0"}
            </p>

            <p className="mt-2 text-xs text-slate-500">
                {primaryImage
                ? "Primary Image Set"
                : "No Primary Image"}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-slate-500">
              Gallery Images
            </p>

            <p className="mt-3 text-3xl font-bold text-[#0F2747]">
              {images.length}
            </p>

            <p className="mt-2 text-xs text-slate-500">
              Gallery Count
            </p>
          </div>
        </div>

        {/* Upload Section */}
        <ProductImagesUploader productId={id} />

        {/* Images Grid */}
        {images.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center shadow-sm">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-slate-100">
              <span className="text-3xl text-slate-400">
                🖼️
              </span>
            </div>

            <h2 className="text-2xl font-semibold text-[#0F2747]">
              No Images Found
            </h2>

            <p className="mx-auto mt-3 max-w-lg text-slate-600">
              Upload product images to build the gallery.
            </p>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-[#0F2747]">
                Product Gallery
              </h2>
            </div>

                <ProductImagesGrid
                images={images}
            />
          </div>
        )}
      </div>
    </div>
  );
}
