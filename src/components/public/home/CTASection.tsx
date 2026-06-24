import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div
          className="
            overflow-hidden
            rounded-3xl
            bg-[#0F2747]
            px-8
            py-14
            text-center
            text-white
          "
        >
          <h2 className="text-3xl font-bold">
            Need Industrial Automation
            Solutions?
          </h2>

          <p className="mt-4 text-slate-200">
            Talk with our experts and get
            the right automation solution
            for your business.
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
                text-white
                transition
                hover:bg-white
                hover:text-[#0F2747]
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