const values = [
  "Integrity",
  "Innovation",
  "Quality",
  "Reliability",
];

export default function CompanyValues() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center text-3xl font-bold text-[#0F2747]">
          Company Values
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div
              key={value}
              className="
                rounded-2xl
                border
                bg-white
                p-8
                text-center
                shadow-sm
                transition
                hover:shadow-lg
              "
            >
              <h3 className="font-semibold text-[#0F2747]">
                {value}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}