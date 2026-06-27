import ContactForm from "@/components/public/contact/ContactForm";
import GoogleMapSection from "@/components/public/contact/GoogleMapSection";

export default function ContactPage() {
  return (
    <>
      {/* Contact Section */}

      <section className="relative overflow-hidden bg-slate-50 py-4">
        {/* Background Decoration */}

        <div className="absolute -top-24 left-0 h-80 w-80 rounded-full bg-orange-100 blur-3xl" />

        <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-blue-100 blur-3xl" />

        <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-slate-100 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4">
          <span
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-orange-200
              bg-orange-50
              px-4
              py-2
              text-sm
              font-medium
              text-orange-700
            "
          >
            Contact Our Experts
          </span>
          {/* Section Heading */}

          <div className="mb-12 text-center">
            <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
              Contact Us  
            </span>

            <h2 className="mt-5 text-3xl font-bold text-[#0F2747]">
              Let's Discuss Your Industrial Automation Requirements
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-md leading-8 text-slate-600">
              Whether you need product information, technical support,
              project consultation or a customized automation solution,
              our experts are ready to assist you.
            </p>
          </div>

          {/* Form + Map */}

          <div className="grid gap-8 lg:grid-cols-[1fr_500px]">
            <ContactForm />

            <GoogleMapSection />
          </div>
        </div>
      </section>
    </>
  );
}