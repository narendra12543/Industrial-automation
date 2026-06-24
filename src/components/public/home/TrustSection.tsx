import {
  ShieldCheck,
  Factory,
  Wrench,
  Headphones,
} from "lucide-react";

const trustItems = [
  {
    title: "Quality Assurance",
    icon: ShieldCheck,
    description:
      "Reliable industrial automation products tested for performance.",
  },
  {
    title: "Reliable Automation",
    icon: Factory,
    description:
      "Automation solutions designed for industrial environments.",
  },
  {
    title: "Industrial Expertise",
    icon: Wrench,
    description:
      "Experienced engineering team for automation projects.",
  },
  {
    title: "Technical Support",
    icon: Headphones,
    description:
      "Dedicated support for installation and maintenance.",
  },
];

export default function TrustSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0F2747]">
            Trusted Industrial Partner
          </h2>

          <p className="mt-4 text-slate-600">
            Delivering dependable automation
            solutions across industries.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => (
            <div
              key={item.title}
              className="
                rounded-2xl
                border
                bg-white
                p-6
                shadow-sm
                transition
                hover:-translate-y-1
                hover:shadow-lg
              "
            >
              <item.icon
                className="mb-4 text-[#0F2747]"
                size={32}
              />

              <h3 className="font-semibold">
                {item.title}
              </h3>

              <p className="mt-3 text-sm text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}