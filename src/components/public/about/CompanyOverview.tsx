export default function CompanyOverview() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-2xl border p-8">
            <h3 className="mb-4 text-xl font-bold text-[#0F2747]">
              Company Introduction
            </h3>

            <p className="text-slate-600">
              We provide industrial
              automation solutions,
              entrance automation,
              control systems and
              engineering services for
              businesses seeking reliable
              automation technology.
            </p>
          </div>

          <div className="rounded-2xl border p-8">
            <h3 className="mb-4 text-xl font-bold text-[#0F2747]">
              Our Mission
            </h3>

            <p className="text-slate-600">
              To help industries improve
              productivity, efficiency and
              operational excellence
              through innovative
              automation solutions.
            </p>
          </div>

          <div className="rounded-2xl border p-8">
            <h3 className="mb-4 text-xl font-bold text-[#0F2747]">
              Our Vision
            </h3>

            <p className="text-slate-600">
              To become a trusted
              industrial automation
              partner known for quality,
              innovation and customer
              satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}