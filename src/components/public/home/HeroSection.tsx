import Link from "next/link";
import {
ArrowRight,
CheckCircle2,
Factory,
ShieldCheck,
Headphones,
Settings,
} from "lucide-react";

export default function HeroSection() {
return ( <section className="relative overflow-hidden bg-white">
{/* Background Pattern */}

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

  <div className="absolute -top-20 left-0 h-72 w-72 rounded-full bg-orange-100 blur-3xl" />

  <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-100 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8 lg:py-4">
    <div className="grid items-center gap-12 lg:grid-cols-2">
      {/* Left Content */}

      <div>
        <div
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
          Industrial Automation Solutions
        </div>

        <h1
          className="
            mt-6
            text-4xl
            font-bold
            leading-tight
            text-[#0F2747]
            md:text-5xl
            lg:text-3xl
            mb-4
          "
        >
          Smart Industrial Automation
          Solutions For Modern
          Manufacturing
        </h1>

        <h2
          className="
            mt-6
            max-w-2xl
            text-lg
            leading-8
            text-slate-600
          "
        >
          Delivering reliable industrial
          automation systems, control
          panels, PLC solutions, SCADA
          systems, drives, sensors and
          engineering services for modern
          industries.
        </h2>

        {/* CTA */}

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          
          <Link
            href="/products"
            className="
              inline-flex
              items-center
              justify-center
              rounded-xl
              border
              border-slate-300
              px-6
              py-4
              font-semibold
              text-slate-700
              transition
              hover:border-[#0F2747]
              hover:text-[#0F2747]
            "
          >
            Explore Products
            <ArrowRight
              size={18}
              className="ml-2"
            />
          </Link>
          
        </div>

        {/* Trust Points */}

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="flex items-center gap-3">
            <CheckCircle2
              size={18}
              className="text-green-600"
            />
            <span className="text-sm font-medium">
              Experienced Team
            </span>
          </div>

          <div className="flex items-center gap-3">
            <CheckCircle2
              size={18}
              className="text-green-600"
            />
            <span className="text-sm font-medium">
              Quality Products
            </span>
          </div>

          <div className="flex items-center gap-3">
            <CheckCircle2
              size={18}
              className="text-green-600"
            />
            <span className="text-sm font-medium">
              Technical Support
            </span>
          </div>

          <div className="flex items-center gap-3">
            <CheckCircle2
              size={18}
              className="text-green-600"
            />
            <span className="text-sm font-medium">
              Fast Response
            </span>
          </div>
        </div>
      </div>

      {/* Right Side Industrial Block */}

      <div>
        <div
          className="
            rounded-3xl
            border
            border-slate-200
            bg-gradient-to-br
            from-white
            to-slate-50
            p-8
            shadow-xl
          "
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div
              className="
                rounded-2xl
                border
                p-5
                transition
                hover:-translate-y-1
                hover:shadow-lg
              "
            >
              <Settings
                className="mb-3 text-[#0F2747]"
              />
              <h3 className="font-semibold">
                PLC Systems
              </h3>
            </div>

            <div
              className="
                rounded-2xl
                border
                p-5
                transition
                hover:-translate-y-1
                hover:shadow-lg
              "
            >
              <Factory
                className="mb-3 text-[#0F2747]"
              />
              <h3 className="font-semibold">
                Control Panels
              </h3>
            </div>

            <div
              className="
                rounded-2xl
                border
                p-5
                transition
                hover:-translate-y-1
                hover:shadow-lg
              "
            >
              <ShieldCheck
                className="mb-3 text-[#0F2747]"
              />
              <h3 className="font-semibold">
                SCADA Solutions
              </h3>
            </div>

            <div
              className="
                rounded-2xl
                border
                p-5
                transition
                hover:-translate-y-1
                hover:shadow-lg
              "
            >
              <Headphones
                className="mb-3 text-[#0F2747]"
              />
              <h3 className="font-semibold">
                Engineering Support
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Statistics Strip */}

    
  </div>
</section>


);
}
