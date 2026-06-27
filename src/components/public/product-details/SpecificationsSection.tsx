interface Props {
  specifications: unknown;
}

export default function SpecificationsSection({
  specifications,
}: Props) {
  if (!specifications) {
    return null;
  }

  let specs: Record<
    string,
    unknown
  > = {};

  try {
    if (
      typeof specifications ===
      "string"
    ) {
      specs = JSON.parse(
        specifications
      );
    } else {
      specs =
        specifications as Record<
          string,
          unknown
        >;
    }
  } catch {
    return null;
  }

  if (
    Object.keys(specs).length === 0
  ) {
    return null;
  }

  return (
    <section className="mt-8">
      <h2 className="mb-6 text-2xl font-bold text-[#0F2747]">
        Technical Specifications
      </h2>

      <div className=" rounded-2xl border bg-white">
        {Object.entries(specs).map(
          ([key, value]) => (
            <div
              key={key}
              className="
                flex
                items-center
                justify-between
                border-b
                px-8
                py-4
              "
            >
              <span className="font-medium text-slate-600 capitalize">
                {key}
              </span>

              <span className="font-semibold text-[#0F2747]">
                {String(value)}
              </span>
            </div>
          )
        )}
      </div>
    </section>
  );
}