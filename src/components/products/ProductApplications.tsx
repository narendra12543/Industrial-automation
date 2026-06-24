interface ProductApplicationsProps {
  applications: unknown;
}

export default function ProductApplications({
  applications,
}: ProductApplicationsProps) {
  if (
    !applications ||
    !Array.isArray(applications)
  ) {
    return null;
  }

  return (
    <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold text-[#0F2747]">
        Applications
      </h2>

      <div className="flex flex-wrap gap-3">
        {applications.map(
          (
            application,
            index
          ) => (
            <span
              key={index}
              className="rounded-full bg-[#0F2747] px-4 py-2 text-sm font-medium text-white"
            >
              {String(
                application
              )}
            </span>
          )
        )}
      </div>
    </div>
  );
}