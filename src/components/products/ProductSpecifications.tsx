interface ProductSpecificationsProps {
  specifications: unknown;
}

export default function ProductSpecifications({
  specifications,
}: ProductSpecificationsProps) {
  if (
    !specifications ||
    typeof specifications !== "object"
  ) {
    return null;
  }

  const entries =
    Object.entries(
      specifications as Record<
        string,
        string
      >
    );

  if (entries.length === 0) {
    return null;
  }

  return (
    <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold text-[#0F2747]">
        Specifications
      </h2>

      <div className="overflow-hidden rounded-xl border border-slate-200">
        <table className="w-full">
          <tbody>
            {entries.map(
              ([key, value]) => (
                <tr
                  key={key}
                  className="border-b border-slate-200 last:border-0"
                >
                  <td className="bg-slate-50 px-4 py-3 font-medium text-[#0F2747]">
                    {key}
                  </td>

                  <td className="px-4 py-3 text-slate-700">
                    {value}
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}