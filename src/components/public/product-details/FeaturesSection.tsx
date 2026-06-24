import { CheckCircle2 } from "lucide-react";

interface Props {
  features: unknown;
}

export default function FeaturesSection({
  features,
}: Props) {
  if (!features) {
    return null;
  }

  const featuresArray = Array.isArray(
    features
  )
    ? features
    : typeof features === "object"
    ? Object.values(
        features as Record<
          string,
          string
        >
      )
    : [];

  if (
    !featuresArray ||
    featuresArray.length === 0
  ) {
    return null;
  }

  return (
    <section className="mt-12">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-[#0F2747]">
          Key Features
        </h2>

        <p className="mt-2 text-slate-600">
          Designed for reliable
          industrial automation
          performance.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {featuresArray.map(
          (feature, index) => (
            <div
              key={index}
              className="
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-5
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#0F2747]
                hover:shadow-lg
              "
            >
              <div className="flex items-start gap-3">
                <div
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    bg-green-100
                  "
                >
                  <CheckCircle2
                    size={18}
                    className="text-green-600"
                  />
                </div>

                <span className="font-medium text-slate-700">
                  {String(feature)}
                </span>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}