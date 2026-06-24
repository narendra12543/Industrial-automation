import Link from "next/link";

interface RecentEnquiry {
  id: string;
  name: string;
  status: string;
  createdAt: Date;
  product: {
    name: string;
  } | null;
}

interface RecentEnquiriesWidgetProps {
  enquiries: RecentEnquiry[];
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

export default function RecentEnquiriesWidget({
  enquiries,
}: RecentEnquiriesWidgetProps) {
  return (
    <div className="rounded-xl border bg-white p-4 shadow-sm">
      <div className="mb-5">
        <h2 className="text-xl font-bold text-[#0F2747]">
          Recent Enquiries
        </h2>
      </div>
    
      <div className="space-y-1">
        {enquiries.map(
          (enquiry) => (
            <div
              key={enquiry.id}
              className="flex flex-col gap-3 rounded-lg border border-slate-200 p-2 lg:flex-row lg:items-center lg:justify-between"
            >
              <div>
                <h3 className="font-semibold text-[#0F2747]">
                  {enquiry.name}
                </h3>

                <p className="text-sm text-slate-600">
                  {enquiry.product?.name}
                </p>

                <p className="text-xs text-slate-500">
                  {new Date(
                    enquiry.createdAt
                  ).toLocaleDateString()}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusBadgeClass(
                    enquiry.status
                  )}`}
                >
                  {enquiry.status}
                </span>

                <Link
                  href={`/admin/enquiries/${enquiry.id}`}
                  className="rounded-lg bg-[#0F2747] px-3 py-2 text-sm text-white"
                >
                  View
                </Link>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}