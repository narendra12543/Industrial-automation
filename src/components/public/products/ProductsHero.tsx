import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface ProductsHeroProps {
  totalProducts: number;
  totalCategories: number;
  featuredProducts: number;
}

export default function ProductsHero({
 
}: ProductsHeroProps) {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-8">
      <div className="absolute -top-20 left-0 h-72 w-72 rounded-full bg-orange-100 blur-3xl" />
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-100 blur-3xl" />

      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="
            h-full
            w-full
            bg-[linear-gradient(to_right,#0F2747_1px,transparent_1px),linear-gradient(to_bottom,#0F2747_1px,transparent_1px)]
            bg-[size:60px_60px]
          "
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4">
      
        <h1 className="text-3xl font-bold text-[#0F2747] md:text-3xl">
          Industrial Automation Products
        </h1>

        <p className="mt-2 max-w-2xl text-md text-slate-600">
          Explore our complete range of
          industrial automation products,
          gate automation systems,
          boom barriers, rolling shutters,
          control systems and engineering
          solutions.
        </p>
        
      </div>
    </section>
  );
}   