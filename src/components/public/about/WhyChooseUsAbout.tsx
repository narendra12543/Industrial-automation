import {
  Users,
  Shield,
  Wrench,
  Headphones,
  Truck,
  HeartHandshake,
} from "lucide-react";

const features = [
  {
    title: "Experienced Team",
    icon: Users,
  },
  {
    title: "Quality Products",
    icon: Shield,
  },
  {
    title: "Automation Expertise",
    icon: Wrench,
  },
  {
    title: "Technical Support",
    icon: Headphones,
  },
  {
    title: "Timely Delivery",
    icon: Truck,
  },
  {
    title: "Customer Focus",
    icon: HeartHandshake,
  },
];

export default function WhyChooseUsAbout() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center text-3xl font-bold text-[#0F2747]">
          Why Choose Us
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((item) => (
            <div
              key={item.title}
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
              <item.icon
                size={40}
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