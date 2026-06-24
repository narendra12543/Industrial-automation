import {
  Factory,
  Package,
  Cog,
  Building2,
} from "lucide-react";

interface Props {
  applications: unknown;
}

export default function ApplicationsSection({
  applications,
}: Props) {
  if (!applications) {
    return null;
  }

  const applicationsArray =
    Array.isArray(applications)
      ? applications
      : typeof applications ===
        "object"
      ? Object.values(
          applications as Record<
            string,
            string
          >
        )
      : [];

  if (
    !applicationsArray ||
    applicationsArray.length === 0
  ) {
    return null;
  }

  const icons = [
    Factory,
    Package,
    Cog,
    Building2,
  ];

  return (
    <section className="mt-12">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-[#0F2747]">
          Applications
        </h2>

        <p className="mt-2 text-slate-600">
          Suitable for multiple
          industrial environments.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {applicationsArray.map(
          (
            application,
            index
          ) => {
            const Icon =
              icons[
                index %
                  icons.length
              ];

            return (
              <div
                key={index}
                className="
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-5
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-orange-400
                  hover:shadow-lg
                "
              >
                <Icon
                  size={24}
                  className="text-orange-500"
                />

                <p className="mt-3 font-medium text-[#0F2747]">
                  {String(
                    application
                  )}
                </p>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
}