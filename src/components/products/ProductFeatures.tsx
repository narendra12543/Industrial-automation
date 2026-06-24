interface ProductFeaturesProps {
  features: unknown;
}

export default function ProductFeatures({
  features,
}: ProductFeaturesProps) {
  if (
    !features ||
    !Array.isArray(features)
  ) {
    return null;
  }

  return (
    <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold text-[#0F2747]">
        Features
      </h2>

      <ul className="space-y-3">
        {features.map(
          (feature, index) => (
            <li
              key={index}
              className="flex items-start gap-3"
            >
              <span className="font-bold text-green-600">
                ✓
              </span>

              <span className="text-slate-700">
                {String(feature)}
              </span>
            </li>
          )
        )}
      </ul>
    </div>
  );
}