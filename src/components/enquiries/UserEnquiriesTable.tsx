"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

interface Enquiry {
  id: string;
  quantity: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;

  product: {
    name: string;
  } | null;
}

interface Props {
  enquiries: Enquiry[];
}

function getStatusBadgeClass(
  status: string
) {
  switch (status) {
    case "NEW":
      return "bg-blue-100 text-blue-700";

    case "CONTACTED":
      return "bg-yellow-100 text-yellow-700";

    case "QUOTATION_SENT":
      return "bg-purple-100 text-purple-700";

    case "NEGOTIATION":
      return "bg-orange-100 text-orange-700";

    case "WON":
      return "bg-green-100 text-green-700";

    case "LOST":
      return "bg-red-100 text-red-700";

    default:
      return "bg-slate-100 text-slate-700";
  }
}

export default function UserEnquiriesTable({
  enquiries,
}: Props) {
  const [search, setSearch] =
    useState("");

  const [page, setPage] =
    useState(1);

  const perPage = 10;

  const filtered =
    useMemo(() => {
      return enquiries.filter(
        (enquiry) =>
          enquiry.product?.name
            ?.toLowerCase()
            .includes(
              search.toLowerCase()
            ) ||
          enquiry.status
            .toLowerCase()
            .includes(
              search.toLowerCase()
            )
      );
    }, [enquiries, search]);

  const totalPages =
    Math.ceil(
      filtered.length /
        perPage
    );

  const paginated =
    filtered.slice(
      (page - 1) * perPage,
      page * perPage
    );

  return (
    <div className="space-y-6">
      {/* Search */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <input
          type="text"
          placeholder="Search by Product or Status..."
          value={search}
          onChange={(e) => {
            setSearch(
              e.target.value
            );
            setPage(1);
          }}
          className="w-full rounded-lg border border-slate-300 px-4 py-3 text-[#0F2747] outline-none focus:border-[#0F2747]"
        />
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-50">
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#0F2747]">
                  Product
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-[#0F2747]">
                  Quantity
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-[#0F2747]">
                  Status
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-[#0F2747]">
                  Created
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-[#0F2747]">
                  Updated
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-[#0F2747]">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {paginated.length === 0 ? (
                <tr>
                  <td
                    colSpan={6}
                    className="px-6 py-12 text-center"
                  >
                    <h3 className="text-lg font-semibold text-[#0F2747]">
                      No Enquiries Found
                    </h3>

                    <p className="mt-2 text-slate-500">
                      Try a different search term.
                    </p>
                  </td>
                </tr>
              ) : (
                paginated.map(
                  (enquiry) => (
                    <tr
                      key={enquiry.id}
                      className="border-t"
                    >
                      <td className="px-6 py-4 text-[#0F2747]">
                        {enquiry.product?.name}
                      </td>

                      <td className="px-6 py-4 text-[#0F2747]">
                        {enquiry.quantity}
                      </td>

                      <td className="px-6 py-4">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusBadgeClass(
                            enquiry.status
                          )}`}
                        >
                          {enquiry.status}
                        </span>
                      </td>

                      <td className="px-6 py-4 text-[#0F2747]">
                        {new Date(
                          enquiry.createdAt
                        ).toLocaleDateString()}
                      </td>

                      <td className="px-6 py-4 text-[#0F2747]">
                        {new Date(
                          enquiry.updatedAt
                        ).toLocaleDateString()}
                      </td>

                      <td className="px-6 py-4">
                        <Link
                          href={`/dashboard/enquiries/${enquiry.id}`}
                          className="rounded-lg bg-[#0F2747] px-4 py-2 text-sm text-white transition hover:bg-[#18385F]"
                        >
                          View
                        </Link>
                      </td>
                    </tr>
                  )
                )
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2">
          {Array.from(
            {
              length: totalPages,
            },
            (_, index) => (
              <button
                key={index}
                onClick={() =>
                  setPage(
                    index + 1
                  )
                }
                className={`rounded-lg px-4 py-2 transition ${
                  page === index + 1
                    ? "bg-[#0F2747] text-white"
                    : "border border-[#0F2747] text-[#0F2747]"
                }`}
              >
                {index + 1}
              </button>
            )
          )}
        </div>
      )}
    </div>
  );
}