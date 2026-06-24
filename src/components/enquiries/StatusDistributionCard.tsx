interface StatusDistributionCardProps {
  analytics: {
    newEnquiries: number;
    contactedEnquiries: number;
    quotationSentEnquiries: number;
    negotiationEnquiries: number;
    wonEnquiries: number;
    lostEnquiries: number;
  };
}

export default function StatusDistributionCard({
  analytics,
}: StatusDistributionCardProps) {
  const statuses = [
    {
      label: "NEW",
      value: analytics.newEnquiries,
      color: "bg-blue-500",
    },
    {
      label: "CONTACTED",
      value: analytics.contactedEnquiries,
      color: "bg-yellow-500",
    },
    {
      label: "QUOTATION_SENT",
      value:
        analytics.quotationSentEnquiries,
      color: "bg-purple-500",
    },
    {
      label: "NEGOTIATION",
      value:
        analytics.negotiationEnquiries,
      color: "bg-orange-500",
    },
    {
      label: "WON",
      value: analytics.wonEnquiries,
      color: "bg-green-500",
    },
    {
      label: "LOST",
      value: analytics.lostEnquiries,
      color: "bg-red-500",
    },
  ];

  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-bold text-[#0F2747]">
        Status Distribution
      </h2>

      <div className="space-y-4">
        {statuses.map(
          (status) => (
            <div
                key={status.label}
                className="flex items-center justify-between rounded-lg border border-slate-200 p-3"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`h-3 w-3 rounded-full ${status.color}`}
                />

                <span className="text-sm font-medium text-[#0F2747]">
                  {status.label}
                </span>
              </div>

              <span className="font-bold text-[#0F2747]">
                {status.value}
              </span>
            </div>
          )
        )}
      </div>
    </div>
  );
}