import Link from "next/link";
import { notFound, redirect } from "next/navigation";

import { auth } from "@/lib/auth";
import { getEnquiryById } from "@/actions/enquiries";
import UserEnquiriesTable from "@/components/enquiries/UserEnquiriesTable";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
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

export default async function UserEnquiryDetailsPage({
  params,
}: PageProps) {
  const session =
    await auth();

  if (!session?.user?.id) {
    redirect("/login");
  }

  const { id } =
    await params;

  const enquiry =
    await getEnquiryById(id);

  if (!enquiry) {
    notFound();
  }

  /*
   Security:
   User can only view
   own enquiries
  */

  if (
    enquiry.userId !==
    session.user.id
  ) {
    redirect(
      "/dashboard/enquiries"
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#0F2747]">
            Enquiry Details
          </h1>

          <p className="mt-2 text-slate-600">
            Track enquiry progress and
            status updates.
          </p>
        </div>

        <Link
          href="/dashboard/enquiries"
          className="rounded-lg border border-[#0F2747] px-4 py-2 text-[#0F2747]"
        >
          Back
        </Link>
      </div>

      {/* Product Information */}

      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <h2 className="mb-5 text-xl font-bold text-[#0F2747]">
          Product Information
        </h2>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <p className="text-sm text-slate-500">
              Product Name
            </p>

            <p className="mt-1 font-semibold text-[#0F2747]">
              {enquiry.product?.name}
            </p>
          </div>

          <div>
            <p className="text-sm text-slate-500">
              Category
            </p>

            <p className="mt-1 font-semibold text-[#0F2747]">
              {enquiry.product?.category
                ?.name ?? "-"}
            </p>
          </div>
        </div>
      </div>

      {/* Enquiry Information */}

      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <h2 className="mb-5 text-xl font-bold text-[#0F2747]">
          Enquiry Information
        </h2>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <p className="text-sm text-slate-500">
              Quantity
            </p>

            <p className="mt-1 font-semibold text-[#0F2747]">
              {enquiry.quantity}
            </p>
          </div>

          <div>
            <p className="text-sm text-slate-500">
              Current Status
            </p>

            <span
              className={`mt-2 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getStatusBadgeClass(
                enquiry.status
              )}`}
            >
              {enquiry.status}
            </span>
          </div>

          <div>
            <p className="text-sm text-slate-500">
              Created Date
            </p>

            <p className="mt-1 font-semibold text-[#0F2747]">
              {new Date(
                enquiry.createdAt
              ).toLocaleString()}
            </p>
          </div>

          <div>
            <p className="text-sm text-slate-500">
              Updated Date
            </p>

            <p className="mt-1 font-semibold text-[#0F2747]">
              {new Date(
                enquiry.updatedAt
              ).toLocaleString()}
            </p>
          </div>
        </div>

        {enquiry.message && (
          <div className="mt-6">
            <p className="text-sm text-slate-500">
              Message
            </p>

            <div className="mt-2 rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="whitespace-pre-line text-[#0F2747]">
                {enquiry.message}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Status Timeline Placeholder */}

      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-[#0F2747]">
            Status Timeline
          </h2>

          <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-orange-600">
            Coming Soon
          </span>
        </div>

        <p className="mt-4 text-slate-600">
          Future updates will show
          complete enquiry history and
          status progression.
        </p>
      </div>
    </div>
  );
}