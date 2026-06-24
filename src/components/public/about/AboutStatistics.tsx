const stats = [
  {
    value: "500+",
    label: "Products Delivered",
  },
  {
    value: "25+",
    label: "Industries Served",
  },
  {
    value: "24/7",
    label: "Support Availability",
  },
  {
    value: "98%",
    label: "Customer Satisfaction",
  },
];

export default function AboutStatistics() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center text-3xl font-bold text-[#0F2747]">
          Company Statistics
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
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
              <div className="text-4xl font-bold text-[#0F2747]">
                {item.value}
              </div>

              <div className="mt-3 text-slate-600">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}