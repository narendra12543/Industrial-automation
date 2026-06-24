import {
  Factory,
  Package,
  Car,
  UtensilsCrossed,
  Pill,
  Droplets,
} from "lucide-react";

const industries = [
  {
    title: "Manufacturing",
    icon: Factory,
  },
  {
    title: "Packaging",
    icon: Package,
  },
  {
    title: "Automotive",
    icon: Car,
  },
  {
    title: "Food Processing",
    icon: UtensilsCrossed,
  },
  {
    title: "Pharmaceuticals",
    icon: Pill,
  },
  {
    title: "Water Treatment",
    icon: Droplets,
  },
];

export default function AboutIndustries() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center text-3xl font-bold text-[#0F2747]">
          Industries We Serve
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="
                rounded-2xl
                border
                bg-white
                p-8
                text-center
                transition
                hover:shadow-lg
              "
            >
              <industry.icon
                size={42}
                className="mx-auto text-orange-500"
              />

              <h3 className="mt-4 font-semibold text-[#0F2747]">
                {industry.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}