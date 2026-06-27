import Link from "next/link";
import {
ArrowRight,
CheckCircle2,

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
        bg-[size:60px_60px]
      "
    />
  </div>

  <div className="absolute -top-20 left-0 h-72 w-72 rounded-full bg-orange-100 blur-3xl" />

  <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-100 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8 lg:py-4 ">
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.6fr)_380px] lg:items-start">
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
            mt-4  
            text-3xl
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
            mt-2
            max-w-2xl
            text-md
            leading-8
            text-slate-600
          "
        >
          We specialize in delivering advanced industrial automation solutions
          for manufacturing plants, warehouses, commercial facilities and
          infrastructure projects. Our expertise includes PLC & SCADA systems,
          electrical control panels, industrial IoT integration, sensors,
          automation drives, gate automation, boom barriers, rolling shutters,
          access control systems and customized engineering services. With a
          strong focus on quality, innovation and customer satisfaction, we help
          businesses achieve safer operations, higher productivity and long-term
          operational excellence.
        </h2>

        {/* CTA */}

        <div className="mt-4 flex flex-col gap-4 sm:flex-row">
          
          <Link
            href="/products"
            className="
              group
              inline-flex
              items-center
              justify-center
              rounded-xl
              border
              border-[#0F2747]
              bg-white
              px-6
              py-3
              font-semibold
              text-[#0F2747]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-[#0F2747]
              hover:text-white
              hover:shadow-xl
            "
          >
            Explore Products

            <ArrowRight
              size={18}
              className="
                ml-2
                transition-transform
                duration-300
                group-hover:translate-x-2
              "
            />
          </Link>
          
        </div>

        {/* Trust Points */}

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
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

      {/* Right Side Assistance Card */}

      <div className="hidden lg:block">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
          {/* Header */}
          
          <div className="bg-[#1b3558] p-6 text-white">
            <h3 className="text-2xl font-bold">
              Need Assistance?
            </h3>

            <p className="mt-2 text-sm text-slate-200 leading-6">
              Speak with our industrial automation experts for
              product selection, technical guidance and project
              consultation.
            </p>
          </div>

          {/* Body */}

          <div className="p-6">

            <div className="space-y-5">

              <div className="flex items-start gap-3">
                <div className="rounded-full bg-green-100 p-2">
                  <ShieldCheck
                    size={18}
                    className="text-green-600"
                  />
                </div>

                <div>
                  <h4 className="font-semibold text-[#0F2747]">
                    Quality Assured
                  </h4>

                  <p className="mt-1 text-sm text-slate-600">
                    Reliable industrial automation products
                    from trusted manufacturers.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="rounded-full bg-blue-100 p-2">
                  <Headphones
                    size={18}
                    className="text-blue-600"
                  />
                </div>

                <div>
                  <h4 className="font-semibold text-[#0F2747]">
                    Technical Support
                  </h4>

                  <p className="mt-1 text-sm text-slate-600">
                    Our engineering team helps you choose the
                    right automation solution.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="rounded-full bg-orange-100 p-2">
                  <Settings
                    size={18}
                    className="text-orange-600"
                  />
                </div>

                <div>
                  <h4 className="font-semibold text-[#0F2747]">
                    Fast Response
                  </h4>

                  <p className="mt-1 text-sm text-slate-600">
                    Get quotations and technical assistance
                    within a short turnaround time.
                  </p>
                </div>
              </div>

            </div>

            {/* Buttons */}

            <div className="mt-8 space-y-3">

              <Link
                href="/contact"
                className="
                  block
                  rounded-xl
                  bg-[#1b3558]
                  px-6
                  py-4
                  text-center
                  font-semibold
                  text-white
                  transition
                  hover:bg-[#173865]
                "
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>    
  </div>
</section>
);
}
