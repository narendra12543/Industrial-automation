import { auth } from "@/lib/auth";

export default async function AdminAnalyticsPage() {
  const session = await auth();
  const user = session?.user;

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            Analytics Dashboard
          </h1>

          <p className="mt-2 text-slate-600">
            Monitor business performance, enquiries, products,
            and user activity.
          </p>
        </div>

        {/* Admin Information Card */}
        <div className="mb-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 bg-[#0F2747] px-6 py-4">
            <h2 className="text-lg font-semibold text-white">
              Administrator Information
            </h2>
          </div>

          <div className="grid gap-6 p-6 md:grid-cols-3">
            <div>
              <p className="text-sm font-medium text-slate-500">
                Name
              </p>

              <p className="mt-1 font-semibold text-slate-900">
                {user.name}
              </p>
            </div>

            <div>
              <p className="text-sm font-medium text-slate-500">
                Email
              </p>

              <p className="mt-1 font-semibold text-slate-900">
                {user.email}
              </p>
            </div>

            <div>
              <p className="text-sm font-medium text-slate-500">
                Role
              </p>

              <span className="mt-1 inline-flex rounded-full bg-orange-50 px-3 py-1 text-sm font-semibold text-orange-600">
                {user.role}
              </span>
            </div>
          </div>
        </div>

        {/* Analytics Overview */}
        <div className="mb-8">
          <h2 className="mb-4 text-xl font-semibold text-slate-900">
            Analytics Overview
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {[
              "Total Products",
              "Total Categories",
              "Total Enquiries",
              "Total Users",
              "Downloads",
              "Conversion Rate",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-sm font-medium text-slate-500">
                  {item}
                </p>

                <p className="mt-4 text-lg font-semibold text-slate-900">
                  Coming Soon
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Analytics Chart Placeholder */}
        <div className="mb-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-6 py-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-slate-900">
                Performance Analytics
              </h2>

              <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-orange-600">
                Coming Soon
              </span>
            </div>
          </div>

          <div className="flex h-80 items-center justify-center p-6">
            <div className="w-full rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 p-10 text-center">
              <p className="text-lg font-medium text-slate-700">
                Analytics data will be available after business
                modules are implemented.
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Charts, trends, KPIs, and reporting dashboards
                will appear here.
              </p>
            </div>
          </div>
        </div>

        {/* Future Reports */}
        <div>
          <h2 className="mb-4 text-xl font-semibold text-slate-900">
            Reports
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {[
              "Lead Reports",
              "Product Reports",
              "User Activity Reports",
              "Download Reports",
            ].map((report) => (
              <div
                key={report}
                className="rounded-2xl border border-dashed border-slate-300 bg-white p-6"
              >
                <h3 className="font-semibold text-slate-900">
                  {report}
                </h3>

                <p className="mt-3 text-sm text-slate-600">
                  Detailed reporting functionality will be
                  available in a future module.
                </p>

                <span className="mt-4 inline-flex rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-orange-600">
                  Coming Soon
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}