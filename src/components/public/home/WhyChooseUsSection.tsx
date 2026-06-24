import {
  Users,
  Shield,
  Truck,
  LifeBuoy,
} from "lucide-react";

const features = [
  {
    title: "Experienced Engineers",
    icon: Users,
  },
  {
    title: "Quality Products",
    icon: Shield,
  },
  {
    title: "Fast Delivery",
    icon: Truck,
  },
  {
    title: "Dedicated Support",
    icon: LifeBuoy,
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center text-3xl font-bold text-[#0F2747]">
          Why Choose Us
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((item) => (
            <div
              key={item.title}
              className="
                rounded-2xl
                border
                p-8
                text-center
                transition
                hover:shadow-lg
              "
            >
              <item.icon
                size={42}
                className="mx-auto text-orange-500"
              />

              <h3 className="mt-4 font-semibold">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}