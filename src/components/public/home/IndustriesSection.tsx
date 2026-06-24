import {
  Factory,
  Package,
  UtensilsCrossed,
  Car,
  Pill,
  Droplets,
} from "lucide-react";

const industries = [
  {
    name: "Manufacturing",
    icon: Factory,
  },
  {
    name: "Packaging",
    icon: Package,
  },
  {
    name: "Food Processing",
    icon: UtensilsCrossed,
  },
  {
    name: "Automotive",
    icon: Car,
  },
  {
    name: "Pharmaceuticals",
    icon: Pill,
  },
  {
    name: "Water Treatment",
    icon: Droplets,
  },
];

export default function IndustriesSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center text-3xl font-bold text-[#0F2747]">
          Industries We Serve
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="
                rounded-2xl
                border
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

              <h3 className="mt-4 font-semibold">
                {industry.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}