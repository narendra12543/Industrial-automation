const steps = [
  "Consultation",
  "Planning",
  "Implementation",
  "Support",
];

export default function ProcessSection() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center text-3xl font-bold text-[#0F2747]">
          Our Working Process
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step}
              className="
                rounded-2xl
                border
                bg-white
                p-8
                text-center
              "
            >
              <div
                className="
                  mx-auto
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-[#0F2747]
                  text-white
                  font-bold
                "
              >
                {index + 1}
              </div>

              <h3 className="mt-4 font-semibold">
                {step}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}