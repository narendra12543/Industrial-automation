import Link from "next/link";

export default function ProductsCTA() {
  return (
    <section className="py-6">
      <div className="mx-auto max-w-4xl px-4">
        <div
          className="
            rounded-3xl
            bg-[#0F2747]
            px-8
            py-12
            text-center
            text-white
          "
        >
          <h2 className="text-2xl font-bold">
            Need Help Choosing A Product?
          </h2>

          <p className="mt-4 text-slate-200">
            Our experts can help you select
            the right industrial automation
            solution.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="
                rounded-xl
                border
                border-white
                px-6
                py-3
                font-semibold
              "
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}