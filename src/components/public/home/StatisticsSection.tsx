export default function StatisticsSection() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div
          className="
            grid
            gap-6
            rounded-3xl
            bg-[#0F2747]
            p-10
            text-white
            md:grid-cols-4
          "
        >
          <div className="text-center">
            <div className="text-4xl font-bold">
              500+
            </div>

            <p className="mt-2">
              Products Installed
            </p>
          </div>

          <div className="text-center">
            <div className="text-4xl font-bold">
              100+
            </div>

            <p className="mt-2">
              Industrial Clients
            </p>
          </div>

          <div className="text-center">
            <div className="text-4xl font-bold">
              24/7
            </div>

            <p className="mt-2">
              Technical Support
            </p>
          </div>

          <div className="text-center">
            <div className="text-4xl font-bold">
              99%
            </div>

            <p className="mt-2">
              Quality Commitment
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}