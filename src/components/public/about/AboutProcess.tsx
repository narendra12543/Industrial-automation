const steps = [
  "Consultation",
  "Planning",
  "Implementation",
  "Testing",
  "Support",
];

export default function AboutProcess() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center text-3xl font-bold text-[#0F2747]">
          Our Process
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-5">
          {steps.map((step, index) => (
            <div
              key={step}
              className="
                rounded-2xl
                border
                p-8
                text-center
                shadow-sm
                transition
                hover:shadow-lg
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
                  bg-orange-500
                  font-bold
                  text-white
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