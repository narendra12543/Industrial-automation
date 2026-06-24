import Link from "next/link";

import { auth } from "@/lib/auth";

export default async function DownloadsPage() {
  const session = await auth();
  const user = session?.user;

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            My Downloads
          </h1>

          <p className="mt-2 text-slate-600">
            Access brochure, catalog, and datasheet download history.
          </p>
        </div>

        {/* User Information */}
        <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm text-slate-500">
                Logged in as
              </p>

              <h2 className="text-lg font-semibold text-slate-900">
                {user.name}
              </h2>

              <p className="text-sm text-slate-600">
                {user.email}
              </p>
            </div>

            <div>
              <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
                {user.role}
              </span>
            </div>
          </div>
        </div>

        {/* Empty State */}
        <div className="mb-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="p-10 text-center">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-slate-100">
              <span className="text-3xl text-slate-400">
                📥
              </span>
            </div>

            <h2 className="text-2xl font-semibold text-slate-900">
              No Downloads Found
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-slate-600">
              Download brochures, catalogs, and datasheets
              from product pages to build your download history.
            </p>

            <div className="mt-6">
              <Link
                href="/products"
                className="inline-flex items-center rounded-lg bg-[#0F2747] px-6 py-3 font-medium text-white transition hover:bg-[#163A68]"
              >
                Browse Products
              </Link>
            </div>
          </div>
        </div>

        {/* Future Downloads Table */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-6 py-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-slate-900">
                Download History
              </h2>

              <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-orange-600">
                Coming Soon
              </span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                    Product
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                    Download Type
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                    Download Date
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td
                    colSpan={3}
                    className="px-6 py-10 text-center text-slate-500"
                  >
                    Download tracking functionality will be
                    available in a future module.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

